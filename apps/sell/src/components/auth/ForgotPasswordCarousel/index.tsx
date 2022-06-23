import { Box, Typography } from '@mui/material';
import illustrationSignIn from '../../../assets/images/lock.png';

const ForgotPasswordCarousel = () => {
  return (
    <Box className="text-left" sx={{ marginBottom: 20 }}>
      <Typography mb={4}>
        <img src={illustrationSignIn} alt="logo" style={{ maxWidth: '100%' }} />
      </Typography>
      <div>
        <Typography variant="h3">Forgot Your Password?</Typography>
        <Typography variant="h3">No Sweat! It happens.</Typography>
        <Typography variant="body2" className="text-color-3" maxWidth={400}>
          Simply enter your registered email address and we’ll help you reset
          your password in a jiffy.
        </Typography>
      </div>
    </Box>
  );
};

export default ForgotPasswordCarousel;
