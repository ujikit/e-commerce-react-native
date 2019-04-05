import React, { Component } from 'react';
import { Alert, View, Text, Image, FlatList, ScrollView } from 'react-native'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, SearchBar } from 'react-native-elements';

class Category extends Component {
  static navigationOptions = {
    title: 'Product List',
  };
  constructor () {
    super();
    this.state = {
      product_data: [
        { "product_data_key": 0, "product_data_category": 'Medicine', "product_data_name": 'Paracetamol', "product_data_image": 'https://doktersehat.com/wp-content/uploads/2017/11/paracetamol.jpg', "product_data_price": '30000', "product_data_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Sagittis vitae et leo duis ut diam quam. Faucibus a pellentesque sit amet.' },
        { "product_data_key": 1, "product_data_category": 'Medicine', "product_data_name": 'Paramex Anti Pusing', "product_data_image": 'https://www.konimex.com/0_repository/images/paramex(3).jpg', "product_data_price": '40000', "product_data_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Sagittis vitae et leo duis ut diam quam. Faucibus a pellentesque sit amet.' },
        { "product_data_key": 2, "product_data_category": 'Pet', "product_data_name": 'Di jual kuda mumer!!', "product_data_image": 'https://cdn.brilio.net/news/2016/06/12/65328/302396-kai-kuda.jpg', "product_data_price": '50000', "product_data_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Sagittis vitae et leo duis ut diam quam. Faucibus a pellentesque sit amet.' },
        { "product_data_key": 3, "product_data_category": 'Pet', "product_data_name": 'Kucing imut nih, monggo', "product_data_image": 'https://www.ayobandung.com/images-bandung/post/articles/2018/08/08/36464/kucing.jpg', "product_data_price": '50000', "product_data_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Sagittis vitae et leo duis ut diam quam. Faucibus a pellentesque sit amet.' },
        { "product_data_key": 4, "product_data_category": 'Medicine', "product_data_name": 'Pusing Kuliah Coyy', "product_data_image": 'https://vignette.wikia.nocookie.net/tolololpedia/images/c/cc/Obat_Pusing_Kuliah.jpg/revision/latest?cb=20130930112130', "product_data_price": '100000', "product_data_description": 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Posuere urna nec tincidunt praesent semper feugiat nibh sed pulvinar. Sagittis vitae et leo duis ut diam quam. Faucibus a pellentesque sit amet.' }
      ],
      product_filtered: [],
      category: []
    };
    this.arrayholder = []
  }

  componentDidMount(){
    this._filterData();
    const { navigation } = this.props;
    const navigate_product_category_key = navigation.getParam('navigate_product_category_key');
    const navigate_product_category_name = navigation.getParam('navigate_product_category_name');
    const dataBaru = this._filterData(navigate_product_category_name);
    this.setState({
      category: navigate_product_category_name,
      product_filtered: dataBaru
    });
  }

  _filterData = (category) => {
    let arrayBaru = [];
    this.state.product_data.forEach(function(element) {
      if (category == element.product_data_category) {
        arrayBaru.push(element)
      }
    });
    return arrayBaru
  }

  _addToCart = (data) => {
    return Alert.alert(
      'Add to Cart',
      `Product: ${data}, Successfully Added to Cart`
    );
  }

  render() {
    return (
        <View style={{ flex: 1 }}>
          <FlatList
            data={this.state.product_filtered}
            numColumns={2}
            renderItem={({item}) =>
            <Card>
              <CardImage
                source={{uri: item.product_data_image}}
              />
              <CardContent text={item.product_data_name} />
              <CardAction
                style={{ flexDirection: 'row' }}
                separator={true}
                inColumn={false}>
                <View style={{ flex: 1, justifyContent: 'flex-start' }}>
                <Button
                  buttonStyle={{ backgroundColor: 'transparent' }}
                  icon={
                    <Icon
                      name="eye"
                      size={25}
                      color="#FEB557"
                    />
                  }
                  onPress={() => this.props.navigation.navigate('ProductDetail', {
                                productName: item.product_data_name,
                                productPrice: item.product_data_price,
                                productImage: item.product_data_image,
                                productDescription: item.product_data_description
                              }
                            )
                          }
                  />
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                <Button
                  buttonStyle={{ backgroundColor: 'transparent' }}
                  icon={
                    <Icon
                      name="cart-plus"
                      size={25}
                      color="#FEB557"
                    />
                  }
                  onPress={() => this._addToCart(item.product_data_name) }
                  />
                </View>
              </CardAction>
            </Card>
            }
            keyExtractor={item => item.product_data_key.toString()}
          />
          <View style={{ position: 'absolute',height: 20, width: 20, borderRadius: 15, backgroundColor: 'rgba(95,197,123,0.8)', right: 15, bottom: 37, zIndex: 9999999, }}>
            <Text style={{ textAlign: 'center', color: 'white' }}>
              0
            </Text>
          </View>
          <Button
            type="clear"
            buttonStyle={{
              width: 60,
              height: 60,
              borderRadius: 30,
              backgroundColor: '#FEB557',
              position: 'absolute',
              bottom: 10,
              right: 10
            }}
            icon={
              <Icon
                style={{marginLeft: -3.5}}
                name="cart-plus"
                size={20}
                color="#f5f5f5"
              />
            }
            onPress={() => this.props.navigation.navigate('ProductCart')
                    }
          />

        </View>
    )
  }
}

export default Category;
