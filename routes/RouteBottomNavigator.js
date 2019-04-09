import React from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import Home from '../screens/Home';
import ProductCart from '../screens/ProductCart';
import ProductCheckoutScreen from '../screens/ProductCheckout';

export const BottomNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => <FontAwesome name='home' style={{color: tintColor}} size={24}/>,
        tabBarOptions: {
          activeTintColor: '#c43a43',
          inactiveTintColor: 'gray',
        }
      })
    },
    ProductCart: {
      screen: ProductCart,
      navigationOptions: ({ navigation }) => ({
        tabBarLabel: 'Cart',
        tabBarIcon: ({tintColor}) => <FontAwesome name='shopping-cart' style={{color: tintColor}} size={24}/>,
        tabBarOptions: {
          activeTintColor: '#c43a43',
          inactiveTintColor: 'gray',
        }
      })
    }
  }
);

export default createAppContainer(BottomNavigator);
