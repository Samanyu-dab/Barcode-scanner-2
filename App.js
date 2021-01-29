import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import ScanScreen from './screens/ScanScreen';


export default class App extends React.Component {
  render(){
    return (
      
        <AppContainer />
      
    );
  }
}

const RootStack = createStackNavigator(
  {
    Scan: ScanScreen,
        
  },
  {
    initialRouteName: 'Scan',
  }
);

const AppContainer = createAppContainer(RootStack);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
