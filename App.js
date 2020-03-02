import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productReducer from './store/reducers/products';

const rootReducer = combineReducers({
  products: productReducer
});

const store = createStore(rootReducer);

// expo install expo-font
//// import * as Font from 'expo-font';

// component, that will prolong the Splash-screen,
// when the app starts, until our fonts are loaded
////import { AppLoading } from 'expo';

////import AccNavigator from './navigation/AccNavigator';

// this Func will in the end use Font (from imports)
////const fetchFonts = () => {
////  return Font.loadAsync({
////    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
////    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
////  });
////};

// export default function App() {
//   const [fontLoaded, setFontLoaded] = useState(false);

//   if (!fontLoaded) {
//     return (
//       <AppLoading
//         startAsync={fetchFonts}
//         onFinish={() => setFontLoaded(true)}
//       />
//     );
//   }

//   return <AccNavigator />;
// }

export default function App() {
  return (
    <Provider store={store}>
      <View>...</View>
    </Provider>
  );
}
