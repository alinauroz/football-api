import React from 'react';
import { Card } from 'react-native-elements';
import { Text, Image, View, Dimensions } from 'react-native'
import teamLogo from '../../res/team-logo.png'
import styles from './Team.Style'

import MemberRequestButton from './Button.Request.Member'
import MatchRequestButton from './Button.Request.Match'

const Team = (props) => {

    return (
        <Card>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row'
                }}
            >
            <View 
                style={{
                    width: (Dimensions.get('window').width - 30) * 0.3,
                    height: (Dimensions.get('window').width - 30) * 0.3,
                }}
            >
                <Image 
                    style={{
                        width: '80%',
                        height: '80%',
                        resizeMode: 'contain',
                        marginTop: '10%'
                    }}
                    source={teamLogo}
                />
            </View>
            <View style={{
                width: (Dimensions.get('window').width) * 0.7 - 90,
            }}>
                <Text style={styles.teamName}>Team Name</Text>
                <Text style={styles.memberCount}>12 members</Text>
                <View 
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        marginTop: 10,
                        width: (Dimensions.get('window').width) * 0.7 - 90,
                    }}
                >
                    {
                        props.mine ? 
                        (null):
                        (
                            <>
                            <MemberRequestButton />
                            <MatchRequestButton/>
                            </>
                        )
                    }
                </View>
            </View>
            </View>
        </Card>
    );

}

export default Team;