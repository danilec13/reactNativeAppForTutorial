import {StyleSheet} from 'react-native';

//bodyStyles for footer, header, content, etc.
const bodyStyles = StyleSheet.create({
    header:{
        flex: 4, 
        backgroundColor: '#BDBDBD',
        justifyContent: 'center'
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
    footer:{
        flex: 1, 
        backgroundColor: '#42493E', 
        justifyContent: 'center'
    },
    footerText: {
      textAlign: "right",
      paddingRight: 15,
      fontSize: 18, 
      color: "white", 
      fontStyle: "italic"
    }
  });

export{bodyStyles};