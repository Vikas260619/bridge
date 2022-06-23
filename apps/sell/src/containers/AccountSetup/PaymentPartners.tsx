import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Grid,
  CircularProgress,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  FormHelperText,
} from '@mui/material';
import 'react-phone-input-2/lib/style.css';
import axios from 'axios';

// assets imports
import logoImage from '../../assets/images/logo.svg';
import svgReplaceFile from '../../assets/images/arr.svg';
import logout from '../../assets/images/logout.svg';

import {
  useGenerateFileRegistryUploadUrlMutation,
  useSubscriptionCsvMutation,
} from '@bridgeup/data-access/hooks/company/file-upload.hooks';
import { DeletableModel } from '@bridgeup/data-access';
import { useGetCompanyQuery } from '@bridgeup/data-access/hooks/company/company.hooks';
import { useExchangeSaveTokenMutation } from '@bridgeup/data-access/hooks/company/stripe-exchange-save-token.hooks';
import {
  namedOperations,
  useGetListIntegrationsQuery,
} from '@bridgeup/data-access/hooks/company/list-integration.hooks';
import { useUpdateEstimatedArrMutation } from '@bridgeup/data-access/hooks/company/update-company-arr.hooks';
import { ARR, FAILED_STATUSES, SUCCESS_STATUSES } from '../../utils/constants';

import { useTitle } from '@bridgeup/common/hooks';
import { namedOperations as companyNamedOperations } from '@bridgeup/data-access/hooks/company/company.hooks';

import ErrorToast from '../../components/ErrorToast';
import { CardWrapper } from '../../components/CardWrapper';
import { CardDataType } from '../../types/AccountSetup';
import { ChargebeeModal } from '../../components/Chargebee';
import { ChargebeeType } from '../../types/AccountSetup';
import { ComingSoon } from '../../components/ComingSoon';
import { Fileupload } from '../../components/Fileupload';
import CustomButton from '../../components/CustomButton/CustomButton';
import { AccountSetupSkeleton } from '../../components/AccountSetupSkeleton';
import StepperComponent from '../../components/StepperComponent/StepperComponent';

