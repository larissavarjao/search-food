import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SeachScreen';
import RestaurantShowScreen from './src/screens/RestaurantShowScreen';

const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    Restaurant: RestaurantShowScreen,
  },
  {
    initialRouteName: 'Search',
    defaultNavigationOptions: {
      title: 'Business Search',
    },
  }
);

export default createAppContainer(navigator);
