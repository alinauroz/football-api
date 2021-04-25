import React, {useState} from 'react';
import { View, TouchableOpacity, ScrollView, Text } from 'react-native'
import styles from './Ground.Style';
import { Calendar } from 'react-native-calendars';

const Booking = (props) => {

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [hours, setHours] = useState([]);
    const [date, setDate] = useState('');
    const [calendarDisplay, setCalenderDisplay] = useState('none');

    const stylesRegister = {
        '-1':  {},
        '0': styles.notAvailable,
        '2': styles.buttonBooked
    }

    React.useEffect(() => {
        let hours = [];
        for (let index = 0; index < 24; index ++) {
            if (index < 12) {
                hours.push({ value: index, label: `${index} - ${index + 1}`, ampm: 'AM', status: props.availableHours.indexOf(index) > -1 ? -1 : 2 })
            }
            else if (index === 12) {
                hours.push({ value: index, label: '12 - 01', ampm: 'PM', status: props.availableHours.indexOf(index) > -1 ? -1 : 0})
            }
            else {
                hours.push({ value: index, label: `${index - 12} - ${index - 11}`, ampm: 'PM', status: props.availableHours.indexOf(index) > -1 ? -1 : 0})
            }
        }
        setHours(hours);
    }, [])

    return (
        <View style={styles.bookingContainer}>
            <View
                style={{
                    width: '100%',
                    zIndex: 999,
                    flexDirection: 'column'
                }}
            >
                <TouchableOpacity
                    style={{
                        zIndex: 999,
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        marginBottom: 20,
                    }}
                    onPress={() =>  calendarDisplay === 'flex' ? setCalenderDisplay('none') : setCalenderDisplay('flex')}
                >
                    <Text style={{backgroundColor: 'white', borderRadius: 5, overflow: 'hidden', paddingTop: 8, paddingLeft: 8, paddingLeft: 20, paddingRight: 20, fontSize: 28}}>{ calendarDisplay === 'flex' ? 'Cancel' : date ? date : 'Select Date'}</Text>
                </TouchableOpacity>
                <View
                    style={{
                        display: calendarDisplay,
                        justifyContent: 'center',
                        backgroundColor: 'white'
                    }}
                >
                    <Calendar 
                        onDayPress={(day) => {
                            console.log(day)
                        }}
                        style={{
                            position: 'absolute',
                            zIndex: 999,
                            width: '100%',
                        }}
                        theme={{
                            textDayFontSize: 18,
                            textMonthFontSize: 18,
                            textDayHeaderFontSize: 18
                        }}
                    />
                </View>
            </View>
            {

                hours.map(hour => {
                    return (
                        <TouchableOpacity
                            onPress={() => {}}
                            key={hour.index}
                            disabled={hour.status !== 1}
                        >
                            <View style={{ ...styles.hourButton, ...stylesRegister[String(hour.status)]}}>
                                <Text>{hour.status ? hour.label : '-'}</Text>
                                <Text>{hour.ampm}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })
            }
        </View>
    );

}

export default Booking;