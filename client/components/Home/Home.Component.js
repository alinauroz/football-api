import React from 'react' 
import {
    Dimensions,
    Text,
    AppRegistry,
    View
} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { Header } from 'react-native-elements';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';

import News from '../News/News.Component'
import Me from '../Me/Me.Component'
import Matches from '../Matches/Matches.Component'
import Tournament from '../Tournaments/Tournament.Component'
import Teams from '../Team/Team.Component'
import Dashbaord from '../Dashboard/Dashboard.Component'
import Payment from '../Payment/Payment.Component'
import Exercise from '../Exercise/Exercise.Component'
import Ground from '../Ground/Ground.Component'

Icon.loadFont();

const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function MyTabs(props) {
    const insets = useSafeAreaInsets();

    function MeWithReload () {
        return <Me reload={props.reload}></Me>
    }

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
                        else if (route.name === 'Profile')
                            iconName = 'user'
                        else if (route.name === 'Tournament')
                            iconName = 'trophy'
                        return <Icon name={iconName} size={size} color={color} />
                    }
                })}
            >
                <Tab.Screen name="Home" component={Ground}/>
                <Tab.Screen name="Pay" component={Payment}/>
                <Tab.Screen name="Matches" component={Matches} />
                <Tab.Screen name="Tournament" component={Tournament} />
                <Tab.Screen name="Teams" component={Teams} />
                <Tab.Screen name="Profile" component={MeWithReload} />
            </Tab.Navigator>
        </NavigationContainer>
    </SafeAreaProvider>
    </View>
  );
}

export default MyTabs;