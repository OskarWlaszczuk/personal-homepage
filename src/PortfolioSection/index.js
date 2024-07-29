import { Container, HeaderContent, Header, SubHeader, StyledGitHubIcon, Repositories, Repo, RepoName, RepoDescription, RepoRepository, RepoHomepage, RepoLinksList, RepoLinkTitle, RepoLink } from "./styled";
import { useGitHubRepoApi } from "../useGitHubRepoApi";
import { Error } from "./Error";

export const PortfolioSection = () => {
    const { repositories, status } = useGitHubRepoApi()

    return (
        <Container>
            <HeaderContent>
                <StyledGitHubIcon></StyledGitHubIcon>
                <Header>Portfolio</Header>
                <SubHeader>My recent projects</SubHeader>
            </HeaderContent>
            {
                status === "loading" ?
                    <>Chiwleczkę</> :
                    (
                        status === "error" ?
                            <Error />
                            :
                            <Repositories>
                                {
                                    repositories.map((
                                        { name, description, html_url, homepage }
                                    ) => (
                                        <Repo key={name}>
                                            <RepoName>
                                                {name.charAt(0).toUpperCase() + name.slice(1)}
                                            </RepoName>
                                            <RepoDescription>{description}</RepoDescription>

                                            <RepoLinksList>

                                                <RepoHomepage>
                                                    <RepoLinkTitle>Demo:</RepoLinkTitle>
                                                    <RepoLink key={homepage} target="_blank" href={homepage}> {homepage}</RepoLink>
                                                </RepoHomepage>

                                                <RepoRepository>
                                                    <RepoLinkTitle>Code:</RepoLinkTitle>
                                                    <RepoLink key={html_url} target="_blank" href={html_url}> {html_url}</RepoLink>
                                                </RepoRepository>
                                            </RepoLinksList>

                                        </Repo>
                                    ))
                                }
                            </Repositories>
                    )
            }
        </Container>
    )
};