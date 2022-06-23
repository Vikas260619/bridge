import React from 'react';
import { Box } from '@mui/material';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

import { ReactComponent as InfoIcon } from '../../assets/images/info.svg';

interface TradingFactorProps {
  imgSrc: any;
  title: string;
  value: string;
  info: string;
}

const TradingFactor: React.FC<TradingFactorProps> = ({
  imgSrc,
  title,
  value,
  info,
}) => {
  return (
    <Grid container item xs={12} sm={6} md={4}>
      <Grid
        item
        xs={12}
        style={{ backgroundColor: '#1c2334' }}
        display={'flex'}
        alignItems={'center'}
        justifyContent={'start'}
        padding={2}
      >
        <Box mr={1.5}>
          <img src={imgSrc} alt="" />
        </Box>
        <Box>
          <Typography
            variant="body2"
            className="text-color-2"
            alignItems={'center'}
          >
            {title}
            <Tooltip title={info} placement="top">
              <IconButton size="small">
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </Typography>
          <Typography variant="h6" component="div" fontWeight={700}>
            {value}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TradingFactor;
