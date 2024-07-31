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
    RepoLink
} from "./styled";
import {
    fetchRepositories,
    selectRepositories,
    selectRepositoriesStatus
} from "../portfolioSlice";
import { Error } from "./Error";
import { Loading } from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { selectIsDarkTheme } from "../themeSlice";

export const PortfolioSection = () => {
    const repositories = useSelector(selectRepositories);
    const status = useSelector(selectRepositoriesStatus);

    const isDarkTheme = useSelector(selectIsDarkTheme);
    const dispatch = useDispatch();

    useEffect(() => {
        const timeoutOfGettingResponseId = setTimeout(() => {
            dispatch(fetchRepositories());
        }, 1000);
        return () => clearTimeout(timeoutOfGettingResponseId);
    }, []);

    return (
        <Container>
            <HeaderContent>
                <StyledGitHubIcon />
                <Header $isDarkTheme={isDarkTheme} >
                    Portfolio
                </Header>
                <SubHeader $isDarkTheme={isDarkTheme}>My recent projects</SubHeader>
            </HeaderContent>
            {
                status === "loading" ?
                    <Loading /> :
                    (
                        status === "error" ?
                            <Error />
                            :
                            <Repositories>
                                {
                                    repositories.map((
                                        { name, description, html_url, homepage }
                                    ) => (
                                        <Repo
                                            $isDarkTheme={isDarkTheme}
                                            key={name}>
                                            <RepoName $isDarkTheme={isDarkTheme}>
                                                {name.charAt(0).toUpperCase() + name.slice(1)}
                                            </RepoName>
                                            <RepoDescription $isDarkTheme={isDarkTheme}>
                                                {description}
                                            </RepoDescription>
                                            <RepoLinksList>
                                                <RepoHomepage>
                                                    <RepoLinkTitle $isDarkTheme={isDarkTheme}>Demo:</RepoLinkTitle> <RepoLink
                                                        key={homepage}
                                                        target="_blank"
                                                        href={homepage}
                                                        $isDarkTheme={isDarkTheme}
                                                    >
                                                        {homepage}
                                                    </RepoLink>
                                                </RepoHomepage>
                                                <RepoRepository>
                                                    <RepoLinkTitle $isDarkTheme={isDarkTheme}>Code:</RepoLinkTitle> <RepoLink
                                                        $isDarkTheme={isDarkTheme}
                                                        key={html_url}
                                                        target="_blank" href={html_url}
                                                    >
                                                        {html_url}
                                                    </RepoLink>
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