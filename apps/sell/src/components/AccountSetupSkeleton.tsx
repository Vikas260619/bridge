import { Grid } from '@mui/material'
import { CardDataType } from '../types/AccountSetup'
import { Skeleton } from '@mui/material'
import error from '../assets/images/error-link.svg'
interface Props {
  loading: boolean
  children: any
}

export const AccountSetupSkeleton = ({ children, loading }: Props) => {
  if (loading) {
    return (
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        spacing={0}
        style={{ height: '100%' }}
        className="login-holder"
      >
        <Grid
          item
          sm={6}
          xs={12}
          // style={{ backgroundColor: '#030914', minHeight: '100vh' }}
        >
          {/* <Skeleton/> */}
          <Grid item sm={12} xs={12}>
            <Skeleton
              className="mt-100"
              style={{ height: '40px' }}
              variant="rectangular"
            />
            <Skeleton
              style={{ marginTop: '40px', height: '80px' }}
              variant="rectangular"
            />
            <Skeleton
              style={{ marginTop: '40px', height: '80px' }}
              variant="rectangular"
            />
            <Skeleton
              style={{ marginTop: '40px', height: '80px' }}
              variant="rectangular"
            />
            <Skeleton
              style={{ marginTop: '40px', height: '80px' }}
              variant="rectangular"
            />
          </Grid>
        </Grid>
      </Grid>
    )
  } else {
    return children
  }
}
