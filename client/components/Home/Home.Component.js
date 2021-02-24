import React from 'react' 
import {
    Dimensions,
    Text,
    View
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Tab = createBottomTabNavigator();

const HomeScreen = () => <Text>Home Screen</Text>
const SettingsScreen = () => <Text>Settings </Text>

function MyTabs() {
    const insets = useSafeAreaInsets();
  return (
      <View
        style={{
            height: Dimensions.get('window').height - insets.top - insets.bottom,
        }}
      >
      <SafeAreaProvider>
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
    </View>
  );
}

export default MyTabs;