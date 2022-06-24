import type { NextPage } from "next";
import { useEffect } from "react";
import Router from "next/router";
import { Button, Heading } from "../components/Form/styled";
import { deleteAllCookies } from "../utils/funcs";
import { HomeContainer } from "../appStyled";

const Home: NextPage = () => {
  useEffect(() => {
    // console.log("index visited");
    // console.log(document.cookie);
    if (!document.cookie) {
      // if no cookies exist take user back to /signup
      Router.replace("/signup");
    }
  }, []);

  const handleClick = () => {
    // clear cookie so user has to login over again
    deleteAllCookies();

    // take user to my porfolio
    window.location.href = "https://tja.netlify.app";
  };

  return (
    <HomeContainer>
      <Heading>Hello There!</Heading>
      <Button onClick={handleClick}>See my Portfolio</Button>
    </HomeContainer>
  );
};

export default Home;
