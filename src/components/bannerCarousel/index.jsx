//import liraries
import React, {useState} from 'react';
import {View, FlatList, Image} from 'react-native';
import BannerStyles from './bannerStyles';

// create a component
const BannerCarousel = () => {
  const [banners, setBanners] = useState([
    'https://cdn.getir.com/misc/611e55d33ea65bef40f9ba05_banner_tr_1629378026496.jpeg',
    'https://cdn.getir.com/misc/621784419e62143ed76eef01_banner_tr_1645969386292.jpeg',
    'https://cdn.getir.com/promos/6221aef965805c5b1e703845_banner_tr_1646723453154.jpeg',
    'https://cdn.getir.com/misc/622a6d18b2e2fe3a8e809894_banner_tr_1646947639211.jpeg',
  ]);

  return (
    <FlatList
      data={banners}
      keyExtractor={item => item}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToAlignment="center"
      snapToInterval={'width'}
      decelerationRate={'fast'}
      style={BannerStyles.container}
      renderItem={({item}) => (
        <Image source={{uri: item}} style={BannerStyles.Image} />
      )}
    />
  );
};

//make this component available to the app
export default BannerCarousel;
