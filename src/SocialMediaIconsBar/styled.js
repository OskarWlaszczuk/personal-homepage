import styled from "styled-components"
import { ReactComponent as FacebookIcon } from "../svgs/Facebook_black.svg";
import { ReactComponent as LinkedInIcon } from "../svgs/LinkedIN_black.svg";
import { ReactComponent as InstagramIcon } from "../svgs/Instagram_black.svg";
import { ReactComponent as GitHubIcon } from "../svgs/Github.svg";

export const Wrapper = styled.section`
    display: grid;
    grid-template-columns: repeat(4, 48px);
    grid-gap: 24px;
    margin-top: 56px;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
        margin-top: 40px;
    };
`;

export const StyledGitHubIcon = styled(GitHubIcon)`
    path {
        fill: ${({ theme }) => theme.lightTheme.colors.mineShaft};
        transform: 0.5s;
    };

    &:hover {
        path {
            fill: ${({ theme }) => theme.lightTheme.colors.scienceBlue};
 
        };
    };
`;

export const StyledFacebookIcon = styled(FacebookIcon)`
    path {
        fill: ${({ theme }) => theme.lightTheme.colors.mineShaft};
        transform: 0.5s;
    };

    &:hover {
        path {
            fill: ${({ theme }) => theme.lightTheme.colors.scienceBlue};
 
        };
    };
`;

export const StyledLinkedInIcon = styled(LinkedInIcon)`
     path {
        fill: ${({ theme }) => theme.lightTheme.colors.mineShaft};
        transform: 0.5s;
    };

    &:hover {
        path {
            fill: ${({ theme }) => theme.lightTheme.colors.scienceBlue};
 
        };
    };
`;


export const StyledInstagramIcon = styled(InstagramIcon)`
    path {
        fill: ${({ theme }) => theme.lightTheme.colors.mineShaft};
        transform: 1s;
    };

    &:hover {
        path {
            fill: ${({ theme }) => theme.lightTheme.colors.scienceBlue};
 
        };
    };
`;