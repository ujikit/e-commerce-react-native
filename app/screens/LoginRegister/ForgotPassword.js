import React, { Component } from 'react';
import { Alert, Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button, Container, Content, Form, Header, Item, Input } from 'native-base';
import Hr from "react-native-hr-component";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { connect } from 'react-redux';

class HomeScreen extends Component<Props> {

  constructor() {
    super();
    // console.disableYellowBox = true; //disabled warning
  }

  componentWillMount() {

  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>
        <Container style={{ padding: 15 }}>
          <Content style={{ padding: 5, marginTop: 120 }}>
            <Form style={{ marginBottom: 25 }}>
              <View style={{ marginTop: 20 }}>
                <Text style={{ fontWeight: 'bold', marginBottom: -5 }}>EMAIL / USERNAME</Text>
                <Input/>
                <View style={{ borderBottomColor: 'black', borderBottomWidth: 0.5 }} />
              </View>
            </Form>
            <View style={{ marginTop: 14 }}>
              <Button block style={{ backgroundColor: '#d71149' }}>
                <Text style={{ fontSize: 15, color: 'white' }}>SEND</Text>
              </Button>
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

export default connect(mapStateToProps)(HomeScreen)
