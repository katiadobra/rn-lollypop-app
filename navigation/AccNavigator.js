// navigation configuration

// when we use the StackNavigator
// we need this import in the file where you are using createStackNavigator
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryAccScreen from '../screens/CategoryAccScreen';
import AccDetailScreen from '../screens/AccDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const AccNavigator = createStackNavigator({
  Lollypop: CategoriesScreen,
  Category: CategoryAccScreen,
  Detail: AccDetailScreen,
  Favorites: FavoritesScreen
});

export default createAppContainer(AccNavigator);
// now we need to import this in App.js
