import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const ComponentsScreen = () => {
    const myname = 'Damilola Yusuf'
    return (
        <View>
            <Text style={styles.Heading}>Getting started with React Native!</Text>
            <Text style = {styles.subHeadings}> My name is {myname} </Text> 
        </View>
    );
};

const styles = StyleSheet.create({
    Heading: {
        fontSize:45
    },
    subHeading: {
        fontSize: 20
    }
});

export default ComponentsScreen;