import { View, Text, StyleSheet } from 'react-native'
import React, { useCallback } from 'react'
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import LoginScreen from './App/Screen/LoginScreen/LoginScreen';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded] = useFonts({
    'Outfit': require('./assets/fonts/Outfit-Regular.ttf'),
    'OutfitSB': require('./assets/fonts/Outfit-SemiBold.ttf'),
    'OutfitB': require('./assets/fonts/Outfit-Bold.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <LoginScreen />
      <StatusBar style='auto' />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 25
  },
});