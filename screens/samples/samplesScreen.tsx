import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import FontList from "./components/FontList";

function SamplesScreen() {
  const [selectedFont, setSelectedFont] = useState("跑馬燈");

  return (
    <View style={styles.container}>
      <FontList selectedFont={selectedFont} setSelectedFont={setSelectedFont} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SamplesScreen;
