import React, { Component } from "react";
import { View, Text, ScrollView, TouchableHighlight, StyleSheet, Image } from "react-native";

//styles defined externally
import {bodyStyles} from 'sources/styles';
import i18n from 'sources/i18n';
import CustomHeader from "customheader/CustomHeader";

import {itemStyle} from 'sources/rss_styles';
import * as DataBaseHandler from 'sources/databasehandler.js';


export default class Saved extends Component {
  state = {
    items: [],
    check: true,
    lastLength: 0
  }
  loadArticles(dbData){
    var loadedLength = dbData._array.length;
    var stateData = [];
    for(var i = 0; i < loadedLength; i++){
      stateData.push(JSON.parse(dbData._array[i].article));
    }
    if(this.state.lastLength !== loadedLength)
      this.setState({items: stateData, lastLength:loadedLength});
   } 

   deleteArticle(item){
      DataBaseHandler.deleteArticle(item, this.reloadThem.bind(this));
   }
   reloadThem(){
    DataBaseHandler.loadArticles(this.loadArticles.bind(this));
   }

   componentDidMount () {
    console.log(this.props); 
    const {navigation} = this.props;
    navigation.addListener ('willFocus', () =>
      DataBaseHandler.loadArticles(this.loadArticles.bind(this)))
  }

  render() {    
    return (
      <View style={{flex: 1}}>
        <View style={bodyStyles.header}>
          <CustomHeader navigation={this.props.navigation} headerText={i18n.t('appName').toUpperCase()}/>
        </View>
        <View style={{flex: 24, backgroundColor: '#e0ebeb'}}>
          <ScrollView>
            <View>
              {
                this.state.items.map((item, index) => (
                    <View style={itemStyle.container} key = {index} >
                      <View style={{flex: 1, flexDirection: 'row'}}>
                          <Text style={itemStyle.titleText}>{item.title}</Text>
                          <TouchableHighlight style={{flex: 0.15, height: 40}} 
                                              onPress={() => this.deleteArticle(item)}>
                            <Image style={{height: 40, width: 40}}
                                source={require('images/deleteIcon.png')}
                            />
                          </TouchableHighlight>
                      </View>
                      <View style={{flex: 1, flexDirection: 'row'}}>
                          {item.enclosures.map((item, index) => (
                            <View key = {index} style={{flex: 0.5}}>
                                <Image
                                  style={{flex:1}}
                                  source={{uri: item.url}}
                                />
                            </View>
                            
                          ))}
                          <Text style={{flex: 2, marginLeft: 5}}>{item.description}</Text>
                      </View>
                    </View>
                ))
              }
          </View>
          </ScrollView>
        </View>
        <View style={bodyStyles.footer}>
          <Text style={bodyStyles.footerText}>{i18n.t('footer.text', { year: new Date().getFullYear()})}</Text>
        </View>
      </View>
    );
  }
}