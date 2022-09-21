import { StyleSheet } from "react-native";
import { useTheme } from "react-native-elements";

export const styled = () => {
  const { theme } = useTheme();

  return StyleSheet.create({
    content: {
      height: "100%",
      paddingVertical: 45,
      justifyContent: "space-between",
    },
    optionsContent: {
      marginHorizontal: 20,
    },
    title: {
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
      marginTop: 50,
    },
    info: {
      marginTop: 15,
      textAlign: "center",
      color: "#ffffff",
    },
    itemRegister: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      borderWidth: 1,
      borderColor: "#ffffff",
      paddingVertical: 5,
      paddingHorizontal: 15,
      marginTop: 30,
      borderRadius: 5,
    },
    loginContent: {
      backgroundColor: theme.Default.backgroundSecondary,
      alignItems: "center",
      paddingVertical: 10,
      borderRadius: 5,
      width: "95%",
    },
    text1: {
      textAlign: "center",
    },
    login: {
      color: "#ffffff",
      fontWeight: "bold",
      borderRadius: 5,
      width: "90%",
    },
    // Inpu: {
    //   color: "#343d46",
    //   marginTop: 10,
    // },
    imagen: {
      height: 45,
      width: "100%",
      marginBottom: 20,
    },
  });
};
