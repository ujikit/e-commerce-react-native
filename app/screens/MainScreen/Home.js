import React, { Component } from 'react';
import { ActivityIndicator, ScrollView, TouchableHighlight, TouchableOpacity, StyleSheet, View, FlatList, Image, Alert } from 'react-native';
import { Button, Text, Card, CardItem, Body, Header, Thumbnail } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5'
import Axios from 'axios'

import { connect } from 'react-redux'
import { fetchAllProducts, fetchAllProductsSuccess, fetchAllProductsFailure } from '../../actions/fetch_all_products'

type Props = {}
class HomeScreen extends Component<Props> {

  constructor() {
    super()
    this.state = {
      firstname_user: undefined
    }
  }

  componentWillMount() {
    // set state welcome new user from register screen
    const { navigation } = this.props
    // fetch all products data (REDUX)
    this.props.dispatch(fetchAllProducts())
    Axios.get('http://192.168.0.44:3333/api/v1/products')
    .then(res => {
      Alert.alert(`Welcome to Ujikit!`,`Hey ${navigation.getParam('firstname_user')}, you're finally ready, have a look around!`)
      return this.props.dispatch(fetchAllProductsSuccess(res.data.data))
    })
    .catch(error => {
      this.props.dispatch(fetchAllProductsFailure())
      return Alert.alert(``,`error: ${JSON.stringify(error)}`)
    })
  }

  render() {
    const { all_products_data, isFetching } = this.props
    if (isFetching) {
      return(
        <View style={{flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <ActivityIndicator size={'large'} />
        </View>
      )
    }
    else {
      return (
        <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>
          <View style={{ flexDirection: 'row', paddingRight: 13, paddingLeft: 13, marginTop: -13, marginBottom: -17 }}>
            <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center', justifyContent: 'center', height: 85 }}>
              <Image
                style={{width: 80, resizeMode: 'contain'}}
                source={require('../../assets/logo.png')}
              />
            </View>
          </View>
          <ScrollView>
            <View style={{ flexDirection: 'row',  alignItems: 'center', marginTop: -4, justifyContent: 'space-around', alignItems: 'center', paddingRight: 35, paddingLeft: 35 }}>
              <Button transparent primary style={{ }}>
                <Icon name='beer' size={22} />
              </Button>
              <Button transparent primary style={{ }}>
                <Icon name='receipt' size={22} />
              </Button>
              <Button transparent primary style={{ }}>
                <Icon name='shipping-fast' size={22} />
              </Button>
              <Button transparent primary style={{ }}>
                <Icon name='gift' size={22} />
              </Button>
              <Button transparent primary style={{ }}>
                <Icon name='store' size={22}  />
              </Button>
            </View>
            <View style={{ flex: 1, paddingRight: 8, paddingLeft: 8, marginTop: 8 }}>
              <FlatList
                data={all_products_data}
                numColumns={2}
                renderItem={({ item }) => (
                  <View style={{ flex: 0.5 }}>
                    <Card>
                      <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('ProductDetail', {
                                      id: item.id,
                                      category_product: item.category_product,
                                      name_product: item.name_product,
                                      price_product: item.price_product,
                                      image_product: item.image_product,
                                      description_product: item.description_product
                                    }
                                  )
                                }
                      >
                        <CardItem cardBody>
                          <Image source={{uri: `${item.image_product}`}} style={{ height: 150, width: null, flex: 1 }} />
                        </CardItem>
                        <CardItem>
                          <Body>
                            <Text style={{ fontSize: 14.5 }}>{ `${item.name_product.substring(0,16)}...` }</Text>
                            <Text style={{ color: "#d8414a", fontSize: 13 }} >{ item.name_product.substring(0,10) }</Text>
                            <Text style={{ fontSize: 13 }}>Toko Maju Jaya </Text>
                          </Body>
                        </CardItem>
                      </TouchableOpacity>
                    </Card>
                  </View>
                )}
                keyExtractor={item => item.id}
                ItemSeparatorComponent={this.renderSeparator}
              />
            </View>
          </ScrollView>
        </View>
      )
    }
  }
}

const mapStateToProps = (state) => {
  // console.log(JSON.stringify(state.fetch_all_products.isFetching))
  return {
    all_products_data: state.fetch_all_products.all_products_data,
    isFetching: state.fetch_all_products.isFetching
  }
}

export default connect(mapStateToProps)(HomeScreen)
