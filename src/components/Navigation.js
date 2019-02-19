import React from 'react';
import { Button, View, Text } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { createStackNavigator, createAppContainer } from 'react-navigation';

export default class Navigation extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Welcome')}
        />
      </View>
    );
  }
}
