//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Appcolors} from '../../theme/Appcolors';
import CategoryFilter from '../../components/categoryFilter';

// create a component
const CategoryScreen = () => {
  return (
    <View style={styles.container}>
      <CategoryFilter />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {},
});

//make this component available to the app
export default CategoryScreen;
