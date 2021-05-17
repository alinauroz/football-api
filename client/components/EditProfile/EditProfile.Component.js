import React from 'react' 
import {
    Text,
    View,
    Image,
    Dimensions,
    TouchableOpacity,
} from 'react-native'
import { Button } from 'react-native-elements';
import Input from '../Basic/Input/Input.component';
import CoverPhoto from '../../res/login-cover.png';
import commonStyles from '../../common/styles';
import styles from './EditProfile.style';
import request from '../../utils/request'
import {set, get} from '../../utils/storage'
import user from '../../utils/user'
import Error from '../Error/Error.Component'
import { ScrollView } from 'react-native';
import Header from '../Basic/Header/Header.Component';

const Login = (props) => {

    const [username, setUsername] = React.useState(user.email);
    const [password, setPassword] = React.useState('');
    const [firstName, setFirstName] = React.useState(user.firstName);
    const [lastName, setLastName] = React.useState(user.lastName);
    const [loading, setLoading] = React.useState(false);
    const [role, setRole] = React.useState(user.role);
    const [city, setCity] = React.useState(user.city);
    const [phone, setPhone] = React.useState(user.phone);
    const [error, setError] = React.useState('');

    const signup = async () => {
        try {
            setLoading(true);
            let res = await request({
                route: 'users/me',
                type: 'PUT',
                body: {
                    firstName,
                    lastName,
                    email: username,
                    role,
                    city,
                    phone
                }
            })
            console.log(res);
            
            if (res.status === 'success') {
                alert('Account updated')
                setLoading(false);
            }
            else {
                setError(res.message ? res.message: 'Unknown error occurred');
            }

            setLoading(false);
        }
        catch (err) {
            console.log("ERROR", err);
            setError(res.message ? res.message: 'Unknown error occurred');
            setLoading(false);
            throw err;
        }
    }

    return (
        <ScrollView style={{ backgroundColor: 'white' }}>
        <Header 
            onIconClick={props.back}
            iconName="chevron-left"
            title="Edit Profile"
        />
        <Error 
            message={error}
        />
        <Input 
            placeholder="First name"
            onChangeText={(val) => setFirstName(val)}
            value={firstName}
        />
        <Input 
            placeholder="Last Name"
            onChangeText={(val) => setLastName(val)}
            value={lastName}
        />
        <Input 
            placeholder="Email"
            onChangeText={(val) => setUsername(val)}
            value={username}
        />
        <Input 
            placeholder="Phone"
            onChangeText={(val) => setPhone(val)}
            value={phone}
        />
        <Input 
            placeholder="City"
            onChangeText={(val) => setCity(val)}
            value={city}
        />
        <Input
            placeholder="Role"
            onChangeText={(val) => setRole(val)}
            value={role}
        />
        <Button
          title="Update"
          onPress={signup}
          style={{
              marginTop: 10
          }}
          loading={loading}
        />
        </ScrollView>
    )
}

export default Login;