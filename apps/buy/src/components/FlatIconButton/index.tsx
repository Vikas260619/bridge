import IconButton from '@mui/material/IconButton';
import { ButtonProps } from '@mui/material/Button';
import { styled, Theme, CSSObject } from '@mui/material/styles';
import style from '@bridgeup/common/design-system/style.module.scss';

const FlatIconButton = styled(IconButton)<ButtonProps>(() => ({
  backgroundColor: style.lightGrey2,
  borderRadius: 4,
  '&:hover': {
    borderRadius: 4,
  },
}));

export default FlatIconButton;
