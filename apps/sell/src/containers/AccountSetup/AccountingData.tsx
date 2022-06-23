import React, { useState, useEffect, useRef } from 'react';
import { Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import 'react-phone-input-2/lib/style.css';
import 'fontsource-raleway';

// assets imports

import logoImage from '../../assets/images/logo.svg';
import svgReplaceFile from '../../assets/images/arr.svg';
import logout from '../../assets/images/logout.svg';

// import {
//   useGetListIntegrationsQuery,
//   useExchangeSaveTokenMutation,
//   useGenerateFileRegistryUploadUrlMutation,
//   useAccountingExcelUploadMutation,
//   namedOperations,
// } from '@bridgeup/data-access';

import {
  useGenerateFileRegistryUploadUrlMutation,
  useAccountingExcelUploadMutation,
} from '@bridgeup/data-access/hooks/company/file-upload.hooks';
import {
  useGetListIntegrationsQuery,
  namedOperations,
} from '@bridgeup/data-access/hooks/company/list-integration.hooks';
import { useExchangeSaveTokenMutation } from '@bridgeup/data-access/hooks/company/stripe-exchange-save-token.hooks';

import { FAILED_STATUSES, SUCCESS_STATUSES } from '../../utils/constants';

import { CardWrapper } from '../../components/CardWrapper';
import { CardDataType } from '../../types/AccountSetup';
import { ChargebeeType } from '../../types/AccountSetup';
import { ComingSoon } from '../../components/ComingSoon';
import { Fileupload } from '../../components/Fileupload';
import { useTitle } from '@bridgeup/common/hooks';
import { SignOut } from '@bridgeup/common/auth/services/Login';
import ErrorToast from '../../components/ErrorToast';
import CustomButton from '../../components/CustomButton/CustomButton';
import { AccountSetupSkeleton } from '../../components/AccountSetupSkeleton';
import StepperComponent from '../../components/StepperComponent/StepperComponent';
import { MultipleFileupload } from '../../components/MultipleFileUpload';
import bin from '../../assets/images/bin.svg';
import reload from '../../assets/images/rotateright.svg';
import axios from '@bridgeup/common/rest/client';

function AccountingData(props: any) {
  useTitle('Accounting Data - BridgeUp');

  const navigate = useNavigate();
  const inputFileRef = useRef<HTMLInputElement>(null);

  const { loading, error, data } = useGetListIntegrationsQuery({
    fetchPolicy: 'no-cache',
  });
  const [open, setOpen] = React.useState<boolean>(false);
  const [cardData, setCardData] = useState<any[]>([]);
  const [hasError, setError] = useState<any>(false);
  const [openComingSoon, setOpenComingSoon] = useState<any>(false);
  const [selectedFile, setFile] = useState<any>();
  const [openFileupload, setFileupload] = useState(false);
  const [fileId, setFileId] = useState(0);
  const [isLogout, setLogout] = useState(false);
  const [isStatusError, setStatusError] = useState(false);
  const [verified, setVerified] = useState(false);
  const [isNewFile, setIsNewFile] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isReplaceFile, setIsReplaceFile] = useState<any>(null);

  useEffect(() => {
    if (isNewFile) onFileupload();
    if (isReplaceFile) setFileupload(true);
  }, [isNewFile, isReplaceFile]);

  useEffect(() => {
    if (data && data.listIntegrations) {
      let arr: any[] = [];
      let hasFailed = false;
      let hasSuccess = false;
      data.listIntegrations.forEach((item) => {
        if (item && item.category === 'ACCOUNTING') {
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
                'EXCEL_UPLOAD'
            ) {
              setVerified(true);
            }
            if (
              item.integrations[0].company_integrations[0]
                ?.company_integration_files?.length
            ) {
              setFile(
                item.integrations[0].company_integrations[0]
                  .company_integration_files
              );
            }
          }
        }
      });
      setCardData(arr);
      if (!hasSuccess) {
        setStatusError(hasFailed);
      } else {
        setStatusError(false);
      }
    }
  }, [data]);

  const onCardClicked = (data: CardDataType) => {
    if (data.is_active) {
      if (data?.company_integrations && data?.company_integrations.length) {
        const foundData = data?.company_integrations?.find((item) =>
          FAILED_STATUSES.hasOwnProperty(item.status)
        );
        if (!foundData && data?.company_integrations?.length) {
          return;
        }
      }
      if (data.source === 'QUICKBOOKS' && data.url) {
        window.location.assign(data.url);
      } else if (data.source === 'ZOHOBOOKS' && data.url) {
        window.location.assign(data.url);
      } else if (data.source === 'EXCEL_UPLOAD') {
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
      let params = {
        scope: 'read_only',
        api_key: data.api_key,
        site: data.site,
      };
      tokenMutation({ variables: { source: 'CHARGEBEE', params: params } });
    } catch (e) {
      console.log(e);
    }
  };

  const [tokenMutation, { loading: isChargebeeInProgress }] =
    useExchangeSaveTokenMutation({
      variables: { source: 'CHARGEBEE', params: params },
      update(cache, { data }) {
        setOpen(false);
      },
    });

  const onFileupload = () => {
    //Step 1 generate file registry
    uploadFile();
    setIsLoading(true);
    setIsNewFile(false);
  };

  const uploadFile = async () => {
    // Update the formData object
    if (selectedFile) {
      const newFiles: number[] = await Promise.all(
        selectedFile.map(async (item: any) => {
          const formData = new FormData();
          formData.append('file', item, item.name);
          formData.append('category_id', 'ACCOUNTING');
          formData.append('password', '');

          const token = localStorage.getItem('token');

          const config: any = {
            method: 'post',
            url: process.env.NX_ACTION_API + '/secure-upload',
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            data: formData,
          };

          const res = await axios(config);
          return res.data.file_registry_id;
        })
      );
      csvUploadMutation({
        variables: {
          file_ids: newFiles,
        },
      }).then((res) => {
        if (res?.data) {
          setFileupload(false);
          setIsLoading(false);
          setIsReplaceFile(null);
        } else if (res?.errors) {
          console.log(res?.errors[0].message);
        }
      });
    }
  };

  const [csvUploadMutation, { loading: csvUploading }] =
    useAccountingExcelUploadMutation({
      refetchQueries: [namedOperations.Query.getListIntegrations],
    });

  const isDeleteAllowed = (selectedFile: any) => {
    if (
      selectedFile.status &&
      FAILED_STATUSES.hasOwnProperty(selectedFile.status)
    ) {
      return true;
    }
    if (!selectedFile.status) {
      return true;
    }
    return false;
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
          <AccountSetupSkeleton loading={loading}>
            <div className="small-container new-c">
              <div className="logo">
                <img src={logoImage} alt="logo" />
              </div>
              <div className="mt-5">
                {isStatusError ? (
                  <ErrorToast message="Accounting partner linking could not be completed. Please try again." />
                ) : (
                  <ErrorToast message="" />
                )}
                <div className="mt-5 text-24 text-bold">
                  Link your Accounting Data
                </div>
                <div className="text-14 text-regular mt-1 text-color-2">
                  This helps us understand your company's financial performance
                  and operational health.
                </div>
                <div className="mt-10">
                  <CardWrapper onClick={onCardClicked} data={cardData} />
                </div>
                {selectedFile &&
                  selectedFile.map((file: any) => (
                    <Grid item sm={12} xs={12}>
                      <div
                        className="upload-file sm"
                        style={{
                          marginTop: 20,
                          border:
                            file.status === 'FAILED'
                              ? '1px dashed red'
                              : '1px dashed #2d477b',
                        }}
                      >
                        <p className="bg-f">
                          <span>{file.file_registry?.name}</span>
                        </p>
                        {file.status === 'FAILED' && (
                          <img
                            className="ml-auto cursor-pointer"
                            src={reload}
                            alt="logo"
                          />
                        )}
                        {file.status === 'FAILED' && (
                          <img
                            className="ml-8 cursor-pointer"
                            src={bin}
                            alt="logo"
                          />
                        )}
                      </div>
                    </Grid>
                  ))}
                <div className="mt-16">
                  <Grid
                    container
                    direction="row"
                    justifyContent="space-between"
                    spacing={4}
                  >
                    <Grid item sm={6} xs={12}>
                      <CustomButton
                        onClick={(e) => navigate('/banking')}
                        fullWidth={true}
                        buttonClassName={'secondary-button'}
                        variant="outlined"
                      >
                        BACK
                      </CustomButton>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                      <CustomButton
                        onClick={() => navigate('/payment-partners')}
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

        <StepperComponent currentStep={3} isLogout={isLogout} logout={logout} />
      </Grid>
      <ComingSoon
        verified={verified}
        description="Looks like we don’t support your platform. Sorry about that! You can add your accounting data manually through an XLS file for now."
        open={openComingSoon}
        handleClose={() => setOpenComingSoon(false)}
        openUpload={() => {
          setOpenComingSoon(false);
          setFileupload(true);
        }}
      />
      {/ Upload FIle /}
      {openFileupload ? (
        <MultipleFileupload
          isLoading={isLoading}
          setIsNewFile={setIsNewFile}
          setFile={setFile}
          file={isReplaceFile || selectedFile}
          open={openFileupload}
          handleClose={() => setFileupload(false)}
          onFileupload={onFileupload}
          description="Download Accounting Data XLS template to ensure your file is accurately formatted."
          format="XLXS or XLS format"
          accepts="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"
          sampleUrl="https://d1x5ratsvuzhpi.cloudfront.net/templates/Template%20for%20accounting%20linking%20_%20sample-pl-balance-sheet.xlsx"
        />
      ) : null}
    </React.Fragment>
  );
}

export default AccountingData;