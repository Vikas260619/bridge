import Api from './index';
import { Login, confirmForgotPassword } from './../models/Authentication';

const LoginUser = async (data: Login) => {
  const resp: {
    access_token: string;
    refresh_token: string;
    expires_in: number;
  } = await Api.post('signIn', data);
  localStorage.setItem('token', resp.access_token);
  localStorage.setItem('refresh_token', resp.refresh_token);
  localStorage.setItem('expires_in', Date.now() + resp.expires_in * 1000 + '');
};

const ForgotPassword = (
  email: string,
  resolve: (reason?: any) => void,
  reject: (reason?: any) => void
) => {
  postCall('forgotPassword', { email: email }, resolve, reject);
};

const ConfirmForgotPassword = (
  data: confirmForgotPassword,
  resolve: (reason?: any) => void,
  reject: (reason?: any) => void
) => {
  postCall('confirmForgotPassword', data, resolve, reject);
};

const ResetPassword = (
  newPassword: string,
  resolve: (reason?: any) => void,
  reject: (reason?: any) => void
) => {
  postCall('resetPassword', { newPassword }, resolve, reject);
};

const VerifyToken = (
  newPassword: string,
  resolve: (reason?: any) => void,
  reject: (reason?: any) => void
) => {
  postCall('verifyToken', { newPassword }, resolve, reject);
};

const RefreshToken = (): Promise<void> => {
  return new Promise((resolve, reject) => {
    const refreshToken = localStorage.getItem('refresh_token');
    if (!refreshToken) {
      return reject('invalid refresh token');
    }
    return postCall(
      'refreshToken',
      { refreshToken: refreshToken },
      resolve,
      reject
    );
  }).then((resp: any) => {
    localStorage.setItem('token', resp.access_token);
    localStorage.setItem(
      'expires_in',
      Date.now() + resp.expires_in * 1000 + ''
    );
  });
};

const SignOut = () => {
  return new Promise((resolve, reject) =>
    postCall('signOut', {}, resolve, reject)
  ).finally(() => {
    localStorage.clear();
  });
};

const postCall = (
  url: string,
  data: any,
  resolve: (reason?: any) => void,
  reject: (reason?: any) => void
) => {
  Api.post(url, data).then(
    (res) => {
      resolve(res);
    },
    (error) => {
      reject(error);
    }
  );
};

export {
  LoginUser,
  ForgotPassword,
  ConfirmForgotPassword,
  ResetPassword,
  VerifyToken,
  RefreshToken,
  SignOut,
};
