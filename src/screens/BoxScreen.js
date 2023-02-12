import React from 'react'
import { View, Text, StyleSheet } from 'react-native'


const BoxScreen = () => {

  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Box Screen</Text>
      <Text style={styles.textStyle}>Box Screen</Text>
      <Text style={styles.textStyle}>Box Screen</Text>
      <Text style={styles.textStyle}>Box Screen</Text>
    </View>
  );
};


const styles = StyleSheet.create({
viewStyle: {
  borderWidth: 3,
  borderColor: 'black',
  alignItems: "flex-start"
},
textStyle: {
  borderWidth: 2,
  borderColor: 'red',
}
});

export default BoxScreen;