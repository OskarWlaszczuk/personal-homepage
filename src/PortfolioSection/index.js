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

export const PortfolioSection = () => {
  const repositories = useSelector(selectRepositories);
  const status = useSelector(selectRepositoriesStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    const timeoutOfGettingResponseId = setTimeout(() => {
      dispatch(fetchRepositories());
    }, 1000);
    return () => clearTimeout(timeoutOfGettingResponseId);
  }, [dispatch]);

  return (
    <Container>
      <HeaderContent>
        <StyledGitHubIcon />
        <Header>Portfolio</Header>
        <SubHeader>My recent projects</SubHeader>
      </HeaderContent>
      {status === "loading" ? (
        <Loading />
      ) : status === "error" ? (
        <Error />
      ) : (
        <Repositories>
          {repositories.map(({ name, description, html_url, homepage }) => (
            <Repo key={name}>
              <RepoName>
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </RepoName>
              <RepoDescription>
                {description}
              </RepoDescription>
              <RepoLinksList>
                <RepoHomepage>
                  <RepoLinkTitle>
                    Demo:
                  </RepoLinkTitle>{" "}
                  <RepoLink
                    key={homepage}
                    target="_blank"
                    href={homepage}

                  >
                    {homepage}
                  </RepoLink>
                </RepoHomepage>
                <RepoRepository>
                  <RepoLinkTitle>
                    Code:
                  </RepoLinkTitle>{" "}
                  <RepoLink

                    key={html_url}
                    target="_blank"
                    href={html_url}
                  >
                    {html_url}
                  </RepoLink>
                </RepoRepository>
              </RepoLinksList>
            </Repo>
          ))}
        </Repositories>
      )}
    </Container>
  );
};
