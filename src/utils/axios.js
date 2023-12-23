import axios from 'axios';

const axiosFetch = axios.create({
    baseURL: "https://www.thecocktaildb.com/api/json/v1/1"
});

export default axiosFetch;