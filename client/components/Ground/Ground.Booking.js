import React, {useState} from 'react';
import { View, TouchableOpacity, ScrollView, Text } from 'react-native'
import styles from './Ground.Style';

const Booking = (props) => {

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [hours, setHours] = useState([])

    React.useEffect(() => {
        let hours = [];
        for (let index = 0; index < 24; index ++) {
            if (index < 12) {
                hours.push({ label: `${index} AM`, status: props.availableHours.indexOf(index) > -1 ? -1 : 0 })
            }
            else if (index === 12) {
                hours.push({ label: '12 PM', status: props.availableHours.indexOf(index) > -1 ? -1 : 0})
            }
            else {
                hours.push({ label: `${index - 12} PM`, status: props.availableHours.indexOf(index) > -1 ? -1 : 0})
            }
        }
        setHours(hours);
    }, [])

    return (
        <View style={styles.bookingContainer}>
            {
                hours.map(hour => {
                    return (
                        <TouchableOpacity
                            onPress={() => {}}
                            key={hour.label}
                        >
                            <View style={styles.hourButton}>
                                <Text>{hour.label}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    );

}

export default Booking;