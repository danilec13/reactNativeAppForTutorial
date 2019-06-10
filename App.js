import React, { Component } from "react";
import { StatusBar } from 'react-native';

import MainApp from "./navigation/MainApp";


export default class App extends Component {
  //ponemos invisible status bar de móvil (con tiempo, estado de red, etc..)
  componentDidMount() {
      StatusBar.setHidden(true);
  }
  render() {
    return <MainApp/>;
  }
}