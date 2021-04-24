import React from 'react';
import { Card, Button } from 'react-native-elements';
import { Text, Image } from 'react-native';
import styles from './Ground.Style';

function GroundUnit ({ name, location, city, availableHours, rate }) {
    return (
        <Card>
            <Text style={styles.groundName}>{name}</Text>
            <Text>Rate/hr: Rs {rate} </Text>
            <Text>Location: {location}, {city}</Text>
            <Text>Available Hours: {availableHours.map( hour => hour > 12 ? `${hour-12} PM` : (hour === 12 ? '12 PM' :  `${hour} AM`)).join(', ')}</Text>
        </Card>
    );
}

export default GroundUnit;
