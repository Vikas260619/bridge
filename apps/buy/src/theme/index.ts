import { createTheme, Theme, ThemeOptions } from '@mui/material/styles';
import style from '@bridgeup/common/design-system/style.module.scss';

import { themeOptions as globalThemeOptions } from '@bridgeup/common/theme';

const defaultTheme = createTheme({});

const themeOptions: ThemeOptions = {
  palette: {
    ...globalThemeOptions.palette,
    mode: 'dark',
    background: { paper: style.mainBackground },
  },
  typography: {
    ...globalThemeOptions.typography,
  },
  components: {
    ...globalThemeOptions.components,

    MuiMenu: {
      styleOverrides: {
        list: {
          minWidth: '200px',
          padding: 0,
        },
        root: {
          '.MuiMenu-paper': {
            borderRadius: 0,
            backgroundColor: style.grey1,
            boxShadow: 'unset',
            backgroundImage: 'unset',
            transition: 'unset',
          },
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          boxShadow: 'unset',
          backgroundImage: 'unset',
          transition: 'unset',
          backgroundColor: style.grey3,
          borderColor: style.grey3,
        },
        root: {
          '.MuiListItem-root': {
            padding: `1rem`,
            '&.Mui-selected': {
              backgroundColor: style.navBarBackgroundColorActive,
              borderLeftWidth: '4px',
              borderLeftStyle: 'solid',
              borderImage: 'linear-gradient(to bottom, #ADFDA2, #11D3F3) 1',
            },
            '&:hover': {
              backgroundColor: style.navBarBackgroundColorActive,
            },
            [defaultTheme.breakpoints.up('sm')]: {
              padding: '1rem 1.25rem',
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          color: style.white,
          fontWeight: 500,
        },
      },
    },
    // can go in common theme
    MuiToolbar: {
      styleOverrides: {
        root: {
          [defaultTheme.breakpoints.up('xs')]: {
            minHeight: defaultTheme.spacing(10.5),
          },
        },
      },
    },
  },
};
const theme = createTheme(themeOptions);
export default theme;
