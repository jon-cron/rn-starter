import React, {useReducer} from 'react'
import { View, Text, Button, StyleSheet, FlatList } from 'react-native'
import ColorCounter from "../Components/ColorCounter";

// NOTE Generally, it is best practice to useState in the most parent component

  const COLOR_INCREMENT = 15;

// action is used to describe how we are changing the state object
  const reducer = (state, action) => {
    // state === {red: number, green: number, blue: number}
    // action === color and amount {colorToChange or type: 'change_red'|| 'change_green' || 'change_blue', amount/payload: 15 || -15}
    switch(action.type){
        case 'change_red':
          return state.red + action.payload > 255 || state.red + action.payload < 0 ? state : {...state, red: state.red + action.payload};
          case 'change_green':
            return state.green + action.payload > 255 || state.green + action.payload < 0 ? state : {...state, green: state.green + action.payload};
          case 'change_blue':
            return state.blue + action.payload > 255 || state.blue + action.payload < 0 ? state : {...state, blue: state.blue + action.payload};
        default:
        return state;
    }
  };


const ColorChanger = () => {
  // console.log(state) == red:0, green:0, blue:0
  // NOTE dispatch is conventionally correct but this is a banana word. This will invoke the switch function withing the (reducer)
  const [state, dispatch] = useReducer(reducer, {red:0, green:0, blue:0})
  const {red, green, blue} = state

  // NOTE this worked but using a reducer is better

  // const [red, setRed] = useState(0)
  // const [green, setGreen] = useState(0)
  // const [blue, setBlue] = useState(0)

  // const setColor = (color, change) => {
  //   switch(color){
  //     case 'red':
  //     red + change > 255 || red + change < 0 ? null : setRed(red + change);
  //     return;
  //     case 'green':
  //     green + change > 255 || green + change < 0 ? null : setGreen(green + change);
  //     return;
  //     case 'blue':
  //     blue + change > 255 || blue + change < 0 ? null : setBlue(blue + change);
  //     return;
  //   }
  // }

  return (
    <View>
      <ColorCounter 
        onIncrease= {()=> dispatch({type: 'change_red', payload: COLOR_INCREMENT})}
        onDecrease= {()=> dispatch({type: 'change_red', payload: -1 * COLOR_INCREMENT})}
        color="Red"/>
      <ColorCounter 
        onIncrease= {()=> dispatch({type: 'change_green', payload: COLOR_INCREMENT})}
        onDecrease= {()=> dispatch({type: 'change_green', payload: -1 * COLOR_INCREMENT})}
        color="Green"/>
      <ColorCounter 
        onIncrease= {()=> dispatch({type: 'change_blue', payload: COLOR_INCREMENT})}
        onDecrease= {()=> dispatch({type: 'change_blue', payload: -1 * COLOR_INCREMENT})}
        color="Blue"/>
        {/* NOTE we must alias out red, green, and blue above so that we do not have to do state.red, state.green, ... */}
        <View style={{height: 150, width: 150, backgroundColor: `rgb(${red},${green},${blue})`}}/>
    </View>
  );
}

const styles = StyleSheet.create({

});

export default ColorChanger;