import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_PREFIX = '/api/v1';

const axiosApi = axios.create({
  baseURL: API_BASE_URL + API_PREFIX,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true
});

export default axiosApi;