/* eslint-disable react/react-in-jsx-scope */
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {Appcolors} from '../../theme/Appcolors';
import {useState} from 'react';
import categoriesGetir from '../../assets/categoriesGetir';

const {height} = Dimensions.get('window');

const CategoryFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      bounces={true}
      style={styles.container}>
      {categoriesGetir.map(category => (
        <TouchableOpacity
          key={category.id}
          style={[
            styles.category,
            selectedCategory === category.id && styles.selectedCategory,
          ]}
          onPress={() => setSelectedCategory(category.id)}>
          <Text style={styles.text}>{category.name}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    height: height * 0.065,
    backgroundColor: Appcolors.lightPrimary,
    paddingHorizontal: 10,
    flexDirection: 'row',
  },
  category: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 5,
    elevation: 5,
    paddingVertical: 10,
  },
  selectedCategory: {
    backgroundColor: Appcolors.primary,
  },
  text: {
    color: Appcolors.lightGray,
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 10,
  },
});
export default CategoryFilter;
