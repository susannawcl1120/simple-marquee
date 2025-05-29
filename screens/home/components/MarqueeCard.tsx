import { metrics } from "@/theme/metrics";
import { typography } from "@/theme/typography";
import { useCallback, useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";

function MarqueeCard() {
  const [textWidth, setTextWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const translateX = useSharedValue(0);

  const animate = useCallback(() => {
    if (containerWidth === 0 || textWidth === 0) return;

    translateX.value = withTiming(
      -textWidth - metrics.spacing.sm,
      {
        duration: ((containerWidth + textWidth) / 50) * 1000,
        easing: Easing.linear,
      },
      (finished) => {
        if (finished) {
          runOnJS(resetAndAnimate)();
        }
      }
    );
  }, [containerWidth, textWidth, translateX]);

  const resetAndAnimate = useCallback(() => {
    translateX.value = containerWidth + metrics.spacing.sm;
    animate();
  }, [animate, containerWidth, translateX]);

  useEffect(() => {
    if (containerWidth && textWidth) {
      translateX.value = containerWidth + metrics.spacing.sm;
      animate();
    }
  }, [animate, containerWidth, textWidth, translateX]);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  return (
    <View style={styles.container}>
      <View style={styles.mainContent}>
        <View style={styles.typeContainer}>
          <Text style={styles.typeText}>霓虹文字</Text>
          <Text style={styles.effectText}>(酷炫)</Text>
        </View>

        <View
          style={styles.marqueeTextContainer}
          onLayout={(e) => setContainerWidth(e.nativeEvent.layout.width)}
        >
          <Animated.Text
            style={[styles.marqueeText, animatedStyle]}
            numberOfLines={1}
            onLayout={(e) => setTextWidth(e.nativeEvent.layout.width)}
          >
            內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容內容
          </Animated.Text>
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
    padding: metrics.spacing.sm,
    overflow: "hidden",
  },
  marqueeText: {
    ...typography.bold.h1,
  },
});

export default MarqueeCard;
