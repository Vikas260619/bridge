// assets imports
import React, { useState, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router';
import {
  Company,
  CompanyErrors,
  PasswordHint,
} from '@bridgeup/common/auth/models/Authentication';
import 'react-phone-input-2/lib/style.css';
import { CreateCompany } from '@bridgeup/common/auth/services/Signup';
import Step1 from './Steps/step1';
import Step2 from './Steps/step2';
import { highlightPassword } from '@bridgeup/common/auth/utils/passwordUtils';
import SuccessToast from '../../components/SuccessToast';
import ErrorToast from '../../components/ErrorToast';
import { API_ERRORS } from '../../utils/constants';
import { useTitle } from '@bridgeup/common/hooks';
import { Box } from '@mui/material';

export default function Signup() {
  useTitle('Create Account - BridgeUp ');
  const navigate = useNavigate();
  const [step, setStep] = useState<number>(1);
  const [acceptTerms, setAcceptTerms] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [passwordHint, setPasswordHint] = useState<PasswordHint>({
    len: false,
    lowCase: false,
    specialChar: false,
    upCase: false,
    number: false,
  });
  const [company, setCompany] = useState<Company>({
    tenant_name: '',
    email: '',
    password: '',
    first_name: '',
    last_name: '',
    designation: '',
    mobile_number: '',
    country_code: '',
    estimated_arr: '',
  });
  const [formError, setFormError] = useState<CompanyErrors>({
    tenant_name: false,
    email: false,
    password: false,
    first_name: false,
    last_name: false,
    mobile_number: false,
    country_code: false,
    acceptTerms: false,
  });

  const isValidPassword = (password: string) => {
    var regex: RegExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const isValidEmail = (email: string) => {
    if (
      !email.toLowerCase().includes('gmail') &&
      !email.toLowerCase().includes('yahoo') &&
      !email.toLowerCase().includes('hotmail') &&
      !email.toLowerCase().includes('test')
    ) {
      var regex: RegExp =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    }

    return false;
  };

  const submitForm = (e: React.MouseEvent<HTMLButtonElement>): void => {
    setLoading(true);
    setIsError(false);
    if (!company.designation) {
      delete company.designation;
    }
    const promise = new Promise(
      (resolve: (reason?: any) => void, reject: (reason?: any) => void) => {
        CreateCompany(company, resolve, reject);
      }
    );

    promise.then(
      (res) => {
        setLoading(false);
        setIsSuccess(true);
        navigate('/resend-email', { state: { email: company.email } });
      },
      (error) => {
        setLoading(false);
        let message = error.errorMessage;
        if (API_ERRORS.SIGN_UP.hasOwnProperty(error.errorCode)) {
          message = API_ERRORS.SIGN_UP[error.errorCode];
        }
        setErrorMessage(message);
        setIsError(true);
      }
    );
  };

  const updateFormData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    setCompany({ ...company, [key]: e.target.value });
    // if (e.target.value) {
    //   if (key === 'email') {
    //     isValidEmail(e.target.value) ? setFormError({...formError, email: false}) : setFormError({...formError, email: true});
    //   } else
    //   if (key === 'password') {
    //     isValidPassword(e.target.value) ? setFormError({...formError, password: false}) : setFormError({...formError, password: true});
    //   } else {
    //     setFormError({...formError, [key]: false});
    //   }
    // } else {
    //   setFormError({...formError, [key]: true});
    // }
  };

  useLayoutEffect(() => {
    const updatedHighlight = highlightPassword(company.password);
    setPasswordHint(updatedHighlight);
  }, [company.password]);

  const setError = (message: string) => {
    if (message) {
      setErrorMessage(message);
      setIsError(true);
    } else {
      setErrorMessage('');
      setIsError(false);
    }
  };

  const acceptTermsEvent = (value: boolean) => {
    setAcceptTerms(value);
    setFormError({ ...formError, acceptTerms: !value });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      {isSuccess && <SuccessToast message="Sign up successful" />}
      <div className="mt-5">
        <ErrorToast message={errorMessage} />
        {/* step 1 */}
        {step === 1 && (
          <Step1
            setStep={setStep}
            formError={formError}
            setFormError={setFormError}
            company={company}
            updateFormData={updateFormData}
            passwordHint={passwordHint}
            setError={setError}
          />
        )}
        {/* step 1 */}
        {/* step 2 */}
        {step === 2 && (
          <Step2
            setStep={setStep}
            formError={formError}
            company={company}
            updateFormData={updateFormData}
            setFormError={setFormError}
            setCompany={setCompany}
            acceptTerms={acceptTerms}
            setAcceptTerms={acceptTermsEvent}
            submit={submitForm}
            isLoading={isLoading}
          />
        )}
        {/* step 2 */}
      </div>
    </Box>
  );
}
