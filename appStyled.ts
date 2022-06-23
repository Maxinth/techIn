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
`;

export { GlobalStyle };
