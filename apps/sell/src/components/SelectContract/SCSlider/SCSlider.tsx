import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { Grid, Skeleton } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import info from '../../../assets/images/info.png';

import './SCSlider.scss';

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: '#2B3951',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#2B3951',
    padding: '10px',
    fontSize: '12px',
    fontFamily: 'Raleway',
  },
}));

interface SCSliderProps {
  availableARR: string;
  minTradeValue: number;
  remainTradableValue: string;
  sliderValue: number;
}

const SCSlider: React.FC<SCSliderProps> = ({
  availableARR,
  minTradeValue,
  remainTradableValue,
  sliderValue,
}) => {
  const IndianCurrencyLocale = Intl.NumberFormat('en-IN');

  const marks = [
    {
      value: 0,
      label: '₹0',
    },
    {
      value: (minTradeValue * 100) / Number(remainTradableValue),
      label: (
        <div className="text-center">
          <div>₹{minTradeValue / 100000}L</div>
          <div>(Min trade value)</div>
        </div>
      ),
    },
    {
      value: 100,
      label: `₹${Math.trunc(Number(remainTradableValue) / 100000)}L`,
    },
  ];

  return !remainTradableValue ? (
    <Skeleton
      className="mt-100"
      style={{ height: '200px' }}
      variant="rectangular"
    />
  ) : (
    <Grid container className="select-offer-amount">
      <Grid item xs={12} className="p-4">
        <h2 className="text-18 text-bold">
          Select Offer Amount{' '}
          <BootstrapTooltip
            title="This is the amount you want to raise"
            placement="top"
          >
            <img
              style={{
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
              src={info}
              alt="logo"
              className="ml-1 cursor-pointer"
            />
          </BootstrapTooltip>
        </h2>
      </Grid>
      <Grid item xs={12} className="p-4">
        <Box>
          <Slider
            aria-label="Custom marks"
            value={sliderValue}
            valueLabelFormat={(sliderValue) =>
              `${Math.trunc(
                (sliderValue * Number(remainTradableValue)) / 10000000
              )} L`
            }
            step={1}
            valueLabelDisplay="on"
            marks={marks}
            sx={{ marginBottom: '2.5rem' }}
          />
        </Box>
      </Grid>
      <Grid item xs={12}>
        <div style={{ backgroundColor: '#101927' }} className="flex p-3">
          <div className="text-12">Remaining Trade Limit:</div>
          <h2 className="text-12 text-bold pl-2">
            ₹{IndianCurrencyLocale.format(Number(remainTradableValue))}
          </h2>
        </div>
      </Grid>
    </Grid>
  );
};

export default SCSlider;
