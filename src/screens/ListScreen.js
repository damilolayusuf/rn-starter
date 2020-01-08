import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';

const ListScreen = () => {
    const friends = [
        {name: 'Friend #1', Age: 20},
        {name: 'Friend #2', Age: 21},
        {name: 'Friend #3', Age: 22},
        {name: 'Friend #5', Age: 34},
        {name: 'Friend #6', Age: 12},
        {name: 'Friend #7', Age: 29},
        {name: 'Friend #8', Age: 27},
        {name: 'Friend #9', Age: 23},
        {name: 'Friend #10', Age: 25},
    ]
    return (
        <FlatList
            horizontal={false}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator = {false}
            keyExtractor = {(friend) => friend.name}
            data = {friends}
            renderItem = {({item}) => {
            return <Text style = {styles.textStyle}>{item.name} - Age {item.Age}</Text>

            }}
        />
    );
};

const styles = StyleSheet.create({
    textStyle:{
        marginVertical: 50
    }
});

export default ListScreen;