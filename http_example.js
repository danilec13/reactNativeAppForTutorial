import React, { Component } from 'react'
import { View, Text } from 'react-native'
import * as rssParser from 'react-native-rss-parser';

class HttpExample extends Component {
   state = {
      data: ''
   }
   componentDidMount = () => {
       //https://e00-marca.uecdn.es/rss/motor/modelos-coches.xml
       //http://www.nasa.gov/rss/dyn/breaking_news.rss
    fetch('https://e00-marca.uecdn.es/rss/motor/modelos-coches.xml',{
        method: 'GET'
    })
    .then((response) => response.text())
    .then((responseData) => rssParser.parse(responseData))
    .then((rss) => {
      console.log(rss.title);
      console.log(rss.items.length);
      this.setState({
        data: rss
     })
    })
    .catch((error) => {
        console.error(error);
     });
      /*fetch('https://jsonplaceholder.typicode.com/posts/1', {
         method: 'GET'
      })
      .then((response) => response.json())
      .then((responseJson) => {
         console.log(responseJson);
         this.setState({
            data: responseJson
         })
      })
      .catch((error) => {
         console.error(error);
      });/**/
   }
   render() {
      return (
         <View>
            <Text>
               {JSON.stringify(this.state.data)}
            </Text>
         </View>
      )
   }
}
export default HttpExample
/** */