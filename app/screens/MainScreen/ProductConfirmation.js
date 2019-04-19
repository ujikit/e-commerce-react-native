import React, { Component } from 'react'
import { Alert, StyleSheet, FlatList, Image, View, TouchableOpacity, ScrollView, TextInput} from 'react-native'
import { Body, Button, Container, Footer, FooterTab, Header, Input, Content, Card, CardItem, Icon, Left, Right, Text, Thumbnail } from 'native-base'
import { TotalPriceArray } from '../../helper/TotalPriceArray'

class ProductConfirmationScreen extends React.Component {

  constructor(props) {
    super(props)
      this.state = {
        product_quantity: 0,
        product_data: [],
        sum_all_price: undefined,
        final_price: undefined
      }
  }

  componentWillMount(){
    const { navigation } = this.props
    const { data_cart, total_price, payment_price, courier_price } = navigation.state.params
    const sum_all_price = TotalPriceArray(data_cart.map(item => item.temp_price_product_order))
    const final_price = parseInt(sum_all_price, 10) + parseInt(courier_price, 10)

    this.setState({
      product_data: data_cart,
      payment_price: payment_price,
      courier_price: courier_price,
      sum_all_price: sum_all_price,
      final_price: final_price
    })
  }

  render() {
    return (
      <Container>
        <Content style={{ paddingLeft: 4, paddingRight: 4, paddingTop: 5 }}>
          <FlatList
            data={ this.state.product_data }
            numColumns={1}
            renderItem={({ item }) => (
              <Card>
                <CardItem>
                  <Left>
                    <Thumbnail source={{uri: `${item.image_product_order}`}} />
                    <Body>
                      <Text>{ item.name_product_order }</Text>
                      <Text note>{`Total: Rp. ${ item.temp_price_product_order }`}</Text>
                    </Body>
                  </Left>
                </CardItem>
              </Card>
            )}
            keyExtractor={item => item.id_product_order.toString()}
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
              <Button style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} success onPress={() => this.props.navigation.navigate('ProductTransactionComplete')} >
                <Text style={{ fontSize: 13, fontWeight: 'bold', color: 'white' }}>Confirm</Text>
              </Button>
            </View>
          </FooterTab>
        </Footer>
      </Container>
    )
  }
}

export default ProductConfirmationScreen
