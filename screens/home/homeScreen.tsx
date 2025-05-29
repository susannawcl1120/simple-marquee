import { metrics } from "@/theme/metrics";
import { theme } from "@/theme/theme";
import React from "react";
import { StyleSheet, View } from "react-native";
import MarqueeCard from "./components/MarqueeCard";

function HomeScreen() {
  return (
    <View style={styles.container}>
      {Array.from({ length: 4 }).map((_, index) => (
        <MarqueeCard key={index} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: metrics.screenWidth,
    backgroundColor: theme.colors.background.neutral1000,
    paddingHorizontal: metrics.spacing.base,
    paddingVertical: metrics.spacing.sm,
    gap: metrics.spacing.sm,
  },
});

export default HomeScreen;
