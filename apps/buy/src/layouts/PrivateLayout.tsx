import { useContext, useState } from 'react';
import { Box, CssBaseline, GlobalStyles } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

import { IUser, UserContext } from './../context/user/UserContext';
import Header from '../components/Header/Header';
import Drawer from '../components/Drawer/Drawer';
import { SnackbarProvider } from 'notistack';
import MenuProvider from '../context/menu/MenuProvider';

const PrivateLayout = () => {
  const drawerWidth = 180;
  console.log('private layout called');
  const userContext = useContext(UserContext);
  const user: IUser = userContext.user as IUser;
  const location = useLocation();

  const [open, setOpen] = useState(false);

  if (!userContext.isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <SnackbarProvider
      maxSnack={3}
      autoHideDuration={4500}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
    >
      <MenuProvider>
        <Box sx={{ display: 'flex', minHeight: '100vh' }}>
          <Header
            userName={user.first_name + ' ' + user.last_name}
            drawerWidth={drawerWidth}
            open={open}
          />
          <Drawer
            drawerWidth={drawerWidth}
            toggleDrawer={toggleDrawer}
            open={open}
          ></Drawer>
          <Box
            component="main"
            sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}
          >
            <Toolbar />
            <Box
              sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}
              className="py-container px-container"
            >
              <Outlet />
            </Box>
          </Box>
        </Box>
      </MenuProvider>
    </SnackbarProvider>
  );
};

export default PrivateLayout;
