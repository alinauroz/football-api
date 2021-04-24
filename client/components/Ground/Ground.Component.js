import React from 'react';
import { View, Text } from 'react-native';
import request from '../../utils/request';
import GroundUnit from './Ground.Unit';
import styles from './Ground.Style';
import { ScrollView } from 'react-native';

const Ground = function () {

    const [data, setData] = React.useState([]);
    const [detailId, setDetailId] = React.useState(null);

    React.useEffect(() => {
        request({
            route: 'ground'
        }).then(res => {
            setData(res.data)
        })
    }, []);

    if (detailId !== null) {
        return <Text>Detail</Text>
    }

    return (
        <ScrollView>
            <Text style={styles.title}>Grounds {detailId}</Text>
            {
                data.map((ground, index) => (
                    <GroundUnit 
                        key={ground._id}
                        id={ground._id}
                        index={index}
                        name={ground.name}
                        availableHours={ground.availableHours}
                        location={ground.location}
                        city={ground.city}
                        rate={ground.rate}
                        selectGround={setDetailId}
                    />
                ))
            }
        </ScrollView>
    )

}

export default Ground;