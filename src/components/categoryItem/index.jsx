// import libraries
import React from 'react';
import {
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import {Appcolors} from '../../theme/Appcolors';
import categoriesGetir from '../../assets/categoriesGetir';
import {useNavigation} from '@react-navigation/native';

const {width} = Dimensions.get('window');

const CategoryItem = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Category')}
      style={styles.categoryItem}>
      <Image source={{uri: item.src}} style={styles.categoryImage} />
      <Text style={styles.categoryText}>{item.name}</Text>
    </TouchableOpacity>
  );
};

const CategoryList = () => {
  return (
    <FlatList
      contentContainerStyle={styles.categoryList}
      data={categoriesGetir}
      keyExtractor={item => item.id.toString()}
      showsHorizontalScrollIndicator={false}
      renderItem={({item}) => <CategoryItem item={item} />}
    />
  );
};

// define your styles
const styles = StyleSheet.create({
  categoryItem: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: width * 0.25,
    height: width * 0.25,
    marginTop: 3,
  },
  categoryList: {
    alignContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingVertical: 10,
  },
  categoryImage: {
    width: width * 0.18,
    height: width * 0.18,
    resizeMode: 'cover',
    borderRadius: 8,
  },
  categoryText: {
    marginTop: 5,
    color: Appcolors.brownDark,
    fontSize: 12,
    fontWeight: 'bold',
  },
});

// make this component available to the app
export default CategoryList;
