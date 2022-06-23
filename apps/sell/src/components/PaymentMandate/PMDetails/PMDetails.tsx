import React from 'react';
import svgTick from '../../../assets/images/payment-mandate/tick-mark.svg';
import svgEdit from '../../../assets/images/payment-mandate/edit.svg';

interface PMDetailsProps {
  isVerifying: boolean;
  mandateAcc: any;
  tradeStatus: string;
  setIsEditBankDetails(value: boolean): void;
}

const PMDetails: React.FC<PMDetailsProps> = ({
  isVerifying,
  mandateAcc,
  tradeStatus,
  setIsEditBankDetails,
}) => {
  console.log('mandateAcc', mandateAcc);
  return (
    <div className="flex flex-col px-6 py-4 mt-2 mb-4 payment-mandate__body">
      <div className="flex justify-between items-center my-2">
        <div>
          <div className="flex items-center text-18 text-bold">
            Mandate Details
            <img src={svgTick} alt="logo" className="ml-3" />
          </div>
          <div className="text-14 mt-2 text-color-3">
            Bank Account - {mandateAcc?.ref_bank?.name} XXXX
            {String(mandateAcc?.account_no).slice(
              -4,
              mandateAcc?.account_no.length
            )}
            |{' '}
            {mandateAcc.multi_signatory
              ? 'Joint-Signatory'
              : 'Single-Signatory'}
          </div>
        </div>
        {!isVerifying &&
          ![
            'MANDATE_IN_REVIEW',
            'MANDATE_SIGNED',
            'MANDATE_SUCCESS',
            'APA_IN_REVIEW',
            'APA_COMPANY_SIGNED',
            'APA_INVESTOR_SIGNED',
            'APA_GENERATED',
            'PAYOUT_DISBURSED',
          ].includes(tradeStatus) && (
            <div
              className="flex cursor-pointer"
              onClick={() => setIsEditBankDetails(true)}
            >
              <div className="flex items-center text-14 text-bold spacing-1 color-secondary">
                <img src={svgEdit} alt="logo" className="mr-2" />
                EDIT
              </div>
            </div>
          )}
      </div>
    </div>
  );
};

export default PMDetails;
