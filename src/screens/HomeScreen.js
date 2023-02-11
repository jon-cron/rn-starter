import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = props => {
  console.log(props)
  return (
  <View>
    <Text style={styles.textStyle}>Home Screen</Text>
    {/* NOTE buttons are self closing and must have a title */}
    <Button
    // NOTE onPress invokes a function
      onPress={()=> console.log("button press")}
      title="Go To Components Demo"/>
      <TouchableOpacity
        onPress={()=> console.log("go to list")}>
        <Text>Go To List Demo</Text>
      </TouchableOpacity>
  </View>
    );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

export default HomeScreen;
