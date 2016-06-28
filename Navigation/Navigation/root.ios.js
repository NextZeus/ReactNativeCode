'use strict'

var React = require('react-native');

var Child = require('./child.ios.js');
var {
    StyleSheet,
    View,
    TouchableHighlight,
    Text
} = React;

var RootNav = React.createClass({
    getDerper:function () {
        this.props.navigator.push({
            title:'The child title',
            component:Child,
            passPorps:{myElement: 'this could be your value!'}
        });
    }
});
