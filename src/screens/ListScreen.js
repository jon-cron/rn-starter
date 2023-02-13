import React from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { block } from "react-native-reanimated";


// NOTE primitive element used in this comp is FLATList Element
const ListScreen = () =>{

  const friends = [
    // NOTE keys can be manually entered into an object. Keys must be STRINGS!!!!!!
    // NOTE {name: 'Friend1', Key '1'}
    {name: 'Friend #1', age: 100},
    {name: 'Friend #2', age: 25},
    {name: 'Friend #3', age: 19},
    {name: 'Friend #4', age: 18},
    {name: 'Friend #5', age: 39},
    {name: 'Friend #6', age: 52},
    {name: 'Friend #7', age: 20},
    {name: 'Friend #8', age: 25},
    {name: 'Friend #9', age: 30}
  ];
  return (
    <FlatList 
    // NOTE just by adding the word horizontal or horizontal={true} the list becomes side scrolling
    horizontal
    // NOTE this hides the scroll bar
    showsHorizontalScrollIndicator={false}
    // NOTE this is the second way to assign keys. This happens at runtime. Keys must be unique, so if there were two objects with the same value this would not work.
    keyExtractor={(friend) => friend.name}
    data={friends} 
    renderItem={({item}) => {
      // NOTE if we use element this would happen element === { item: {name: 'Friend1'}, index: 0}
      // NOTE so we drill into the object by using item instead
      return (
      <Text style={styles.textStyle}>
        {item.name} - Age: {item.age}
      </Text>
        );
    }}/>
  );
};

const styles = StyleSheet.create({
  textStyle:{
    marginVertical: 50,
    marginHorizontal: 10,
  }
});

export default ListScreen;