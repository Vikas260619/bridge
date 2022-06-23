import React, { useState, useEffect } from 'react';
import { Link as RouterLink, useNavigate, useLocation } from 'react-router-dom';
import { useParams, useSearchParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import axios from 'axios';
import {
  Box,
  Grid,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  FormControl,
  CircularProgress,
} from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

import SuccessToast from '../../components/SuccessToast';
import SCTradeSummary from '../SelectContract/SCTradeSummary/SCTradeSummary';
import svgCancelTrade from '../../assets/images/payment-mandate/cancel-trade.svg';
import svgCalender from '../../assets/images/payment-mandate/calender.svg';
import svgSwap from '../../assets/images/payment-mandate/swap.svg';
import questionMark from '../../assets/images/payment-mandate/questionIcon.svg';
import svgWallet from '../../assets/images/payment-mandate/wallet.svg';
import svgInfo from '../../assets/images/info.png';
import CustomDropDown from '../CustomDropDown/CustomDropDown';
import CustomInput from '../CustomInput/CustomInput';
import CustomButton from '../CustomButton/CustomButton';
import { AccountSetupSkeleton } from '../../components/AccountSetupSkeleton';
import { Fileupload } from '../../components/Fileupload';
import { monthNames } from '../../utils/constants';
import { TRADE_PAYMENT_MANDATE_NEXT } from './../../utils/constants';

import PMDetails from './PMDetails/PMDetails';
import PMDocument from './PMDocument/PMDocument';
import ErrorToast from '../ErrorToast';
import PMPreview from './PMPreview/PMPreview';

import {
  useGetCompanyQuery,
  useUserAccountLazyQuery,
  useUserTradesLazyQuery,
  namedOperations,
} from '@bridgeup/data-access/hooks/company/company.hooks';
import { useGenerateFileDownloadUrlLazyQuery } from '@bridgeup/data-access/hooks/company/file-upload.hooks';
import {
  useDownloadPrefilledNachMandateLazyQuery,
  useGetNachMandatePropertiesLazyQuery,
  useUploadSignedNachMandateMutation,
  useSubmitSignedNachMandateMutation,
  useUpdateTradeStatusMutation,
  useSearchIfscLazyQuery,
  useRegisterMandateMutation,
} from '@bridgeup/data-access/hooks/company/place-trade.hooks';

import './PaymentMandate.scss';

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: '#2B3951',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#2B3951',
    padding: '10px',
    fontSize: '12px',
    fontFamily: 'Raleway',
  },
}));

