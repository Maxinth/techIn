import { NextPage } from "next";
import FieldInput from "../components/Form/FieldInput";
import { Button, Form, Heading } from "../components/Form/styled";

const Login: NextPage = () => {
  return (
    <Form>
      <Heading>Login</Heading>
      <FieldInput
        type="input"
        value=""
        placeholder="Enter your email address"
        label="Email address"
      />
      <FieldInput
        type="password"
        value=""
        placeholder="Enter your password"
        label="Password"
      />
      <Button>Log in</Button>
    </Form>
  );
};

export default Login;
