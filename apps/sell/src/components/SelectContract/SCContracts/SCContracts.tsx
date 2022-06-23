import React, { useState, useEffect } from 'react';
import {
  DataGridPro,
  GridToolbar,
  GridColDef,
  GridSortModel,
  GridSelectionModel,
  GridValueGetterParams,
  LicenseInfo,
} from '@mui/x-data-grid-pro';
import { makeStyles } from '@mui/styles';
import CircularProgress from '@mui/material/CircularProgress';
// // import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import Pagination from '@mui/material/Pagination';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import SCSearchAndFilter from '../SCSearchAndFilter/SCSearchAndFilter';
import SCContractsFilter from '../SCContractsFilter/SCContractsFilter';
import SCExpandSearchFilter from '../SCExpandSearchFilter/SCExpandSearchFilter';

import nothingFound from '../../../assets/images/nothing-found.png';
import search from '../../../assets/images/search.png';
import filter from '../../../assets/images/filter.png';
import svgCloseBox from '../../../assets/images/select-contracts/close-box.svg';

import './SCContracts.scss';
import { currencyFormat } from '@bridgeup/common/formatter';
if (process.env.NX_MATERIAL_UI_KEY) {
  LicenseInfo.setLicenseKey(process.env.NX_MATERIAL_UI_KEY);
}

const getBillingPeriod = (period: string) => {
  switch (period) {
    case 'DAY':
      return 'day';
    case 'WEEK':
      return 'week';
    case 'MONTH':
      return 'month';
    case 'YEAR':
      return 'year';
  }

  return '';
};

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    // minWidth: 100,
    sortable: false,
    flex: 0.2,
  },
  {
    field: 'customer_name',
    headerName: 'Customer name',
    // minWidth: 150,
    align: 'left',
    headerAlign: 'left',
    flex: 0.25,
    // editable: true,
  },
  {
    field: 'termLength',
    headerName: 'Term Length',
    // minWidth: 100,
    flex: 0.15,
    // editable: true,
    sortable: false,
    align: 'left',
    headerAlign: 'left',
    valueGetter: (params: GridValueGetterParams) => '12 months',
  },
  {
    field: 'revenue',
    headerName: 'Revenue',
    // type: 'number',
    // minWidth: 150,
    flex: 0.2,
    // editable: true,
    sortable: false,
    align: 'left',
    headerAlign: 'left',
    valueGetter: (params: GridValueGetterParams) => {
      let val = '';

      val =
        currencyFormat(
          params.getValue(params.id, 'amount_per_period') as number
        ) + '/';
      val +=
        params.getValue(params.id, 'billing_period_interval') === 1
          ? ''
          : (params.getValue(params.id, 'billing_period_interval') as string) +
            '-';
      val += getBillingPeriod(
        params.getValue(params.id, 'billing_period') as string
      );
      return val;
    },
  },
  {
    field: 'bid-amount',
    headerName: 'Offer Amount',
    // description: 'This column has a value getter and is not sortable.',
    // type: 'number',
    // minWidth: 150,
    flex: 0.2,
    align: 'right',
    headerAlign: 'right',

    valueGetter: (params: GridValueGetterParams) =>
      currencyFormat(Number(params.getValue(params.id, 'bid_amount')) || 0),
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    '&.MuiDataGrid-root .MuiDataGrid-cell:focus': {
      outline: 'none',
    },
    '&.MuiDataGrid-row .MuiDataGrid-checkBox:focus': {
      outline: 'none',
    },
  },
}));

interface SCContractsProps {
  cpsci: GridSelectionModel;
  cpContracts: any[];
  totalNoOfContracts: number;
  currentPageNumber: number;
  paginationCount: number;
  dataLoading: boolean;
  isTradingFinished: boolean;
  totalNoOfSelectedContracts: number;
  totalNoOfFilteredTypeContracts: number;
  availableARR: string;
  offerAmount: number;
  dealClosure: string;
  filterTypeValue: number;
  clearAll: boolean;
  noCustomersFound: boolean;
  remainTradableValue: string;
  handlePageChange(newPageNum: number): void;
  handleSortModelChange(model: GridSortModel): void;
  handleSelectionModelChange(model: GridSelectionModel): void;
  handleRealFilter(
    filterValue: any[],
    minRevenue: number,
    maxRevenue: number
  ): void;
  handleFilterTypeValue(newValue: number): void;
}

