import React from "react";
import {View, Text, StyleSheet, FlatList} from 'react-native';


// NOTE primitive element used in this comp is FLATList Element
const ListScreen = () =>{

  const friends = [
    // NOTE keys can be manually entered into an object. Keys must be STRINGS!!!!!!
    // NOTE {name: 'Friend1', Key '1'}
    {name: 'Friend1'},
    {name: 'Friend2'},
    {name: 'Friend3'},
    {name: 'Friend4'},
    {name: 'Friend5'},
    {name: 'Friend6'},
    {name: 'Friend7'},
    {name: 'Friend8'},
    {name: 'Friend9'}
  ];
  return (
    <FlatList 
    // NOTE this is the second way to assign keys. This happens at runtime. Keys must be unique, so if there were two objects with the same value this would not work.
    keyExtractor={(friend) => friend.name}
    data={friends} 
    renderItem={({item}) => {
      // NOTE if we use element this would happen element === { item: {name: 'Friend1'}, index: 0}
      // NOTE so we drill into the object by using item instead
      return <Text>{item.name}</Text>
    }}/>
  );
};

const styles = StyleSheet.create({});

export default ListScreen;