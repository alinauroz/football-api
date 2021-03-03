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

const App = () => {

  return <Login />

  return (
    <SafeAreaProvider>
    <SafeAreaView>
      <View style={styles.container}>
       <Home />
      </View>
    </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App;
