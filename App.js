import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
// import components
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";
import ImgScreen from "./src/screens/ImgScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    Img: ImgScreen
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
