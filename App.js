/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
/**/

/*
import React from 'react';
import HttpExample from './http_example.js'

const App = () => {
   return (
      <HttpExample />
   )
}
export default App/** */

import React, { Component } from 'react';
import { AppRegistry, View, Text, StatusBar} from 'react-native';

//styles defined externally
import {bodyStyles} from './src/styles';


export default class AppClass extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={bodyStyles.header}>
          <Text style={bodyStyles.headerText}>{'Cars'.toUpperCase()}</Text>
        </View>
        <View style={{flex: 24, backgroundColor: '#e0ebeb'}} />
        <View style={bodyStyles.footer}>
          <Text style={bodyStyles.footerText}>danilec©</Text>
        </View>
      </View>
    );
  }
}