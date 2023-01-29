import * as Yup from "yup";

export const loginSchema = Yup.object({
  email: Yup.string().email("Enter valid Email").required("This field is Required"),
  password: Yup.string().min(4).required("please enter your password"),
});
