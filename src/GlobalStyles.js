import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: "Inter", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: 
    ${({ theme }) =>
    theme.lightTheme.backgroundColors.WhiteLilac
  };
};
`;