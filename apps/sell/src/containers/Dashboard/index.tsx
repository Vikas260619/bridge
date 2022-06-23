import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Alert,
  AlertProps,
  Button,
  Card,
  CardContent,
  CardHeader,
  Grid,
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Tooltip,
  Typography,
  CircularProgress,
} from '@mui/material';
import { Box } from '@mui/system';

import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CircleIcon from '@mui/icons-material/Circle';

import { ReactComponent as VerticalSeparatorIcon } from './../../assets/svg/vertical-separator-icon.svg';
import { ReactComponent as ArrIcon } from './../../assets/svg/arr-icon.svg';
import { ReactComponent as TotalAmountTradedLimitIcon } from './../../assets/svg/total-amount-traded-limit-icon.svg';
import { ReactComponent as RemainingTradeLimitIcon } from './../../assets/svg/remaining-trade-limit-icon.svg';
import { ReactComponent as FacilityLimitIcon } from './../../assets/svg/facility-limit-icon.svg';
import { ReactComponent as BidPriceIcon } from './../../assets/svg/bid-price-icon.svg';
import { ReactComponent as EditIcon } from './../../assets/svg/edit-icon.svg';
import { ReactComponent as DocumentIcon } from './../../assets/svg/document-icon.svg';
import { ReactComponent as ClockIcon } from './../../assets/svg/clock-icon.svg';
import { ReactComponent as InfoIcon } from './../../assets/images/Info.svg';
import { useGetDashboardStatsQuery } from '@bridgeup/data-access/hooks/company/company-dashboard-stats.hooks';

import { useGetCompanyScheduledPayoutSummaryQuery } from '@bridgeup/data-access/hooks/company/company-scheduled-payout-summay.hooks';

import { useGetCompanyPrimaryAccountQuery } from '@bridgeup/data-access/hooks/company/company-primary-account.hooks';
import { useGetLatestTradesQuery } from '@bridgeup/data-access/hooks/company/latest-trade.hooks';

import { UserContext } from '../../context/UserContext';
import { Link } from 'react-router-dom';
import { dateFormat, currencyFormat } from '@bridgeup/common/formatter';

interface DashboardStatsViewModel {
  arr?: number;
  facilityLimit?: number;
  totalTradedAmount?: number;
  remainingTradeLimit: number;
  offer?: {
    price: number;
    expiry: string;
  };
}

interface BankAccount {
  id: number;
  name: string;
  no: string;
  bank: {
    id: number;
    name: string;
    code: string;
  };
}

interface ScheduledPayment {
  tradeId: number;
  tradeCode: string;
  amount: number;
  scheduledAt: string;
}

interface BupAlert extends AlertProps {
  message: string;
}

interface RecentTrade {
  date: string;
  code: string;
  contractValue: number;
  payout: number;
  status: {
    text: TradeStatusEnum;
    severity: TradeStatusSeverityEnum;
  } | null;
  offerPrice: number;
}

enum TradeStatusEnum {
  INITIATED = 'IN PROGRESS',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  FAILED = 'FAILED',
  DEFAULT = 'DEFAULT',
}

enum TradeStatusSeverityEnum {
  INITIATED = 'info.main',
  ACTIVE = 'success.main',
  COMPLETED = 'success.main',
  FAILED = 'error.main',
  DEFAULT = 'warning.main',
}

