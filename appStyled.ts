// globalStyles.js

import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Inter;
  }

  html{
    width: 100%;
   
  }
  body{
    width: 100%;
    max-width: 528px;
    margin: 0 auto;
    background-color: #f5f5f5;
  }

  #__next{
    width: 100%;  
     
  }

  // styles to override toast background
.Toastify__toast-theme--colored.Toastify__toast--error,
  .toast-error-container .toast-error-container-after{
    background-color: #EF4444 !important;
    font-size: 14px !important;
    line-height: 17px !important;
    color: #ffffff;
    font-weight: 600;
    border-radius: 5px;
  }

  .Toastify__toast-theme--colored.Toastify__toast--success{
    background-color: #10B981;
     font-size: 14px !important;
    line-height: 17px !important;
    color: #ffffff;
    font-weight: 600;
    border-radius: 5px;
  }

  .Toastify__toast-theme--colored.Toastify__toast--info{
    font-size: 14px !important;
    line-height: 17px !important;
    color: #ffffff;
    font-weight: 600;
    border-radius: 5px;
  }
`;

const HomeContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
  padding: 1rem 2rem;
  h1 {
    text-align: center;
    line-height: 1.8;
  }
  & button + button {
    margin-top: 1rem;
    width: unset;
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;

  margin-bottom: 1rem;
  button {
    max-width: 200px;
  }

  @media (min-width: 520px) {
    flex-direction: row;
  }
`;
const Text = styled.p`
  line-height: 1.8;
`;

export { GlobalStyle, HomeContainer, Box, Text };
