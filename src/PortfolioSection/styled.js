import styled from "styled-components";
import { ReactComponent as GitHubIcon } from "../svgs/Github.svg";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr;
`;

export const HeaderContent = styled.header`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileXl}px) {
    margin-bottom: 0;
  };
`;

export const Header = styled.h2`
  margin: 12px 0;
  font-size: 30px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.lightThemeMineShaft || theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileXl}px) {
    font-size: 18px;
  };
`;

export const SubHeader = styled.p`
  font-size: 28px;
  font-weight: 400;
  margin: 0;
  color: ${({ theme }) => theme.colors.lightThemeMineShaft || theme.colors.white};

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileXl}px) {
    font-size: 17px;
  };
`;

export const StyledGitHubIcon = styled(GitHubIcon)`
  max-width: 40px;
  max-height: 40px;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileXl}px) {
    max-width: 32px;
    max-height: 32px;
  };

  path {
    fill: ${({ theme }) => theme.colors.scienceBlue || theme.colors.dodgerBlue};
  };
`;

export const Repositories = styled.ul`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(2, 0.5fr);
  justify-items: center;
  padding-left: 0px;

  @media (max-width: ${({ theme }) => theme.breakPoints.laptopS}px) {
    grid-template-columns: 1fr;
    grid-gap: 16px;
  };
`;

export const Repo = styled.li`
  display: grid;
  width: 100%;
  grid-template-columns: 100%;
  align-items: center;

  background-color: 
    ${({ theme }) => theme.colors.lightThemeWhite || theme.colors.lightMineShaft};
  border: 6px solid 
    ${({ theme }) => theme.colors.lightScienceBlue || theme.colors.lightIron};

  transition: 0.3s;
  padding: 56px;

  &:hover {
    border: 6px solid ${({ theme }) =>
    theme.colors.cornflowerBlue ||
    theme.colors.grayScienceBlue};
  };

  @media (max-width: ${({ theme }) => theme.breakPoints.laptopL}px) {
    min-height: 350px;
    padding: 24px;
  };
`;

export const RepoName = styled.h3`
 color: ${({ theme }) => theme.colors.scienceBlue || theme.colors.lightThemeWhite};
  font-size: 24px;
  font-weight: 700;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileXl}px) {
    font-size: 16px;
  };
`;

export const RepoDescription = styled.p`
  color: ${({ theme }) => theme.colors.slateGray || theme.colors.white};
  font-size: 18px;
  font-weight: 400;
  line-height: 25.2px;
  margin: 24px 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileXl}px) {
    font-size: 14px;
  };
`;

export const RepoLinksList = styled.ul`
  list-style: none inside;
  padding-left: 0px;
`;

export const RepoLinkTitle = styled.span`
  color: ${({ theme }) => theme.colors.slateGray || theme.colors.white};
  font-size: 18px;
  font-weight: 400;
  line-height: 25.2px;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileXl}px) {
    font-size: 14px;
  };
`;

export const RepoRepository = styled.li`
  color: ${({ theme }) => theme.colors.scienceBlue};
  font-size: 18px;
  font-weight: 400;
  line-height: 25.2px;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileXl}px) {
    font-size: 14px;
  };
`;

export const RepoHomepage = styled.li`
  padding-bottom: 8px;
`;

export const RepoLink = styled.a`
  color: ${({ theme }) =>
    theme.colors.dodgerBlue ||
    theme.colors.scienceBlue};
  font-size: 18px;
  font-weight: 400;
  line-height: 25.2px;
  text-decoration: none;
  border-bottom: 1px solid
    ${({ theme }) => theme.colors.dodgerBlue || theme.colors.scienceBlue};
  transition: 0.3s;

  @media (max-width: ${({ theme }) => theme.breakPoints.mobileXl}px) {
    font-size: 14px;
    word-wrap: break-word;
  };

  &:hover {
    filter: brightness(115%);
  };

  &:focus-visible {
    filter: brightness(115%);
  };
`;
