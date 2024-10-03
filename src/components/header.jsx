//import liraries
import React from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import {Appcolors} from '../theme/Appcolors';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

// Ekran genişliği ve yüksekliği
const {height} = Dimensions.get('window');

// create a component
const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerTwo}>
        <Image
          source={{uri: 'https://cdn.getir.com/misc/emoji/house.png'}}
          style={styles.logo}
        />
        <View style={styles.textContainer}>
          <Text style={styles.text1}>Ev</Text>
          <Text style={styles.text2}>Dedepaşa Blv. Yenişehir Mahallesi...</Text>
        </View>
        <SimpleLineIcons
          name="arrow-right"
          size={12}
          color={Appcolors.black}
          style={styles.icon}
        />
      </View>
      <View style={styles.tvsContainer}>
        <Text style={styles.text3}>Tvs</Text>
        <View style={styles.tvs}>
          <Text style={styles.text4}>13</Text>
          <Text style={styles.text5}>dk</Text>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: height * 0.064,
    backgroundColor: Appcolors.yellow,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: 80,
  },
  containerTwo: {
    width: '81%',
    height: height * 0.064,
    backgroundColor: Appcolors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderTopRightRadius: 35,
    borderBottomRightRadius: 35,
  },
  logo: {
    width: 30,
    height: 30,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  text1: {
    fontSize: 17,
    color: Appcolors.black,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 12,
    textAlign: 'center',
    marginLeft: 5,
  },
  icon: {
    marginLeft: 10,
  },
  tvsContainer: {
    width: '20%',
    height: height * 0.064,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text3: {
    fontSize: 12,
    textAlign: 'center',
    color: Appcolors.primary,
    fontWeight: '600',
  },
  text4: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 5,
    color: Appcolors.primary,
  },
  text5: {
    fontSize: 18,
    marginTop: 5,
    fontWeight: '600',
    color: Appcolors.primary,
  },

  tvs: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
});

//make this component available to the app
export default Header;
