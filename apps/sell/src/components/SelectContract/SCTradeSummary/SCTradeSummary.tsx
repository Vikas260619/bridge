import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CustomButton from '../../CustomButton/CustomButton';
import { Typography, Button, CircularProgress } from '@mui/material';
import { Skeleton } from '@mui/material';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import info from '../../../assets/images/info.png';
import { monthNames } from '../../../utils/constants';

import './SCTradeSummary.scss';

import { SCConfirmationDialog } from '../SCConfirmationDialog/SCConfirmationDialog';
import { currencyFormat } from '@bridgeup/common/formatter';

const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} arrow classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.arrow}`]: {
    color: '#2B3951',
  },
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#2B3951',
    padding: '10px',
    fontSize: '12px',
    fontFamily: 'Raleway',
  },
}));

interface SCTradeSummaryProps {
  isPaymentMandate?: boolean;
  totalOfferAmt: number;
  totalNoOfSelectedContracts: number;
  placeTradeBtnDisable: boolean;
  clearSelectionBtnDisable: boolean;
  availableARR: string;
  initiateTradeResponseLoading: boolean;
  isTradingFinished: boolean;
  setClearAll: Function;
  dealClosure: string;
  bidPrice: number;
  monthlyAmount?: number;
  handleInitiateTrade(): void;
  handleClearSelection(): void;
}
const SCTradeSummary: React.FC<SCTradeSummaryProps> = ({
  isPaymentMandate,
  totalOfferAmt,
  totalNoOfSelectedContracts,
  placeTradeBtnDisable,
  clearSelectionBtnDisable,
  availableARR,
  isTradingFinished,
  initiateTradeResponseLoading,
  setClearAll,
  dealClosure,
  bidPrice,
  monthlyAmount,
  handleInitiateTrade,
  handleClearSelection,
}) => {
  const location = useLocation();
  let IndianCurrencyLocale = Intl.NumberFormat('en-IN');
  const [isDeletePopup, setIsDeletePopup] = useState<boolean>(false);
  const [isConfirmationPopupOpen, setIsConfirmationPopupOpen] =
    useState<boolean>(false);
  const dealClosureTime = dealClosure && new Date(dealClosure);
  const [userOnPaymentMandatePage, setUserOnPaymentMandatePage] =
    useState(false);

  useEffect(() => {
    setUserOnPaymentMandatePage(location.pathname.includes('mandate-generate'));
  }, [location]);

  return !availableARR ? (
    <Skeleton
      className="mt-100"
      style={{ height: '500px' }}
      variant="rectangular"
    />
  ) : (
    <>
      <div
        className={`w-full h-full px-2 py-4 ${isPaymentMandate ? 'pm' : 'sc'}`}
      >
        <div className="w-full h-full flex flex-col justify-center">
          <div className="px-4 py-2">
            <h2 className="text-18 text-bold">Trade Summary</h2>
          </div>
          <div className="px-4">
            <div className="flex flex-col">
              <div className="flex justify-between py-2">
                <div className="text-14">Selected Contracts</div>
                <h2 className="text-14 text-bold">
                  {totalNoOfSelectedContracts}
                </h2>
              </div>

              <div className="flex justify-between py-2 pb-4">
                <div className="text-14">Offer Price</div>
                {bidPrice ? (
                  <h2 className="text-14 text-bold">
                    <span style={{ color: '#00FF91' }} className="text-12">
                      (Until {dealClosureTime && dealClosureTime.getDate()}{' '}
                      {dealClosureTime &&
                        monthNames[dealClosureTime.getMonth()]}
                      )
                    </span>
                    &nbsp; {currencyFormat(bidPrice)}
                  </h2>
                ) : (
                  <CircularProgress size={20} />
                )}
              </div>

              <div className="flex justify-between py-2 pb-4">
                <div className="text-14">Total Offer Amount</div>
                <h2 className="text-14 text-bold">
                  ₹
                  {totalOfferAmt > 0
                    ? IndianCurrencyLocale.format(totalOfferAmt)
                    : 0}
                </h2>
              </div>
              <div className="dotted-line"></div>

              <div className="flex justify-between py-2 pt-4">
                <div className="text-14">
                  Platform Fee{' '}
                  <BootstrapTooltip
                    title="Inclusive of Fees and Taxes"
                    placement="top"
                  >
                    <img
                      style={{
                        display: 'inline-block',
                        verticalAlign: 'middle',
                      }}
                      src={info}
                      alt="logo"
                      className="ml-1 cursor-pointer"
                    />
                  </BootstrapTooltip>
                </div>
                <h2 className="text-14 text-bold">
                  ₹
                  {totalOfferAmt > 0
                    ? IndianCurrencyLocale.format(0.02 * totalOfferAmt)
                    : 0}
                </h2>
              </div>
              <hr className="hr-straight" />
              <div className="flex justify-between py-2 pb-4">
                <h2 className="text-14 text-bold">
                  {isPaymentMandate ? 'Term Length' : 'Total Payout'}
                </h2>
                <h2 className="text-14 text-bold">
                  {isPaymentMandate
                    ? '12 months'
                    : `₹${
                        totalOfferAmt > 0
                          ? IndianCurrencyLocale.format(0.98 * totalOfferAmt)
                          : 0
                      }`}
                </h2>
              </div>
            </div>
          </div>
          {!isPaymentMandate && (
            <div className="px-4 py-2">
              <div className="btn-holders flex flex-col">
                <CustomButton
                  onClick={handleInitiateTrade}
                  fullWidth={true}
                  disabled={
                    placeTradeBtnDisable || initiateTradeResponseLoading
                  }
                  buttonClassName={
                    initiateTradeResponseLoading
                      ? 'primary-button'
                      : placeTradeBtnDisable
                      ? ''
                      : 'primary-button'
                  }
                  customClassName={
                    initiateTradeResponseLoading
                      ? 'place-trade-button'
                      : placeTradeBtnDisable
                      ? 'place-trade-button-disabled'
                      : 'place-trade-button'
                  }
                  variant="contained"
                >
                  <h2 className="text-14 text-bold mr-4">PLACE TRADE</h2>
                  {initiateTradeResponseLoading && (
                    <CircularProgress size={20} color="primary" />
                  )}
                </CustomButton>
                <h2
                  className={`text-14 text-bold pt-3  ${
                    !(
                      clearSelectionBtnDisable ||
                      isTradingFinished ||
                      initiateTradeResponseLoading
                    )
                      ? 'active-clear-btn'
                      : 'disabled-clear-btn'
                  }`}
                  onClick={() => {
                    if (
                      !clearSelectionBtnDisable &&
                      !isTradingFinished &&
                      !initiateTradeResponseLoading
                    ) {
                      setIsConfirmationPopupOpen(true);
                      setIsDeletePopup(true);
                    }
                  }}
                >
                  CLEAR SELECTION
                </h2>
              </div>
            </div>
          )}
        </div>

        {isConfirmationPopupOpen && (
          <SCConfirmationDialog
            isDeletePopup={isDeletePopup}
            isConfirmationPopupOpen={isConfirmationPopupOpen}
            initiateTradeResponseLoading={initiateTradeResponseLoading}
            setClearAll={setClearAll}
            setIsConfirmationPopupOpen={setIsConfirmationPopupOpen}
            handleClearSelection={handleClearSelection}
          />
        )}
      </div>

      {isPaymentMandate && (
        <div className="flex justify-center items-center pm">
          <div className="w-1/2 flex flex-col justify-center items-center py-4 mr-1 sc">
            <div className="text-14" style={{ color: '#A3AED0' }}>
              Total Payout
            </div>
            <div className="text-16 text-bold">
              ₹{IndianCurrencyLocale.format(0.98 * totalOfferAmt)}
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center py-4 ml-1 sc">
            <div className="text-14" style={{ color: '#A3AED0' }}>
              Monthly Amount
            </div>
            <div className="text-16 text-bold">
              {monthlyAmount ? (
                `₹${IndianCurrencyLocale.format(monthlyAmount)}`
              ) : (
                <CircularProgress size={20} color="primary" />
              )}
            </div>
          </div>
        </div>
      )}
      {userOnPaymentMandatePage && (
        <div className="flex justify-center items-start mt-4 py-4 trade-summary-dialog">
          <div>
            <img
              style={{
                display: 'inline-block',
                verticalAlign: 'middle',
              }}
              src={info}
              alt="logo"
              className="ml-1 px-3 cursor-pointer"
            />
          </div>
          <div className="px-3 font-medium trade-summary-dialog__desc">
            Your bank account will be debited with Monthly Amount every month.
            However, NACH Mandate displays a Maximum Amount to cover for any
            missed/delayed payments and any applicable penalty charges during
            the term of the facility.
          </div>
        </div>
      )}
    </>
  );
};

export default SCTradeSummary;
