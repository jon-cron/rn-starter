import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
// import components
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImgScreen from "./src/screens/ImgScreen";
import CounterScreen from "./src/screens/CounterScreen.js";
import colorScreen from "./src/screens/ColorScreen.js";
import ColorChanger from "./src/screens/ColorChangerScreen.js";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Img: ImgScreen,
    Counter: CounterScreen,
    Color: colorScreen,
    ColorC: ColorChanger
  },
  {
    // NOTE initialRouteName tells the app what to show by default upon opening
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "React Native Starter",
    },
  }
);

export default createAppContainer(navigator);
