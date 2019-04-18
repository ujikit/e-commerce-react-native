import React, { Component } from 'react'
import { Alert, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { Button, Container, Content, Form, Header, Item, Input } from 'native-base'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Axios from 'axios';

import { connect } from 'react-redux'

class RegisterScreen extends Component<Props> {

  constructor() {
    super()
    this.state = {
      email: undefined,
      password: undefined,
      username_user: undefined,
      firstname_user: undefined,
      lastname_user: undefined,
      phone_user: undefined,
      photo_user: undefined
    }
  }

  componentWillMount() {

  }

  _registerUser = () => {
    Axios.post('http://192.168.0.44:3333/register', {
      email: this.state.email,
      password: this.state.password,
      username_user: this.state.username_user,
      firstname_user: this.state.firstname_user,
      lastname_user: this.state.lastname_user,
      phone_user: this.state.phone_user,
      photo_user: this.state.photo_user
    })
    .then(function (response) {
      return Alert.alert(`${response.data.status}`,`${response.data.data}`)
    })
    .catch(function (error) {
      return Alert.alert(`${response.data.status}`,`${response.data.data}`)
    })
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
        <Container style={{ padding: 15 }}>
          <Content style={{ padding: 5, marginTop: 45 }}>
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
              <Image resizeMode= 'contain' style={{width: 135}} source={require('../../assets/logo.png')} />
            </View>
            <Form style={{ marginBottom: 25 }}>
              <View style={{ marginTop: 5 }}>
                <Input placeholderTextColor='#b3b3b3' placeholder='Username' onChangeText={text => this.setState({ username_user: text })} />
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 0.5 }} />
              </View>
              <View style={{ marginTop: 5 }}>
                <Input placeholderTextColor='#b3b3b3' placeholder='First Name' onChangeText={text => this.setState({ firstname_user: text })} />
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 0.5 }} />
              </View>
              <View style={{ marginTop: 5 }}>
                <Input placeholderTextColor='#b3b3b3' placeholder='Last Name' onChangeText={text => this.setState({ lastname_user: text })} />
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 0.5 }} />
              </View>
              <View style={{ marginTop: 5 }}>
                <Input placeholderTextColor='#b3b3b3' placeholder='Email' onChangeText={text => this.setState({ email: text })} />
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 0.5 }} />
              </View>
              <View style={{ marginTop: 5 }}>
                <Input placeholderTextColor='#b3b3b3' placeholder='Phone' onChangeText={text => this.setState({ phone_user: text })} />
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 0.5 }} />
              </View>
              <View style={{ marginTop: 5 }}>
                <Input placeholderTextColor='#b3b3b3' placeholder='New Password' onChangeText={text => this.setState({ password: text })} secureTextEntry={true}/>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 0.5 }} />
              </View>
            </Form>

            <View>
              <Button block style={{ backgroundColor: '#d71149' }} onPress={() => this._registerUser()}>
                <Text style={{ fontSize: 15, color: 'white' }}>Register</Text>
              </Button>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 14, alignItems: 'center' }}>
              <View style={{ flex: 1.5, alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 14, color: '#b3b3b3' }}>Already have account?</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-start', marginLeft: 6.5 }}>
                <TouchableOpacity style={{ backgroundColor: 'white' }} onPress={() => this.props.navigation.navigate('Login')}>
                  <Text style={{ fontSize: 14, color: '#d71149', fontWeight: 'bold' }}>Sign in now</Text>
                </TouchableOpacity>
              </View>
            </View>
          </Content>
        </Container>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  }
}

export default connect(mapStateToProps)(RegisterScreen)
