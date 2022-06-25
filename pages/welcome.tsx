import type { NextPage } from "next";
import { useEffect } from "react";
import Router from "next/router";
import { Button, Heading } from "../components/Form/styled";
import { deleteAllCookies } from "../utils/funcs";
import { HomeContainer } from "../appStyled";

const Welcome: NextPage = () => {
  useEffect(() => {
    // console.log("index visited");
    // console.log(document.cookie);
    if (!document.cookie) {
      // if no cookies exist take user back to /signup
      Router.replace("/");
    }
  }, []);

  const logOut = () => {
    deleteAllCookies();
    Router.replace("/login");
  };
  const handleClick = () => {
    // clear cookie so user has to login over again
    deleteAllCookies();

    // take user to my porfolio
    window.location.href = "https://tja.netlify.app";
  };

  return (
    <HomeContainer>
      <Heading>
        Hi There!
        <br /> I am Tunde
      </Heading>
      <Button onClick={handleClick}>See my Portfolio</Button>
      <Button onClick={logOut}>Log out</Button>
    </HomeContainer>
  );
};

export default Welcome;
