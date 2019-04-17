import React, { Component } from 'react';
import { Alert, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Container, Content, Form, Header, Item, Input } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { connect } from 'react-redux';

class RegisterScreen extends Component<Props> {

  constructor() {
    super();
    this.state = {
      username: undefined
    }
  }

  componentWillMount() {

  }

  // _registerUser = () => {
  //   axios.post('/user', {
  //     username: this.state.register_data.username,
  //     lastName: ,
  //     lastName: ,
  //     lastName: ,
  //     lastName: ,
  //     lastName: ,
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });
  // }

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
                <Input placeholderTextColor='#b3b3b3' placeholder='Username' />
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 0.5 }} />
              </View>
              <View style={{ marginTop: 5 }}>
                <Input placeholderTextColor='#b3b3b3' placeholder='First Name' />
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 0.5 }} />
              </View>
              <View style={{ marginTop: 5 }}>
                <Input placeholderTextColor='#b3b3b3' placeholder='Last Name' />
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 0.5 }} />
              </View>
              <View style={{ marginTop: 5 }}>
                <Input placeholderTextColor='#b3b3b3' placeholder='Email' />
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 0.5 }} />
              </View>
              <View style={{ marginTop: 5 }}>
                <Input placeholderTextColor='#b3b3b3' placeholder='Phone' />
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 0.5 }} />
              </View>
              <View style={{ marginTop: 5 }}>
                <Input placeholderTextColor='#b3b3b3' placeholder='New Password' secureTextEntry={true}/>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 0.5 }} />
              </View>
            </Form>

            <View>
              <Button block style={{ backgroundColor: '#d71149' }}>
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
