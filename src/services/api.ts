import axios from 'axios';
import md5 from 'md5';

export const { CancelToken, isCancel } = axios;

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export default api;
