import { NextPage } from "next";
import FieldInput from "../components/Form/FieldInput";
import { Button, Form, Heading } from "../components/Form/styled";
import { baseUrl, showToast } from "../components/Form/data";
import axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../utils/validations";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { toastOptions } from "../components/Form/data";
export interface ILoginData {
  email: string;
  password: string;
}
const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILoginData>({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmitHandler = (data: ILoginData) => {
    console.log({ data });
    toast.info("Submitting your details", {
      onClose: async () => {
        return await axios
          .post(`${baseUrl}user/login`, { ...data })
          .then((res) => {
            // save id in cookie

            document.cookie = `userId=${res?.data?._id};`;

            reset();
            // show Toast
            showToast("success", "Login successful", true, "");
          })
          .catch((error) => {
            showToast("error", error?.response?.data?.message);
            console.log(error);
          });
      },
      ...toastOptions,
      autoClose: 1000,
      delay: 1000,
    });
  };
  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <Heading>Login</Heading>
      <FieldInput
        type="text"
        placeholder="Enter your email address"
        label="Email address"
        id="email"
        register={register}
        errorMessage={errors?.email?.message}
      />
      <FieldInput
        type="password"
        placeholder="Enter your password"
        label="Password"
        id="password"
        register={register}
        errorMessage={errors?.password?.message}
      />
      <Button>Log in</Button>
    </Form>
  );
};

export default Login;
