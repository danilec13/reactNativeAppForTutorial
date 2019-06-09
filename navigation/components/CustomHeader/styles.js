import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row' 
  },
  menuButton:{
    flex:2
  },
  menuIcon:{
    height: 25,
    width: 25,
    margin: 15
  },
  headerTextContainer:{
    flex:10,
    justifyContent: 'center',
  },
  headerText:{
    color: 'red',
    textTransform: "uppercase",
    fontSize: 30,
    textAlign: "center",
    fontWeight: "800",
    letterSpacing: -1,
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10
    /*
    
    fontSize: 30,
    color: "red"/** */
  },
});

export default styles;