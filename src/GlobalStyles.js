import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  };

  *, ::after, ::before {
    box-sizing: inherit;
  };

  body {
    display: grid;
    margin: 0px;
    grid-template-columns: 100%;
    grid-gap: 75px;
    padding: 7%;
    font-family: "Inter", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ theme }) =>
    theme.lightTheme.colors.whiteLilac};
    justify-items: center;
    width: 100%;

   @media (max-width: ${({ theme }) => theme.breakPoints.smallLaptop}px) {
      grid-gap: 48px;
   };

   @media (max-width: ${({ theme }) => theme.breakPoints.mobileXl}px) {
      padding: 32px 16px;
    };
  };
`;