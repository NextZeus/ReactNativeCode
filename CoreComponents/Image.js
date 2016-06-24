/**
 * Created by lixd on 16/6/24.
 * The other basic React Native component is the Image component. Like Text, the Image component simply renders an image.

 An Image is analogous to using img when building websites.
 The simplest way to render an image is to provide a source file to that image via the source attribute.

 This example displays a checkbox Image on the device.
 */
import React from 'react';

import {AppRegistry, Image} from 'react-native';

const App = () =>{
    return (
        <Image source={require('./img/check.png')} />
    );
}

//app registration and rendering
AppRegistry.registerComponent('myApp', () => App);