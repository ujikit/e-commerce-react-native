import React, { Component } from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Content, Icon, Title, CardItem, Card, Col, Row, Grid, Footer, FooterTab } from 'native-base';

export default class ProductDetail extends React.Component {
  static navigationOptions = {
    title: 'Product Detail',
  };
  constructor(props) {
    super(props);
      this.state = {
        count : 1,
        product_data: [

        ]
      }
  }

  componentDidMount(){
    const { navigation } = this.props;
    const productName = navigation.getParam('productName');
    const productPrice = navigation.getParam('productPrice');
    const productImage = navigation.getParam('productImage');
    const productDescription = navigation.getParam('productDescription');
    this.setState({
      product_data: {
        productName,
        productPrice,
        productImage,
        productDescription
      }
    });
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
      <Container>
        <Content>
          <Card>
            <CardItem>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: this.state.product_data.productImage}} style={{height: 300, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
            <View style={{ flex: 1, flexDirection: 'column' }}>
              <View style={{ flexDirection: 'row', marginBottom: 8 }}>
                <Icon name='star' style={styles.starColor} />
                <Icon name='star' style={styles.starColor}/>
                <Icon name='star-half' style={styles.starColor} />
              </View>
              <View style={{ justifyContent: 'flex-start', marginBottom: 8 }}>
                <Text style={styles.textProduct}>{this.state.product_data.productName}</Text>
              </View>
              <View style={{ justifyContent: 'flex-start', marginBottom: 8 }}>
                <Text style={styles.textPrice}>{`Rp. ${this.state.product_data.productPrice}`}</Text>
              </View>
              <View style={{ justifyContent: 'flex-start' }}>
                <Text style={{ fontSize: 14 }}>{this.state.product_data.productDescription}</Text>
              </View>
            </View>
            </CardItem>
          </Card>
        </Content>
        <Footer>
          <FooterTab>
            <Button style={{ backgroundColor: '#FEB557' }}>
              <Icon name="chatboxes" style={{ color: 'white'}} />
            </Button>
            <Button style={{ backgroundColor: 'green' }}>
              <Text style={{ color: 'white' }}>Buy Now</Text>
            </Button>
            <Button style={{ backgroundColor: '#FEB557' }} onPress={() => this.props.navigation.navigate('ProductCart')} >
              <View style={{ position: 'absolute',height: 20, width: 20, borderRadius: 15, backgroundColor: 'rgba(95,197,123,0.8)', right: 35, bottom: 25, zIndex: 9999999, }}>
                <Text style={{ textAlign: 'center', color: 'white' }}>
                  0
                </Text>
              </View>
              <Icon name="cart" style={{ color: 'white'}} />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
const styles = StyleSheet.create({
  header: {
  backgroundColor: '#E91E63',
  },
  textProduct: {
    color: 'black',
    fontSize: 18
  },
  textPrice: {
    color: '#E91E63',
    fontSize: 18
  },
  starColor: {
    color: 'orange'
  },
  footer: {
    backgroundColor: 'white',
  }
  });
