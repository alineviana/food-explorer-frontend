import axios from 'axios';

export const api = axios.create({
    baseURL: "https://api-food-explorer-7lyi.onrender.com"
});