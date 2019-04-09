import React, { Component } from 'react';
import { Alert, StyleSheet, FlatList, Image, View, TouchableOpacity, ScrollView, TextInput} from 'react-native';
import { Body, Button, Container, Footer, FooterTab, Header, Input, Content, Card, CardItem, Left, Right, Text, Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';


class ProductCart extends Component {

  constructor(props) {
    super(props);
    this.state = {
      cartList: [

      ],
      product_quantity: 0,
      final_price: 0,
      all_product_data_price: [],
      total_price: 0
    }
  }

  componentWillMount() {
    this.props.navigation.addListener("willFocus", route => {
      const { navigation } = this.props;
      const product_data_key = navigation.getParam('product_data_key');
      const product_data_name = navigation.getParam('product_data_name');
      const product_data_image = navigation.getParam('product_data_image');
      const product_data_price = navigation.getParam('product_data_price');
      const product_data_description = navigation.getParam('product_data_description');

      if (product_data_key !== undefined) {
        const findKey = this.state.cartList.findIndex((val, i) => {
          return val.product_data_key === product_data_key;
        });
        if (findKey === -1) {
          let cartList = this.state.cartList;
          cartList.push({
            product_data_key: product_data_key,
            product_data_name: product_data_name,
            product_data_image: product_data_image,
            product_data_price: product_data_price,
            product_data_description: product_data_description,
            temp_product_data_quantity: 1,
            temp_product_data_price: product_data_price
          });

          const total1 = this.state.cartList.map(item => item.temp_product_data_price)
          const total2 = this._totalPrice(total1)
          this.setState({
            cartList: cartList,
            total_price: total2
          })
        }
      }
    })
  }

  componentDidMount() {
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

  _incQuantity = (index) => {
    this.state.cartList[index].temp_product_data_quantity = this.state.cartList[index].temp_product_data_quantity+1
    this.state.cartList[index].temp_product_data_price = parseInt(this.state.cartList[index].temp_product_data_quantity, 10)*parseInt(this.state.cartList[index].product_data_price, 10)
    this.forceUpdate()

    const total1 = this.state.cartList.map(item => item.temp_product_data_price)
    const total2 = this._totalPrice(total1)
    this.setState({
      total_price: total2
    })
  }

  _decQuantity = (index) => {
    this.state.cartList[index].temp_product_data_quantity = this.state.cartList[index].temp_product_data_quantity-1
    this.state.cartList[index].temp_product_data_price = parseInt(this.state.cartList[index].temp_product_data_quantity, 10)*parseInt(this.state.cartList[index].product_data_price, 10)
    this.forceUpdate()

    const total1 = this.state.cartList.map(item => item.temp_product_data_price)
    const total2 = this._totalPrice(total1)
    this.setState({
      total_price: total2
    })
  }

  _deleteCartItem = () => {
    return Alert.alert('tes')
  }

  render() {
    const { navigate } = this.props.navigation;
    if (this.state.cartList.length == 0) {
      return (
        <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center',alignItems: 'center' }}>
          <Text style={{ fontSize: 20, color: '#c43a43' }}>
            Empty Cart
          </Text>
        </View>
      )
    }

    return (
      <Container>
        <Content>
          <View style={{ flex: 1, flexDirection: 'column', paddingRight: 3.5, paddingLeft: 3.5 }}>
            <ScrollView>
              <FlatList
                style={{ flex: 1 }}
                data={this.state.cartList}
                renderItem={({ item, index }) => (
                  <Card>
                    <CardItem>
                      <Left>
                        <Thumbnail source={{uri: `${item.product_data_image}`}} />
                        <Body>
                          <Text>{ item.product_data_name }</Text>
                          <Text note>{`Total: Rp. ${item.temp_product_data_price}`}</Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem>
                    <Left>
                      <Text note>{`Price: ${item.product_data_price}/pcs`}</Text>
                    </Left>
                    <Body style={{ marginRight: -120, marginBottom: -10 }}>
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Button success small onPress={ () => this._decQuantity(index) } style={{ width: 20, justifyContent: 'center', alignItems: 'center' }}>
                          <Icon name='minus' style={{ fontSize: 11, color: 'white' }} />
                        </Button>
                        <View style={{ marginLeft: 8, marginTop: -11 }}>
                          <Input placeholder={`${item.temp_product_data_quantity}`} style={{ justifyContent: 'center', alignItems: 'center' }} disabled />
                        </View>
                        <Button success small onPress={ () => this._incQuantity(index) } style={{ width: 20, justifyContent: 'center', alignItems: 'center' }}>
                          <Icon name='plus' style={{ fontSize: 11, color: 'white' }} />
                        </Button>
                      </View>
                    </Body>
                    <Right>
                      <Button danger small onPress={ () => this._deleteCartItem() } style={{ width: 40, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon name='trash' style={{ fontSize: 11,color: 'white' }}/>
                      </Button>
                    </Right>
                  </CardItem>
                </Card>
              )}
              keyExtractor={(item, index) => index.toString()}
              />
            </ScrollView>
          </View>
        </Content>
        <Footer style={{ height: 40 }}>
          <FooterTab style={{ backgroundColor: '#c43a43' }}>
            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
              <View style={{ flex: 1, justifyContent: 'flex-start', paddingLeft: 20 }}>
                <Text style={{ fontWeight: 'bold', color: 'white' }}>
                  Total:
                </Text>
              </View>
              <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end', paddingRight: 20 }}>
                <Text style={{ fontWeight: 'bold', color: 'white' }}>
                  Rp. {`${this.state.total_price}`}
                </Text>
              </View>
            </View>
          </FooterTab>
        </Footer>
        <Footer>
          <FooterTab>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Button style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} success
                onPress={() => navigate('ProductCheckout', {
                            data_cart: this.state.cartList,
                            total_price: this.state.total_price
                          })
                        }
                >
                <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white' }}>Process to checkout</Text>
              </Button>
            </View>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

export default ProductCart;
