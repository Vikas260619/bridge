// assets imports
import React, { useState, useLayoutEffect, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { IconButton, CircularProgress, Button, Link, Box } from '@mui/material';

import {
  Login,
  LoginError,
  PasswordHint,
} from '@bridgeup/common/auth/models/Authentication';

import { LoginUser } from '@bridgeup/common/auth/services/Login';

import { highlightPassword } from '@bridgeup/common/auth/utils/passwordUtils';
import ErrorToast from '@bridgeup/common/components/ErrorToast';
import { useTitle } from '@bridgeup/common/hooks';
import CustomButton from '@bridgeup/common/components/CustomButton/CustomButton';
import CustomInput from '@bridgeup/common/components/CustomInput/CustomInput';
import { UserContext } from './../../context/user/UserContext';
import { API_ERRORS } from './../../utils/constants';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import email from '../../assets/icons/email-icon.svg';
import error from '../../assets/icons/error-icon.svg';

export function LoginFn() {
  useTitle('Log in - BridgeUp');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const [form, setForm] = useState<Login>({
    email: '',
    password: '',
  });
  const [formError, setFormError] = useState<LoginError>({
    email: false,
    password: false,
  });

  const userContext = useContext(UserContext);

  const [passwordHint, setPasswordHint] = useState<PasswordHint>({
    len: false,
    lowCase: false,
    specialChar: false,
    upCase: false,
    number: false,
  });

  const isValidPassword = (password: string) => {
    if (!password) {
      return false;
    }

    return true;
  };

  const isValidEmail = (email: string) => {
    if (!email) {
      return false;
    }

    return true;
  };

  useLayoutEffect(() => {
    const updatedHighlight = highlightPassword(form.password);
    setPasswordHint(updatedHighlight);
  }, [form.password]);

  const validateStep1 = (): boolean => {
    const initState: LoginError = {
      email: false,
      password: false,
    };
    if (!form.email) {
      setFormError({ ...initState, email: true });
      return false;
    } else if (!form.password) {
      setFormError({ ...initState, password: true });
      return false;
    } else {
      setFormError(initState);
    }
    return true;
  };

  const submitForm = (e: React.FormEvent): void => {
    e.preventDefault();
    setIsError(false);
    setErrorMessage('');
    if (!validateStep1()) {
      return;
    }
    setLoading(true);

    LoginUser(form).then(
      () => {
        console.log('login successfully.');
        userContext.updateIsAuthenticated(true);
      },
      (error) => {
        userContext.updateIsAuthenticated(false);
        let message = error.errorMessage;
        if (API_ERRORS.LOGIN.hasOwnProperty(error.errorCode)) {
          message = API_ERRORS.LOGIN[error.errorCode];
        }
        setLoading(false);
        setErrorMessage(message);
        setIsError(true);
      }
    );
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const updateFormData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    key: string
  ) => {
    setForm({ ...form, [key]: e.target.value });
  };

  const onEmailFocusout = () => {
    isValidEmail(form.email)
      ? setFormError({ ...formError, email: false })
      : setFormError({ ...formError, email: true });
  };

  const onPasswordFocusout = () => {
    isValidPassword(form.password)
      ? setFormError({ ...formError, password: false })
      : setFormError({ ...formError, password: true });
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className="mt-5">
        <ErrorToast message={errorMessage} />
      </div>
      <form className="mt-5" onSubmit={submitForm} noValidate>
        <div>
          <div className="text-24 text-bold">Login</div>
          <div className="mt-8">
            <CustomInput
              onBlur={onEmailFocusout}
              inputAttrProps={{ 'data-test-id': 'bup-login-email-field' }}
              error={formError.email}
              helperText={formError.email ? 'Enter a valid work email' : ''}
              label="Work Email Address"
              variant="filled"
              className="input-fields"
              disabled={isLoading}
              value={form.email}
              onChange={(e) => updateFormData(e, 'email')}
              adornment={
                formError.email ? (
                  <img src={error} alt="logo" />
                ) : (
                  <img style={{ paddingLeft: '12px' }} src={email} alt="logo" />
                )
              }
            />
          </div>
          <div className="mt-10">
            <CustomInput
              onBlur={onPasswordFocusout}
              error={formError.password}
              helperText={
                formError.password ? 'Please enter correct password' : ''
              }
              label="Password"
              variant="filled"
              disabled={isLoading}
              className="input-fields"
              type={showPassword ? 'text' : 'password'}
              value={form.password}
              onChange={(e) => updateFormData(e, 'password')}
              adornment={
                formError.password ? (
                  <img src={error} alt="logo" />
                ) : (
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={() => setShowPassword(!showPassword)}
                    onMouseDown={(e) => handleMouseDownPassword(e)}
                    edge="end"
                    style={{ color: '#464F60' }}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                )
              }
            />
            <div className="mt-2 text-right">
              <Button
                variant="anchor"
                disabled={isLoading}
                onClick={() => navigate('/forgot-password')}
              >
                FORGOT PASSWORD
              </Button>
            </div>
          </div>
          <div className="btn-holders mt-16">
            <CustomButton
              disabled={isLoading}
              fullWidth={true}
              buttonClassName={'primary-button'}
              type="submit"
            >
              LOGIN
              {isLoading && (
                <CircularProgress size={20} color="primary" sx={{ ml: 2 }} />
              )}
            </CustomButton>
          </div>
        </div>
      </form>
    </Box>
  );
}

export default LoginFn;
