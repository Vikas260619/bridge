import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material';

import MuiDrawer, { DrawerProps as MuiDrawerProps } from '@mui/material/Drawer';

import { styled, Theme, CSSObject } from '@mui/material/styles';
import { MenuContext } from '../../context/menu/MenuContext';

import ListItemIcon from '@mui/material/ListItemIcon';
import { ReactComponent as CircleRightIcon } from './../../assets/icons/circle-right-icon.svg';
import { ReactComponent as HammerActiveIcon } from './../../assets/icons/hammer-icon.svg';
import { ReactComponent as HammerIcon } from './../../assets/icons/hammer-inactive-icon.svg';
import { ReactComponent as DashboardIcon } from './../../assets/icons/dashboard-inactive-icon.svg';
import { ReactComponent as DashboardActiveIcon } from './../../assets/icons/dashboard-icon.svg';
import { ReactComponent as LogoIcon } from './../../assets/icons/bridgeup-logo-icon.svg';
import logoImage from './../../assets/images/logo.svg';

const openedMixin = (theme: Theme, drawerWidth: number): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(9)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

interface DrawerProps {
  drawerWidth: number;
  open: boolean;
  toggleDrawer: () => void;
}

interface BupDrawerProps extends MuiDrawerProps {
  drawerwidth: number;
}

const BupDrawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})<BupDrawerProps>(({ theme, open, drawerwidth }) => ({
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme, drawerwidth),
    '& .MuiDrawer-paper': openedMixin(theme, drawerwidth),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

const Drawer: React.FC<DrawerProps> = ({ drawerWidth, open, toggleDrawer }) => {
  const navigate = useNavigate();
  const menuContext = useContext(MenuContext);

  const menuList = [
    {
      text: 'Dashboard',
      activeIcon: <DashboardActiveIcon />,
      icon: <DashboardIcon />,
      link: '/dashboard',
    },
    {
      text: 'Place bid',
      activeIcon: <HammerActiveIcon />,
      icon: <HammerIcon />,
      link: '/place-bid',
    },
  ];

  return (
    <BupDrawer
      open={open}
      drawerwidth={drawerWidth}
      sx={{
        flexShrink: 0,
      }}
      variant="permanent"
      anchor="left"
    >
      <DrawerHeader>
        {open && (
          <>
            <img
              src={logoImage}
              alt="logo"
              data-test-id="bup-logo"
              width={102}
              style={{ marginRight: '0.5rem' }}
            />
            <IconButton onClick={toggleDrawer}>
              <CircleRightIcon style={{ transform: 'rotate(180deg)' }} />
            </IconButton>
          </>
        )}

        {!open && (
          <IconButton onClick={toggleDrawer}>
            <LogoIcon width={24} />
          </IconButton>
        )}
      </DrawerHeader>

      <List>
        {menuList.map((menu, index) => (
          <ListItem
            button
            key={menu.text}
            onClick={() => {
              navigate(menu.link);
            }}
            selected={menuContext.menuIndex === index}
          >
            <ListItemIcon>
              {menuContext.menuIndex === index ? menu.activeIcon : menu.icon}
            </ListItemIcon>
            {open && (
              <Typography
                variant="body2"
                fontWeight={menuContext.menuIndex === index ? 700 : 500}
                className={
                  menuContext.menuIndex === index ? '' : 'text-color-3'
                }
              >
                {menu.text}
              </Typography>
            )}
          </ListItem>
        ))}
      </List>
    </BupDrawer>
  );
};

export default Drawer;
