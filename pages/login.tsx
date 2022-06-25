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
const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ILoginData>({
    resolver: yupResolver(LoginSchema),
  });

  const onSubmitHandler = (data: ILoginData) => {
    // console.log({ data });
    // toast to notifying user of current action
    toast.info("Submitting your details", {
      ...toastOptions(),
      autoClose: 1000,
      delay: 500,
    });

    // make request for login
    axios
      .post(`${baseUrl}user/login`, { ...data })
      .then((res) => {
        // save id in cookie
        document.cookie = `userId=${res?.data?._id};`;
        reset();
        // show Toast
        showToast("success", "Login Successful!", true, "", 500);
      })
      .catch((error) => {
        showToast(
          "error",
          `Login failed :  ${
            error?.response?.data?.message ||
            "Please check your network and try again!"
          }`,
          false,
          "/login",
          3000
        );
        console.log(error);
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
