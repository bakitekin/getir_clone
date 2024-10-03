//import liraries
import {Dimensions, StyleSheet} from 'react-native';
import {Appcolors} from '../../theme/Appcolors';
const {width, height} = Dimensions.get('window');

// define your styles
const BannerStyles = StyleSheet.create({
  container: {
    backgroundColor: Appcolors.primary,
  },
  Image: {
    width: width,
    height: height * 0.24,
    resizeMode: 'stretch',
  },
});

export default BannerStyles;
