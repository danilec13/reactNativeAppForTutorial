import React from "react";
import { View, TouchableHighlight, Image, Text } from "react-native";

import styles from "./styles";

//https://medium.com/@davidjwoody/how-to-use-absolute-paths-in-react-native-6b06ae3f65d1

const CustomHeader = ({ navigation }) => (
  <View style={styles.container}>
    <TouchableHighlight style={styles.menuButton} onPress={() => navigation.openDrawer()}>
      <Image style={styles.menuIcon} source={require('images/navigationIcon.png')} />
    </TouchableHighlight>
    <View style={styles.headerTextContainer}>
      <Text style={styles.headerText}>{this.props.ht.toUpperCase()}</Text>
    </View>
  </View>
);


export default CustomHeader;