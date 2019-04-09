import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity, ScrollView } from 'react-native';
import { Container, Header, Left, Body, Right, Button, Content, Icon, Title, CardItem, Card, Col, Row, Grid, Footer, FooterTab } from 'native-base';

export default class ProductDetail extends React.Component {
  static navigationOptions = {
    title: 'Transaction Complete',
  };
  constructor(props) {
    super(props);
      this.state = {

      }
  }

  componentDidMount(){

  }

  render() {
    return (
      <Container>
        <Content>
          <View style={{ flex: 1, flexDirection: 'column', marginTop: 55 }}>
            <View style={{ alignItems: 'center' }}>
              <Image style={{width: 115, height: 115}} source={require('../app/assets/order-complete-shipped-human.png')} />
            </View>
            <View style={{ marginTop: 22 }}>
              <Text style={{ fontSize: 21, textAlign: 'center', fontWeight: 'bold', color: 'orange' }}>
                Thank you for your order!
              </Text>
            </View>
            <View style={{ marginTop: 13, paddingLeft: 10, paddingRight: 10 }}>
              <Text style={{ fontSize: 16, textAlign: 'center' }}>
                Your order is complete. You will receive an email with your order detail shortly.
              </Text>
            </View>
            <View style={{ marginTop: 22 }}>
              <Text style={{ fontSize: 21, textAlign: 'center', fontWeight: 'bold' }}>
                Order# 123456789
              </Text>
            </View>
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button style={{ backgroundColor: '#5cb85c' }} onPress={() => this.props.navigation.navigate('Home')}>
              <Icon type="FontAwesome" name="home" style={{ color: 'white'}} />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const styles = StyleSheet.create({

});
