import React from 'react';
import HomePage from './components/HomePage';
import { createStackNavigator } from 'react-navigation';

const Router = createStackNavigator({
  home: {
    screen: HomePage,
    navigationOptions: ({ navigation }) => ({
      title: 'Routines',
    })
  }
}, {
    initialRouteName: 'home'
});

export default Router;
