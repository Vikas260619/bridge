import { useEffect, useState } from 'react';
import {
  Button,
  Grid,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
  Alert,
  FormControl,
} from '@mui/material';
import trend from '../assets/images/trend.svg';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { ChargebeeType, ChargebeeErrorType } from '../types/AccountSetup';

import style from '@bridgeup/common/design-system/style.module.scss';

interface Props {
  open: boolean;
  handleClose: any;
  isLoading: boolean;
  onFormSubmit(data: ChargebeeType): void;
  metadata: any;
  chargebeeError: any;
}

export const ChargebeeModal = (props: Props) => {
  const {
    open,
    handleClose,
    isLoading,
    onFormSubmit,
    metadata,
    chargebeeError,
  } = props;
  const [formError, setFormError] = useState<ChargebeeErrorType>({
    api_key: false,
    site: false,
  });

  const [isFormValid, setIsFormValid] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);
  const [form, setForm] = useState<ChargebeeType>({
    api_key: '',
    site: '',
  });

  useEffect(() => {
    setForm({ ...form, site: metadata?.site });
  }, [metadata]);

  useEffect(() => {
    if (chargebeeError) {
      setShowError(true);
    }
  }, [chargebeeError]);

  const validateForm = (key: string) => {
    setFormError({
      api_key: false,
      site: false,
    });

    if (key === 'api_key' && !form.api_key) {
      setFormError({ ...formError, api_key: true });
      setIsFormValid(false);
    } else if (key === 'site' && !form.site) {
      setFormError({ ...formError, site: true });
      setIsFormValid(false);
    } else {
      setIsFormValid(true);
    }
  };

  const closeDialogEvent = () => {
    setIsFormValid(false);
    setForm({
      api_key: '',
      site: '',
    });
    setFormError({
      api_key: false,
      site: false,
    });
    setShowError(false);
    handleClose();
  };
  const onsubmit = () => {
    if (form.api_key && form.site) {
      onFormSubmit(form);
    }
  };

  return (
    <Dialog
      open={open}
      onClose={closeDialogEvent}
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
          <Grid item sm={6} xs={12}>
            <img src={trend} alt="logo" />
          </Grid>
          <Grid item sm={6} xs={12}>
            <CloseOutlinedIcon
              onClick={closeDialogEvent}
              style={{ float: 'right', cursor: 'pointer' }}
            ></CloseOutlinedIcon>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent className="p-0 mt-1 mr-6 ml-6 mb-8">
        {showError && (
          <Alert
            severity="error"
            title=""
            style={{ alignItems: 'center' }}
            variant="outlined"
          >
            Please enter valid credentials
          </Alert>
        )}
        <div className="text-24 text-bold mt-2">
          Enter Chargebee credentials.
        </div>
        <div className="text-14 text-regular text-color-3 mt-4">
          Enter your Chargebee site URL and API key to integrate your account.
        </div>
        <div className="text-14 text-bold">
          <a
            target="blank"
            href="https://www.chargebee.com/docs/2.0/api_keys.html"
          >
            How to get Chargebee API key?
          </a>
        </div>
        <div className="mt-6">
          <TextField
            fullWidth
            error={formError.api_key}
            helperText={formError.api_key && 'Enter a valid Api key'}
            required
            onChange={(e) => setForm({ ...form, api_key: e.target.value })}
            value={form.api_key}
            onBlur={(e) => validateForm('api_key')}
            label="Chargebee API Key"
            variant="filled"
            sx={{
              '& .MuiFilledInput-root': {
                backgroundColor: style.grey3,
              },
            }}
          />
        </div>
        <div className="mt-8">
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
            spacing={0}
          >
            <Grid item sm={9} xs={12}>
              <TextField
                fullWidth
                error={formError.site}
                helperText={formError.site && 'Enter a valid site name'}
                required
                onChange={(e) => setForm({ ...form, site: e.target.value })}
                value={form.site || ''}
                onBlur={(e) => validateForm('site')}
                label="Your Site Name"
                variant="filled"
                sx={{
                  '& .MuiFilledInput-root': {
                    backgroundColor: style.grey3,
                  },
                }}
              />
            </Grid>
            <Grid item sm={3} xs={12}>
              <div className="next-text">chargebee.com</div>
            </Grid>
          </Grid>
        </div>
        <div className="btn-holders mt-16">
          <Button
            onClick={onsubmit}
            disabled={isLoading || !isFormValid}
            variant="contained"
            size="large"
            fullWidth
            className="primary-btn"
            color="primary"
            disableElevation
          >
            INTEGRATE CHARGEBEE
            {isLoading && <CircularProgress size={20} color="primary" />}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
