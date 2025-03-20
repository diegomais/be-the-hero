import axios from 'axios';

import { apiURL } from '@/config/environment';

const api = axios.create({ baseURL: apiURL });

export default api;
