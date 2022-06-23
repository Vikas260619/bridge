import { createTheme, ThemeOptions } from '@mui/material';

import style from './../design-system/style.module.scss';

export const themeOptions: ThemeOptions = {
  palette: {
    mode: 'dark',
    background: {
      paper: style.mainBackground,
    },
    primary: {
      main: style.primaryMain,
    },
    error: {
      main: style.error,
    },
    success: {
      main: style.success,
    },
    warning: {
      main: style.warning,
    },
  },
  typography: {
    fontFamily: ['Raleway', 'serif'].join(','),
    h1: {
      fontWeight: 400,
      lineHeight: 1.5,
      fontSize: 48,
    },
    h2: {
      fontWeight: 400,
      lineHeight: 1.5,
      fontSize: 32,
    },
    h3: {
      fontWeight: 700,
      lineHeight: 1.5,
      fontSize: 24,
    },
    h6: {
      fontWeight: 500,
      lineHeight: 1.5,
      fontSize: '1.125rem',
    },
    caption: {
      lineHeight: 1.5,
    },
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        gutterBottom: {
          marginBottom: 8,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        outlined: {
          border: '1px solid',
          fontWeight: 500,
          borderRadius: '0.25rem',
        },
        outlinedInfo: {
          borderColor: style.secondary,
          background: 'rgba(68, 112, 255, 0.1)',
          color: '#99B1FF',
        },
        outlinedError: {
          borderColor: style.error,
          background: 'rgba(250, 0, 45, 0.1)',
          color: '#F1AAAA',
        },
        outlinedWarning: {
          borderColor: style.warning,
          background: 'rgba(254, 197, 112, 0.1)',
          color: '#FFE5BE',
        },
        outlinedSuccess: {
          borderColor: style.success,
          background: 'rgba(56, 239, 125, 0.1)',
          color: '#BFFBD6',
        },
        filledInfo: {
          boxShadow:
            'box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2);',
          background: style.secondary,
          color: style.white,
        },
        filledError: {
          background: style.error,
          color: style.white,
        },
        filledSuccess: {
          background: style.secondarySuccess,
          color: style.white,
        },
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: style.lightGrey2,
          padding: '0.75rem',
          borderRadius: '0.25rem',
        },
      },
    },
    //table styling
    MuiTableHead: {
      styleOverrides: {
        root: {
          background: style.grey2,
        },
      },
    },
    MuiTableRow: {
      styleOverrides: {
        root: {
          backgroundColor: style.grey3,
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: style.textColor2,
          fontWeight: 500,
          borderBottomColor: style.mainBackground,
          borderBottomWidth: '.125rem',
          paddingTop: '0.75rem',
          paddingBottom: '0.75rem',
        },
      },
    },
    //Forms & FormControls styling

    MuiFilledInput: {
      styleOverrides: {
        root: {
          // ':hover': {
          //   backgroundColor: 'unset',
          // },
          backgroundColor: style.grey2,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'unset',
          backgroundImage: 'unset',
          transition: 'unset',
          backgroundColor: style.navBarBackgroundColor,
        },
      },
    },
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
    MuiDialog: {
      styleOverrides: {
        paper: {
          backgroundColor: style.grey2,
          backgroundImage: 'unset',
          boxShadow:
            '0px 3px 6px rgba(0, 0, 0, 0.1), 0px 24px 48px rgba(0, 0, 0, 0.2)',
        },
      },
    },
    MuiDialogTitle: {
      styleOverrides: {
        root: {
          padding: 24,
        },
      },
    },
    MuiDialogActions: {
      styleOverrides: {
        root: {
          padding: 24,
          paddingTop: 0,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          background: style.secondary,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'capitalize',
          fontWeight: 400,
          color: style.white,
          '&.Mui-selected': {
            fontWeight: 700,
            color: style.secondary,
          },
        },
      },
    },
    MuiDivider: {
      variants: [
        {
          props: {
            variant: 'fullWidthDashed',
          },
          style: {
            borderStyle: 'dashed',
            borderWidth: 1,
            borderColor: '#2D477B',
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: { variant: 'primary' },
          style: {
            fontWeight: 700,
            background: 'linear-gradient(90deg, #62BDFF 0%, #3864FF 98.91%)',
            letterSpacing: 1,
            textTransform: 'uppercase',
            ':hover': {
              background:
                'linear-gradient(268.1deg, #1B4EF9 0%, #007DD5 98.94%)',
            },
            ':disabled': {
              background: style.grey2,
              color: style.textColor3,
            },
          },
        },
        {
          props: { variant: 'primary', size: 'large' },
          style: {
            fontWeight: 700,
            background: 'linear-gradient(90deg, #62BDFF 0%, #3864FF 98.91%)',
            letterSpacing: 1,
            textTransform: 'uppercase',
            padding: '8px 22px',
            fontSize: '0.9375rem',
            ':hover': {
              background:
                'linear-gradient(268.1deg, #1B4EF9 0%, #007DD5 98.94%)',
            },
            ':disabled': {
              background: style.grey2,
              color: style.textColor3,
            },
          },
        },
        {
          props: { variant: 'primary', size: 'small' },
          style: {
            fontWeight: 700,
            background: 'linear-gradient(90deg, #62BDFF 0%, #3864FF 98.91%)',
            letterSpacing: 1,
            textTransform: 'uppercase',
            padding: '4px 10px',
            fontSize: '0.8125rem',
            ':hover': {
              background:
                'linear-gradient(268.1deg, #1B4EF9 0%, #007DD5 98.94%)',
            },
            ':disabled': {
              background: style.grey2,
              color: style.textColor3,
            },
          },
        },
        {
          props: { variant: 'primaryOutlined' },
          style: {
            fontWeight: 700,
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: style.secondary,
            color: style.secondary,
            letterSpacing: 1,
            textTransform: 'uppercase',
            ':hover': {
              borderColor: '#1A52F7',
              color: style.secondaryHover,
            },
            ':disabled': {
              borderColor: style.textColor3,
              color: style.textColor3,
            },
          },
        },
        {
          props: { variant: 'anchor' },
          style: {
            fontWeight: 700,
            color: style.secondary,
            textTransform: 'none',
            padding: 0,
            ':hover': {
              background: 'unset',
              color: style.secondaryHover,
            },
          },
        },
      ],
    },
  },
};
const theme = createTheme(themeOptions);

export default theme;
