// React Import
import React, { useState, useEffect } from 'react';

// material ui Import
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';

import CircleIcon from '@mui/icons-material/Circle';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import { useNavigate } from 'react-router-dom';

import { useGetCompanyWithPanQuery } from '@bridgeup/data-access/hooks/company/company.hooks';
import {
  VerifyPanQueryVariables,
  useVerifyPanLazyQuery,
} from '@bridgeup/data-access/hooks/company/verify-pan.hooks';

// svg import
import logoImage from '../../assets/images/logo.svg';
import errorLogo from '../../assets/images/error.svg';
import infoLogo from '../../assets/images/Info.svg';
import logout from '../../assets/images/logout.svg';
import questionIcon from '../../assets/images/question.svg';

// component imports
import { AccountSetupSkeleton } from '../../components/AccountSetupSkeleton';
import { useTitle } from '@bridgeup/common/hooks';
import StepperComponent from '../../components/StepperComponent/StepperComponent';
import CustomButton from '../../components/CustomButton/CustomButton';
import CustomInput from '../../components/CustomInput/CustomInput';
import SuccessToast from '../../components/SuccessToast';
import ErrorToast from '../../components/ErrorToast';

interface MisMatchCompanyName {
  pan: string;
  signUp: string;
}

interface MatchedCompany {
  gistn: string;
  companyName: string;
}

