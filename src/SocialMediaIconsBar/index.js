import {
    StyledGitHubIcon,
    StyledFacebookIcon,
    StyledLinkedInIcon,
    StyledInstagramIcon,
    Wrapper,
    Link,
} from "./styled";

export const SocialMediaIconsBar = () => {
    return (
        <Wrapper>
            <Link href="https://github.com/OskarWlaszczuk" target="_blank">
                <StyledGitHubIcon />
            </Link>
            <Link href="https://www.facebook.com/oskarwlaszczuk" target="_blank">
                <StyledFacebookIcon />
            </Link>
            <Link href="https://www.linkedin.com/in/oskar-w%C5%82aszczuk-85307a1ab/" target="_blank">
                <StyledLinkedInIcon />
            </Link>
            <Link href="https://www.instagram.com/owlaszczuk/" target="_blank">
                <StyledInstagramIcon />
            </Link>
        </Wrapper>
    );
};