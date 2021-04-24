import React from 'react';
import {View} from 'react-native';
import Unit from './Exercise.Unit';

const Exercise = () => {
    return (
        <View>
            <Unit 
                title="Test Exercise"
                content="THis is a text exercise"
                videoId="84WIaK3bl_s"
            />
        </View>
    );
}

export default Exercise;