import React, { Component } from 'react';
import { Alert, StyleSheet, Image, View, TouchableOpacity, ScrollView} from 'react-native';
import { Body, Button, Content, Card, CardItem, Container, Footer, FooterTab, Form, Header, Input, Item, Icon, Label, Left, Picker, Right, Text, Textarea, Thumbnail } from 'native-base';

export default class Checkout extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        payment_price: undefined,
        courier_price: undefined,
        data_cart: [],
        total_price: 0
      }
    this.money = 100000;
  }

  componentWillMount(){
    const { navigation } = this.props;
    const { data_cart, total_price } = navigation.state.params;
    this.setState({
      data_cart: data_cart,
      total_price: total_price
    })
  }

  _onValueChangeCourier = (value: string) => {
    this.setState({
      payment_price : value
    });
  }

  _onValueChangePayment = (value: string) => {
    this.setState({
      courier_price : value
    });
  }

  _deleteCartItem = () => {
    return Alert.alert('tes')
  }

  render() {
    return (
      <Container>
        <Content style={{ paddingRight: 10, paddingLeft: 10, marginTop: 15 }}>
          <Form>
            <Item stackedLabel>
              <Label>Email:</Label>
              <Input placeholder="fauzizaki15@gmail.com" />
            </Item>
            <Item stackedLabel>
              <Label>Address:</Label>
              <Input
                placeholder="Jalan Elang IV, Sawah Lama, Ciputat , South Tangerang, Sawah Lama, Ciputat, Kota Tangerang Selatan, Banten 15413"
                multiline={true}
                numberOfLines={10}
              />
            </Item>
            <Item picker style={{ marginTop: 20, marginBottom: 20, paddingRight: 10, paddingLeft: 10 }}>
              <Label style={{ fontSize: 15 }}>Payment Options:</Label>
              <Picker mode="dropdown" iosIcon={<Icon name="arrow-down" />} style={{ width: undefined }} placeholder="Select a Courier" placeholderStyle={{ color: "#bfc6ea" }} placeholderIconColor="#007aff" selectedValue={this.state.payment_price} onValueChange={this._onValueChangeCourier.bind(this)}>
                <Picker.Item label="Indomaret" value="Indomaret" />
                <Picker.Item label="Alfamart" value="Alfamart" />
                <Picker.Item label="Bank Transfer" value="Bank Transfer" />
                <Picker.Item label="Kartu Kredit" value="Kartu Kredit" />
              </Picker>
            </Item>
            <Item picker style={{ marginTop: 20, marginBottom: 20, paddingRight: 10, paddingLeft: 10 }}>
              <Label style={{ fontSize: 15 }}>Courier Options:</Label>
              <Picker mode="dropdown" iosIcon={<Icon name="arrow-down" />} style={{ width: undefined }} placeholder="Select a Payment" placeholderStyle={{ color: "#bfc6ea" }} placeholderIconColor="#007aff" selectedValue={this.state.courier_price} onValueChange={this._onValueChangePayment.bind(this)}>
                <Picker.Item label="Tiki (Standart Delivery) - Rp.11.000,00" value="11000" />
                <Picker.Item label="JNE (Express Delivery) - Rp.43.000,00" value="43000" />
              </Picker>
            </Item>
          </Form>
        </Content>
        <Footer>
          <FooterTab>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Button style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} success
                onPress={() => this.props.navigation.navigate('ProductConfirmation', {
                            data_cart: this.state.data_cart,
                            total_price: this.state.total_price,
                            payment_price: this.state.payment_price,
                            courier_price: this.state.courier_price
                          })
                        }
                >
                <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white' }}>Checkout</Text>
              </Button>
            </View>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
