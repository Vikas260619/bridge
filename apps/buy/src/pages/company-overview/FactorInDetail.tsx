import React from 'react';
import Grid from '@mui/material/Grid';
import { Box, Typography } from '@mui/material';

interface FactorInDetailProps {
  icon: any;
  title: string;
  value: string;
}

const FactorInDetail: React.FC<FactorInDetailProps> = ({
  icon,
  title,
  value,
}) => {
  return (
    <Grid item xs sx={{ minWidth: 190 }}>
      <Box
        className="factor-in-detail-grid"
        display={'flex'}
        sx={{ paddingY: 1, paddingX: 1.5 }}
      >
        <Box display={'flex'} mr={1.5}>
          {icon}
        </Box>
        <Box display={'flex'} flexDirection={'column'}>
          <Typography variant="caption">{title}</Typography>
          <Typography variant="body2" fontWeight={700}>
            {value}
          </Typography>
        </Box>
      </Box>
    </Grid>
  );
};

export default FactorInDetail;
