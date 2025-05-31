import { theme } from "@/theme/theme";
import { Stack } from "expo-router";

function SamplesLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { backgroundColor: theme.colors.background.neutral1000 },
      }}
    >
      <Stack.Screen name="samples" />
    </Stack>
  );
}

export default SamplesLayout;
