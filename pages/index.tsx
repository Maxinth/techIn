import type { NextPage } from "next";
import Router from "next/router";
import { Button, Heading } from "../components/Form/styled";
import { HomeContainer, Box, Text } from "../appStyled";

const Home: NextPage = () => {
  return (
    <HomeContainer>
      <Heading>Welcome to the TechInOver Educational Platform</Heading>
      <Box>
        <Text>Wanna get started?</Text>
        <Button onClick={() => Router.push("signup")}>Sign up Free</Button>
      </Box>
      <Box>
        <Text>Already got an account?</Text>
        <Button onClick={() => Router.push("/login")}>Log In</Button>
      </Box>
    </HomeContainer>
  );
};

export default Home;
