//import liraries
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {Image, StyleSheet, Text} from 'react-native';
import HomeScreen from '../screens/homeScreen';
import {Appcolors} from '../theme/Appcolors';
import CategoryScreen from '../screens/categoryScreen';
const Stack = createStackNavigator();
// create a component
const HomeNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: {
            backgroundColor: Appcolors.primary,
            borderBottomColor: Appcolors.white,
            elevation: 0,
          },
          headerTitle: () => (
            <Image
              style={styles.ımg}
              source={require('../assets/getirlogo.png')}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Category"
        component={CategoryScreen}
        options={{
          headerTintColor: Appcolors.white,
          headerBackTitleVisible: false,
          headerStyle: {
            backgroundColor: Appcolors.primary,
            borderBottomColor: Appcolors.black,
            elevation: 0,
            headerTintColor: Appcolors.white,
            shadowOpacity: 0.4,
            shadowRadius: 5,
          },
          headerTitle: () => <Text style={styles.text}>Ürünler</Text>,
        }}
      />
    </Stack.Navigator>
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
  ımg: {
    width: 100,
    height: 30,
    resizeMode: 'contain',
    backgroundColor: Appcolors.primary,
  },

  text: {
    fontWeight: 'bold',
    fontSize: 15,
    color: Appcolors.white,
    textAlign: 'center',
  },
});

//make this component available to the app
export default HomeNavigator;
