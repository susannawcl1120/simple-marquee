import { TYPE_LIST } from "@/constants/home";
import { metrics } from "@/theme/metrics";
import { theme } from "@/theme/theme";
import React from "react";
import { StyleSheet, View } from "react-native";
import MarqueeCard from "./components/MarqueeCard";
import ToolList from "./components/ToolList";

function HomeScreen() {
  return (
    <View style={styles.container}>
      {TYPE_LIST.map((cardInfo, index) => (
        <MarqueeCard key={index} cardInfo={cardInfo} />
      ))}
      <ToolList />
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
    gap: metrics.spacing.lg,
  },
});

export default HomeScreen;
