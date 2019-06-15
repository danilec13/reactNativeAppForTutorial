import {StyleSheet} from 'react-native';

//bodyStyles for footer, header, content, etc.
const itemStyle = StyleSheet.create({
  container:{
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#CF7866'
  },
  titleText: {
    flex: 0.85,
    textAlign: "center",
    fontSize: 18, 
    color: "black", 
    fontStyle: "italic"
  }
});

export{itemStyle};