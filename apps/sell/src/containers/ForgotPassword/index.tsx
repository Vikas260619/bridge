import { useState } from 'react';
import { Box, Button, Grid, InputAdornment, TextField } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import { useNavigate } from 'react-router-dom';

import { ForgotPassword as ForgotPasswordApi } from '@bridgeup/common/auth/services/Login';
import { useTitle } from '@bridgeup/common/hooks';
import ErrorToast from '@bridgeup/common/components/ErrorToast';

import { API_ERRORS } from './../../utils/constants';

import emailLogo from '../../assets/images/email.svg';
import createAccountSuccess from '../../assets/images/create-account.svg';
import errorLogo from '../../assets/images/error.svg';

export function ForgotPassword() {
  useTitle('Reset password - BridgeUp');

  const navigate = useNavigate();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
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

  const submitForm = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !isValidEmail(email)) {
      setError(true);
      return;
    }
    setError(false);
    setIsError(false);
    setLoading(true);
    const promise = new Promise(
      (resolve: (reason?: any) => void, reject: (reason?: any) => void) => {
        ForgotPasswordApi(email, resolve, reject);
      }
    );

    promise
      .then(
        (res) => {
          setSuccess(true);
        },
        (error) => {
          let message = error.errorMessage;
          if (API_ERRORS.FORGOT_PASSWORD.hasOwnProperty(error.errorCode)) {
            message = API_ERRORS.FORGOT_PASSWORD[error.errorCode];
          }
          setErrorMessage(message);
          setIsError(true);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };
  const updateEmail = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(e.target.value);
    if (e.target.value) {
      isValidEmail(e.target.value) ? setError(false) : setError(true);
    } else {
      setError(true);
    }
  };

  const moveTo = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    navigate(url);
  };

  if (!success) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <div className="mt-5">
          <ErrorToast message={errorMessage} />
        </div>
        <form className="mt-5" onSubmit={submitForm}>
          <div>
            <div className="text-bold text-32">Reset Your Password</div>
            <div className="mt-5">
              <TextField
                error={error}
                helperText={error && 'Please enter correct email'}
                fullWidth
                required
                label="Registered Work Email Address"
                variant="filled"
                className="input-fields"
                onChange={(e) => updateEmail(e)}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      {error ? (
                        <img src={errorLogo} alt="logo" />
                      ) : (
                        <img src={emailLogo} alt="logo" />
                      )}
                    </InputAdornment>
                  ),
                }}
              />
            </div>
          </div>
          <div className="btn-holders mt-16">
            <LoadingButton
              fullWidth
              onClick={submitForm}
              loading={isLoading}
              disabled={isLoading}
              className="primary-button"
              type="submit"
              loadingPosition="end"
            >
              RESET PASSWORD
            </LoadingButton>

            <div className="mt-5">
              <a
                className="color-secondary text-14 text-bold"
                href="#"
                onClick={(e) => moveTo(e, '/login')}
              >
                BACK TO LOGIN
              </a>
            </div>
          </div>
        </form>
      </Box>
    );
  } else {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <div>
          <div className="mt-5">
            <img src={createAccountSuccess} alt="logo" />
            <div className="mt-6 text-bold text-32">You’re Good To Go! </div>
            <span className="mt-5 text-14 text-regular">
              The instructions to reset your password have been sent to{' '}
              <strong>{email}</strong>.
              <br />
              <br />
              If you don’t see it there, be sure to check your spam folder.
            </span>
          </div>
          <div className="mt-10">
            <Button
              onClick={() => navigate('/login')}
              variant="outlined"
              size="large"
              className=""
              disableElevation
            >
              BACK TO LOGIN
            </Button>
          </div>
        </div>
      </Box>
    );
  }
}

export default ForgotPassword;
