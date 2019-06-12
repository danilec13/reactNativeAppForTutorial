import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
//https://www.npmjs.com/package/react-native-rss-parser
import * as rssParser from 'react-native-rss-parser';
import i18n from 'sources/i18n';

const styles = StyleSheet.create({
   visible: {
     
   },
   hidden:{
      width: 0,
      height: 0
   }
});

class FetchCars extends Component {
   state = {
      loadingButtonActive: false,
      loadingButtonVisible: styles.visible,
      visibleBody: styles.hidden,
      data: ''
   }

   loadCars(){
      var uri = 'https://e00-marca.uecdn.es/rss/motor/modelos-coches.xml';
      //var uri = 'http://www.nasa.gov/rss/dyn/breaking_news.rss';
      fetch(uri,{
         method: 'GET'
      })
      .then((response) => response.text())
      .then((responseData) => rssParser.parse(responseData))
      .then((rss) => {
         console.log(rss.title);
         console.log(rss.items[0]);
         console.log("" + rss.items[0].image);
         console.log(rss.items.length);
         //console.log(this);
         this.setState({
            data: rss,
            loadingButtonActive: false,
            loadingButtonVisible: styles.hidden,
            visibleBody: styles.visible
         })
      })
      .catch((error) => {
         console.error(error);
      });
   }
   componentDidMount = () => {
      this.setState({loadingButtonActive: true});
      this.loadCars();
   }
   render() {
      return (
         <View>
            <TouchableHighlight 
               style={this.state.loadingButtonVisible}
               disabled={!this.state.loadingButtonActive} 
               //onPress={this.loadCars} //with context of the highlight
               onPress={() => this.loadCars()} //with a good context
               underlayColor="white">
               <View>
                  <Text >{i18n.t('loadBtn')}</Text>
               </View>
            </TouchableHighlight>
            <Text style={this.state.visibleBody}>
               {JSON.stringify(this.state.data)}
            </Text>
         </View>
      )
   }
}
export default FetchCars
/** */