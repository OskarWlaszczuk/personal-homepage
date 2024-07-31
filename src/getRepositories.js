import { sendRequest } from "./sendRequest";

export const getRepositories = async () => {
    try {
        const response = await sendRequest("https://api.github.com/users/OskarWlaszczuk/repos");
        return response.data;
    } catch (error) {
        throw error;
    }
};