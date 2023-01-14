import axios from "axios";

apiCall = async function () {
    axios.get(`https://poetry-api-production.up.railway.app/api/authors`)
    .then((response) => {
      const poemsArray = response(JSON.stringify); 
      return poemsArray;
    });
  };


apiCall = async function () {
    const response = await axios.get(`https://poetry-api-production.up.railway.app/api/authors`)
    const poemsArray = response.data;
    return poemsArray;
};

export default apiCall;
