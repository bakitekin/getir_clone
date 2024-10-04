//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Appcolors} from '../../theme/Appcolors';

// create a component
const AnaSayfa = () => {
  return (
    <View style={styles.container}>
      <Text>AnaSayfa</Text>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Appcolors.teal,
  },
});

//make this component available to the app
export default AnaSayfa;
