import { Box } from '@mui/material';
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import illustrationSignup from '../../../assets/images/illustration_signup.png';

const SignUpCarousel = () => {
  return (
    <Box
      style={{
        display: 'flex',
        minHeight: 'inherit',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
      mb={15}
    >
      <Box>
        <img style={{ maxWidth: '100%' }} src={illustrationSignup} alt="logo" />
      </Box>
      <Box width="100%" mt={2}>
        <Carousel
          className="bridgeup-carousel"
          animation="slide"
          autoPlay={true}
          navButtonsAlwaysInvisible={true}
        >
          <div className="text-center">
            <h5>
              BridgeUp your revenue by trading it as an asset for up front
              capital
            </h5>
          </div>
          <div className=" text-center">
            <h5>We value your privacy</h5>
          </div>
        </Carousel>
      </Box>
    </Box>
  );
};

export default SignUpCarousel;
