// assets imports
import { Grid, Button, Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { verifyEmail } from '@bridgeup/common/auth/services/Signup';
import Skeleton from '@mui/material/Skeleton';
import { useTitle } from '@bridgeup/common/hooks';
import CustomButton from '../../components/CustomButton/CustomButton';

export function VerifyEmailFn(props: any) {
  const navigate = useNavigate();
  const params = useParams();

  const [isVerifying, setVerifying] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [forbidden, setForbidden] = useState(false);
  const [resendData, setResendData] = useState('');
  useTitle('Verify Account - BridgeUp');
  useEffect(() => {
    const verifyCode = async (code: string | null) => {
      setVerifying(true);
      const promise = new Promise(
        (resolve: (reason?: any) => void, reject: (reason?: any) => void) => {
          verifyEmail(code, resolve, reject);
        }
      );

      promise.then(
        (res) => {
          setVerifying(false);
          navigate({ pathname: '/success' });
        },
        (error) => {
          setVerifying(false);
          if (error.status === 400) {
            navigate('/resend-email', {
              state: { expired: true },
            });
          }
          if (error.errorCode === 'VERIFICATION_TOKEN_INVALID') {
            setResendData(error.email);
          } else if (error.status === 404 || error.status === 422) {
            setNotFound(true);
          } else if (error.status === 401) {
            setForbidden(true);
          }
        }
      );
    };

    const code = params?.code;
    if (code) {
      verifyCode(code);
    } else {
      navigate('/signup');
    }
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      {resendData && (
        <div className="small-container">
          <div className="verify-account mt-36">
            <h4>Account already verified.</h4>
            <p>
              Account linked with <strong>{resendData}</strong> has already been
              verified.
            </p>
          </div>
          <div className="btn-holders" style={{ textAlign: 'left' }}>
            <CustomButton
              onClick={(e) => navigate('/login')}
              buttonClassName={'primary-button'}
              fullWidth
            >
              LOGIN
            </CustomButton>
          </div>
        </div>
      )}
      {!resendData && (
        <div className="small-container">
          {isVerifying && (
            <div>
              <Skeleton />
              <Skeleton animation={false} />
              <Skeleton animation="wave" />
            </div>
          )}
          {notFound && (
            <div className="verify-account mt-52">
              <span className="text-bold text-32">
                Sorry, your request could not be processed.
              </span>
            </div>
          )}
          {forbidden && (
            <div className="verify-account mt-52">
              <span className="text-bold text-32">
                Your verification code is invalid.
              </span>
            </div>
          )}
        </div>
      )}
    </Box>
  );
}

export default VerifyEmailFn;
