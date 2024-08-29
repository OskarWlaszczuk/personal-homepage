import { useEffect } from "react";
import {
  Container,
  HeaderContent,
  Header,
  SubHeader,
  StyledGitHubIcon,
  Repositories,
  Repo,
  RepoName,
  RepoDescription,
  RepoRepository,
  RepoHomepage,
  RepoLinksList,
  RepoLinkTitle,
  RepoLink,
} from "./styled";
import {
  fetchRepositories,
  selectRepositories,
  selectRepositoriesStatus,
} from "../portfolioSlice";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { loadingStatus, errorStatus } from "../fetchStatuses";

export const PortfolioSection = () => {
  const repositories = useSelector(selectRepositories);
  const status = useSelector(selectRepositoriesStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDelayId = setTimeout(() => dispatch(fetchRepositories()), 1000);
    return () => clearTimeout(fetchDelayId);
  }, [dispatch]);

  const renderRepositories = () => {
    return repositories.map(({ name, description, html_url, homepage }) => (
      <Repo key={name}>
        <RepoName>{name}</RepoName>
        <RepoDescription>{description}</RepoDescription>
        <RepoLinksList>
          <RepoHomepage>
            <RepoLinkTitle>Demo:</RepoLinkTitle>{" "}
            <RepoLink key={homepage} target="_blank" href={homepage}>{homepage}</RepoLink>
          </RepoHomepage>
          <RepoRepository>
            <RepoLinkTitle>Code:</RepoLinkTitle>{" "}
            <RepoLink key={html_url} target="_blank" href={html_url}>{html_url}</RepoLink>
          </RepoRepository>
        </RepoLinksList>
      </Repo>
    ));
  };

  const isLoading = status === loadingStatus;
  const isError = status === errorStatus;

  const portfolioContent = (
    isLoading ?
      <Loading /> :
      isError ?
        <Error /> :
        <Repositories>
          {renderRepositories()}
        </Repositories>
  );

  return (
    <Container>
      <HeaderContent>
        <StyledGitHubIcon />
        <Header>Portfolio</Header>
        <SubHeader>My recent projects</SubHeader>
      </HeaderContent>
      {portfolioContent}
    </Container>
  );
};
