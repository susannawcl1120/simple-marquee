import { StyleSheet, Text, View } from "react-native";

import { SAMPLE_LIST } from "@/constants/sample";
import { metrics } from "@/theme/metrics";
import { theme } from "@/theme/theme";
import { typography } from "@/theme/typography";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";

type SampleItemProps = {
  sample: { content: string };
  isLast: boolean;
  selectedFont: string;
};

function SampleItem({ sample, isLast, selectedFont }: SampleItemProps) {
  return (
    <View style={[styles.sampleItem, !isLast && styles.sampleItemBottom]}>
      <Text style={[styles.sampleText, { fontFamily: selectedFont }]}>
        {sample.content}
      </Text>
      <MaterialIcons
        name="edit-document"
        size={24}
        color={"white"}
        style={{ flex: 1, alignItems: "flex-end" }}
      />
    </View>
  );
}

type Props = {
  selectedFont: string;
};

function SampleList({ selectedFont }: Props) {
  return (
    <View style={styles.container}>
      {SAMPLE_LIST.map((sample, index) => (
        <SampleItem
          key={index}
          sample={sample}
          isLast={index === SAMPLE_LIST.length - 1}
          selectedFont={selectedFont}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: metrics.borderRadius.md,
    backgroundColor: "#1c1c1c",
    borderWidth: 1,
    borderColor: "#222222",
  },
  sampleItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: metrics.spacing.base,
    paddingVertical: metrics.spacing.lg,
  },
  sampleItemBottom: {
    borderBottomWidth: 1,
    borderBottomColor: "#222222",
  },
  sampleText: {
    color: theme.colors.text.inverse,
    flex: 9,
    ...typography.regular.h1,
  },
});

export default SampleList;
