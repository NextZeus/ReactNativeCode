import React, { Component } from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';


var styles = Stylesheet.create({
    base:{
        width : 38,
        height:38,
    },
    background:{
        backgroundColor:'#222222',
    },
    active:{
        borderWidth:2,
        borderColor:'#00ff00'
    }
});


class Style extends Component{
    render(){
        return (
            <View>
                <Text ></Text>
            </View>
        );
    }
}

//Pass Styles Around 将style保存在propTypes中
var List = React.createClass({
    propTypes: {
        style: View.propTypes.style,
        elementStyle: View.propTypes.style,
    },
    render: function() {
        return (
            <View style={this.props.style}>
                {elements.map((element) =>
                        <View style={[styles.element, this.props.elementStyle]} />
                )}
            </View>
        );
    }
});