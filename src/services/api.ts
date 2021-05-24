import axios from 'axios';
import md5 from 'md5';

export const { CancelToken, isCancel } = axios;

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  params: {
    ts: process.env.REACT_APP_KEY_MARVEL_TS,
    apikey: process.env.REACT_APP_KEY_MARVEL_PUBLIC,
    hash: md5(
      `${process.env.REACT_APP_KEY_MARVEL_TS}${process.env.REACT_APP_KEY_MARVEL_PRIVADO}${process.env.REACT_APP_KEY_MARVEL_PUBLIC}`,
    ),
  },
});

export default api;
