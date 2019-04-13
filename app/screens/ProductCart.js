import React, { Component } from 'react'
import { Alert, StyleSheet, FlatList, Image, View, TouchableOpacity, ScrollView, TextInput} from 'react-native'
import { Body, Button, Container, Footer, FooterTab, Header, Input, Content, Card, CardItem, Left, Right, Text, Thumbnail } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Axios from 'axios'

// Helper
import { TotalPriceArray } from '../helper/TotalPriceArray'

class ProductCart extends Component {

  constructor(props) {
    super(props)
    this.state = {
      order_data: [],
      product_quantity: 0,
      final_price: 0,
      all_price_order: [],
      total_price: 0
    }
  }

  componentWillMount() {
    this.props.navigation.addListener("willFocus", route => {

      const { navigation } = this.props
      const final_order = []

      Axios.get(`http://192.168.0.44:3333/api/v1/orders`)
      .then(res => {
        if (res.data.data.length == 0) {
          return this.setState({ order_data: [] })
        } // handle bug after add the first item to cart and then you delete the last one item and go back to the cart list.. and there is an items were cached to the list after deleted. We need to destroy it with this condition.
        for (var i = 0; i < res.data.data.length; i++) {
          final_order.push({
            key_order: res.data.data[i].key_order,
            category_order: res.data.data[i].category_order,
            name_order: res.data.data[i].name_order,
            image_order: res.data.data[i].image_order,
            price_order: res.data.data[i].price_order,
            description_order: res.data.data[i].description_order,
            temp_quantity_order: 1,
            temp_price_order: res.data.data[i].price_order
          })
        }
        const init_total_price1 = res.data.data.map(item => item.price_order)
        const init_total_price2 = TotalPriceArray(init_total_price1)
        this.setState({
          order_data: final_order,
          total_price: init_total_price2
        })
      })
      .catch(error => {
        return Alert.alert(
          ``,
          `Cart error: ${JSON.stringify(error)}`
        )
      })

      if (navigation.state.params === undefined) {
        return 0
      }
      else if (navigation.state.params !== undefined) {
        const { key_product, category_product, name_product, price_product, image_product, description_product } = navigation.state.params
        this.state.order_data.push({
          product_data_key: key_product,
          product_data_name: category_product,
          product_data_name: name_product,
          product_data_image: price_product,
          product_data_price: image_product,
          product_data_description: description_product,
          temp_product_data_quantity: 1,
          temp_product_data_price: price_product
        })
        this.setState({
          order_data: this.state.order_data
        })
      }

    })
  }

  _incQuantity = (index) => {
    this.state.order_data[index].temp_quantity_order = this.state.order_data[index].temp_quantity_order+1
    this.state.order_data[index].temp_price_order = parseInt(this.state.order_data[index].temp_quantity_order, 10)*parseInt(this.state.order_data[index].price_order, 10)
    this.forceUpdate()

    const total1 = this.state.order_data.map(item => item.temp_price_order)
    const total2 = TotalPriceArray(total1)
    this.setState({
      total_price: total2
    })
  }

  _decQuantity = (index, name_order) => {
    const newCounter = this.state.order_data[index].temp_quantity_order-1
    if (newCounter.toString().match(/-/g)) { return Alert.alert('My apologize, you have reached a limit order.') }
    this.state.order_data[index].temp_quantity_order = this.state.order_data[index].temp_quantity_order-1
    this.state.order_data[index].temp_price_order = parseInt(this.state.order_data[index].temp_quantity_order, 10)*parseInt(this.state.order_data[index].price_order, 10)
    this.forceUpdate()

    const total1 = this.state.order_data.map(item => item.temp_price_order)
    const total2 = TotalPriceArray(total1)
    this.setState({
      total_price: total2
    })
  }

  _deleteCartItem = (key_order, name_order) => {
    return Alert.alert(
      'Delete cart item',
      `Are you sure want to delete cart item as a "${name_order}" ?`,
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'OK', onPress: () =>
          {

            for (var i = 0; i < this.state.order_data.length; i++) {
              if (this.state.order_data[i].key_order == key_order ) {
                this.state.order_data.splice(i, 1)
              }
            }

            const total1 = this.state.order_data.map(item => item.temp_price_order)
            let total2;
            if (this.state.order_data.length === 0) {
              total2 = "0"
            }
            else {
              total2 = TotalPriceArray(total1)
            }

            Axios.delete(`http://192.168.0.44:3333/api/v1/order/${key_order}`)
            .then(res => {
              if (res.data.status == `success`) {
                this.setState({
                  order_data: this.state.order_data,
                  total_price: total2
                })
              }
            })
            .catch(error => {
              return Alert.alert( ``, `Delete cart error: ${JSON.stringify(error)}` )
            })
          }
        },
      ],
      { cancelable: false },
    )
  }

  render() {
    const { navigate } = this.props.navigation
    if (this.state.order_data.length == 0) {
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
                data={this.state.order_data}
                renderItem={({ item, index }) => (
                  <Card>
                    <CardItem>
                      <Left>
                        <Thumbnail source={{uri: `${item.image_order}`}} />
                        <Body>
                          <Text>{ item.name_order }</Text>
                          <Text note>{`Total: Rp. ${item.temp_price_order}`}</Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem>
                    <Left>
                      <Text note>{`Price: ${item.price_order}/pcs`}</Text>
                    </Left>
                    <Body style={{ marginRight: -120, marginBottom: -10 }}>
                      <View style={{ flex: 1, flexDirection: 'row' }}>
                        <Button success small onPress={ () => this._decQuantity(index) } style={{ width: 20, justifyContent: 'center', alignItems: 'center' }}>
                          <Icon name='minus' style={{ fontSize: 11, color: 'white' }} />
                        </Button>
                        <View style={{ marginLeft: 8, marginTop: -11 }}>
                          <Input placeholder={`${item.temp_quantity_order}`} style={{ justifyContent: 'center', alignItems: 'center' }} disabled />
                        </View>
                        <Button success small onPress={ () => this._incQuantity(index) } style={{ width: 20, justifyContent: 'center', alignItems: 'center' }}>
                          <Icon name='plus' style={{ fontSize: 11, color: 'white' }} />
                        </Button>
                      </View>
                    </Body>
                    <Right>
                      <Button danger small onPress={ () => this._deleteCartItem(item.key_order, item.name_order) } style={{ width: 40, justifyContent: 'center', alignItems: 'center' }}>
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
        <Footer style={{ height: 30 }}>
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
                            data_cart: this.state.order_data,
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
    )
  }
}

export default ProductCart
