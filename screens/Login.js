import React, { Component } from "react";
import {
  ActivityIndicator,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  AsyncStorage
} from "react-native";

import { Button, Block, Input, Text } from "../components";
import { theme } from "../constants";

const VALID_EMAIL = "contact@react-ui-kit.com";
const VALID_PASSWORD = "subscribe";

export default class Login extends Component {
  state = {
    email: VALID_EMAIL,
    password: VALID_PASSWORD,
    errors: [],
    loading: false
  };
  
  static navigationOptions = {
    headerTintColor: 'black',
  };

  handleLogin() {
    const { navigation } = this.props;
    const { email, password } = this.state;
    const errors = [];

    Keyboard.dismiss();
    this.setState({ loading: true });

    // check with backend API or with some static data
    if (email !== VALID_EMAIL) {
      errors.push("email");
    }
    if (password !== VALID_PASSWORD) {
      errors.push("password");
    }

    this.setState({ errors, loading: false });

    if (!errors.length) {
      // navigation.navigate("Browse");
      this.signin();
      
    }
  }

 
  signin = async () => {
    await AsyncStorage.setItem('userToken', 'true');
    this.props.navigation.navigate('Homescreen');
  };


  render() {
    const { navigation } = this.props;
    const { loading, errors } = this.state;
    const hasErrors = key => (errors.includes(key) ? styles.hasErrors : null);
    return (
      <KeyboardAvoidingView style={styles.login} behavior="padding">
          <Block padding={[0, theme.sizes.base * 2]}>
            <Text h1 bold  padding>
              Login
            </Text>
            <Block middle>
              <Input
                label="Email"
                error={hasErrors("email")}
                style={[styles.input, hasErrors("email")]}
                defaultValue={this.state.email}
                onChangeText={text => this.setState({ email: text })}
              />
              <Input
                secure
                label="Password"
                error={hasErrors("password")}
                style={[styles.input, hasErrors("password")]}
                defaultValue={this.state.password}
                onChangeText={text => this.setState({ password: text })}
              />
              <Button gradient onPress={() => this.handleLogin()}>
                {loading ? (
                  <ActivityIndicator size="small" color="white" />
                ) : (
                  <Text bold black center>
                    Login
                  </Text>
                )}
              </Button>

              <Button onPress={() => navigation.navigate("Forgot")}>
                <Text
                  gray
                  caption
                  center
                  style={{ textDecorationLine: "underline" }}
                >
                  Forgot your password?
                </Text>
              </Button>
            </Block>
          </Block>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  login: {
    flex: 1,
    justifyContent: "center"
  },
  input: {
    borderRadius: 0,
    borderWidth: 0,
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  hasErrors: {
    borderBottomColor: theme.colors.accent
  },
  containerStyle: {
    alignSelf: "center",
    width: window.width,
    overflow: "hidden",
    height: window.width / 1.7
  },
  sliderContainerStyle: {
    borderRadius: window.width,
    width: window.width * 2,
    height: window.width * 2,
    marginLeft: -(window.width / 2),
    position: "absolute",
    bottom: 0,
    overflow: "hidden"
  },
  slider: {
    height: window.width / 1.7,
    width: window.width,
    position: "absolute",
    bottom: 0,
    marginLeft: window.width / 2,
    backgroundColor: "#9DD6EB"
  }
});
