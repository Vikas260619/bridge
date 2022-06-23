import { currencyFormat, dateFormat } from '@bridgeup/common/formatter';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import { ReactComponent as BidPriceIcon } from './../../../assets/icons/bid-price-icon.svg';
import Bid from '@bridgeup/data-access/models/bid';

export interface AllBidsDialogProps {
  open: boolean;
  bids: Bid[];
  onClose: () => void;
}

const AllBidsDialog = (props: AllBidsDialogProps) => {
  const { onClose, bids, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog
      onClose={handleClose}
      open={open}
      aria-labelledby="all-bids-title"
      fullWidth
      maxWidth={'sm'}
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
          All bids
        </Typography>
        <Typography variant="body2" className="text-color-3">
          All the bids that were posted on the platform.
        </Typography>
      </DialogTitle>
      <DialogContent>
        <TableContainer sx={{ maxHeight: 300 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell key={'id'} style={{ minWidth: 130 }}>
                  Bid ID
                </TableCell>
                <TableCell key={'price'} style={{ minWidth: 170 }}>
                  Price
                </TableCell>
                <TableCell key={'date'} style={{ minWidth: 100 }}>
                  Date
                </TableCell>
                <TableCell key={'time'} style={{ minWidth: 100 }}>
                  Time
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {bids.map((row) => {
                return (
                  <TableRow hover tabIndex={-1} key={row.id}>
                    <TableCell key={'id'}>{row.id}</TableCell>
                    <TableCell key={'price'}>
                      <div>
                        <Typography
                          variant="body2"
                          fontWeight={700}
                          component={'span'}
                        >
                          {currencyFormat(row.price)}
                        </Typography>
                        {row.your_bid && (
                          <Typography
                            variant="caption"
                            className="color-status-success"
                            ml={1}
                          >
                            Your Bid
                          </Typography>
                        )}
                      </div>
                    </TableCell>
                    <TableCell key={'date'}>
                      {dateFormat(row.created_at as Date, 'DD MMM')}
                    </TableCell>
                    <TableCell key={'time'}>
                      {dateFormat(row.created_at as Date, 'hh:mm A')}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </DialogContent>
    </Dialog>
  );
};

export default AllBidsDialog;
