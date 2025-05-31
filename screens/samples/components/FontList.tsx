import { Pressable, StyleSheet, Text, View } from "react-native";

import { metrics } from "@/theme/metrics";
import { theme } from "@/theme/theme";
import { typography } from "@/theme/typography";
import React, { Dispatch, SetStateAction } from "react";

type FontItemProps = {
  font: { title: string; font: string };
  selectedFont: string;
  onSelect: (font: string) => void;
};

function FontItem({ font, selectedFont, onSelect }: FontItemProps) {
  const isSelected = font.font === selectedFont;

  return (
    <Pressable
      onPress={() => onSelect(font.font)}
      style={({ pressed }) => [
        styles.button,
        isSelected && styles.selectedButton,
        pressed && { opacity: 0.8 },
      ]}
    >
      <Text
        style={[
          styles.buttonText,
          isSelected && styles.selectedText,
          { fontFamily: font.font },
        ]}
      >
        {font.title}
      </Text>
    </Pressable>
  );
}

type Props = {
  selectedFont: string;
  setSelectedFont: Dispatch<SetStateAction<string>>;
};

function FontList({ selectedFont, setSelectedFont }: Props) {
  const fontOptions = [
    { title: "跑馬燈", font: "" },
    { title: "跑馬燈", font: "montserrat_variableFont_wght" },
    { title: "跑馬燈", font: "eryaxindahei_T" },
  ];

  const handleSelect = (font: string) => {
    setSelectedFont(font);
  };

  return (
    <View style={styles.container}>
      {fontOptions.map((font, index) => (
        <FontItem
          key={index}
          font={font}
          selectedFont={selectedFont}
          onSelect={handleSelect}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: metrics.spacing.base,
    alignItems: "center",
  },
  button: {
    borderRadius: metrics.borderRadius.lg,
    padding: metrics.spacing.sm,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
    ...typography.regular.body2,
  },
  selectedButton: {
    backgroundColor: "#3175dd",
  },
  buttonText: {
    height: metrics.hp(16),
    alignItems: "center",
    justifyContent: "center",
    color: theme.colors.text.black,
  },
  selectedText: {
    color: theme.colors.text.inverse,
  },
});

export default FontList;
