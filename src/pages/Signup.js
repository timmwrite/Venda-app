import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';

import Logo from '../components/Logo';
import Form from '../components/Form';

export default class Signup extends Component {
  render (){
    return (
      <View style ={styles.container}>
          <Logo/>
          <Form type="Signup"/>
          <View style={styles.signupTextCont}>
            <Text style={styles.SignupText}>Already have an account?</Text>
            <Text style={styles.signupButton}>Sign in</Text>
          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6D00',
  },
  signupTextCont:{
    flexGrow:1,
    alignItems:'flex-end',
    justifyContent:'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  SignupText:{
    color:'black',
    fontSize:16
  },
  signupButton:{
    color:'#ffffff',
    fontSize:16,
    fontWeight:'500'
  }


});
