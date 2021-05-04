import React from 'react';
import { ScrollView, Text } from 'react-native';
import Unit from './Injuries.Unit';
import styles from './Injuries.Style'
import request from '../../utils/request';
import Header from '../Basic/Header/Header.Component';

const Injuries = () => {

    const [data, setData] = React.useState([]);
    const [detailId, setDetailId] = React.useState(null);

    React.useEffect(() => {
        request({
            route: 'exercise',
        }).then(data => {
            setData(data.data)
        })
    }, []);

    if (detailId !== null) {
        return (
            <ScrollView>
                <Header
                    onIconClick={() => setDetailId(null)}
                    iconName="chevron-left"
                    title="Injuries"
                />
            </ScrollView>
        )
    }

    return (
        <ScrollView>
            <Text style={styles.header}>Injuries</Text>
            {
                data.map((exercise, index) => {
                    return (
                    <Unit 
                        title={exercise.title}
                        description={exercise.description}
                        videoId={exercise.videoId}
                        onClick={() => setDetailId(index)}
                    />
                    )
                })
            }
        </ScrollView>
    );
}

export default Injuries;