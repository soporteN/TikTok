import * as Yup from "yup";

export function initialValues(videoUri) {
  return {
    videoUri,
    description: "",
    imageUri: "",
  };
}

export function validationSchema() {
  return Yup.object({
    videoUri: Yup.string().required("It is mandatory"),
    description: Yup.string().required("It is mandatory"),
    imageUri: Yup.string().required("It is mandatory"),
  });
}
