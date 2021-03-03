import React from 'react' 
import {
    Text,
    View,
    Image,
    Dimensions,
} from 'react-native'
import { Button } from 'react-native-elements';
import Input from '../Basic/Input/Input.component';
import CoverPhoto from '../../res/login-cover.jpg';
import commonStyles from '../../common/styles';
import styles from './Login.style'
import request from '../../utils/request'
import {set, get} from '../../utils/storage'

const Login = (props) => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [loading, setLoading] = React.useState(false);
    const [error, setError] = React.useState('');

    const login = async () => {
        try {
            setLoading(true);
            let res = await request({
                route: 'users/login',
                type: 'POST',
                body: {
                    email: username,
                    password
                }
            })
            console.log(res);
            setLoading(false);
        }
        catch (err) {
            console.log("ERROR", err);
            setLoading(false);
        }
    }

    return (
        <>
        <Image 
            source={CoverPhoto}
            style={{
                width: Dimensions.get('window').width - 40,
                resizeMode: 'contain'
            }}
        />
        <Input 
            placeholder="Username"
            onChangeText={(val) => setUsername(val)}
        />
        <Input 
            placeholder="Password"
            onChangeText={(val) => setPassword(val)}
            secureTextEntry={true}
        />
        <Button
          title="Sign In"
          onPress={login}
          style={{
              marginTop: 10
          }}
          loading={loading}
        />
        <View
            style={styles.noteContainer}
        >
            <Text
                style={commonStyles.note}
            >
              Create a new account
            </Text>
        </View>
        </>
    )
}

export default Login;