 import React, { Component } from 'react';
 import { ScrollView, TouchableHighlight, TouchableOpacity, StyleSheet, View, FlatList, Image, ActivityIndicator, Alert } from 'react-native';
 import { ListItem, SearchBar } from 'react-native-elements';
 import { Button, Text, Card, CardItem, Body, Header, Thumbnail } from 'native-base';
 import Icon from 'react-native-vector-icons/FontAwesome5';
 import Axios from 'axios';

export default class Home extends Component {

  constructor (props) {
    super(props)
    this.state = {
      product_data: []
    }
  }

  componentWillMount () {
    Axios.get(`http://192.168.0.44:3333/api/v1/products`)
    .then(res => {
      this.setState({
        product_data: res.data.data
      })
    })
    .catch(error => {
      Alert.alert(
        ``,
        `Home error: ${JSON.stringify(error)}`
      )
    })
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>
        <View style={{ flexDirection: 'row', paddingRight: 8, paddingLeft: 8, marginTop: -13, marginBottom: -17 }}>
          <View style={{ flex: 5, backgroundColor: 'white', alignItems: 'flex-start' }}>
            <Image
              style={{width: 125, resizeMode: 'contain'}}
              source={require('../assets/logo.png')}
            />
          </View>
          <View style={{ flex: 3, backgroundColor: 'white', alignItems: 'flex-end' }}>
            <View style={{ flexDirection: 'row', marginTop: 20, marginRight: 4 }}>
              <Button transparent primary style={{ marginLeft: 10 }}>
              </Button>
              <Button transparent primary style={{ marginLeft: 10 }}>
              </Button>
            </View>
          </View>
        </View>
        <ScrollView>
          <View style={{ marginTop: -10 }}>
            <SearchBar
              placeholder="Type Here..."
              lightTheme
              round
              platform="ios"
              containerStyle={{ backgroundColor: 'white' }}
              onChangeText={text => this.searchFilterFunction(text)}
              autoCorrect={false}
              value={this.state.value}
            />
          </View>
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
              data={this.state.product_data}
              numColumns={2}
              renderItem={({ item }) => (
                <View style={{ flex: 0.5 }}>
                  <Card>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('ProductDetail', {
                                    key_product: item.key_product,
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
              keyExtractor={item => item.key_product.toString()}
              ItemSeparatorComponent={this.renderSeparator}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
