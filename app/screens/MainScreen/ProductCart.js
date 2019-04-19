import React, { Component } from 'react'
import { ActivityIndicator, Alert, StyleSheet, FlatList, Image, View, TouchableOpacity, ScrollView, TextInput} from 'react-native'
import { Body, Button, Container, Footer, FooterTab, Header, Input, Content, Card, CardItem, Left, Right, Text, Thumbnail } from 'native-base'
import Icon from 'react-native-vector-icons/FontAwesome5'
import Axios from 'axios'
// Helper
import { TotalPriceArray } from '../../helper/TotalPriceArray'
// Redux Connection
import { connect } from 'react-redux'
import { fetchAllCarts, fetchAllCartsSuccess, fetchAllCartsFailure } from '../../actions/fetch_all_carts'

type Props = {}
class ProductCartScreen extends Component<Props> {

  constructor() {
    super()
    this.state = {
      total_price: undefined
    }
  }

  componentWillMount() {
    const { navigation } = this.props

    this.props.dispatch(fetchAllCarts())
    Axios.get('http://192.168.0.44:3333/api/v1/orders')
    .then(res => {
      const final_order = []
      for (var i = 0; i < res.data.data.length; i++) {
        final_order.push({
          id_product_order: res.data.data[i].id_product_order,
          category_product_order: res.data.data[i].category_product_order,
          name_product_order: res.data.data[i].name_product_order,
          image_product_order: res.data.data[i].image_product_order,
          price_product_order: res.data.data[i].price_product_order,
          description_product_order: res.data.data[i].description_product_order,
          temp_quantity_product_order: 1,
          temp_price_product_order: res.data.data[i].price_product_order
        })
      }
      const init_total_price1 = final_order.map(item => item.price_product_order)
      const init_total_price2 = TotalPriceArray(init_total_price1)
      this.setState({
        total_price: init_total_price2
      })
      return this.props.dispatch(fetchAllCartsSuccess(final_order))
    })
    .catch(error => {
      this.props.dispatch(fetchAllCartsFailure())
      return Alert.alert(``,`error: ${JSON.stringify(error)}`)
    })
  }

  _incQuantity = (index) => {
    this.props.all_carts_data[index].temp_quantity_product_order = this.props.all_carts_data[index].temp_quantity_product_order+1
    this.props.all_carts_data[index].temp_price_product_order = parseInt(this.props.all_carts_data[index].temp_price_product_order, 10)+parseInt(this.props.all_carts_data[index].price_product_order, 10)
    this.forceUpdate()

    const init_total_price1 = this.props.all_carts_data.map(item => item.temp_price_product_order)
    const init_total_price2 = TotalPriceArray(init_total_price1)
    this.setState({
      total_price: init_total_price2
    })
  }

  _decQuantity = (index) => {
    const newCounter = this.props.all_carts_data[index].temp_quantity_product_order-1
    if (parseInt(newCounter) == 0) { return alert('My apologize, you have reached a limit order.') }
    this.props.all_carts_data[index].temp_quantity_product_order = this.props.all_carts_data[index].temp_quantity_product_order-1
    this.props.all_carts_data[index].temp_price_product_order = parseInt(this.props.all_carts_data[index].temp_price_product_order, 10)-parseInt(this.props.all_carts_data[index].price_product_order, 10)
    this.forceUpdate()

    const init_total_price1 = this.props.all_carts_data.map(item => item.temp_price_product_order)
    const init_total_price2 = TotalPriceArray(init_total_price1)
    this.setState({
      total_price: init_total_price2
    })
  }

  render() {
    const { navigate } = this.props.navigation
    const { all_carts_data, isFetching } = this.props
    if (isFetching) {
      return(
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size={'large'} />
        </View>
      )
    }
    else {
      return (
        <Container>
          <Content>
            <View style={{ flex: 1, flexDirection: 'column', paddingRight: 3.5, paddingLeft: 3.5 }}>
              <ScrollView>
                <FlatList
                  style={{ flex: 1 }}
                  data={ all_carts_data }
                  renderItem={({ item, index }) => (
                    <Card>
                      <CardItem>
                        <Left>
                          <Thumbnail source={{uri: `${item.image_product_order}`}} />
                          <Body>
                            <Text>{ item.name_product_order }</Text>
                            <Text note>{`Total: Rp. ${item.temp_price_product_order}`}</Text>
                          </Body>
                        </Left>
                      </CardItem>
                      <CardItem>
                      <Left>
                        <Text note>{`Price: ${item.price_product_order}/pcs`}</Text>
                      </Left>
                      <Body style={{ marginRight: -120, marginBottom: -10 }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                          <Button success small onPress={ () => this._decQuantity(index) } style={{ width: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Icon name='minus' style={{ fontSize: 11, color: 'white' }} />
                          </Button>
                          <View style={{ marginLeft: 8, marginTop: -11 }}>
                            <Input placeholder={`${item.temp_quantity_product_order}`} style={{ justifyContent: 'center', alignItems: 'center' }} disabled />
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
                keyExtractor={(item, index) => item.id_product_order.toString()}
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
                              data_cart: all_carts_data,
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
}

const mapStateToProps = (state) => {
  console.log(JSON.stringify(state.fetch_all_carts.isFetching))
  return {
    all_carts_data: state.fetch_all_carts.all_carts_data,
    isFetching: state.fetch_all_carts.isFetching
  }
}

export default connect(mapStateToProps)(ProductCartScreen)
