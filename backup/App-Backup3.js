/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Card, CardItem, Body, Content } from 'native-base';
import { ListItem } from 'react-native-elements';

export default class App extends Component {

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

  ItemSeparatorProductCategories = () => {
    return (
      <View style={{ height: 0.5, }} />
    );
  }

  render() {

    return (
      <View>
        <View>
          <Header searchBar rounded noShadow style={{backgroundColor: "transparent"}}>
            <Item>
              <Icon name="ios-search" />
              <Input placeholder="Search" />
              <Icon name="ios-people" />
            </Item>
            <Button transparent>
              <Text>Search</Text>
            </Button>
          </Header>
        </View>

        <View style={{ flexDirection: 'column', paddingRight: 10, paddingLeft: 10 }}>
          <View style={{ alignItems: 'center'}}>
            <FlatList
              style={{flexDirection: 'row'}}
              data={this.state.product_categories}
              ItemSeparatorComponent={this.ItemSeparatorProductCategories}
              renderItem={({item}) =>
                <View style={{flex:1, width: 55, height: 60}}>
                  <Button light bordered style={{flexDirection: 'column', height: 58}}>
                    <Icon name={ item.icon } style={{color: 'black'}} />
                    <Text style={{fontSize: 12}}>{ item.name }</Text>
                  </Button>
                </View>
              }
              numColumns={5}
            />
          </View>
          <View style={{marginTop: 10, alignItems: 'center'}}>

            <FlatList
              style={{flexDirection: 'row'}}
              data={this.state.product_categories}
              ItemSeparatorComponent={this.ItemSeparatorProductCategories}
              renderItem={({item}) =>
              <Container>
                <Header />
                <Content>
                  <Card>
                    <CardItem header>
                      <Text>NativeBase</Text>
                    </CardItem>
                    <CardItem>
                      <Body>
                        <Text>
                          sdsadsadsadas
                        </Text>
                      </Body>
                    </CardItem>
                    <CardItem footer>
                      <Text>GeekyAnts</Text>
                    </CardItem>
                 </Card>
                </Content>
              </Container>
              }
              numColumns={2}
            />

          </View>
        </View>

      </View>
    );

  }
}

const styles = StyleSheet.create({
});
