import React, { Component } from 'react';
import { View, Text, FlatList, ActivityIndicator, Alert } from 'react-native';
import { Button, ListItem, SearchBar } from 'react-native-elements';
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import Icon from 'react-native-vector-icons/FontAwesome';

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: false,
      "product_categories":[
        {"key": 0, "name": "Medicine", "image": "https://i.all3dp.com/wp-content/uploads/2019/02/21173628/3d-printed-drugs-bioprinting-world-190216.jpg"},
        {"key": 1, "name": "Sport", "image": "http://cdn2.tstatic.net/medan/foto/bank/images2/rossi-asapi-duo-honda-lorenzo-dan-marquez.jpg"},
        {"key": 2, "name": "Food", "image": "https://d22ir9aoo7cbf6.cloudfront.net/wp-content/uploads/sites/2/2017/08/dim-sum-local-food.jpg"},
        {"key": 3, "name": "Pet", "image": "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2017/06/why-are-dogs-scared-of-firework-header.jpg"}
      ],
      error: null,
    },
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
          data: this.state.product_categories,
          error: res.error || null,
          loading: false,
        });
        this.arrayholder = this.state.product_categories;
      })
      .catch(error => {
        this.setState({ error, loading: false });
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
                                navigate_product_category_key: item.key,
                                navigate_product_category_name: item.name
                              }
                            )
                          }
                  />
                </View>
              </CardAction>
            </Card>
          )}
          keyExtractor={item => item.key.toString()}
          ItemSeparatorComponent={this.renderSeparator}
          ListHeaderComponent={this.renderHeader}
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
          onPress={() => this.props.navigation.navigate('ProductCart')}
        />
      </View>

    );
  }
}

export default Home;
