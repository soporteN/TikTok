import * as Yup from "yup";

export function initialValues() {
  return {
    email: "",
    first_name: "",
    username: "",
    password: "",
    repeatPassword: "",
  };
}

export function validationSchema() {
  return Yup.object({
    email: Yup.string()
      .email("It is not a valid email")
      .required("Obligatory field"),
    first_name: Yup.string().required("Obligatory field"),
    username: Yup.string()
      .required("Obligatory field")
      .noSpacing("Cannot have spaces"),
    password: Yup.string().required("Obligatory field"),
    repeatPassword: Yup.string()
      .required("Obligatory field")
      .oneOf([Yup.ref("password")], "Passwords must be the same"),
  });
}
