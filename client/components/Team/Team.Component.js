import React from 'react';
import {ScrollView, View} from 'react-native'
import styles from './Team.Style'
import Buttons from './ButtonGroup'
import user from '../../utils/user'

import Team from './Team.Unit'
import request from '../../utils/request'

const Teams = () => {

    const [selectedIndex, _setSelectedIndex] = React.useState(0);
    const [teams, setTeams] = React.useState([]);
    const [teamsToView, _setTeamsToView] = React.useState([]);

    const setTeamsToView = (teams, index=selectedIndex) => {
        let _teams = teams.filter(team => {
            if (index === 0) {
                return true
            }
            else if (index === 1) {
                return team.members.indexOf(user._id) > -1;
            }
        });

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

    return (
        <View
            style={styles.container}
        >
            <Buttons
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
            />
            <ScrollView>
                {
                    teamsToView.map(team => {
                        return (
                            <Team
                                name={team.name}
                                memberCount={team.members.length}
                                mine={user._id === team.owner}
                            />
                        )
                    })
                }
            </ScrollView>
        </View>
    );

}

export default Teams;