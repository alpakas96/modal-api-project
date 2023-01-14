import axios from "axios";

const apiCall = async function () {
    const response = await axios.get(`https://poetry-api-production.up.railway.app/api/authors`)
    const poemsArray = response.data;
    return poemsArray;
};

export default apiCall;
