// assets imports
import { Grid, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import 'fontsource-raleway';
import bgImage from '../../assets/images/bg.svg';
import logoImage from '../../assets/images/logo.svg';
import 'react-phone-input-2/lib/style.css';
import createAccountSuccess from '../../assets/images/create-account.svg';
import { useTitle } from '@bridgeup/common/hooks';
import CustomButton from '../../components/CustomButton/CustomButton';

function SignupSuccess(props: any) {
  useTitle('Welcome to BridgeUp - BridgeUp');

  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <div className="verify-account mt-36">
        <div className="text-bold text-32 mt-2">Account Verified!</div>
        <div>
          We are delighted to have you on board! Please login to access your
          account.
        </div>
      </div>
      <div className="btn-holders mt-10" style={{ textAlign: 'left' }}>
        <CustomButton
          onClick={(e) => navigate('/login')}
          fullWidth
          buttonClassName={'primary-btn'}
        >
          Login
        </CustomButton>
      </div>
    </Box>
  );
}
export default SignupSuccess;
