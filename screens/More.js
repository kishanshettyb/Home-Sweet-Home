import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class More extends Component {
  static navigationOptions = {
    title: 'More',
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>More!</Text>
      </View>
    );
  }
}