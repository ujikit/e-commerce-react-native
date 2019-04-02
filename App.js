/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { Container, Header, Item, Input, Icon, Button } from 'native-base';
import { Card } from 'react-native-elements';

export default class App extends Component {
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
        <View style={{paddingRight: 10, paddingLeft: 10}}>
          <Image style={{width: '100%', resizeMode: 'contain', marginTop: -145}} source={require('./image1.jpg')} />

          <View style={{marginTop: -140}}>
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
              <View style={{width: 55, height: 20}}>
                <Button light bordered style={{flexDirection: 'column', height: 58}}>
                  <Icon name='medkit' style={{color: 'black'}} />
                  <Text style={{fontSize: 12}}>Medicine</Text>
                </Button>
              </View>
              <View style={{width: 55, height: 20}}>
                <Button light bordered style={{flexDirection: 'column', height: 58}}>
                  <Icon name='bicycle' style={{color: 'black'}} />
                  <Text style={{fontSize: 12}}>Sport</Text>
                </Button>
              </View>
              <View style={{width: 55, height: 20}}>
                <Button light bordered style={{flexDirection: 'column', height: 58}}>
                  <Icon name='pizza' style={{color: 'black'}} />
                  <Text style={{fontSize: 12}}>Food</Text>
                </Button>
              </View>
              <View style={{width: 55, height: 20}}>
                <Button light bordered style={{flexDirection: 'column', height: 58}}>
                  <Icon name='microphone' style={{color: 'black'}} />
                  <Text style={{fontSize: 12}}>Music</Text>
                </Button>
              </View>
              <View style={{width: 55, height: 20}}>
                <Button light bordered style={{flexDirection: 'column', height: 58}}>
                  <Icon name='paw' style={{color: 'black'}} />
                  <Text style={{fontSize: 12}}>Pet</Text>
                </Button>
              </View>
            </View>



          </View>
        </View>
      </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
