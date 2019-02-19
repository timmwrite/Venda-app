import React, {Component} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

export default class Index1 extends Component {
  render(){
    return(
        <View style={styles.container}>
          <Text style={styles.logoText}>Welcome to Venda</Text>
          <Text style={styles.logoDescription}>You can buy items from Vendors around you</Text>
        </View>
    )
  }
}

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center',
    paddingVertical:10
  },
  logoText:{
    marginVertical: 15,
    fontSize:40,
    color:'#ffffff'
  },
  logoDescription:{
    marginVertical: 15,
    fontSize:30,
    paddingVertical: 2,
    textAlign: 'center',
    color:'#ffffff'
  }
});
