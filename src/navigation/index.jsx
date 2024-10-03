//import libraries
import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../screens/homeScreen';
import Profile from '../screens/profile';
import Login from '../screens/login';
import SignUp from '../screens/signup';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HOME, LOGIN, PROFILE, SIGNUP} from '../router/router';
import store from '../store/store';
import {Provider} from 'react-redux';

const Stack = createNativeStackNavigator();

// create a component
const Root = () => {
  return (
    <NavigationContainer>
      {/* <Provider store={store}> */}
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={HOME}>
        <Stack.Screen name={HOME} component={Home} />
        <Stack.Screen name={PROFILE} component={Profile} />
        <Stack.Screen name={LOGIN} component={Login} />
        <Stack.Screen name={SIGNUP} component={SignUp} />
      </Stack.Navigator>
      {/* </Provider> */}
    </NavigationContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default Root;
