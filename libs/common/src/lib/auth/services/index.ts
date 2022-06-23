import axios from 'axios';
import AuthError from '../classes/AuthError';

const axiosInstance = axios.create({
  baseURL: process.env.NX_AUTH_API,
  headers: { 'X-Hasura-Tenant-Type': process.env.NX_TENANT_TYPE },
});

axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  function (response) {
    // Do something with response data
    return response.data;
  },
  function (error) {
    let errorMessage = 'Something went wrong';

    if (error?.response?.data?.message) {
      errorMessage = error?.response?.data?.message;
    } else if (error.message) {
      errorMessage = error.message;
    }

    if (error?.response?.data?.output?.email) {
      return Promise.reject(
        new AuthError(
          errorMessage,
          error?.response?.data?.errorCode,
          error?.response?.status,
          error?.response?.data?.output?.email
        )
      );
    }
    return Promise.reject(
      new AuthError(
        errorMessage,
        error?.response?.data?.errorCode,
        error?.response?.status
      )
    );
  }
);

export default axiosInstance;
