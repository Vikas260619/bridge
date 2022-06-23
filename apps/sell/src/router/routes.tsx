import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import PublicLayout from '../layouts/PublicLayout';
import PrivateLayout from '../layouts/PrivateLayout';
import AccountSetupLayout from '../layouts/AccountSetup';
import AppLayout from '../layouts/App';

import Signup from '../containers/Signup';
import Login from '../containers/Login';
import ResendVerification from '../containers/Signup/resendVerification';
import VerifyEmail from '../containers/VerifyEmail';
import VerificationSuccess from '../containers/VerificationSuccess';
import ForgotPassword from '../containers/ForgotPassword';
import ResetPassword from '../containers/ResetForword';
import ChangePassword from '../containers/ChangePassword';
import Banking from '../containers/AccountSetup/BankData';
import PaymentPartners from '../containers/AccountSetup/PaymentPartners';
import VerifyPaymentPartners from '../containers/VerifyPaymentPartners';
import AccountingData from '../containers/AccountSetup/AccountingData';
import PanConnect from '../containers/AccountSetup/PanConnect';
import SignupSuccess from '../containers/Signup/SignupSuccess';
import SetupSuccess from '../containers/AccountSetup/Success';
import Terms from '../containers/Terms';
import MobileViewUnavailable from '../components/MobileViewUnavailable/MobileViewUnavailable';
import useWindowDimensions from '../utils/UseWindowDimensions/useWindowDimensions';
import ErrorPage from '../components/ErrorPage/ErrorPage';
import { configVariables } from '../utils/configVariables';
import PlaceTrade from '../containers/PlaceTrade/PlaceTrade';
import Dashboard from '../containers/Dashboard';
import SelectContract from '../components/SelectContract/SelectContract';
import PaymentMandate from '../components/PaymentMandate/PaymentMandate';
import APASign from '../components/APASign/APASign';

export default () => {
  const [offline, setOffline] = useState<boolean>(!window.navigator.onLine);

  useEffect(() => {
    window.addEventListener('offline', () => {
      setOffline(true);
    });
    window.addEventListener('online', () => {
      setOffline(false);
    });
  }, []);

  return offline ? (
    <ErrorPage
      isOfflinePopup={true}
      headerText={configVariables.offlineText}
      bodyText={configVariables.offlineDescText}
      buttonText={configVariables.goToLogin}
    />
  ) : (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route path="/signup" element={<Signup />} />
        <Route path="/resend-email" element={<ResendVerification />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify-email/:code" element={<VerifyEmail />} />
        <Route path="/verify-success" element={<VerificationSuccess />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:code" element={<ResetPassword />} />
        <Route path="/success" element={<SignupSuccess />} />
        <Route path="/terms" element={<Terms />} />
      </Route>
      <Route path="/" element={<PrivateLayout />}>
        <Route path="/" element={<AccountSetupLayout />}>
          <Route path="/change-password" element={<ChangePassword />} />
          <Route path="/pan-connect" element={<PanConnect />} />
          <Route path="/payment-partners" element={<PaymentPartners />} />
          <Route
            path="/payment-partner/:source"
            element={<VerifyPaymentPartners />}
          />

          <Route path="/banking" element={<Banking />} />
          <Route path="/accounting-partners" element={<AccountingData />} />
          <Route
            path="/accounting-partner/:source"
            element={<VerifyPaymentPartners />}
          />
          <Route path="/setup-success" element={<SetupSuccess />} />
        </Route>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/trade" element={<PlaceTrade />}>
            <Route index element={<SelectContract />} />
            <Route path="initiate" element={<SelectContract />} />
            <Route path="mandate-generate">
              <Route path=":id" element={<PaymentMandate />} />
            </Route>
            <Route path="apa-sign">
              <Route path=":id" element={<APASign />} />
            </Route>
          </Route>
        </Route>
      </Route>

      <Route
        path="*"
        element={
          <ErrorPage
            isOfflinePopup={false}
            headerText={''}
            bodyText={''}
            buttonText={''}
          />
        }
      />
    </Routes>
  );
};
