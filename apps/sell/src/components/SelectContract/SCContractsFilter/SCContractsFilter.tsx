import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import checkBox from '../../../assets/images/check-box.svg';
import intermediateCheckBox from '../../../assets/images/intermediate-check-box.svg';
import { makeStyles } from '@mui/styles';

import './SCContractsFilter.scss';

interface SCContractsFilterProps {
  totalNoOfContracts: number;
  totalNoOfSelectedContracts: number;
  clearAll: boolean;
  handleFilterTypeValue(value: number): void;
}
const SCContractsFilter: React.FC<SCContractsFilterProps> = ({
  totalNoOfContracts,
  totalNoOfSelectedContracts,
  clearAll,
  handleFilterTypeValue,
}) => {
  const [value, setValue] = useState<number>(1);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (newValue?: number) => {
    if (newValue && newValue !== value) {
      setValue(newValue);
      handleFilterTypeValue(newValue);
    }
    setAnchorEl(null);
  };

  useEffect(() => {
    if (clearAll) {
      setValue(1);
    }
  }, [clearAll]);

  return (
    <div className="h-full flex justify-start items-center filter-contracts-div">
      <h2 className="pr-4 text-14 text-bold">View Contracts:</h2>
      <div>
        <Button
          id="basic-button"
          aria-controls="basic-menu"
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
          className={`mr-4 active-btn`}
        >
          <div className="px-2 flex justify-center items-center">
            {value !== 1 ? (
              <img
                src={value === 2 ? checkBox : intermediateCheckBox}
                alt="logo"
              />
            ) : null}
            <div className="capitalize text-14 text-bold px-1">
              {value === 1 ? 'All' : value === 2 ? 'Selected' : 'Non-selected'}
            </div>
            <div className="contracts-count">
              (
              {value === 1
                ? totalNoOfContracts
                : value === 2
                ? totalNoOfSelectedContracts
                : totalNoOfContracts - totalNoOfSelectedContracts}
              )
            </div>
            {open ? (
              <KeyboardArrowUpIcon className="w-4 h-4 ml-1" />
            ) : (
              <KeyboardArrowDownIcon className="w-4 h-4 ml-1" />
            )}
          </div>
        </Button>
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={(e) => handleClose()}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
            disablePadding: true,
          }}
          className="mt-2 filter-menu-item"
        >
          <div
            onClick={() => handleClose(1)}
            className={`menu-item ${
              value === 1 ? 'active' : ''
            } pl-8 cursor-pointer`}
          >
            <div className="flex justify-start items-center">
              <div className="capitalize mr-1">All</div>
              <div className="contracts-count font-light">
                ({totalNoOfContracts})
              </div>
            </div>
          </div>
          <div
            onClick={() => handleClose(2)}
            className={`menu-item ${
              value === 2 ? 'active' : ''
            } pl-8 cursor-pointer`}
          >
            <div className="flex justify-start items-center">
              <img src={checkBox} alt="logo" />
              <div className="capitalize">Selected</div>
              <div className="contracts-count font-light">
                ({totalNoOfSelectedContracts})
              </div>
            </div>
          </div>
          <div
            onClick={() => handleClose(3)}
            className={`menu-item ${
              value === 3 ? 'active' : ''
            } pl-8 cursor-pointer`}
          >
            <div className="flex justify-start items-center">
              <img src={intermediateCheckBox} alt="logo" />
              <div className="capitalize">Non-selected</div>
              <div className="contracts-count font-light">
                ({totalNoOfContracts - totalNoOfSelectedContracts})
              </div>
            </div>
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default SCContractsFilter;
