import {
  Wrapper,
  StyledDarkThemeOnButton,
  StyledLightThemeOnButton,
} from "./styled";
import { Caption } from "../common/Caption";

export const ToggleThemeButton = ({ isDarkTheme, setIsDarkTheme }) => {

  const toggleThemeHandler = () => setIsDarkTheme(currentTheme => !currentTheme);

  const captionContent = <>DARK MODE {isDarkTheme ? <>ON</> : <>OFF</>}</>;
  const ToggleThemeButtonComponent = isDarkTheme ? StyledDarkThemeOnButton : StyledLightThemeOnButton;
  
  return (
    <Wrapper>
      <Caption content={captionContent} />
      <ToggleThemeButtonComponent onClick={toggleThemeHandler} />
    </Wrapper>
  );
};
