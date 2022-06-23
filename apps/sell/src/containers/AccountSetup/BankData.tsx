import React, { useState, useEffect } from 'react';

// assets imports
import {
  Button,
  Grid,
  CircularProgress,
  Dialog,
  DialogTitle,
  DialogContent,
  Tooltip,
  IconButton,
} from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { useNavigate, useLocation } from 'react-router-dom';
import logoImage from '../../assets/images/logo.svg';
import wallet from '../../assets/images/wallet.png';
import wallet2 from '../../assets/images/wallet2.png';
import wallet3 from '../../assets/images/wallet3.png';
import { ReactComponent as InfoIcon } from './../../assets/images/Info.svg';
import binblue from '../../assets/images/binblue.png';

import logout from '../../assets/images/logout.svg';
import warningIcon from '../../assets/images/warning-icon.png';
import trend from '../../assets/images/trend.svg';
import ErrorToast from '../../components/ErrorToast';
import document from '../../assets/images/document.png';

import { DeletableModel } from '@bridgeup/data-access';
import { useDeleteBankMutation } from '@bridgeup/data-access/hooks/company/delete-bank.hooks';
import {
  useGetListIntegrationsQuery,
  namedOperations,
} from '@bridgeup/data-access/hooks/company/list-integration.hooks';
import {
  useGetBankAccountTypeQuery,
  useGetBankListQuery,
} from '@bridgeup/data-access/hooks/company/list-bank.hooks';

import { BankType } from '../../types/AccountSetup';
import { SelectBank } from '../../components/SelectBanks';
import { BankStatement } from '../../components/BankStatement';
import { AccountSetupSkeleton } from '../../components/AccountSetupSkeleton';
import { useTitle } from '@bridgeup/common/hooks';
import {
  IN_QUEUE_STATUSES,
  FAILED_STATUSES,
  SUCCESS_STATUSES,
  FAILURE_BANK_CODE,
} from '../../utils/constants';
import StepperComponent from '../../components/StepperComponent/StepperComponent';
import CustomButton from '../../components/CustomButton/CustomButton';
import { monthNames } from '../../utils/constants';
import SuccessToast from '../../components/SuccessToast';

