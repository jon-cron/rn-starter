import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const BoxScreen = () => {

  return (
    <View style={styles.parentStyle}>
      <View style={styles.viewOneStyle}></View>
      <View style={styles.viewTwoStyle}></View>
      <View style={styles.viewThreeStyle}></View>
      {/* <Text style={styles.text1Style}>Box Screen 1</Text>
      <Text style={styles.text2Style}>Box Screen 2</Text>
      <Text style={styles.text3Style}>Box Screen 3</Text> */}
    </View>
  );
};


const styles = StyleSheet.create({
parentStyle: {
  borderWidth: 3,
  borderColor: 'black',
  height: 100,
  // alignItems: "center",
  flexDirection: "row",
  justifyContent: 'space-between',
  // alignItems: 'center'
},
viewOneStyle:{
height: 50,
width: 50,
backgroundColor: 'red'
},
viewTwoStyle:{
  height: 50,
  width: 50,
  backgroundColor: 'green',
  // alignSelf: "flex-end"
},
viewThreeStyle:{
  height: 50,
  width: 50,
  backgroundColor: 'purple'
},


















text1Style: {
  borderWidth: 2,
  borderColor: 'red',
  height: 100,
  width: 100,
  padding: 2,
  // textAlign: "center",
  // flex: 4
},
text2Style: {
  borderWidth: 2,
  borderColor: 'red',
  height: 100,
  width: 100,
  padding: 2,
  // textAlign: "center",
  // flex: 2,
  // alignSelf: "flex-end",
  // position: "absolute",
  // fontSize: 22,
  // NOTE ...StyleSheet.absoluteFillObject is a react style that makes a child comp fill the entire space of the parent comp

},
text3Style: {
  borderWidth: 2,
  borderColor: 'red',
  height: 100,
  width: 100,
  padding: 2,
  // textAlign: "center",
  // flex: 2,
  // alignSelf: "center"
},
});

export default BoxScreen;