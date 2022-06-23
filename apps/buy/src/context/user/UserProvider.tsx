import { useBuyUserInitLazyQuery } from '@bridgeup/data-access/hooks/investor/app-init.hooks';
import { Backdrop, CircularProgress } from '@mui/material';
import React, { useContext, useEffect, useState } from 'react';
import { validateToken } from '@bridgeup/common/auth/utils/tokenValidation';
import { IUser, UserContext } from './UserContext';
import { CssBaseline, Paper } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@bridgeup/common/theme';

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>();
  const [appInit, setAppInit] = useState(false);

  const userContext = useContext(UserContext);

  const updateUser = (user: IUser | null) => {
    console.log('updateUser in UserProvider', user);
    setUser(user);
  };

  const updateIsAuthenticated = (status: boolean) => {
    setIsAuthenticated(status);
  };
  const [buyUserInitQuery, { data: buyUserInitOutput }] =
    useBuyUserInitLazyQuery({
      fetchPolicy: 'no-cache',
      notifyOnNetworkStatusChange: true,
    });

  useEffect(() => {
    let mounted = true;
    console.log('UserProvider useEffect Called');
    if (mounted) {
      const isUserAuthenticated = userContext?.isAuthenticated || false;
      if (!isUserAuthenticated) {
        console.log('UserProvider useEffect user not authenticated');

        const tokenAvailable = validateToken();
        if (tokenAvailable) {
          console.log('token available buyUserInitQuery called');
          setAppInit(false);
          buyUserInitQuery();
        } else {
          console.log('token not available');
          setIsAuthenticated(false);
          setUser(null);
          setAppInit(true);
        }
      } else {
        console.log('UserProvider useEffect user authenticated');
      }
    }

    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    let mounted = true;

    console.log('buyUserInitOutput useEffect Called');
    if (buyUserInitOutput && mounted) {
      const userData = buyUserInitOutput.investor_user[0].user;
      const investorData = buyUserInitOutput.investor_user[0].investor;
      const userObj: IUser = {
        id: userData.id,
        first_name: userData.first_name,
        last_name: userData.last_name,
        investor: {
          id: investorData.id,
          name: investorData.name,
          status: investorData.status,
        },
      };

      if (userObj) {
        setUser(userObj);
        setIsAuthenticated(true);
        setAppInit(true);
        console.log('User Init', userObj);
      }
    }

    console.log('buyUserInitOutput UserProvider user data', user, appInit);
    return () => {
      mounted = false;
    };
  }, [buyUserInitOutput]);

  useEffect(() => {
    let mounted = true;
    console.log('isAuthenticated useEffect Called', isAuthenticated, appInit);
    if (mounted) {
      if (isAuthenticated !== undefined) {
        if (isAuthenticated) {
          if (!user) {
            console.log('user not initialized buyUserInitQuery called');
            setAppInit(false);
            buyUserInitQuery();
          } else {
            console.log('user initialized');
          }
        } else {
          setUser(null);
          setAppInit(true);
          console.log('user initialized', appInit);
        }
      }
    }
    return () => {
      mounted = false;
    };
  }, [isAuthenticated]);

  const value = { user, isAuthenticated, updateUser, updateIsAuthenticated };

  if (!appInit) {
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper sx={{ minHeight: '100vh', minWidth: '100vh' }}>
          <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={!appInit}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </Paper>
      </ThemeProvider>
    );
  }
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;
