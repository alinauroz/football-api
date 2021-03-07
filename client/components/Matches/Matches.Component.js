import React, {useState} from 'react';
import { ScrollView, View } from 'react-native';
import ButtonGroup from './ButtonGroup';
import PastMatch from './Matches.Past.Unit';
import UpcomingMatch from './Matches.Upcoming.Unit';
import LiveMatch from './Matches.Live.Unit';
import request from '../../utils/request';

const Matches = (props) => {

    const [matches, setMatches] = React.useState([]);
    const [matchesToView, setMatchesToView] = React.useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [sendMatchRequestModal, setSendMatchRequestModal] = useState(false);

    filterMatches = (_matches=matches, index=selectedIndex) => {
        let __matches;
        let now = Date.now();
        if (selectedIndex === 0) {
            __matches = __matches.filter(match => match.time > now);
        }
        else if (selectedIndex === 1) {
            __matches = __matches.filter(match => match.isLive)
        }
        else if (selectedIndex === 2) {
            __matches = __matches.filter(match => (match.time < now) && !match.isLive)
        }
        setMatchesToView(__matches);
    }

    const getMatches = async () => {
        let res = await request({
            route: 'matches',
            type: 'GET',
        });
        console.log("MATCHES")
        console.log(res);
        if (res.status === 'success') {
            setMatches(res.data);
            setMatchesToView(res.data);
            filterMatches(res.data);
        }
    }

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
                            return matchesToView.map(() => {
                                return (
                                    <UpcomingMatch />
                                )
                            })
                        } 
                        else if (selectedIndex === 1) {
                            return matchesToView.map(() => {
                                return (
                                    <LiveMatch />
                                )
                            })
                        } 
                        else if (selectedIndex === 2) {
                            return matchesToView.map(() => {
                                return (
                                    <PastMatch />
                                )
                            })
                        } 
                    })()
                }
            </ScrollView>
        </View>
    )

}

export default Matches;