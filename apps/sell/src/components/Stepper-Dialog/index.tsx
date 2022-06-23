import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
  Grid,
  Button,
} from '@mui/material';
import ReactPlayer from 'react-player';
import { ReactComponent as NounHammerIcon } from '../../assets/svg/noun_hammer-icon.svg';
import { ReactComponent as CloseDialogIcon } from '../../assets/svg/close-dialog-icon.svg';
import './index.scss';

export interface StepperDialogProps {
  open: boolean;
  onClose: () => void;
}

const StepperDialog = (props: StepperDialogProps) => {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      aria-labelledby="stepper-title"
      fullWidth
      maxWidth={'md'}
      sx={{
        backdropFilter: 'blur(4px)',
      }}
    >
      <DialogTitle id="stepper-title">
        <Grid container>
          <Grid item container xs={12} sm={8} direction="row">
            <NounHammerIcon />
            <Typography variant="h3" ml={2} component={'div'}>
              How tranding works?
            </Typography>
          </Grid>
          <Grid item container xs={12} sm={4} sx={{ justifyContent: 'flex-end' }}>
            <Button>
              <CloseDialogIcon onClick={handleClose} />
            </Button>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent>
        <ReactPlayer
          playing
          loop
          width={'100%'}
          height={'100%'}
          url="https://cdn.bridgeup.com/video/Trade_Demo.mp4"
        />
      </DialogContent>
    </Dialog>
  );
};

export default StepperDialog;
