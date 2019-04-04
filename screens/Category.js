import React, { Component } from 'react';
import { Alert, View, Text, Image, FlatList, ScrollView } from 'react-native'
import { Card, CardTitle, CardContent, CardAction, CardButton, CardImage } from 'react-native-cards';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Button, SearchBar } from 'react-native-elements';

class List extends Component {

  constructor () {
    super();
    this.state = {
      product_data: [
        { key: '0', product_category: 'Medicine', product_name: 'Paracetamol', image: 'https://doktersehat.com/wp-content/uploads/2017/11/paracetamol.jpg' },
        { key: '1', product_category: 'Medicine', product_name: 'Paramex Anti Pusing', image: 'https://www.konimex.com/0_repository/images/paramex(3).jpg' },
        { key: '2', product_category: 'Pet', product_name: 'Di jual kuda mumer!!', image: 'https://cdn.brilio.net/news/2016/06/12/65328/302396-kai-kuda.jpg' },
        { key: '3', product_category: 'Pet', product_name: 'Kucing imut nih, monggo', image: 'https://www.ayobandung.com/images-bandung/post/articles/2018/08/08/36464/kucing.jpg' },
        { key: '4', product_category: 'Pet', product_name: 'Di Jual Kera Imut Tiada Tara', image: 'http://api.ning.com/files/rBZCY6X2uOlTJ8P9qLiTaHrX71x-bhRd9qAkTQBwNkSJPHtbC0Md09jy7l2JFbAGIWeexn8YrPUqqxKklZ5yJFL1uCaRvYYI/smiling.monkey.jpg' },
        { key: '5', product_category: 'Medicine', product_name: 'Pusing Kuliah Coyy', image: 'https://vignette.wikia.nocookie.net/tolololpedia/images/c/cc/Obat_Pusing_Kuliah.jpg/revision/latest?cb=20130930112130' },
      ],
      product_filtered: [

      ]
    }
  }

  _filterTest = (category) => {
    return this.state.product_data.filter((data) => data.product_category === category);
  }

  componentDidMount(){
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId');
    const otherParam = navigation.getParam('otherParam');
    const dataBaru = this._filterTest(otherParam);
    this.setState({
      product_filtered: dataBaru
    });
  }

  render() {
    return (
      <ScrollView>
        <View>
          <FlatList
            data={this.state.product_filtered}
            numColumns={2}
            renderItem={({item}) =>
            <Card>
              <CardImage
                source={{uri: item.image}}
              />
              <CardContent text={item.product_name.substring(0,16).replace(/...$/,"...")} />
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
            }
          />
        </View>
      </ScrollView>
    )
  }
}

export default List;
