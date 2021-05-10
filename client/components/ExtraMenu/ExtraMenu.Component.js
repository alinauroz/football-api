import React, {useState} from 'react';
import { ScrollView, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './ExtraMenu.Style';

export default function ExtraMenu () {
    
    const [Component, setSelectedComponent] = useState(null);
    const menu = [
        {name: 'Grounds', icon: 'globe', component: null},
        {name: 'Exercies', icon: 'heartbeat', component: null},
        {name: 'Injuries', icon: 'ambulance', component: null},
        {name: 'Log Out', icon: 'sign-out', onClick: null}
    ];

    return (

    <View
        style={styles.container}
    >
        <Text style={styles.heading}>More</Text>
    {menu.map(menuItem => {
        return (
            <View style={styles.menuContainer}>
                <Icon name={menuItem.icon} size={64} style={{color: '#333'}} />
                <Text style={styles.menuItemName}>{menuItem.name}</Text>
            </View>
        )
    })
    }
    </View>
    );

}