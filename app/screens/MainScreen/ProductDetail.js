import React, { Component } from 'react'
import { Alert, StyleSheet, Image, Text, View, TouchableOpacity, ScrollView} from 'react-native'
import { Container, Icon, Left, Body, Right, Button, Content, Title, CardItem, Card, Col, Row, Grid, Footer, FooterTab } from 'native-base'
// import Icon from 'react-native-vector-icons/FontAwesome5'
import Axios from 'axios'

import { connect } from 'react-redux'
import { fetchAllProducts, fetchAllProductsSuccess, fetchAllProductsFailure } from '../../actions/fetch_all_products'

type Props = {}
class ProductDetailScreen extends Component<Props> {

  constructor() {
    super()
    this.state = {
      product_data: undefined,
      button_cart_toogle: 'grey'
    }
  }

  componentWillMount() {
    const { navigation } = this.props
    const id = navigation.state.params.id
    const category_product = navigation.state.params.category_product
    const name_product = navigation.state.params.name_product
    const price_product = navigation.state.params.price_product
    const image_product = navigation.state.params.image_product
    const description_product = navigation.state.params.description_product
    // const id = 1
    // const category_product = 'Pet'
    // const name_product = 'Di jual kuda mumer!!'
    // const price_product = '50000'
    // const image_product = 'https://cdn.brilio.net/news/2016/06/12/65328/302396-kai-kuda.jpg'
    // const description_product = 'Lorem ipsum dolor sit amet, consectetur'

    this.setState({
      product_data: {
        id,
        category_product,
        name_product,
        price_product,
        image_product,
        description_product
      }
    })
  }

  _saveToCart = () => {
    Axios.post(`http://192.168.0.44:3333/api/v1/order`, {
      id: this.state.product_data.id,
      category_product: this.state.product_data.category_product,
      name_product: this.state.product_data.name_product,
      price_product: this.state.product_data.price_product,
      image_product: this.state.product_data.image_product,
      description_product: this.state.product_data.description_product
    })
    .then(res => {
      if (res.data.status == `error`) {
        return Alert.alert(
          `Duplicated Data`,
          `${res.data.data}`
        )
      }
      else if (res.data.status == `success`) {
        this.props.navigation.navigate('ProductCart', {
            id: this.state.product_data.id,
            category_product: this.state.product_data.category_product,
            name_product: this.state.product_data.name_product,
            price_product: this.state.product_data.price_product,
            image_product: this.state.product_data.image_product,
            description_product: this.state.product_data.description_product
        })
      }
    })
    .catch(error => {
      return Alert.alert(
        ``,
        `Detail error: ${JSON.stringify(error)}`
      )
    })
  }

  render() {
    return (
      <Container style={{ marginTop: -27 }}>
        <Content>
          <Card>
            <CardItem>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: `${this.state.product_data.image_product}`}} style={{height: 300, width: null, flex: 1}}/>
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
                  <Button transparent onPress={() => this._saveToCart()} >
                    <Icon name='cart' style={{ color: `${this.state.button_cart_toogle}`}}/>
                  </Button>
                </View>
              </View>
              <View style={{ justifyContent: 'flex-start', marginBottom: 8 }}>
                <Text style={styles.textProduct}>{this.state.product_data.name_product}</Text>
              </View>
              <View style={{ justifyContent: 'flex-start', marginBottom: 8 }}>
                <Text style={styles.textPrice}>{`Rp.${this.state.product_data.price_product}`}</Text>
              </View>
              <View style={{ justifyContent: 'flex-start' }}>
                <Text style={{ fontSize: 14 }}>{this.state.product_data.description_product}</Text>
              </View>
            </View>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }
}

const styles = StyleSheet.create({
  textProduct: {
    color: '#000',
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
    backgroundColor: '#fff',
  }
})

const mapStateToProps = (state) => {
  return {
    all_products_data: state.fetch_all_products.all_products_data,
    isFetching: state.fetch_all_products.isFetching
  }
}

export default connect(mapStateToProps)(ProductDetailScreen)
