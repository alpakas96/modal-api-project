import axios from "axios";

const DeletePoem = async function (id) {
    const response = await axios.delete(`https://poetry-api-production.up.railway.app/api/authors/${id}`);
    return response.data;
};

export default DeletePoem;