const SCContracts: React.FC<SCContractsProps> = ({
  cpsci,
  cpContracts,
  totalNoOfContracts,
  totalNoOfFilteredTypeContracts,
  currentPageNumber,
  paginationCount,
  dataLoading,
  isTradingFinished,
  totalNoOfSelectedContracts,
  availableARR,
  offerAmount,
  dealClosure,
  filterTypeValue,
  clearAll,
  remainTradableValue,
  noCustomersFound,
  handlePageChange,
  handleSortModelChange,
  handleSelectionModelChange,
  handleRealFilter,
  handleFilterTypeValue,
}) => {
  const classes = useStyles();
  const [isSearch, setIsSearch] = useState(false);
  const [isFilter, setIsFilter] = useState(false);
  const [modelSort, setModelSort] = React.useState<GridSortModel>([
    {
      field: 'id',
      sort: 'desc',
    },
  ]);

  const renderPagination = () => {
    return (
      <div className="data-grid-pagination">
        <Pagination
          color="primary"
          count={paginationCount}
          page={currentPageNumber}
          shape="rounded"
          showFirstButton
          showLastButton
          onChange={(event, value) => {
            if (currentPageNumber !== value) {
              handlePageChange(value);
            }
          }}
        />
      </div>
    );
  };

  const renderNoCustomersFound = () => {
    return (
      <div className="flex flex-col">
        <img src={nothingFound} alt="logo" className="nothing-found" />
        <p className="nothing-found-text">There are no customers found</p>
      </div>
    );
  };

  if (process.env.NX_MATERIAL_UI_KEY) {
    LicenseInfo.setLicenseKey(process.env.NX_MATERIAL_UI_KEY);
  }

  const handleOpenFilter = (isOpenSearch: any) => {
    setIsFilter(isOpenSearch !== null ? !isOpenSearch : false);
    setIsSearch(isOpenSearch !== null ? isOpenSearch : false);

    if (isOpenSearch === null && isFilter) {
      handleRealFilter([], 0, 0);
    }
  };

  return (
    <div className="p-4">
      <SCSearchAndFilter
        isSearch={isSearch}
        isFilter={isFilter}
        handleOpenFilter={handleOpenFilter}
        availableARR={availableARR}
        remainTradableValue={remainTradableValue}
        offerAmount={offerAmount}
        dealClosure={dealClosure}
        isTradingFinished={isTradingFinished}
      />
      <div className="flex flex-initial justify-between items-center mb-1 px-2 py-4">
        <SCContractsFilter
          totalNoOfContracts={totalNoOfContracts ? totalNoOfContracts : 0}
          totalNoOfSelectedContracts={totalNoOfSelectedContracts}
          clearAll={clearAll}
          handleFilterTypeValue={handleFilterTypeValue}
        />
        <div className="flex justify-center items-center ">
          {/* <div onClick={() => handleOpenFilter(isSearch ? null : true)}>
            {isSearch ? (
              <div className="flex justify-center items-center mr-4 image-bg-color cursor-pointer">
                <img src={svgCloseBox} alt="logo" className="w-12 h-12" />
              </div>
            ) : (
              <div className="flex justify-center items-center p-3 ml-2 mr-4 image-bg-color cursor-pointer">
                <img src={search} alt="logo" className="w-7 h-7" />
              </div>
            )}
          </div> */}
          <div onClick={() => handleOpenFilter(isFilter ? null : false)}>
            {isFilter ? (
              <div className="flex justify-center items-center mr-4 image-bg-color cursor-pointer">
                <img src={svgCloseBox} alt="logo" className="w-12 h-12" />
              </div>
            ) : (
              <div className="flex justify-center items-center p-3 ml-2 mr-4 image-bg-color cursor-pointer">
                <img src={filter} alt="logo" className="w-7 h-7" />
              </div>
            )}
          </div>
        </div>
      </div>
      {(isSearch || isFilter) && (
        <SCExpandSearchFilter
          isSearch={isSearch}
          isFilter={isFilter}
          handleRealFilter={handleRealFilter}
        />
      )}
      <div className="flex flex-initial justify-between align-center mb-1 px-2 py-4">
        <div style={{ color: '#7D87A6' }}>Page - {currentPageNumber}</div>
        <div style={{ color: '#7D87A6' }}>
          {cpContracts.length === 0
            ? `Showing results “0 - 0 of 0`
            : `Showing results “${50 * (currentPageNumber - 1) + 1} - ${' '}
          ${
            cpContracts.length < 50
              ? totalNoOfFilteredTypeContracts
              : 50 * (currentPageNumber - 1) + 50
          }
          ” of ${totalNoOfFilteredTypeContracts}`}
        </div>
      </div>
      <div
        className={
          isTradingFinished
            ? 'custom-datagrid disabled-datagrid'
            : 'custom-datagrid'
        }
        style={{
          height: 750,
        }}
      >
        <DataGridPro
          // isRowSelectable={(params: GridRowParams) => false}
          rows={cpContracts}
          columns={columns}
          loading={noCustomersFound || dataLoading}
          headerHeight={38}
          rowHeight={50}
          checkboxSelection
          pageSize={50}
          pagination
          paginationMode="server"
          sortModel={modelSort}
          sortingOrder={['asc', 'desc']}
          // disableSelectionOnClick
          disableMultipleSelection
          // disableColumnFilter
          disableColumnMenu
          // disableColumnReorder
          // disableColumnSelector
          checkboxSelectionVisibleOnly
          // sortModel
          // selectionModel={[101,201,301]}
          selectionModel={cpsci}
          onSelectionModelChange={(model: GridSelectionModel) =>
            handleSelectionModelChange(model)
          }
          onSortModelChange={(model: GridSortModel) => {
            if (
              model[0].field !== modelSort[0].field ||
              model[0].sort !== modelSort[0].sort
            ) {
              handleSortModelChange(model);
            }
            setModelSort(model);
          }}
          // hideFooter
          // hideFooterPagination
          hideFooterSelectedRowCount
          // extra
          className={classes.root}
          components={{
            // Toolbar: GridToolbar,
            ColumnSortedAscendingIcon: () => (
              <div className="sort-icon mt-1">
                <KeyboardArrowUpIcon />
              </div>
            ),
            ColumnSortedDescendingIcon: () => (
              <div className="sort-icon mt-1">
                <KeyboardArrowDownIcon />
              </div>
            ),
            LoadingOverlay: () => (
              <div
                className="flex justify-center m-auto text-bold text-24 loading-overlay"
                style={{ zIndex: 1 }}
              >
                {dataLoading ? (
                  <CircularProgress size={40} color="primary" />
                ) : noCustomersFound ? (
                  renderNoCustomersFound()
                ) : (
                  ''
                )}
              </div>
            ),
            Pagination: renderPagination,
          }}
          sx={{
            '& .MuiDataGrid-columnHeaderTitle': {
              textOverflow: 'clip',
              whiteSpace: 'break-spaces',
              lineHeight: 1,
            },
          }}
        />
      </div>
    </div>
  );
};

export default SCContracts;
