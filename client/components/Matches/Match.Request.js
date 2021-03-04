import React, {useState} from 'react';
import Input from '../Basic/Input/Input.component';
import {Dimensions, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import styles from '../../common/styles'
import request from '../../utils/request'

const MatchRequestForm = (props) => {

    const [team, setTeam] = useState();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [date, setDate] = useState('');
    const [location, setLocation] = useState('');

    const sendRequest = async () => {
        try {
            setLoading(true);
            let res = await request({
                type: 'POST',
                route: 'teams/match_request',
                body: {
                    teamId: props.teamId,
                    from: 'xxx',
                    team: props.id, 
                    message,
                    date,
                    location
                }
            });
            console.log(res);
            setLoading(false);
        }
        catch (err) {
            console.log("ERROR", err);
            setLoading(false);
        }
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
                onChangeText={(val) => setLocation(val)}
                placeholder="Location of Match"
            />
            <Input 
                onChangeText={(val) => setDate(val)}
                placeholder="Date of the Match"
            />
            <Input 
                onChangeText={(val) => setMessage(val)}
                placeholder="Any message for team admin"
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