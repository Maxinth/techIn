import { NextPage } from "next";
import FieldInput from "../components/Form/FieldInput";
import { Button, Form, Heading } from "../components/Form/styled";
import { roles } from "../components/Form/data";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "../utils/validations";
import { baseUrl } from "../components/Form/data";
import axios from "axios";
import Router from "next/router";
import { useState } from "react";

export interface ISignData {
  email: string;
  password: string;
  userType: "Student" | "Teacher";
  fullName: string;
}

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ISignData>({
    resolver: yupResolver(SignUpSchema),
  });

  const onSubmitHandler = (data: ISignData) => {
    console.log({ data });
    return axios
      .post(`${baseUrl}user/create`, { ...data })
      .then((res) => {
        console.log(res);
        reset();
        Router.push("/login");
      })
      .catch((error) => console.log(error));
  };

  // console.log(baseUrl);

  // const customHandler = (data: ISignData) => {
  //   console.log("btn clicked!", data);

  // return (e: React.ChangeEvent<HTMLInputElement>) => {
  //   e.preventDefault();
  //   console.log("inner block called");
  //   return axios
  //     .post(`${baseUrl}/user/create`, { ...data })
  //     .then((res) => {
  //       console.log(res);
  //       Router.push("/login");
  //     })
  //     .catch((error) => console.log(error));
  // };

  // const form = new FormData();
  // form.append("email", data?.email);
  // form.append("password", data?.password);
  // form.append("fullName", data?.fullName);
  // form.append("userType", data?.userType);

  // const response = await axios({
  //   method: "post",
  //   url: `${baseUrl}/user/create`,
  //   data: form,
  //   headers: {
  //     "Content-Type": `multipart/form-data`,
  //   },
  // });

  // console.log(response);
  // };

  return (
    <Form
      // onSubmit={() => handleSubmit(onSubmitHandler)}
      onSubmit={handleSubmit(onSubmitHandler)}
      {...register}
    >
      <Heading>Signup</Heading>
      <FieldInput
        type="email"
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
      <FieldInput
        type="text"
        placeholder="Enter your full name"
        label="Full name"
        id="fullName"
        register={register}
        errorMessage={errors?.fullName?.message}
      />
      <FieldInput
        type="select"
        label="What is your role"
        options={roles}
        id="userType"
        register={register}
        errorMessage={errors?.userType?.message}
      />
      <Button
      // type="submit"
      // onClick={handleSubmit(onSubmitHandler)}
      >
        Sign up
      </Button>
    </Form>
  );
};

export default SignUp;
