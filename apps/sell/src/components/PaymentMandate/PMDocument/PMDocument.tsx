import React, { useRef } from 'react';
import { Button, CircularProgress } from '@mui/material';
import svgEye from '../../../assets/images/payment-mandate/eye.svg';
import svgTimer from '../../../assets/images/payment-mandate/timer.svg';
import svgClock from '../../../assets/images/payment-mandate/clock.svg';
import svgTick from '../../../assets/images/payment-mandate/tick-mark.svg';

interface PMDocumentProps {
  isENach: boolean;
  openPdf: boolean;
  isVerifying: boolean;
  tradeStatus: string;
  isDownloadUrlLoading: boolean;
  handleDownload(): void;
  onFileupload(file: any): void;
  handlePreview(): void;
  setShowInstructions(value: boolean): void;
  setShowFileUpload(value: boolean): void;
}

const PMDocument: React.FC<PMDocumentProps> = ({
  isENach,
  openPdf,
  isVerifying,
  tradeStatus,
  isDownloadUrlLoading,
  handleDownload,
  handlePreview,
  onFileupload,
  setShowInstructions,
  setShowFileUpload,
}) => {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const tradeStatusArray = [
    'MANDATE_IN_REVIEW',
    'MANDATE_SIGNED',
    'MANDATE_SUCCESS',
    'APA_GENERATED',
    'APA_IN_REVIEW',
    'APA_COMPANY_SIGNED',
    'APA_INVESTOR_SIGNED',
    'PAYOUT_DISBURSED',
  ];

  return (
    <div className="flex flex-col px-6 pt-4 pb-8 mt-2 mb-4 payment-mandate__body">
      <div className="flex justify-between items-center my-2">
        <div>
          <div className="flex items-center text-18 text-bold">
            Payment Mandate Document
            {isVerifying && <img src={svgClock} alt="logo" className="ml-2" />}
            {tradeStatusArray
              .slice(2, tradeStatusArray.length)
              .includes(tradeStatus) && (
              <img src={svgTick} alt="logo" className="ml-3" />
            )}
          </div>
          {!isVerifying &&
            !tradeStatusArray.includes(tradeStatus) &&
            !isENach && (
              <div className="text-14 mt-2 text-color-3">
                You can download the payment mandate and upload once the process
                is completed.
              </div>
            )}
        </div>
        <div className="flex cursor-pointer">
          <div className="flex items-center text-14 text-bold spacing-1 color-secondary">
            <div onClick={handlePreview}>
              {tradeStatusArray.includes(tradeStatus) && !isENach && (
                <div className="flex justify-center items-center">
                  <img src={svgEye} alt="logo" className="mr-2" /> PREVIEW
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {isVerifying ? (
        <div className="flex items-start pt-6 text-color-3">
          <img src={svgTimer} alt="logo" className="mr-4" />
          Payment Mandate registration by your bank may take upto &nbsp;
          {!isENach ? '5' : '2'} days. Once registered, you'll receive an email
          confirmation from BridgeUp and link to sign the Asset Purchase
          Agreement
        </div>
      ) : (
        ![
          'MANDATE_SIGNED',
          'MANDATE_SUCCESS',
          'APA_COMPANY_SIGNED',
          'APA_INVESTOR_SIGNED',
          'APA_GENERATED',
          'PAYOUT_DISBURSED',
        ].includes(tradeStatus) &&
        !isENach && (
          <>
            <div className="text-14 px-4 py-2 pm-doc-details">
              <div className="py-1">
                1. Download the payment mandate -
                <span
                  className="text-14 text-bold color-secondary cursor-pointer"
                  onClick={handleDownload}
                >
                  Download
                  {isDownloadUrlLoading && (
                    <CircularProgress
                      size={20}
                      color="primary"
                      className="ml-2"
                    />
                  )}
                </span>
              </div>
              <div className="py-1">
                2. Sign it and scan the copy clearly -
                <span
                  className="text-14 text-bold color-secondary cursor-pointer"
                  onClick={() => setShowInstructions(true)}
                >
                  View Instructions
                </span>
              </div>
              <div className="py-1">
                3. Upload the final copy and let us work our magic.
              </div>
            </div>
            <div className="flex justify-start">
              <div className="btn-holders mt-10">
                <input
                  onChange={(e: any) => {
                    onFileupload(e.target.files[0]);
                    e.target.value = null;
                  }}
                  ref={inputFileRef}
                  accept="image/*"
                  id="upload-button-file"
                  type="file"
                  name=""
                  style={{ display: 'none' }}
                />
                <Button
                  className={`button primary-button pm-usc-button`}
                  onClick={(e) => {
                    e.preventDefault();
                    inputFileRef.current && inputFileRef.current.click();
                  }}
                  classes={{
                    endIcon: 'endIcon',
                  }}
                  // disabled={disabled}
                  color="primary"
                  fullWidth={true}
                  variant="contained"
                  disableElevation
                >
                  Upload Signed copy
                  {/* {isLoading && (
              <CircularProgress size={20} color="primary" />
            )} */}
                </Button>
              </div>
            </div>
          </>
        )
      )}
    </div>
  );
};

export default PMDocument;
