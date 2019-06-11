import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createDrawerNavigator } from "react-navigation";

import CustomDrawerNavigator from "./components/CustomDrawerNavigator/CustomDrawerNavigator";
import Home from "./views/Home";
import About from "./views/About";

import i18n from 'sources/i18n';


const MainNavigator = createDrawerNavigator(
  {
    Home: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
            <Image
                source={require('images/allList.png')}
                fadeDuration={0}
                style={{width: 20, height: 20}}
            />
        ),
        drawerLabel: i18n.t('navigation.allArticles')
      },
      screen: Home
    },
    About: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Image
                source={require('images/aboutUs.png')}
                fadeDuration={0}
                style={{width: 20, height: 20}}
            />
        ),
        drawerLabel: i18n.t('navigation.about')
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