
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
    }
  },
  {
    initialRouteName: 'Login'
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
