import React from "react";
import { View } from "react-native";
import { DrawerItems } from "react-navigation";

import styles from "./styles";

//https://reactjs.org/docs/jsx-in-depth.html

const CustomDrawerNavigator = props => (
  <View style={[styles.container]}>
    <DrawerItems
      activeBackgroundColor={"green"}
      activeTintColor={"white"}
      iconContainerStyle={styles.icons}
      {...props}
    />
  </View>
);

export default CustomDrawerNavigator;