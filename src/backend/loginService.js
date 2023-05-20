import axios from 'axios';
const BASE_URL = 'https://localhost:44309';

export default axios.create({
    baseURL: BASE_URL
});
// export const backendAPI = "https://localhost:44309/api"
export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true
});