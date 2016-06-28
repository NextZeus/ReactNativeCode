/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  NavigatorIOS
} from 'react-native';

var RootNav = require('./root.ios.js');

class Navigation extends Component {
  render() {
    return (
        <NavigatorIOS
            style={styles.container}
            initialRoute={
              {
                title:'My Root',
                component:RootNav
              }
            }
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

AppRegistry.registerComponent('Navigation', () => Navigation);
