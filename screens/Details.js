import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';
import { WebView } from 'react-native-webview';

const SHEIN = 'https://ar.shein.com/'

export default class WebViewBG extends React.PureComponent{

    state = {
        loading: true,
    };

    render() {
        const run = `
      var elems = document.querySelectorAll('div');
    var index = 0, length = elems.length;
    for ( ; index < length; index++) {
        elems[index].style.backgroundColor = 'red';
    }
    `;
        return (
            <View style={{ flex: 1}}>
                <WebView
                style={{flex: 1}}
                ref={(r) => (this.webref = r)}
                    source={{uri: SHEIN}}
                />
                <Button
                 title="Change The BG Color" 
                 onPress = {()=> this.webref.injectJavaScript(run)}></Button>
            </View>
        )

    }
}