import { useEffect, useRef, useState } from 'react';
import {
  Button,
  Grid,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
} from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';

import question from '../../../assets/images/question.png';
import success from '../../../assets/images/success.png';
import questionMark from '../../../assets/images/payment-mandate/questionIcon.svg';

import CustomButton from '../../CustomButton/CustomButton';
interface SCConfirmationDialogProps {
  isDeletePopup: boolean;
  isConfirmationPopupOpen: boolean;
  isExceeded?: boolean;
  initiateTradeResponseLoading: boolean;
  setIsConfirmationPopupOpen: Function;
  setClearAll: Function;
  handleClearSelection(): void;
}
export const SCConfirmationDialog: React.FC<SCConfirmationDialogProps> = ({
  isDeletePopup,
  isExceeded,
  isConfirmationPopupOpen,
  initiateTradeResponseLoading,
  setIsConfirmationPopupOpen,
  setClearAll,
  handleClearSelection,
}) => {
  return (
    <Dialog
      open={true}
      onClose={() => setIsConfirmationPopupOpen(false)}
      aria-labelledby="responsive-dialog-title"
      maxWidth={'sm'}
      className="backdrop-filter backdrop-blur"
      PaperProps={{
        className: 'bg-color-secondary',
      }}
    >
      <DialogTitle className="pt-8 pr-6 pl-6 pb-0">
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          spacing={3}
        >
          <Grid className="flex" item sm={6} xs={12}>
            {isExceeded ? (
              <img src={questionMark} alt="logo" />
            ) : isDeletePopup ? (
              <img src={question} alt="logo" />
            ) : (
              <img src={success} alt="logo" />
            )}
          </Grid>
          <Grid item sm={6} xs={12}>
            <CloseOutlinedIcon
              onClick={() => setIsConfirmationPopupOpen(false)}
              style={{ float: 'right', cursor: 'pointer' }}
            ></CloseOutlinedIcon>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent className="p-0 mt-6 mr-6 ml-6 mb-8">
        <div className="text-18 text-bold">
          {isExceeded
            ? 'Payout cannot be more than Remaining Trade Limit'
            : isDeletePopup
            ? 'Are you sure you want to clear the selected contracts?'
            : 'We have received your contracts selection'}
        </div>
        <div className="mt-4 text-14 text-regular text-color-3">
          {isExceeded
            ? 'The value of your selected contracts is more than the remaining trade limit. You may move forward to access capital as per the remaining trade limit or go back to modify your selection. '
            : isDeletePopup
            ? 'You will lose your existing selections and have to select contracts again.'
            : 'If everything looks fine, we’ll reach out to you with the payment mandate and asset purchase agreement'}
        </div>
        <div className={`btn-holders mt-4 flex justify-end`}>
          {isExceeded ? (
            <>
              <CustomButton
                onClick={() => setIsConfirmationPopupOpen(false)}
                fullWidth={true}
                buttonClassName={'secondary-button'}
                variant="outlined"
              >
                BACK
              </CustomButton>
              <CustomButton
                onClick={() => {
                  handleClearSelection();
                  setClearAll(true);
                  setIsConfirmationPopupOpen(false);
                }}
                fullWidth={true}
                style={{ marginLeft: '10px' }}
                buttonClassName={'primary-button'}
                disabled={initiateTradeResponseLoading}
                variant="contained"
              >
                Place Trade
              </CustomButton>
            </>
          ) : isDeletePopup ? (
            <>
              <CustomButton
                onClick={() => setIsConfirmationPopupOpen(false)}
                fullWidth={true}
                buttonClassName={'secondary-button'}
                variant="outlined"
                style={{ maxWidth: '150px' }}
              >
                CANCEL
              </CustomButton>
              <CustomButton
                onClick={() => {
                  handleClearSelection();
                  setClearAll(true);
                  setIsConfirmationPopupOpen(false);
                }}
                fullWidth={true}
                style={{ maxWidth: '150px', marginLeft: '10px' }}
                buttonClassName={'primary-button'}
                disabled={initiateTradeResponseLoading}
                variant="contained"
              >
                CONFIRM
              </CustomButton>
            </>
          ) : (
            <CustomButton
              onClick={() => setIsConfirmationPopupOpen(false)}
              fullWidth={true}
              style={{ maxWidth: '250px' }}
              buttonClassName={'primary-button'}
              variant="contained"
            >
              VIEW SELECTED TRADES
            </CustomButton>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
