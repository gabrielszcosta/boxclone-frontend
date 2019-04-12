import axios from 'axios';

const api = axios.create({
    baseURL: 'https://boxclone-backend-api.herokuapp.com'
});

export default api;