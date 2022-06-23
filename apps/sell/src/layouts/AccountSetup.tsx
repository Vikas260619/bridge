import { Grid } from '@mui/material';

import { Outlet } from 'react-router-dom';

const AccountSetupLayout = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="flex-start"
      spacing={0}
      style={{ minHeight: 'inherit' }}
    >
      <Outlet />
    </Grid>
  );
};

export default AccountSetupLayout;
