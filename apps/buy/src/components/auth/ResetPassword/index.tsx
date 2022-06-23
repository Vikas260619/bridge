import React, { useState, useLayoutEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Grid, IconButton } from '@mui/material';
import { LoadingButton } from '@mui/lab';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { highlightPassword } from '@bridgeup/common/auth/utils/passwordUtils';
import { PasswordHint } from '@bridgeup/common/auth/models/Authentication';
import CustomInput from '@bridgeup/common/components/CustomInput/CustomInput';
import ErrorToast from '@bridgeup/common/components/ErrorToast';
import errorLogo from '../../../assets/icons/error-icon.svg';

export function ResetPasswordForm(props: any) {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const { submitFormData, isLoading, isError, errorMessage } = props;
  const [passwordHint, setPasswordHint] = useState<PasswordHint>({
    len: false,
    lowCase: false,
    specialChar: false,
    upCase: false,
    number: false,
  });

  useLayoutEffect(() => {
    const updatedHighlight = highlightPassword(password);
    setPasswordHint(updatedHighlight);
  }, [password]);

  const isValidPassword = (password: string) => {
    var regex: RegExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const submitForm = (e: React.FormEvent): void => {
    e.preventDefault();
    if (!password || !isValidPassword(password)) {
      setError(true);
      return;
    }
    setError(false);
    submitFormData(password);
  };

  const updateFormData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPassword(e.target.value);
    if (e.target.value) {
      isValidPassword(e.target.value) ? setError(false) : setError(true);
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div className="mt-5">
        <ErrorToast message={errorMessage} />
      </div>
      <form onSubmit={submitForm} className="mt-5">
        <div className="text-24 text-bold">Reset password</div>
        <div className="mt-5">
          <CustomInput
            error={error}
            label="Set a Password"
            variant="filled"
            className="input-fields"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => updateFormData(e)}
            adornment={
              error ? (
                <img src={errorLogo} alt="logo" />
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
          <div className="mt-5"></div>
          <div className="validators">
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

        <div className="mt-10 text-center">
          <LoadingButton
            disabled={error || isLoading}
            loading={isLoading}
            type="submit"
            size="large"
            className="primary-btn"
            fullWidth
            color="primary"
            disableElevation
          >
            RESET PASSWORD
          </LoadingButton>
          <Button
            className="mt-6"
            onClick={() => navigate('/login')}
            disabled={isLoading}
          >
            BACK TO LOGIN
          </Button>
        </div>
      </form>
    </>
  );
}

export default ResetPasswordForm;
