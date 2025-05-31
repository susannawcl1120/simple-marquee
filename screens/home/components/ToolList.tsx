import { TOOL_LIST } from "@/constants/home";
import { metrics } from "@/theme/metrics";
import { theme } from "@/theme/theme";
import { typography } from "@/theme/typography";
import { ToolItemType } from "@/types/home";
import { MaterialIcons } from "@expo/vector-icons";
import { Href, router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

function ToolItem({ toolInfo }: { toolInfo: ToolItemType }) {
  const onPress = () => {
    router.push(toolInfo.link as Href);
  };

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.toolItemContainer,
        pressed && { opacity: 0.8 },
      ]}
    >
      <MaterialIcons
        name={toolInfo.icon}
        size={32}
        style={[styles.toolItem, { backgroundColor: toolInfo.bgColor }]}
      />
      <Text style={styles.toolItemText}>{toolInfo.title}</Text>
    </Pressable>
  );
}

function ToolList() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>更多</Text>
      <View style={styles.listContainer}>
        {TOOL_LIST.map((tool) => (
          <ToolItem key={tool.title} toolInfo={tool} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: metrics.spacing.base,
  },
  title: {
    color: theme.colors.text.inverse,
    ...typography.bold.h3,
  },
  listContainer: {
    backgroundColor: "#1c1c1c",
    flexDirection: "row",
    gap: metrics.spacing.base,
    justifyContent: "space-between",
    paddingHorizontal: metrics.spacing.base,
    paddingVertical: metrics.spacing.lg,
    borderRadius: metrics.borderRadius.md,
  },
  toolItemContainer: {
    alignItems: "center",
    gap: metrics.spacing.base,
  },
  toolItem: {
    padding: metrics.spacing.md,
    alignItems: "center",
    borderRadius: 32,
  },
  toolItemText: {
    color: theme.colors.text.inverse,
  },
});

export default ToolList;
