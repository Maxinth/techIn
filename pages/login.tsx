import { NextPage } from "next";
import FieldInput from "../components/Form/FieldInput";
import { Button, Form, Heading } from "../components/Form/styled";

const Login: NextPage = () => {
  return (
    <Form>
      <Heading>Login</Heading>
      <FieldInput
        type="text"
        value=""
        placeholder="Enter your email address"
        label="Email address"
        id="email"
      />
      <FieldInput
        type="password"
        value=""
        placeholder="Enter your password"
        label="Password"
        id="password"
      />
      <Button>Log in</Button>
    </Form>
  );
};

export default Login;