function Dashboard() {
  const userContext = useContext(UserContext);

  const [openForTrade, setOpenForTrade] = useState(false);
  const [showTradeBtn, setShowTradeBtn] = useState(false);
  const [dashboardStatsVM, setDashboardStatsVM] =
    useState<DashboardStatsViewModel>();

  const [bankAccount, setBankAccount] = useState<BankAccount>();
  const [scheduledPayments, setScheduledPayments] =
    useState<ScheduledPayment[]>();
  const [alertProps, setAlertProps] = useState<BupAlert>();
  const [recentTrades, setRecentTrades] = useState<RecentTrade[]>();
  const navigate = useNavigate();
  const {
    data: dashboardStats,
    loading: pageLoading,
    error: apiError,
  } = useGetDashboardStatsQuery({
    fetchPolicy: 'no-cache',
  });

  const {
    data: primaryAccountData,
    loading: primaryAccountLoading,
    error: primaryAccountError,
  } = useGetCompanyPrimaryAccountQuery({
    fetchPolicy: 'no-cache',
  });

  const {
    data: upcomingPayments,
    loading: upcomingPaymentsLoading,
    error: upcomingPaymentsError,
  } = useGetCompanyScheduledPayoutSummaryQuery({
    fetchPolicy: 'no-cache',
  });

  const {
    data: latestTradeData,
    loading: latestTradeLoading,
    error: latestTradeError,
  } = useGetLatestTradesQuery({
    fetchPolicy: 'no-cache',
  });

  useEffect(() => {
    setShowTradeBtn(false);
    setOpenForTrade(false);
    let msg = '';

    if (!dashboardStats) {
      return;
    }

    const companyData = dashboardStats?.company[0];

    switch (companyData.status) {
      case 'CONNECTED':
        setOpenForTrade(false);
        msg =
          'We are evaluating your newly linked integrations, your trading factors will be updated post evaluation.';
        // eslint-disable-next-line no-case-declarations
        const bupAlert: BupAlert = {
          message: msg,
          severity: 'info',
        };
        setAlertProps(bupAlert);
        break;
      case 'READY_TO_TRADE':
        {
          // TODO: uncomment below when open for trading feature is ready
          // setOpenForTrade(true);
          const deal = companyData.deals[0];
          if (deal) {
            if (deal.status === 'AVAILABLE') {
              setShowTradeBtn(true);
            }
            if (deal.status === 'BIDDING') {
              msg = 'Sit tight! We will get back with an offer within 48 hours';
              const bupAlert: BupAlert = {
                message: msg,
                severity: 'info',
              };
              setAlertProps(bupAlert);
            }
            if (deal.status === 'PAUSED') {
              setShowTradeBtn(false);
              const trade = deal.trades[0];
              if (trade) {
                if (trade.status === 'CONTRACT_SELECTED') {
                  msg =
                    'You have an ongoing trade, complete payment mandate generation to receive payout.';
                  const bupAlert: BupAlert = {
                    message: msg,
                    severity: 'info',
                    action: (
                      <Link to={'/trade/mandate-generate/' + trade.id}>
                        CONTINUE TRADING
                      </Link>
                    ),
                  };
                  setAlertProps(bupAlert);
                } else if (
                  trade.status === 'MANDATE_REGISTERED' ||
                  trade.status === 'MANDATE_IN_REVIEW' ||
                  trade.status === 'MANDATE_FAILED' ||
                  trade.status === 'MANDATE_SIGNED'
                ) {
                  msg =
                    'Your BridgeUp account has been temporarily paused until your payment mandate is processed.';
                  const bupAlert: BupAlert = {
                    message: msg,
                    severity: 'error',
                    action: (
                      <Link to={'/trade/mandate-generate/' + trade.id}>
                        CONTINUE TRADING
                      </Link>
                    ),
                  };
                  setAlertProps(bupAlert);
                } else if (
                  trade.status === 'MANDATE_SUCCESS' ||
                  trade.status === 'APA_GENERATED'
                ) {
                  msg =
                    'You have an ongoing trade, sign asset purchase agreement to receive payout.';
                  const bupAlert: BupAlert = {
                    message: msg,
                    severity: 'info',
                    action: (
                      <Link to={'/trade/apa-sign/' + trade.id}>
                        VIEW AGREEMENT
                      </Link>
                    ),
                  };
                  setAlertProps(bupAlert);
                } else if (
                  trade.status === 'APA_COMPANY_SIGNED' ||
                  trade.status === 'APA_IN_REVIEW'
                ) {
                  const accountNo =
                    trade.mandate_account?.ref_bank.name +
                    ' ' +
                    trade.mandate_account?.account_no.replace(
                      /.(?=.{4})/g,
                      'X'
                    );
                  msg =
                    'Your payment will be credited to ' +
                    accountNo +
                    ' within 24 hours.';
                  const bupAlert: BupAlert = {
                    message: msg,
                    severity: 'info',
                    action: (
                      <Link to={'/trade/apa-sign/' + trade.id}>VIEW TRADE</Link>
                    ),
                  };
                  setAlertProps(bupAlert);
                }
              }
            }
          }
        }
        break;

      case 'PAUSED':
        setOpenForTrade(false);
        break;
    }

    const dashboardStatsViewModel: DashboardStatsViewModel = {
      remainingTradeLimit: companyData?.remaining_tradable_value,
      totalTradedAmount:
        companyData?.trades_aggregate.aggregate?.sum?.payout_value,
    };

    if (companyData?.company_scores && companyData?.company_scores.length > 0) {
      dashboardStatsViewModel.arr = companyData?.company_scores[0].arr;
      dashboardStatsViewModel.facilityLimit =
        companyData?.company_scores[0].facility_limit;
    }

    if (companyData?.deals && companyData?.deals.length) {
      const bid = companyData.deals[0].bids[0];
      if (bid) {
        dashboardStatsViewModel.offer = {
          price: bid.price,
          expiry: dateFormat(new Date(companyData?.deals[0].deal_expiry)),
        };
      }
    }

    setDashboardStatsVM(dashboardStatsViewModel);
  }, [dashboardStats]);

  useEffect(() => {
    if (primaryAccountData?.account && primaryAccountData?.account.length) {
      const acc = primaryAccountData?.account[0];

      const ba: BankAccount = {
        id: acc.id,
        name: acc.name,
        no: acc.account_no,
        bank: {
          id: acc.ref_bank.id,
          name: acc.ref_bank.name,
          code: acc.ref_bank.bank_code,
        },
      };
      setBankAccount(ba);
    }
  }, [primaryAccountData]);

  useEffect(() => {
    if (upcomingPayments?.scheduled_payout) {
      const sp = upcomingPayments?.scheduled_payout;

      const payments = sp.map((p) => {
        const pay: ScheduledPayment = {
          tradeId: p.trade.id,
          tradeCode: p.trade.code ? p.trade.code : 'TRD' + p.trade.id,
          amount: p.amount,
          scheduledAt: dateFormat(new Date(p.scheduled_at)),
        };
        return pay;
      });
      setScheduledPayments(payments);
    }
  }, [upcomingPayments]);

  useEffect(() => {
    if (latestTradeData && latestTradeData.trade) {
      const trades = latestTradeData.trade;
      const rts = trades.map((item) => {
        let status = null;
        switch (item.state) {
          case 'INITIATED':
            status = {
              text: TradeStatusEnum.INITIATED,
              severity: TradeStatusSeverityEnum.INITIATED,
            };
            break;
          case 'ACTIVE':
            status = {
              text: TradeStatusEnum.ACTIVE,
              severity: TradeStatusSeverityEnum.ACTIVE,
            };
            break;
          case 'COMPLETED':
            status = {
              text: TradeStatusEnum.COMPLETED,
              severity: TradeStatusSeverityEnum.COMPLETED,
            };
            break;
          case 'FAILED':
            status = {
              text: TradeStatusEnum.FAILED,
              severity: TradeStatusSeverityEnum.FAILED,
            };
            break;
          case 'DEFAULT':
            status = {
              text: TradeStatusEnum.DEFAULT,
              severity: TradeStatusSeverityEnum.DEFAULT,
            };
        }

        const rt: RecentTrade = {
          date: dateFormat(new Date(item.created_at)),
          code: item.code ? item.code : 'TRD' + item.id,
          contractValue: item.selected_customers_value,
          payout: item.payout_value,
          offerPrice: item.bid.price,
          status: status,
        };
        return rt;
      });
      setRecentTrades(rts);
    }
  }, [latestTradeData]);

  return (
    <div className="bup-dashboard-container">
      <Grid container spacing={{ xs: 0, sm: 2, md: 4, lg: 5 }}>
        <Grid item xs={12} sm={8} md={8} lg={9} xl={9}>
          {alertProps && (
            <div className="mb-10">
              <Alert
                style={{ alignItems: 'center' }}
                variant="outlined"
                severity={alertProps.severity}
                action={alertProps.action}
              >
                {alertProps.message}
              </Alert>
            </div>
          )}
          <Grid
            container
            spacing={0}
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            className="full-w mb-10"
          >
            <Grid item>
              <Grid
                container
                spacing={0}
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Typography
                  display="inline-block"
                  variant="h6"
                  className="mr-2"
                >
                  <span className="font-normal">Welcome</span>&nbsp;
                  {userContext.user?.first_name}&nbsp;
                  {userContext.user?.last_name}
                </Typography>
                <VerticalSeparatorIcon className="mr-2"></VerticalSeparatorIcon>
                <Typography display="inline-block" variant="h6">
                  {userContext.user?.company.name}
                </Typography>
              </Grid>
              {openForTrade && (
                <div>
                  <Typography
                    display="inline-block"
                    variant="body2"
                    className="text-color-3"
                  >
                    Open for Trading
                  </Typography>
                  <IconButton aria-label="edit  open for trading">
                    <EditIcon />
                  </IconButton>
                </div>
              )}
            </Grid>
            <Grid item xs="auto">
              <Button
                className="primary-btn px-14 py-3 font-bold"
                size="large"
                variant="contained"
                onClick={() => navigate('/trade/initiate')}
                disabled={!showTradeBtn}
              >
                Trade
              </Button>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            className="mb-10"
          >
            <Grid item xs>
              <Box
                className="bup-dashboard-stats-card"
                style={{
                  padding: '1rem',
                  backgroundColor: '#1E2738',
                  minWidth: '180px',
                }}
              >
                <Grid
                  container
                  spacing={0}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  className="full-w"
                >
                  <Grid
                    container
                    item
                    xs={12}
                    justifyContent="space-between"
                    alignItems="center"
                    className="mb-2"
                  >
                    <ArrIcon></ArrIcon>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="body2"
                      className="font-medium text-color-2"
                      gutterBottom
                    >
                      Available ARR
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    {pageLoading ? (
                      <CircularProgress size="1rem" />
                    ) : (
                      <Typography
                        variant="h6"
                        className="font-bold text-color-1"
                      >
                        {dashboardStatsVM?.arr
                          ? currencyFormat(dashboardStatsVM?.arr)
                          : '-'}
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs>
              <Box
                className="bup-dashboard-stats-card"
                style={{
                  padding: '1rem',
                  backgroundColor: '#1E2738',
                  minWidth: '180px',
                }}
              >
                <Grid
                  container
                  spacing={0}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  className="full-w"
                >
                  <Grid
                    container
                    item
                    xs={12}
                    justifyContent="space-between"
                    alignItems="center"
                    className="mb-2"
                  >
                    <FacilityLimitIcon></FacilityLimitIcon>

                    {/* <Typography
                      variant="body2"
                      className="font-medium color-status-success"
                      display="flex"
                      alignContent="center"
                    >
                      <ArrowDropUpIcon />
                      <span>20%</span>
                    </Typography> */}
                  </Grid>
                  <Grid
                    container
                    item
                    xs={12}
                    alignItems="center"
                    className="mb-2"
                  >
                    <Typography
                      variant="body2"
                      className="font-medium text-color-2"
                      display="inline-block"
                    >
                      Facility Limit
                    </Typography>
                    <Tooltip title="Facility Limit" className="ml-2">
                      <InfoIcon />
                    </Tooltip>
                  </Grid>
                  <Grid item xs={12}>
                    {pageLoading ? (
                      <CircularProgress size="1rem" />
                    ) : (
                      <Typography
                        variant="h6"
                        className="font-bold text-color-1"
                      >
                        {dashboardStatsVM?.facilityLimit
                          ? dashboardStatsVM?.facilityLimit + '%'
                          : '-'}
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs>
              <Box
                className="bup-dashboard-stats-card"
                style={{
                  padding: '1rem',
                  backgroundColor: '#1E2738',
                  minWidth: '180px',
                }}
              >
                <Grid
                  container
                  spacing={0}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  className="full-w"
                >
                  <Grid
                    container
                    item
                    xs={12}
                    justifyContent="space-between"
                    alignItems="center"
                    className="mb-2"
                  >
                    <TotalAmountTradedLimitIcon></TotalAmountTradedLimitIcon>
                  </Grid>
                  <Grid
                    container
                    item
                    xs={12}
                    alignItems="center"
                    className="mb-2"
                  >
                    <Typography
                      variant="body2"
                      className="font-medium text-color-2"
                    >
                      Total Amount Traded
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    {pageLoading ? (
                      <CircularProgress size="1rem" />
                    ) : (
                      <Typography
                        variant="h6"
                        className="font-bold text-color-1"
                      >
                        {dashboardStatsVM?.totalTradedAmount
                          ? currencyFormat(dashboardStatsVM?.totalTradedAmount)
                          : '-'}
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs>
              <Box
                className="bup-dashboard-stats-card"
                style={{
                  padding: '1rem',
                  backgroundColor: '#1E2738',
                  minWidth: '180px',
                }}
              >
                <Grid
                  container
                  spacing={0}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  className="full-w"
                >
                  <Grid
                    container
                    item
                    xs={12}
                    justifyContent="space-between"
                    alignItems="center"
                    className="mb-2"
                  >
                    <RemainingTradeLimitIcon></RemainingTradeLimitIcon>
                  </Grid>
                  <Grid
                    container
                    item
                    xs={12}
                    alignItems="center"
                    className="mb-2"
                  >
                    <Typography
                      variant="body2"
                      className="font-medium text-color-2"
                    >
                      Remaining Trade Limit
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    {pageLoading ? (
                      <CircularProgress size="1rem" />
                    ) : (
                      <Typography
                        variant="h6"
                        className="font-bold text-color-1"
                      >
                        {dashboardStatsVM?.remainingTradeLimit
                          ? currencyFormat(
                              dashboardStatsVM?.remainingTradeLimit
                            )
                          : '-'}
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </Box>
            </Grid>
            <Grid item xs>
              <Box
                className="bup-dashboard-stats-card"
                style={{
                  padding: '1rem',
                  backgroundColor: '#1E2738',
                  minWidth: '180px',
                }}
              >
                <Grid
                  container
                  spacing={0}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Grid
                    container
                    item
                    xs={12}
                    justifyContent="space-between"
                    alignItems="center"
                    className="mb-2"
                  >
                    <BidPriceIcon />
                  </Grid>
                  <Grid
                    container
                    item
                    xs={12}
                    alignItems="center"
                    className="mb-2"
                  >
                    <Typography
                      variant="body2"
                      className="font-medium text-color-2"
                    >
                      Offer Price
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    {pageLoading ? (
                      <CircularProgress size="1rem" />
                    ) : (
                      <Typography
                        variant="h6"
                        className="font-bold text-color-1"
                        display="flex"
                        alignItems="center"
                      >
                        {dashboardStatsVM?.offer ? (
                          <>
                            {currencyFormat(dashboardStatsVM.offer.price)}
                            <Tooltip
                              title={
                                <Typography variant="body2">
                                  <span>Offer Validity: &nbsp;</span>
                                  <span className="color-status-success">
                                    Until&nbsp;
                                    {dashboardStatsVM?.offer?.expiry}
                                  </span>
                                </Typography>
                              }
                            >
                              <ClockIcon
                                width="18px"
                                height="18px"
                                className="mx-1"
                                style={{ cursor: 'pointer' }}
                              ></ClockIcon>
                            </Tooltip>
                            <Typography
                              variant="caption"
                              className="text-color-3"
                            >
                              {dashboardStatsVM?.offer?.expiry}
                            </Typography>
                          </>
                        ) : (
                          '-'
                        )}
                      </Typography>
                    )}
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Grid container direction="row" className="mb-10">
            <Grid
              item
              container
              xs={12}
              justifyContent="space-between"
              alignItems="center"
              className="mb-5"
            >
              <Typography variant="h3">Recent Trade</Typography>
              {/* <Link to="/trades">
                  VIEW ALL TRADE{' '}
                  <KeyboardArrowRightIcon sx={{ fontSize: '.875rem' }} />
                </Link> */}
            </Grid>
            <Grid container item>
              <Table aria-label="Recently created trades">
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Trade ID</TableCell>
                    <TableCell align="right">Contract Value</TableCell>
                    <TableCell align="right">Payout</TableCell>
                    <TableCell>Status</TableCell>
                    <TableCell align="right">Offer Price</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {latestTradeLoading ? (
                    <TableRow
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <TableCell colSpan={6}>
                        <CircularProgress
                          size="1rem"
                          className="mt-2"
                        ></CircularProgress>
                      </TableCell>
                    </TableRow>
                  ) : !recentTrades || recentTrades.length === 0 ? (
                    <TableRow
                      sx={{
                        '&:last-child td, &:last-child th': { border: 0 },
                      }}
                    >
                      <TableCell colSpan={6}>
                        <Box
                          alignItems="center"
                          display="flex"
                          flexDirection="column"
                        >
                          <Typography
                            variant="h6"
                            component="div"
                            className="text-color-3 font-bold"
                          >
                            You haven’t performed any trades yet.
                          </Typography>
                          <div>
                            <Button
                              href="/trade/initiate"
                              className="mt-5 font-bold"
                              disabled={!showTradeBtn}
                            >
                              Perform a TRADE
                            </Button>
                          </div>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ) : (
                    recentTrades.map((rt, i) => (
                      <TableRow
                        key={i}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <TableCell component="th" scope="row">
                          {rt.date}
                        </TableCell>
                        <TableCell>{rt.code}</TableCell>
                        <TableCell align="right">
                          {currencyFormat(rt.contractValue)}
                        </TableCell>
                        <TableCell align="right">
                          {currencyFormat(rt.payout)}
                        </TableCell>
                        <TableCell>
                          <Typography
                            color={rt.status?.severity}
                            variant="body2"
                            className="font-semibold"
                          >
                            <CircleIcon
                              sx={{ fontSize: '0.5rem' }}
                              className="mr-2"
                            ></CircleIcon>
                            {rt.status?.text}
                          </Typography>
                        </TableCell>
                        <TableCell align="right">
                          {currencyFormat(rt.offerPrice)}
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={3} xl={3}>
          <Card className="mb-10">
            <CardHeader
              title={
                <Typography variant="h6" className="font-medium">
                  Primary Linked Account
                </Typography>
              }
              disableTypography
              className="px-6 py-3 bg-color-2"
            ></CardHeader>
            <CardContent className="bg-color-3 px-6 py-3">
              {primaryAccountLoading ? (
                <CircularProgress size="1rem" />
              ) : bankAccount ? (
                <>
                  <Typography variant="body1" component="div">
                    {bankAccount.bank.name}
                  </Typography>
                  <Typography variant="body1" component="div">
                    {bankAccount.no.replace(/.(?=.{4})/g, 'X')}
                  </Typography>
                  <Typography color="">{bankAccount.name}</Typography>
                </>
              ) : (
                <Box
                  alignItems="flex-start"
                  display="flex"
                  flexDirection="column"
                >
                  <Typography
                    variant="h6"
                    component="div"
                    className="text-color-3 font-bold"
                  >
                    No bank account linked
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>

          <Card className="mb-10">
            <CardHeader
              title={
                <Typography variant="h6" className="font-medium">
                  Upcoming Payments
                </Typography>
              }
              disableTypography
              className="px-6 py-3 bg-color-2"
            ></CardHeader>
            <CardContent className="bg-color-3 px-6 py-3">
              {upcomingPaymentsLoading ? (
                <CircularProgress size="1rem" />
              ) : scheduledPayments && scheduledPayments.length > 0 ? (
                scheduledPayments.map((p, i) => {
                  return (
                    <Grid
                      container
                      item
                      className={
                        'mb-4 pb-4 ' +
                        (i !== scheduledPayments.length - 1
                          ? 'inner-border-b'
                          : 'border-none')
                      }
                      key={i}
                    >
                      <Grid item xs={12}>
                        <Typography
                          variant="caption"
                          className="font-medium text-color-secondary-active"
                          alignItems="center"
                          display="flex"
                        >
                          <DocumentIcon
                            className="mr-1.5"
                            width="12"
                            height="12"
                          />
                          <span>{p.tradeCode}</span>
                        </Typography>
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        container
                        justifyContent="space-between"
                        alignItems="flex-end"
                        columnSpacing={1}
                      >
                        <Grid item xs>
                          <Typography variant="subtitle2" display="block">
                            {p.scheduledAt}
                          </Typography>
                        </Grid>
                        <Grid item xs>
                          <Typography
                            variant="body2"
                            className="font-bold text-right"
                            display="block"
                          >
                            {currencyFormat(p.amount)}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  );
                })
              ) : (
                <Box
                  alignItems="flex-start"
                  display="flex"
                  flexDirection="column"
                >
                  <Typography
                    variant="h6"
                    component="div"
                    className="text-color-3 font-bold"
                  >
                    No upcoming payments yet.
                  </Typography>
                </Box>
              )}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default Dashboard;
