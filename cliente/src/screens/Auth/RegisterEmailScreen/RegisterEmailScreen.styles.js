import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  content: {
    height: "95%",
    justifyContent: "space-between",
    marginHorizontal: 25,
  },
  form: {
    marginTop: Platform.OS === "ios" ? 20 : 55,
  },
  btnContainer: {
    marginBottom: 40,
    backgroundColor: "#a7adba",
    borderRadius: 5,
  },
  imagen: {
    height: 40,
    width: "100%",
    marginBottom: 5,
  },
});
