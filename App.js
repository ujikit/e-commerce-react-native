/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { Container, Header, Item, Input, Icon, Button, Card, CardItem, Body } from 'native-base';

export default class App extends Component {
  render() {

    return (
        <View style={ styles.container }>
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
          <View style={ styles.top }>
              <Image style={{width: '100%', resizeMode: 'contain'}} source={require('./image1.jpg')} />
          </View>
          <View style={ styles.center }>

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
          <View style={ styles.bottom }>
            <View style={ styles.bottomItem }>
              <View style={ styles.bottomItemInner }></View>
            </View>
            <View style={ styles.bottomItem }>
              <View style={ styles.bottomItemInner }></View>
            </View>
            <View style={ styles.bottomItem }>
              <View style={ styles.bottomItemInner }></View>
            </View>
            <View style={ styles.bottomItem }>
              <View style={ styles.bottomItemInner }></View>
            </View>
          </View>
        </View>
    );

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingRight: 10,
    paddingLeft: 10,
  },
  top: {
    height: '20%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
  profileimage: {
    width: '50%',
    height: '50%',
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#fff',
  },
  center: {
    height: '10%',
    backgroundColor: 'transparent',
  },
  bottom: {
    height: '70%',
    backgroundColor: 'black',
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 5,
  },
  bottomItem: {
    width: '50%',
    height: '50%',
    padding: 5,
  },
  bottomItemInner: {
    flex: 1,
    backgroundColor: 'red',
  }
})
