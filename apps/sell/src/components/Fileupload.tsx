import { useEffect, useRef, useState } from 'react';
import {
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
} from '@mui/material';
import { useDropzone } from 'react-dropzone';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import uploadWhite from '../assets/images/upload-white.svg';
import bin from '../assets/images/bin.svg';
import document from '../assets/images/document.png';
import arr from '../assets/images/arr.svg';
import downloadBlue from '../assets/images/download-blue.svg';
import CustomButton from '../components/CustomButton/CustomButton';

interface Props {
  open: boolean;
  isPM?: boolean; // is this file upload from payment mandate(PM) component?
  handleClose: any;
  setFile: Function;
  setIsNewFile?: Function;
  onFileupload(file?: any): void;
  file: any;
  description: string;
  format: string;
  accepts: string; // .csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel
  isLoading: boolean;
  sampleUrl: string;
}
export const Fileupload = (props: Props) => {
  const inputFile = useRef<HTMLInputElement>(null);

  const {
    open,
    isPM,
    handleClose,
    onFileupload,
    file,
    description,
    format,
    accepts,
    setFile,
    setIsNewFile,
    isLoading,
    sampleUrl,
  } = props;

  const [localFile, setLocalFile] = useState<any>(null);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: accepts,
    maxFiles: 1,
    multiple: false,
  });
  useEffect(() => {
    setLocalFile(file);
  }, [file]);

  const deleteFile = () => setLocalFile(null);

  const onSubmit = () => {
    setFile(localFile);
    if (setIsNewFile) setIsNewFile(true);
    if (isPM) onFileupload(localFile);
  };

  const replaceFile = (e: any) => {
    e.preventDefault();
    setLocalFile(null);
    inputFile.current && inputFile.current.click();
  };

  useEffect(() => {
    if (acceptedFiles && acceptedFiles.length) {
      setLocalFile(acceptedFiles[0]);
    }
  }, [acceptedFiles]);

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
      maxWidth={'xs'}
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
            <div className="text-24 text-bold">Upload File</div>
          </Grid>

          <Grid item sm={6} xs={12}>
            <CloseOutlinedIcon
              onClick={() => {
                if (!isLoading) {
                  handleClose();
                }
              }}
              style={{ float: 'right', cursor: 'pointer' }}
            ></CloseOutlinedIcon>
          </Grid>
        </Grid>
      </DialogTitle>
      <DialogContent className="p-0 mr-6 ml-6 mb-8">
        <div className="mt-1 text-14 text-regular">{description}</div>
        {!isPM && (
          <div className="mt-1">
            <a className="text-14 text-bold" href={sampleUrl}>
              <img
                style={{ display: 'inline-block', verticalAlign: 'middle' }}
                src={downloadBlue}
                alt="logo"
              />{' '}
              Download the BridgeUp template
            </a>
          </div>
        )}

        <div className="mt-5">
          <Grid
            container
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            spacing={0}
          >
            <Grid item sm={12} xs={12}>
              {!localFile && (
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <div className="upload-file justify-center">
                    <div>
                      <img src={uploadWhite} alt="logo" />
                    </div>
                    <div>
                      <p>Click or drag here to upload</p>
                      <p>{format}</p>
                    </div>
                  </div>
                </div>
              )}
              {localFile && (
                <>
                  <div className="upload-file sm">
                    <p className="bg-f w-full justify-start items-center">
                      <img src={document} alt="logo" />
                      <span>{localFile.name}</span>
                      {!isLoading && (
                        <img
                          onClick={(e) => deleteFile()}
                          src={bin}
                          alt="logo"
                        />
                      )}
                    </p>
                  </div>
                  <div className="mt-2">
                    <a
                      className="text-bold text-14 uppercase"
                      href="#"
                      onClick={(e) => replaceFile(e)}
                    >
                      <img
                        style={{
                          display: 'inline-block',
                          verticalAlign: 'middle',
                        }}
                        src={arr}
                        alt="logo"
                      />{' '}
                      Replace File
                    </a>
                  </div>
                </>
              )}
            </Grid>
          </Grid>
        </div>
        <div className="btn-holders mt-10">
          <CustomButton
            onClick={onSubmit}
            fullWidth={true}
            disabled={isLoading || !localFile}
            buttonClassName={'primary-button'}
            variant="contained"
          >
            UPLOAD FILE&nbsp;&nbsp;&nbsp;&nbsp;
            {isLoading && <CircularProgress size={20} color="primary" />}
          </CustomButton>
        </div>
      </DialogContent>
    </Dialog>
  );
};
