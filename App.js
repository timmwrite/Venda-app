import React, {Component} from 'react';
import {StyleSheet, View, StatusBar} from 'react-native';

import Login from './src/pages/Login';

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
          <StatusBar
            backgroundColor="#1c313a"
            barStyle="light-content"/>

            <Login/>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF6D00',
  }

});
