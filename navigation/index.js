import React from "react";
import { Platform, Image,StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator
} from "react-navigation";

import { theme } from "../constants";

import Home from "../screens/Home";
import More from "../screens/More";
import Login from "../screens/Login";
import About from "../screens/About";
import Saved from "../screens/Saved";
import SignUp from "../screens/SignUp";
import Forgot from "../screens/Forgot";
import Detail from "../screens/Detail";
import Browse from "../screens/Browse";
import Agents from "../screens/Agents";
import Logout from "../screens/Logout";
import Welcome from "../screens/Welcome";
import Getinfo from "../screens/Getinfo";
import Contact from "../screens/Contact";
import Settings from "../screens/Settings";
import Categories from "../screens/Categories";
import AuthLoader from "../screens/AuthLoader";

// const screens = createStackNavigator({
//   Welcome,
//   Login,
//   SignUp,
//   Forgot,
//   Explore,
//   Browse,
//   Product,
//   Settings,

// },
// {
//   defaultNavigationOptions: {
//     headerStyle: {
//       height: theme.sizes.base * 4,
//       backgroundColor: theme.colors.white, // or 'white
//       borderBottomColor: "transparent",
//       elevation: 0, // for android
//     },
//     headerBackImage: <Image source={require('../assets/icons/back.png')} />,
//     headerBackTitle: null,
//     headerLeftContainerStyle: {
//       alignItems: 'center',
//       marginLeft: theme.sizes.base ,
//       paddingRight: theme.sizes.base,
//     },
//     headerRightContainerStyle: {
//       alignItems: 'center',
//       paddingRight: theme.sizes.base,
//     },
//   }
// });

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Home",
        };
      }
    },
    Settings: {
      screen: Settings,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft: false
        };
      }
    },
    Browse: {
      screen: Browse,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft: false
        };
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerTitleStyle: {
          fontWeight: "500"
        },
        headerLeft: (
          <Ionicons
            name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
            style={styles.header}
            onPress={() => navigation.openDrawer()}
            size={30}
          />
        ),
        headerRight: (
          <Ionicons
            name={Platform.OS === "ios" ? "ios-search" : "md-search"}
            style={styles.header}
            size={30}
          />
        )
      };
    }
  }
);

const SavedStack = createStackNavigator(
  {
    Saved: {
      screen: Saved,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Saved"
        };
      }
    },
    About: {
      screen: About,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft: false
        };
      }
    },
    Detail: {
      screen: Detail,
      navigationOptions: ({ navigation }) => {
        return {
          headerLeft: false
        };
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Ionicons
            name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
            style={styles.header}
            onPress={() => navigation.openDrawer()}
            size={30}
          />
        ),
        headerRight: (
          <Ionicons
            name={Platform.OS === "ios" ? "ios-search" : "md-search"}
            style={styles.header}
            size={30}
          />
        )
      };
    }
  }
);

const AgentsStack = createStackNavigator(
  {
    Agents: {
      screen: Agents,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Agents"
        };
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Ionicons
            name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
            style={styles.header}
            onPress={() => navigation.openDrawer()}
            size={30}
          />
        ),
        headerRight: (
          <Ionicons
            name={Platform.OS === "ios" ? "ios-search" : "md-search"}
            style={styles.header}
            size={30}
          />
        )
      };
    }
  }
);

const MoreStack = createStackNavigator(
  {
    More: {
      screen: More,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "More"
        };
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Ionicons
            name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
            style={styles.header}
            onPress={() => navigation.openDrawer()}
            size={30}
          />
        ),
        headerRight: (
          <Ionicons
            name={Platform.OS === "ios" ? "ios-search" : "md-search"}
            style={styles.header}
            size={30}
          />
        )
      };
    }
  }
);

const CategoriesStack = createStackNavigator(
  {
    Categories: {
      screen: Categories,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: "Categories"
        };
      }
    }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Ionicons
            name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
            style={styles.header}
            onPress={() => navigation.openDrawer()}
            size={30}
          />
        ),
        headerRight: (
          <Ionicons
            name={Platform.OS === "ios" ? "ios-search" : "md-search"}
            style={styles.header}
            size={30}
          />
        )
      };
    }
  }
);

const BottomTab = createBottomTabNavigator(
  {
    Home: {
      screen: HomeStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons
            name={Platform.OS === "ios" ? "ios-home" : "md-home"}
            size={24}
            color={tintColor}
          />
        )
      }
    },
    Categories: {
      screen: CategoriesStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons
            name={Platform.OS === "ios" ? "ios-list" : "md-list"}
            size={25}
            color={tintColor}
          />
        )
      }
    },
    Saved: {
      screen: SavedStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons
            name={Platform.OS === "ios" ? "ios-heart" : "md-heart"}
            size={25}
            color={tintColor}
          />
        )
      }
    },
    Agents: {
      screen: AgentsStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons
            name={Platform.OS === "ios" ? "ios-people" : "md-people"}
            size={25}
            color={tintColor}
          />
        )
      }
    },
    More: {
      screen: MoreStack,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Ionicons
            name={Platform.OS === "ios" ? "ios-more" : "md-more"}
            size={25}
            color={tintColor}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: theme.colors.primary
    }
  }
);

const Stack1 = createStackNavigator(
  {
    Contact: { screen: Contact },
    Getinfo: { screen: Getinfo, navigationOptions: { headerLeft: false } }
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Ionicons
            style={{ paddingLeft: 10 }}
            onPress={() => navigation.openDrawer()}
            name={Platform.OS === "ios" ? "ios-menu" : "md-menu"}
            size={30}
          />
        )
      };
    }
  }
);

const Drawer = createDrawerNavigator({
  Home: { screen: BottomTab },
  Contact: { screen: Stack1 },
  Logout: { screen: Logout }
});

const AuthStack = createStackNavigator(
  {
    Welcome: { screen: Welcome },
    Login: { screen: Login },
    SignUp: { screen: SignUp },
    Forgot: { screen: Forgot }
  },

  {
    defaultNavigationOptions: {
      headerStyle: {
        height: theme.sizes.base * 4,
        backgroundColor: theme.colors.white, // or 'white
        borderBottomColor: "transparent",
        elevation: 0 // for android
      },
      headerBackImage: <Image source={require("../assets/icons/back.png")} />,
      headerBackTitle: null,
      headerLeftContainerStyle: {
        alignItems: "center",
        marginLeft: theme.sizes.base,
        paddingRight: theme.sizes.base
      },
      headerRightContainerStyle: {
        alignItems: "center",
        paddingRight: theme.sizes.base
      }
    }
  }
);

const SwitchNavigator = createSwitchNavigator(
  {
    AuthLoader: { screen: AuthLoader },
    Homescreen: { screen: Drawer },
    AuthScreen: { screen: AuthStack }
  },
  {
    initialRouteName: "AuthLoader"
  }
);

export default createAppContainer(SwitchNavigator);

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: theme.sizes.base * 1
  }
});
