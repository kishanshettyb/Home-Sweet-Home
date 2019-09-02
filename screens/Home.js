import React, { Component } from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform
} from "react-native";

import { Card, Badge, Button, Block, Text } from "../components";
import { theme, mocks } from "../constants";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from '@expo/vector-icons';
const { width } = Dimensions.get("window");

export default class Home extends Component {
  render() {
    return (
      <Block style={[styles.bggrey]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Block flex={false} column space="between" style={[styles.header]}>
            <Text h2 bold>
              Recently Added
            </Text>

            <ScrollView
              showsHorizontalScrollIndicator={false}
              horizontal={true}
            >
              <Card
                shadow
                style={[styles.category, styles.cardMarging, styles.newPadding]}
              >
                <Image
                  source={require("../assets/images/login.jpg")}
                  style={{
                    height: 150,
                    width: "100%",
                    overflow: "visible",
                    resizeMode: "cover"
                  }}
                />
                <Block style={styles.cardBody}>
                  <Text h3 bold>
                    Apollo Family Apartment
                  </Text>
                  <Text h4 bold gray>
                    <Ionicons
                      name={Platform.OS === "ios" ? "ios-pin" : "md-pin"}
                      style={styles.header}
                      onPress={() => navigation.openDrawer()}
                      size={14}
                    />{" "}
                    Banglore
                  </Text>
                  <Block
                    row
                    space="between"
                    margin={[1, 0]}
                    style={styles.cardBody}
                  >
                    <Block>
                    <Text h4 bold><Ionicons
                      name={Platform.OS === "ios" ? "ios-home" : "md-home"}
                      style={styles.header}
                      onPress={() => navigation.openDrawer()}
                      size={20}
                    />{" "}200 SqFt</Text>
                    </Block>
                    <Block>
                    <Text h4 bold><FontAwesome
                      name={"bed"}
                      size={20}
                    />{" "}4 Beds</Text>
                    </Block>
                    <Block>
                    <Text h4 bold><FontAwesome
                      name={"bath"}
                      size={20}
                    />{" "}2 Bath</Text>
                    </Block>
                  </Block>
                </Block>
              </Card>
              <Card
                shadow
                style={[styles.category, styles.cardMarging, styles.newPadding]}
              >
                <Image
                  source={require("../assets/images/login.jpg")}
                  style={{
                    height: 150,
                    width: "100%",
                    overflow: "visible",
                    resizeMode: "cover"
                  }}
                />
                <Block padding>
                  <Text h3 bold>
                    asas
                  </Text>
                </Block>
              </Card>
            </ScrollView>

            {/* <Text h2 bold>
              Featured Properties
            </Text>
            <Button onPress={() => this.props.navigation.navigate("Settings")}>
              <Text
                gray
                caption
                center
                style={{ textDecorationLine: "underline" }}
              >
                Forgot your password?
              </Text>
            </Button> */}
          </Block>
        </ScrollView>
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 1
  },
  bggrey: {
    backgroundColor: theme.colors.gray3
  },
  avatar: {
    height: theme.sizes.base * 2.2,
    width: theme.sizes.base * 2.2
  },
  tabs: {
    borderBottomColor: theme.colors.gray2,
    borderBottomWidth: StyleSheet.hairlineWidth,
    marginVertical: theme.sizes.base,
    marginHorizontal: theme.sizes.base * 2
  },
  tab: {
    marginRight: theme.sizes.base * 2,
    paddingBottom: theme.sizes.base
  },
  active: {
    borderBottomColor: theme.colors.secondary,
    borderBottomWidth: 3
  },
  categories: {
    flexWrap: "wrap",
    paddingHorizontal: theme.sizes.base * 2,
    marginBottom: theme.sizes.base * 3.5
  },
  category: {
    // this should be dynamic based on screen width
    // minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 1,
    // maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 1,
    // maxHeight: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 1
    minWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 1,
    maxWidth: (width - theme.sizes.padding * 2.4 - theme.sizes.base) / 1,
    minHeight: (width - theme.sizes.padding - theme.sizes.base) / 1.3,
    maxHeight: (width - theme.sizes.padding - theme.sizes.base) / 1.3,

    overflow: "hidden"
  },
  cardMarging: {
    marginRight: 15,
    marginLeft: 1,
    marginTop: 10
  },
  newPadding: {
    padding: 0
  },
  cardBody: {
    padding: 10
  }
});
