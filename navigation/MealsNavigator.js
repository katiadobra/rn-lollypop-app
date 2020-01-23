// navigation configuration

// when we use the StackNavigator
// we need this import in the file where you are using createStackNavigator
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';

import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    // CategoryMeals: {
    //   screen: CategoryMealsScreen
    // },
    CategoryMeals: CategoryMealsScreen,
    MealDetail: MealDetailScreen,
    Favorites: FavoritesScreen
  },
  // second argument added to apply styles to all the screens
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Colors.primaryColor
      },
      headerTintColor: 'white'
    }
  }
);

export default createAppContainer(MealsNavigator);
// now we need to import this in App.js
