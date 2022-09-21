import { StyleSheet, Platform } from "react-native";

export const styles = StyleSheet.create({
  content: {
    height: "95%",
    justifyContent: "space-between",
    marginHorizontal: 25,
    marginVertical: 190,
  },
  form: {
    marginTop: Platform.OS === "ios" ? 20 : 30,
  },
  btnContainer: {
    marginBottom: 210,
    backgroundColor: "#a7adba",
    borderRadius: 5,
  },
  imagen: {
    height: 45,
    width: "100%",
    marginBottom: 5,
  },
});
