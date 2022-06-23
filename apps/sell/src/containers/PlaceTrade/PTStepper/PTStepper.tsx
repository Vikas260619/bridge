import React, { useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { TRADE_LIFE_CYCLE } from 'apps/sell/src/utils/constants';

import './PTStepper.scss';

const steps = [
  'Select Contracts',
  'Payment Mandate',
  'Asset Purchase Agreement',
];
interface PTStepperProps {
  tradeId: number | null;
  tradeStatus: string | null;
}
const PTStepper: React.FC<PTStepperProps> = ({ tradeId, tradeStatus }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [searchParams, setSearchParams] = useSearchParams();
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState(Array(3).fill(false));
  const [disabled, setDisabled] = React.useState([false, true, true]);
  const statusIndex = TRADE_LIFE_CYCLE.findIndex((s) => s === tradeStatus);
  const isInReview = ['APA_IN_REVIEW', 'MANDATE_IN_REVIEW'].includes(
    tradeStatus || ''
  );

  useEffect(() => {
    if (!tradeStatus) {
      setActiveStep(0);
      setDisabled([false, true, true]);
      setCompleted([false, false, false]);
      return;
    }

    if (location.pathname.includes('apa')) {
      setActiveStep(2);
    } else if (location.pathname.includes('mandate-generate')) {
      setActiveStep(1);
    } else {
      setActiveStep(0);
    }

    const statusIndex = TRADE_LIFE_CYCLE.findIndex((s) => s === tradeStatus);

    if (statusIndex >= 4 || isInReview) {
      setDisabled([false, false, false]);
    } else if (statusIndex < 1) {
      setDisabled([false, true, true]);
    } else if (statusIndex < 5) {
      setDisabled([false, false, true]);
    }

    if (statusIndex < 1) {
      setCompleted([false, false, false]);
    } else if (statusIndex < 5) {
      setCompleted([true, false, false]);
    } else if (statusIndex < 7) {
      setCompleted([true, true, false]);
    } else if (statusIndex < 10) {
      setCompleted([true, true, true]);
    }

    if (
      location.pathname.includes('mandate-generate') &&
      searchParams.get('status') === 'success'
    ) {
      setDisabled([false, false, false]);
    }

    if (
      location.pathname.includes('apa') &&
      searchParams.get('status') === 'success'
    ) {
      setCompleted([true, true, true]);
    }

    if (['MANDATE_IN_REVIEW', 'MANDATE_SIGNED'].includes(tradeStatus)) {
      setDisabled([false, false, false]);
      setCompleted([true, false, false]);
    }
    if (['APA_IN_REVIEW'].includes(tradeStatus)) {
      setDisabled([false, false, false]);
      setCompleted([true, true, false]);
    }
  }, [location, tradeStatus]);

  const handleGoBack = () => {
    if (location.pathname.includes('mandate-generate')) {
      navigate('/trade/initiate');
    } else if (location.pathname.includes('initiate')) {
      navigate('/dashboard');
    } else if (location.pathname.includes('apa-sign') && tradeId) {
      navigate(`/trade/mandate-generate/${tradeId}`);
    }
  };

  const handleNavigateStep = (stepToBeNavigated: number) => {
    if (stepToBeNavigated === 1) {
      navigate('/trade/initiate');
    } else if (
      stepToBeNavigated === 2 &&
      (statusIndex > 0 || isInReview) &&
      tradeId
    ) {
      navigate(`/trade/mandate-generate/${tradeId}`);
    } else if (
      stepToBeNavigated === 3 &&
      (statusIndex > 3 ||
        (location.pathname.includes('mandate-generate') &&
          searchParams.get('status') === 'success') ||
        isInReview) &&
      tradeId
    ) {
      navigate(`/trade/apa-sign/${tradeId}`);
    }
  };

  return (
    <div>
      <div
        className="w-full flex justify-start items-center mb-3 pl-14 py-2"
        style={{ backgroundColor: '#161B25' }}
      >
        <ArrowBackIcon
          className="w-5 h-5 ml-3 cursor-pointer"
          onClick={handleGoBack}
        />
        <div className="mx-5">|</div>
        <div>New Trade</div>
      </div>
      <Box
        justifyContent="flex-start"
        display="flex"
        className="px-14 place-trade-stepper"
      >
        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((label, index) => {
            // const stepProps: { completed?: boolean } = {};
            // const labelProps: {
            //   optional?: React.ReactNode;
            // } = {};

            return (
              <Step
                onClick={() => handleNavigateStep(index + 1)}
                className="cursor-pointer"
                key={label}
                completed={completed[index]}
                disabled={disabled[index]}
                // {...stepProps}
              >
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </Box>
    </div>
  );
};

export default PTStepper;
