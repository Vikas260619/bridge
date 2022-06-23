import { useContext } from 'react';

import { Navigate, Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import { IUser, UserContext } from '../context/UserContext';

const AppLayout = () => {
  const userContext = useContext(UserContext);
  const user: IUser = userContext.user as IUser;
  console.log('Applayout called');

  if (user.company.status === 'REGISTERED') {
    console.log('company status is registered. navigating to pan connect');
    return <Navigate to="/pan-connect" />;
  }
  return (
    <div className="container mx-auto bup-container">
      <Header userName={user.first_name + ' ' + user.last_name} />
      <div className="bup-main-container">
        <Outlet />
      </div>
    </div>
  );
};

export default AppLayout;
