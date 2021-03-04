import React from 'react';
import {ScrollView, View, Text} from 'react-native';
import {Overlay} from 'react-native-elements';
import styles from './Team.Style';
import Buttons from './ButtonGroup';
import user from '../../utils/user';

import Team from './Team.Unit';
import MatchRequestUnit from './Request.Match.Unit'
import request from '../../utils/request';
import Toast from 'react-native-toast-message'

import MatchRequestForm from '../Matches/Match.Request'

const Teams = () => {

    const [selectedIndex, _setSelectedIndex] = React.useState(0);
    const [teams, setTeams] = React.useState([]);
    const [teamsToView, _setTeamsToView] = React.useState([]);
    const [toRequestTeam, setToRequestTeamId] = React.useState(null);

    const onMatchRequestSent = () => {
        setToRequestTeamId(null);
        Toast.show({
            text1: 'Request Sent'
        })
    }

    const setTeamsToView = (teams, index=selectedIndex, dontSet) => {
        let _teams = teams.filter(team => {
            if (index === 0) {
                return true
            }
            else if (index === 1) {
                return team.members.indexOf(user._id) > -1;
            }
            else if (index === 2 || index === 3) {
                return team.owner === user._id;
            }
        });
        if (dontSet)
            return _teams;
        else
            _setTeamsToView(_teams);
    }

    const setSelectedIndex = (index) => {
        _setSelectedIndex(index)
        setTeamsToView(teams, index);
    }

    const getTeams = async () => {
        let teams = await request({
            route: 'teams',
            type: 'GET',
        });
        if (teams.data) {
            setTeams(teams.data);
            setTeamsToView(teams.data);
        }
    }

    React.useEffect(() => {
        getTeams();
    }, []);

    const getTeam = (id) => {
        if (teams) {
            let _team = teams.filter(team => team._id == id);
            teams.forEach(t => console.log(">", t._id))
            console.log(_team);
            return _team.length > 0 ? _team[0] : null;
        }
    }

    return (
        <>
        <View
            style={styles.container}
        >
            <Buttons
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
            />
            <Overlay
                isVisible={toRequestTeam !== null}
                onBackdropPress={() => setToRequestTeamId(null)}
            >
                <MatchRequestForm
                    teamId={toRequestTeam}
                    myTeams={setTeamsToView(teams, 2, true)}
                    onSent={onMatchRequestSent}
                />
            </Overlay>
            <ScrollView>
                {
                    teamsToView.map(team => {
                        if (selectedIndex !== 3) {
                            return (
                                <Team
                                    id={team._id}
                                    name={team.name}
                                    memberCount={team.members.length}
                                    mine={user._id === team.owner}
                                    requestSent={team.membersRequest.indexOf(user._id) > -1}
                                    requestMatch={(id) => setToRequestTeamId(id)}
                                />
                            )
                        }
                        else {
                            return team.matchesRequest.map(req => {
                                let requestee = getTeam(req.from);

                                if (!requestee)
                                    return null;

                                return (
                                    <MatchRequestUnit
                                        teamId = {team._id}
                                        requestee={requestee}
                                        location={req.location}
                                        date={req.date}
                                        message={req.message}
                                        request={req}
                                    />
                                );
                            })
                        }
                    })
                }
            </ScrollView>
        </View>
        <Toast ref={(ref) => Toast.setRef(ref)} />
        </>
    );

}

export default Teams;