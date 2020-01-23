// navigation configuration

// when we use the StackNavigator
// we need this import in the file where you are using createStackNavigator
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  // CategoryMeals: {
  //   screen: CategoryMealsScreen
  // },
  CategoryMeals: CategoryMealsScreen,
  MealDetail: MealDetailScreen,
  Favorites: FavoritesScreen
});

export default createAppContainer(MealsNavigator);
// now we need to import this in App.js
