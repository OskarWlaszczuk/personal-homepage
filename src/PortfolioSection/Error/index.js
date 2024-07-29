import { Title } from "./styled"
import { Message } from "../../Message"
import { Container } from "../../Container"
import { LinkBox } from "../../LinkBox"
import { ReactComponent as ErrorIcon } from "../../svgs/Error.svg"

export const Error = () => {
    return (
        <Container>
            <ErrorIcon />
            <Title>Ooops! Something went wrong...</Title>
            <Message>
                Sorry, failed to load Github projects. <br />You can check them directly on Github.
            </Message>
            <LinkBox
                href="https://github.com/OskarWlaszczuk/personal-homepage.git"
                text="Go to Github"
            />
        </Container>
    )
}