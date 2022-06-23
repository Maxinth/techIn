import { NextPage } from "next";
import FieldInput from "../components/Form/FieldInput";
import { Form, Heading } from "../components/Form/styled";

const SignUp: NextPage = () => {
  return (
    <Form>
      <Heading>Signup</Heading>
      <FieldInput type="select" />
    </Form>
  );
};

export default SignUp;
