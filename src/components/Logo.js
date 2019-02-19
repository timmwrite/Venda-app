import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class Logo extends Component {
  render(){
    return(
        <View style={styles.container}>
          <Text style={styles.logoText}>Venda </Text>
        </View>
    )
  }
}

const styles =  StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent:'flex-end',
    alignItems:'center'
  },
  logoText:{
    marginVertical: 15,
    fontSize:40,
    color:'#ffffff'
  }
});
