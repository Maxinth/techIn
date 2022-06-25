import type { NextPage } from "next";
import { useEffect } from "react";
import Router from "next/router";
import { Button, Heading } from "../components/Form/styled";
import { deleteAllCookies } from "../utils/funcs";
import { HomeContainer } from "../appStyled";
import { toast } from "react-toastify";
import { showToast, toastOptions } from "../components/Form/data";
import { setTimeout } from "timers/promises";
const Welcome: NextPage = () => {
  useEffect(() => {
    console.log("welccome page is protected.");

    if (!document.cookie) {
      // if no cookies exist take user back to login - that way the welcome is protected!
      toast.info("Login required to welcome page", {
        ...toastOptions(),
        autoClose: 1000,
        delay: 500,
      });
      Router.replace("login");
    }
  }, []);

  const logOut = () => {
    deleteAllCookies();
    showToast("success", "You logged out successfully!", true, "login", 200);
    // Router.replace("/login");
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
