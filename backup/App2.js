import React, { Component } from 'react';
import { Alert, View, Text, Image, FlatList, ScrollView } from 'react-native'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import { SearchBar } from 'react-native-elements';

class List extends Component {

  constructor () {
    super();
    this.state = {
      product_categories: [
        { key: '0', name: 'Medicine', icon: 'medkit' },
        { key: '1', name: 'Sport', icon: 'bicycle' },
        { key: '2', name: 'Food', icon: 'pizza' },
        { key: '3', name: 'Engine', icon: 'cog' },
        { key: '4', name: 'Pet', icon: 'paw' },
      ],
      arrayHolder: [],
      textInput_Holder: ''
    }
  }

  _alert = (s) => {
    Alert.alert(s)
  }

  render() {
    return (
      <ScrollView>
        <SearchBar
          containerStyle={{backgroundColor: '#f2f2f2'}}
          inputContainerStyle={{backgroundColor: '#f2f2f2'}}
          inputStyle={{backgroundColor: '#f2f2f2'}}
          leftIconContainerStyle={{backgroundColor: '#f2f2f2'}}
          rightIconContainerStyle={{backgroundColor: '#f2f2f2'}}
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
        />
        <View>
          <FlatList
            data={this.state.product_categories}
            numColumns={2}
            renderItem={({item}) =>
            <Card>
              <CardImage
                source={{uri: 'http://bit.ly/2GfzooV'}}
                title={item.name}
              />
              <CardAction
                separator={true}
                inColumn={false}>
                <CardButton
                  onPress={() => this._alert(item.key)}
                  title="Tampilkan"
                  color="#FEB557"
                />
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
