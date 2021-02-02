import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/views/HomeScreen";
import CuteScreen from "./src/views/CuteScreen";
import FootballScreen from "./src/views/FootballScreen";
import PokemonScreen from "./src/views/PokemonScreen";
import Details from "./src/views/Details";

//object that shows what screen will be shown at a different time
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Cute: CuteScreen,
    Football: FootballScreen,
    Pokemon: PokemonScreen,
    Details: Details
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App"
    }
  }
);

export default createAppContainer(navigator);