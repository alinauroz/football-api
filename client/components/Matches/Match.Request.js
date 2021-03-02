import React, {useState} from 'react';
import Input from '../Basic/Input/Input.component';
import {Dimensions, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import styles from '../../common/styles'

const MatchRequestForm = (props) => {

    const [team, setTeam] = useState();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');

    const sendRequest = () => {
        setLoading(true);
    }

    return (
        <View style={{width: Dimensions.get('window').width - 70}}>
            <Text
                style={{
                    fontSize: 22,
                    fontWeight: '600',
                    marginTop: 15,
                }}
            >
                Match Request
            </Text>
            <Text style={{... styles.note, marginBottom: 20}}>
                A match request will be send to Team Name
            </Text>
            <Input 
                onChangeText={(e) => console.log(e)}
                placeholder="Location of Match"
            />
            <Input 
                onChangeText={(e) => console.log(e)}
                placeholder="Location of Match"
            />
            <Input 
                onChangeText={(e) => console.log(e)}
                placeholder="Location of Match"
            />
            <Button
                title='Send Request'
                loading={loading}
                onPress={sendRequest}
                style={{
                    marginTop: 15,
                    marginBottom: 15,
                    width: 150,
                    alignSelf: 'center',
                }}
            />
        </View>
    )

}

export default MatchRequestForm;