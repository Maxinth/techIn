// globalStyles.js

import { createGlobalStyle } from "styled-components";

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
  }
`;

export { GlobalStyle };
