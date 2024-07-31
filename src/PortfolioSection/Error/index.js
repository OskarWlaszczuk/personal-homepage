import { Title } from "./styled"
import { Message } from "../../Message"
import { Container } from "../../Container"
import { LinkBox } from "../../LinkBox"
import { useSelector } from "react-redux"
import { selectIsDarkTheme } from "../../themeSlice"
import { ReactComponent as ErrorIcon } from "../../svgs/Error.svg"

export const Error = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);

    return (
        <Container>
            <ErrorIcon />
            <Title $isDarkTheme={isDarkTheme}>Ooops! Something went wrong...</Title>
            <Message content={<>
                Sorry, failed to load Github projects. <br />You can check them directly on Github.
            </>} />
            <LinkBox
                href="https://github.com/OskarWlaszczuk/personal-homepage.git"
                text="Go to Github"
            />
        </Container>
    )
}