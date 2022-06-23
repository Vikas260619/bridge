import {
  Grid,
  Tooltip,
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
  IconButton,
} from '@mui/material';
import binblue from '../assets/images/binblue.png';
import bindisabled from '../assets/images/bindisabled.png';
import { ReactComponent as InfoIcon } from '../assets/images/Info.svg';
import { ReactComponent as InProgressIcon } from '../assets/images/in-progress.svg';
import { ReactComponent as InProgressIconFull } from '../assets/images/in-progress-full.svg';
import { ReactComponent as BankLogo } from '../assets/images/bank-logo.svg';
import { ReactComponent as Danger } from '../assets/images/danger.svg';
import { ReactComponent as RotateRightIcon } from '../assets/images/rotate-right.svg';
import question from '../assets/images/question.png';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import document from '../assets/images/document.png';
import { useRef, useState, useEffect } from 'react';

import {
  useGenerateFileRegistryUploadUrlMutation,
  useFileRegistryUpdatePasswordsMutation,
  useBankStatementsUploadMutation,
  BankStatementsUploadMutation,
} from '@bridgeup/data-access/hooks/company/file-upload.hooks';

import { namedOperations } from '@bridgeup/data-access/hooks/company/list-integration.hooks';
import { useDeleteBankMutation } from '@bridgeup/data-access/hooks/company/delete-bank.hooks';

import { DeletableModel } from '@bridgeup/data-access';
import { useNetBankingPullMutation } from '@bridgeup/data-access/hooks/company/net-banking.hooks';

import axios from 'axios';
import SuccessToast from '../components/SuccessToast';
import {
  IN_QUEUE_STATUSES,
  FAILED_STATUSES,
  SUCCESS_STATUSES,
} from '../utils/constants';
import { ApolloError } from '@apollo/client';
import CustomButton from './CustomButton/CustomButton';
import CustomInput from './CustomInput/CustomInput';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface Props {
  isPrimary: boolean;
  bankIndex: number;
  bankId: number;
  setSuccess: any;
  source: string;
  initBank: any;
  status: string;
  bankAccType?: any;
  setVerifyingStatus: Function;
  setDisabled: Function;
  setIsJustVerified: Function;
  allowedNetBankingIds: number[] | null;
  priBankIntegId: number | null;
  secBankIntegIdArray: number[] | null;
  isNetBankingAllowed: boolean;
  accountNumber: string;
}

