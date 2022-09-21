import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    password: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string()
      .email("It is not a valid email")
      .required("The field is required"),
    password: Yup.string().required("The field is required"),
  });
}
