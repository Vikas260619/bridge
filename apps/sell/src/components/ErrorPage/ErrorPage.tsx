import React from 'react';
import { useTitle } from '@bridgeup/common/hooks';
import CustomButton from '../CustomButton/CustomButton';
import { configVariables } from '../../utils/configVariables';
import { validateToken } from '@bridgeup/common/auth/utils/tokenValidation';

// assets
import logoImage from '../../assets/images/logo.svg';
import pageNotFoundError from '../../assets/images/page-not-found-error.svg';
import connectionLost from '../../assets/images/connectivity-lost.png';

import './ErrorPage.scss';

interface ErrorPageProps {
  isOfflinePopup: boolean;
  headerText: string;
  bodyText: string;
  buttonText: string;
}
const ErrorPage: React.FunctionComponent<ErrorPageProps> = ({
  isOfflinePopup,
  headerText,
  bodyText,
  buttonText,
}) => {
  useTitle('Welcome to BridgeUp - BridgeUp');

  return (
    <div className="error-page">
      <div className="error-page__logo flex justify-start items-center">
        <img className="ml-10" src={logoImage} alt="logo" />
      </div>
      <div className="error-page__desc flex flex-col justify-center items-center">
        <img
          src={isOfflinePopup || false ? connectionLost : pageNotFoundError}
          alt="logo"
        />
        <div className="text-32 text-bold mb-4 error-page__desc__header">
          {headerText || configVariables.pageNotFoundText}
        </div>
        <div className="text-24 error-page__desc__body">
          {bodyText || configVariables.pageNotFoundDescText1}
        </div>
        {!isOfflinePopup && (
          <div className="text-24 error-page__desc__body">
            {bodyText || configVariables.pageNotFoundDescText2}
          </div>
        )}
        {!isOfflinePopup && !validateToken() && (
          <div className="mt-10">
            <CustomButton
              onClick={() => window.location.assign('/login')}
              fullWidth={true}
              buttonClassName={'primary-button'}
              customClassName={'page-not-found-button'}
              variant="outlined"
            >
              {configVariables.goToLogin}
            </CustomButton>
          </div>
        )}
      </div>
    </div>
  );
};

export default ErrorPage;
