import React from 'react';
import { ScrollView, View } from 'react-native';
import { Overlay } from 'react-native-elements';
import styles from './Dashboard.Style';
import CreateTeamForm from '../Team/Team.Create'

import Buttons from './Buttons'

const Dashbaord = () => {

    return (
        <ScrollView
            style={styles.container}
        >
            <Overlay
                isVisible={true}
            >
                <CreateTeamForm/>
            </Overlay>
            <View>
                <Buttons/>
            </View>
        </ScrollView>
        )

}

export default Dashbaord;