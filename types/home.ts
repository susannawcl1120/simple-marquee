import { MaterialIcons } from "@expo/vector-icons";

export type MarqueeType = {
  title: string;
  subTitle: string;
};

type MaterialIconName = keyof typeof MaterialIcons.glyphMap;
export type ToolItemType = {
  title: string;
  icon: MaterialIconName;
  bgColor: string;
  link: string;
};
