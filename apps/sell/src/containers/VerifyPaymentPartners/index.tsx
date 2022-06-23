import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
import 'fontsource-raleway';
import {
  Button,
  Grid,
  TextField,
  FormControl,
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
} from '@mui/material';

// assets imports
import logoImage from '../../assets/images/logo.svg';
import bgImage from '../../assets/images/bg.svg';
import building from '../../assets/images/building.svg';

import { useExchangeSaveTokenMutation } from '@bridgeup/data-access/hooks/company/stripe-exchange-save-token.hooks';

import {
  useUpdateIntegrationAuthMutation,
  useZohoAccountingSyncMutation,
} from '@bridgeup/data-access/hooks/company/zoho-integration.hooks';

import ErrorToast from '../../components/ErrorToast';
import CustomDropDown from '../../components/CustomDropDown/CustomDropDown';

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export function VerifyPaymentPartners(props: any) {
  const navigate = useNavigate();
  const tempParams = useParams();
  const [errorMessage, setErrorMessage] = useState<any>('');
  const query = useQuery();
  const [params, setParams] = useState({});

  // <!-- zoho integration varaiable
  const [open, setopen] = useState(false);
  const [id, setId] = useState<number>();
  const [apiInProgress, setApiInProgress] = useState(false);
  const [selectedOrg, setSelectedOrg] = useState<{
    id: string;
    name: string;
  } | null>(null);

  const [organizations, setOrganizations] = useState<
    { id: string; name: string }[] | null
  >(null);

  useEffect(() => {
    if (organizations) setopen(true);
  }, [organizations]);
  // -- !>

  useEffect(() => {
    let source = tempParams?.source;
    if (!source) return;
    source = source.toUpperCase();
    if (query.get('error') === 'access_denied' && source === 'STRIPE') {
      navigate('/payment-partners');
      return;
    }
    if (query.get('error') === 'access_denied' && source === 'QUICKBOOKS') {
      navigate('/accounting-partners');
      return;
    }

    if (query.get('error')) {
      setErrorMessage(query.get('error_description'));
      return;
    }

    switch (source) {
      case 'STRIPE':
        handleStripe();
        break;
      case 'QUICKBOOKS':
        handleQuickBooks();
        break;
      case 'ZOHOBOOKS':
        handleZohoBooks();
        break;

      default:
        break;
    }
  }, []);

  async function handleZohoBooks() {
    try {
      if (query.get('code')) {
        let params = {
          code: query.get('code'),
          location: query.get('location'),
          accounts_server: 'https://accounts.zoho.in',
        };
        tokenMutation({
          variables: { source: 'ZOHOBOOKS', params: params },
        }).then((res) => {
          if (res?.data) {
            if (res?.data && res?.data.exchangeSaveToken) {
              if (res?.data.exchangeSaveToken.id)
                setId(res?.data.exchangeSaveToken.id);
              if (res?.data.exchangeSaveToken.metadata) {
                const metadata = res?.data.exchangeSaveToken.metadata;
                const orgs = metadata.data.organizations;
                setOrganizations(orgs);
              } else {
                navigate('/accounting-partners');
              }
            }
          } else if (res?.errors) {
            console.log(res?.errors);
          }
        });
      }
    } catch (e) {
      console.log(e);
    }
  }
  async function handleQuickBooks() {
    try {
      let params = {
        url: `code=${query.get('code')}&state=${query.get(
          'state'
        )}&realmId=${query.get('realmId')}`,
      };
      mutationQuickBooks({
        variables: { source: 'QUICKBOOKS', params: params },
      });
    } catch (e) {
      console.log(e);
    }
  }
  async function handleStripe() {
    try {
      let params = {
        scope: query.get('scope'),
        code: query.get('code'),
        state: query.get('state'),
      };
      mutationStrip({ variables: { source: 'STRIPE', params: params } });
    } catch (e) {
      console.log(e);
    }
  }

  const [mutationStrip, { error: stripeError, loading: stripeLoading }] =
    useExchangeSaveTokenMutation({
      variables: { source: 'STRIPE', params: params },
      update() {
        navigate('/payment-partners');
      },
    });

  const [mutationQuickBooks, { error, loading }] = useExchangeSaveTokenMutation(
    {
      variables: { source: 'QUICKBOOKS', params: params },
      update() {
        navigate('/accounting-partners');
      },
    }
  );

  const [
    tokenMutation,
    { error: zohoIntegrationError, loading: zohoOrganisationsLoading },
  ] = useExchangeSaveTokenMutation();

  const [integrateZohoMutation, { loading: isZohoIntegrationInProgress }] =
    useUpdateIntegrationAuthMutation();

  const [
    zohoAccountingSyncMutation,
    { error: zohoAccountingSyncError, loading: zohoAccountSyncInProgress },
  ] = useZohoAccountingSyncMutation();

  const handleIntegrateZoho = () => {
    if (id && selectedOrg) {
      let integarationParams = {
        orgId: selectedOrg?.id,
        id: id,
      };
      setApiInProgress(true);
      integrateZohoMutation({ variables: integarationParams }).then((res) => {
        if (res?.data && res.data.update_integration_auth?.returning.length) {
          zohoAccountingSyncMutation({
            variables: { source: 'ZOHOBOOKS' },
          }).then((res) => {
            if (res?.data && res?.data.accountingSync?.message) {
              navigate('/accounting-partners');
            }
          });
        } else {
          // TODO: need to be removed
          console.log('zoho response -> ', res);
        }
      });
    }
  };

  let message = '';
  if (error) {
    error.graphQLErrors.map((error) => {
      message = error.message;
    });
  }
  if (zohoIntegrationError || zohoAccountingSyncError) {
    message =
      'Something went wrong. Please try again. Redirecting you to accounting page...';
    setTimeout(() => {
      navigate('/accounting-partners');
    }, 4000);
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={0}
      style={{ height: '100%' }}
      className="login-holder"
    >
      <Dialog
        open={open}
        aria-labelledby="responsive-dialog-title"
        maxWidth={'sm'}
        className="backdrop-filter backdrop-blur"
        PaperProps={{
          className: 'bg-color-secondary',
        }}
      >
        <DialogTitle className="pt-4 pr-6 pl-6 pb-0">
          <DialogTitle className="pt-8 pr-6 pl-6 pb-0">
            <Grid
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              spacing={3}
            >
              <Grid item sm={6} xs={12}>
                <img src={building} alt="logo" />
              </Grid>
            </Grid>
          </DialogTitle>
        </DialogTitle>
        <DialogContent className="p-0 mt-1 mr-10 ml-10 mb-8 mt-4">
          <div className="text-24 text-bold ">
            Select a company you would like to link with BridgeUp
          </div>
          <Grid item sm={12} xs={12}>
            <FormControl fullWidth variant="filled" className="input-fields">
              <div className="mt-5">
                <CustomDropDown
                  id="disable-clearable"
                  disableClearable={true}
                  options={organizations}
                  getOptionLabel={(option: any) => option.name}
                  variant="filled"
                  label="Select a company"
                  rootClass="zoho-book-integration"
                  value={selectedOrg}
                  onChange={(e: any, value: any) => setSelectedOrg(value)}
                />
              </div>
            </FormControl>
          </Grid>
          <div className="btn-holders mt-4">
            <Button
              disabled={!selectedOrg || apiInProgress}
              onClick={handleIntegrateZoho}
              variant="contained"
              size="large"
              fullWidth
              className={
                selectedOrg ? 'primary-btn' : 'primary-button-disabled'
              }
              color="primary"
              disableElevation
            >
              INTEGRATE ZOHOBOOKS
              {(isZohoIntegrationInProgress || zohoAccountSyncInProgress) && (
                <CircularProgress size={20} className="ml-2" color="primary" />
              )}
            </Button>
          </div>{' '}
        </DialogContent>
      </Dialog>
      <Grid
        item
        xs={6}
        style={{ backgroundColor: '#030914', minHeight: '100vh' }}
      >
        <div className="small-container">
          <div className="logo">
            <img src={logoImage} alt="logo" />
          </div>
          {(loading || stripeLoading || zohoOrganisationsLoading) && (
            <div>
              <Skeleton />
              <Skeleton animation="wave" />
              <Skeleton animation="wave" />
            </div>
          )}
          {(error || zohoIntegrationError || zohoAccountingSyncError) && (
            <ErrorToast message={message} />
          )}
          {errorMessage && <ErrorToast message={errorMessage} />}
          {/* {notFound &&
            <div className="verify-account mt-200">
              <h4>Verification code not found</h4>
            </div>
            }
            {forbidden &&
            <div className="verify-account mt-200">
              <h4>Verification Token is invalid</h4>
            </div>
            } */}
        </div>
      </Grid>
      <Grid
        item
        xs={6}
        style={{
          backgroundColor: '#0B111D',
          minHeight: '100vh',
          backgroundImage: `url(${bgImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom',
        }}
      >
        <div className="small-container carousel-hold"></div>
      </Grid>
    </Grid>
  );
}

export default VerifyPaymentPartners;
