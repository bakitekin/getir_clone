// import libraries
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Appcolors} from '../theme/Appcolors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeNavigator from './homeNavigator';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CostumTabBarButton from '../components/categoryItem/costumTabBarButton';

const Tab = createBottomTabNavigator();

// create a component
const RootNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Ana Sayfa"
      screenOptions={{
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: Appcolors.primary,
        tabBarInactiveTintColor: 'gray',
        tabBarStyle: {
          backgroundColor: '#f8f9fa',
          height: 70,
        },
        headerShown: false,
      }}>
      <Tab.Screen
        name="Ana Sayfa"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Ionicons name="home" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profil"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="search" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="list"
        component={HomeNavigator}
        options={{
          tabBarButton: props => <CostumTabBarButton {...props} />,
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <FontAwesome name="user" size={25} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="gift" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

// make this component available to the app
export default RootNavigation;
