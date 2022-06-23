// assets imports
import { useContext, useState } from 'react';
import { Grid, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { AccountSetupSkeleton } from '../../components/AccountSetupSkeleton';

import { useTitle } from '@bridgeup/common/hooks';
import { useGetUserQuery } from '@bridgeup/data-access/hooks/company/user.hooks';

import logout from '../../assets/images/logout.svg';
import logoImage from '../../assets/images/logo.svg';

import { SignOut } from '@bridgeup/common/auth/services/Login';
import { UserContext } from '../../context/UserContext';
import CustomButton from '../../components/CustomButton/CustomButton';
import StepperComponent from '../../components/StepperComponent/StepperComponent';

function SignupSuccess(props: any) {
  useTitle('Welcome to BridgeUp - BridgeUp');

  const navigate = useNavigate();
  const [isLogout, setLogout] = useState(false);

  const userContext = useContext(UserContext);

  const logoutUser = () => {
    setLogout(true);

    SignOut()
      .then(() => {
        localStorage.clear();
      })
      .finally(() => {
        userContext.updateIsAuthenticated(false);
        localStorage.clear();
        navigate('/login', { state: null });
      });
  };

  const { loading, error, data } = useGetUserQuery();
  return (
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
          <div className="small-container">
            <div className="logo">
              <img src={logoImage} alt="logo" />
            </div>
            <div className="verify-account mt-24">
              <div className="text-bold text-24">
                Thank You, {data && data.user.length && data.user[0].first_name}
                !
              </div>
              <div className="text-regular text-14">
                <br />
                <br />
                Fantastic, you just set up your BridgeUp account. Sit back and
                relax, we will reach out as soon as we find the best deal for
                you
              </div>
              <div className="text-14 mt-8 text-color-2">
                Please refer to our{' '}
                <a href="https://bridgeup.com/faqs/" target="blank">
                  FAQs
                </a>{' '}
                for more details and if you have any questions please email us
                on{' '}
                <a href="mailto:contact@bridgeup.com">contact@bridgeup.com</a>
              </div>
              <div className="btn-holders mt-10 flex justify-center items-center">
                <Grid item sm={8}>
                  <CustomButton
                    onClick={() => navigate('/payment-partners')}
                    fullWidth={true}
                    buttonClassName={'primary-button'}
                  >
                    GO BACK TO ACCOUNT SETUP
                  </CustomButton>
                </Grid>
                <Grid item sm={4}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      logoutUser();
                    }}
                  >
                    <div className="stepper-logout flex items-center justify-center">
                      <img
                        style={{
                          display: 'inline-block',
                          verticalAlign: 'middle',
                        }}
                        src={logout}
                        alt="logo"
                      />
                      &nbsp;&nbsp;LOGOUT
                    </div>
                  </a>
                  {isLogout && <CircularProgress size={20} color="primary" />}
                </Grid>
              </div>
            </div>
          </div>
        </AccountSetupSkeleton>
      </Grid>
      <StepperComponent
        currentStep={-1}
        isLogout={false}
        logout={logout}
        logoutUser={logoutUser}
        hideLogout={true}
      />
    </Grid>
  );
}
export default SignupSuccess;
