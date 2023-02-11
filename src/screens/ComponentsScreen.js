// SECTION importing libraries

import React from "react";
import { Text, StyleSheet } from "react-native";


// SECTION the return of JSX
const ComponentsScreen = () => {
  return <Text style={styles.textStyle}>Components Screen</Text>;
};

// SECTION creating of stylesheet
const styles = StyleSheet.create({
  textStyle:{
    fontSize: 40

  }
})

// SECTION finally to export the component use expost default.
export default ComponentsScreen;