import { StrictMode, useEffect, useState } from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import Routes from './routes/index';
// 3rd party library imports
import { ApolloProvider } from '@apollo/client';
import apolloClient from '@bridgeup/common/apollo/client';
import { CssBaseline, GlobalStyles } from '@mui/material';
import { Analytics, AnalyticsBrowser } from '@segment/analytics-next';
import { ThemeProvider } from '@mui/material/styles';
import style from '@bridgeup/common/design-system/style.module.scss';
import appTheme from './theme';

import 'fontsource-raleway';
import 'fontsource-raleway/500.css';
import 'fontsource-raleway/600.css';
import 'fontsource-raleway/700.css';

import UserProvider from './context/user/UserProvider';
import ReactGA from 'react-ga';
import { LicenseInfo } from '@mui/x-data-grid-pro';

ReactGA.initialize(process.env.NX_GA_TRACKING_ID || '');

declare global {
  interface Window {
    analytics: any;
  }
}

if (process.env.NX_MATERIAL_UI_KEY) {
  LicenseInfo.setLicenseKey(process.env.NX_MATERIAL_UI_KEY);
}

function App() {
  // Segment integration
  const [analytics, setAnalytics] = useState<Analytics | undefined>(undefined);
  const [writeKey, setWriteKey] = useState(process.env.NX_SEGMENT_KEY || '');

  useEffect(() => {
    const loadAnalytics = async () => {
      const [response] = await AnalyticsBrowser.load({ writeKey });
      setAnalytics(response);
    };
    loadAnalytics();
  }, [writeKey]);

  useEffect(() => {
    if (analytics) {
      window.analytics = analytics;
    }
  }, [analytics]);

  return (
    <ApolloProvider client={apolloClient}>
      <UserProvider>
        <ThemeProvider theme={appTheme}>
          <CssBaseline />
          <GlobalStyles
            styles={{
              body: { backgroundColor: style.mainBackground },
            }}
          />
          <Router>
            <Routes />
          </Router>
        </ThemeProvider>
      </UserProvider>
    </ApolloProvider>
  );
}

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
);
