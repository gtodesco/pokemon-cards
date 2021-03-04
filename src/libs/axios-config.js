const axios = require('axios');

const http = axios.create({
    baseURL: 'https://api.pokemontcg.io/v2',
});

export default http;