import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/views/HomeScreen";
import ListScreen from "./src/views/ListScreen";

//object that shows what screen will be shown at a different time
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    List: ListScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);