import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import "react-native-reanimated";

export default function RootLayout() {
  let [fontsLoaded] = useFonts({
    eryaxindahei_T: require("../assets/fonts/eryaxindahei_T.ttf"),
    montserrat_variableFont_wght: require("../assets/fonts/montserrat_variableFont_wght.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <Stack>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="(samples)" />
      <Stack.Screen name="+not-found" />
    </Stack>
  );
}
