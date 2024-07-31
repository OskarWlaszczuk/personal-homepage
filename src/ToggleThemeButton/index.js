import {
  Wrapper,
  StyledDarkThemeOnButton,
  StyledLightThemeOnButton,
} from "./styled";
import { Caption } from "../common/Caption";
import { toggleTheme } from "../themeSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkTheme } from "../themeSlice";

export const ToggleThemeButton = () => {
  const isDarkTheme = useSelector(selectIsDarkTheme);
  const dispatch = useDispatch();
  const toggleThemeHandler = () => dispatch(toggleTheme());

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
