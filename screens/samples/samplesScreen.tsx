import React from "react";
import { StyleSheet, Text, View } from "react-native";

function SamplesScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ color: "white" }}>Samples</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SamplesScreen;
