import React, { useState } from 'react';

// expo install expo-font
import * as Font from 'expo-font';

// component, that will prolong the Splash-screen,
// when the app starts, until our fonts are loaded
import { AppLoading } from 'expo';

import AccNavigator from './navigation/AccNavigator';

// this Func will in the end use Font (from imports)
const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setFontLoaded(true)}
      />
    );
  }

  return <AccNavigator />;
}
