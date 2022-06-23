import { useEffect, useRef, useState } from 'react';
import {
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  CircularProgress,
} from '@mui/material';
import './MultipleFileUpload.scss';
import { useDropzone } from 'react-dropzone';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import uploadWhite from '../assets/images/upload-white.svg';
import bin from '../assets/images/bin.svg';
import document from '../assets/images/document.png';
import plusBlue from '../assets/svg/plusBlue-icon.svg';
import downloadBlue from '../assets/images/download-blue.svg';
import CustomButton from '../components/CustomButton/CustomButton';
import '../components/MultipleFileUpload.scss';

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
export const MultipleFileupload = (props: Props) => {
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
  const [newLocalFile, setNewLocalFile] = useState<any>([]);
  const [errorFile, setErrorFile] = useState<any>(false);
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: accepts,
    multiple: true,
  });
  useEffect(() => {
    setLocalFile(file);
    if (file) {
      setNewLocalFile([file]);
    }
  }, [file]);

  const deleteFile = (files: any, i: any) => {
    const filterData = newLocalFile.filter(
      (item: any, index: any) => index !== i
    );
    setNewLocalFile(filterData);
  };
  const onSubmit = () => {
    setFile(newLocalFile);
    if (setIsNewFile) setIsNewFile(true);
    if (isPM) onFileupload(newLocalFile);
  };

  useEffect(() => {
    if (acceptedFiles && acceptedFiles.length) {
      setLocalFile(acceptedFiles[0]);
      if (newLocalFile.length > 0) {
        acceptedFiles.map((item: any) => {
          newLocalFile.push(item);
        });
      } else {
        setNewLocalFile(acceptedFiles);
      }
    }
  }, [acceptedFiles]);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
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
              {newLocalFile.length === 0 && (
                <div {...getRootProps()}>
                  <input {...getInputProps()} multiple />
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
              {localFile && newLocalFile.length > 0 && (
                <>
                  <div
                    className="scroll-bar"
                    style={{
                      backgroundColor: '#111927',
                      padding: '10px',
                      overflowY: newLocalFile?.length > 3 ? 'scroll' : 'hidden',
                      height: newLocalFile?.length > 3 ? '43vh' : 'auto',
                    }}
                  >
                    {newLocalFile.map((files: any, index: any) => (
                      <div>
                        <div
                          key={index}
                          style={{
                            marginTop: '10px',
                            border: errorFile
                              ? '1px dashed red'
                              : '1px dashed #2d477b',
                          }}
                          className="upload-file sm"
                        >
                          <p className="bg-f w-full justify-start items-center">
                            <img src={document} alt="logo" />
                            <span>{files.name}</span>
                            {!isLoading && (
                              <img
                                onClick={(files) => deleteFile(files, index)}
                                src={bin}
                                alt="logo"
                              />
                            )}
                          </p>
                        </div>
                        {errorFile && (
                          <span style={{ color: 'red' }}>
                            File is not correct
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 text-bold text-14 uppercase">
                    <div {...getRootProps()}>
                      <input {...getInputProps()} multiple />
                      <a className="text-14 text-bold">
                        <img
                          style={{
                            display: 'inline-block',
                            verticalAlign: 'middle',
                          }}
                          src={plusBlue}
                          alt="logo"
                        />{' '}
                        ADD another file
                      </a>
                    </div>
                    {/* <a
                      className="text-bold text-14 uppercase"
                      href="#"
                      onClick={(e) => AddAnotherFiles(e)}
                    >
                      <img
                        style={{
                          display: 'inline-block',
                          verticalAlign: 'middle',
                        }}
                        src={arr}
                        alt="logo"
                      />{' '}
                      ADD another file
                    </a> */}
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
