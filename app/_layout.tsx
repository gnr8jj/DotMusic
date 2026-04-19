import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import "../global.css";

export default function RootLayout() {

  const [fontsLoaded] = useFonts({
    'letteramono-medium': require('../assets/fonts/LetteraMonoLL-Medium.otf'),
    'letteramono': require('../assets/fonts/LetteraMonoLL-Regular.otf'),
    'ndot55': require('../assets/fonts/Ndot-55.otf'),
    'ntype82-headline': require('../assets/fonts/NType82-Headline.otf'),
    'ntype82': require('../assets/fonts/NType82-Regular.otf')
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) return null;

  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />

      <Stack.Screen name="librarytabs/[albums]" options={{ headerShown: true }} />
    </Stack>
  );
}