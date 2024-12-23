import { HttpStatusCode } from '@/types/httpStatusCode';
import storage from '@/utils/localStorage';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://some-domain.com/api/',
  timeout: 30000,
  headers: { 'X-Custom-Header': 'foobar' },
});

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    config.headers.Accept = 'application/json';

    const token = storage.getToken();

    if (token && !config.headers.Authorization) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response.data?.data || response.data;
  },
  function (error) {
    if (error.response?.status === HttpStatusCode.UNAUTHORIZED) {
      // logout

      return Promise.reject(error);
    }

    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);
