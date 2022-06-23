import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import {
  AppBar,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  Button,
  ListItemIcon,
  ListItemText,
  CircularProgress,
} from '@mui/material/';

import { SignOut } from '@bridgeup/common/auth/services/Login';
import { UserContext } from '../../context/UserContext';

import bridgeupLogo from '../../assets/images/bridgeupLogo.svg';
import { ReactComponent as AvatarIcon } from '../../assets/svg/profile-icon.svg';
import { ReactComponent as LogoutIcon } from '../../assets/images/logoutIcon.svg';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import './Header.scss';

interface HeaderProps {
  userName: string;
}
const Header: React.FC<HeaderProps> = ({ userName }) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const userContext = useContext(UserContext);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [isLogout, setLogout] = useState(false);

  const handleLogoutUser = () => {
    setLogout(true);
    SignOut()
      .then(() => {
        localStorage.clear();
      })
      .finally(() => {
        userContext.updateIsAuthenticated(false);
        localStorage.clear();
        navigate('/login', { state: null });
      });
  };

  return (
    <AppBar position="static" color="primary" className="bup-app-header">
      <Toolbar>
        <Typography sx={{ flexGrow: 1 }}>
          <Link to="/dashboard">
            <img src={bridgeupLogo} alt="logo" />
          </Link>
        </Typography>
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
              {userName}
            </Typography>
            {open ? (
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
      </Toolbar>
    </AppBar>
    // <header className="flex justify-between items-center bup-app-header">
    //   <div>

    //   </div>
    //   <div>
    //     <Button
    //       aria-describedby={id}
    //       variant="contained"
    //       onClick={handleClick}
    //       className="profile-button px-4 py-1"
    //     >
    //       <div className="flex justify-between items-center">
    //         <img src={avatar} alt="logo" />
    //         <h2 className="text-12 text-bold pl-2 text-color">{userName}</h2>
    // {open ? (
    //   <KeyboardArrowUpIcon className="text-color w-5 h-5 ml-2" />
    // ) : (
    //   <KeyboardArrowDownIcon className="text-color w-5 h-5 ml-2" />
    // )}
    //       </div>
    //     </Button>
    //     <Popover
    //       id={id}
    //       open={open}
    //       anchorEl={anchorEl}
    //       onClose={handleClose}
    //       anchorOrigin={{
    //         vertical: 'bottom',
    //         horizontal: 'right',
    //       }}
    //       transformOrigin={{
    //         vertical: 'top',
    //         horizontal: 'right',
    //       }}
    //       className="mt-2"
    //     >
    //       <div
    //         className="flex"
    //         style={{ background: '#1b2434', cursor: 'pointer' }}
    //         onClick={handleLogoutUser}
    //       >
    //         <img src={logoutIcon} alt="logo" className="px-2" />
    //         <h2
    //           style={{ minWidth: '150px', color: 'white' }}
    //           className="flex justify-start align-center py-2 text-14"
    //         >
    //           Logout
    // <CircularProgress
    //   size={20}
    //   className={
    //     isLogout ? 'circular-progress' : 'circular-progress-hidden'
    //   }
    //   color="primary"
    // />
    //         </h2>
    //       </div>
    //     </Popover>
    //   </div>
    // </header>
  );
};

export default Header;
