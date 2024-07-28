import styled from "styled-components";
import { ReactComponent as GitHubIcon } from "../svgs/Github.svg"

export const Container = styled.section`
`;

export const HeaderContent = styled.header`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    margin-bottom: 24px;
`;

export const Header = styled.h2`
    margin: 12px auto;
    font-size: 30px;
    font-weight: 900;
`;


export const SubHeader = styled.p`
    font-size: 28px;
    font-weight: 400;
    margin: 0;
`;


export const StyledGitHubIcon = styled(GitHubIcon)`
    max-width: 40px;
    max-height: 40px;
    path {
        fill: ${({ theme }) =>
    theme.lightTheme.colors.scienceBlue};
    };
`;

export const Repositories = styled.ul`
   display: grid;
    grid-gap: 32px;
    grid-template-columns: repeat(2, min-content);
    justify-items: center;
    padding-left: 0px;
    list-style: none inside;
`;

export const Repo = styled.li`
    display: grid;
    box-shadow: 0px -2px 50px 0px #090A3305;
    background-color: #FFFFFF;
    border: 6px solid #D1D5DA4D;
    transition: 0.3s;
    padding: 56px;
    height: 100%;
    &:hover{
        border: 6px solid ${({ theme }) =>
    theme.lightTheme.colors.cornflowerBlue};
    };
`;

export const RepoName = styled.h3`
   color: ${({ theme }) =>
    theme.lightTheme.colors.scienceBlue
  };
    font-size: 24px;
    font-weight: 700;
    margin: 0;
`;

export const RepoDescription = styled.p`
  color: ${({ theme }) =>
    theme.lightTheme.colors.slateGray
  };
  font-size: 18px;
  font-weight: 400;
  line-height: 25.2px;
  margin: 24px 0;
`;

export const RepoLinksList = styled.ul`
    list-style: none inside;
    padding-left: 0px;
`;

export const RepoLinkTitle = styled.span`
  color: ${({ theme }) =>
    theme.lightTheme.colors.slateGray
  };
  font-size: 18px;
  font-weight: 400;
  line-height: 25.2px;
`;

export const RepoRepository = styled.li`
   color: ${({ theme }) =>
    theme.lightTheme.colors.scienceBlue
  };
  font-size: 18px;
  font-weight: 400;
  line-height: 25.2px;
`;

export const RepoHomepage = styled.li`
  padding-bottom: 8px;
`;

export const RepoLink = styled.a`
  color: ${({ theme }) =>
    theme.lightTheme.colors.scienceBlue
  };
  font-size: 18px;
  font-weight: 400;
  line-height: 25.2px;
  text-decoration: none;
  border-bottom: 1px solid #0366D6;
`;