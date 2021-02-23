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

import Login from './components/Login'

const App = () => {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <Login />
      </View>
    </SafeAreaView>
  );
};

export default App;
