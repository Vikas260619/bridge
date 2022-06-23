import React, { useContext } from 'react';
import { Box, Grid } from '@mui/material';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { SnackbarProvider } from 'notistack';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, GlobalStyles } from '@mui/material';
import style from '@bridgeup/common/design-system/style.module.scss';
import appTheme from '@bridgeup/common/theme';

import { UserContext } from '../context/UserContext';
import LoginCarousel from '../components/auth/LoginCarousel';
import SetPasswordCarousel from '../components/auth/SetPasswordCarousel';
import logoImage from './../assets/images/logo.svg';
import sliderBG from './../assets/images/slider-bg.png';
import sliderBG2 from './../assets/images/bg.svg';

import ForgotPasswordCarousel from '../components/auth/ForgotPasswordCarousel';
import ResetPasswordCarousel from '../components/auth/ResetPasswordCarousel';
import SignUpCarousel from '../components/auth/SignupCarousel';
import ResendVerificationCarousel from '../components/auth/ResendVerificationCarousel';

const PublicLayout = () => {
  const userContext = useContext(UserContext);
  const location = useLocation();
  console.log('Public layout called', location);
  const carouselComponentMapping: {
    [key: string]: {
      node: JSX.Element;
      bgImage: string;
      verticalPosition: string;
    };
  } = {
    login: {
      node: <LoginCarousel />,
      bgImage: '',
      verticalPosition: 'center',
    },
    signup: {
      node: <SignUpCarousel />,
      bgImage: sliderBG,
      verticalPosition: 'center',
    },
    'set-password': {
      node: <SetPasswordCarousel />,
      bgImage: sliderBG,
      verticalPosition: 'center',
    },
    'resend-email': {
      node: <ResendVerificationCarousel />,
      bgImage: sliderBG2,
      verticalPosition: 'start',
    },
    'forgot-password': {
      node: <ForgotPasswordCarousel />,
      bgImage: sliderBG,
      verticalPosition: 'center',
    },
    'reset-password': {
      node: <ResetPasswordCarousel />,
      bgImage: sliderBG,
      verticalPosition: 'center',
    },
    success: {
      node: <div />,
      bgImage: sliderBG2,
      verticalPosition: 'start',
    },
    'verify-email': {
      node: <div />,
      bgImage: sliderBG2,
      verticalPosition: 'start',
    },
    'verify-success': {
      node: <div />,
      bgImage: sliderBG2,
      verticalPosition: 'start',
    },
  };

  if (userContext.isAuthenticated) {
    const from = '/dashboard';
    console.log(`navigating to ${from}`);
    return <Navigate to={from} />;
  }

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { backgroundColor: style.mainBackground },
        }}
      />
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={4500}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
          <Grid container>
            <Grid
              item
              container
              xs={12}
              sm={7}
              justifyContent={'center'}
              alignItems={'flex-start'}
            >
              <Grid item xs={12} sm={8} md={6} flexDirection={'column'}>
                <Box
                  sx={{
                    maxWidth: '26rem',
                    marginTop: {
                      xs: 6,
                      sm: 12.4,
                    },
                    marginBottom: {
                      xs: 15,
                      sm: 0,
                    },
                    padding: {
                      xs: '0 2.5rem',
                      sm: 0,
                    },
                  }}
                >
                  <img src={logoImage} alt="logo" data-test-id="bup-logo" />

                  <Outlet />
                </Box>
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={12}
              sm={5}
              alignItems={
                carouselComponentMapping[location.pathname.split('/')[1]]
                  .verticalPosition
              }
              justifyContent={'center'}
              sx={{
                backgroundColor: style.navBarBackgroundColor,
                padding: {
                  xs: '5rem 0',
                  sm: 0,
                },
                minHeight: '100vh',
                backgroundImage: `url(${
                  carouselComponentMapping[location.pathname.split('/')[1]]
                    .bgImage
                })`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'bottom right',
              }}
            >
              <Grid item xs={10} flexDirection={'column'}>
                {carouselComponentMapping[location.pathname.split('/')[1]].node}
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </SnackbarProvider>
    </ThemeProvider>
  );
};

export default PublicLayout;
