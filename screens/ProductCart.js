import React, { Component } from 'react';
import { Alert, StyleSheet, Image, View, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import { Body, Button, Container, Footer, FooterTab, Header, Input, Content, Card, CardItem, Icon, Left, Right, Text, Thumbnail } from 'native-base';

export default class ProductCart extends React.Component {
  static navigationOptions = {
    title: 'Product Cart',
  };
  constructor(props) {
    super(props);
      this.state = {
        product_quantity: 0,
        final_price: 0
      }
      this.money = 100000;
  }

  componentDidMount(){

  }

  _formatRupiah = (num) => {
    num = num.toString().replace(/\Rp|/g,'');
    if(isNaN(num))
      num = "0";
    sign = (num == (num = Math.abs(num)));
    num = Math.floor(num*100+0.50000000001);
    cents = num%100;
    num = Math.floor(num/100).toString();
    if(cents<10)
      cents = "0" + cents;
    for (var i = 0; i < Math.floor((num.length-(1+i))/3); i++)
      num = num.substring(0,num.length-(4*i+3))+'.'+
      num.substring(num.length-(4*i+3));
    return `${num},${cents}`
  }

  _formatK = (num) => {
    let data = num.toString().split("")
    if (data.length >= 4) {
      if (data.length === 11) {
        data.length = 8;
      }
      if (data.length === 10) {
        data.length = 7;
      }
      if (data.length === 9) {
        data.length = 6;
      }
      if (data.length === 8) {
        data.length = 5;
      }
      else if (data.length === 7) {
        data.length = 4;
      }
      else if (data.length === 6) {
        data.length = 3;
      }
      else if (data.length === 5) {
        data.length = 2;
      }
      else if (data.length === 4) {
        data.length = 1;
      }
      return `Rp.${data.join("")}K`
    }
    else {
      return `Rp.${data.join("")}`
    }
  }

  _incQuantity = () => {
    const newCounter = this.state.product_quantity+1;
    return this.setState({
      product_quantity: newCounter,
      final_price: this.money*newCounter
    })
  }

  _decQuantity = () => {
    const newCounter = this.state.product_quantity-1;
    if (newCounter.toString().match(/-/g)) { return Alert.alert('My apologize, you have reached a limit order.'); }
    return this.setState({
      product_quantity: newCounter,
      final_price: this.money*newCounter
    })
  }

  _deleteCartItem = () => {
    return Alert.alert('tes')
  }

  render() {
    return (
      <Container>
        <Content style={{ paddingLeft: 7, paddingRight: 7, paddingTop: 5 }}>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://doktersehat.com/wp-content/uploads/2017/11/paracetamol.jpg'}} />
                <Body>
                  <Text>1. Paramex Anti Pusing</Text>
                  <Text note>{`Total: Rp. ${this._formatRupiah(this.state.final_price)}`}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Left>
                <Text note>{`Price: ${this._formatK(this.money)} x ${this.state.product_quantity}`}</Text>
              </Left>
              <Body style={{ marginRight: -120, marginBottom: -10 }}>
                <View style={{ flex: 1, flexDirection: 'row' }}>
                  <Button success small transparent onPress={ () => this._decQuantity() }>
                    <Icon name='arrow-back' style={{ fontSize: 20 }} />
                  </Button>
                  <View style={{ marginLeft: -5, marginTop: -11 }}>
                    <Input placeholder={`${this.state.product_quantity}`} disabled />
                  </View>
                  <Button success small transparent onPress={ () => this._incQuantity() }>
                    <Icon name='arrow-forward' style={{ fontSize: 20 }} />
                  </Button>
                </View>
              </Body>
              <Right>
              <Button danger small onPress={ () => this._deleteCartItem() }>
                <Icon name='trash' />
              </Button>
              </Right>
            </CardItem>
          </Card>
        </Content>
        <Footer>
          <FooterTab>
            <Button style={{ backgroundColor: '#FEB557' }} onPress={() => this.props.navigation.navigate('Home')}>
              <Icon type="FontAwesome" name="home" style={{ color: 'white'}} />
            </Button>
            <Button style={{ backgroundColor: 'green' }}  onPress={() => this.props.navigation.navigate('ProductCheckout')}>
              <View>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 14 }}>
                  {`Next -> Checkout`}
                </Text>
              </View>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const styles = StyleSheet.create({

});
