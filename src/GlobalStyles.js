import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  };

  *, ::after, ::before {
    box-sizing: inherit;
  };

  main {
    display: grid;
    grid-template-columns: auto;
    justify-items: center;
    grid-gap: 75px;
    padding: 15px;
    font-family: "Inter", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #FBFBFE;
    justify-content: center;
  }
`;