const PaymentMandate = () => {
  const params = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const signatures = [
    {
      id: 1,
      name: 'Single Signatory',
    },
    {
      id: 2,
      name: 'Joint Signatory',
    },
  ];

  const [form, setForm] = useState({
    accNo: '',
    accType: '',
    accHolderName: '',
    bankName: '',
    bankIfsc: '',
    signatures: signatures[0],
  });
  const [shallowCopyForm, setShallowCopyForm] = useState<any>();
  let [formError, setFormError] = useState({
    accNo: false,
    accNoMes: '',
    accType: false,
    accTypeMes: '',
    accHolderName: false,
    accHolderNameMes: '',
    bankName: false,
    bankNameMes: '',
    bankIfsc: false,
    bankIfscMes: '',
    signatures: false,
    signaturesMes: '',
  });
  const [selectedFile, setSelectedFile] = useState<any>();

  const [selectedAcc, setSelectedAcc] = useState<any | null>(null);
  const [userName, setUserName] = useState<string>('');
  const [availableARR, setAvailableARR] = useState<string>('');
  const [totalOfferAmt, setTotalOfferAmt] = useState<number>(0);
  const [dealId, setDealId] = useState<number | null>(null);
  const [tradeId, setTradeId] = useState<number | null>(null);
  const [dealClosure, setDealClosure] = useState<string | null>(null);
  const [bidPrice, setBidPrice] = useState<number | null>(null);
  const [userTradeSub, setUserTradeSub] = useState<number[] | null>(null);
  const [userBankAccounts, setUserBankAccounts] = useState<any[] | null>(null);
  const [nachMandateData, setNachMandateData] = useState<any>(null);
  const [signedMandateFileId, setSignedMandateFileId] = useState<any>(null);
  const [seconds, setSeconds] = React.useState(5);
  const [pdfUrl, setPdfUrl] = useState('');
  const [isDownloadFile, setIsDownloadFile] = useState(false);
  const [openPdf, setOpenPdf] = useState(false);

  const [showInstructions, setShowInstructions] = useState(false);
  const [showFileUpload, setShowFileUpload] = useState(false);
  const [showRedirectDigio, setShowRedirectDigio] = useState(false);
  const [isEditBankDetails, setIsEditBankDetails] = useState(false);
  const [mandateAcc, setMandateAcc] = useState<any>(null);

  const [tradeStatus, setTradeStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState(false);
  const [isPaperNachInReview, setIsPaperNachInReview] =
    useState<boolean>(false);
  const [isENach, setIsENach] = useState(false);
  const [uploadInProg, setUploadInProg] = useState(false);
  const [mandateReviewData, setMandateReviewData] = useState<any>(null);

  const [allowNext, setAllowNext] = useState(false);

  const { data: companyData, loading: companyDataLoading } = useGetCompanyQuery(
    {
      fetchPolicy: 'no-cache',
    }
  );
  const [
    getDownloadNachMandate,
    { data: nachDownloadData, loading: nachDownloadDataLoading },
  ] = useDownloadPrefilledNachMandateLazyQuery({
    notifyOnNetworkStatusChange: true,
  });

  const [
    getSignedMandateUrl,
    { data: signedMandateUrl, loading: signedMandateUrlLoading },
  ] = useGenerateFileDownloadUrlLazyQuery({
    notifyOnNetworkStatusChange: true,
  });

  const [
    getNachMandateProperties,
    { data: nachMandateProperties, loading: nachMandatePropertiesLoading },
  ] = useGetNachMandatePropertiesLazyQuery({
    fetchPolicy: 'no-cache',
  });
  const [
    getUserAccount,
    { data: userAccountData, loading: userAccountLoading },
  ] = useUserAccountLazyQuery();
  const [
    getMandateUploadUrl,
    { data: mandateUploadUrl, loading: mandateUploadUrlLoading },
  ] = useUploadSignedNachMandateMutation();
  const [
    submitMandate,
    { data: submitMandateData, loading: submitMandateDataLoading },
  ] = useSubmitSignedNachMandateMutation({
    refetchQueries: [namedOperations.Query.getCompany],
  });
  const [
    changeTradeStatus,
    { data: changeTradeStatusData, loading: changeTradeStatusLoading },
  ] = useUpdateTradeStatusMutation();

  const [
    validateIfsc,
    {
      data: validateIfscData,
      loading: validateIfscLoading,
      error: validateIfscError,
    },
  ] = useSearchIfscLazyQuery({
    fetchPolicy: 'no-cache',
  });
  const [getUserTradesLazyQuery, { data: userTradeSubscriptionsData }] =
    useUserTradesLazyQuery({
      fetchPolicy: 'no-cache',
    });
  const [registerMandate, { loading: registerMandateMutLoading }] =
    useRegisterMandateMutation({
      refetchQueries: [namedOperations.Query.getCompany],
    });

  useEffect(() => {
    if (selectedAcc) {
      userBankAccounts?.map((acc) => {
        if (acc.id === selectedAcc.id) {
          const data = {
            accNo: acc.accNo,
            accType: acc.accType,
            accHolderName: acc.accHolderName,
            bankName: acc.bankName,
            bankIfsc: form.bankIfsc ? form.bankIfsc : acc.bankIfsc,
            signatures: {
              id: 1,
              name: 'Single Signatory',
            },
          };
          setForm(data);
          setShallowCopyForm(data);
        }
      });
    }
  }, [selectedAcc]);

  useEffect(() => {
    if (
      signedMandateUrl &&
      signedMandateUrl.generateFileRegistryDownloadURL &&
      signedMandateUrl.generateFileRegistryDownloadURL?.download_url
    ) {
      setPdfUrl(signedMandateUrl.generateFileRegistryDownloadURL?.download_url);
    }
  }, [signedMandateUrl]);

  useEffect(() => {
    if (['MANDATE_REGISTERED', 'MANDATE_SUCCESS'].includes(tradeStatus)) {
      if (searchParams.get('status') === 'success') {
        setIsPaperNachInReview(true);
        mutateStatus();
        setAllowNext(true);
      }
      if (['failure', 'cancel'].includes(searchParams.get('status') || '')) {
        setErrorMessage('Mandate Generation failed. Please try again.');
      }
    }

    if (tradeStatus === 'MANDATE_SIGNED') {
      setIsPaperNachInReview(true);
    }

    setAllowNext(TRADE_PAYMENT_MANDATE_NEXT.includes(tradeStatus));
  }, [tradeStatus]);

  useEffect(() => {
    if (params && params.id) {
      setTradeId(Number(params.id));
    }
  }, [params]);
  useEffect(() => {
    if (
      nachDownloadData &&
      nachDownloadData.downloadPrefilledNachMandate?.url
    ) {
      if (isDownloadFile) {
        const link = document.createElement('a');
        link.href = nachDownloadData.downloadPrefilledNachMandate?.url;
        link.setAttribute('download', `FileName.pdf`);
        document.body.appendChild(link);
        link.click();
        if (link && link.parentNode) {
          link.parentNode.removeChild(link);
        }

        setIsDownloadFile(false);
      }
    }
  }, [nachDownloadData]);

  useEffect(() => {
    if (userAccountData && userAccountData.account) {
      const mappedBankAccount = userAccountData.account
        .filter((acc) =>
          ['CASH_CREDIT', 'CURRENT'].includes(acc.account_type || '')
        )
        .map((acc) => {
          return {
            id: acc.id,
            isPrimary: acc.is_primary,
            accNo: acc.account_no,
            accHolderName: acc.name,
            accType: acc.account_type,
            bankId: acc.ref_bank.id,
            bankName: acc.ref_bank.name,
            bankIfsc: acc.ifsc_code,
          };
        });

      setUserBankAccounts(mappedBankAccount);
    }
  }, [userAccountData]);

  useEffect(() => {
    if (
      nachMandateProperties &&
      nachMandateProperties.getNachMandateProperties
    ) {
      setNachMandateData(nachMandateProperties.getNachMandateProperties);
    }
  }, [nachMandateProperties]);

  useEffect(() => {
    if (userBankAccounts && !selectedAcc) {
      const filteredAcc = userBankAccounts.find((acc) => acc.isPrimary);
      setSelectedAcc(filteredAcc);
    }
  }, [userBankAccounts]);

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
    if (validateIfscData) {
      if (validateIfscData.searchIFSC) {
        if (validateIfscData.searchIFSC.bank.id == selectedAcc.bankId) {
          updateField('bankIfsc', form.bankIfsc, 'bankIfscMes', '');
        } else {
          updateField(
            'bankIfsc',
            form.bankIfsc,
            'bankIfscMes',
            'IFSC code is not matched with the selected bank'
          );
        }
      }
    }
  }, [validateIfscData]);

  useEffect(() => {
    if (validateIfscError) {
      updateField(
        'bankIfsc',
        form.bankIfsc,
        'bankIfscMes',
        validateIfscError.message
      );
    }
  }, [validateIfscError]);

  useEffect(() => {
    if (
      companyData &&
      companyData.company[0].deals.length &&
      companyData.company[0].deals[0].bids[0].price
    ) {
      const localData = companyData.company[0];
      const localDealData = companyData.company[0].deals[0];

      setDealId(localDealData.id);
      setTradeId(localDealData.trades[0]?.id);
      setUserName(localData.name);
      setDealClosure(localDealData.deal_expiry);
      setAvailableARR(localDealData.company_score.arr);
      setBidPrice(localDealData.bids[0].price);
      setTradeStatus(localDealData.trades[0]?.status);
      if (localDealData.trades[0]?.mandate_account) {
        setIsENach(localDealData.trades[0]?.mandate_type === 'api');
        setMandateAcc(localDealData.trades[0]?.mandate_account);
      }

      if (localDealData.trades[0]?.signed_mandate_file_id) {
        setSignedMandateFileId(localDealData.trades[0]?.signed_mandate_file_id);
      }

      if (tradeId) {
        getNachMandateProperties({
          variables: {
            tradeId,
          },
        });
      }

      if (localData.id) {
        getUserAccount({
          variables: {
            where: {
              tenant_type: {
                _eq: 'COMPANY',
              },
              tenant_id: {
                _eq: localData.id,
              },
            },
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
        setTotalOfferAmt(localDealData.trades[0]?.payout_value);
      }
    }
  }, [companyData]);

  const handleGenerateMandate = () => {
    if (tradeId) {
      registerMandate({
        variables: {
          args: {
            account_id: selectedAcc.id,
            customer_bank_ifsc: form.bankIfsc,
            customer_bank_acct_number: form.accNo,
            multi_signatory: form.signatures.id == 2,
            trade_id: tradeId,
          },
        },
      }).then((res) => {
        if (res.data && res.data?.registerNachMandate?.url) {
          // E-Nach
          setShowRedirectDigio(true);
          startCount(5);
          const url = res.data.registerNachMandate?.url || '';
          setTimeout(() => {
            window.location.href = url;
            // window.location.href = url.replace(
            //   'https://app.devbridgeup.com',
            //   'http://localhost:4200'
            // );
          }, 2000);
          setErrorMessage('');
          setShowFileUpload(false);
        } else if (res.data && !res.data.registerNachMandate?.url) {
          // Paper-Nach
          setIsEditBankDetails(false);
          setErrorMessage('');
          navigate({
            pathname: location.pathname,
            search: '',
          });
        } else if (res?.errors) {
          setErrorMessage(res?.errors[0].message);
        }
      });
    }
  };

  const updateField = (
    key: string,
    value: string,
    errorKey: string,
    errorMess: string
  ) => {
    setForm({
      ...form,
      [key]: key === 'bankIfsc' ? value.toUpperCase() : value,
    });
    setFormError({
      ...formError,
      [key]: errorMess.length !== 0,
      [errorKey]: errorMess,
    });
  };

  const onFileupload = (localFile: any) => {
    if (tradeId && localFile) {
      var reader = new FileReader();
      var url = reader.readAsDataURL(localFile);

      reader.onloadend = (e) => {
        setMandateReviewData(reader.result);
        setSelectedFile(localFile);
      };
    }
  };

  const validateField = (type: string, value: string) => {
    switch (type) {
      case 'Name':
        // return /^[A-Za-z]\d/.test(value)
        return true;
      case 'Number':
        return /^\d+$/.test(value);
      case 'IFSC':
        return /^[A-Za-z]{4}\d{7}$/.test(value);
    }
  };

  const areFieldsValid = () => {
    return (
      form.accNo &&
      form.accHolderName &&
      form.bankIfsc &&
      validateField('Number', form.accNo) &&
      validateField('Name', form.accHolderName) &&
      !formError.bankIfsc
    );
  };

  const structurizeDate = (data: string) => {
    const date = data.slice(0, 2);
    const month = monthNames[Number(data.slice(4, 5)) - 1];
    const year = data.slice(-4, data.length);

    return date + ' ' + month + ', ' + year;
  };

  const handleDiscardChanges = () => {
    setIsEditBankDetails(false);
    setForm(shallowCopyForm);
    setFormError({
      accNo: false,
      accNoMes: '',
      accType: false,
      accTypeMes: '',
      accHolderName: false,
      accHolderNameMes: '',
      bankName: false,
      bankNameMes: '',
      bankIfsc: false,
      bankIfscMes: '',
      signatures: false,
      signaturesMes: '',
    });
  };

  const renderMandateDetails = () => {
    return (
      <>
        <div className="flex justify-start items-center w-1/3">
          <div className="flex justify-center items-center p-4 mr-4 mandate-detail-image-div">
            <img src={svgSwap} alt="logo" className="" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <div className="text-14 text-color-3">Debit Frequency</div>
            <div className="text-18 font-medium">
              Monthly
              <BootstrapTooltip title="5th of every month" placement="top">
                <img
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                  }}
                  src={svgInfo}
                  alt="logo"
                  className="ml-2 cursor-pointer w-4 h-4"
                />
              </BootstrapTooltip>
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center w-1/3">
          <div className="flex justify-center items-center p-3 mr-4 mandate-detail-image-div">
            <img src={svgCalender} alt="logo" className="" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <div className="text-14 text-color-3">Start Date</div>
            <div className="text-18 font-medium">
              {nachMandateData ? (
                structurizeDate(nachMandateData.first_collection_date)
              ) : (
                <CircularProgress size={20} />
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-start items-center w-1/3">
          <div className="flex justify-center items-center p-3 mr-4 mandate-detail-image-div">
            <img src={svgCalender} alt="logo" className="" />
          </div>
          <div className="flex flex-col justify-center items-start">
            <div className="text-14 text-color-3">End Date</div>
            <div className="text-18 font-medium">
              {nachMandateData ? (
                structurizeDate(nachMandateData.final_collection_date)
              ) : (
                <CircularProgress size={20} />
              )}
            </div>
          </div>
        </div>
      </>
    );
  };

  const renderBankDetails = () => {
    return (
      <div className="flex flex-col px-6 py-4 mb-10 payment-mandate__body">
        <AccountSetupSkeleton loading={!form.bankName}>
          <div className="my-2" style={{ borderBottom: '1px dotted #2D477B' }}>
            <div className="text-18 text-bold">Mandate Details</div>
            <div className="flex p-4 mb-10 ">{renderMandateDetails()}</div>
            <a href="./sampl.pdf"></a>
          </div>
          <div className="flex flex-col">
            <div className="mt-5 mb-1 text-18 text-bold">Bank Details</div>
            <div className="flex flex-col mb-12">
              <div className="flex justify-between py-4">
                <Grid item sm={6} xs={12} className="pr-8 pm-input-item">
                  <FormControl
                    fullWidth
                    variant="filled"
                    className="input-fields"
                  >
                    <CustomDropDown
                      id="auto-complete"
                      options={userBankAccounts || []}
                      value={selectedAcc}
                      disabled={false}
                      onChange={(e: any, value: any) => {
                        if (value) setSelectedAcc(value);
                        if (validateField('IFSC', form.bankIfsc)) {
                          validateIfsc({
                            variables: {
                              args: {
                                ifsc: form.bankIfsc,
                              },
                            },
                          });
                        }
                      }}
                      disableClearable
                      rootClass="payment-mandate-dropdown"
                      variant="filled"
                      label="Bank Name *"
                      getOptionLabel={(option: any) =>
                        `${option.bankName} - ${String(option.accNo).slice(
                          -4,
                          String(option.accNo).length
                        )}`
                      }
                    />
                  </FormControl>
                </Grid>
                <Grid item sm={6} xs={12} className="pl-8 pm-input-item">
                  <FormControl
                    fullWidth
                    variant="filled"
                    className="input-fields"
                  >
                    <CustomInput
                      onBlur={() => null}
                      error={formError.bankIfsc}
                      helperText={formError.bankIfscMes}
                      label="IFSC Code"
                      variant="filled"
                      className={
                        formError.bankIfsc
                          ? 'payment-mandate-dropdown error'
                          : 'payment-mandate-dropdown'
                      }
                      value={form.bankIfsc || ''}
                      adornment={
                        validateIfscLoading && <CircularProgress size={20} />
                      }
                      onChange={(e) => {
                        const b = validateField('IFSC', e.target.value);
                        updateField(
                          'bankIfsc',
                          e.target.value,
                          'bankIfscMes',
                          b ? '' : 'Please enter valid IFSC'
                        );
                        if (b) {
                          validateIfsc({
                            variables: {
                              args: {
                                ifsc: e.target.value,
                              },
                            },
                          });
                        }
                      }}
                    />
                  </FormControl>
                </Grid>
              </div>
              <div className="flex justify-between py-4">
                <Grid item sm={6} xs={12} className="pr-8 pm-input-item">
                  <FormControl
                    fullWidth
                    variant="filled"
                    className="input-fields"
                  >
                    <CustomInput
                      onBlur={() => null}
                      error={formError.accNo}
                      helperText={formError.accNoMes}
                      label="Account Number"
                      variant="filled"
                      className={
                        formError.accNo
                          ? 'payment-mandate-dropdown error'
                          : 'payment-mandate-dropdown'
                      }
                      value={form.accNo || ''}
                      onChange={(e) => {
                        const b = validateField('Number', e.target.value);
                        updateField(
                          'accNo',
                          b ? e.target.value : form.accNo,
                          'accNoMes',
                          b ? '' : 'Only Numbers are allowed'
                        );
                      }}
                    />
                  </FormControl>
                </Grid>
                <Grid item sm={6} xs={12} className="pl-8 pm-input-item">
                  <FormControl
                    fullWidth
                    variant="filled"
                    className="input-fields"
                  >
                    <CustomInput
                      onBlur={() => null}
                      error={formError.accType}
                      helperText={formError.accTypeMes}
                      label="Account Type"
                      variant="filled"
                      className="payment-mandate-dropdown"
                      value={form.accType || ''}
                      onChange={() => null}
                    />
                  </FormControl>
                </Grid>
              </div>
              <div className="flex justify-between py-4">
                <Grid item sm={6} xs={12} className="pr-8 pm-input-item">
                  <FormControl
                    fullWidth
                    variant="filled"
                    className="input-fields"
                  >
                    <CustomInput
                      onBlur={() => null}
                      error={formError.accHolderName}
                      helperText={formError.accHolderNameMes}
                      label="Account Holder Name"
                      variant="filled"
                      value={form.accHolderName}
                      className={
                        formError.accHolderName
                          ? 'payment-mandate-dropdown error'
                          : 'payment-mandate-dropdown'
                      }
                      onChange={() => null}
                    />
                  </FormControl>
                </Grid>
                <Grid item sm={6} xs={12} className="pl-8 flex pm-input-item">
                  <FormControl
                    fullWidth
                    variant="filled"
                    className="input-fields"
                  >
                    <CustomDropDown
                      id="auto-complete"
                      options={[
                        {
                          id: null,
                          name: "Please select “Joint” if more than one person is required to transact on your company's bank account, else select 'Single'",
                        },
                        ...signatures,
                      ]}
                      getOptionDisabled={(option) => !option.id}
                      value={form.signatures}
                      disabled={false}
                      disableClearable
                      onChange={(e: any, value: any) =>
                        setForm({
                          ...form,
                          signatures: value,
                        })
                      }
                      rootClass="payment-mandate-dropdown"
                      variant="filled"
                      label={'Banking Signatories *'}
                      getOptionLabel={(option: any) => option.name}
                    />
                  </FormControl>
                </Grid>
              </div>
            </div>
            <div className="flex justify-start">
              {isEditBankDetails && (
                <div className="btn-holders mt-10 mr-4">
                  <CustomButton
                    onClick={handleDiscardChanges}
                    fullWidth={true}
                    buttonClassName={'secondary-button'}
                    customClassName={'pm-button'}
                    variant="outlined"
                  >
                    DISCARD CHANGES
                  </CustomButton>
                </div>
              )}
              <div className="btn-holders mt-10">
                <Button
                  className={`button ${
                    areFieldsValid() ? 'primary-button' : 'pm-button-disabled'
                  } pm-button`}
                  onClick={() => {
                    if (areFieldsValid()) {
                      handleGenerateMandate();
                    }
                  }}
                  disabled={
                    !areFieldsValid() ||
                    registerMandateMutLoading ||
                    validateIfscLoading
                  }
                  color="primary"
                  fullWidth={true}
                  variant="contained"
                  disableElevation
                >
                  GENERATE MANDATE
                  {registerMandateMutLoading && (
                    <CircularProgress
                      size={20}
                      color="primary"
                      className="ml-2"
                    />
                  )}
                </Button>
              </div>
            </div>
          </div>
        </AccountSetupSkeleton>
      </div>
    );
  };

  const startCount = (value: number) => {
    if (seconds > 0) {
      setTimeout(() => {
        setSeconds(value - 1);
        startCount(value - 1);
      }, 1000);
    }
  };

  const renderShowInstructionsDialog = () => {
    return (
      <Dialog
        open={showInstructions || showRedirectDigio}
        onClose={() => null}
        aria-labelledby="responsive-dialog-title"
        maxWidth={'sm'}
        className="backdrop-filter backdrop-blur"
        PaperProps={{
          className: 'bg-color-secondary',
        }}
      >
        {!showRedirectDigio && (
          <DialogTitle className="pt-8 pr-6 pl-6 pb-0">
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={3}
            >
              <Grid item sm={6} xs={12}>
                <img src={questionMark} alt="logo" />
              </Grid>
              <Grid item sm={6} xs={12}>
                <CloseOutlinedIcon
                  onClick={() => setShowInstructions(false)}
                  style={{ float: 'right', cursor: 'pointer' }}
                ></CloseOutlinedIcon>
              </Grid>
            </Grid>
          </DialogTitle>
        )}
        <DialogContent className="p-0 mr-6 ml-6 mb-8">
          {showRedirectDigio ? (
            <div className="text-18 text-bold mt-8">
              You are being redirected to Digio
            </div>
          ) : (
            <div className="text-24 text-bold mt-2">Instructions</div>
          )}

          {showRedirectDigio ? (
            <div className="text-14 text-regular text-color-3 mt-2">
              You will be redirected back to BridgeUp after payment mandate
              verification.
            </div>
          ) : (
            <div className="text-14 text-regular text-color-3 mt-4 px-4">
              <div className="flex items-start">
                <span>
                  <FiberManualRecordIcon className="w-1 h-1 mb-1 mr-2" />
                </span>
                Please download, print, sign, scan and upload the document in{' '}
                <span className="text-white">&nbsp; PNG format.</span>
              </div>
              <div className="flex items-start">
                <span>
                  <FiberManualRecordIcon className="w-1 h-1 mb-1 mr-2" />
                </span>
                Ensure that the file content is clear.
              </div>
              <div className="flex items-start">
                <span>
                  <FiberManualRecordIcon className="w-1 h-1 mb-1 mr-2" />
                </span>
                The file size should be under
                <span className="text-white">&nbsp; 20 MB.</span>
              </div>
            </div>
          )}

          <div className="flex justify-start">
            {showRedirectDigio ? (
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
              <div className="btn-holders mt-10 w-full">
                <CustomButton
                  onClick={() => setShowInstructions(false)}
                  fullWidth={true}
                  buttonClassName={'secondary-button'}
                  variant="outlined"
                  // style={{ maxWidth: '150px' }}
                >
                  Back
                </CustomButton>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    );
  };

  const mutateStatus = () => {
    if (tradeId) {
      changeTradeStatus({
        variables: {
          where: {
            id: {
              _eq: tradeId,
            },
            status: {
              _eq: 'MANDATE_REGISTERED',
            },
          },
          status: 'MANDATE_IN_REVIEW',
        },
      });
    }
  };

  const handleMandatePreview = (confirm: boolean) => {
    if (tradeId && selectedFile) {
      if (confirm) {
        setUploadInProg(true);
        getMandateUploadUrl({
          variables: {
            tradeId,
          },
        }).then((res) => {
          if (res?.data && res.data.uploadSignedNachMandate?.url) {
            const config: any = {
              method: 'put',
              url: res.data.uploadSignedNachMandate?.url,
              headers: {
                'Content-Type': selectedFile.type,
              },
              data: selectedFile,
            };

            axios(config)
              .then(function (response) {
                submitMandate({
                  variables: {
                    tradeId,
                  },
                }).then((res) => {
                  if (res.data) {
                    setErrorMessage('');
                    setSuccessMessage(true);
                    setUploadInProg(false);
                    setShowFileUpload(false);
                    setUploadInProg(false);
                    setMandateReviewData(null);
                    mutateStatus();
                  } else if (res?.errors) {
                    setErrorMessage(res?.errors[0].message);
                    setUploadInProg(false);
                    setMandateReviewData(null);
                  }
                });
              })
              .catch(function (error) {
                setUploadInProg(false);
                setMandateReviewData(null);
                console.log(error);
              });
          } else if (res?.errors) {
            setSelectedFile(null);
            setErrorMessage(res?.errors[0].message);
            setUploadInProg(false);
            setMandateReviewData(null);
          }
        });
      } else {
        setSelectedFile(null);
        setUploadInProg(false);
        setMandateReviewData(null);
        setPdfUrl('');
      }
    }
    setOpenPdf(false);
  };

  const isMandateRegistered = () => {
    return [
      'MANDATE_REGISTERED',
      'MANDATE_IN_REVIEW',
      'MANDATE_FAILED',
      'MANDATE_SIGNED',
      'MANDATE_SUCCESS',
      'APA_IN_REVIEW',
      'APA_COMPANY_SIGNED',
      'APA_INVESTOR_SIGNED',
      'APA_GENERATED',
      'APA_INVESTOR_SIGNED',
      'PAYOUT_DISBURSED',
    ].includes(tradeStatus);
  };

  return (
    <div className="payment-mandate flex flex-1 flex-col justify-between">
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={8} className="px-14 py-4 pm-left-grid">
            <div className="px-4 py-4">
              {errorMessage && (
                <div className="mb-4">
                  <ErrorToast message={errorMessage} />{' '}
                </div>
              )}
              {successMessage && (
                <div className="mb-4">
                  <SuccessToast message="Payment mandate successfully uploaded." />
                </div>
              )}
              <div>
                <div className="flex justify-between items-center">
                  <div className="text-24 text-bold ">
                    Register for Payment Mandate
                  </div>
                  {/* <div className="flex items-center text-14 text-bold cursor-pointer cancel-trade-text">
                    <img src={svgCancelTrade} alt="logo" className="mr-2" />
                    CANCEL TRADE
                  </div> */}
                </div>
                <div className="text-14 mt-2 mb-5 mandate-desc">
                  A payment mandate is generated to handle recurring payments
                  without any hassle. This mandate will automate the transfer of
                  your monthly payments for this trade to the investor account.
                </div>
              </div>
              {tradeStatus && (
                <>
                  {/* type-1 */}
                  {isMandateRegistered() && !isEditBankDetails && (
                    <PMDetails
                      mandateAcc={mandateAcc}
                      isVerifying={isPaperNachInReview}
                      tradeStatus={tradeStatus || ''}
                      setIsEditBankDetails={setIsEditBankDetails}
                    />
                  )}

                  {/* type-2 */}
                  {(['CONTRACT_SELECTED'].includes(tradeStatus) ||
                    isEditBankDetails) &&
                    renderBankDetails()}

                  {/* type-3 */}
                  {isMandateRegistered() && (
                    <PMDocument
                      setShowInstructions={setShowInstructions}
                      setShowFileUpload={setShowFileUpload}
                      isVerifying={
                        isPaperNachInReview ||
                        tradeStatus === 'MANDATE_IN_REVIEW'
                      }
                      tradeStatus={tradeStatus}
                      isENach={isENach}
                      isDownloadUrlLoading={
                        nachDownloadDataLoading && isDownloadFile
                      }
                      onFileupload={onFileupload}
                      openPdf={openPdf}
                      handlePreview={() => {
                        if (signedMandateFileId) {
                          getSignedMandateUrl({
                            variables: {
                              fileId: signedMandateFileId,
                            },
                          });
                          setOpenPdf(true);
                          setPdfUrl('');
                        }
                      }}
                      handleDownload={() => {
                        if (isMandateRegistered() && tradeId && !isENach) {
                          setIsDownloadFile(true);
                          getDownloadNachMandate({
                            variables: {
                              tradeId,
                            },
                          });
                        }
                      }}
                    />
                  )}
                </>
              )}
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
            </div>
          </Grid>
          {renderShowInstructionsDialog()}

          {!showRedirectDigio && renderShowInstructionsDialog()}
        </Grid>
      </Box>
      <Grid container spacing={5} className="mb-10 px-14">
        <Grid item xs={6} md={'auto'}>
          <Button
            variant="outlined"
            size="large"
            color="info"
            component={RouterLink}
            to="/dashboard"
          >
            COMPLETE LATER
          </Button>
        </Grid>
        <Grid item xs={6} md={2}>
          <Button
            variant="contained"
            color="primary"
            disableElevation
            fullWidth
            className="primary-btn  pm-button"
            disabled={!allowNext}
            component={RouterLink}
            to={`/trade/apa-sign/${tradeId}`}
          >
            Next
          </Button>
        </Grid>
      </Grid>
      {(mandateReviewData || openPdf) && (
        <PMPreview
          mandateReviewData={mandateReviewData}
          apiLoading={uploadInProg}
          openPdf={openPdf}
          pdfUrl={pdfUrl}
          fileName={selectedFile ? selectedFile.name : ''}
          handleMandatePreview={handleMandatePreview}
        />
      )}
    </div>
  );
};

export default PaymentMandate;
