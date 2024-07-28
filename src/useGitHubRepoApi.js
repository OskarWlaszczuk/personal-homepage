import { sendRequest } from "./sendRequest";
import { useEffect, useState } from "react";

export const useGitHubRepoApi = () => {
    const [repositoriesDatas, setRepositoriesDatas] = useState(
        { status: "loading" },
    );
    useEffect(() => {
        const timeoutOfGettingResponseId = setTimeout(async () => {
            try {
                const response = await sendRequest("https://api.github.com/users/OskarWlaszczuk/repos");

                if (response.status !== 200) {
                    throw new Error();
                }

                setRepositoriesDatas({
                    repositories: response.data,
                    status: "succes",
                });
            } catch {
                setRepositoriesDatas({
                    status: "error",
                });
            }
        }, 1000)

        return () => clearTimeout(timeoutOfGettingResponseId);
    }, [])

    const { repositories, status } = repositoriesDatas;

    return { repositories, status };
};