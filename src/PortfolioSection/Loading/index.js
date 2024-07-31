import { Message } from "../../Message/index"
import { Container } from "../../Container";
import { StyledLoadingIcon } from "./styled";
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "../../themeSlice";

export const Loading = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);
    return (
        <Container>
            <Message content="Please wait, projects are being loaded..." />
            <StyledLoadingIcon $isDarkTheme={isDarkTheme} />
        </Container>
    );
};