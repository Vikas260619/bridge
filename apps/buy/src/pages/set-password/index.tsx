import React, { useEffect, useState } from 'react';

import { useTitle } from '@bridgeup/common/hooks';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useSnackbar } from 'notistack';
import CustomInput from '@bridgeup/common/components/CustomInput/CustomInput';
import ErrorToast from '@bridgeup/common/components/ErrorToast';
import { Box, IconButton, Grid, Alert, Snackbar } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';

import { LoadingButton } from '@mui/lab';
import { activateInvestorAccount } from '@bridgeup/common/auth/services/Signup';

import { PasswordHint } from '@bridgeup/common/auth/models/Authentication';
import AuthError from '@bridgeup/common/auth/classes/AuthError';

import { highlightPassword } from '@bridgeup/common/auth/utils/passwordUtils';
import { API_ERRORS } from '../../utils/constants';

function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function SetPassword() {
  useTitle('Set your password - BridgeUp');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();
  const [passwordHint, setPasswordHint] = useState<PasswordHint>({
    len: false,
    lowCase: false,
    specialChar: false,
    upCase: false,
    number: false,
  });

  const query = useQuery();
  const code = query.get('code');
  if (!code) {
    console.log('error code invalid');
    setIsError(true);
  }
  const isValidPassword = (password: string) => {
    const regex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/;
    return regex.test(password);
  };
  useEffect(() => {
    const updatedHighlight = highlightPassword(password);
    setPasswordHint(updatedHighlight);
  }, [password]);

  const submitForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isValidPassword(password) && code) {
      try {
        setLoading(true);
        setErrorMessage('');
        setIsError(false);
        await activateInvestorAccount(code, password);
        setLoading(false);
        enqueueSnackbar('Password Successfully Set', {
          content: (
            <Alert
              severity="success"
              color="info"
              elevation={0}
              square={true}
              variant="filled"
            >
              Password Successfully Set
            </Alert>
          ),
        });
        navigate('/login');
      } catch (error) {
        let message = '';
        if (error instanceof AuthError) {
          if (error && error.errorMessage) {
            if (API_ERRORS.SET_PASSWORD[error.errorCode]) {
              message = API_ERRORS.SET_PASSWORD[error.errorCode];
            }
            setErrorMessage(message);
            setIsError(true);
          }
        }

        setLoading(false);
      }
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className="mt-5">
        <ErrorToast message={errorMessage} />
      </div>
      <form className="mt-5" onSubmit={submitForm}>
        <div>
          <div className="text-24 text-bold">Set password</div>

          <div className="mt-5">
            <CustomInput
              label="Set a Password"
              variant="filled"
              className="input-fields"
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              adornment={
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => setShowPassword(!showPassword)}
                  onMouseDown={(e) => e.preventDefault()}
                  edge="end"
                  style={{ color: '#464F60' }}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              }
            />
            <div className="mt-5"></div>
            <div className="validators mt-2">
              <Grid container>
                <Grid item xs={6}>
                  <span className={passwordHint.len ? 'white' : ''}>
                    Minimum 8 characters
                  </span>
                  <span className={passwordHint.specialChar ? 'white' : ''}>
                    Contains a special character
                  </span>
                  <span className={passwordHint.number ? 'white' : ''}>
                    Contains a number
                  </span>
                </Grid>
                <Grid item xs={6}>
                  <span className={passwordHint.lowCase ? 'white' : ''}>
                    Contains a lowercase letter
                  </span>
                  <span className={passwordHint.upCase ? 'white' : ''}>
                    Contains an uppercase letter
                  </span>
                </Grid>
              </Grid>
            </div>
          </div>
          <div className="btn-holders mt-16">
            <LoadingButton
              onClick={(e) => submitForm(e)}
              fullWidth={true}
              variant="primary"
              type="submit"
              loading={isLoading}
              disabled={isLoading || !isValidPassword(password)}
            >
              SET PASSWORD
            </LoadingButton>
          </div>
        </div>
      </form>
    </Box>
  );
}

export default SetPassword;
