import React from 'react';
import { ScrollView, Text } from 'react-native';
import Unit from './Injuries.Unit';
import styles from './Injuries.Style'
import request from '../../utils/request';

const Injuries = () => {

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
            <Text style={styles.header}>Injuries</Text>
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

export default Injuries;