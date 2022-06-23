import {
  Button,
  Grid,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
} from '@mui/material'
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined'
import darkClock from '../assets/images/dark-clock.png'
interface Props {
  open: boolean
  handleClose: any
  openUpload: Function
  description: string
  verified: boolean | undefined
}
export const ComingSoon = (props: Props) => {
  const { open, handleClose, openUpload, description, verified } = props

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      maxWidth={'sm'}
      className="backdrop-filter backdrop-blur"
      PaperProps={{
        className: 'bg-color-secondary',
      }}
    >
      <DialogTitle className="pt-8 pr-6 pl-6 pb-0">
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={3}
        >
          <Grid className="flex" item sm={6} xs={12}>
            <img src={darkClock} alt="logo" />
          </Grid>
          <Grid item sm={6} xs={12}>
            <CloseOutlinedIcon
              onClick={handleClose}
              style={{ float: 'right', cursor: 'pointer' }}
            ></CloseOutlinedIcon>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent className="p-0 mt-6 mr-6 ml-6 mb-8">
        <div className="text-24 text-bold">Coming Soon!</div>
        <div className="mt-4 text-14 text-regular text-color-3">
          {description}
        </div>
        <div className="btn-holders mt-10">
          <Button
            disabled={verified}
            onClick={() => openUpload()}
            variant="contained"
            size="large"
            fullWidth
            className="primary-btn"
            color="primary"
            disableElevation
          >
            UPLOAD FILE
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
