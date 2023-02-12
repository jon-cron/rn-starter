import React, {useState} from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {

  const [name, setName] = useState('');
  return (
    <View>
      <TextInput 
      style={styles.input}
      autoCapitalize="none"
      autoCorrect={false}
      placeholder="Type here..."
      value={name}
      onChangeText={(newValue) => setName(newValue)}
      />
      <Text>My name is {name}</Text>
      {name.length < 5 ? <Text>Not enough characters</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1
  }
});

export default TextScreen;