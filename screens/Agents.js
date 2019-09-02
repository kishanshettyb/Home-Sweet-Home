import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Agents extends Component {
  static navigationOptions = {
    title: 'Agents',
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Agents!</Text>
      </View>
    );
  }
}