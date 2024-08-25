import { Message } from "../../common/Message";
import { Container } from "../../common/Container";
import { StyledLoadingIcon } from "./styled";

export const Loading = () => {
  return (
    <Container>
      <Message content="Please wait, projects are being loaded..." />
      <StyledLoadingIcon />
    </Container>
  );
};
