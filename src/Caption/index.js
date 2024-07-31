import { useSelector } from "react-redux"
import { StyledCaption } from "./styled"
import { selectIsDarkTheme } from "../themeSlice"

export const Caption = ({ content }) => {
    const isDarkTheme = useSelector(selectIsDarkTheme);
    return (
        <StyledCaption $isDarkTheme={isDarkTheme}>
            {content}
        </StyledCaption>
    );
};