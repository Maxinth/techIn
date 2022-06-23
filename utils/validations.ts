import * as yup from "yup";

export const SignUpSchema = yup.object().shape({
  email: yup.string().email().required("Email  is a required field"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password should not exceed 32 characters")
    .required("Password is a required field"),
  fullName: yup
    .string()
    .min(8, "Full name must be at least 8 characters")
    .max(32, "Full name  should not exceed 32 characters")
    .required("Full name must be at least 8 characters"),
  role: yup.string().required(),
});

export const LoginSchema = yup.object().shape({
  email: yup.string().email().required("Email  is a required field"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .max(32, "Password should not exceed 32 characters")
    .required("Password is a required field"),
});
