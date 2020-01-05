import React from 'react';
import {Text, Stylesheet} from 'react-native';

const ComponentsScreen = () => {
    return <Text style = {styles.textStyle}>This is the Components Screen</Text>;
};

const styles = Stylesheet.create({
    textStyle: {
        fontSize:30
    }
})