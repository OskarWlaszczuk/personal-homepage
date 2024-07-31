import { useSelector } from "react-redux";
import {
    StyledGitHubIcon,
    StyledFacebookIcon,
    StyledLinkedInIcon,
    StyledInstagramIcon,
    Wrapper,
    Link,
} from "./styled";
import { selectIsDarkTheme } from "../themeSlice";

export const SocialMediaIconsBar = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);
    
    return (
        <Wrapper>
            <Link href="https://github.com/OskarWlaszczuk" target="_blank">
                <StyledGitHubIcon $isDarkTheme={isDarkTheme} />
            </Link>
            <Link href="https://www.facebook.com/oskarwlaszczuk" target="_blank">
                <StyledFacebookIcon $isDarkTheme={isDarkTheme} />
            </Link>
            <Link href="https://www.linkedin.com/in/oskar-w%C5%82aszczuk-85307a1ab/" target="_blank">
                <StyledLinkedInIcon $isDarkTheme={isDarkTheme} />
            </Link>
            <Link href="https://www.instagram.com/owlaszczuk/" target="_blank">
                <StyledInstagramIcon $isDarkTheme={isDarkTheme} />
            </Link>
        </Wrapper>
    );
};