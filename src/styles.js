import {StyleSheet} from 'react-native';

//bodyStyles for footer, header, content, etc.
const bodyStyles = StyleSheet.create({
    header:{
        flex: 2, 
        backgroundColor: '#BDBDBD',
        justifyContent: 'center',
        borderBottomWidth: 2
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