import axios from 'axios';

const api = axios.create({
  baseURL: process.env.VUE_APP_API_ROUTE,
  headers: {
    'Access-Control-Allow-Origin': `${process.env.VUE_APP_API_ROUTE} `,
    'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    common: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  }
});

const setAuthHeader = token => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const resetAuthHeader = () => {
  delete api.defaults.headers.common.Authorization;
};

export { api, setAuthHeader, resetAuthHeader };
export default api;
