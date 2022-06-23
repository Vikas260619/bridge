import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Grid,
  IconButton,
  TextField,
  Typography,
} from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import InfoOutlined from '@mui/icons-material/InfoOutlined';
import { LoadingButton } from '@mui/lab';
import { ApolloError } from '@apollo/client';

import { usePlaceBidMutation } from '@bridgeup/data-access/hooks/investor/place-bid.hooks';
import { DealRow } from '@bridgeup/data-access/models/deal-row';
import { currencyFormat, IdPrefixFormat } from '@bridgeup/common/formatter';

import { ReactComponent as BidPriceIcon } from './../../../assets/icons/bid-price-icon.svg';
import { useSnackbar } from 'notistack';
import { PlaceBidErrorMessages } from './../../../utils/constants';

export interface PlaceBidDialogProps {
  open: boolean;
  deal: DealRow;
  onClose: () => void;
  refreshGrid: () => void;
}

const PlaceBidDialog = (props: PlaceBidDialogProps) => {
  const { onClose, deal, open, refreshGrid } = props;
  const minBidPrice = parseFloat((deal.live_bid + 0.0005).toFixed(4));
  const [bidPrice, setBidPrice] = useState<number>(minBidPrice);
  const [irr, setIrr] = useState<string>('');
  const [placeBidErr, setPlaceBidErr] = useState<string>('');
  const { enqueueSnackbar } = useSnackbar();

  const handleClose = () => {
    onClose();
  };

  const [placeBidMutation, { loading: placeBidMutationLoading }] =
    usePlaceBidMutation({});

  const placeBidEvent = async () => {
    if (bidPrice >= minBidPrice) {
      try {
        setPlaceBidErr('');
        const resp = await placeBidMutation({
          variables: {
            args: {
              deal_id: deal.id,
              price: bidPrice,
            },
          },
        });

        enqueueSnackbar('Bid placed successfully', {
          content: (
            <Alert
              severity="success"
              color="info"
              elevation={0}
              square={true}
              variant="filled"
            >
              <Typography variant="body2">
                Your bid for <b>{IdPrefixFormat(deal.company_id)}</b> is
                confirmed at <b>{currencyFormat(bidPrice)}</b>
              </Typography>
            </Alert>
          ),
        });

        refreshGrid();
        handleClose();
      } catch (error) {
        if (error instanceof ApolloError) {
          const errorCode = error.graphQLErrors[0].extensions.code;
          const msg =
            PlaceBidErrorMessages[errorCode] || 'Something went wrong';
          setPlaceBidErr(msg);
        } else {
          setPlaceBidErr('something went wrong');
        }
      }
    }
  };

  useEffect(() => {
    setIrr(((1 - bidPrice) * 200).toFixed(2));
  }, [bidPrice]);

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      aria-labelledby="all-bids-title"
      maxWidth={'xs'}
    >
      <DialogTitle id="all-bids-title">
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={0}
        >
          <Grid item>
            <BidPriceIcon></BidPriceIcon>
          </Grid>
          <Grid item>
            <IconButton onClick={handleClose}>
              <CloseOutlinedIcon />
            </IconButton>
          </Grid>
        </Grid>

        <Typography variant="h3" component={'div'}>
          Confirm Bid Placement
        </Typography>
        <Typography variant="body2" className="text-color-3">
          By the end of the auction period for this company, if you’re the
          highest bidder, you’ll be automatically selected.
        </Typography>
      </DialogTitle>
      <DialogContent>
        <Card
          sx={{
            backgroundColor: '#111927',
            borderRadius: '2px',
            backgroundImage: 'unset',
          }}
        >
          <CardContent>
            <Grid
              container
              justifyContent={'space-between'}
              sx={{ marginBottom: 3 }}
            >
              <Grid item>
                <Typography variant="body2" className="text-color-3">
                  Current highest bid amount -
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="h6" component={'div'} fontWeight={700}>
                  {currencyFormat(deal.live_bid)}
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ marginBottom: 1.5 }} />
            <Grid container sx={{ marginBottom: 1 }} spacing={2}>
              <Grid
                container
                item
                xs={12}
                justifyContent={'space-between'}
                alignItems="center"
              >
                <Grid item display={'flex'}>
                  <Typography
                    mr={3}
                    variant="body2"
                    className="text-color-3"
                    fontWeight={500}
                  >
                    Your Bid:
                  </Typography>
                  <Typography
                    variant="body2"
                    className="text-color-3"
                    fontWeight={700}
                  >
                    {IdPrefixFormat(deal.company_id)}
                  </Typography>
                </Grid>
                <Grid item xs={'auto'}>
                  <Box>
                    <TextField
                      type={'number'}
                      value={bidPrice}
                      onChange={(e) => setBidPrice(parseFloat(e.target.value))}
                      inputProps={{
                        min: minBidPrice,
                        max: '1',
                        step: '0.0005',
                        size: '8',
                      }}
                    ></TextField>
                  </Box>
                </Grid>
              </Grid>
              <Grid
                container
                item
                xs={12}
                justifyContent={'space-between'}
                alignItems="center"
              >
                <Grid item display={'flex'}>
                  <Typography
                    variant="body2"
                    className="text-color-3"
                    fontWeight={500}
                  >
                    Estimated IRR:
                  </Typography>
                </Grid>
                <Grid item xs={'auto'}>
                  <Typography variant="h6" fontWeight={700}>
                    {irr}%
                  </Typography>
                </Grid>
              </Grid>
              {placeBidErr && (
                <Grid item xs={12} display={'flex'}>
                  <InfoOutlined
                    className="text-error"
                    sx={{ marginRight: 1 }}
                  />
                  <Typography
                    variant="caption"
                    className="text-error"
                    fontWeight={500}
                  >
                    {placeBidErr}
                  </Typography>
                </Grid>
              )}
            </Grid>

            <Typography variant="h6" component={'div'}>
              <Link to={`/deal/${deal.id}/company/${deal.company_id}`}>
                VIEW COMPANY OVERVIEW
              </Link>
            </Typography>
          </CardContent>
        </Card>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} size="large" variant="outlined">
          Cancel
        </Button>

        <LoadingButton
          variant="primary"
          loading={placeBidMutationLoading}
          size="large"
          fullWidth
          onClick={placeBidEvent}
          loadingPosition={'end'}
          endIcon={<span />}
          sx={{ width: '40%' }}
        >
          Confirm
        </LoadingButton>
      </DialogActions>
    </Dialog>
  );
};

export default PlaceBidDialog;
