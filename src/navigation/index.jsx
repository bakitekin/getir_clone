// import libraries
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import store from '../store/store';
import RootNavigation from './rootNavigation';

// create a component
const Root = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </Provider>
  );
};

// make this component available to the app
export default Root;
