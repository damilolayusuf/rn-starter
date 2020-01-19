import React, {useState, useReducer} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const COUNT = 2;

const reducer = (state,action) =>{
  //  switch(action.type){
    //    case 'change_counter':
      //      return {...state,counter: state.counter + action.payload}
        //default:
          //  return state
   // }

   switch(action.type){
       case 'increase':
            return {...state,counter: state.counter + action.payload}
       case 'decrease':
            return {...state,counter: state.counter - action.payload}
        default:
            return state

   }
}



const CounterScreen = () => {
//const [counter,setCounter] = useState(0);
const[state,dispatch] = useReducer(reducer,{counter:0});
const{counter} = state;
    return (
        <View>
            <Button 
                title="Increase"
                onPress = {()=> {
                    dispatch({type: 'increase',payload:COUNT})
                }}/>
            <Button 
                title="Decrease"
                onPress = {()=> {
                    dispatch({
                        type:'decrease', payload:COUNT
                    })
                }}/>

            <Text>Current Count: {counter}</Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default CounterScreen;