export const BankStatement = (props: Props) => {
  const inputFile = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<any>([]);
  const [activeIndex, setIndex] = useState(0);
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(false);
  const [fetchNewData, setFetchNewData] = useState(false);
  const [redirectToNetBankingOpen, setRedirectToNetBankingOpen] =
    useState(false);
  const [warningPopup, setWarningPopup] = useState(false);

  const {
    isPrimary,
    bankId: selectedBankId,
    bankIndex,
    bankAccType,
    initBank,
    status,
    source,
    setVerifyingStatus,
    setDisabled,
    setIsJustVerified,
    allowedNetBankingIds,
    priBankIntegId,
    secBankIntegIdArray,
    isNetBankingAllowed,
    accountNumber,
  } = props;
  const [isSuccess, setSuccessNotification] = useState(false);

  const [deleteBankMutation, { loading: deleteBankMutationLoading }] =
    useDeleteBankMutation();

  const onFileChange = (event: any) => {
    // Update the state

    const currFile = {
      name: event.target.files[0].name,
      file: event.target.files[0],
      showPassword: false,
    };
    const consFiles = [...files, currFile];
    setSuccessNotification(false);
    setIndex(files.length);
    setFiles(consFiles);

    if (isPrimary) {
      setDisabled(true);
    }

    event.target.value = null;
  };

  useEffect(() => {
    const currFile = files[activeIndex];
    if (currFile && currFile.file) {
      setLoading(true);
      generateRegistryMutation({
        variables: {
          name: currFile.file.name,
          category_id: 'BANKING',
          content_type: currFile.file?.type,
        },
      }).then((res) => {
        if (res?.data && res?.data.generateFileRegistryUploadURL) {
          uploadFile(res?.data.generateFileRegistryUploadURL);
        }
      });
    }
  }, [files.length]);

  useEffect(() => {
    const inputFiles: any = [];
    if (
      ((isPrimary && initBank && initBank.length) ||
        (!isPrimary && initBank)) &&
      !fetchNewData
    ) {
      initBank.forEach((item: any) => {
        inputFiles.push({
          name: item.file_registry.name,
          file: null,
          file_registry_id: item.file_registry.id,
          status: item.status,
          showPassword: false,
        });
      });
      setFiles(inputFiles);
    }
  }, [initBank]);

  const onVerify = () => {
    const passwordVariables: any = [];
    files.forEach((item: any) => {
      if (item.password) {
        passwordVariables.push({
          file_registry_id: item.file_registry_id,
          password: item.password,
        });
      }
    });
    setIsJustVerified(isPrimary ? 5 : bankIndex + 1);
    setVerifying(true);
    setFetchNewData(true);
    setVerifyingStatus(true);

    if (
      (isPrimary && priBankIntegId && secBankIntegIdArray) ||
      (!isPrimary &&
        secBankIntegIdArray?.length &&
        secBankIntegIdArray?.length > bankIndex &&
        (bankIndex || bankIndex === 0) &&
        secBankIntegIdArray[bankIndex])
    ) {
      deleteBankMutation({
        variables: {
          modelName: DeletableModel.IntegrationAuth,
          where: {
            id: isPrimary ? priBankIntegId : secBankIntegIdArray[bankIndex],
          },
        },
      }).then((res: any) => {
        if (res?.data) {
          updatePasswordMutation({
            variables: { args: passwordVariables },
          });
        }
      });
    } else {
      updatePasswordMutation({
        variables: { args: passwordVariables },
      });
    }
  };

  const updatePassword = (e: any, index: number) => {
    const filesData = [...files];
    filesData[index].password = e.target.value;
    setFiles(filesData);
  };

  const [
    updatePasswordMutation,
    { data: updatePasswordMutationData, loading: updatingPassword },
  ] = useFileRegistryUpdatePasswordsMutation();

  useEffect(() => {
    if (updatePasswordMutationData) {
      // Mutate for bank update mutation
      const file_registry_ids: any = [];

      files.forEach((item: any) => {
        file_registry_ids.push(item.file_registry_id);
      });
      const data = {
        bankId: selectedBankId,
        is_primary: isPrimary,
        file_registry_ids: file_registry_ids,
        account_type: isPrimary ? 'CURRENT' : bankAccType || '',
        sequence: isPrimary ? 1 : bankIndex + 1,
      };
      updateBankStatementMutation({
        variables: data,
      });
    } else {
      setVerifying(false);
      setFetchNewData(false);
      setVerifyingStatus(false);
      setDisabled(false);
    }
  }, [updatePasswordMutationData]);

  useEffect(() => {
    if (redirectToNetBankingOpen) {
    }
  }, [redirectToNetBankingOpen]);

  let bankId: any, is_primary: any, file_registry_ids: any;
  const [updateBankStatementMutation, { loading: updatingBankStatement }] =
    useBankStatementsUploadMutation({
      variables: {
        bankId: selectedBankId,
        is_primary: isPrimary,
        file_registry_ids: file_registry_ids,
        account_type: isPrimary ? 'CURRENT' : bankAccType || '',
        sequence: isPrimary ? 1 : bankIndex + 1,
      },
      refetchQueries: [namedOperations.Query.getListIntegrations],
      awaitRefetchQueries: true,
      onError: (error: ApolloError) => {
        setVerifying(false);
        setFetchNewData(false);
        setVerifyingStatus(false);
        setDisabled(false);
      },
      update(cache, { data }) {
        if (data) {
          setFetchNewData(false);
        }
      },
      onCompleted: (data: BankStatementsUploadMutation) => {
        if (data) {
          // Mutate for bank update mutation
          setSuccessNotification(true);
        }
        setVerifying(false);
        setFetchNewData(false);
        setVerifyingStatus(false);
        setDisabled(false);
      },
    });

  let selectedFile: any;
  const [
    generateRegistryMutation,
    { data: fileUploadRegistryData, loading: fileUploading },
  ] = useGenerateFileRegistryUploadUrlMutation({
    variables: {
      name: selectedFile?.name,
      category_id: 'BANKING',
      content_type: selectedFile?.type,
    },
  });

  const [
    getNetBankingUrl,
    { data: netBankingUrl, loading: netBankingUrlLoading },
  ] = useNetBankingPullMutation();

  const uploadFile = (data: any) => {
    files.forEach((item: any, index: any) => {
      if (index === activeIndex) {
        item.file_registry_id = data.file_registry_id;
      }
    });
    selectedFile = files.find((item: any, index: any) => index === activeIndex);
    // setFileId(data.file_registry_id);
    // Create an object of formData
    const formData = new FormData();

    // Update the formData object
    formData.append('myFile', selectedFile.file, selectedFile.name);
    const config: any = {
      method: 'put',
      url: data.upload_url,
      headers: {
        'Content-Type': selectedFile.file.type,
      },
      data: selectedFile.file,
    };

    axios(config)
      .then(function (response) {
        console.log('success');
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const deleteFile = (index: number) => {
    const updatedFiles = files.filter(
      (item: any, currIndex: number) => currIndex != index
    );
    setFiles(updatedFiles);
  };

  const getDisabled = () => {
    if (loading) {
      return true;
    } else if (IN_QUEUE_STATUSES.includes(status) || status === 'COMPLETED') {
      return true;
    } else if (!files.length) {
      return true;
    } else {
      return false;
    }
  };
  const updateShowPassword = (index: number) => {
    const filesData = [...files];
    filesData[index].showPassword = !filesData[index].showPassword;

    setFiles(filesData);
  };

  const onInputClick = (
    event: React.MouseEvent<HTMLInputElement, MouseEvent>
  ) => {
    const element = event.target as HTMLInputElement;
    element.value = '';
  };

  const handleRedirectNetBanking = () => {
    setRedirectToNetBankingOpen(true);

    getNetBankingUrl({
      variables: {
        args: {
          account_type: 'CURRENT',
          bank_id: selectedBankId,
          is_primary: isPrimary,
          sequence: isPrimary ? 1 : bankIndex + 1,
        },
      },
    }).then((res) => {
      if (res?.data) {
        if (res?.data.netBankingPull?.url) {
          window.location.href = res?.data.netBankingPull?.url;
          setRedirectToNetBankingOpen(false);
        }
      } else if (res?.errors) {
        console.log(res?.errors);
      }
    });
  };

  const handleClickOnNetBanking = () => {
    if (source) {
      if (source !== 'NETBANKING') setWarningPopup(true);
      else handleRedirectNetBanking();
    } else {
      handleRedirectNetBanking();
    }
  };

  const handleSwapMethod = () => {
    if (
      (secBankIntegIdArray && isPrimary && priBankIntegId) ||
      (!isPrimary &&
        bankIndex &&
        secBankIntegIdArray &&
        secBankIntegIdArray[bankIndex])
    ) {
      deleteBankMutation({
        variables: {
          modelName: DeletableModel.IntegrationAuth,
          where: {
            id: isPrimary ? priBankIntegId : secBankIntegIdArray[bankIndex],
          },
        },
      }).then((res: any) => {
        if (res?.data) {
          setWarningPopup(false);
          handleRedirectNetBanking();
        }
      });
    }
  };

  const renderNetBankingVerificationInProgress = () => {
    const className = 'bg-color-3 flex justify-start items-center px-2 py-4';

    if (source && source === 'NETBANKING') {
      if (IN_QUEUE_STATUSES.includes(status)) {
        return (
          <Grid container className={className}>
            <InProgressIconFull className="cursor-pointer mr-3" />
            <div className="text-14 text-color-4">Net Banking</div>
          </Grid>
        );
      }
    }
  };
  const renderNetBankingVerificationSuccessful = () => {
    const className = 'bg-color-3 flex justify-start items-center px-3 py-5';

    if (source && source === 'NETBANKING') {
      if (SUCCESS_STATUSES.hasOwnProperty(status)) {
        return (
          <Grid container className={className}>
            <BankLogo className="cursor-pointer mr-3" />
            <div className="text-14 text-color-4">
              XXXX XXXX {accountNumber.substr(accountNumber.length - 4)}
            </div>
          </Grid>
        );
      }
    }
  };
  const renderNetBankingVerificationFailed = () => {
    const className = 'bg-color-3 flex justify-between items-center p-5';

    if (source && source === 'NETBANKING') {
      if (FAILED_STATUSES.hasOwnProperty(status)) {
        return (
          <Grid container className={className}>
            <div className="flex justify-start items-center">
              <Danger className="cursor-pointer mr-4" />
              <div className="text-14 text-color-4">Net Banking</div>
            </div>
            <div onClick={handleClickOnNetBanking}>
              <RotateRightIcon className="cursor-pointer mr-3" />
            </div>
          </Grid>
        );
      }
    }
  };

  return (
    <>
      <input
        accept="application/pdf"
        onChange={onFileChange}
        onClick={onInputClick}
        ref={inputFile}
        id="upload-button-file"
        type="file"
        name=""
        style={{ display: 'none' }}
      />
      <div className="border-bottom">
        {files.length > 0 && (
          <div className="lowerG">
            {files.map((item: any, index: number) => {
              return (
                <Grid
                  key={index}
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  className="mt-2 mb-2"
                >
                  {isSuccess && (
                    <SuccessToast message="e-Statements uploaded successfully. Please proceed to Accounting Data." />
                  )}
                  <Grid item sm={6} xs={12} className="flex items-center">
                    <img
                      className="banking-manual-image"
                      src={document}
                      alt="logo"
                    />
                    <span className="banking-manual-span">{item.name}</span>
                  </Grid>
                  <Grid item sm={5} xs={12}>
                    <CustomInput
                      disabled={
                        !(
                          ((status === 'FAILED' && !loading) ||
                            (!status && !loading)) &&
                          !verifying &&
                          item.file_registry_id
                        ) || item.status === 'UPLOADED'
                      }
                      label="Type file password"
                      variant="filled"
                      className="input-fields"
                      type={item.showPassword ? 'text' : 'password'}
                      value={item.password}
                      onChange={(e) => updatePassword(e, index)}
                      adornment={
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => {
                            updateShowPassword(index);
                          }}
                          edge="end"
                          style={{ color: '#464F60' }}
                        >
                          {item.showPassword ? (
                            <Visibility />
                          ) : (
                            <VisibilityOff />
                          )}
                        </IconButton>
                      }
                    />
                  </Grid>
                  <Grid item sm={1} xs={12} style={{ textAlign: 'right' }}>
                    {loading && activeIndex === index && (
                      <CircularProgress size={20} color="primary" />
                    )}
                    {((status === 'FAILED' && !loading) ||
                      (!status && !loading)) &&
                    !verifying ? (
                      <img
                        onClick={() => deleteFile(index)}
                        style={{ cursor: 'pointer' }}
                        src={binblue}
                        alt="logo"
                      />
                    ) : (
                      <img
                        style={{ cursor: 'pointer' }}
                        src={bindisabled}
                        alt="logo"
                      />
                    )}
                  </Grid>
                </Grid>
              );
            })}
            <Grid
              container
              direction="row"
              justifyContent="end"
              alignItems="center"
              spacing={0}
            >
              <CustomButton
                onClick={onVerify}
                disabled={
                  getDisabled() ||
                  verifying ||
                  SUCCESS_STATUSES.hasOwnProperty(status) ||
                  !files.some((item: any) => !item.status)
                }
                variant="outlined"
                fullWidth={true}
                buttonClassName={'secondary-button'}
                style={{
                  maxWidth: '120px',
                  marginLeft: '20px',
                }}
              >
                VERIFY
                {(updatingPassword ||
                  updatingBankStatement ||
                  deleteBankMutationLoading) && (
                  <CircularProgress
                    style={{ marginLeft: '10px' }}
                    size={20}
                    color="primary"
                  />
                )}
              </CustomButton>
            </Grid>
          </div>
        )}

        {files.length < 1 && status && (
          <>
            {/* net banking verification in progress */}
            {renderNetBankingVerificationInProgress()}

            {/* net banking verified successfully */}
            {renderNetBankingVerificationSuccessful()}

            {/* net banking verification failed */}
            {renderNetBankingVerificationFailed()}
          </>
        )}
      </div>

      {(FAILED_STATUSES.hasOwnProperty(status) || !status) && !verifying && (
        <Grid container className="bg-color-3 px-4 py-4">
          <Grid item xs={12} style={{ textAlign: 'right' }}>
            <div className="flex items-center justify-end">
              <div className="flex items-center">
                {bankAccType === 'CURRENT' &&
                  source !== 'NETBANKING' &&
                  allowedNetBankingIds &&
                  allowedNetBankingIds.includes(selectedBankId) &&
                  isNetBankingAllowed && (
                    <>
                      <div className="flex items-center text-14 text-bold text-color-secondary-active">
                        <div
                          className="flex items-center cursor-pointer"
                          onClick={handleClickOnNetBanking}
                        >
                          <div className="text-2xl mr-1"> +</div>CONNECT VIA
                          NETBANKING
                        </div>
                        <Tooltip
                          title="Net Banking is quicker, simpler and more secure method of linking your banking data. We do not store or share your bank credentials. You'll be redirected back to BridgeUp after Netbanking is successful."
                          className="ml-2"
                          placement="top"
                        >
                          <InfoIcon className="cursor-pointer" />
                        </Tooltip>
                      </div>
                      <div className="flex flex-col items-center text-16 mx-3 text-color-3">
                        <div className="bup-banking-border-text"></div>
                        <div>or</div>
                        <div className="bup-banking-border-text"></div>
                      </div>
                    </>
                  )}
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    inputFile.current && inputFile.current.click();
                  }}
                  className="flex items-center uppercase text-14 text-bold"
                >
                  <div className="mr-1 text-2xl">+</div> UPLOAD BANK STATEMENT
                </a>
              </div>
            </div>
          </Grid>
        </Grid>
      )}

      <Dialog
        open={redirectToNetBankingOpen}
        onClose={() => null}
        aria-labelledby="responsive-dialog-title"
        fullWidth={true}
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
            <Grid className="flex" item xs={12}>
              <InProgressIcon className="cursor-pointer" />
            </Grid>
            <Grid className="flex" item xs={12}>
              <div className="text-24 text-bold">
                Redirecting for Netbanking
              </div>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent className="p-0 mr-6 ml-6 mb-8">
          <div className="mt-1 text-14">
            Net Banking is quicker, simpler and more secure method of linking
            your banking data. We do not store or share your bank credentials.
            You'll be redirected back to BridgeUp after Netbanking is
            successful.
          </div>
        </DialogContent>
      </Dialog>

      <Dialog
        open={warningPopup}
        onClose={() => null}
        aria-labelledby="responsive-dialog-title"
        maxWidth={'sm'}
        fullWidth
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
              <img src={question} alt="logo" />
            </Grid>
            <Grid item sm={6} xs={12}>
              <CloseOutlinedIcon
                onClick={() => setWarningPopup(false)}
                style={{ float: 'right', cursor: 'pointer' }}
              ></CloseOutlinedIcon>
            </Grid>
          </Grid>
        </DialogTitle>
        <DialogContent className="p-0 mt-6 mr-6 ml-6 mb-8">
          <div className="text-24 text-bold">Are you sure?</div>
          <div className="mt-2 text-14 text-regular text-color-3">
            All your manually uploaded documents will be deleted.
          </div>
          <div className={`btn-holders mt-4 flex justify-end`}>
            <CustomButton
              onClick={() => setWarningPopup(false)}
              fullWidth={true}
              buttonClassName={'secondary-button'}
              variant="outlined"
              style={{ maxWidth: '150px' }}
            >
              CANCEL
            </CustomButton>
            <CustomButton
              onClick={handleSwapMethod}
              fullWidth={true}
              style={{ maxWidth: '150px', marginLeft: '10px' }}
              buttonClassName={'primary-button'}
              disabled={deleteBankMutationLoading}
              variant="contained"
            >
              CONNECT VIA NETBANKING
              {deleteBankMutationLoading && (
                <CircularProgress size={20} color="primary" />
              )}
            </CustomButton>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
