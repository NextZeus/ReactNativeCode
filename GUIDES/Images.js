//static image resources
//<Image source = {require('./my-icon.png')} />

//my-icon.ios.png my-icon.android.png 根据平台适配
//check@2x.png check@3x.png 自动适配 <Image source={require('./img/check.png')} />
//Network Images
<Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
       style={{width: 400, height: 400}} />

var icon = this.props.active ? require('./my-icon-active.png') : require('./my-icon-inactive.png');
<Image source={icon} />

//In the browser if you don't give a size to an image,
// the browser is going to render a 0x0 element, download the image, and then render the image based with the correct size.