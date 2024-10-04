//import liraries
import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {Appcolors} from '../../theme/Appcolors';

// create a component
const CostumTabBarButton = ({children}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Entypo
        style={styles.ıcon}
        name="list"
        size={24}
        color={Appcolors.yellow}
      />
    </TouchableOpacity>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Appcolors.primary,
    width: 50,
    height: 50,
    marginTop: -10,
    borderRadius: 50,
    elevation: 5,
    shadowColor: Appcolors.black,
    shadowOpacity: 0.4,
    shadowRadius: 5,
    shadowOffset: {
      height: 2,
    },
  },
  ıcon: {
    color: Appcolors.yellow,
    fontWeight: '900',
    alignSelf: 'center',
    fontSize: 30,
  },
});

//make this component available to the app
export default CostumTabBarButton;
