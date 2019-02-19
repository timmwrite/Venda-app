import React, {Component} from 'react';
import {StyleSheet, Text, View, StatusBar} from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';


import Form from '../components/Form';

export default class Login  extends Component {
  render (){
    return (
      <View style ={styles.container}>
          <Logo/>
          <Form type="Login"/>
          <View style={styles.signupTextCont}>
            <Text style={styles.SignupText}>Don't have an account yet?</Text>
            <Text style={styles.signupButton} onPress = {() => this.props.navigation.navigate('Signup')}>Signup</Text>
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
