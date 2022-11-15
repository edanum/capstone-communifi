import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
      :root {
        --text-primary: #9ba2aa;
        --background-primary: #242629;
        --background-secondary: #16161a;
        --headline: #ececea;
        --card-background: #242629;
        --card-heading: #fffffe;
        --card-paragraph: #afb8c3;
        --paragraph: #94a1b2;
        --button: #3da9fc;
        --button-text: #fffffe;
        --accent-color: #3da9fc;
        --accent-color-secondary: #2cb67d;
        --border: #444443;;
        --fonty-family: 'Noto Sans', sans-serif;
        --revenues: #2cb67d;
        --expenses: #fc5d3d;
      }
  
      h2{
        margin: 0px;
        font-size: 22px;
      }
h3{
       margin: 0px;
                font-size: 16px;
      }

      * {
          box-sizing: border-box;
      }

      a{
        text-decoration: none;
        color: var(--text-primary);
        
      }

      p{
        margin: 0px;
        
      }
  
      svg{
        color: red;
      }
      body {
          font-family: 'Noto Sans', sans-serif;
          background-color: var(--background-secondary);
          color: var(--text-primary);
      }

      #__next {
  height: 0px;
};

  `;

export default GlobalStyle;