function PanConnect() {
  useTitle('Add your PAN - BridgeUp');

  const navigate = useNavigate();
  const [pan, setPan] = useState('');
  const [misMatchCompanyName, setMisMatchCompanyName] = useState<
    MisMatchCompanyName | undefined
  >(undefined);

  const [matchedCompany, setMatchedCompany] = useState<
    MatchedCompany | undefined
  >(undefined);

  const [openDialog, setOpenDialog] = useState(false);
  const [verified, setVerified] = useState(false);
  const { data: company, loading: pageLoading } = useGetCompanyWithPanQuery({
    fetchPolicy: 'no-cache',
  });
  const [isPanValid, setIsPanValid] = useState(true);
  const [showSuccessToast, setShowSuccessToast] = useState<boolean>(false);
  const [isLogout, setLogout] = useState(false);
  const [
    verifyPanQuery,
    { data: verifyPanOutput, loading: isVerifying, error: verifyPanError },
  ] = useVerifyPanLazyQuery({
    fetchPolicy: 'no-cache',
    notifyOnNetworkStatusChange: true,
  });

  useEffect(() => {
    if (company) {
      if (
        company?.company.length &&
        company?.company[0].pan &&
        company?.company[0].pan.length > 0
      ) {
        setPan(company?.company[0].pan);
        setMatchedCompany({
          gistn: company.company[0].active_gstin
            ? company.company[0].active_gstin
            : '',
          companyName: company.company[0].name as string,
        });
        setVerified(true);
      } else {
        setVerified(false);
      }
    }
  }, [company]);

  useEffect(() => {
    if (verifyPanOutput && verifyPanOutput.verifyPan) {
      const x = verifyPanOutput.verifyPan;
      if (x.verified) {
        setMatchedCompany({
          gistn: x.gstin || '',
          companyName: x.name_on_pan as string,
        });
        setVerified(true);
        setShowSuccessToast(true);
        setOpenDialog(false);
      } else {
        setMisMatchCompanyName({
          pan: x.name_on_pan as string,
          signUp: x.registered_name as string,
        });
        setVerified(false);
        setOpenDialog(true);
      }
    }
  }, [verifyPanOutput]);

  useEffect(() => {
    // setError(true);
  }, [verifyPanError]);

  const VerifyPan = (syncName = false) => {
    if (pan) {
      const companyPanRegex = new RegExp(
        '^([a-zA-Z]){3}[C|c|F|f]([a-zA-Z]){1}([0-9]){4}([a-zA-Z]){1}?$'
      );

      if (!companyPanRegex.test(pan)) {
        setIsPanValid(false);
        return;
      }
      setIsPanValid(true);
      const args: VerifyPanQueryVariables = {
        args: {
          pan: pan,
          sync_name: syncName,
        },
      };
      verifyPanQuery({ variables: args });
    } else {
      setIsPanValid(false);
    }
  };

  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0}
        style={{ height: '100%', backgroundColor: '#030914' }}
        className="login-holder flex items-stretch"
      >
        <Grid item sm={7} xs={12} lg={7}>
          <AccountSetupSkeleton loading={pageLoading}>
            {showSuccessToast && (
              <SuccessToast message="PAN is Successfully verified" />
            )}
            <div className="small-container new-c">
              <div className="logo">
                <img src={logoImage} alt="logo" />
              </div>
              <div style={{ minHeight: '460px' }}>
                <div
                  className="mt-8"
                  style={{ visibility: verifyPanError ? 'visible' : 'hidden' }}
                >
                  <ErrorToast message="Invalid PAN number" />
                </div>

                <div className="mt-8 text-24 text-bold">
                  <span>Add your PAN</span>
                  <Tooltip title="Enter your company PAN" className="ml-2">
                    <img src={infoLogo} alt="info" />
                  </Tooltip>
                </div>

                <div className="text-14 text-regular mt-1 text-color-2">
                  We’ll review your company’s financials with the information
                  accessible through your PAN number
                </div>

                <div className="mt-10">
                  <Grid
                    container
                    spacing={4}
                    justifyContent="space-between"
                    alignItems="center"
                    direction="row"
                  >
                    <Grid item xs={12} md={8}>
                      <FormControl variant="filled" style={{ width: '100%' }}>
                        <CustomInput
                          disabled={isVerifying}
                          error={!isPanValid}
                          helperText={
                            !isPanValid
                              ? 'Please enter a valid company PAN number'
                              : ' '
                          }
                          label="PAN Number"
                          variant="filled"
                          className="input-fields"
                          value={pan}
                          onChange={(e) => setPan(e.target.value)}
                          adornment={
                            !isPanValid && <img src={errorLogo} alt="logo" />
                          }
                        />
                      </FormControl>
                    </Grid>
                    <Grid container item xs={12} md={4}>
                      {verified ? (
                        <Typography
                          variant="subtitle2"
                          className="color-status-success text-center"
                          component="div"
                          sx={{ fontWeight: 700, width: '100%' }}
                        >
                          <span
                            style={{ fontSize: '0.5rem' }}
                            className="mr-2.5"
                          >
                            <CircleIcon fontSize="inherit"></CircleIcon>
                          </span>
                          <span>VERIFIED</span>
                        </Typography>
                      ) : (
                        <LoadingButton
                          variant="text"
                          fullWidth
                          onClick={() => VerifyPan(false)}
                          loading={isVerifying}
                          loadingPosition="start"
                          startIcon={<span />}
                        >
                          <Typography
                            variant="button"
                            display="block"
                            sx={{ fontWeight: 700 }}
                          >
                            VERIFY PAN
                          </Typography>
                        </LoadingButton>
                      )}
                    </Grid>
                  </Grid>
                  {verified && (
                    <>
                      <div className="mt-16">
                        <Typography
                          variant="h6"
                          component="div"
                          sx={{ fontWeight: 700 }}
                        >
                          GST
                        </Typography>
                        <div>
                          {matchedCompany?.gistn
                            ? matchedCompany?.gistn
                            : `No GST number found linked to
                          this PAN`}
                        </div>
                      </div>

                      <div className="mt-16">
                        <Typography
                          variant="h6"
                          component="div"
                          sx={{ fontWeight: 700 }}
                        >
                          Company Name
                        </Typography>
                        <div>{matchedCompany?.companyName}</div>
                      </div>
                    </>
                  )}
                </div>
              </div>
              <div className="btn-holders mt-16 mb-10">
                <CustomButton
                  onClick={(e) => navigate('/banking')}
                  disabled={!verified}
                  fullWidth={true}
                  buttonClassName={'primary-button'}
                >
                  NEXT&nbsp;&nbsp;&nbsp;&nbsp;
                </CustomButton>
              </div>
            </div>
          </AccountSetupSkeleton>
        </Grid>

        <StepperComponent
          currentStep={1}
          isLogout={isLogout}
          logout={logout}
          hideLogout={false}
        />
      </Grid>
      <Dialog
        open={openDialog}
        aria-labelledby="company-name-mismatch-title"
        aria-describedby="company-name-mismatch-description"
        maxWidth={'sm'}
        className="backdrop-filter backdrop-blur"
        PaperProps={{
          className: 'bg-color-secondary',
        }}
      >
        <DialogTitle id="company-name-mismatch-title">
          <Grid
            container
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Grid item>
              <img src={questionIcon} alt="" />
            </Grid>
            <Grid item>
              <IconButton
                size="small"
                aria-label="close modal"
                disabled={isVerifying}
                onClick={() => setOpenDialog(false)}
              >
                <CloseOutlinedIcon fontSize="small" />
              </IconButton>
            </Grid>
          </Grid>
          <div className="mt-2">Company Name doesn't match</div>
          <Typography
            variant="body2"
            className="text-color-3"
            id="company-name-mismatch-description"
          >
            The company name you entered while signing up doesnt match the
            company name in the PAN you just verified. Please click on confirm
            if you want to change your company name to match the company name in
            your PAN
          </Typography>
        </DialogTitle>
        <DialogContent>
          <div>
            <div className="mt-6">
              <Typography variant="body1" sx={{ fontWeight: 700 }}>
                Name You Entered:
              </Typography>
              <Typography variant="body2" className="text-color-3">
                {misMatchCompanyName?.signUp}
              </Typography>
            </div>

            <div className="mt-6">
              <Typography variant="body1" sx={{ fontWeight: 700 }}>
                Name On The PAN:
              </Typography>
              <Typography variant="body2">
                {misMatchCompanyName?.pan}
              </Typography>
            </div>
          </div>
        </DialogContent>
        <DialogActions className="px-6 py-4">
          <Button
            variant="outlined"
            className="secondary-button"
            onClick={() => setOpenDialog(false)}
          >
            RE-ENTER PAN
          </Button>
          <LoadingButton
            loading={isVerifying}
            variant="contained"
            className="primary-button px-8"
            autoFocus
            onClick={() => VerifyPan(true)}
            loadingPosition="start"
            startIcon={<span />}
          >
            CONFIRM
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

export default PanConnect;
