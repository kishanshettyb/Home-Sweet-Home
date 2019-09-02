import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class About extends Component {
  static navigationOptions = {
    title: 'About',
  };
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>About!</Text>
        <Button
          title="Go to Detail"
          onPress={() => this.props.navigation.navigate('Detail')}
        />
        <Button
          title="Go Back to Product 2"
          onPress={() => this.props.navigation.goBack()}
        />
      </View>
    );
  }
}