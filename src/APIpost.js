import axios from "axios";

const APIpost = async function (poemData) {
    const response = await axios.post(`https://poetry-api-production.up.railway.app/api/authors`, poemData)
    return response.data;
  
};

export default apiCall;