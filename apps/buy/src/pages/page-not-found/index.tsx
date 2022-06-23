import { Button, Grid, Typography } from '@mui/material';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/user/UserContext';
import pageNotFoundImg from './../../assets/images/404.png';

const PageNotFound = () => {
  const userContext = useContext(UserContext);

  return (
    <Grid
      container
      sx={{ minHeight: '100vh' }}
      justifyContent={'center'}
      alignContent={'center'}
    >
      <Grid
        item
        xs={12}
        sm={8}
        md={6}
        xl={4}
        display="flex"
        flexDirection={'column'}
        className="text-center"
      >
        <img src={pageNotFoundImg} alt="page not found"></img>
        <Typography variant="h2" fontWeight={700} gutterBottom mt={8}>
          Page Not Found
        </Typography>
        <Typography
          variant="h3"
          className="text-color-3"
          fontWeight={400}
          mb={2}
        >
          Sorry. the content you’re looking for doesn’t exist. Either it was
          removed, or you mistyped the link.
        </Typography>

        <div>
          {userContext.isAuthenticated && (
            <Button
              component={Link}
              to={'/dashboard'}
              size={'large'}
              className="primary-btn"
            >
              GO TO DASHBOARD
            </Button>
          )}
          {!userContext.isAuthenticated && (
            <Button
              component={Link}
              to={'/login'}
              size={'large'}
              className="primary-btn"
            >
              GO TO LOGIN
            </Button>
          )}
        </div>
      </Grid>
    </Grid>
  );
};

export default PageNotFound;
