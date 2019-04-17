import React, { Component } from 'react';
import { Alert, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Container, Content, Form, Header, Item, Input } from 'native-base';
import Hr from "react-native-hr-component";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { connect } from 'react-redux';
import { incCounter, decCounter } from '../../actions/actCounter';

class LoginScreen extends Component<Props> {

  constructor() {
    super();
    console.disableYellowBox = true; //disabled warning
  }

  componentWillMount() {

  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
        <Container style={{ padding: 15 }}>
          <Content style={{ padding: 5, marginTop: 45 }}>
            <View style={{ alignItems: 'center', marginBottom: 20 }}>
              <Image resizeMode= 'contain' style={{width: 135}} source={require('../../assets/logo.png')} />
            </View>
            <Form style={{ marginBottom: 20 }}>
              <View style={{ marginTop: 20 }}>
                <Text style={{ fontWeight: 'bold', marginBottom: -5 }}>USERNAME</Text>
                <Input/>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 0.5 }} />
              </View>
              <View style={{ marginTop: 20 }}>
                <Text style={{ fontWeight: 'bold', marginBottom: -5 }}>PASSWORD</Text>
                <Input secureTextEntry={true}/>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 0.5 }} />
              </View>
            </Form>

            <View style={{ marginBottom: 20 }}>
              <Button block style={{ backgroundColor: '#d71149' }}>
                <Text style={{ fontSize: 15, color: 'white' }}>Login</Text>
              </Button>
            </View>

            <Hr lineColor="#ccc" width={1} text="   or login with   " textStyles={{ fontSize: 14, color: '#b3b3b3' }} />

            <View style={{ flexDirection: 'row' }}>
              <View style={{ flex: 1, paddingRight: 5 }}>
                <Button block bordered light style={{ backgroundColor: '#f2f2f2', marginTop: 20 }}>
                  <View style={{ flex: 0.5, alignItems: 'center' }}>
                    <Image
                    style={{width: 20, height: 20}}
                    source={{uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Facebook_logo_%28square%29.png/600px-Facebook_logo_%28square%29.png'}}
                    />
                  </View>
                  <View style={{ flex: 1, paddingRight: 5, alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, color: 'black' }}>Facebook</Text>
                  </View>
                </Button>
              </View>
              <View style={{ flex: 1, paddingRight: 5 }}>
                <Button block bordered light style={{ backgroundColor: '#f2f2f2', marginTop: 20 }}>
                  <View style={{ flex: 0.5, alignItems: 'center' }}>
                    <Image
                      style={{width: 28, height: 28}}
                      source={{uri: 'http://pngimg.com/uploads/google/google_PNG19635.png'}}
                    />
                  </View>
                  <View style={{ flex: 1, paddingRight: 5, alignItems: 'center' }}>
                    <Text style={{ fontSize: 17, color: 'black' }}>Google</Text>
                  </View>
                </Button>
              </View>
            </View>
            <View style={{ flexDirection: 'row', marginTop: 14, alignItems: 'center' }}>
              <View style={{ flex: 1.4, alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 14, color: '#b3b3b3' }}>Don't have account?</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'flex-start', marginLeft: 6.5 }}>
                <TouchableOpacity style={{ backgroundColor: 'white' }} onPress={() => this.props.navigation.navigate('Register')}>
                  <Text style={{ fontSize: 14, color: '#d71149', fontWeight: 'bold' }}>Sign up now</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={{ marginTop: 7, marginLeft: 5, alignItems: 'center', display: 'none' }}>
              <TouchableOpacity style={{ backgroundColor: 'white' }} onPress={() => this.props.navigation.navigate('ForgotPassword')}>
                <Text style={{ fontSize: 14, color: '#d71149' }}>Forgot password?</Text>
              </TouchableOpacity>
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

export default connect(mapStateToProps)(LoginScreen)
