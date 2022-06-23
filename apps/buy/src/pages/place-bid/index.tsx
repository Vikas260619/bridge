import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  Button,
  Box,
  Chip,
  Grid,
  IconButton,
  Tooltip,
  Typography,
  Pagination,
} from '@mui/material';
import {
  GridColDef,
  GridRenderCellParams,
  GridSortModel,
} from '@mui/x-data-grid-pro';

import dayjs from 'dayjs';

import { Deal_Order_By, Order_By } from '@bridgeup/data-access';

import { useActiveDealsLazyQuery } from '@bridgeup/data-access/hooks/investor/active-deals.hooks';
import {
  DealRow,
  DealStatus,
  DealStatusEnum,
  DealStatusColorClassEnum,
} from '@bridgeup/data-access/models/deal-row';
import Bid from '@bridgeup/data-access/models/bid';
import { currencyFormat, IdPrefixFormat } from '@bridgeup/common/formatter';
import DataGrid from '../../components/Datagrid';
import AllBidsDialog from '../../components/bid/all-bids-dialog';
import FlatIconButton from '../../components/FlatIconButton';
import PlaceBidDialog from '../../components/bid/place-bid-dialog';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import CircleIcon from '@mui/icons-material/Circle';
import { ReactComponent as HammerIcon } from './../../assets/icons/hammer-icon.svg';
import { ReactComponent as LogoIcon } from './../../assets/icons/bridgeup-logo-icon.svg';
import nothingFound from './../../assets/images/nothing-found.png';
import { MenuContext } from '../../context/menu/MenuContext';

