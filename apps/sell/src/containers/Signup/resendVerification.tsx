// assets imports
import { Grid, Button, CircularProgress, Box } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';
import bgImage from '../../assets/images/bg.svg';
import logoImage from '../../assets/images/logo.svg';
import 'react-phone-input-2/lib/style.css';
import createAccountSuccess from '../../assets/images/create-account.svg';
import { useEffect, useState } from 'react';
import { resendEmail } from '@bridgeup/common/auth/services/Signup';
import clock from '../../assets/images/clock.svg';
import SuccessToast from '../../components/SuccessToast';
import CustomButton from '../../components/CustomButton/CustomButton';

export function ResendVerification(props: any) {
  const navigate = useNavigate();
  const { state } = useLocation();

  const [email, setEmail] = useState<string>('');
  const [currentCount, setCount] = useState<number>(59);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isAccountVerified, setAccountVerified] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  const timer = () => setCount(currentCount - 1);

  useEffect(() => {
    const email: string = state && state.email ? (state.email as string) : '';
    if (!email) {
      navigate('/');
    } else {
      setEmail(email);
    }
  }, []);

  useEffect(() => {
    if (currentCount <= 0) {
      return;
    }
    const id = setInterval(timer, 1000);
    return () => clearInterval(id);
  }, [currentCount]);

  const resendEmailFn = () => {
    setLoading(true);
    const promise = new Promise(
      (resolve: (reason?: any) => void, reject: (reason?: any) => void) => {
        resendEmail(email, resolve, reject);
      }
    );

    promise
      .then(
        (res) => {
          setCount(59);
          setIsSuccess(true);
        },
        (error) => {
          // @todo Logic to show Account already verified
          if (error.status === 422) {
            setAccountVerified(true);
          }
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };

  if (!isAccountVerified) {
    return (
      <Box sx={{ flexGrow: 1 }}>
        {isSuccess && (
          <SuccessToast message="Verification email resent successfully" />
        )}

        <div className="verify-account mt-36">
          <img className="mb20" src={createAccountSuccess} alt="logo" />
          <h4>Woohoo! You’re All Set!</h4>
          <p>
            Your BridgeUp Account has been created! Please verify your email
            address to make sure you receive all alerts related to your account.
            <br />
            We’ve sent a verification email to <strong>{email}</strong>.
            <br />
            If you don’t see it in your inbox, be sure to check your spam
            folder.
          </p>
        </div>
        <div className="btn-holders" style={{ textAlign: 'left' }}>
          {currentCount > 0 ? (
            <Button
              variant="outlined"
              size="large"
              className=" width260 btn-outlined"
              disableElevation
            >
              Resend the email
            </Button>
          ) : (
            <Button
              onClick={resendEmailFn}
              variant="outlined"
              size="large"
              className=" width260 btn-outlined primary"
              disableElevation
              disabled={isLoading}
            >
              Resend the email&nbsp;&nbsp;&nbsp;
              {isLoading && <CircularProgress size={20} color="secondary" />}
            </Button>
          )}
          {currentCount > 0 && (
            <p>
              <img
                style={{
                  display: 'inline-block',
                  verticalAlign: 'text-top',
                  marginRight: '5px',
                }}
                src={clock}
                alt="logo"
              />{' '}
              00:{currentCount}
            </p>
          )}
        </div>
      </Box>
    );
  } else {
    return (
      <Box sx={{ flexGrow: 1 }}>
        <div className="verify-account mt-36">
          <h4>Account already verified.</h4>
          <p>
            Account linked with <strong>{email}</strong> has already been
            verified.
          </p>
        </div>
        <div className="btn-holders" style={{ textAlign: 'left' }}>
          <CustomButton
            onClick={(e) => navigate('/login')}
            buttonClassName={'primary-button'}
            fullWidth
            disabled={isLoading}
          >
            LOGIN
          </CustomButton>
        </div>
      </Box>
    );
  }
}

export default ResendVerification;
