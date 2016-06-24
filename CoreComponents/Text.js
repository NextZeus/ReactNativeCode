/**
 * Created by lixd on 16/6/24.
 * The most basic component in React Native is the Text component. The Text component simply renders text.

 This example displays the string "Hello" on the device.
 */

import React from 'react';
import {AppRegistry , Text} from 'react-native';

const App = () =>{
    return (
        <Text>
            Hello World!
        </Text>
    );
}

// App registration and rendering
AppRegistry.registerComponent('myApp', () => App);