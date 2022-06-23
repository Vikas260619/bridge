import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';

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
