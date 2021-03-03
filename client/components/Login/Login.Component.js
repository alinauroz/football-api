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
import user from '../../utils/user'
import Error from '../Error/Error.Component'

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
            
            if (res.status === 'success') {
                res.data.token = res.token;
                user.setData(res.data);
                set("user", res.data);
                set("token", res.token);
                console.log(res.token, res.data)
                props.reload();
            }
            else {
                setError(res.message ? res.message: 'Unknown error occurred');
            }

            console.log(res);

            setLoading(false);
        }
        catch (err) {
            console.log("ERROR", err);
            setError(res.message ? res.message: 'Unknown error occurred');
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
        <Error 
            message={error}
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