/*
 vertically scrolling list of changing data
 The ListView component requires two properties : dataSource and renderRow.
 dataSource is the actual source of information that will be part of the list
 renderRow takes the data and returns a renderable component to display.

 A rowHasChanged function is required to use ListView
 */

import React from 'react';

import {AppRegistry, Text, View, ListView} from 'react-native';

var SimpleList = React.createClass({
    getInitialState: function () {
        var ds = new ListView.DataSource({rowHasChanged:    (r1,r2) => r1 !== r2 });

        return {
            dataSource: ds.cloneWithRows(['John', 'Joel', "James", "Jimmy","Jackson", "Jillian","Julie"])
        };
    },
    
    render: function () {
        return (
            <View>
                <ListView
                    dataSource = {this.state.dataSource}
                    renderRow = { (rowData ) => <Text> { rowData } </Text> }
                    />
            </View>
        );
    }
});

AppRegistry.registerComponent('myApp', () => SimpleList);