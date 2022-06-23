import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { Box, IconButton } from '@mui/material';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FactorInDetail from './FactorInDetail';
import { ReactComponent as TypeIcon } from '../../assets/icons/type-icon.svg';
import { ReactComponent as ArrIcon } from '../../assets/icons/arr-icon.svg';
import { ReactComponent as VintageIcon } from '../../assets/icons/vintage-icon.svg';
import { ReactComponent as FundingIcon } from '../../assets/icons/funding-icon.svg';
import { ReactComponent as TotalCustomersIcon } from '../../assets/icons/total-customers-icon.svg';
import { ReactComponent as MultiUsersIcon } from '../../assets/icons/marquee-icon.svg';

interface CompanyDetailProps {
  dealId: number;
  companyId: number;
  details: any;
}

const Details: React.FC<CompanyDetailProps> = ({
  dealId,
  companyId,
  details,
}) => {
  const [companyDetails, setCompanyDetails] = useState<any>([]);

  useEffect(() => {
    setCompanyDetails([
      {
        icon: <TypeIcon />,
        title: 'Type',
        value: details?.type || '',
      },
      {
        icon: <ArrIcon />,
        title: 'ARR',
        value: Math.round(details?.arr / 1000000) + ' Cr' || '--',
      },
      {
        icon: <VintageIcon />,
        title: 'Vintage',
        value:
          details?.vintage === -1
            ? '--'
            : details?.vintage === 1
            ? details?.vintage + ' Month'
            : details?.vintage + ' Months',
      },
      {
        icon: <FundingIcon />,
        title: 'Total Funding',
        value: Math.round(details?.totalFunding / 1000000) + ' Cr' || '--',
      },
    ]);
  }, [details]);

  return (
    <Card className="basic-card">
      <Typography variant="body1" mb={2}>
        {details?.description || '--'}
      </Typography>

      <Grid container spacing={2} mb={2.5}>
        {companyDetails.map((detail: any, index: number) => {
          return (
            <FactorInDetail
              icon={detail.icon}
              title={detail.title}
              value={detail.value}
              key={index}
            />
          );
        })}
      </Grid>

      <Divider variant="fullWidthDashed" />

      <Box my={2.5}>
        <Typography variant={'h6'} fontWeight={700} mb={2}>
          Customers
        </Typography>
        <Box className="flex items-center" mb={1.5}>
          <TotalCustomersIcon style={{ marginRight: '0.25rem' }} />
          <Typography variant={'body2'}>
            Total Customers :{' '}
            <Typography fontWeight={700} component="span">
              {details?.totalCustomers || '--'}
            </Typography>
          </Typography>
        </Box>
        <Box className="flex items-center">
          <MultiUsersIcon style={{ marginRight: '0.25rem' }} />
          <Typography variant={'body2'}>
            Marquee Customers :{' '}
            <Typography fontWeight={700} component="span">
              {details?.customers || '--'}
            </Typography>
          </Typography>
        </Box>
      </Box>

      {details?.investors && details.investors.length > 0 && (
        <>
          <Divider variant="fullWidthDashed" />
          <Box my={2.5}>
            <Typography variant={'h6'} fontWeight={700} mb={2}>
              Marquee Investors
            </Typography>
            <Grid container spacing={2}>
              {(details?.investors || []).map((item: any, index: number) => {
                return (
                  <Grid
                    item
                    xs={'auto'}
                    alignItems={'center'}
                    display={'flex'}
                    key={index}
                  >
                    <div className="mr-2 bup-marquee-investors-item"></div>
                    {item?.name}
                  </Grid>
                );
              })}
            </Grid>
          </Box>
        </>
      )}
    </Card>
  );
};

export default Details;
