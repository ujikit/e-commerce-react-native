import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import RouteBottomNavigator from './routes/RouteBottomNavigator';
import ProductDetail from './screens/ProductDetail';
import ProductCartScreen from './screens/ProductCart';
import ProductCheckoutScreen from './screens/ProductCheckout';
import ProductTransactionCompleteScreen from './screens/ProductTransactionComplete';
import ProductConfirmationScreen from './screens/ProductConfirmation';

const AppNavigator = createStackNavigator(
  {
    RouteBottomNavigator: {
      screen: RouteBottomNavigator,
      headerMode: "none",
      navigationOptions: {
        header: null
      }
    },
    ProductDetail: {
      screen: ProductDetail,
      headerMode: '',
      navigationOptions: {
        title: 'Product Detail',
        headerStyle: {
          backgroundColor: '#d71149'
        },
        headerTintColor: '#fff'
      }
    },
    ProductCart: {
      screen: ProductCartScreen,
      headerMode: '',
      navigationOptions: {
        title: 'Cart',
        headerStyle: {
          backgroundColor: '#d71149'
        },
        headerTintColor: '#fff'
      }
    },
    ProductCheckout: {
      screen: ProductCheckoutScreen,
      headerMode: '',
      navigationOptions: {
        title: 'Checkout',
        headerStyle: {
          backgroundColor: '#d71149'
        },
        headerTintColor: '#fff'
      }
    },
    ProductConfirmation: {
      screen: ProductConfirmationScreen,
      headerMode: '',
      navigationOptions: {
        title: 'Confirmation',
        headerStyle: {
          backgroundColor: '#d71149'
        },
        headerTintColor: '#fff'
      }
    },
    ProductTransactionComplete: {
      screen: ProductTransactionCompleteScreen,
      headerMode: '',
      navigationOptions: {
        title: 'Completed',
        headerStyle: {
          backgroundColor: '#d71149'
        },
        headerTintColor: '#fff'
      }
    }
  },
  {
    initialRouteName: 'RouteBottomNavigator'
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <AppContainer />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
