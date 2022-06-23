import React, { useState } from 'react';

import { Alert, CircularProgress, Grid, Typography } from '@mui/material';
import arrIcon from '../../../assets/images/arr-icon.png';
import barRaiser from '../../../assets/images/bar-raiser.png';
import priceTag from '../../../assets/images/price-tag.png';
import search from '../../../assets/images/search.png';
import filter from '../../../assets/images/filter.png';
import svgCloseBox from '../../../assets/images/select-contracts/close-box.svg';
import info from '../../../assets/images/info.png';
import { monthNames } from '../../../utils/constants';

import './SCSearchAndFilter.scss';
import { Box } from '@mui/system';
import { currencyFormat } from '@bridgeup/common/formatter';

interface SCSearchAndFilterProps {
  isSearch: boolean;
  isFilter: boolean;
  availableARR: string;
  remainTradableValue: string;
  offerAmount: number;
  dealClosure: string;
  isTradingFinished: boolean;
  handleOpenFilter(isOpenSearch: any): void;
}
const SCSearchAndFilter: React.FC<SCSearchAndFilterProps> = ({
  isSearch,
  isFilter,
  availableARR,
  remainTradableValue,
  offerAmount,
  dealClosure,
  isTradingFinished,
  handleOpenFilter,
}) => {
  const IndianCurrencyLocale = Intl.NumberFormat('en-IN');
  const dealClosureTime = new Date(dealClosure);

  return (
    <Grid container>
      {isTradingFinished ? (
        <Grid item xs={12}>
          <Alert
            style={{ alignItems: 'center' }}
            variant="outlined"
            severity={'info'}
          >
            Customer Contract list is frozen for the ongoing trade and cannot be
            edited now.
          </Alert>
        </Grid>
      ) : (
        <Grid item container xs={12} spacing={{ sm: 4, md: 5 }}>
          <Grid container item xs={12} sm={'auto'} columnSpacing={1.5}>
            <Grid item xs={'auto'}>
              <Box
                className="stats-card-image"
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <img src={arrIcon} alt="logo" className="w-6" />
              </Box>
            </Grid>
            <Grid item xs>
              <Typography
                className="label-color"
                variant="body2"
                fontWeight={'700'}
              >
                Available ARR
              </Typography>
              {availableARR ? (
                <div className="text-bold text-18 p-0 m-0 value-text">
                  ₹{IndianCurrencyLocale.format(Number(availableARR))}
                </div>
              ) : (
                <CircularProgress size={20} />
              )}
            </Grid>
          </Grid>
          <Grid container item xs={12} sm={'auto'} columnSpacing={1.5}>
            <Grid item xs={'auto'}>
              <Box
                className="stats-card-image"
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <img src={barRaiser} alt="logo" className="w-6" />
              </Box>
            </Grid>
            <Grid item>
              <Typography
                className="label-color"
                variant="body2"
                fontWeight={'700'}
              >
                Remaining Trade Limit
              </Typography>
              {remainTradableValue ? (
                <h1 className="text-bold text-18 p-0 m-0 value-text">
                  ₹{IndianCurrencyLocale.format(Number(remainTradableValue))}
                </h1>
              ) : (
                <CircularProgress size={20} />
              )}
            </Grid>
          </Grid>
          <Grid container item xs={12} sm={'auto'} columnSpacing={1.5}>
            <Grid item xs={'auto'}>
              <Box
                className="stats-card-image"
                display={'flex'}
                alignItems={'center'}
                justifyContent={'center'}
              >
                <img src={priceTag} alt="logo" className="w-6" />
              </Box>
            </Grid>
            <Grid item>
              <Typography
                className="label-color"
                variant="body2"
                fontWeight={'700'}
              >
                Offer Price
              </Typography>
              {offerAmount ? (
                <h1 className="text-bold text-18 p-0 m-0 value-text">
                  {currencyFormat(offerAmount)}
                  <span
                    className=" pl-3 pr-2 text-12 deal-closure-text"
                    style={{ color: '#00FF91' }}
                  >
                    (Until {dealClosureTime.getDate()}{' '}
                    {monthNames[dealClosureTime.getMonth()]})
                  </span>
                </h1>
              ) : (
                <CircularProgress size={20} />
              )}
            </Grid>
          </Grid>
        </Grid>
      )}
    </Grid>
  );
};

export default SCSearchAndFilter;
