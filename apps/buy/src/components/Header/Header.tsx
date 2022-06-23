import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';

import {
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Button,
  ListItemIcon,
  ListItemText,
  CircularProgress,
} from '@mui/material/';

import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';

import { SignOut } from '@bridgeup/common/auth/services/Login';
import { UserContext } from '../../context/user/UserContext';

import { ReactComponent as AvatarIcon } from './../../assets/icons/profile-icon.svg';
import { ReactComponent as LogoutIcon } from './../../assets/icons/logout-icon.svg';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Header.scss';

interface HeaderProps {
  userName: string;
  drawerWidth: number;
  open: boolean;
}

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  drawerwidth?: number;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open, drawerwidth }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerwidth,
    width: `calc(100% - ${drawerwidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!open && {
    marginLeft: `calc(${theme.spacing(7)} + 1px)`,
    width: `calc(100% - (${theme.spacing(7)} + 1px))`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - (${theme.spacing(9)} + 1px))`,
    },
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Header: React.FC<HeaderProps> = ({ open, drawerWidth }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const userContext = useContext(UserContext);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const menuOpen = Boolean(anchorEl);
  const id = menuOpen ? 'simple-popover' : undefined;

  const [isLogout, setLogout] = useState(false);

  const handleLogoutUser = () => {
    setLogout(true);
    SignOut()
      .then(() => {
        localStorage.clear();
      })
      .finally(() => {
        userContext.updateIsAuthenticated(false);
        navigate('/login');
        console.log('logout succesfull');
      });
  };

  return (
    <AppBar position="fixed" open={open} drawerwidth={drawerWidth}>
      <Toolbar disableGutters className="px-container">
        <Typography sx={{ flexGrow: 1 }}></Typography>
        {userContext.isAuthenticated && (
          <div>
            <Button
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              aria-describedby={id}
              variant="contained"
              color="inherit"
              className="profile-button"
            >
              <AvatarIcon />
              <Typography variant="body2" sx={{ ml: 0.5, fontWeight: '600' }}>
                {userContext.user?.first_name +
                  ' ' +
                  userContext.user?.last_name}
              </Typography>
              {menuOpen ? (
                <KeyboardArrowUpIcon fontSize="small" />
              ) : (
                <KeyboardArrowDownIcon fontSize="small" />
              )}
            </Button>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              sx={{ top: '4px' }}
            >
              <MenuItem onClick={handleLogoutUser}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText>Logout</ListItemText>
                {isLogout && <CircularProgress size={20} />}
              </MenuItem>
            </Menu>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
