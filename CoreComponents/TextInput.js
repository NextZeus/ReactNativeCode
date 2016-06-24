/**
 * Created by lixd on 16/6/24.
 * Direct text-based user input is a foundation for many apps. Writing a post or comment on a page is a canonical example of this. TextInput is a basic component that allows the user to enter text.

 * This example creates a simple TextInput box with the string Hello as the placeholder when the TextInput is empty.
 */

import React ,{AppRegistry, TextInput, View} from 'react-native';

const App = () =>{
    return (
        <View>
            <TextInput placeholder="Hello"  />
        </View>
    );
}

AppRegistry.registerComponent('myApp', () => App);