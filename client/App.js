/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import styles from './App.style'

import Login from './components/Login/Login.Component'
import Home from './components/Home/Home.Component'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {get} from './utils/storage';
import user from './utils/user'

const App = () => {

  const [loggedIn, setLoggedIn] = React.useState();

  React.useEffect(() => {

    get('token').then(async token => {
      if (token && token !== 'null') {
        let userData = await get('user');
        user.setData(userData);
        console.log(userData)
        console.log('USER', user);
        setLoggedIn(true);
      }
    })

  }, [loggedIn])

  return (
    <SafeAreaProvider>
    <SafeAreaView>
      <View style={styles.container}>
      {
        loggedIn ?
        <Home reload={() => setLoggedIn(false)} />:
        <Login reload={() => setLoggedIn(true)} />
      }
      </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
