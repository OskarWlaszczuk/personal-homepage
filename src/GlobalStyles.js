import { createGlobalStyle } from "styled-components";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "./themeSlice";

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  };

  *, ::after, ::before {
    box-sizing: inherit;
  };

  body {
    margin: 0;
  };

  main {
    color: ${({ isDarkTheme, theme }) => isDarkTheme ? theme.darkTheme.colors.white : theme.lightTheme.colors.mineShaft};
    display: grid;
    margin: 0;
    grid-template-columns: 100%;
    grid-gap: 75px;
    padding: 7%;
    font-family: "Inter", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: ${({ isDarkTheme, theme }) => isDarkTheme ? theme.darkTheme.colors.mineShaft : theme.lightTheme.colors.whiteLilac};
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

export const GlobalStyles = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return <GlobalStyle isDarkTheme={isDarkTheme} />;
};
