import { Box, Grid, Link, Typography } from '@mui/material';
import { useContext, useEffect } from 'react';
import { Link as RouteLink } from 'react-router-dom';
import { MenuContext } from '../../context/menu/MenuContext';

export default function Dashboard() {
  const menuContext = useContext(MenuContext);
  menuContext.updateIndex(0);

  return (
    <Grid
      container
      flex={1}
      justifyContent="center"
      alignContent={'center'}
      paddingLeft={4.25}
    >
      <Grid
        item
        xs={12}
        sm={9}
        md={4}
        flexDirection="column"
        className="text-center"
        sx={{ marginBottom: 20 }}
      >
        <Box sx={{ marginBottom: 4 }}>
          <img
            src="./assets/images/dashboard-under-construction.png"
            width={230}
            style={{ background: '#0B111D', borderRadius: '50%' }}
            alt="dashboard under construction"
          ></img>
        </Box>
        <Typography
          variant="h6"
          fontWeight={700}
          mb={4}
          className="text-color-2"
        >
          Dashboard will be launched soon to track all your trades and orders.
        </Typography>
        <Typography variant="body2" gutterBottom>
          <RouteLink to={'/place-bid'}>MAKE A NEW INVESTMENT</RouteLink>
        </Typography>
      </Grid>
    </Grid>
  );
}
