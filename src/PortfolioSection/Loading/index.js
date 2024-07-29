import { Message } from "../../Message"
import { Container } from "../../Container";
import { StyledLoadingIcon } from "./styled";

export const Loading = () => (
    <Container>
        <Message>Please wait, projects are being loaded...</Message>
        <StyledLoadingIcon />
    </Container>
);