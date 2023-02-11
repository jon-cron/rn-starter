import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
// import components
import ComponentsScreen from "./src/screens/ComponentsScreen";
import ListScreen from "./src/screens/ListScreen";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
  },
  {
    // NOTE initialRouteName tells the app what to show by default upon opening
    initialRouteName: "List",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
