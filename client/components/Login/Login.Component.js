import React from 'react' 
import {
    Text,
    View,
    Image,
    Dimensions
} from 'react-native'
import { Button } from 'react-native-elements';
import Input from '../Basic/Input/Input.component';
import CoverPhoto from '../../res/login-cover.jpg';
import commonStyles from '../../common/styles';
import styles from './Login.style'

const Login = (props) => {

    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

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
          title="Login"
          onPress={() => alert(1)}
          style={{
              marginTop: 10
          }}
          loading={true}
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