import dashboardQuery from './../graphql/company/company-dashboard-stats.graphql';
import apolloClient from '../apollo-client';
//TODO: move to all apis to mvvm
const DashboardApi = () => {
  apolloClient.query({ query: dashboardQuery }).then((data) => {
    console.log('Data from aplollo client', data);
  });
};

export default DashboardApi;
