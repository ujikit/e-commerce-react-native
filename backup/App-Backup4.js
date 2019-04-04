import React, { Component } from 'react';
import { View, Text, Image, FlatList, ScrollView } from 'react-native'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';

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

  render() {
    return (
      <ScrollView>
      <FlatList
        data={this.state.product_categories}
        numColumns={2}
        renderItem={({item}) =>
        <Card>
          <CardImage
            source={{uri: 'http://bit.ly/2GfzooV'}}
            title={item.name}
          />
          <CardTitle
            subtitle="Judul"
          />
          <CardContent text="Clifton, Western Cape" />
          <CardAction
            separator={true}
            inColumn={false}>
            <CardButton
              onPress={() => {}}
              title="Share"
              color="#FEB557"
            />
            <CardButton
              onPress={() => {}}
              title="Explore"
              color="#FEB557"
            />
          </CardAction>
        </Card>
        }
      />
      </ScrollView>
    )
  }
}

export default List;
