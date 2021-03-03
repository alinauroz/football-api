import React from 'react';
import {ScrollView, View} from 'react-native'
import styles from './Dashboard.Style'

import Buttons from './Buttons'

const Dashbaord = () => {

    return (
        <ScrollView
            style={styles.container}
        >
            <View>
                <Buttons/>
            </View>
        </ScrollView>
        )

}

export default Dashbaord;