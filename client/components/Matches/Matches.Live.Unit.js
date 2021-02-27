import React from 'react';
import {Card} from 'react-native-elements';
import {Image, Text, View} from 'react-native';
import styles, { halfWidth } from './Matches.Style';
import TeamLogo from '../../res/team-logo.png';

const PastMatch = (props) => {

    return (
        <Card>
            <View style={styles.matchTeamsContainer}>
            <View style={styles.matchTeamContainer}>
                <Image 
                    source={TeamLogo}
                    style={{
                        width: halfWidth,
                        height: halfWidth,
                        resizeMode: 'contain'
                    }}
                />
                <Text style={styles.teamName}>Team A</Text>
                <Text style={styles.teamGoals}>3</Text>
            </View>
            <Text
                style={styles.vsContainer}
            >vs</Text>
            <View style={styles.matchTeamContainer}>
                <Image 
                    source={TeamLogo}
                    style={{
                        width: halfWidth,
                        height: halfWidth,
                        resizeMode: 'contain'
                    }}
                />
                <Text style={styles.teamName}>Team B</Text>
                <Text style={styles.teamGoals}>2</Text>
            </View>
            </View>
            <Card.Divider/>
            <View style={styles.matchTeamsContainer}>
                <Text style={styles.matchLocation}>Location, City</Text>
                <Text style={styles.matchDate}>Feb 20</Text>
            </View>
        </Card>
    )

}

export default PastMatch;
