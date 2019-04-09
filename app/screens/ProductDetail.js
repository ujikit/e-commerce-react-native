import React, { Component } from 'react';
import { Alert, StyleSheet, Image, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import { Container, Left, Body, Right, Button, Content, Icon, Title, CardItem, Card, Col, Row, Grid, Footer, FooterTab } from 'native-base';

export default class ProductDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count : 1,
      product_data: [],
      button_cart_toogle: 'grey'
    }
  }

  componentDidMount(){
    const { navigation } = this.props;
    const product_data_key = navigation.getParam('product_data_key');
    const product_data_name = navigation.getParam('product_data_name');
    const product_data_price = navigation.getParam('product_data_price');
    const product_data_image = navigation.getParam('product_data_image');
    const product_data_description = navigation.getParam('product_data_description');

    this.setState({
      product_data: {
        product_data_key,
        product_data_name,
        product_data_price,
        product_data_image,
        product_data_description
      }
    });
  }

  _saveToCart = () => {
    this.setState({
      button_cart_toogle: '#d8414a'
    })
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
    return `Rp. ${num},${cents}`
  }

  render() {
    return (
      <Container style={{ marginTop: -27 }}>
        <Content>
          <Card>
            <CardItem>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: `${this.state.product_data.product_data_image}`}} style={{height: 300, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <View style={{ flex: 1, flexDirection: 'row', marginBottom: 8 }}>
                <View style={{ flex: 5, flexDirection: 'row' }}>
                  <Icon name='star' style={styles.starColor} />
                  <Icon name='star' style={styles.starColor}/>
                  <Icon name='star-half' style={styles.starColor} />
                </View>
                <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'flex-end', marginTop: -8 }}>
                  <Button transparent
                    onPress={() =>
                      this.props.navigation.navigate('ProductCart', {
                            product_data_key: this.state.product_data.product_data_key,
                            product_data_name: this.state.product_data.product_data_name,
                            product_data_image: this.state.product_data.product_data_image,
                            product_data_price: this.state.product_data.product_data_price,
                            product_data_description: this.state.product_data.product_data_description
                          }
                        )
                      }
                    >
                    <Icon name='cart' style={{ color: `${this.state.button_cart_toogle}`}}/>
                  </Button>
                </View>
              </View>
              <View style={{ justifyContent: 'flex-start', marginBottom: 8 }}>
                <Text style={styles.textProduct}>{this.state.product_data.product_data_name}</Text>
              </View>
              <View style={{ justifyContent: 'flex-start', marginBottom: 8 }}>
                <Text style={styles.textPrice}>{`Rp.${this.state.product_data.product_data_price}`}</Text>
              </View>
              <View style={{ justifyContent: 'flex-start' }}>
                <Text style={{ fontSize: 14 }}>{this.state.product_data.product_data_description}</Text>
              </View>
            </View>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  textProduct: {
    color: 'black',
    fontSize: 18
  },
  textPrice: {
    color: '#d8414a',
    fontSize: 18
  },
  starColor: {
    color: '#d8414a'
  },
  footer: {
    backgroundColor: 'white',
  }
  });
