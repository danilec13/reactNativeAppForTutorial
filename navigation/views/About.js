import React, { Component } from "react";
import { View } from "react-native";

import CustomHeader from "customheader/CustomHeader";
import i18n from 'sources/i18n';

export default class About extends Component {
  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "grey" }}>
        <CustomHeader navigation={this.props.navigation} headerText={i18n.t('navigation.about')}/>
      </View>
    );
  }
}