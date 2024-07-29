import styled from "styled-components";
import { ReactComponent as GitHubIcon } from "../svgs/Github.svg"

export const Container = styled.section`
    width: 100%;
    display: grid;
    grid-template-columns: 100%;
    justify-items: center;
`;

export const HeaderContent = styled.header`
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    margin-bottom: 24px;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
      margin-bottom: 0;
    };
`;

export const Header = styled.h2`
    margin: 12px auto;
    font-size: 30px;
    font-weight: 900;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
      font-size: 18px;
   };
`;


export const SubHeader = styled.p`
    font-size: 28px;
    font-weight: 400;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
      font-size: 17px;
   };
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
    width: 100%;
    grid-gap: 30px;
    grid-template-columns: repeat(2, 50%);
    justify-items: center;
    padding-left: 0px;
    list-style: none inside;

    @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
      grid-template-columns: 100%;
   };

   @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    grid-gap: 16px;
   };
`;

export const Repo = styled.li`
    display: grid;
    width: 100%;
    grid-template-columns: 100%;
    box-shadow: 0px -2px 50px 0px #090A3305;
    background-color: #FFFFFF;
    border: 6px solid #D1D5DA4D;
    transition: 0.3s;
    padding: 56px;

    &:hover{
      border: 6px solid ${({ theme }) => theme.lightTheme.colors.cornflowerBlue};
    };

    @media (max-width: ${({ theme }) => theme.breakPoints.laptop}px) {
      width: 100%;
      min-height: 400px;
    };

    @media (max-width: ${({ theme }) => theme.breakPoints.mobileXl}px) {
      padding: 24px;
   };

   @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
      padding: 24px;
      max-width: 288px;
   };
`;

export const RepoName = styled.h3`
   color: ${({ theme }) =>
    theme.lightTheme.colors.scienceBlue
  };
    font-size: 24px;
    font-weight: 700;
    margin: 0;

    @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
      font-size: 16px;
   };
`;

export const RepoDescription = styled.p`
  color: ${({ theme }) =>
    theme.lightTheme.colors.slateGray
  };
  font-size: 18px;
  font-weight: 400;
  line-height: 25.2px;
  margin: 24px 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
      font-size: 14px;
   };
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

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
      font-size: 14px;
   };
`;

export const RepoRepository = styled.li`
   color: ${({ theme }) =>
    theme.lightTheme.colors.scienceBlue
  };
  font-size: 18px;
  font-weight: 400;
  line-height: 25.2px;
  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
      font-size: 14px;
   };
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
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}px) {
    font-size: 14px;
    word-wrap: break-word;
  };

  &:hover {
    filter: brightness(120%);
  };

  &:focus-visible {
    filter: brightness(120%);
  };
`;