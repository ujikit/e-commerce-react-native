import React, { Component } from 'react';
import { Alert, StyleSheet, FlatList, Image, View, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import { Body, Button, Container, Footer, FooterTab, Header, Input, Content, Card, CardItem, Icon, Left, Right, Text, Thumbnail } from 'native-base';

export default class ProductCart extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        product_quantity: 0,
        product_data: [

        ],
        sum_all_price: undefined,
        final_price: undefined
      }
  }

  componentDidMount(){
    const { navigation } = this.props;
    const { data_cart, total_price, payment_price, courier_price } = navigation.state.params;
    const sum_all_price = data_cart.map(item => item.temp_product_data_price);
    const final_price = parseInt(this._totalPrice(sum_all_price), 10) + parseInt(courier_price, 10);
    // return Alert.alert(
    //   ``,
    //   `data_cart: ${JSON.stringify(data_cart)} payment_price: ${JSON.stringify(payment_price)} courier_price: ${JSON.stringify(courier_price)} sum_all_price: ${JSON.stringify(this._totalPrice(sum_all_price))} final_price: ${JSON.stringify(final_price)}`
    // )
    this.setState({
      product_data: data_cart,
      payment_price: payment_price,
      courier_price: courier_price,
      sum_all_price: this._totalPrice(sum_all_price),
      final_price: final_price
    })
  }

  _totalPrice = arr => arr.reduce((accumulator, currentValue) => parseInt(accumulator, 10) + parseInt(currentValue, 10))

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

  render() {
    return (
      <Container>
        <Content style={{ paddingLeft: 4, paddingRight: 4, paddingTop: 5 }}>
          <FlatList
            data={this.state.product_data}
            numColumns={1}
            renderItem={({ item }) => (
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: `${item.product_data_image}`}} />
                    <Body>
                      <Text>{ item.product_data_name }</Text>
                      <Text note>{`Total: Rp. ${this._formatRupiah(item.temp_product_data_price)}`}</Text>
                    </Body>
                  </Left>
                </CardItem>
              </Card>
            )}
            keyExtractor={item => item.product_data_key.toString()}
            ItemSeparatorComponent={this.renderSeparator}
          />
          <View style={{ marginTop: 4 }}>
            <View style={{ flexDirection: 'row', paddingTop: 3.5, paddingRight: 7 }}>
              <View style={{ flex: 5, alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 12 }}>Subtotal:</Text>
              </View>
              <View style={{ flex: 3, alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 12 }}>{`${this.state.sum_all_price}`}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 3.5, paddingRight: 7 }}>
              <View style={{ flex: 5, alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 12 }}>Shipping Fee:</Text>
              </View>
              <View style={{ flex: 3, alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 12 }}>{`${this.state.courier_price}`}</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', paddingTop: 8, paddingRight: 7 }}>
              <View style={{ flex: 5, alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Total:</Text>
              </View>
              <View style={{ flex: 3, alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 14, fontWeight: 'bold', color: 'orange' }}>{`${this.state.final_price}`}</Text>
              </View>
            </View>
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Button style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} success
                onPress={() => this.props.navigation.navigate('ProductTransactionComplete', {
                            data_cart: this.state.data_cart
                          })
                        }
                >
                <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white' }}>Confirm</Text>
              </Button>
            </View>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const styles = StyleSheet.create({

});
