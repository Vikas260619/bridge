import { styled } from '@mui/system';
import { DataGridPro } from '@mui/x-data-grid-pro';
import style from '@bridgeup/common/design-system/style.module.scss';

const DataGrid = styled(DataGridPro)({
  //  data grid root
  border: 0,
  cursor: 'pointer',
  color: style.white,
  fontFamily: 'Raleway',

  //  data grid  header
  '.MuiDataGrid-columnHeaders': {
    color: style.textColor2,
    backgroundColor: style.grey2,
    borderBottomWidth: '.25rem',
    borderBottomStyle: 'solid',
    borderBottomColor: style.mainBackground,
  },

  '.MuiDataGrid-columnHeaderTitleContainer': {
    padding: 0,
  },

  '.MuiDataGrid-columnHeaderTitle': {
    textOverflow: 'clip',
    whiteSpace: 'break-spaces',
    lineHeight: 1.5,
  },

  '.MuiDataGrid-columnSeparator': {
    visibility: 'hidden',
  },

  //  each row in the grid
  '.MuiDataGrid-row': {
    backgroundColor: style.grey3,
    border: 'none',
  },
  '.MuiDataGrid-cell': {
    borderBottomWidth: '.25rem',
    borderBottomStyle: 'solid',
    borderBottomColor: style.mainBackground,
  },
  '.row-detail': {
    padding: ' 0 5px',
  },

  '.MuiCheckbox-root': {
    color: style.textColor3,
  },
  '.MuiDataGrid-cell:focus, .MuiDataGrid-columnHeader:focus': {
    outline: 'none',
  },

  '.loading-overlay svg': {
    width: '40px !important',
    height: '40px !important',
  },

  // pagination footer
  '.MuiDataGrid-footerContainer': {
    backgroundColor: style.mainBackground,
  },

  '.data-grid-pagination .Mui-selected': {
    backgroundColor: style.grey2,
  },
  '.MuiDataGrid-row:hover, .MuiDataGrid-row.Mui-selected': {
    backgroundColor: style.grey2,
  },
  '.MuiDataGrid-overlay': {
    backgroundColor: 'transparent',
    color: 'transparent',
  },
  '.MuiPaginationItem-root': {
    color: style.textColor3,
  },
  '.MuiPaginationItem-firstLast svg, .MuiPaginationItem-previousNext svg': {
    color: style.secondary,
  },
  '*::-webkit-scrollbar': {
    width: '4px !important',
    height: '4px !important',
  },
  '*::-webkit-scrollbar-thumb': {
    border: 'none !important',
    borderRadius: '2px !important',
    background: 'linear-gradient(90deg, #62bdff 0%, #3864ff 98.91%) !important',
  },
});

export default DataGrid;
