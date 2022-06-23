import React, { useState, useEffect } from 'react';

import { GridSelectionModel, GridSortModel } from '@mui/x-data-grid-pro';

import SCContracts from '../SCContracts/SCContracts';
import SCSlider from '../SCSlider/SCSlider';
import SCTradeSummary from '../SCTradeSummary/SCTradeSummary';
import SCSearchAndFilter from '../SCSearchAndFilter/SCSearchAndFilter';

import './SCBody.scss';

interface SCBodyProps {
  cpsci: GridSelectionModel;
  cpContracts: any[];
  totalNoOfContracts: number;
  currentPageNumber: number;
  paginationCount: number;
  sliderValue: number;
  availableARR: string;
  remainTradableValue: string;
  offerAmount: number;
  totalOfferAmt: number;
  totalNoOfSelectedContracts: number;
  totalNoOfFilteredTypeContracts: number;
  placeTradeBtnDisable: boolean;
  clearSelectionBtnDisable: boolean;
  dataLoading: boolean;
  isTradingFinished: boolean;
  dealClosure: string;
  userName: string;
  minTradeValue: number;
  initiateTradeResponseLoading: boolean;
  filterTypeValue: number;
  noCustomersFound: boolean;
  handlePageChange(newPageNum: number): void;
  handleSortModelChange(model: GridSortModel): void;
  handleSelectionModelChange(model: GridSelectionModel): void;
  handleInitiateTrade(): void;
  handleClearSelection(): void;
  handleRealFilter(
    filterValue: any[],
    minRevenue: number,
    maxRevenue: number
  ): void;
  handleFilterTypeValue(newValue: number): void;
}
const SCBody: React.FC<SCBodyProps> = ({
  cpsci,
  cpContracts,
  totalNoOfContracts,
  currentPageNumber,
  paginationCount,
  sliderValue,
  availableARR,
  remainTradableValue,
  totalOfferAmt,
  totalNoOfSelectedContracts,
  totalNoOfFilteredTypeContracts,
  placeTradeBtnDisable,
  clearSelectionBtnDisable,
  dataLoading,
  minTradeValue,
  isTradingFinished,
  offerAmount,
  dealClosure,
  filterTypeValue,
  noCustomersFound,
  initiateTradeResponseLoading,
  handlePageChange,
  handleSortModelChange,
  handleSelectionModelChange,
  handleInitiateTrade,
  handleClearSelection,
  handleRealFilter,
  handleFilterTypeValue,
}) => {
  const [clearAll, setClearAll] = useState(false);

  useEffect(() => {
    if (clearAll) setClearAll(false);
  }, [clearAll]);
  return (
    <div className="w-full h-full max-h-full max-w-full">
      <div className="grid grid-cols-12 gap-4 h-full">
        <div className="col-span-8 h-full">
          <SCContracts
            cpsci={cpsci}
            cpContracts={cpContracts}
            totalNoOfContracts={totalNoOfContracts}
            totalNoOfFilteredTypeContracts={totalNoOfFilteredTypeContracts}
            currentPageNumber={currentPageNumber}
            paginationCount={paginationCount}
            dataLoading={dataLoading}
            isTradingFinished={isTradingFinished}
            totalNoOfSelectedContracts={totalNoOfSelectedContracts}
            availableARR={availableARR}
            remainTradableValue={remainTradableValue}
            offerAmount={offerAmount}
            dealClosure={dealClosure}
            filterTypeValue={filterTypeValue}
            clearAll={clearAll}
            noCustomersFound={noCustomersFound}
            handlePageChange={handlePageChange}
            handleSortModelChange={handleSortModelChange}
            handleSelectionModelChange={handleSelectionModelChange}
            handleRealFilter={handleRealFilter}
            handleFilterTypeValue={handleFilterTypeValue}
          />
        </div>
        <div className="col-span-4 px-6 pb-12 right-panel">
          <div className="mt-2 mb-6">
            <SCSlider
              sliderValue={sliderValue}
              availableARR={availableARR}
              minTradeValue={minTradeValue}
              remainTradableValue={remainTradableValue}
            />
          </div>
          <div className="mt-2">
            <SCTradeSummary
              totalOfferAmt={totalOfferAmt}
              availableARR={availableARR}
              bidPrice={offerAmount}
              dealClosure={dealClosure}
              totalNoOfSelectedContracts={totalNoOfSelectedContracts}
              placeTradeBtnDisable={placeTradeBtnDisable}
              clearSelectionBtnDisable={clearSelectionBtnDisable}
              isTradingFinished={isTradingFinished}
              initiateTradeResponseLoading={initiateTradeResponseLoading}
              handleInitiateTrade={handleInitiateTrade}
              setClearAll={setClearAll}
              handleClearSelection={handleClearSelection}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SCBody;
