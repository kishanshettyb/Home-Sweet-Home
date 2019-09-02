import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Categories extends Component {
  static navigationOptions = {
    title: 'Categories',
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Categories!</Text>
      </View>
    );
  }
}