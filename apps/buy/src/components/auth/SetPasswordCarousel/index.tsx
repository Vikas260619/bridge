import { Box, Typography } from '@mui/material';
import illustrationSignIn from '../../../assets/images/lock.png';

const SetPasswordCarousel = () => {
  return (
    <Box className="text-left" sx={{ marginBottom: 20 }}>
      <Typography mb={4}>
        <img src={illustrationSignIn} alt="logo" style={{ maxWidth: '100%' }} />
      </Typography>
      <div>
        <Typography variant="h3">Set Your Password</Typography>
        <Typography
          variant="body2"
          className="text-color-3"
          maxWidth={400}
          marginTop={1.5}
        >
          Simply enter your required password and we will help you get started
          in a jiffy!
        </Typography>
      </div>
    </Box>
  );
};

export default SetPasswordCarousel;
