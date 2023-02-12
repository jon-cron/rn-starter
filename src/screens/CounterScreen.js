import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';



const CounterScreen = () => {
  // NOTE variable, changes variable and reactively changes on screen
  const [counter, changeCount] = useState(0);

  return (
    <View>
      <Button title="Increase"
      onPress={()=>{
        changeCount(counter + 1)
      }}/>
      <Button title="Decrease"
            onPress={()=>{
              changeCount(counter - 1)
            }}/>
      <Text>Current Count: {counter}</Text>
    </View>
  );
}


const styles = StyleSheet.create({

});

export default CounterScreen