function Banking(props: any) {
  const navigate = useNavigate();
  const location = useLocation();

  useTitle('Bank Data - BridgeUp');
  const { loading, error, data } = useGetListIntegrationsQuery({
    fetchPolicy: 'no-cache',
  });
  const [open, setOpen] = React.useState<boolean>(false);
  const [selectedBank, setSelectedBank] = useState<BankType | undefined>();
  const [success, setSuccess] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [initBank, setInitBank] = useState<any>();
  const [isLogout, setLogout] = useState(false);
  const [disableNext, setDisabled] = useState(false);
  const [allowedNetBankingIds, setAllowedNetBankingIds] = useState<
    number[] | null
  >(null);
  const [deleteConfirmPopup, setDeleteConfirmPopup] = useState(false); // popup to confirm whether to delete a bank
  const [deleteBankData, setDeleteBankData] = useState<any>(null);
  const [isJustVerified, setIsJustVerified] = useState<number | null>(null); // which bank is just verified, so that alone should be updated
  const [priBankIntegId, setPriBankIntegId] = useState<number | null>(null);
  const [secBankIntegIdArray, setSecBankIntegIdArray] = useState<
    number[] | null
  >(null);
  const [deleteBankIntegId, setDeleteBankIntegId] = useState<number | null>(
    null
  );
  const [softDeleteBank, setSoftDeleteBank] = useState<number | null>(null);

  const [isDeletionSuccessful, setIsDeletionSuccessful] = useState(false);
  const [showDetailsPopup, setShowDetailsPopup] = useState(false);
  const [failureReason, setFailureReason] = useState<any>([]);

  const handleClose = () => {
    setOpen(false);
  };

  // secondary bank state variables
  const [accData, setAccData] = useState<any>({});
  const [accTypes, setAccTypes] = useState<any>([]);
  const [accTypesObj, setAccTypesObject] = useState<any>([]);
  const [secBankDetails, setSecBankDetails] = useState<any>([]);
  const [selectedSecondaryBankArray, setSelectedSecondaryBankArray] = useState<
    any[]
  >([]);
  const [selectedSecondaryBankAccTypes, setSelectedSecondaryBankAccTypes] =
    useState<any[]>([]);
  const [secVerifyingStatusArray, setSecVerifyingStatusArray] = useState<
    boolean[]
  >(Array(4).fill(false));

  const [deleteBankMutation, { loading: deleteBankMutationLoading }] =
    useDeleteBankMutation({
      refetchQueries: [namedOperations.Query.getListIntegrations],
    });
  const {
    loading: bLLoading,
    error: bLErro,
    data: bankList,
  } = useGetBankListQuery();
  const {
    loading: bankAccTypeLoading,
    error: bankAccTypeError,
    data: bankAccTypeData,
  } = useGetBankAccountTypeQuery();

  useEffect(() => {
    if (bankList && bankList.ref_bank.length) {
      const allowedIds: number[] = [];
      bankList.ref_bank.forEach((bank) => {
        if (bank.supported_integrations && bank.supported_integrations.length) {
          bank.supported_integrations.forEach((intg) => {
            if (intg.netbanking) allowedIds.push(bank.id);
          });
        }
      });

      setAllowedNetBankingIds(allowedIds);
    }
  }, [bankList]);

  useEffect(() => {
    if (data && data.listIntegrations) {
      let accDetails: any = {};
      let primaryBank: BankType | undefined = isJustVerified
        ? selectedBank
        : undefined;
      let bankData: any = isJustVerified ? initBank : {};
      let secBanArr: any[] = isJustVerified
        ? [...selectedSecondaryBankArray]
        : [];
      let secBanAccTypes: any[] = isJustVerified
        ? [...selectedSecondaryBankAccTypes]
        : [];
      let secBanDetailsArr: any[] = isJustVerified ? [...secBankDetails] : [];

      let primaryIntegrationId: number | null = isJustVerified
        ? priBankIntegId
        : null;
      let secondaryIntegrationIds: number[] | null = isJustVerified
        ? secBankIntegIdArray
        : [];

      let mappedFailureReasons: any[] = [];

      data.listIntegrations.forEach((item: any) => {
        if (item && item.category === 'BANKING' && item.integrations.length) {
          for (let i = 0; i < item.integrations.length; i++) {
            if (!isJustVerified) {
              if (item.integrations[i].metadata.is_primary) {
                primaryBank = item.integrations[i].banking_partner?.bank;
                primaryIntegrationId = item.integrations[i].id;
                bankData.files =
                  item.integrations[
                    i
                  ].company_integrations[0].company_integration_files;
                bankData.status =
                  item.integrations[i].company_integrations[0].status;

                bankData.source = item.source;

                const compInt = item.integrations[i].company_integrations[0];

                accDetails[compInt?.integration_auth?.id] = {
                  bankId: compInt?.integration_auth?.bank_account?.id,
                  accNumber:
                    compInt?.integration_auth?.bank_account?.account_no,
                };
              } else {
                if (secondaryIntegrationIds)
                  secondaryIntegrationIds[
                    item.integrations[i].banking_partner?.sequence - 1
                  ] = item.integrations[i].id;
                secBanArr[item.integrations[i].banking_partner?.sequence - 1] =
                  item.integrations[i].banking_partner?.bank;
                secBanAccTypes[
                  item.integrations[i].banking_partner?.sequence - 1
                ] = item.integrations[i].banking_partner?.account_type;
                secBanDetailsArr[
                  item.integrations[i].banking_partner?.sequence - 1
                ] = {
                  files:
                    item.integrations[i].company_integrations[0]
                      .company_integration_files,
                  status: item.integrations[i].company_integrations[0].status,
                  source: item.source,
                };

                const compInt = item.integrations[i].company_integrations[0];

                accDetails[compInt?.integration_auth?.id] = {
                  bankId: compInt?.integration_auth?.bank_account?.id,
                  accNumber:
                    compInt?.integration_auth?.bank_account?.account_no,
                };
              }
            } else {
              if (isJustVerified === 5) {
                if (item.integrations[i].metadata.is_primary) {
                  primaryBank = item.integrations[i].banking_partner?.bank;
                  primaryIntegrationId = item.integrations[i].id;

                  bankData.files =
                    item.integrations[
                      i
                    ].company_integrations[0].company_integration_files;
                  bankData.status =
                    item.integrations[i].company_integrations[0].status;
                  bankData.source = item.source;
                }
              } else if (
                item.integrations[i].banking_partner?.sequence ===
                isJustVerified
              ) {
                if (secondaryIntegrationIds)
                  secondaryIntegrationIds[
                    item.integrations[i].banking_partner?.sequence - 1
                  ] = item.integrations[i].id;

                secBanArr[isJustVerified - 1] =
                  item.integrations[i].banking_partner?.bank;
                secBanAccTypes[isJustVerified - 1] =
                  item.integrations[i].banking_partner?.account_type;
                secBanDetailsArr[isJustVerified - 1] = {
                  files:
                    item.integrations[i].company_integrations[0]
                      .company_integration_files,
                  status: item.integrations[i].company_integrations[0].status,
                  source: item.source,
                };
              }
            }

            if (
              item.integrations[i].company_integrations &&
              item.integrations[i].company_integrations.length &&
              item.integrations[i].company_integrations[0].status === 'FAILED'
            ) {
              const failure: any[] = [];
              const integ = item.integrations[i];
              const comIntegFiles =
                item.integrations[i].company_integrations[0]
                  .company_integration_files;

              failure.push({
                isPrimary: integ.banking_partner.is_primary,
                sequence: integ.banking_partner.sequence,
                bankId: integ.banking_partner.bank.id,
                bankName: integ.banking_partner.bank.name,
                reason: integ.company_integrations[0].failure_reason,
              });
              const fileLevelFailure = [...comIntegFiles].map((file) => {
                if (file.failure_reason) {
                  return {
                    id: file.file_registry.id,
                    name: file.file_registry.name,
                    reason: file.failure_reason,
                  };
                }
              });

              failure.push(fileLevelFailure);
              mappedFailureReasons.push(failure);
            }
          }
        }
      });

      if (FAILED_STATUSES.hasOwnProperty(bankData.status)) {
        setDisabled(false);
      }
      setInitBank(bankData);
      setSelectedBank(primaryBank);
      setSelectedSecondaryBankArray([...secBanArr].slice(0, 4));
      setSelectedSecondaryBankAccTypes([...secBanAccTypes].slice(0, 4));
      setSecBankDetails([...secBanDetailsArr].slice(0, 4));
      setFailureReason(mappedFailureReasons);
      setAccData(accDetails);
      setPriBankIntegId(primaryIntegrationId);
      setSecBankIntegIdArray(secondaryIntegrationIds);

      setIsDeletionSuccessful(false);

      navigate({
        pathname: location.pathname,
        search: '',
      });
    }
  }, [data]);

  useEffect(() => {
    if (bankAccTypeData && bankAccTypeData.ref_account_type.length) {
      const dataObject: any = {};
      bankAccTypeData.ref_account_type.forEach((type) => {
        dataObject[type.id] = type.name;
      });

      setAccTypesObject(dataObject);
      setAccTypes([...bankAccTypeData.ref_account_type]);
    }
  }, [bankAccTypeData]);

  const onBankSelected = (
    primaryBankData: BankType,
    secondaryBankDataArray: BankType[],
    secBankDetails: any,
    seBankAccTypes: any
  ) => {
    const temp = secondaryBankDataArray.filter(function (val) {
      return secBankDetails.indexOf(val) == -1;
    });
    const tempDetails = secBankDetails.filter(function (val: any) {
      return secondaryBankDataArray.indexOf(val) == -1;
    });
    const tempAccTypes = [...seBankAccTypes].filter(function (val: any) {
      return secondaryBankDataArray.indexOf(val) == -1;
    });

    if (primaryBankData) {
      setSelectedBank(primaryBankData);
      setInitBank(selectedBank?.id === primaryBankData?.id ? initBank : []);
      setSelectedSecondaryBankArray(temp);
      setSecBankDetails(tempDetails);
      setSelectedSecondaryBankAccTypes(tempAccTypes);
      handleClose();
    }
  };

  const getStatus = (status: string) => {
    if (FAILED_STATUSES.hasOwnProperty(status)) {
      return <span className="verify-text red">FAILED</span>;
    } else if (
      status === 'COMPLETED' ||
      status === 'SYNC_COMPLETED' ||
      status == 'PENDING_APPROVAL'
    ) {
      return <span className="verify-text green">VERIFIED</span>;
    } else if (IN_QUEUE_STATUSES.includes(status)) {
      return <span className="verify-text">VERIFYING</span>;
    } else {
      return null;
    }
  };

  const handleSecVerifyStatus = (index: number, value: boolean) => {
    const temp = [...secVerifyingStatusArray];
    temp.splice(index, 1, value);
    setSecVerifyingStatusArray(temp);
  };

  const editBank = (e: any) => {
    e.preventDefault();
    setOpen(true);
  };

  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month, 0).getDate();
  };

  const handleConfirmDeleteBank = () => {
    if (!deleteBankData) return;

    if (deleteBankIntegId) {
      deleteBankMutation({
        variables: {
          modelName: DeletableModel.IntegrationAuth,
          where: {
            id: deleteBankIntegId,
          },
        },
      }).then((res: any) => {
        if (res?.data) {
          setDeleteConfirmPopup(false);
          setIsJustVerified(null);
          setIsDeletionSuccessful(true);
        }
      });
    } else if (softDeleteBank !== null) {
      const temp = [...selectedSecondaryBankArray].filter(
        (item, index) => index !== softDeleteBank
      );
      const tempDetails = [...secBankDetails].filter(
        (item, index) => index !== softDeleteBank
      );
      setIsDeletionSuccessful(true);
      setSelectedSecondaryBankArray(temp);
      setSecBankDetails(tempDetails);
      setDeleteConfirmPopup(false);
    }
  };

  // render methods
  const renderDateRange = () => {
    let today = new Date();
    let todayDate = today.getDate();
    let currentMonth = today.getMonth();
    let currentYear = today.getFullYear();
    let lastYear = currentYear - 1;

    if (todayDate <= 10) {
      let firstMonthLessTen =
        monthNames[new Date(today.setMonth(currentMonth - 1)).getMonth()];
      let secondMonthLessTen =
        monthNames[new Date(today.setMonth(currentMonth - 14)).getMonth()];
      let calA = new Date(today.setMonth(currentMonth - 13)).getMonth();

      return `1st ${firstMonthLessTen} ${
        currentMonth === 0 ? lastYear - 1 : lastYear
      } - ${daysInMonth(calA, currentYear)} ${secondMonthLessTen} ${
        currentMonth === 0 ? currentYear - 1 : currentYear
      } (12 months)`;
    } else {
      let firstMonthMoreTen = monthNames[currentMonth];
      let secondMonthMoreTen =
        monthNames[new Date(today.setMonth(currentMonth - 13)).getMonth()];
      let calB = new Date(today.setMonth(currentMonth - 12)).getMonth();

      return `${firstMonthMoreTen} ${lastYear} - ${secondMonthMoreTen} ${
        currentMonth === 0 ? currentYear - 1 : currentYear
      } `;
    }
  };

  const renderStatementLevelFailureReasons = (failure: any) => {
    return (
      failure &&
      failure.length > 0 &&
      failure.map((item: any) => {
        return (
          item && (
            <div className="flex items-center mb-1">
              <div className="flex flex-initial items-center mr-3 bank-statement-error">
                <img src={document} alt="logo" className="w-4 h-4 mr-3" />
                <div className="text-white">{item?.name || ''}</div>
              </div>
              <div className="flex">
                {FAILURE_BANK_CODE[item?.reason?.code || ''] ||
                  'Please upload a valid bank statement'}
              </div>
            </div>
          )
        );
      })
    );
  };

  const renderFailureReasons = () => {
    return (
      failureReason.length > 0 &&
      failureReason.map((failure: any) => {
        return (
          <div className="py-2">
            <div className="flex justify-start bg-color-1 p-1 mb-2">
              <div className="text-14 text-bold text-white">
                {failure[0].bankName}
              </div>
              <div className="ml-2 text-color-3">
                | &nbsp; {failure[0].isPrimary ? 'Primary' : 'Secondary'} -{' '}
                {failure[0].sequence}
              </div>
            </div>
            {FAILURE_BANK_CODE[failure[0]?.reason?.code || ''] && (
              <div className="flex items-center mb-1">
                <div className="flex flex-initial items-center mr-3">
                  <img src={document} alt="logo" className="w-4 h-4 mr-3" />
                  <div className="text-white">
                    {FAILURE_BANK_CODE[failure[0]?.reason?.code || '']}
                  </div>
                </div>
              </div>
            )}
            {renderStatementLevelFailureReasons(failure[1])}
          </div>
        );
      })
    );
  };

  const checkIfNetBankingAllowed = (isPrimary: boolean, sequence: number) => {
    const banksListWhichAreInVerificationState = [];
    if (
      (SUCCESS_STATUSES.hasOwnProperty(initBank?.status || '') ||
        IN_QUEUE_STATUSES.includes(initBank?.status || '')) &&
      initBank &&
      initBank.source === 'NETBANKING'
    ) {
      banksListWhichAreInVerificationState.push(selectedBank?.id);
    }
    selectedSecondaryBankArray.forEach((secBank, index) => {
      if (
        selectedSecondaryBankAccTypes[index] === 'CURRENT' &&
        (SUCCESS_STATUSES.hasOwnProperty(secBankDetails[index]?.status || '') ||
          IN_QUEUE_STATUSES.includes(secBankDetails[index]?.status || '')) &&
        secBankDetails[index]?.source === 'NETBANKING'
      ) {
        banksListWhichAreInVerificationState.push(secBank?.id);
      }
    });

    if (
      (isPrimary &&
        banksListWhichAreInVerificationState.includes(selectedBank?.id)) ||
      (!isPrimary &&
        banksListWhichAreInVerificationState.includes(
          selectedSecondaryBankArray[sequence - 1]?.id
        ))
    ) {
      return false;
    }

    return true;
  };

  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0}
        className="login-holder flex items-stretch"
        style={{ height: '100%', backgroundColor: '#030914' }}
      >
        <Grid item sm={7} xs={12} lg={7}>
          <AccountSetupSkeleton loading={loading}>
            {isDeletionSuccessful && (
              <SuccessToast message="Deleted Successfully" />
            )}
            <div
              className="small-container new-c"
              style={{ maxWidth: '600px' }}
            >
              <div className="logo mb-8">
                <img src={logoImage} alt="logo" />
              </div>
              <div>
                {failureReason.length > 0 && (
                  <ErrorToast
                    message="Failed to link banking data."
                    showDetails={true}
                    handleShowDetails={() => setShowDetailsPopup(true)}
                  />
                )}

                <div className="mt-4 text-24 text-bold">
                  Link your Banking Data
                </div>
                <div className="mt-1 text-14 text-regular text-color-2">
                  <span className="text-color-1 text-bold">
                    Connect via Netbanking
                  </span>{' '}
                  to fetch the documents at once or{' '}
                  <span className="text-color-1 text-bold">
                    manually upload e-statements
                  </span>{' '}
                  for each of your bank accounts. For the latter please make sure you upload e-statements for the last 12 months ( {''}
                  {renderDateRange()}).
                </div>

                {!selectedBank && (
                  <div className="mt-12 text-color-3 text-medium">
                    <div className="flex justify-start items-center">
                      <img src={wallet} alt="logo" />
                      <span className="ml-6 text-18 text-medium text-color-3">
                        Select your Primary bank account.
                      </span>
                    </div>
                    <div className="mt-10 flex justify-start items-center">
                      <img src={wallet2} alt="logo" />
                      <span className="ml-6 text-18 text-medium text-color-3">
                        Add statements for last 12 months.
                      </span>
                    </div>
                    <div className="mt-10 flex justify-start items-center">
                      <img src={wallet3} alt="logo" />
                      <span className="ml-6 text-18 text-medium text-color-3">
                        Verify them with us and you’re set for trading.
                      </span>
                    </div>

                    <a
                      className="mt-14"
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setOpen(true);
                      }}
                    >
                      <span
                        style={{
                          display: 'inline-block',
                          fontSize: '30px',
                          verticalAlign: 'middle',
                          lineHeight: 1,
                        }}
                      >
                        +
                      </span>{' '}
                      ADD BANK ACCOUNT
                    </a>
                  </div>
                )}
                {selectedBank ? (
                  <div className="mt-10">
                    <Grid
                      container
                      direction="row"
                      justifyContent="center"
                      alignItems="center"
                      spacing={0}
                    >
                      <Grid item sm={6} xs={12}>
                        <div className="text-18 text-bold">
                          Primary Bank Account
                          <Tooltip
                            placement="top"
                            className="ml-1"
                            title="Link your main banking account where your clients pay. This is where you will receive the payout."
                          >
                            <IconButton>
                              <InfoIcon></InfoIcon>
                            </IconButton>
                          </Tooltip>
                        </div>
                      </Grid>

                      <Grid item sm={6} xs={12} className="text-right">
                        {!verifying && !secVerifyingStatusArray.includes(true) && (
                          <a
                            className="text-14 text-bold"
                            href="#"
                            onClick={(e) => {
                              editBank(e);
                            }}
                          >
                            EDIT BANK ACCOUNTS
                          </a>
                        )}
                      </Grid>
                    </Grid>
                    <div className="accounts mt-5">
                      <div className="flex justify-between items-center py-2 px-4 text-14 bank-details">
                        <div
                          className="flex flex-col justify-between items-start"
                          style={{ width: '80%' }}
                        >
                          <div
                            className="text-bold text-18"
                            style={{
                              maxWidth: '95%',
                              textOverflow: 'ellipsis',
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                            }}
                          >
                            {selectedBank?.name}
                          </div>
                          <div
                            className=" text-14"
                            style={{ color: '#8FA1C0' }}
                          >
                            <div className="ml-0 text-bold">A/C Type :</div>
                            <div className="ml-2">Current account</div>
                          </div>
                        </div>
                        <div
                          className="flex justify-end items-center text-14"
                          style={{ width: '20%' }}
                        >
                          {verifying ? (
                            <span className="verify-text">VERIFYING</span>
                          ) : (
                            getStatus(initBank?.status)
                          )}
                        </div>
                      </div>

                      <BankStatement
                        isPrimary={true}
                        bankIndex={1}
                        setDisabled={setDisabled}
                        status={initBank.status}
                        initBank={initBank && initBank.files}
                        source={initBank && initBank.source}
                        accountNumber={String(
                          accData[priBankIntegId || 0]?.accNumber
                        )}
                        bankAccType={'CURRENT'}
                        bankId={selectedBank && selectedBank.id}
                        setSuccess={setSuccess}
                        setVerifyingStatus={setVerifying}
                        setIsJustVerified={setIsJustVerified}
                        allowedNetBankingIds={allowedNetBankingIds}
                        priBankIntegId={priBankIntegId}
                        secBankIntegIdArray={secBankIntegIdArray}
                        isNetBankingAllowed={checkIfNetBankingAllowed(true, 1)}
                      />
                    </div>

                    <div className="mt-5"></div>
                  </div>
                ) : null}
                {selectedSecondaryBankArray && selectedSecondaryBankArray.length
                  ? selectedSecondaryBankArray.map((bank, index) => {
                      return (
                        bank?.name && (
                          <div className="mb-10" key={index}>
                            <Grid item sm={12} xs={12}>
                              <div className="text-18 text-bold">
                                <span>Secondary Bank Account</span>
                                <span>{index ? `- ${index + 1}` : ''}</span>
                                <Tooltip
                                  placement="top"
                                  className="ml-1"
                                  title="Link your other bank accounts for us to get a complete picture of your company."
                                >
                                  <IconButton>
                                    <InfoIcon></InfoIcon>
                                  </IconButton>
                                </Tooltip>
                              </div>
                            </Grid>

                            <div className="accounts mt-5">
                              <div className="flex justify-between items-center py-2 px-4 text-14 bank-details">
                                <div
                                  className="flex flex-col justify-between items-start"
                                  style={{ width: '70%' }}
                                >
                                  <div
                                    className="text-bold text-18"
                                    style={{
                                      maxWidth: '95%',
                                      textOverflow: 'ellipsis',
                                      whiteSpace: 'nowrap',
                                      overflow: 'hidden',
                                    }}
                                  >
                                    {bank?.name}
                                  </div>
                                  {selectedSecondaryBankAccTypes &&
                                    selectedSecondaryBankAccTypes[index] && (
                                      <div
                                        className=" text-14"
                                        style={{ color: '#8FA1C0' }}
                                      >
                                        <div className="ml-0 text-bold">
                                          A/C Type :
                                        </div>
                                        <div className="ml-2">
                                          {String(
                                            accTypesObj[
                                              selectedSecondaryBankAccTypes[
                                                index
                                              ]
                                            ]
                                          ).length > 3
                                            ? String(
                                                accTypesObj[
                                                  selectedSecondaryBankAccTypes[
                                                    index
                                                  ]
                                                ]
                                              )
                                                .charAt(0)
                                                .toUpperCase() +
                                              String(
                                                accTypesObj[
                                                  selectedSecondaryBankAccTypes[
                                                    index
                                                  ]
                                                ]
                                              )
                                                .slice(1)
                                                .toLowerCase() +
                                              ' '
                                            : accTypesObj[
                                                selectedSecondaryBankAccTypes[
                                                  index
                                                ]
                                              ] + ' '}
                                          account
                                        </div>
                                      </div>
                                    )}
                                </div>
                                <div
                                  className="flex justify-end items-center text-14"
                                  style={{ width: '30%' }}
                                >
                                  {secVerifyingStatusArray[index] ? (
                                    <span className="verify-text">
                                      VERIFYING
                                    </span>
                                  ) : (
                                    getStatus(secBankDetails[index]?.status)
                                  )}
                                  {!secVerifyingStatusArray[index] &&
                                    !SUCCESS_STATUSES.hasOwnProperty(
                                      secBankDetails[index] &&
                                        secBankDetails[index].status
                                    ) &&
                                    !IN_QUEUE_STATUSES.includes(
                                      secBankDetails[index] &&
                                        secBankDetails[index].status
                                    ) && (
                                      <img
                                        onClick={() => {
                                          setDeleteConfirmPopup(true);
                                          setDeleteBankData(bank);
                                          setDeleteBankIntegId(
                                            secBankIntegIdArray &&
                                              secBankIntegIdArray[index]
                                          );
                                          setSoftDeleteBank(index);
                                        }}
                                        style={{ cursor: 'pointer' }}
                                        src={binblue}
                                        alt="logo"
                                        className="ml-4 w-6 h-7"
                                      />
                                    )}
                                </div>
                              </div>

                              <BankStatement
                                isPrimary={false}
                                bankIndex={index}
                                setDisabled={setDisabled}
                                status={
                                  secBankDetails[index] &&
                                  secBankDetails[index].status
                                }
                                initBank={
                                  secBankDetails[index]
                                    ? secBankDetails[index].files
                                    : []
                                }
                                source={
                                  secBankDetails[index]
                                    ? secBankDetails[index].source
                                    : ''
                                }
                                accountNumber={
                                  secBankIntegIdArray &&
                                  secBankIntegIdArray[index]
                                    ? String(
                                        accData[secBankIntegIdArray[index] || 0]
                                          ?.accNumber
                                      )
                                    : ''
                                }
                                bankId={bank && bank.id}
                                bankAccType={
                                  selectedSecondaryBankAccTypes[index] || null
                                }
                                setSuccess={setSuccess}
                                setVerifyingStatus={(value: boolean) =>
                                  handleSecVerifyStatus(index, value)
                                }
                                setIsJustVerified={setIsJustVerified}
                                allowedNetBankingIds={allowedNetBankingIds}
                                priBankIntegId={priBankIntegId}
                                secBankIntegIdArray={secBankIntegIdArray}
                                isNetBankingAllowed={checkIfNetBankingAllowed(
                                  false,
                                  index + 1
                                )}
                              />
                            </div>
                          </div>
                        )
                      );
                    })
                  : null}
                <div className="mt-16 mb-10">
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={4}
                  >
                    <Grid item sm={6} xs={12}>
                      <CustomButton
                        onClick={() => navigate('/pan-connect')}
                        fullWidth={true}
                        buttonClassName={'secondary-button'}
                        variant="outlined"
                      >
                        BACK
                      </CustomButton>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <CustomButton
                        disabled={disableNext}
                        onClick={() => navigate('/accounting-partners')}
                        fullWidth={true}
                        buttonClassName={'primary-button'}
                      >
                        NEXT
                      </CustomButton>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </AccountSetupSkeleton>
        </Grid>
        <StepperComponent currentStep={2} isLogout={isLogout} logout={logout} />
      </Grid>
      {open && (
        <SelectBank
          accTypes={accTypes}
          accTypesObj={accTypesObj}
          selectedBank={selectedBank}
          selectedSecondaryBankArray={selectedSecondaryBankArray}
          selectedSecondaryBankAccTypes={selectedSecondaryBankAccTypes}
          open={open}
          handleClose={handleClose}
          onBankSelected={(
            primaryBankData: BankType,
            secondaryBankData: BankType[],
            secBankDetails: any,
            seBankAccTypes: any
          ) =>
            onBankSelected(
              primaryBankData,
              secondaryBankData,
              secBankDetails,
              seBankAccTypes
            )
          }
          secBankDetails={secBankDetails}
          priBankDetails={initBank}
        />
      )}

      {(deleteConfirmPopup || showDetailsPopup) && (
        <Dialog
          open={deleteConfirmPopup || showDetailsPopup}
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
              <Grid item sm={6} xs={12}>
                <img src={warningIcon} alt="logo" />
              </Grid>
              <Grid item sm={6} xs={12}>
                <CloseOutlinedIcon
                  onClick={() => {
                    if (!deleteBankMutationLoading) {
                      setDeleteConfirmPopup(false);
                      setShowDetailsPopup(false);
                    }
                  }}
                  style={{ float: 'right', cursor: 'pointer' }}
                ></CloseOutlinedIcon>
              </Grid>
            </Grid>
          </DialogTitle>
          <DialogContent className="p-0 mt-1 mr-6 ml-6 mb-8">
            <div className="text-24 text-bold mt-2">
              {showDetailsPopup
                ? 'Failed to verify bank data.'
                : 'Are you sure you want to delete the file?'}
            </div>

            <div className="text-14 text-regular text-color-3 mt-4">
              {showDetailsPopup ? (
                <div className="py-4 px-2 show-details-popup">
                  <div className="overflow-auto px-4 show-details-popup__inner-div">
                    {renderFailureReasons()}
                  </div>
                </div>
              ) : (
                ` ${deleteBankData?.name} and all banking details added will be permanently deleted. Do you want to continue further?`
              )}
            </div>

            <div className="btn-holders mt-4 flex justify-end">
              {showDetailsPopup ? (
                <CustomButton
                  onClick={() => setShowDetailsPopup(false)}
                  fullWidth={true}
                  disabled={deleteBankMutationLoading}
                  buttonClassName={'primary-button'}
                  variant="outlined"
                >
                  CLOSE
                </CustomButton>
              ) : (
                <>
                  <CustomButton
                    onClick={() => setDeleteConfirmPopup(false)}
                    fullWidth={true}
                    disabled={deleteBankMutationLoading}
                    buttonClassName={'secondary-button'}
                    variant="outlined"
                    style={{ maxWidth: '150px' }}
                  >
                    CANCEL
                  </CustomButton>
                  <CustomButton
                    onClick={handleConfirmDeleteBank}
                    fullWidth={true}
                    disabled={deleteBankMutationLoading}
                    style={{ maxWidth: '150px', marginLeft: '40px' }}
                    buttonClassName={'primary-button'}
                    // disabled={!bank}
                    variant="contained"
                  >
                    YES, DELETE
                    {deleteBankMutationLoading && (
                      <CircularProgress size={20} color="primary" />
                    )}
                  </CustomButton>
                </>
              )}
            </div>
          </DialogContent>
        </Dialog>
      )}
    </React.Fragment>
  );
}

export default Banking;
