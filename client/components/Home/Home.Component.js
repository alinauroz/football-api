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
import Icon from 'react-native-vector-icons/FontAwesome';

import News from '../News/News.Component'
import Me from '../Me/Me.Component'

Icon.loadFont();

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
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        if (route.name === 'Home')
                            iconName = 'home'
                        else if (route.name === 'Matches')
                            iconName = 'futbol-o'
                        else if (route.name === 'News')
                            iconName = 'newspaper-o'
                        else if (route.name === 'Teams')
                            iconName = 'users'
                        else if (route.name === 'Me')
                            iconName = 'user'
                        return <Icon name={iconName} size={size} color={color} />
                    }
                })}
            >
                <Tab.Screen
                    name="Home"
                    component={HomeScreen}
                />
                <Tab.Screen name="Matches" component={SettingsScreen} />
                <Tab.Screen name="News" component={News} />
                <Tab.Screen name="Teams" component={SettingsScreen} />
                <Tab.Screen name="Me" component={Me} />
            </Tab.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
    </View>
  );
}

export default MyTabs;