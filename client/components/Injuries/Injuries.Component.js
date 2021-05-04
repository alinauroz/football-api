import React from 'react';
import { ScrollView, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import Unit from './Injuries.Unit';
import styles from './Injuries.Style'
import request from '../../utils/request';
import Header from '../Basic/Header/Header.Component';
import HTMLView from 'react-native-htmlview';

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
        const injury = data[detailId];
        return (
            <ScrollView>
                <Header
                    onIconClick={() => setDetailId(null)}
                    iconName="chevron-left"
                    title="Injuries"
                />
                <Unit 
                    title={injury.title}
                    description={injury.description}
                    videoId={injury.videoId}
                />
                <Card>
                <HTMLView
                  value={`
                    <h1>Injury</h1><h3>This is some description on Injury</h3><ul> <li>Point 1</li><li>Point 2</li><li>Point 3</li></ul>
                  `}
                />
                </Card>
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