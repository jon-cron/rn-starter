import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ImgDetail from '../Components/ImgDetail'

const ImgScreen = () =>{
  return (
    <View>
      <ImgDetail 
      title="Forest"
      score={7} 
      imgSource={require('../../assets/Images/forest.jpg')}
      />
      <ImgDetail 
      title="Beach" 
      score={5} 
      imgSource={require('../../assets/Images/beach.jpg')} />
      <ImgDetail 
      title="Mountain" 
      score={2} 
      imgSource={require('../../assets/Images/mountain.jpg')} />
    </View>
  );
}

const styles = StyleSheet.create({});

export default ImgScreen;