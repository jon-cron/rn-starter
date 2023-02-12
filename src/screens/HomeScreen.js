// FIXME if you are having troubling running your project try "expo start --tunnel" in the CMP

import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

// NOTE by instead of taking the params "props" we are drilling into that param by using navigation. Now we only have to do navigation.navigate instead of props.navigation.navigate
// const HomeScreen = props => {
const HomeScreen = ({ navigation }) => {
  return (
  <View>
    <Text style={styles.textStyle}>Home Screen</Text>
    {/* NOTE buttons are self closing and must have a title */}
    <Button
    // NOTE onPress invokes a function
      onPress={()=> navigation.navigate('Components')}
      title="Go To Components Demo"/>
    <Button
    // NOTE onPress invokes a function
      onPress={()=> navigation.navigate('List')}
      title="Go To List Demo"/>
    <Button
    // NOTE onPress invokes a function
      onPress={()=> navigation.navigate('Img')}
      title="Go To The Image Screen"/>
    <Button
    // NOTE onPress invokes a function
      onPress={()=> navigation.navigate('Counter')}
      title="Go To The Counter Screen"/>
    <Button
    // NOTE onPress invokes a function
      onPress={()=> navigation.navigate('Color')}
      title="Go To The Color Screen"/>
    <Button
    // NOTE onPress invokes a function
      onPress={()=> navigation.navigate('ColorC')}
      title="Go To The Color Changer Screen"/>
      {/* NOTE touchableOpacity will be used more so than actual buttons */}
      {/* <TouchableOpacity
        onPress={()=> props.navigation.navigate('List')}>
        <Text>Go To List Demo</Text>
      </TouchableOpacity> */}
  </View>
    );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default HomeScreen;
