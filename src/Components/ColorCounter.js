import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const ColorCounter = ({color, onDecrease, onIncrease}) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button 
      title={`Increase ${color}`}
      onPress={()=> onIncrease()}
      ></Button>
      <Button 
      title={`Decrease ${color}`}
      onPress={()=> onDecrease()}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({

})

export default ColorCounter;