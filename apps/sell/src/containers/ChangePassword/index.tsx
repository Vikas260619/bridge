// assets imports
import React, { useState } from 'react';
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import 'fontsource-raleway';
import sliderBG from '../../assets/images/slider-bg.png';
import illustrationSignIn from '../../assets/images/login_banner.png';
import 'react-phone-input-2/lib/style.css';
import { ResetPassword } from '@bridgeup/common/auth/services/Login';
import ResetPasswordComponent from '../../components/ResetPassword';
import SuccessToast from '../../components/SuccessToast';
import { API_ERRORS } from '../../utils/constants';
import { useTitle } from '@bridgeup/common/hooks';

export function ChangePassword(props: any) {
  useTitle('Reset password - BridgeUp');

  const navigate = useNavigate();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);

  const submitFormData = (password: string) => {
    setLoading(true);
    const promise = new Promise(
      (resolve: (reason?: any) => void, reject: (reason?: any) => void) => {
        ResetPassword(password, resolve, reject);
      }
    );

    promise.then(
      (res) => {
        setLoading(false);
        setIsSuccess(true);
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      },
      (error) => {
        setLoading(false);
        let message = error.errorMessage;
        if (API_ERRORS.FORGOT_PASSWORD.hasOwnProperty(error.errorCode)) {
          message = API_ERRORS.FORGOT_PASSWORD[error.errorCode];
        }
        setErrorMessage(message);
        setIsError(true);
      }
    );
  };
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0}
        style={{ height: '100%' }}
        className="login-holder"
      >
        <Grid
          item
          xs={6}
          style={{ backgroundColor: '#030914', minHeight: '100vh' }}
        >
          {isSuccess && <SuccessToast message="Password reset successful" />}
          <ResetPasswordComponent
            submitFormData={submitFormData}
            isLoading={isLoading}
            isError={isError}
            errorMessage={errorMessage}
          />
        </Grid>

        <Grid
          item
          xs={6}
          style={{
            backgroundColor: '#0B111D',
            minHeight: '100vh',
            backgroundImage: `url(${sliderBG})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'bottom right',
            backgroundSize: '50%',
          }}
        >
          <div className="small-container carousel-hold mt-100">
            <img
              style={{ maxWidth: '100%', marginTop: 100, marginBottom: 20 }}
              src={illustrationSignIn}
              alt="logo"
            />
            <h3>
              Forgot Your Password? <br />
              No Sweat! It happens.{' '}
            </h3>
            <p className="reset-text">
              Simply enter your registered email address and we’ll help you
              reset your password in a jiffy.
            </p>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default ChangePassword;
