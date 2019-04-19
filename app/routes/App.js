
import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { Provider } from 'react-redux'
import store from '../redux/store'
// Login and Register Screen
import LoginScreen from '../screens/LoginRegister/Login'
import RegisterScreen from '../screens/LoginRegister/Register'
import ForgotPasswordScreen from '../screens/LoginRegister/ForgotPassword'
// Main Screen
import HomeScreen from '../screens/MainScreen/Home'
import ProductDetailScreen from '../screens/MainScreen/ProductDetail'
import ProductCartScreen from '../screens/MainScreen/ProductCart'
import ProductCheckoutScreen from '../screens/MainScreen/ProductCheckout'
import ProductConfirmationScreen from '../screens/MainScreen/ProductConfirmation'
import ProductTransactionCompleteScreen from '../screens/MainScreen/ProductTransactionComplete'

const Root = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: null
      }
    },
    Register: {
      screen: RegisterScreen,
      navigationOptions: {
        header: null
      }
    },
    ForgotPassword: {
      screen: ForgotPasswordScreen,
      navigationOptions: {
        header: null
      }
    },
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: null
      }
    },
    ProductDetail: {
      screen: ProductDetailScreen,
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
      navigationOptions: {
        title: 'Cart List',
        headerStyle: {
          backgroundColor: '#d71149'
        },
        headerTintColor: '#fff'
      }
    },
    ProductCheckout: {
      screen: ProductCheckoutScreen,
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
      navigationOptions: {
        title: 'Transaction Complete',
        headerLeft: null,
        headerTintColor: '#fff',
        headerStyle: {
          backgroundColor: '#d71149'
        }
      }
    }
  },
  {
    initialRouteName: 'ProductCart'
  }
)

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    )
  }
}

export default App
