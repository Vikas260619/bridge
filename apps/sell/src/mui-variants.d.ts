import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';

declare module '@mui/material/Divider' {
  interface DividerPropsVariantOverrides {
    fullWidthDashed: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    anchor: true;
    primary: true;
    primaryOutlined: true;
  }
}

declare module '@mui/lab/LoadingButton' {
  interface LoadingButtonPropsVariantOverrides {
    anchor: true;
    primary: true;
    primaryOutlined: true;
  }
}
