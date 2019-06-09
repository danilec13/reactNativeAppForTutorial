import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createDrawerNavigator } from "react-navigation";

import CustomDrawerNavigator from "./components/CustomDrawerNavigator";
import Home from "./views/Home";
import About from "./views/About";

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('../assets/images/allList.png')}
                fadeDuration={0}
                style={{width: 20, height: 20}}
            />
        ),
        drawerLabel: "All articles"
      },
      screen: Home
    },
    About: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Image
                source={require('../assets/images/allList.png')}
                fadeDuration={0}
                style={{width: 20, height: 20}}
            />
        ),
        drawerLabel: "About"
      },
      screen: About
    }
  },
  {
    contentComponent: CustomDrawerNavigator
  }
);

const MainApp = createAppContainer(MainNavigator);
export default MainApp;