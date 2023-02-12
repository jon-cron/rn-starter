import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';



const ImgDetail = ({imgSource, title, score}) => {
  return (
    <View>
      <Image source={imgSource} />
      <Text>{title}</Text>
      <Text>Image Score - {score}</Text>
    </View>
  );
}
// NOTE we can either bring in all props and drill into that or we can specify what exactly we would like to bring in as seen above
// const ImgDetail = (props) => {
//   return (
//     <View>
//       <Image source={props.imgSource} />
//       <Text>{props.title}</Text>
//       <Text>Image Score - {props.score}</Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({

})

export default ImgDetail;