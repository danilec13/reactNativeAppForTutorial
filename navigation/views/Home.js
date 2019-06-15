import React, { Component } from "react";
import { View, Text, ScrollView } from "react-native";

//styles defined externally
import {bodyStyles} from 'sources/styles';
import i18n from 'sources/i18n';
import CustomHeader from "customheader/CustomHeader";

import FetchArticles from 'sources/rss_articles'


export default class Home extends Component {
  
  render() {
    this.props.ht = "t1";
    return (
      <View style={{flex: 1}}>
        <View style={bodyStyles.header}>
          <CustomHeader navigation={this.props.navigation} headerText={i18n.t('appName').toUpperCase()}/>
        </View>
        <View style={{flex: 24, backgroundColor: '#e0ebeb'}}>
          <ScrollView>
            <FetchArticles navigation={this.props.navigation}/>
          </ScrollView>
        </View>
        <View style={bodyStyles.footer}>
          <Text style={bodyStyles.footerText}>{i18n.t('footer.text', { year: new Date().getFullYear()})}</Text>
        </View>
      </View>
    );
  }
}