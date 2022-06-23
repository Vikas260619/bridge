import Api from './index';
import { Company, SignValidate } from './../models/Authentication';

const CreateCompany = (
  data: Company,
  resolve: (reason?: any) => void,
  reject: (reason?: any) => void
) => {
  postCall('/signUp', data, resolve, reject);
};

const verifyEmail = (
  code: string | null,
  resolve: (reason?: any) => void,
  reject: (reason?: any) => void
) => {
  postCall('verifyEmail', { code: code }, resolve, reject);
};

const resendEmail = (
  email: string,
  resolve: (reason?: any) => void,
  reject: (reason?: any) => void
) => {
  postCall('resendVerificationEmail', { email: email }, resolve, reject);
};

const signupValidate = (
  data: SignValidate,
  resolve: (reason?: any) => void,
  reject: (reason?: any) => void
) => {
  postCall('step1SignUpValidate', data, resolve, reject);
};

const activateInvestorAccount = async (code: string, password: string) => {
  const body = {
    newPassword: password,
    code: code,
  };
  return await Api.post('confirmVerifyUserSetPassword', body);
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
  CreateCompany,
  verifyEmail,
  resendEmail,
  signupValidate,
  activateInvestorAccount,
};
