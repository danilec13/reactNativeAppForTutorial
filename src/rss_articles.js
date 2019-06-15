import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, Image} from 'react-native';
//https://www.npmjs.com/package/react-native-rss-parser
import * as rssParser from 'react-native-rss-parser';
import i18n from 'sources/i18n';
import {itemStyle} from 'sources/rss_styles';

import * as DataBaseHandler from 'sources/databasehandler.js';

const styles = StyleSheet.create({
   visible: {
     
   },
   hidden:{
      width: 0,
      height: 0
   }
});

class FetchArticles extends Component {
  
   state = {
      loadingButtonActive: false,
      loadingButtonVisible: styles.visible,
      visibleBody: styles.hidden,
      items: []
   }

   loadArticles(){
      //var uri = 'https://e00-marca.uecdn.es/rss/motor/modelos-coches.xml';
      var uri = 'http://www.nasa.gov/rss/dyn/breaking_news.rss';
      fetch(uri,{
         method: 'GET'
      })
      .then((response) => response.text())
      .then((responseData) => rssParser.parse(responseData))
      .then((rss) => {
         //console.log(rss.title);
         /*console.log(rss.items[0]);
         console.log("" + rss.items[0].title);
         console.log("" + rss.items[0].description);
         console.log("" + rss.items[0].enclosures[0].url);
         console.log(rss.items.length);/**/
         //console.log(this);

         DataBaseHandler.loadArticles(this.refreshArticles.bind(this));
         for(var p in rss.items)
            rss.items[p].imageIs = require('images/star.png');
         this.setState({
            items: rss.items,
            loadingButtonActive: false,
            loadingButtonVisible: styles.hidden,
            visibleBody: styles.visible
         });
      })
      .catch((error) => {
         console.error(error);
      });
   }
   componentDidMount = () => {
      const {navigation} = this.props;
      navigation.addListener ('willFocus', () =>{
         this.setState({loadingButtonActive: true});
         this.loadArticles();
         DataBaseHandler.initDb();
      });
   }
   

   refreshArticles(dbData){
      var loadedLength = dbData._array.length;
      var stateData = this.state.items;
      var stateLength = stateData.length;

      for(var i = 0; i < loadedLength; i++){
         for(var j = 0; j < stateLength; j++){
            if(dbData._array[i].id === stateData[j].id)
               stateData[j].imageIs = require('images/starsaved.png');
         }
      }
      this.setState({items: stateData});
   }
   saveArticle(item){
      if(item.imageIs === require('images/star.png'))
         DataBaseHandler.saveArticle(item, this.onChanged.bind(this));
      else
         DataBaseHandler.deleteArticle(item, this.onChanged.bind(this));
   }
   onChanged(itemAffected, saved){
      var stateData = this.state.items;
      var stateLength = stateData.length;
      for(var i = 0; i < stateLength; i++){
         if(itemAffected.id === stateData[i].id)
            if(saved)
               stateData[i].imageIs = require('images/starsaved.png');
            else
               stateData[i].imageIs = require('images/star.png');
      }
      this.setState({items: stateData});
   }
   render() {
      return (
         <View>
            <TouchableHighlight 
               style={this.state.loadingButtonVisible}
               disabled={!this.state.loadingButtonActive} 
               //onPress={this.loadArticles} //with context of the highlight
               onPress={() => this.loadArticles()} //with a good context
               underlayColor="white">
               <View>
                  <Text >{i18n.t('loadBtn')}</Text>
               </View>
            </TouchableHighlight>
            {/*<WebView style={{height: 40, backgroundColor: "red"}}
            originWhitelist={['*']}
            source={{html: '<h1>Hello world</h1>'}}
            />*/}
            {/*<Text style={this.state.visibleBody}>
               {JSON.stringify(this.state.data)}
            </Text>*/
            }
            {
               this.state.items.map((item, index) => (
                  <View style={itemStyle.container} key = {index} >
                     <View style={{flex: 1, flexDirection: 'row'}}>
                        <Text style={itemStyle.titleText}>{item.title}</Text>
                        <TouchableHighlight style={{flex: 0.15, height: 40}} 
                                             onPress={() => this.saveArticle(item)}>
                           <Image style={{height: 40, width: 40}}
                              source={item.imageIs}
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
      )
   }
}
export default FetchArticles
/** */