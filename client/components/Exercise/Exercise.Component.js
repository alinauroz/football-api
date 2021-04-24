import React from 'react';
import { ScrollView, Text } from 'react-native';
import Unit from './Exercise.Unit';
import styles from './Exercise.Style'
import request from '../../utils/request';

const Exercise = () => {

    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        request({
            route: 'exercise',
        }).then(data => {
            setData(data.data)
        })
    }, []);

    return (
        <ScrollView>
            <Text style={styles.header}>Exercises</Text>
            {
                data.map(exercise => {
                    return (
                    <Unit 
                        title={exercise.title}
                        description={exercise.description}
                        videoId={exercise.videoId}
                    />
                    )
                })
            }
        </ScrollView>
    );
}

export default Exercise;