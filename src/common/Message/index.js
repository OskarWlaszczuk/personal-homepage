import { useSelector } from "react-redux";
import { StyledMessage } from "./styled.";
import { selectIsDarkTheme } from "../../themeSlice";

export const Message = ({ content }) => {
    const isDarkTheme = useSelector(selectIsDarkTheme);

    return (
        <StyledMessage $isDarkTheme={isDarkTheme}>{content}</StyledMessage>
    );
};