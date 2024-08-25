import { Title } from "./styled";
import { Message } from "../../common/Message";
import { Container } from "../../common/Container";
import { LinkBox } from "../../common/LinkBox";
import { ReactComponent as ErrorIcon } from "../../svgs/Error.svg";

export const Error = () => {

  return (
    <Container>
      <ErrorIcon />
      <Title>Ooops! Something went wrong...</Title>
      <Message
        content={
          <>
            Sorry, failed to load Github projects. <br />
            You can check them directly on Github.
          </>
        }
      />
      <LinkBox
        href="https://github.com/OskarWlaszczuk/personal-homepage.git"
        text="Go to Github"
      />
    </Container>
  );
};
