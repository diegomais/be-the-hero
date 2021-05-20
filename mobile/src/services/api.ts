import axios from 'axios';
import getEnvironment from '../config/environment';

const { apiURL } = getEnvironment();

const api = axios.create({ baseURL: apiURL });

export default api;
