import React, {useState} from 'react';
import { ScrollView, View } from 'react-native';
import ButtonGroup from './ButtonGroup';
import PastMatch from './Matches.Past.Unit';
import UpcomingMatch from './Matches.Upcoming.Unit';
import LiveMatch from './Matches.Live.Unit';
import request from '../../utils/request';
import socket from '../../utils/socket.io';
import Toast from 'react-native-toast-message';
import { countGoals } from '../../utils/summaryParser';
import { getTeamById } from '../../utils/getTeams';

const Matches = (props) => {

    const [matches, setMatches] = React.useState([]);
    const [matchesToView, setMatchesToView] = React.useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [sendMatchRequestModal, setSendMatchRequestModal] = useState(false);

    filterMatches = (_matches=matches, index=selectedIndex) => {
        let __matches;
        let now = Date.now();
        if (selectedIndex === 0) {
            __matches = _matches.filter(match => match.time > now);
        }
        else if (selectedIndex === 1) {
            __matches = _matches.filter(match => match.isLive)
        }
        else if (selectedIndex === 2) {
            __matches = _matches.filter(match => (match.time < now) && !match.isLive)
        }
        setMatchesToView(__matches);
    }

    const getMatches = async () => {
        let res = await request({
            route: 'matches',
            type: 'GET',
        });
        
        if (res.status === 'success') {
            setMatches(res.data);
            setMatchesToView(res.data);
            filterMatches(res.data);
        }

    }

    const handleUpdateLiveEvent = (matchId, status) => {

            for (let i = 0; i < matches.length; i++) {
                if (matches[i]._id == matchId) {
                    matches[i].isLive = status;
                    break;
                }
            }
            setMatches(matches);
            filterMatches(matches);
    }

    const handleUpdateGoal= (matchId, team, data={}) => {

        for (let i = 0; i < matches.length; i++) {
            if (matches[i]._id == matchId) {
                let match = matches[i];
                    match.summary.push({
                        action: 'goal',
                        team: team
                    });
                break;
            }
        }
        setMatches([ ... matches]);
        filterMatches(matches);
    }


    React.useEffect(() => {
        socket.on('updateLive', function(data) {
            if (data.status) {
                Toast.show({
                    text1: 'A match is live now'
                })
            }
            handleUpdateLiveEvent(data.matchId, data.status)
        });
        socket.once('goal', function (data) {
            handleUpdateGoal(data.matchId, data.team);
        });
    }, [matches]);

    React.useEffect(() => {
        filterMatches();
    }, [selectedIndex])

    React.useEffect(() => {
        getMatches();
    }, [])

    return (
        <View
            style={{
                width: '100%',
                height: '100%',
                backgroundColor: 'white'
            }}
        >
            <View>
                <ButtonGroup 
                    selectedIndex={selectedIndex}
                    setSelectedIndex={(index) => setSelectedIndex(index)}
                />
            </View>
            <ScrollView
                style={{
                    paddingBottom: 20,
                }}
            >
                {
                    (() => {
                        if (selectedIndex === 0) {
                            return matchesToView.map((match) => {
                                return (
                                    <UpcomingMatch
                                        goals={countGoals(match.summary, match.team1, match.team2)}
                                        teamA={getTeamById(match.team1)}
                                        teamB={getTeamById(match.team2)}
                                        summary={match.summary}
                                        key={match._id}
                                    />
                                )
                            })
                        } 
                        else if (selectedIndex === 1) {
                            return matchesToView.map((match) => {
                                console.log(match.time)
                                return (
                                    <LiveMatch
                                        goals={countGoals(match.summary, match.team1, match.team2)}
                                        teamA={getTeamById(match.team1)}
                                        teamB={getTeamById(match.team2)}
                                        summary={match.summary}
                                        location={match.venue}
                                        date={match.time}
                                        key={match._id}
                                    />
                                )
                            })
                        } 
                        else if (selectedIndex === 2) {
                            return matchesToView.map((match) => {
                                return (
                                    <PastMatch
                                    goals={countGoals(match.summary, match.team1, match.team2)}
                                    teamA={getTeamById(match.team1) || {}}
                                    teamB={getTeamById(match.team2) || {}}
                                    summary={match.summary}
                                    location={match.venue}
                                    date={match.time}
                                    key={match._id}
                                    />
                                )
                            })
                        } 
                    })()
                }
            </ScrollView>
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </View>
    )

}

export default Matches;