function PaymentPartners(props: any) {
  useTitle('Payment Partner - BridgeUp');
  const inputFileRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const { loading, error, data } = useGetListIntegrationsQuery({
    fetchPolicy: 'no-cache',
  });
  const { loading: companyLoading, data: company } = useGetCompanyQuery({
    fetchPolicy: 'no-cache',
  });
  const [open, setOpen] = React.useState<boolean>(false);
  const [cardData, setCardData] = useState<any[]>([]);
  const [estimated_arr, setEstimatedArr] = useState<number>();
  const [hasError, setError] = useState<any>(false);
  const [openComingSoon, setOpenComingSoon] = useState<any>(false);
  const [selectedFile, setFile] = useState<any>();
  const [openFileupload, setFileupload] = useState(false);
  const [fileId, setFileId] = useState(0);
  const [chargebeeMeta, setChargebeeMeta] = useState({});
  const [isLoading, setLoading] = useState<boolean>(false);
  const [isLogout, setLogout] = useState(false);
  const [isStatusError, setStatusError] = useState(false);

  const [verified, setVerified] = useState(false);
  const [isNewFile, setIsNewFile] = useState(false);
  const [isUploadInProgress, setIsUploadInProgress] = useState(false);
  const [isReplaceFile, setIsReplaceFile] = useState<any>(null);
  const [currentIntegrationId, setCurrentIntegrationId] = useState<
    number | null
  >(null);

  useEffect(() => {
    if (isNewFile) {
      onFileupload();
    }
    if (isReplaceFile) {
      setFileupload(true);
    }
  }, [isNewFile, isReplaceFile]);

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (data && data.listIntegrations) {
      const arr: any[] = [];
      let hasFailed = false;
      let hasSuccess = false;
      data.listIntegrations.forEach((item) => {
        if (item && item.category === 'SUBSCRIPTION') {
          arr.push({
            auth_protocol: item.auth_protocol,
            category: item.category,
            is_active: item.is_active,
            source: item.source,
            url: item.url,
            company_integrations:
              item.integrations.length &&
              item.integrations[0].company_integrations,
            metadata: item.integrations.length && item.integrations[0].metadata,
            logo_url: item.logo_url,
          });

          if (
            item.integrations.length &&
            item.integrations[0].company_integrations.length
          ) {
            let status = item.integrations[0].company_integrations[0].status;
            if (FAILED_STATUSES.hasOwnProperty(status)) {
              hasFailed = true;
            }
            if (SUCCESS_STATUSES.hasOwnProperty(status)) {
              hasSuccess = true;
            }
            if (
              SUCCESS_STATUSES.hasOwnProperty(status) &&
              item.integrations[0].company_integrations[0].source ==
                'CSV_UPLOAD'
            ) {
              setVerified(true);
            }
            if (
              item.integrations[0].company_integrations[0]
                .company_integration_files?.length
            ) {
              setFile({
                name: item.integrations[0].company_integrations[0]
                  .company_integration_files[0].file_registry.name,
                status: item.integrations[0].company_integrations[0].status,
              });
              setCurrentIntegrationId(
                item.integrations[0].company_integrations[0].id
              );
            }
          }
        }
      });
      setCardData(arr);
      if (!hasSuccess) {
        setStatusError(hasFailed);
      }
    }
  }, [data]);

  useEffect(() => {
    if (company?.company[0].estimated_arr)
      setEstimatedArr(company?.company[0].estimated_arr);
  }, [company]);

  const onCardClicked = (data: CardDataType) => {
    if (data.is_active) {
      if (data?.company_integrations?.length) {
        const foundData = data?.company_integrations?.find((item) =>
          Object.keys(FAILED_STATUSES).find((key) => key === item.status)
        );
        if (!foundData) {
          return;
        }
      }

      if (data.source === 'STRIPE' && data.url) {
        window.location.assign(data.url);
      } else if (data.source === 'CHARGEBEE') {
        setChargebeeMeta(data?.metadata);
        setOpen(true);
      } else if (data.source === 'CSV_UPLOAD') {
        setFileupload(true);
      }
    } else {
      setOpenComingSoon(true);
    }
  };

  // To keep typescript happy
  let params;
  const submitChargebee = (data: ChargebeeType) => {
    try {
      const params = {
        scope: 'read_only',
        api_key: data.api_key,
        site: data.site,
      };
      tokenMutation({ variables: { source: 'CHARGEBEE', params: params } });
    } catch (e) {
      console.log(e);
    }
  };

  const [
    tokenMutation,
    { loading: isChargebeeInProgress, error: chargebeeError },
  ] = useExchangeSaveTokenMutation({
    variables: { source: 'CHARGEBEE', params: params },
    update(cache, { data }) {
      if (data) {
        setOpen(false);
      }
    },
  });

  const [updateArrMutation, { loading: isUpdating }] =
    useUpdateEstimatedArrMutation({
      variables: { estimated_arr: estimated_arr },
      refetchQueries: [companyNamedOperations.Query.getCompany],
      update(cache, { data }) {
        if (data?.update_company?.affected_rows) {
          navigate('/setup-success');
        }
      },
    });

  const updateEstimatedArr = async () => {
    if (!estimated_arr) {
      setError(true);
      return;
    } else {
      setError(false);
    }
    setLoading(true);
    updateArrMutation();
  };

  const onFileupload = () => {
    //Step 1 generate file registry
    generateRegistryMutation();
    setIsUploadInProgress(true);
    setIsNewFile(false);
  };

  const uploadFile = (data: any) => {
    setFileId(data.file_registry_id);
    const config: any = {
      method: 'put',
      url: data.upload_url,
      headers: {
        'Content-Type': selectedFile.type,
      },
      data: selectedFile,
    };

    axios(config)
      .then(function (response) {
        csvUploadMutation({
          variables: {
            file_id: data.file_registry_id,
            isReplaceSub: isReplaceFile ? false : true,
            modelName: DeletableModel.CompanyIntegration,
            where: {
              id: currentIntegrationId,
            },
          },
        }).then((res) => {
          if (res?.data) {
            setFileupload(false);
            setIsUploadInProgress(false);
            setIsReplaceFile(null);
          } else if (res?.errors) {
            console.log(res?.errors[0].message);
          }
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const [generateRegistryMutation, { loading: fileUploading }] =
    useGenerateFileRegistryUploadUrlMutation({
      variables: {
        name: selectedFile?.name,
        category_id: 'SUBSCRIPTION',
        content_type: selectedFile?.type,
      },
      update(cache, { data }) {
        if (data) {
          uploadFile(data.generateFileRegistryUploadURL);
        }
      },
    });

  const [csvUploadMutation, { loading: csvUploading }] =
    useSubscriptionCsvMutation({
      refetchQueries: [namedOperations.Query.getListIntegrations],
    });

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
          <AccountSetupSkeleton loading={loading}>
            <div className="small-container new-c">
              <div className="logo">
                <img src={logoImage} alt="logo" />
              </div>
              <div className="mt-5">
                {isStatusError ? (
                  <ErrorToast message="Payment partner linking could not be completed. Please try again." />
                ) : (
                  <ErrorToast message="" />
                )}
                <div className="mt-5 text-24 text-bold">
                  Link your Payment Partner
                </div>
                <div className="text-14 text-regular mt-1 text-color-2">
                  This helps us automatically identify your recurring revenue
                  and sync it with your BridgeUp account.
                </div>
                <div className="mt-10">
                  <CardWrapper onClick={onCardClicked} data={cardData} />
                </div>

                {selectedFile && (
                  <Grid item sm={12} xs={12}>
                    <div
                      className="upload-file sm mb-20"
                      style={{ marginTop: 20 }}
                    >
                      <p className="bg-f">
                        <span>{selectedFile.name}</span>
                      </p>

                      <input
                        // value={isReplaceFile}
                        onChange={(e: any) =>
                          setIsReplaceFile(e.target.files[0])
                        }
                        ref={inputFileRef}
                        accept=".csv"
                        id="upload-button-file"
                        type="file"
                        name=""
                        style={{ display: 'none' }}
                      />
                      <img
                        className="ml-auto cursor-pointer w-5 h-5"
                        onClick={(e) => {
                          e.preventDefault();
                          inputFileRef.current && inputFileRef.current.click();
                        }}
                        src={svgReplaceFile}
                        alt="logo"
                      />
                    </div>
                  </Grid>
                )}
                <div className="btn-holders mt-16 mb-10"></div>

                <div className="mt-16 mb-10">
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    spacing={4}
                  >
                    <Grid item sm={6} xs={12}>
                      <CustomButton
                        onClick={() => navigate('/accounting-partners')}
                        fullWidth={true}
                        buttonClassName={'secondary-button'}
                        variant="outlined"
                      >
                        BACK
                      </CustomButton>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <CustomButton
                        onClick={updateEstimatedArr}
                        disabled={isLoading || !estimated_arr}
                        buttonClassName={'primary-button'}
                        fullWidth={true}
                      >
                        SUBMIT For REVIEW&nbsp;&nbsp;&nbsp;&nbsp;
                        {isUpdating && (
                          <CircularProgress size={20} color="primary" />
                        )}
                      </CustomButton>
                    </Grid>
                  </Grid>
                </div>
              </div>
            </div>
          </AccountSetupSkeleton>
        </Grid>

        <StepperComponent currentStep={4} isLogout={isLogout} logout={logout} />
      </Grid>
      <ChargebeeModal
        open={open}
        handleClose={handleClose}
        isLoading={isChargebeeInProgress}
        onFormSubmit={submitChargebee}
        metadata={chargebeeMeta}
        chargebeeError={chargebeeError}
      />
      <ComingSoon
        verified={verified}
        description="Currently, we do not support this payment partner. Sorry about that! You can add your payment data manually using a CSV file."
        open={openComingSoon}
        handleClose={() => setOpenComingSoon(false)}
        openUpload={() => {
          setOpenComingSoon(false);
          setFileupload(true);
        }}
      />
      {/* Upload FIle */}
      <Fileupload
        isLoading={isUploadInProgress}
        setIsNewFile={setIsNewFile}
        setFile={setFile}
        file={isReplaceFile || selectedFile}
        open={openFileupload}
        handleClose={() => setFileupload(false)}
        onFileupload={onFileupload}
        description="Download Subscription Data CSV template to ensure your file is accurately formatted."
        format="CSV"
        accepts=".csv"
        sampleUrl="https://cdn.bridgeup.com/templates/subscriptions/2021-12-25/Subscription%20Data%20Template.zip"
      />
    </React.Fragment>
  );
}

export default PaymentPartners;
