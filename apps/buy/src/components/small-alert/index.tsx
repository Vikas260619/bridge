import { styled } from '@mui/system';
import MuiAlert from '@mui/material/Alert';

const SmallAlert = styled(MuiAlert)(({ theme }) => ({
  paddingLeft: theme.spacing(2),
  paddingRight: theme.spacing(2),
  paddingTop: theme.spacing(0.75),
  paddingBottom: theme.spacing(0.75),
  borderRadius: theme.shape.borderRadius,
  fontSize: '0.75rem',
  lineHeight: 1.5,
  '.MuiAlert-icon': {
    fontSize: '1.25rem',
    padding: 0,
  },
  '.MuiAlert-message': {
    padding: 0,
  },
}));

export default SmallAlert;
