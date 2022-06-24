import { NextPage } from "next";
import FieldInput from "../components/Form/FieldInput";
import { Button, Form, Heading } from "../components/Form/styled";
import { baseUrl } from "../components/Form/data";
import axios from "axios";
import Router from "next/router";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginSchema } from "../utils/validations";
import { useForm } from "react-hook-form";

const Login: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(LoginSchema),
  });
  return (
    <Form>
      <Heading>Login</Heading>
      <FieldInput
        type="text"
        placeholder="Enter your email address"
        label="Email address"
        id="email"
      />
      <FieldInput
        type="password"
        placeholder="Enter your password"
        label="Password"
        id="password"
      />
      <Button>Log in</Button>
    </Form>
  );
};

export default Login;
