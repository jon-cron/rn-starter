import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';



const ImgDetail = (props) => {
  console.log(props)
  return (
    <View>
      <Text>{props.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({

})

export default ImgDetail;