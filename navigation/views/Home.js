import React, { Component } from "react";
import { View, Text } from "react-native";

//styles defined externally
import {bodyStyles} from 'globalstyles/styles';
import CustomHeader from "../components/CustomHeader";

export default class Home extends Component {
  
  render() {
    this.props.ht = "t1";
    return (
      <View style={{flex: 1}}>
        <View style={bodyStyles.header}>
          <CustomHeader navigation={this.props.navigation} />
        </View>
        <View style={{flex: 24, backgroundColor: '#e0ebeb'}} />
        <View style={bodyStyles.footer}>
          <Text style={bodyStyles.footerText}>danilec©</Text>
        </View>
      </View>
    );
  }
}