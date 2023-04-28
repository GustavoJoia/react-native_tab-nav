import * as React from 'react';
import { View } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/screens/Home';
import Profile from './src/screens/Profile';
import Settings from './src/screens/Settings';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName='Home' >

        <Tab.Screen 
          name="Home" 
          component={Home} 
          options={{
            title: 'Início',
            tabBarIcon: () =>(
              <Entypo name="home" size={30} color="black" />
            ),
            headerShown: false
          }}/>
        <Tab.Screen 
          name="Profile" 
          component={Profile} 
          options={{
              title: 'Perfil',
              tabBarIcon: () =>(
                <Ionicons name="person-circle" size={30} color="black" />
              ),
              headerShown: false
            }} />
            <Tab.Screen 
              name="Settings" 
              component={Settings} 
              options={{
                title: 'Configurações',
                tabBarIcon: () =>(
                  <FontAwesome name="gear" size={30} color="black" />
                ),
                headerShown: false
              }}/>

      </Tab.Navigator>
    </NavigationContainer>
  );
}
