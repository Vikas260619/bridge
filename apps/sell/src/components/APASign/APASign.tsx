import React, { useState, useEffect } from 'react';
import PdfViewer from '../pdf-viewer';
import {
  useParams,
  useSearchParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import {
  Box,
  Button,
  Grid,
  TextField,
  FormControl,
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
  IconButton,
  Tooltip,
} from '@mui/material';
import success from '../../assets/images/success.png';
import svgCancelTrade from '../../assets/images/payment-mandate/cancel-trade.svg';
import { ReactComponent as EditIcon } from '../../assets/images/payment-mandate/edit.svg';
import { ReactComponent as DownloadIcon } from '../../assets/images/payment-mandate/download.svg';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import SCTradeSummary from '../SelectContract/SCTradeSummary/SCTradeSummary';
import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';
import SuccessToast from '../../components/SuccessToast';
import info from '../../assets/images/info.png';
import ErrorToast from '../ErrorToast';

import {
  namedOperations,
  useGetCompanyQuery,
  useUserTradesLazyQuery,
} from '@bridgeup/data-access/hooks/company/company.hooks';

import {
  useGetNachMandatePropertiesLazyQuery,
  useUpdateTradeStatusMutation,
} from '@bridgeup/data-access/hooks/company/place-trade.hooks';

import {
  usePreviewApaMutationMutation,
  useGenerateApaMutationMutation,
} from '@bridgeup/data-access/hooks/company/apa-signing.hooks';
import { useGenerateFileDownloadUrlLazyQuery } from '@bridgeup/data-access/hooks/company/file-upload.hooks';

import './APASign.scss';

const APASign: React.FC = () => {
  const params = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    signerName: '',
    signerDesignation: '',
    companyAuthorizedId: '',
    companyContact: '',
    signerAddress: '',
  });
  const [formError, setFormError] = useState({
    signerName: '',
    signerDesignation: '',
    companyAuthorizedId: '',
    companyContact: '',
    signerAddress: '',
  });
  const [searchParams, setSearchParams] = useSearchParams();
  const [userName, setUserName] = useState<string>('');
  const [availableARR, setAvailableARR] = useState<string>('');
  const [totalOfferAmt, setTotalOfferAmt] = useState<number>(0);
  const [dealId, setDealId] = useState<number | null>(null);
  const [tradeId, setTradeId] = useState<number | null>(null);
  const [dealClosure, setDealClosure] = useState<string | null>(null);
  const [bidPrice, setBidPrice] = useState<number | null>(null);
  const [userTradeSub, setUserTradeSub] = useState<number[] | null>(null);
  const [tradeStatus, setTradeStatus] = useState('');
  const [nachMandateData, setNachMandateData] = useState<any>(null);

  const [seconds, setSeconds] = React.useState(5);
  const [pdfUrl, setPdfUrl] = useState('');
  const [isDownloadFile, setIsDownloadFile] = useState(false);
  const [signingUrl, setSigningUrl] = useState('');
  const [showRedirectDigiSign, setShowRedirectDigiSign] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);
  const [isEditBankDetails, setIsEditBankDetails] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [fileId, setFileId] = useState<number | null>(null);
  const [isAPAPreviewed, setIsAPAPreviewed] = useState(true);
  const [signedSuccess, setSignedSuccess] = useState(false);

  const [
    generateAPA,
    { data: generateAPAData, loading: generateAPADataLoading },
  ] = useGenerateApaMutationMutation({
    refetchQueries: [namedOperations.Query.getCompany],
  });
  const [previewAPA, { data: previewAPAData, loading: previewAPADataLoading }] =
    usePreviewApaMutationMutation({
      refetchQueries: [namedOperations.Query.getCompany],
    });
  const [
    getFileDownloadUrl,
    { data: fileDownloadUrl, loading: fileDownloadUrlLoading },
  ] = useGenerateFileDownloadUrlLazyQuery({
    fetchPolicy: 'no-cache',
    notifyOnNetworkStatusChange: true,
  });
  const [getUserTradesLazyQuery, { data: userTradeSubscriptionsData }] =
    useUserTradesLazyQuery();
  const { data: companyData, loading: companyDataLoading } = useGetCompanyQuery(
    {
      fetchPolicy: 'no-cache',
    }
  );
  const [
    getNachMandateProperties,
    { data: nachMandateProperties, loading: nachMandatePropertiesLoading },
  ] = useGetNachMandatePropertiesLazyQuery({
    fetchPolicy: 'no-cache',
  });

  const [
    changeTradeStatus,
    { data: changeTradeStatusData, loading: changeTradeStatusLoading },
  ] = useUpdateTradeStatusMutation({
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    if (params && params.id) {
      setTradeId(Number(params.id));
    }
  }, [params]);

  useEffect(() => {
    if (
      fileDownloadUrl &&
      fileDownloadUrl.generateFileRegistryDownloadURL?.download_url
    ) {
      if (!pdfUrl) {
        setPdfUrl(
          fileDownloadUrl.generateFileRegistryDownloadURL?.download_url
        );
      }

      if (isDownloadFile) {
        const link = document.createElement('a');
        link.href =
          fileDownloadUrl.generateFileRegistryDownloadURL?.download_url;
        link.setAttribute('download', `FileName.pdf`);
        document.body.appendChild(link);
        link.click();
        if (link && link.parentNode) {
          link.parentNode.removeChild(link);
        }

        setIsDownloadFile(false);
      }
    }
  }, [fileDownloadUrl]);

  useEffect(() => {
    if (
      nachMandateProperties &&
      nachMandateProperties.getNachMandateProperties
    ) {
      setNachMandateData(nachMandateProperties.getNachMandateProperties);
    }
  }, [nachMandateProperties]);

  useEffect(() => {
    if (
      userTradeSubscriptionsData &&
      userTradeSubscriptionsData.trade_subscription
    ) {
      const subIds = userTradeSubscriptionsData.trade_subscription.map(
        (sub) => sub.subscription_id
      );
      setUserTradeSub(subIds);
    }
  }, [userTradeSubscriptionsData]);

  useEffect(() => {
    if (searchParams.get('status') === 'success') {
      setSignedSuccess(true);
      changeTradeStatus({
        variables: {
          status: 'APA_IN_REVIEW',
          where: {
            status: {
              _eq: 'APA_GENERATED',
            },
          },
        },
      });
    } else if (
      ['failure', 'cancel'].includes(searchParams.get('status') || '')
    ) {
      setErrorMessage('APA Generation is failed. Please try again.');
    }
  }, [location]);

  useEffect(() => {
    if (
      companyData &&
      companyData.company[0].deals.length &&
      companyData.company[0].deals[0].bids[0].price
    ) {
      const localData = companyData.company[0];
      const localDealData = companyData.company[0].deals[0];
      const inputs = localDealData.trades[0].signing_inputs;

      setDealId(localDealData.id);
      setTradeId(localDealData.trades[0].id);
      setUserName(localData.name);
      setDealClosure(localDealData.deal_expiry);
      setAvailableARR(localDealData.company_score.arr);
      setBidPrice(localDealData.bids[0].price);
      setTradeStatus(localDealData.trades[0].status);
      setForm({
        signerName: inputs?.c_signer_name || '',
        signerDesignation: inputs?.c_signer_designation || '',
        companyAuthorizedId: inputs?.c_auth_id || '',
        companyContact: inputs?.c_signer_phone || '',
        signerAddress: inputs?.c_auth_addr || '',
      });
      setSigningUrl(inputs?.signing_link || '');
      setIsAPAPreviewed(inputs?.c_signer_name?.length > 0);

      const fileRegistryId =
        localDealData.trades[0].apa_signed_file_id ||
        localDealData.trades[0].apa_generated_file_id ||
        null;

      setFileId(fileRegistryId);

      if (
        [
          'APA_COMPANY_SIGNED',
          'APA_IN_REVIEW',
          'APA_INVESTOR_SIGNED',
          'PAYOUT_DISBURSED',
        ].includes(localDealData.trades[0].status)
      ) {
        setSignedSuccess(true);
      }

      if (tradeId) {
        getNachMandateProperties({
          variables: {
            tradeId,
          },
        });
      }

      if (
        ['PAUSED', 'CLOSED'].includes(localDealData.status || '') &&
        tradeId
      ) {
        getUserTradesLazyQuery({
          variables: {
            trade_id: tradeId,
          },
        });
        setTotalOfferAmt(localDealData.trades[0].payout_value);
      }
    }
  }, [companyData]);

  useEffect(() => {
    if (fileId) {
      getFileDownloadUrl({
        variables: {
          fileId: fileId,
        },
      });
    }
  }, [fileId]);

  const isFormValid = () => {
    const errorObj = {
      signerName: '',
      signerDesignation: '',
      companyAuthorizedId: '',
      companyContact: '',
      signerAddress: '',
    };
    let isValid = true;
    if (!form.signerName) {
      errorObj.signerName = 'Please enter valid Name';
      isValid = false;
    }
    if (!form.signerDesignation) {
      errorObj.signerDesignation = 'Please enter valid Designation';
      isValid = false;
    }
    if (!form.companyAuthorizedId) {
      errorObj.companyAuthorizedId = 'Please enter valid Authorized Id';
      isValid = false;
    }
    if (!form.companyContact) {
      errorObj.companyContact = 'Please enter valid company contact';
      isValid = false;
    }
    if (!form.signerAddress) {
      errorObj.signerAddress = 'Please enter valid Address';
      isValid = false;
    }

    setFormError(errorObj);
    return isValid;
  };

  const handleGenerateAPA = () => {
    if (!isFormValid()) return;

    if (tradeId) {
      if (['MANDATE_SIGNED', 'MANDATE_IN_REVIEW'].includes(tradeStatus)) {
        previewAPA({
          variables: {
            args: {
              trade_id: tradeId,
              signing_inputs: {
                c_auth_addr: form.signerAddress,
                c_auth_id: form.companyAuthorizedId,
                c_signer_designation: form.signerDesignation,
                c_signer_name: form.signerName,
                c_signer_phone: form.companyContact,
              },
            },
          },
        }).then((res) => {
          if (res?.data && res.data?.previewAPA) {
            const generatedAPA = res.data.previewAPA;

            setPdfUrl(generatedAPA.url || '');
            setFileId(generatedAPA.file_registry_id || null);
            setIsEditBankDetails(false);
            setIsAPAPreviewed(true);
            setTimeout(() => {
              setSuccessMessage(true);
            }, 2000);
          }
        });
      } else {
        generateAPA({
          variables: {
            args: {
              trade_id: tradeId,
              signing_inputs: {
                c_auth_addr: form.signerAddress,
                c_auth_id: form.companyAuthorizedId,
                c_signer_designation: form.signerDesignation,
                c_signer_name: form.signerName,
                c_signer_phone: form.companyContact,
              },
            },
          },
        }).then((res) => {
          if (res?.data && res.data?.generateAPA) {
            const generatedAPA = res.data.generateAPA;
            setSigningUrl(generatedAPA.signing_link || '');
            setPdfUrl(generatedAPA.url || '');
            setFileId(generatedAPA.file_registry_id || null);
            setIsEditBankDetails(false);
            setTimeout(() => {
              setSuccessMessage(true);
            }, 2000);
          }
        });
      }
    }
  };

  const startCount = (value: number) => {
    if (seconds > 0) {
      setTimeout(() => {
        setSeconds(value - 1);
        startCount(value - 1);
      }, 1000);
    }
  };

  const handleSignAgreement = () => {
    setShowRedirectDigiSign(true);
    startCount(5);
    setTimeout(() => {
      window.location.href = signingUrl;
      // window.location.href = signingUrl.replace(
      //   'https://app.devbridgeup.com',
      //   'http://localhost:4200'
      // );
    }, 5000);
  };

  const validateField = (type: string, value: string) => {
    switch (type) {
      case 'Name':
        // return /^[A-Za-z]\d/.test(value)
        return true;
      case 'Integer':
        return /^\d+$/.test(value);
      case 'Number':
        return /^\d+$/.test(value) && value.length >= 10;
      case 'IFSC':
        return /^[A-Za-z]{4}\d{7}$/.test(value);
    }
  };

  const updateField = (
    key: string,
    value: string,

    errorMess: string
  ) => {
    setForm({
      ...form,
      [key]: value,
    });

    setFormError({
      ...formError,
      [key]: errorMess,
    });
  };

  const areFieldsValid = () => {
    return (
      form.signerName &&
      form.signerDesignation &&
      form.signerAddress &&
      form.companyContact &&
      form.companyAuthorizedId &&
      validateField('Name', form.signerName) &&
      validateField('Name', form.signerDesignation) &&
      validateField('Name', form.signerAddress) &&
      validateField('Name', form.companyAuthorizedId) &&
      validateField('Number', form.companyContact)
    );
  };

  return (
    <div className="w-full h-auto apa-sign">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8} className="px-14 py-4 pm-left-grid">
            <div className="px-4 py-4">
              {errorMessage && <ErrorToast message={errorMessage} />}
              {successMessage && (
                <SuccessToast message="Asset purchase agreement succesfully generated" />
              )}
              {signedSuccess && (
                <div className="w-full px-6 py-4 contracts-under-review-text">
                  <img
                    src={info}
                    alt="logo"
                    style={{
                      display: 'inline-block',
                      verticalAlign: 'middle',
                    }}
                    className="mr-4 w-6 h-6 cursor-pointer"
                  />
                  Asset Purchase Agreement has been signed by you successfully
                </div>
              )}

              <div>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-24 text-bold mt-2">
                    Assest Purchase Agreement
                  </div>
                  {/* <div className="flex items-center text-14 text-bold cursor-pointer cancel-trade-text">
                    <img src={svgCancelTrade} alt="logo" className="mr-2" />
                    CANCEL TRADE
                  </div> */}
                  {!companyDataLoading && (
                    <div className="flex items-center text-14 text-bold  color-secondary cursor-pointer">
                      <IconButton
                        onClick={() => {
                          if (fileId) {
                            getFileDownloadUrl({
                              variables: {
                                fileId,
                              },
                            });
                            setIsDownloadFile(true);
                          }
                        }}
                        disabled={fileDownloadUrlLoading}
                      >
                        {fileDownloadUrlLoading && (
                          <CircularProgress
                            size={14}
                            className="mr-2"
                          ></CircularProgress>
                        )}
                        <Tooltip title="Download Asset Purchase Agreement">
                          <DownloadIcon></DownloadIcon>
                        </Tooltip>
                      </IconButton>
                      {!signedSuccess && (
                        <IconButton
                          onClick={() => {
                            setIsEditBankDetails(true);
                          }}
                        >
                          <Tooltip title="Edit Signer’s Details">
                            <EditIcon></EditIcon>
                          </Tooltip>
                        </IconButton>
                      )}
                    </div>
                  )}
                </div>
                <div className="text-14 mt-2 mb-5 mandate-desc">
                  Review and sign the asset purchase agreement to receive the
                  payout amount in your bank account.
                </div>
              </div>
              <div>
                {pdfUrl ? (
                  <div>
                    <PdfViewer file={pdfUrl}></PdfViewer>
                  </div>
                ) : (
                  <div className="flex justify-center items-center">
                    <CircularProgress size="1rem" />
                  </div>
                )}
              </div>
            </div>
          </Grid>
          <Grid item xs={4} className="px-10 pm-right-grid">
            <div className="bg-black">
              <SCTradeSummary
                isPaymentMandate={true}
                totalOfferAmt={totalOfferAmt || 0}
                totalNoOfSelectedContracts={userTradeSub?.length || 0}
                placeTradeBtnDisable={false}
                clearSelectionBtnDisable={false}
                availableARR={availableARR || ''}
                initiateTradeResponseLoading={false}
                isTradingFinished={false}
                setClearAll={() => null}
                bidPrice={bidPrice || 0}
                dealClosure={dealClosure || ''}
                monthlyAmount={nachMandateData?.monthly_emi || 0}
                handleInitiateTrade={() => null}
                handleClearSelection={() => null}
              />

              <div className="mt-4">
                {!signedSuccess && (
                  <Button
                    fullWidth
                    size="large"
                    color="primary"
                    variant="contained"
                    disableElevation
                    disabled={!signingUrl}
                    onClick={handleSignAgreement}
                    className={`button primary-button`}
                  >
                    SIGN
                  </Button>
                )}
              </div>
            </div>
          </Grid>

          <Dialog
            open={
              !isAPAPreviewed ||
              showRedirectDigiSign ||
              isEditBankDetails ||
              (tradeStatus === 'MANDATE_SUCCESS' && !signingUrl)
            }
            onClose={() => null}
            aria-labelledby="responsive-dialog-title"
            maxWidth={'md'}
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
                <Grid
                  className="flex flex-nowrap text-24 text-bold"
                  item
                  sm={11}
                  xs={12}
                >
                  {showRedirectDigiSign
                    ? 'Redirecting you to DigiSign for electronic signature. '
                    : 'Generate Assest Purchase Agreement'}
                </Grid>
                {isEditBankDetails && (
                  <Grid item sm={1} xs={12}>
                    <CloseOutlinedIcon
                      onClick={() => setIsEditBankDetails(false)}
                      style={{ float: 'right', cursor: 'pointer' }}
                    ></CloseOutlinedIcon>
                  </Grid>
                )}
              </Grid>
            </DialogTitle>
            <DialogContent className="p-0 mr-6 ml-6 mb-8">
              <div className="mt-4 mr-12 text-14 text-regular text-color-3">
                <div className="mr-12">
                  <div className="mr-12">
                    <div className="mr-12">
                      {showRedirectDigiSign
                        ? 'You will be redirected back to BridgeUp after successful signature'
                        : ' Please input the required fields to generate the Asset Purchase Agreement.'}
                    </div>
                  </div>
                </div>
              </div>
              {!showRedirectDigiSign && (
                <>
                  <div className="flex items-center px-0 py-2">
                    <Grid item sm={6} xs={12} className="pr-2 py-2">
                      <FormControl
                        fullWidth
                        variant="filled"
                        className="input-fields"
                      >
                        <CustomInput
                          variant="filled"
                          label="Signer name"
                          onBlur={() => null}
                          error={formError.signerName}
                          helperText={formError.signerName}
                          value={form.signerName || ''}
                          onChange={(e) => {
                            const b = validateField('Name', e.target.value);
                            updateField(
                              'signerName',
                              e.target.value,
                              b ? '' : 'Please enter valid Name'
                            );
                          }}
                          className={`apa-dropdown ${
                            !form.signerName && 'empty'
                          } ${formError.signerName && 'error'}`}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item sm={6} xs={12} className="pl-2 py-2">
                      <FormControl
                        fullWidth
                        variant="filled"
                        className="input-fields"
                      >
                        <CustomInput
                          variant="filled"
                          label="Signer designation"
                          onBlur={() => null}
                          error={formError.signerDesignation}
                          helperText={formError.signerDesignation}
                          value={form.signerDesignation || ''}
                          onChange={(e) => {
                            const b = validateField('Name', e.target.value);
                            updateField(
                              'signerDesignation',
                              e.target.value,
                              b ? '' : 'Please enter valid Designation'
                            );
                          }}
                          className={`apa-dropdown ${
                            !form.signerDesignation && 'empty'
                          } ${formError.signerDesignation && 'error'}`}
                        />
                      </FormControl>
                    </Grid>
                  </div>
                  <div className="flex items-center px-0 py-2">
                    <Grid item sm={6} xs={12} className="pr-2 py-2">
                      <FormControl
                        fullWidth
                        variant="filled"
                        className="input-fields"
                      >
                        <CustomInput
                          variant="filled"
                          label="Signer’s Business Email ID"
                          onBlur={() => null}
                          error={formError.companyAuthorizedId}
                          helperText={formError.companyAuthorizedId}
                          value={form.companyAuthorizedId || ''}
                          onChange={(e) => {
                            const b = validateField('Name', e.target.value);
                            updateField(
                              'companyAuthorizedId',
                              e.target.value,
                              b ? '' : 'Please enter valid Id'
                            );
                          }}
                          className={`apa-dropdown ${
                            !form.companyAuthorizedId && 'empty'
                          } ${formError.companyAuthorizedId && 'error'}`}
                        />
                      </FormControl>
                    </Grid>
                    <Grid item sm={6} xs={12} className="pl-2 py-2">
                      <FormControl
                        fullWidth
                        variant="filled"
                        className="input-fields"
                      >
                        <CustomInput
                          variant="filled"
                          label="Signer Phone Number"
                          onBlur={() => null}
                          error={formError.companyContact}
                          helperText={formError.companyContact}
                          value={form.companyContact || ''}
                          onChange={(e) => {
                            const b = validateField('Number', e.target.value);
                            updateField(
                              'companyContact',
                              e.target.value,
                              b ? '' : 'Please enter valid Contact Number'
                            );
                          }}
                          className={`apa-dropdown ${
                            !form.companyContact && 'empty'
                          } ${formError.companyContact && 'error'}`}
                        />
                      </FormControl>
                    </Grid>
                  </div>
                  <div className="flex items-center px-0 py-2">
                    <Grid item sm={12} xs={12} className="py-2">
                      <FormControl
                        fullWidth
                        variant="filled"
                        className="input-fields"
                      >
                        <CustomInput
                          variant="filled"
                          label="Signer City"
                          onBlur={() => null}
                          error={formError.signerAddress}
                          helperText={formError.signerAddress}
                          value={form.signerAddress || ''}
                          onChange={(e) => {
                            const b = validateField('Name', e.target.value);
                            updateField(
                              'signerAddress',
                              e.target.value,
                              b ? '' : 'Please enter valid City'
                            );
                          }}
                          className={`apa-dropdown ${
                            !form.signerAddress && 'empty'
                          } ${formError.signerAddress && 'error'}`}
                        />
                      </FormControl>
                    </Grid>
                  </div>
                </>
              )}

              <div className="flex justify-end">
                {showRedirectDigiSign ? (
                  <div className="w-full flex justify-end mt-10 ">
                    <Button
                      className="button primary-button pm-button"
                      onClick={() => null}
                      color="primary"
                      variant="contained"
                      disableElevation
                    >
                      REDIRECTING IN
                      <span className="ml-3" style={{ minWidth: '10px' }}>
                        {seconds}
                      </span>
                    </Button>
                  </div>
                ) : (
                  <div className="btn-holders mt-4 flex justify-end">
                    {isEditBankDetails && (
                      <CustomButton
                        onClick={() => setIsEditBankDetails(false)}
                        fullWidth={true}
                        buttonClassName={'secondary-button'}
                        variant="outlined"
                        style={{ maxWidth: '150px', marginRight: '15px' }}
                      >
                        CANCEL
                      </CustomButton>
                    )}
                    <Button
                      onClick={handleGenerateAPA}
                      disabled={
                        !areFieldsValid() ||
                        generateAPADataLoading ||
                        previewAPADataLoading
                      }
                      color="primary"
                      fullWidth={true}
                      variant="contained"
                      disableElevation
                      className={`button ${
                        !formError.signerAddress
                          ? 'primary-button'
                          : 'apa-button-disabled'
                      } apa-btn`}
                    >
                      GENERATE
                      {(generateAPADataLoading || previewAPADataLoading) && (
                        <CircularProgress
                          size={20}
                          color="primary"
                          className="ml-2"
                        />
                      )}
                    </Button>
                  </div>
                )}
              </div>
            </DialogContent>
          </Dialog>
        </Grid>
      </Box>
      <div className="flex justify-start btn-holders px-14 mb-14 mt-4">
        {/* <CustomButton
          variant="outlined"
          fullWidth={true}
          // disabled={true}
          onClick={() => null}
          style={{ maxWidth: '250px' }}
          buttonClassName={'secondary-button'}
          customClassName="mr-8"
        >
          COMPLETE LATER
        </CustomButton> */}
        {signedSuccess ? (
          <Button
            fullWidth
            size="large"
            color="primary"
            variant="contained"
            disableElevation
            // disabled={isLoading}
            onClick={() => navigate('/dashboard')}
            style={{ maxWidth: '300px' }}
            className={`button primary-button apa-btn`}
          >
            GO TO Dashboard
          </Button>
        ) : (
          <Button
            fullWidth
            size="large"
            color="primary"
            variant="contained"
            disableElevation
            disabled={!signingUrl}
            onClick={handleSignAgreement}
            style={{ maxWidth: '200px' }}
            className={`button primary-button apa-btn`}
          >
            SIGN
          </Button>
        )}
      </div>
    </div>
  );
};

export default APASign;
