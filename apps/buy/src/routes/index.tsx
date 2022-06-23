import { Route, Routes } from 'react-router-dom';
import PublicLayout from './../layouts/PublicLayout';
import PrivateLayout from './../layouts/PrivateLayout';
import Dashboard from '../pages/dashboard';
import CompanyOverview from '../pages/company-overview';
import Login from '../pages/login';
import PlaceBid from '../pages/place-bid';
import SetPassword from '../pages/set-password';
import ForgotPassword from '../pages/forgot-password';
import ResetPassword from '../pages/reset-password';
import PageNotFound from '../pages/page-not-found';

export default () => {
  return (
    <Routes>
      <Route path="/" element={<PublicLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/set-password" element={<SetPassword />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password/:code" element={<ResetPassword />} />
      </Route>
      <Route path="/" element={<PrivateLayout />}>
        <Route index element={<PlaceBid />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/place-bid" element={<PlaceBid />} />
        <Route
          path="/deal/:dealId/company/:companyId"
          element={<CompanyOverview />}
        />
      </Route>

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};
