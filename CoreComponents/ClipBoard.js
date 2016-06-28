//video url : https://www.youtube.com/watch?v=VZuVCBPPbC8&index=2&list=PLrHpDKNHozG6EKVeWyrwqL3kwZn7-XLCB
//npm install react-native-clipboard
//xcode add Library to Project


var {
	AppRegistry,
	StyleSheet,
	Text,
	View,
	ListView,
	TouchableHighlight,
} = React;

var ReactProject = React.createClass({
	getInitState:function(){
		var ds = new ListView.DateSource( (row1,row2) => row1 !== row2);
		return {
			dataSource:db.cloneWithRows(['Row 1',"Row 2"]);
		}
	},
	copyRow:function(value){
		Clipboard.set(value);
		Clipboard.get(content => console.log('Clipboard Content is :',value););
	},
	renderRow:function(row){
		return (
			<TouchableHighlight onLongPress = (() => this.copyRow(row))>
				<View>
					<Text>{row}</Text>
				</View>
			</TouchableHighlight>
		);
	},
	render:function(){
		return (
			<ListView>
				dataSource = {this.props.dataSource}
				renderRow = {this.renderRow}
				style = {}
			</ListView>
		);
	}
});