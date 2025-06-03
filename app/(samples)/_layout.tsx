import { theme } from "@/theme/theme";
import { PortalProvider } from "@gorhom/portal";
import { Stack } from "expo-router";

function SamplesLayout() {
  return (
    <PortalProvider>
      <Stack
        screenOptions={{
          headerShown: false,
          contentStyle: {
            backgroundColor: theme.colors.background.neutral1000,
          },
        }}
      >
        <Stack.Screen name="samples" />
      </Stack>
    </PortalProvider>
  );
}

export default SamplesLayout;
