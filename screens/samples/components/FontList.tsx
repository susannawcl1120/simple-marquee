import { Pressable, StyleSheet, Text, View } from "react-native";

import { FONT_LIST } from "@/constants/sample";
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
  const handleSelect = (font: string) => {
    setSelectedFont(font);
  };

  return (
    <View style={styles.container}>
      {FONT_LIST.map((font, index) => (
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
    height: metrics.hp(20),
    alignItems: "center",
    justifyContent: "center",
    color: theme.colors.text.black,
    ...typography.bold.caption1,
  },
  selectedText: {
    color: theme.colors.text.inverse,
  },
});

export default FontList;
