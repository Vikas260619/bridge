import React, { useState, useEffect } from 'react';
import { LoadingButton } from '@mui/lab';
import Grid from '@mui/material/Grid';
import {
  Alert,
  AlertProps,
  Box,
  Button,
  SvgIcon,
  TextField,
} from '@mui/material';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InfoIcon from '@mui/icons-material/Info';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';
import { ReactComponent as TimerIcon } from '../../assets/icons/timer-icon.svg';
import { ReactComponent as CheckSquareIcon } from '../../assets/icons/check-square-icon.svg';
import AllBidsDialog from '../../components/bid/all-bids-dialog';
import Bid from '@bridgeup/data-access/models/bid';

import { currencyFormat, dateFormat } from '@bridgeup/common/formatter';
import SmallAlert from '../../components/small-alert';

interface BidCardProps {
  dealId: number;
  companyId: number;
  bid: any;
  handlePlaceBid: (bidPrice: number) => void;
  placeBidLoading: boolean;
  placeBidErr: any;
}

interface BidStatusAlert extends AlertProps {
  message: string;
}

const BidCard: React.FC<BidCardProps> = ({
  dealId,
  companyId,
  bid,
  handlePlaceBid,
  placeBidLoading,
  placeBidErr,
}) => {
  const [timeLeft, setTimeLeft] = useState<any>(null!);
  const [showAllBidsDialog, setShowAllBidsDialog] = useState(false);
  const [allBids, setAllBids] = useState<Bid[]>([]);
  const [statusAlert, setStatusAlert] = useState<BidStatusAlert>(null!);
  const [minBidPrice, setMinBidPrice] = useState<number>(0);
  const [bidPrice, setBidPrice] = useState<number>(0);
  const [totalBid, setTotalBid] = useState<number>(0);
  const [irr, setIrr] = useState<string>('');

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (bid.status === 'BIDDING') {
      timer = setInterval(() => {
        console.log('log');
        setTimeLeft(calculateTimeLeft(bid.bidClosure));
      }, 1000);
    }

    return () => timer && clearTimeout(timer);
  }, [bid]);

  useEffect(() => {
    if (bid) {
      setTotalBid(bid.totalBids);

      const minBidPrice = parseFloat((bid.liveBid + 0.0005).toFixed(4));

      console.log('minBidPrice', minBidPrice, bid);
      setMinBidPrice(minBidPrice);
      setBidPrice(minBidPrice);

      switch (bid.status) {
        case 'AVAILABLE': {
          if (bid.winner) {
            setStatusAlert({
              severity: 'success',
              message: 'Bid is closed and you have won the bid',
              color: 'success',
              variant: 'outlined',
              icon: (
                <SvgIcon
                  component={CheckSquareIcon}
                  color={'inherit'}
                  fontSize={'inherit'}
                />
              ),
            });
          } else {
            let message = 'Bid is closed';
            if (bid.yourBids.length > 0) {
              message = 'Bid is closed and you have lost the bid';
            }
            setStatusAlert({
              severity: 'warning',
              variant: 'outlined',
              color: 'warning',
              message: message,
              icon: (
                <CancelPresentationIcon
                  color={'inherit'}
                  fontSize={'inherit'}
                />
              ),
            });
          }

          break;
        }
        case 'BIDDING': {
          if (bid.highestBid[0]?.your_bid) {
            setStatusAlert({
              severity: 'success',
              message: 'You’re the Highest Bidder',
              color: 'success',
              variant: 'filled',
              icon: <CheckCircleIcon color={'inherit'} fontSize={'inherit'} />,
            });
          } else {
            if (bid.yourBids.length > 0) {
              setStatusAlert({
                severity: 'error',
                message: 'You’ve been outbid.',
                color: 'error',
                variant: 'filled',
                icon: <InfoIcon color={'inherit'} fontSize={'inherit'} />,
              });
            }
          }
          break;
        }
      }
    }
  }, [bid]);

  const placeBidEvent = async () => {
    if (bidPrice >= minBidPrice) {
      await handlePlaceBid(bidPrice);
    }
  };

  useEffect(() => {
    setIrr(((1 - bidPrice) * 200).toFixed(0));
  }, [bidPrice]);

  const renderDetails1 = () => {
    return (
      <Grid container spacing={3} mb={3}>
        <Grid
          item
          xs={12}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Typography variant="body2" component="div">
            Max Trade Value
          </Typography>
          <Typography variant="h6" component="div" fontWeight={700}>
            {currencyFormat(bid.maxTradeValue)}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Typography variant="body2" component="div">
            Payback Schedule
          </Typography>
          <Typography variant="h6" component="div" fontWeight={700}>
            Monthly
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Typography variant="body2" component="div">
            Contract Term
          </Typography>
          <Typography variant="h6" component="div" fontWeight={700}>
            12 months
          </Typography>
        </Grid>
      </Grid>
    );
  };

  const renderDetails2 = () => {
    return (
      <Grid container spacing={3} mb={3} mt={0}>
        <Grid
          item
          xs={12}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Typography variant="body2" component="div">
            Suggested Bid Price
          </Typography>
          <Typography variant="h6" component="div" fontWeight={700}>
            ₹{bid?.minRecommendedBid} - ₹{bid?.maxRecommendedBid}
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Typography variant="body2" component="div">
            Total Bids
          </Typography>
          {totalBid === 0 ? (
            <Typography variant="h6" component="div" fontWeight={700}>
              {totalBid} {'Bids'}
            </Typography>
          ) : (
            <Button
              variant="anchor"
              size="small"
              onClick={() => {
                setShowAllBidsDialog(true);
                setAllBids(bid.bids);
              }}
            >
              <Typography variant="h6" component="div" fontWeight={700}>
                {totalBid} {totalBid === 1 ? 'Bid' : 'Bids'}
              </Typography>
            </Button>
          )}
        </Grid>
        <Grid
          item
          xs={12}
          display={'flex'}
          justifyContent={'space-between'}
          alignItems={'center'}
        >
          <Typography variant="body2" component="div">
            Estimated IRR
          </Typography>
          <Typography variant="h6" component="div" fontWeight={700}>
            {irr}%
          </Typography>
        </Grid>
        {bid.status === 'BIDDING' &&
          bid.highestBid &&
          bid.highestBid.length > 0 && (
            <Grid container item xs={12}>
              <Grid item xs={12} className="bg-color-primary">
                {bid.yourBids &&
                  bid.yourBids.length > 0 &&
                  !bid.highestBid[0].your_bid && (
                    <>
                      <Box
                        display={'flex'}
                        justifyContent={'space-between'}
                        alignItems={'center'}
                        p={1.5}
                      >
                        <Typography
                          variant="body2"
                          component="div"
                          fontWeight={500}
                          className={'text-color-4'}
                        >
                          Your Bid
                          <Typography
                            variant="caption"
                            className="text-color-3"
                            ml={1}
                          >
                            ({dateFormat(bid.yourBids[0].created_at)})
                          </Typography>
                        </Typography>
                        <Typography
                          variant="h6"
                          component="div"
                          fontWeight={700}
                        >
                          {bid.yourBids[0].price
                            ? currencyFormat(bid.yourBids[0].price)
                            : '--'}
                        </Typography>
                      </Box>
                      <Divider
                        variant="fullWidthDashed"
                        sx={{ mx: 1.5 }}
                      ></Divider>
                    </>
                  )}
                <Box
                  display={'flex'}
                  justifyContent={'space-between'}
                  alignItems={'center'}
                  p={1.5}
                >
                  <Typography
                    variant="body2"
                    component="div"
                    fontWeight={500}
                    className={'text-color-4'}
                  >
                    Current Highest Bid
                  </Typography>
                  <Typography variant="h6" component="div" fontWeight={700}>
                    {bid.highestBid[0]?.price
                      ? currencyFormat(bid.highestBid[0].price)
                      : '--'}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          )}
      </Grid>
    );
  };

  return (
    <Grid container className={'bg-color-3'} mt={2.5}>
      {bid.status === 'BIDDING' && statusAlert && (
        <Grid item xs={12}>
          <SmallAlert
            severity={statusAlert.severity}
            variant={statusAlert.variant}
            color={statusAlert.color}
            icon={statusAlert.icon}
            sx={{ borderRadius: 0 }}
          >
            {statusAlert.message}
          </SmallAlert>
        </Grid>
      )}
      <Grid item xs={12} p={2}>
        {placeBidErr && (
          <Alert sx={{ marginBottom: 2 }} variant="outlined" severity="error">
            {placeBidErr}
          </Alert>
        )}
        {bid.status === 'BIDDING' && (
          <Box
            className="bg-color-1"
            display={'flex'}
            justifyContent="space-between"
            padding={1}
            borderRadius={1}
          >
            <Typography variant={'caption'} className="text-color-2">
              Bidding Ends in{' '}
            </Typography>
            <div className="flex justify-start items-center">
              <TimerIcon />
              <Typography variant="body2" fontWeight={700}>
                {timeLeft?.hours < 10 ? `0${timeLeft?.hours}` : timeLeft?.hours}{' '}
                :
                {timeLeft?.minutes < 10
                  ? `0${timeLeft?.minutes}`
                  : timeLeft?.minutes}{' '}
                :
                {timeLeft?.seconds < 10
                  ? `0${timeLeft?.seconds}`
                  : timeLeft?.seconds}{' '}
              </Typography>
            </div>
          </Box>
        )}
        {bid.status !== 'BIDDING' && statusAlert && (
          <Alert
            severity={statusAlert.severity}
            variant={statusAlert.variant}
            color={statusAlert.color}
            icon={statusAlert.icon}
          >
            {statusAlert.message}
          </Alert>
        )}
      </Grid>
      <Grid item xs={12} px={2}>
        {renderDetails1()}
        <Divider variant="fullWidthDashed" />
      </Grid>

      <Grid item xs={12} px={2}>
        {renderDetails2()}
      </Grid>
      {bid.status === 'BIDDING' && (
        <Grid container item xs={12}>
          <Grid item xs={12} sm={6}>
            <TextField
              type={'number'}
              size={'small'}
              variant={'filled'}
              hiddenLabel
              value={bidPrice}
              fullWidth
              onChange={(e) => setBidPrice(parseFloat(e.target.value))}
              inputProps={{
                min: minBidPrice,
                max: '1',
                step: '0.0005',
              }}
            ></TextField>
          </Grid>
          <Grid item xs={12} sm={6}>
            <LoadingButton
              fullWidth
              loading={placeBidLoading}
              loadingPosition={'end'}
              endIcon={<span></span>}
              disabled={placeBidLoading}
              onClick={placeBidEvent}
              sx={{ height: '100%' }}
              size="small"
              variant="primary"
            >
              Place Bid
            </LoadingButton>
          </Grid>
        </Grid>
      )}
      {showAllBidsDialog && (
        <AllBidsDialog
          bids={allBids}
          open={showAllBidsDialog}
          onClose={() => setShowAllBidsDialog(false)}
        ></AllBidsDialog>
      )}
    </Grid>
  );
};

export default BidCard;

const calculateTimeLeft = (date: Date) => {
  const difference = +new Date(date) - +new Date();

  let timeLeft = {};

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};
