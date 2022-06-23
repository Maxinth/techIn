import { NextPage } from "next";
import FieldInput from "../components/Form/FieldInput";
import { Button, Form, Heading } from "../components/Form/styled";
import { roles } from "../components/Form/data";

const SignUp: NextPage = () => {
  return (
    <Form>
      <Heading>Signup</Heading>
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
      <FieldInput
        type="input"
        value=""
        placeholder="Enter your full name"
        label="Full name"
      />
      <FieldInput
        type="select"
        value=""
        label="What is your role"
        options={roles}
      />
      <Button>Sign up</Button>
    </Form>
  );
};

export default SignUp;
