import axios from "axios";

export const sendRequest = async url => {
    try {
        const reposne = await axios.get(url);

        if (reposne.status !== 200) {
            throw new Error();
        }

        return reposne;
    } catch (error) {
        throw error;
    }
}; 