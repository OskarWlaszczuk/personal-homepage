import { Container, Title, Description } from "./styled"
import { LinkBox } from "../../LinkBox"
import { ReactComponent as ErrorIcon } from "../../svgs/Error.svg"

export const Error = () => {
    return (
        <Container>
            <ErrorIcon />
            <Title>Ooops! Something went wrong...</Title>
            <Description>
                Sorry, failed to load Github projects. <br />You can check them directly on Github.
            </Description>
            <LinkBox
                href="https://github.com/OskarWlaszczuk/personal-homepage.git"
                text="Go to Github"
            />
        </Container>
    )
}