import React, { Component } from 'react';
import { Alert, StyleSheet, Image, Text, View, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import { Button, Container, Footer, FooterTab, Header, Content, Card, CardItem, Icon, Right } from 'native-base';

export default class ProductCart extends React.Component {
  static navigationOptions = {
    title: 'Product Cart',
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
    const productName = "Paracetamol";
    const productPrice = 50000;
    const productImage = "https://doktersehat.com/wp-content/uploads/2017/11/paracetamol.jpg";
    this.setState({
      product_data: {
        productName,
        productPrice,
        productImage
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

  _deleteCartItem = () => {
    return Alert.alert('tes')
  }

  render() {
    return (
      <Container>
        <Content style={{ paddingLeft: 7, paddingRight: 7, paddingTop: 5 }}>
          <Card>
            <CardItem>
            <Text style={{ marginRight: 10 }}>1.</Text>
              <Image
                style={{width: 30, height: 30, borderRadius: 50}}
                source={{uri: 'https://doktersehat.com/wp-content/uploads/2017/11/paracetamol.jpg'}}
              />
              <Text style={{ marginLeft: 10 }}>Paracetamol</Text>
              <Right>
                <Button transparent small onPress={ () => this._deleteCartItem() }>
                  <Icon name='trash' style={{ color: '#ff0000ad', fontSize: 25 }} />
                </Button>
              </Right>
            </CardItem>
            <CardItem>
            <Text style={{ marginRight: 10 }}>2.</Text>
              <Image
                style={{width: 30, height: 30, borderRadius: 50}}
                source={{uri: 'https://www.konimex.com/0_repository/images/paramex(3).jpg'}}
              />
              <Text style={{ marginLeft: 10 }}>Paramex Anti Pusing</Text>
              <Right>
                <Button transparent small onPress={ () => this._deleteCartItem() }>
                  <Icon name='trash' style={{ color: '#ff0000ad', fontSize: 25 }} />
                </Button>
              </Right>
            </CardItem>
            <CardItem>
            <Text style={{ marginRight: 10 }}>3.</Text>
              <Image
                style={{width: 30, height: 30, borderRadius: 50}}
                source={{uri: 'https://www.ayobandung.com/images-bandung/post/articles/2018/08/08/36464/kucing.jpg'}}
              />
              <Text style={{ marginLeft: 10 }}>Kucing imut nih, monggo</Text>
              <Right>
                <Button transparent small onPress={ () => this._deleteCartItem() }>
                  <Icon name='trash' style={{ color: '#ff0000ad', fontSize: 25 }} />
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
            <Button style={{ backgroundColor: 'green' }} >
              <View>
                <Text style={{ textAlign: 'center', color: 'white' }}>
                  Checkout
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
