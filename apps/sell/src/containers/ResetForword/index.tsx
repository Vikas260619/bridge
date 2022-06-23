import { useState } from 'react';
import { Alert, Box } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';

import { ConfirmForgotPassword } from '@bridgeup/common/auth/services/Login';
import { API_ERRORS } from './../../utils/constants';
import { useTitle } from '@bridgeup/common/hooks';
import ResetPasswordForm from '../../components/auth/ResetPassword';
import { useSnackbar } from 'notistack';

export function ResetPassword() {
  useTitle('Reset password - BridgeUp');
  const navigate = useNavigate();
  const params = useParams();
  const code = params?.code;

  const [isLoading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>('');
  const [isError, setIsError] = useState<boolean>(false);
  const { enqueueSnackbar } = useSnackbar();

  const submitFormData = (password: string) => {
    setLoading(true);
    const promise = new Promise(
      (resolve: (reason?: any) => void, reject: (reason?: any) => void) => {
        if (!code) return;
        ConfirmForgotPassword({ code, newPassword: password }, resolve, reject);
      }
    );

    promise
      .then(
        (res) => {
          enqueueSnackbar('Password reset successful', {
            content: (
              <Alert
                severity="success"
                color="info"
                elevation={0}
                square={true}
                variant="filled"
              >
                Password reset successful
              </Alert>
            ),
          });
          navigate('/login');
        },
        (error) => {
          let message = error.errorMessage;
          if (API_ERRORS.RESET_PASSWORD.hasOwnProperty(error.errorCode)) {
            message = API_ERRORS.RESET_PASSWORD[error.errorCode];
          }
          setErrorMessage(message);
          setIsError(true);
        }
      )
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ResetPasswordForm
        submitFormData={submitFormData}
        isLoading={isLoading}
        isError={isError}
        errorMessage={errorMessage}
      />
    </Box>
  );
}

export default ResetPassword;
