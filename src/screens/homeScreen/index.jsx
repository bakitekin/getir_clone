//import liraries
import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Header from '../../components/header';
import {Appcolors} from '../../theme/Appcolors';
import BannerCarousel from '../../components/bannerCarousel';
import CategoryItem from '../../components/categoryItem';

// create a component
const HomeScreen = () => {
  return (
    <ScrollView stickyHeaderIndices={[0]} style={styles.container}>
      <Header />
      <BannerCarousel />
      <CategoryItem />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: Appcolors.lightGray,
  },
});

//make this component available to the app
export default HomeScreen;
