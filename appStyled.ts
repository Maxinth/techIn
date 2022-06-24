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
`;

const HomeContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  flex-direction: column;
`;

export { GlobalStyle, HomeContainer };
