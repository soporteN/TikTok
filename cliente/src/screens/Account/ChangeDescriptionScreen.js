import React from "react";
import { View } from "react-native";
import { Input, Button } from "react-native-elements";
import { useFormik } from "formik";
import * as Yup from "yup";
import { User } from "../../api";
import { useAuth } from "../../hooks";

const user = new User();

export function ChangeDescriptionScreen(props) {
  const {
    route: { params },
    navigation,
  } = props;
  const { accessToken } = useAuth();

  const formik = useFormik({
    initialValues: {
      description: params.description,
    },
    validationSchema: Yup.object({
      description: Yup.string(),
    }),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await user.updateUser(accessToken, {
          description: formValue.description,
        });
        navigation.goBack();
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <View style={{ marginHorizontal: 20 }}>
      <Input
        placeholder="Short description"
        autoCapitalize="none"
        multiline
        inputStyle={{ height: 100 }}
        value={formik.values.description}
        onChangeText={(text) => formik.setFieldValue("description", text)}
      />
      <Button
        title="Save"
        style={{ marginTop: 10 }}
        onPress={formik.handleSubmit}
        loading={formik.isSubmitting}
      />
    </View>
  );
}
