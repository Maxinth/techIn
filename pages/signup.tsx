import { NextPage } from "next";
import FieldInput from "../components/Form/FieldInput";
import { Button, Form, Heading } from "../components/Form/styled";
import { roles } from "../components/Form/data";
import { useRef } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpSchema } from "../utils/validations";

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

  const onSubmitHandler = (data: ISignData) => {
    console.log("handler clicked");
    console.log({ data });

    console.log({ errors });
    // console.log();
    reset();
  };

  // const myhandleSubmit = (data: ISignData) => {
  //   console.log({data});
  // };

  console.log(register("fullName"));

  const ref = useRef(null);

  return (
    <Form onSubmit={handleSubmit(onSubmitHandler)}>
      <Heading>Signup</Heading>
      <FieldInput
        type="email"
        value=""
        placeholder="Enter your email address"
        label="Email address"
        id="email"
        {...register("email")}

        // register={register}
      />
      <FieldInput
        type="password"
        value=""
        placeholder="Enter your password"
        label="Password"
        id="password"
        {...register("password")}

        // register={register}
        // register={register("password")}
      />
      <FieldInput
        type="text"
        value=""
        placeholder="Enter your full name"
        label="Full name"
        id="fullName"
        {...register("fullName")}

        // register={register}
        // register={register("fullName")}
      />
      <FieldInput
        type="select"
        value=""
        label="What is your role"
        options={roles}
        id="role"
        {...register("role")}

        // register={register}
        // register={register("role")}
      />
      <Button type="submit">Sign up</Button>
    </Form>
  );
};

export default SignUp;
