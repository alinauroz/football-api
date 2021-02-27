import React from 'react';
import {ScrollView, View} from 'react-native'
import styles from './Team.Style'
import Buttons from './ButtonGroup'

import Team from './Team.Unit'

const Teams = () => {

    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const [teams, setTeams] = React.useState(null);

    const getTeams = () => {
        
    }

    React.useEffect(getTeams, [])

    return (
        <View
            style={styles.container}
        >
            <Buttons
                selectedIndex={selectedIndex}
                setSelectedIndex={setSelectedIndex}
            />
            <ScrollView>
                <Team
                    mine={true}
                />
            </ScrollView>
        </View>
    );

}

export default Teams;