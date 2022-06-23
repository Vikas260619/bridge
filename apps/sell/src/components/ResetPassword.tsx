// assets imports
import {
  Button,
  Grid,
  InputAdornment,
  FormControl,
  CircularProgress,
  InputLabel,
  FilledInput,
  IconButton,
  FormHelperText,
} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import 'fontsource-raleway';
import logoImage from '../assets/images/logo.svg';
import errorLogo from '../assets/images/error.svg';
import React, { useState } from 'react';
import { highlightPassword } from '@bridgeup/common/auth/utils/passwordUtils';
import { PasswordHint } from '@bridgeup/common/auth/models/Authentication';
import { useLayoutEffect } from 'react';
import ErrorToast from '../components/ErrorToast';
import CustomInput from './CustomInput/CustomInput';

export function ResetPasswordFn(props: any) {
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

  const moveTo = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    navigate(url);
  };

  return (
    <form onSubmit={submitForm}>
      <div className="small-container">
        <div className="logo">
          <img src={logoImage} alt="logo" />
        </div>
        <div className="verify-account mt-36">
          {isError && <ErrorToast message={errorMessage} />}
          <div>
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
        </div>
        <div className="btn-holders mt-10">
          <Button
            disabled={error}
            type="submit"
            variant="contained"
            size="large"
            className="primary-btn"
            fullWidth
            color="primary"
            disableElevation
          >
            RESET PASSWORD&nbsp;&nbsp;&nbsp;&nbsp;
            {isLoading && <CircularProgress size={20} color="secondary" />}
          </Button>
          <Button
            className="mt-6 text-bold text-14"
            onClick={() => navigate('/login')}
            disabled={isLoading}
          >
            BACK TO LOGIN
          </Button>
        </div>
      </div>
    </form>
  );
}

export default ResetPasswordFn;
