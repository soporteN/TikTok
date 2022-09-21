import React, { useState } from "react";
import { View, Image, SafeAreaView } from "react-native";
import { Input, Button, Text, Divider } from "react-native-elements";
import { useFormik } from "formik";
import { Auth } from "../../../api";
import { initialValues, validationSchema } from "./RegisterEmailScreen.data";
import { styles } from "./RegisterEmailScreen.styles";

const auth = new Auth();

export function RegisterEmailScreen(props) {
  const { navigation } = props;
  const [showPassword, setShowPassword] = useState(false);

  const onShowPasswword = () => setShowPassword((prevState) => !prevState);

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await auth.register(formValue);
        navigation.goBack();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <SafeAreaView style={styles.content}>
      <View style={styles.form}>
        <Text></Text>
        <Image
          style={styles.imagen}
          source={require("../../../../assets/images/logo.png")}
          resizeMode="contain"
        />
        <Divider
          style={{
            backgroundColor: "#ffffff",
            height: 1,
            width: "100%",
            marginTop: 20,
          }}
        />
        <Text></Text>
        <Input
          placeholder="Email"
          autoCapitalize="none"
          fontSize="12"
          onChangeText={(text) =>
            formik.setFieldValue("email", text.toLowerCase())
          }
          errorMessage={formik.errors.email}
        />
        <Input
          placeholder="Name"
          autoCapitalize="none"
          fontSize="12"
          onChangeText={(text) => formik.setFieldValue("first_name", text)}
          errorMessage={formik.errors.first_name}
        />
        <Input
          placeholder="Username"
          autoCapitalize="none"
          fontSize="12"
          onChangeText={(text) => formik.setFieldValue("username", text)}
          errorMessage={formik.errors.username}
        />
        <Input
          placeholder="Password"
          secureTextEntry={!showPassword}
          fontSize="12"
          rightIcon={{
            type: "material-community",
            name: showPassword ? "eye-off-outline" : "eye-outline",
            onPress: onShowPasswword,
          }}
          onChangeText={(text) => formik.setFieldValue("password", text)}
          errorMessage={formik.errors.password}
        />
        <Input
          placeholder="Repeat password"
          secureTextEntry={!showPassword}
          fontSize="12"
          rightIcon={{
            type: "material-community",
            name: showPassword ? "eye-off-outline" : "eye-outline",
            onPress: onShowPasswword,
          }}
          onChangeText={(text) => formik.setFieldValue("repeatPassword", text)}
          errorMessage={formik.errors.repeatPassword}
        />
      </View>
      <Button
        title="Sign up"
        containerStyle={styles.btnContainer}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </SafeAreaView>
  );
}
