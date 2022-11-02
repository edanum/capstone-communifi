import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      :root {
          --text-primary: #0c2c4d;
          --background-primary: #edf0f5;
          --background-secondary: #f3ecec;
      }
  
      * {
          box-sizing: border-box;
      }

      a{
        text-decoration: none;
        color: var(--text-primary)
        
      }
  
      body {
          font-family: 'Noto Sans', sans-serif;
          background-color: var(--background-primary);
          color: var(--text-primary);
      }

      #__next {
  height: 0px;
};

  `;

export default GlobalStyle;
