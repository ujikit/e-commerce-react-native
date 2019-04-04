import React, { Component } from 'react';
import {StyleSheet, Image, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Content, Icon, Title, CardItem, Card, Col, Row, Grid, Footer, FooterTab } from 'native-base';

export default class ProductDetail extends React.Component {
  static navigationOptions = {
    title: 'Detail Product',
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
            <Button style={{ backgroundColor: 'white' }} disabled>
              <Icon name="chatboxes" style={{ color: 'orange' }} />
            </Button>
            <Button style={{ backgroundColor: 'green' }} disabled>
              <Icon name="cash" style={{ color: 'white' }} />
            </Button>
            <Button style={{ backgroundColor: 'white' }} disabled>
              <Icon name="cart" style={{ color: 'orange' }} />
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
