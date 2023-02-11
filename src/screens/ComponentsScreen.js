// SECTION importing libraries

import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { color } from "react-native-reanimated";


// SECTION the return of JSX
const ComponentsScreen = () => {
  // const greeting = "Hi there!";
  const greeting = <Text>My name is</Text>;
  const name = <Text>Jon</Text>;
  return (
  <View>
    <Text style={styles.textStyle}>Getting started with react native!</Text>
    {/* <Text>Hi there</Text> */}
    <Text style={styles.subHeaderStyle}>{greeting} {name}</Text>
  </View>
  );
};

// SECTION creating of stylesheet
const styles = StyleSheet.create({
  textStyle:{
    fontSize: 30
  },
  subHeaderStyle:{
    fontSize: 20
  }
})

// SECTION finally to export the component use export default.
export default ComponentsScreen;