function PlaceBid() {
  const menuContext = useContext(MenuContext);
  menuContext.updateIndex(1);

  const [getActiveDeals, { data: dealsResp, loading: dealsLoading }] =
    useActiveDealsLazyQuery({
      fetchPolicy: 'no-cache',
    });

  const pageSize = 50;
  const [rows, setRows] = useState<DealRow[]>([]);
  const [rowCount, setRowCount] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [showAllBidsDialog, setShowAllBidsDialog] = useState(false);
  const [allBids, setAllBids] = useState<Bid[]>([]);

  const [showPlaceBidDialog, setShowPlaceBidDialog] = useState(false);
  const [activeDeal, setActiveDeal] = useState<DealRow | null>(null);

  const dealStatusMap: { [key: string]: DealStatus } = {
    BIDDING: {
      value: DealStatusEnum.BIDDING,
      className: DealStatusColorClassEnum.BIDDING,
    },
    AVAILABLE: {
      value: DealStatusEnum.AVAILABLE,
      className: DealStatusColorClassEnum.AVAILABLE,
    },
  };

  const [sortModel, setSortModel] = useState<GridSortModel>([
    {
      field: 'score',
      sort: 'desc',
    },
  ]);

  useEffect(() => {
    if (dealsResp) {
      const dealRows = dealsResp.deal.map((deal) => {
        const currentDate = dayjs(new Date());
        const bidClosure = dayjs(deal.bid_closure);
        let expiresIn = Math.ceil(bidClosure.diff(currentDate, 'hour', true));
        let expiresInUnit = expiresIn <= 1 ? 'hour' : 'hours';

        if (expiresIn > 24) {
          expiresIn = Math.ceil(bidClosure.diff(currentDate, 'day', true));
          expiresInUnit = expiresIn <= 1 ? 'day' : 'days';
        }

        const bidClosureStr =
          expiresIn > 0 ? '< ' + expiresIn + ' ' + expiresInUnit : '-';
        const dealRow: DealRow = {
          id: deal.id,
          company_id: deal.company.id,
          score: deal.company_score.rating,
          max_trade_value: deal.company.remaining_tradable_value,
          bid_closure: bidClosureStr,
          status: {
            value: dealStatusMap[deal.status as string].value,
            className: dealStatusMap[deal.status as string].className,
          },
          total_bids: deal.bids_aggregate.aggregate?.count || 0,
          live_bid:
            deal.highest_bid && deal.highest_bid.length > 0
              ? deal.highest_bid[0].price
              : deal.company_score.min_bid_price,
          bids: deal.bids_aggregate.nodes.map((item) => {
            return {
              id: item.id,
              price: item.price as number,
              created_at: item.created_at as Date,
              your_bid: item.your_bid || false,
            };
          }),
        };
        return dealRow;
      });

      setRows(dealRows);
      setRowCount(dealsResp.deal_aggregate.aggregate?.count || 0);
    } else {
      setRows([]);
    }
  }, [dealsResp]);

  const refreshGrid = async () => {
    const orderBy: Deal_Order_By[] = [];

    sortModel.forEach((item) => {
      if (item.field === 'score') {
        orderBy.push({
          company_score: {
            rating: item.sort === 'asc' ? Order_By.Asc : Order_By.Desc,
          },
        });
      }
      if (item.field === 'status') {
        orderBy.push({
          status: item.sort === 'asc' ? Order_By.Asc : Order_By.Desc,
        });
      }
    });

    try {
      await getActiveDeals({
        variables: {
          offset: (pageNumber - 1) * pageSize,
          limit: pageSize,
          order_by: orderBy,
          where: {
            status: {
              _in: ['BIDDING', 'AVAILABLE'],
            },
          },
        },
      });
    } catch (error) {
      console.error(error);
    }
    return;
  };

  useEffect(() => {
    let active = true;

    (async () => {
      await refreshGrid();
    })();

    return () => {
      active = false;
    };
  }, [pageNumber, sortModel]);

  const dgColumns: GridColDef[] = [
    {
      field: 'company_id',
      headerName: 'Company Number',
      sortable: false,
      flex: 0.15,
      renderCell: (params: GridRenderCellParams<number>) => {
        return (
          <Link to={`/deal/${params.row.id}/company/${params.row.company_id}`}>
            {IdPrefixFormat(params.value, 'COMP')}
          </Link>
        );
      },
    },
    {
      field: 'score',
      sortable: true,
      flex: 0.1,
      align: 'center',
      headerAlign: 'center',
      renderHeader: () => {
        return (
          <Box display={'flex'} alignItems={'center'}>
            <LogoIcon width={16} style={{ marginRight: 4 }} />
            <Typography
              variant="body2"
              component={'div'}
              fontWeight={500}
              mr={1}
            >
              Score(/10)
            </Typography>
          </Box>
        );
      },
      renderCell: (params: GridRenderCellParams<number>) => {
        const color: 'success' | 'error' | 'warning' =
          params.value < 5 ? 'error' : params.value > 7 ? 'success' : 'warning';
        return <Chip label={params.value} color={color} variant="outlined" />;
      },
    },
    {
      field: 'max_trade_value',
      headerName: 'Max Trading Value',
      sortable: false,
      flex: 0.15,
      align: 'right',
      headerAlign: 'right',
      renderCell: (params: GridRenderCellParams<number>) => {
        return <span>{currencyFormat(params.value)}</span>;
      },
    },
    {
      field: 'bid_closure',
      headerName: 'Expiring In',
      sortable: false,
      flex: 0.2,
      align: 'center',
      headerAlign: 'center',
    },
    {
      field: 'status',
      headerName: 'Status',
      sortable: true,
      flex: 0.2,
      renderCell: (
        params: GridRenderCellParams<{ value: string; className: string }>
      ) => {
        return (
          <Box
            sx={{ display: 'flex', alignItems: 'center' }}
            className={params.value.className + ' text-semibold'}
          >
            <CircleIcon sx={{ marginRight: 1, width: '.8rem' }} />
            <span>{params.value.value}</span>
          </Box>
        );
      },
    },
    {
      field: 'total_bids',
      headerName: 'Total Bids',
      sortable: false,
      flex: 0.1,
      align: 'center',
      headerAlign: 'center',
      renderCell: (params: GridRenderCellParams<number>) => {
        return params.row.total_bids === 0 ? (
          <Typography variant="body2" fontWeight={700}>
            {params.value} {'Bids'}
          </Typography>
        ) : (
          <Button
            variant="anchor"
            size="small"
            onClick={() => {
              setShowAllBidsDialog(true);
              setAllBids(params.row.bids);
            }}
          >
            {params.value} {params.value === 1 ? 'Bid' : 'Bids'}
          </Button>
        );
      },
    },
    {
      field: 'live_bid',
      sortable: false,
      width: 135,
      renderHeader: () => {
        return (
          <Box display={'flex'} alignItems={'center'}>
            <Typography
              variant="body2"
              component={'div'}
              fontWeight={500}
              mr={1}
            >
              Live Bid
            </Typography>
            <Tooltip
              title="Minimum bid value in order to place a bid"
              placement="top"
            >
              <InfoOutlinedIcon fontSize="small" color="primary" />
            </Tooltip>
          </Box>
        );
      },
      renderCell: (params: GridRenderCellParams<number>) => {
        return (
          <Box
            sx={{
              backgroundColor: '#1E2738',
              border: '1px solid #2B3951',
              borderRadius: 1,
              paddingRight: 0.5,
              paddingLeft: 1.5,
              display: 'flex',
              alignItems: 'center',
              maxWidth: 120,
              width: '100%',
              height: 44,
              justifyContent: 'space-between',
            }}
          >
            <Typography variant="body2" mr={1}>
              {currencyFormat(params.value)}
            </Typography>

            <FlatIconButton
              size="small"
              disabled={params.row.status.value !== DealStatusEnum.BIDDING}
              onClick={() => {
                setShowPlaceBidDialog(true);
                setActiveDeal(params.row);
              }}
            >
              <HammerIcon className="align-middle" />
            </FlatIconButton>
          </Box>
        );
      },
    },
    {
      field: 'company_details',
      sortable: false,
      minWidth: 30,
      width: 30,
      align: 'right',
      cellClassName: 'row-detail',
      renderHeader: () => ' ',
      renderCell: (params: GridRenderCellParams<void>) => {
        return (
          <IconButton
            component={Link}
            to={`/deal/${params.row.id}/company/${params.row.company_id}`}
            size="small"
            sx={{ padding: 0 }}
          >
            <ChevronRightIcon fontSize="small" />
          </IconButton>
        );
      },
    },
  ];

  return (
    <Grid container spacing={2.5}>
      <Grid item xs={12}>
        <Typography variant="h3">
          <HammerIcon
            className="align-middle"
            style={{ marginRight: '0.75rem' }}
          />
          Place Bid
        </Typography>
      </Grid>
      <Grid item container xs={12}>
        <Grid item xs={12}>
          <div>
            <DataGrid
              columns={dgColumns}
              rows={rows}
              rowCount={rowCount}
              rowHeight={50}
              pageSize={pageSize}
              loading={dealsLoading}
              pagination
              autoHeight
              paginationMode="server"
              sortingMode="server"
              sortingOrder={['asc', 'desc']}
              rowsPerPageOptions={[pageSize]}
              hideFooterSelectedRowCount
              onSortModelChange={(model) => setSortModel(model)}
              // extra
              disableColumnSelector
              disableColumnResize
              disableColumnReorder
              disableColumnMenu
              disableSelectionOnClick
              disableDensitySelector
              components={{
                // Toolbar: GridToolbar,
                ColumnSortedAscendingIcon: () => (
                  <KeyboardArrowUpIcon fontSize="inherit" />
                ),
                ColumnSortedDescendingIcon: () => (
                  <KeyboardArrowDownIcon fontSize="inherit" />
                ),
                NoRowsOverlay: () => {
                  return (
                    <Box
                      sx={{
                        paddingTop: 8,
                        margin: 'auto',
                        textAlign: 'center',
                      }}
                    >
                      <img
                        src={nothingFound}
                        alt="no records found"
                        width={200}
                      />
                      <Typography variant="body2" className="text-color-2">
                        No records found
                      </Typography>
                    </Box>
                  );
                },
                Pagination: () => {
                  return !dealsLoading && rows.length === 0 ? (
                    <div></div>
                  ) : (
                    <div className="data-grid-pagination">
                      <Pagination
                        color="primary"
                        shape="rounded"
                        variant="outlined"
                        count={Math.ceil(rowCount / pageSize)}
                        page={pageNumber}
                        showFirstButton
                        showLastButton
                        onChange={(event, value) => {
                          if (pageNumber !== value) {
                            setPageNumber(value);
                          }
                        }}
                      />
                    </div>
                  );
                },
              }}
            ></DataGrid>
          </div>
        </Grid>
      </Grid>
      <AllBidsDialog
        bids={allBids}
        open={showAllBidsDialog}
        onClose={() => setShowAllBidsDialog(false)}
      ></AllBidsDialog>
      {activeDeal && (
        <PlaceBidDialog
          deal={activeDeal}
          open={showPlaceBidDialog}
          refreshGrid={refreshGrid}
          onClose={() => {
            setShowPlaceBidDialog(false);
            setActiveDeal(null);
          }}
        />
      )}
    </Grid>
  );
}

export default PlaceBid;
