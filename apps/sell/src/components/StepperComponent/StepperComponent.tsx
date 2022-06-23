import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Grid, CircularProgress, Box, Typography, Button } from '@mui/material';
import { SignOut } from '@bridgeup/common/auth/services/Login';
import frameImage from '../../assets/images/frame.png';
import StepperDialog from '../../components/Stepper-Dialog';
import style from '@bridgeup/common/design-system/style.module.scss';

import './StepperComponent.scss';
import { UserContext } from '../../context/UserContext';

interface StepperComponentProps {
  currentStep: number;
  isLogout: boolean;
  logout: string;
  logoutUser?(): void;
  hideLogout?: boolean;
}
// TODO: Fix layout issue in right container, finally deploy and test
const StepperComponent: React.FunctionComponent<StepperComponentProps> = ({
  currentStep,
  logout,
  hideLogout,
}) => {
  const steps = [
    [1, 'PAN'],
    [2, 'Bank Data'],
    [3, 'Accounting Data'],
    [4, 'Payment Partner'],
  ];
  const navigate = useNavigate();
  const [isLogout, setLogout] = useState(false);
  const userContext = useContext(UserContext);
  const [showStepperDialog, setShowStepperDialog] = useState(false);

  const handleLogoutUser = () => {
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
  return (
    <Grid
      item
      sm={5}
      xs={12}
      lg={5}
      className="stepper-component-main-grid pb-10"
    >
      {currentStep > 0 ? (
        <div className="small-container carousel-holder">
          <ul className="listing-right">
            {steps.map((step) => {
              return (
                <li
                  key={step[0]}
                  className={currentStep === step[0] ? 'current' : ''}
                >
                  <span className="number">{step[0]}</span>
                  <span className="step-name">{step[1]}</span>
                </li>
              );
            })}
          </ul>
          <div className="small-container carousel-holder">
            <Box
              sx={{
                backgroundColor: style.grey2,
                borderRadius: '2px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <img src={frameImage} alt="frame-image" />
              <Button variant='anchor'
                onClick={(e) => {
                  e.preventDefault();
                  setShowStepperDialog(true);
                }}
              >
                View Demo trade
              </Button>             
            </Box>
          </div>
          {!hideLogout && (
            <div className="stepper-logout-div">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleLogoutUser();
                }}
              >
                <div className="stepper-logout">
                  <img
                    style={{ display: 'inline-block', verticalAlign: 'middle' }}
                    src={logout}
                    alt="logo"
                  />
                  &nbsp;&nbsp;LOGOUT
                </div>
              </a>
              <CircularProgress
                size={20}
                className={
                  isLogout ? 'circular-progress' : 'circular-progress-hidden'
                }
                color="primary"
              />
            </div>
          )}
        </div>
      ) : (
        <div className="small-container carousel-holder"></div>
      )}
      <StepperDialog
        open={showStepperDialog}
        onClose={() => setShowStepperDialog(false)}
      ></StepperDialog>
    </Grid>
  );
};

export default StepperComponent;
