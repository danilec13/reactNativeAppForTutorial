import React, { Component } from "react";
import MainApp from "./navigation/MainApp";
import { StatusBar } from 'react-native';

export default class App extends Component {
  //ponemos invisible status bar de móvil (con tiempo, estado de red, etc..)
  componentDidMount() {
      StatusBar.setHidden(true);
  }
  render() {
    return <MainApp/>;
  }
}