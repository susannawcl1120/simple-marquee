import { metrics } from "@/theme/metrics";
import { typography } from "@/theme/typography";
import { StyleSheet, Text, View } from "react-native";

function MarqueeCard() {
  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <View style={styles.typeContainer}>
          <Text style={styles.typeText}>霓虹文字</Text>
          <Text style={styles.effectText}>(酷炫)</Text>
        </View>
        <View style={styles.marqueeTextContainer}>
          <Text style={styles.marqueeText}>內容內容內容內容內容內容</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: metrics.hp(80),
    padding: metrics.spacing.base,
    borderRadius: metrics.borderRadius.md,
    backgroundColor: "#1c1c1c",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  mainContent: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  typeContainer: {
    marginRight: metrics.spacing.sm,
    gap: metrics.spacing.sm,
  },
  typeText: {
    color: "#bbfa73",
  },
  effectText: {
    color: "#d0d0d0",
    ...typography.bold.caption1,
  },
  marqueeTextContainer: {
    width: metrics.screenWidth * 0.7,
    overflow: "hidden",
    padding: metrics.spacing.sm,
  },
  marqueeText: {
    ...typography.bold.h1,
  },
});

export default MarqueeCard;
