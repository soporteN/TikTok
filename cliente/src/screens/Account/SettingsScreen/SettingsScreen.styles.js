import { StyleSheet } from "react-native";
import { useTheme } from "../../../hooks";

export const styled = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    btnLogout: {
      backgroundColor: "#a7adba",
      borderTopWidth: 1,
      width: 300,
      marginHorizontal: 55,
      marginVertical: 40,
      borderTopColor: theme.Default.border,
      borderBottomWidth: 1,
      borderBottomColor: theme.Default.border,
      borderRadius: 5,
    },
  });
};
