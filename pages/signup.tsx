import { NextPage } from "next";
import FieldInput from "../components/Form/FieldInput";
import { Button, Form, Heading } from "../components/Form/styled";
import { roles } from "../components/Form/data";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "../utils/validations";
import { useRef } from "react";

export interface ISignData {
  email: string;
  password: string;
  role: string;
  fullName: string;
}

const SignUp: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISignData>({
    resolver: yupResolver(SignUpSchema),
  });

  // const onSubmitHandler = (data: any) => {
  //   console.log(data);
  //   // console.log();
  //   reset();
  // };

  const myhandleSubmit = () => {
    console.log({ ...register });
  };

  const ref = useRef();

  return (
    <Form onSubmit={myhandleSubmit}>
      <Heading>Signup</Heading>
      <FieldInput
        type="input"
        value=""
        placeholder="Enter your email address"
        label="Email address"
        id="email"
        name="email"
        // ref={register}
      />
      <FieldInput
        type="password"
        value=""
        placeholder="Enter your password"
        label="Password"
        id="password"
        {...register("password")}
      />
      <FieldInput
        type="input"
        value=""
        placeholder="Enter your full name"
        label="Full name"
        id="fullName"
        {...register("fullName")}
      />
      <FieldInput
        type="select"
        value=""
        label="What is your role"
        options={roles}
        id="role"
        {...register("role")}
      />
      <Button>Sign up</Button>
    </Form>
  );
};

export default SignUp;
