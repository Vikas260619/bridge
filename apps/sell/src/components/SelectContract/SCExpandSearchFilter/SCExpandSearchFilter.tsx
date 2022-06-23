import React, { useState, useEffect } from 'react';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { Button, Grid, FormControl, Popper } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { PAYMENT_CYCLE_OPTIONS } from '../../../utils/constants';
import checkBox from '../../../assets/images/check-box.svg';
import unCheckBox from '../../../assets/images/uncheck-box.svg';
import CustomInput from '../../../components/CustomInput/CustomInput';

import './SCExpandSearchFilter.scss';

interface SCExpandSearchFilterProps {
  isSearch: boolean;
  isFilter: boolean;
  handleRealFilter(
    filterValue: any[],
    minRevenue: number,
    maxRevenue: number
  ): void;
}

interface FormProps {
  paymentCycle: any[];
  minCurrentRevenue: number;
  maxCurrentRevenue: number;
}

const SCExpandSearchFilter: React.FC<SCExpandSearchFilterProps> = ({
  isSearch,
  isFilter,
  handleRealFilter,
}) => {
  const [value, setValue] = useState<number>(1);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const [form, setForm] = useState<FormProps>({
    paymentCycle: [],
    minCurrentRevenue: 0,
    maxCurrentRevenue: 0,
  });
  const [formError, setFormError] = useState({
    paymentCycle: '',
    minCurrentRevenue: '',
    maxCurrentRevenue: '',
  });

  const handleFormUpdate = (key: string, value: any) => {
    if (key == 'none') {
      setForm({
        paymentCycle: [],
        minCurrentRevenue: 0,
        maxCurrentRevenue: 0,
      });
      handleRealFilter([], 0, 0);
      return;
    }
    setForm({
      ...form,
      [key]: value,
    });
  };

  const handleClick = (event?: React.MouseEvent<HTMLButtonElement>) => {
    if (event) {
      setAnchorEl(event.currentTarget);
    } else {
      setAnchorEl(null);
    }
  };

  const handleClose = (newValue: any) => {
    if (newValue) {
      setValue(newValue);
      let newPaymentCycle: any[] = [];
      const isAlreadyExist = form.paymentCycle.some((a) => {
        return a.id == newValue.id;
      });

      if (isAlreadyExist) {
        form.paymentCycle.forEach((item) => {
          if (item.id !== newValue.id && item.id !== 1) {
            newPaymentCycle.push(item);
          }
        });
      } else {
        newPaymentCycle = [...form.paymentCycle, newValue];
      }
      if (newValue.id === 1 && !isAlreadyExist) {
        newPaymentCycle = PAYMENT_CYCLE_OPTIONS;
      } else if (newValue.id === 1 && isAlreadyExist) {
        newPaymentCycle = [];
      }

      setForm({
        ...form,
        paymentCycle: newPaymentCycle,
      });
    }
  };

  const applyFilters = () => {
    // [[1,YEAR],[2,YEAR],[1,MONTH]]
    const apiCode: any[] = [];

    if (form.paymentCycle.length > 0) {
      form.paymentCycle.forEach((item) => {
        if (item.code.length) {
          apiCode.push(item.code);
        }
      });
    }

    const structurizedFilter = apiCode.map((code) => {
      return {
        billing_period: {
          _eq: code[1],
        },
        billing_period_interval: {
          _eq: code[0],
        },
      };
    });

    if (isNaN(form.minCurrentRevenue)) {
      setFormError({
        ...formError,
        minCurrentRevenue: 'Invalid min Current Revenue',
      });
      return;
    } else if (isNaN(form.maxCurrentRevenue)) {
      setFormError({
        ...formError,
        maxCurrentRevenue: 'Invalid max Current Revenue',
      });
    } else if (
      Number(form.minCurrentRevenue) > Number(form.maxCurrentRevenue)
    ) {
      alert('Min Current Revenue should not be more than Max Current Revenue');
      setFormError({
        paymentCycle: '',
        minCurrentRevenue: '',
        maxCurrentRevenue: '',
      });
    } else if (
      Number(form.minCurrentRevenue) <= Number(form.maxCurrentRevenue)
    ) {
      handleRealFilter(
        structurizedFilter,
        Number(form.minCurrentRevenue),
        Number(form.maxCurrentRevenue)
      );
      setFormError({
        paymentCycle: '',
        minCurrentRevenue: '',
        maxCurrentRevenue: '',
      });
    }
  };

  return isFilter ? (
    <Grid container className="my-4 bg-color-3 px-6 py-3">
      <Grid item xs={12}>
        <div className="text-bold text-18 mb-2">Filter</div>
      </Grid>
      <Grid container item xs={12} spacing={4} className="text-color-3 mb-3">
        <Grid container item xs={12} sm={'auto'} flexDirection={'column'}>
          <Grid item sx={{ marginBottom: '.5rem' }}>
            <span className="text-14 font-medium">Payment Cycle</span>
          </Grid>
          <Grid item>
            <ClickAwayListener
              onClickAway={() => {
                handleClick();
              }}
            >
              <div className="">
                <Button
                  id="basic-button"
                  aria-controls="basic-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                  onClick={handleClick}
                  className={`py-4 pc-filter-btn`}
                >
                  <div className="flex justify-between items-center">
                    <div className="capitalize text-14 text-bold px-1">
                      {form.paymentCycle &&
                        (form.paymentCycle.length === 1
                          ? form.paymentCycle[0].value
                          : form.paymentCycle.length > 1
                          ? `${form.paymentCycle[0].value} (+${
                              form.paymentCycle.length - 1
                            } Selected)`
                          : 'Select Payment Cycle')}
                    </div>
                    <>
                      {open ? (
                        <KeyboardArrowUpIcon className="w-4 h-4 ml-1" />
                      ) : (
                        <KeyboardArrowDownIcon className="w-4 h-4 ml-1" />
                      )}
                    </>
                  </div>
                </Button>

                <Popper
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  className="mt-2 "
                >
                  {PAYMENT_CYCLE_OPTIONS &&
                    PAYMENT_CYCLE_OPTIONS.map((option, index) => {
                      const isThere = form.paymentCycle.some((a) => {
                        return a.id == option.id;
                      });

                      return (
                        <div
                          key={index}
                          onClick={() => handleClose(option)}
                          className={`bg-color-3 pl-8 cursor-pointer p-4  ${
                            value === option.id ? 'active' : ''
                          }`}
                          style={{
                            width: '220px',
                          }}
                        >
                          <div className="flex justify-start items-center">
                            {isThere ? (
                              <img src={checkBox} alt="logo" className="mr-4" />
                            ) : (
                              <img
                                src={unCheckBox}
                                alt="logo"
                                className="mr-4 w-5 h-5"
                              />
                            )}

                            <div className="capitalize">{option.value}</div>
                          </div>
                        </div>
                      );
                    })}
                </Popper>
              </div>
            </ClickAwayListener>
          </Grid>
        </Grid>
        <Grid container item xs={12} sm={12} md={8} xl={6}>
          <Grid item xs={12} sm={12} sx={{ marginBottom: '.5rem' }}>
            <span className="text-14 font-medium">Monthly Revenue</span>
          </Grid>
          <Grid
            container
            xs={12}
            sm={12}
            item
            columnSpacing={1}
            alignItems={'center'}
            flexDirection={'row'}
          >
            <Grid item xs={12} sm>
              <FormControl fullWidth variant="filled" className="input-fields">
                <CustomInput
                  variant="filled"
                  label="Min. current revenue"
                  onBlur={() => null}
                  error={formError.minCurrentRevenue}
                  helperText={formError.minCurrentRevenue}
                  value={form.minCurrentRevenue || ''}
                  onChange={(e) =>
                    handleFormUpdate('minCurrentRevenue', e.target.value)
                  }
                  className={`contracts-filter ${
                    !form.minCurrentRevenue && 'empty'
                  } ${formError.minCurrentRevenue && 'error'}`}
                />
              </FormControl>
            </Grid>
            <Grid item sm={'auto'} xs={12}>
              -
            </Grid>
            <Grid item xs={12} sm>
              <FormControl fullWidth variant="filled" className="input-fields">
                <CustomInput
                  variant="filled"
                  label="Max. current revenue"
                  onBlur={() => null}
                  error={formError.maxCurrentRevenue}
                  helperText={formError.maxCurrentRevenue}
                  value={form.maxCurrentRevenue || ''}
                  onChange={(e) =>
                    handleFormUpdate('maxCurrentRevenue', e.target.value)
                  }
                  className={`contracts-filter ${
                    !form.maxCurrentRevenue && 'empty'
                  } ${formError.maxCurrentRevenue && 'error'}`}
                />
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm
          display={'flex'}
          justifyContent={'flex-start'}
          alignItems={'flex-end'}
        >
          <Button
            variant="text"
            sx={{ marginRight: '0.5rem' }}
            onClick={() => handleFormUpdate('none', 0)}
          >
            CLEAR ALL
          </Button>
          <Button
            disabled={
              !form.paymentCycle.length &&
              (!form.maxCurrentRevenue || !form.minCurrentRevenue)
            }
            onClick={applyFilters}
            variant="contained"
            size="large"
            className="primary-btn"
            color="primary"
            disableElevation
          >
            APPLY
          </Button>
        </Grid>
      </Grid>
    </Grid>
  ) : null;
};

export default SCExpandSearchFilter;
