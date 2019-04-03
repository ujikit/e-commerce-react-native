import React, { Component } from 'react';
import { Alert, View, Text, Image, FlatList, ScrollView } from 'react-native'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, SearchBar } from 'react-native-elements';

class List extends Component {

  constructor () {
    super();
    this.state = {
      product_categories: [
        { key: '0', name: 'Medicine', image: 'https://i.all3dp.com/wp-content/uploads/2019/02/21173628/3d-printed-drugs-bioprinting-world-190216.jpg' },
        { key: '1', name: 'Sport', image: 'http://cdn2.tstatic.net/medan/foto/bank/images2/rossi-asapi-duo-honda-lorenzo-dan-marquez.jpg' },
        { key: '2', name: 'Food', image: 'https://d22ir9aoo7cbf6.cloudfront.net/wp-content/uploads/sites/2/2017/08/dim-sum-local-food.jpg' },
        { key: '4', name: 'Pet', image: 'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2017/06/why-are-dogs-scared-of-firework-header.jpg' },
        { key: '5', name: 'Medicine', image: 'https://i.all3dp.com/wp-content/uploads/2019/02/21173628/3d-printed-drugs-bioprinting-world-190216.jpg' },
        { key: '6', name: 'Sport', image: 'http://cdn2.tstatic.net/medan/foto/bank/images2/rossi-asapi-duo-honda-lorenzo-dan-marquez.jpg' },
        { key: '7', name: 'Food', image: 'https://d22ir9aoo7cbf6.cloudfront.net/wp-content/uploads/sites/2/2017/08/dim-sum-local-food.jpg' },
        { key: '8', name: 'Pet', image: 'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2017/06/why-are-dogs-scared-of-firework-header.jpg' },
        { key: '9', name: 'Medicine', image: 'https://i.all3dp.com/wp-content/uploads/2019/02/21173628/3d-printed-drugs-bioprinting-world-190216.jpg' },
        { key: '10', name: 'Sport', image: 'http://cdn2.tstatic.net/medan/foto/bank/images2/rossi-asapi-duo-honda-lorenzo-dan-marquez.jpg' },
        { key: '11', name: 'Food', image: 'https://d22ir9aoo7cbf6.cloudfront.net/wp-content/uploads/sites/2/2017/08/dim-sum-local-food.jpg' },
        { key: '12', name: 'Pet', image: 'https://d17fnq9dkz9hgj.cloudfront.net/uploads/2017/06/why-are-dogs-scared-of-firework-header.jpg' },
      ],
      arrayHolder: [],
      textInput_Holder: ''
    }
  }

  static navigationOptions = {
    header: null,
  };

  _alert = (s) => {
    Alert.alert(s)
  }

  _disabledAlert = () => {
    Alert.alert("Fitur ini belum berfungsi ya")
  }

  render() {
    return (
      <ScrollView>
        <SearchBar
          lightTheme
          placeholder="Cari disini..."
          onChangeText={this.updateSearch}
          disabled
        />
        <View>
          <FlatList
            data={this.state.product_categories}
            numColumns={2}
            renderItem={({item}) =>
            <Card>
              <CardImage
                source={{uri: item.image}}
                title={item.name}
              />
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
                  onPress={() => this.props.navigation.navigate('Category', {
                                itemId: item.key,
                                otherParam: item.name,
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
                  onPress={() =>
                            this._disabledAlert()
                          }
                  />
                </View>
              </CardAction>
            </Card>
            }
          />
        </View>
      </ScrollView>
    )
  }
}

export default List;
