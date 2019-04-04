import React, { Component } from 'react';
import { Alert, View, Text, Image, FlatList, ScrollView } from 'react-native'
import { Button, SearchBar } from 'react-native-elements';

class RemoteRequest extends Component {

	constructor () {
		super();
	}

	_fetchData = () => {
		const url = `http://localhost:8888/`;
		let data = fetch(url,{
			mode: 'no-cors'
		})
		.then(res => {
			return console.log(res)
		})
		.catch(error => {
			return console.log(error)
		});
	}

	render() {
    return (
			<Button
			  onPress={() => this._fetchData()}
			  title="Learn More"
			  color="#841584"
			  accessibilityLabel="Learn more about this purple button"
			/>
		)
	}

}

export default RemoteRequest;
