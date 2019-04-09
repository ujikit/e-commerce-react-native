 import React, { Component } from 'react';
 import { ScrollView, TouchableHighlight, TouchableOpacity, StyleSheet, View, FlatList, Image, ActivityIndicator, Alert } from 'react-native';
 import { ListItem, SearchBar } from 'react-native-elements';
 import { Button, Text, Card, CardItem, Body, Header, Thumbnail } from 'native-base';
 import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Home extends Component {
  state = {
    "product_data":[
      { "product_data_key": 0, "product_data_category": 'Medicine', "product_data_name": 'Paracetamol', "product_data_image": 'https://doktersehat.com/wp-content/uploads/2017/11/paracetamol.jpg', "product_data_price": '30000', "product_data_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Sagittis vitae et leo duis ut diam quam. Faucibus a pellentesque sit amet. Sagittis vitae et leo duis ut diam quam. Faucibus a pellentesque sit amet. Sagittis vitae et leo duis ut diam quam. Faucibus a pellentesque sit amet.' },
      { "product_data_key": 1, "product_data_category": 'Medicine', "product_data_name": 'Paramex Anti Pusing', "product_data_image": 'https://www.konimex.com/0_repository/images/paramex(3).jpg', "product_data_price": '40000', "product_data_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Sagittis vitae et leo duis ut diam quam. Faucibus a pellentesque sit amet. Sagittis vitae et leo duis ut diam quam. Faucibus a pellentesque sit amet. Sagittis vitae et leo duis ut diam quam. Faucibus a pellentesque sit amet.' },
      { "product_data_key": 2, "product_data_category": 'Pet', "product_data_name": 'Di jual kuda mumer!!', "product_data_image": 'https://cdn.brilio.net/news/2016/06/12/65328/302396-kai-kuda.jpg', "product_data_price": '50000', "product_data_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Sagittis vitae et leo duis ut diam quam. Faucibus a pellentesque sit amet. Sagittis vitae et leo duis ut diam quam. Faucibus a pellentesque sit amet. Sagittis vitae et leo duis ut diam quam. Faucibus a pellentesque sit amet.' },
      { "product_data_key": 3, "product_data_category": 'Pet', "product_data_name": 'Kucing imut nih, monggo', "product_data_image": 'https://www.ayobandung.com/images-bandung/post/articles/2018/08/08/36464/kucing.jpg', "product_data_price": '50000', "product_data_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Sagittis vitae et leo duis ut diam quam. Faucibus a pellentesque sit amet. Sagittis vitae et leo duis ut diam quam. Faucibus a pellentesque sit amet. Sagittis vitae et leo duis ut diam quam. Faucibus a pellentesque sit amet.' },
      { "product_data_key": 4, "product_data_category": 'Medicine', "product_data_name": 'Pusing Kuliah Coyy', "product_data_image": 'https://vignette.wikia.nocookie.net/tolololpedia/images/c/cc/Obat_Pusing_Kuliah.jpg/revision/latest?cb=20130930112130', "product_data_price": '100000', "product_data_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Sagittis vitae et leo duis ut diam quam. Faucibus a pellentesque sit amet. Sagittis vitae et leo duis ut diam quam. Faucibus a pellentesque sit amet. Sagittis vitae et leo duis ut diam quam. Faucibus a pellentesque sit amet.' }
    ]
  }

  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: 'white' }}>
        <View style={{ flexDirection: 'row', paddingRight: 8, paddingLeft: 8, marginTop: -13, marginBottom: -17 }}>
          <View style={{ flex: 5, backgroundColor: 'white', alignItems: 'flex-start' }}>
            <Image
              style={{width: 125, resizeMode: 'contain'}}
              source={require('../app/assets/logo.png')}
            />
          </View>
          <View style={{ flex: 3, backgroundColor: 'white', alignItems: 'flex-end' }}>
            <View style={{ flexDirection: 'row', marginTop: 20, marginRight: 4 }}>
              <Button transparent primary style={{ marginLeft: 10 }}>
              </Button>
              <Button transparent primary style={{ marginLeft: 10 }}>
              </Button>
              <View style={{ position: 'absolute',height: 17, width: 17, borderRadius: 15, backgroundColor: '#d8414a', right: -8, bottom: 24, zIndex: 10000 }}>
                <Text style={{ textAlign: 'center', color: 'white', fontSize: 12 }}>
                  0
                </Text>
              </View>
              <Button transparent primary style={{ marginLeft: 10 }}>
                <Icon name='shopping-cart' size={19} />
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
                                    product_data_key: item.product_data_key,
                                    product_data_name: item.product_data_name,
                                    product_data_price: item.product_data_price,
                                    product_data_image: item.product_data_image,
                                    product_data_description: item.product_data_description
                                  }
                                )
                              }
                    >
                      <CardItem cardBody>
                        <Image source={{uri: `${item.product_data_image}`}} style={{ height: 150, width: null, flex: 1 }} />
                      </CardItem>
                      <CardItem>
                        <Body>
                          <Text style={{ fontSize: 14.5 }}>{ `${item.product_data_name.substring(0,16)}...` }</Text>
                          <Text style={{ color: "#d8414a", fontSize: 13 }} >{ item.product_data_name.substring(0,10) }</Text>
                          <Text style={{ fontSize: 13 }}>Toko Maju Jaya </Text>
                        </Body>
                      </CardItem>
                    </TouchableOpacity>
                  </Card>
                </View>
              )}
              keyExtractor={item => item.product_data_key.toString()}
              ItemSeparatorComponent={this.renderSeparator}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
