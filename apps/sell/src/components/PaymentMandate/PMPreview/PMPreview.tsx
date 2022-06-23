import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CircularProgress from '@mui/material/CircularProgress';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import info from '../../../assets/images/info.png';

import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import bridgeupLogo from '../../../assets/images/bridgeupLogo.svg';
import PdfViewer from '../../../components/pdf-viewer';

import './PMPreview.scss';

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

interface PMPreviewProps {
  mandateReviewData: any;
  apiLoading: boolean;
  openPdf: boolean;
  pdfUrl: string;
  fileName: string;
  handleMandatePreview(confirm: boolean): void;
}

const PMPreview: React.FC<PMPreviewProps> = ({
  mandateReviewData,
  apiLoading,
  openPdf,
  pdfUrl,
  fileName,
  handleMandatePreview,
}) => {
  return (
    <div>
      <Dialog
        fullScreen
        open={mandateReviewData || openPdf ? true : false}
        onClose={() => null}
        TransitionComponent={Transition}
      >
        <div
          style={{
            backgroundColor: 'black',
            minHeight: '100vh',
            height: 'auto',
            width: '100vw',
          }}
        >
          <div className="px-12" style={{ backgroundColor: '#0B111D' }}>
            <div className="px-4 py-4">
              <Link to="/dashboard">
                <img src={bridgeupLogo} alt="logo" />
              </Link>
            </div>
          </div>
          <div className=" py-4 px-12" style={{ backgroundColor: '#161B25' }}>
            <div className="flex justify-between items-center px-4">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={() => handleMandatePreview(false)}
              >
                <ArrowBackIosNewIcon className="text-color w-4 h-4 mr-2" />
                Back
              </div>
              <div className="text-18 capitalize">{fileName}</div>
              {!openPdf && (
                <div
                  className="flex justify-between items-center text-14 text-bold color-secondary mr-2 cursor-pointer"
                  onClick={() => handleMandatePreview(true)}
                >
                  {apiLoading && (
                    <CircularProgress size="1rem" className="mr-2" />
                  )}
                  CONFIRM
                </div>
              )}
            </div>
          </div>
          <div className="bg-black py-4">
            {mandateReviewData && (
              <div
                className="flex justify-center items-center w-full px-6 py-4 contracts-under-review-text m-auto mb-10"
                style={{ maxWidth: '50%' }}
              >
                <img
                  style={{
                    display: 'inline-block',
                    verticalAlign: 'middle',
                  }}
                  src={info}
                  alt="logo"
                  className="mr-4 w-6 h-6 cursor-pointer"
                />
                <div>
                  Kindly review the details in the uploaded Payment Mandate.
                  Please help avoid delays due to bank rejection by ensuring you
                  have signed the document matching your bank record and scanned
                  the image clearly.
                </div>
              </div>
            )}

            {mandateReviewData || pdfUrl ? (
              <div style={{ width: '100vw' }} className="flex justify-center">
                <img
                  src={pdfUrl ? pdfUrl : mandateReviewData}
                  style={{ maxWidth: '900px' }}
                />
              </div>
            ) : (
              <div className="flex justify-center">
                <CircularProgress size="2rem" className="mt-4" />
              </div>
            )}
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default PMPreview;
