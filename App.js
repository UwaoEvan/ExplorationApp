import React, { useState } from 'react';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

import MainNavigation from './src/navigation/MainNavigation';

const getFonts = () => Font.loadAsync({
  'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf')
});
export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  if (fontLoaded) {
    return (
      <MainNavigation />
    );
  } else {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }

}