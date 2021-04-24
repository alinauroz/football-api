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
            console.log("Grounds");
            console.log(res.data)
            setData(res.data)
        })
    }, []);

    if (detailId) {

    }

    return (
        <ScrollView>
            {
                data.map(ground => (
                    <GroundUnit 
                        key={ground.id}
                        name={ground.name}
                        availableHours={ground.availableHours}
                        location={ground.location}
                        city={ground.city}
                        rate={ground.rate}
                    />
                ))
            }
        </ScrollView>
    )

}

export default Ground;