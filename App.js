import React, { useState } from 'react';
import { Text, View } from 'react-native';

// expo install expo-font
import * as Font from 'expo-font';

// component, that will prolong the Splash-screen,
// when the app starts, until our fonts are loaded
import { AppLoading } from 'expo';

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

  return (
    <View>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}
