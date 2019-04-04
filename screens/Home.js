import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, Alert } from 'react-native';
import { Button, ListItem, SearchBar } from 'react-native-elements';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import Icon from 'react-native-vector-icons/FontAwesome';

class FlatListDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      data: [],
      error: null,
    };

    this.arrayholder = [];
  }

  // Internal Home Config
  componentDidMount() {
    this.makeRemoteRequest();
  }

  static navigationOptions = {
    header: null,
  };
  // ./Internal Home Config

  // External Home Config
  makeRemoteRequest = () => {
    const url = `https://api.jsonbin.io/b/5ca5920134241f2ab5e24247/2`;
    this.setState({ loading: true });

    fetch(url)
      .then(res => res.json())
      .then(res => {
        this.setState({
          data: res.product_categories,
          error: res.error || null,
          loading: false,
        });
        this.arrayholder = res.product_categories;
        // Alert.alert(JSON.stringify(res))
      })
      .catch(error => {
        this.setState({ error, loading: false });
        // Alert.alert(JSON.stringify(error))
      });
  };

  renderSeparator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '86%',
          backgroundColor: '#CED0CE',
          marginLeft: '14%',
        }}
      />
    );
  };

  searchFilterFunction = text => {
    this.setState({
      value: text,
    });

    const newData = this.arrayholder.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const textData = text.toUpperCase();

      return itemData.indexOf(textData) > -1;
    });
    this.setState({
      data: newData,
    });
  };

  renderHeader = () => {
    return (
      <SearchBar
        placeholder="Type Here..."
        lightTheme
        round
        onChangeText={text => this.searchFilterFunction(text)}
        autoCorrect={false}
        value={this.state.value}
      />
    );
  };
  // ./External Home Config

  render() {
    if (this.state.loading) {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ActivityIndicator />
        </View>
      );
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.state.data}
          numColumns={2}
          renderItem={({ item }) => (

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
                  disabled
                  />
                </View>
              </CardAction>
            </Card>


          )}
          keyExtractor={item => item.key.toString()}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
        />
      </View>
    );
  }
}

export default FlatListDemo;
