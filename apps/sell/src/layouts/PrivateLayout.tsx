import React, { useContext } from 'react';
import { CssBaseline, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';

import theme from '@bridgeup/common/theme';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { UserContext } from '../context/UserContext';

const PrivateLayout = () => {
  const location = useLocation();
  const userContext = useContext(UserContext);

  console.log('PrivateLayout called');

  if (!userContext.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Paper>
        <Outlet />
      </Paper>
    </ThemeProvider>
  );
};

export default PrivateLayout;
