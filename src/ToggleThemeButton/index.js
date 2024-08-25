import {
  Wrapper,
  StyledDarkThemeOnButton,
  StyledLightThemeOnButton,
} from "./styled";
import { Caption } from "../common/Caption";

export const ToggleThemeButton = ({ isDarkTheme, setIsDarkTheme }) => {

  const toggleThemeHandler = () => setIsDarkTheme(currentTheme => !currentTheme);

  return (
    <Wrapper>
      <Caption content={isDarkTheme ? <>DARK MODE ON</> : <>DARK MODE OFF</>} />
      {isDarkTheme ? (
        <StyledDarkThemeOnButton onClick={toggleThemeHandler} />
      ) : (
        <StyledLightThemeOnButton onClick={toggleThemeHandler} />
      )}
    </Wrapper>
  );
};
