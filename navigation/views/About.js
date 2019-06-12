import React, { Component } from "react";
import { View, Text } from "react-native";

import CustomHeader from "customheader/CustomHeader";
import i18n from 'sources/i18n';
import {bodyStyles} from 'sources/styles';


export default class About extends Component {
  render() {
    return (
      <View style={{flex: 1, backgroundColor: "grey"}}>
        <View style={bodyStyles.header}>
          <CustomHeader navigation={this.props.navigation} headerText={i18n.t('navigation.about')}/>
        </View>
        <View style={{flex: 24}} />
        <View style={bodyStyles.footer}>
          <Text style={bodyStyles.footerText}>{i18n.t('footer.text', { year: new Date().getFullYear()})}</Text>
        </View>
      </View>
    );
  }
}