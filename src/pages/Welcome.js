import React, {Component} from 'react';
import {StyleSheet, Text, View,Button, Image} from 'react-native';
import {createStackNavigator,} from 'react-navigation';

import Index1 from './src/pages/Index1';
import Index2 from './src/pages/Index2';
import Index3 from './src/pages/Index3';
import Login from './src/pages/Login';


export class Welcome extends Component {
  render(){
    return(
        <View style={styles.container}>
          <Text style={styles.logoText}>Venda</Text>
              <Button
                  title ="Next"
                  color ="#1abc9c"
                  onPress = {() => this.props.navigation.navigate('Index1')}
                />
              <Index1 />
        </View>
    );
  }
}


const AppStackNavigator = createStackNavigator({
  Welcome: Welcome,
  Index1: Index1,
  Index2: Index2,
  Index3: Index3,
  Login: Login,
});

const styles =  StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems: 'center',
    paddingHorizontal: 10
  },
  logoText:{
    marginVertical: 15,
    fontSize:40,
    paddingTop: 100,
    color:'#ffffff'
  }
});
