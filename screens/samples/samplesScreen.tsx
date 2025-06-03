import { metrics } from "@/theme/metrics";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import FontList from "./components/FontList";
import SampleList from "./components/SampleList";

function SamplesScreen() {
  const [selectedFont, setSelectedFont] = useState("");

  return (
    <View style={styles.container}>
      <FontList selectedFont={selectedFont} setSelectedFont={setSelectedFont} />
      <SampleList selectedFont={selectedFont} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: metrics.spacing.base,
    gap: metrics.spacing.lg,
  },
});

export default SamplesScreen;
