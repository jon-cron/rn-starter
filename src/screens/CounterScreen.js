import React, { useState, useReducer } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

// SECTION reducer section
const reducer = (state, action) => {
  switch(action.type){
    case "increase":
      return state + action.payload;
    case "decrease":
      return state + action.payload;
    default: return state;
  }
}

const CounterScreen = () => {
  // NOTE variable, changes variable and reactively changes on screen
  const [state, dispatch] = useReducer(reducer, 0)
  const counter = state
  return (
    <View>
      <Button title="Increase"
      onPress={()=>{
        dispatch({type: 'increase', payload: 1})
      }}/>
      <Button title="Decrease"
            onPress={()=>{
              dispatch({type: 'decrease', payload: -1})
            }}/>
      <Text>Current Count: {counter}</Text>
    </View>
  );
}
// SECTION useState section

// const CounterScreen = () => {
//   // NOTE variable, changes variable and reactively changes on screen
//   const [counter, changeCount] = useState(0);

//   return (
//     <View>
//       <Button title="Increase"
//       onPress={()=>{
//         changeCount(counter + 2)
//       }}/>
//       <Button title="Decrease"
//             onPress={()=>{
//               changeCount(counter - 1)
//             }}/>
//       <Text>Current Count: {counter}</Text>
//     </View>
//   );
// }


const styles = StyleSheet.create({

});

export default CounterScreen