import React, { Component } from 'react';
import { Alert, StyleSheet, Image, View, TouchableOpacity, ScrollView} from 'react-native';
import { Body, Button, Content, Card, CardItem, Container, Footer, FooterTab, Form, Header, Input, Item, Icon, Label, Left, Picker, Right, Text, Textarea, Thumbnail } from 'native-base';

export default class Checkout extends React.Component {
  static navigationOptions = {
    title: 'Checkout',
  };
  constructor(props) {
    super(props);
      this.state = {
        product_quantity: 0,
        final_price: 0,
        selectedItem: undefined,
        paymentType: undefined,
        courierType: undefined,
        results: {
          items: []
        }
      }
      this.money = 100000;
  }

  componentDidMount(){

  }

  _onValueChangeCourier = (value: string) => {
    this.setState({
      paymentType : value
    });
  }

  _onValueChangePayment = (value: string) => {
    this.setState({
      courierType : value
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
              <Input value="fauzizaki15@gmail.com" />
            </Item>
            <Item stackedLabel>
              <Label>Address:</Label>
              <Input
                value="Jalan Elang IV, Sawah Lama, Ciputat , South Tangerang, Sawah Lama, Ciputat, Kota Tangerang Selatan, Banten 15413"
                multiline={true}
                numberOfLines={10}
              />
            </Item>
            <Item picker style={{ marginTop: 20, marginBottom: 20, paddingRight: 10, paddingLeft: 10 }}>
              <Label style={{ fontSize: 15 }}>Courier Options:</Label>
              <Picker mode="dropdown" iosIcon={<Icon name="arrow-down" />} style={{ width: undefined }} placeholder="Select a Courier" placeholderStyle={{ color: "#bfc6ea" }} placeholderIconColor="#007aff" selectedValue={this.state.paymentType} onValueChange={this._onValueChangeCourier.bind(this)}>
                <Picker.Item label="Indomaret" value="key0" />
                <Picker.Item label="Alfamart" value="key1" />
                <Picker.Item label="Bank Transfer" value="key2" />
                <Picker.Item label="Kartu Kredit" value="key3" />
              </Picker>
            </Item>
            <Item picker style={{ marginTop: 20, marginBottom: 20, paddingRight: 10, paddingLeft: 10 }}>
              <Label style={{ fontSize: 15 }}>Payment Options:</Label>
              <Picker mode="dropdown" iosIcon={<Icon name="arrow-down" />} style={{ width: undefined }} placeholder="Select a Payment" placeholderStyle={{ color: "#bfc6ea" }} placeholderIconColor="#007aff" selectedValue={this.state.courierType} onValueChange={this._onValueChangePayment.bind(this)}>
                <Picker.Item label="Tiki (Standart Delivery) - Rp.11.000,00" value="key1" />
                <Picker.Item label="JNE (Express Delivery) - Rp.43.000,00" value="key2" />
              </Picker>
            </Item>
          </Form>
        </Content>
        <Footer>
          <FooterTab>
            <Button style={{ backgroundColor: '#FEB557' }} onPress={() => this.props.navigation.navigate('Home')}>
              <Icon type="FontAwesome" name="home" style={{ color: 'white'}} />
            </Button>
            <Button style={{ backgroundColor: 'green' }} >
              <View>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 14 }}>
                  {`Next -> Confirmation`}
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
