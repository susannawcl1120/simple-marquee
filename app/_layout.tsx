import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "react-native-reanimated";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function RootLayout() {
  let [loaded, error] = useFonts({
    eryaxindahei_T: require("../assets/fonts/eryaxindahei_T.ttf"),
    montserrat_variableFont_wght: require("../assets/fonts/montserrat_variableFont_wght.ttf"),
  });

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider style={{ flex: 1, backgroundColor: "white" }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="(tabs)" />
          <Stack.Screen name="(samples)" />
          <Stack.Screen name="+not-found" />
        </Stack>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
