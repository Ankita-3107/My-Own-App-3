import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import RewardScreen from '../screens/RewardScreen';
import RecieverDetailsScreen  from '../screens/RecieverDetailsScreen';




export const AppStackNavigator = createStackNavigator({
  StudentsList : {
    screen : RewardScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  RecieverDetails : {
    screen : RecieverDetailsScreen,
    navigationOptions:{
      headerShown : false
    }
  },

},
  {
    initialRouteName: 'StudentsList'
  }
);