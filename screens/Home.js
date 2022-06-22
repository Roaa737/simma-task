import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

const Home = ({ navigation }) => {
    return(
        <View style={{flex : 1, justifyContent: 'center',alignItems : 'center'}}>
            <Button onPress = {()=> navigation.navigate('Details')} title='Click Here to Webview Screen'></Button>
        </View>
    )
}

export default Home