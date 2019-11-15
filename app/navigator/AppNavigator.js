import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from '../screens/HomeScreen';
import Favorite from '../screens/Favorite'
import Detail from '../screens/song/index'

const AppNavigator = createStackNavigator(
  {
    Home: HomeScreen,
    Favorite: Favorite,
    Detail: Detail
  }
);

export default createAppContainer(AppNavigator);