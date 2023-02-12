import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ImgDetail from '../Components/ImgDetail'

const ImgScreen = () =>{
  return (
    <View>
      <ImgDetail title="Forest" />
      <ImgDetail title="Beach" />
      <ImgDetail title="Mountain" />
    </View>
  );
}

const styles = StyleSheet.create({});

export default ImgScreen;