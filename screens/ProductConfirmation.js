import React, { Component } from 'react';
import { Alert, StyleSheet, Image, View, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import { Body, Button, Container, Footer, FooterTab, Header, Input, Content, Card, CardItem, Icon, Left, Right, Text, Thumbnail } from 'native-base';

export default class ProductCart extends React.Component {
  static navigationOptions = {
    title: 'Confirmation',
  };
  constructor(props) {
    super(props);
      this.state = {
        product_quantity: 0,
        data: [
          { "product_name": "Paramex Anti Pusing", "money": 100000 }
        ]
      }
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
    return `${num}`
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
                  <Text note>{`Total: Rp. ${this._formatRupiah(this.state.data[0].money)}`}</Text>
                </Body>
              </Left>
            </CardItem>
          </Card>
          <View style={{ marginTop: 4 }}>
            <View style={{ flexDirection: 'row', paddingTop: 3.5, paddingRight: 7 }}>
              <View style={{ flex: 5, alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 12 }}>Subtotal:</Text>
              </View>
              <View style={{ flex: 3, alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 12 }}>Rp.20.000</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 3.5, paddingRight: 7 }}>
              <View style={{ flex: 5, alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 12 }}>Shipping Fee:</Text>
              </View>
              <View style={{ flex: 3, alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 12 }}>Rp.20.000</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 8, paddingRight: 7 }}>
              <View style={{ flex: 5, alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Total:</Text>
              </View>
              <View style={{ flex: 3, alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'orange' }}>Rp.20.000</Text>
              </View>
            </View>
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button style={{ backgroundColor: '#FEB557' }} onPress={() => this.props.navigation.navigate('Home')}>
              <Icon type="FontAwesome" name="home" style={{ color: 'white'}} />
            </Button>
            <Button style={{ backgroundColor: 'green' }}  onPress={() => this.props.navigation.navigate('ProductCheckout')}>
              <View>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 14 }}>
                  {`Order Now`}
                </Text>
              </View>
            </Button>
            <Button style={{ backgroundColor: '#FEB557' }} onPress={() => this.props.navigation.navigate('ProductCart')}>
              <Icon name="cart" style={{ color: 'white'}} />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const styles = StyleSheet.create({

});
