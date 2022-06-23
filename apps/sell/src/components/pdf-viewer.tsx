import { useRef, useState } from 'react';
import { Button, ButtonGroup, Grid, Typography } from '@mui/material';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import { Box } from '@mui/system';
interface Props {
  file: string;
}

export default function PdfViewer(props: Props) {
  const [numPages, setNumPages] = useState(0);
  const [pageNumber, setPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const documentWrapperRef = useRef<HTMLDivElement>(null);
  function onDocumentLoadSuccess(type: any) {
    setNumPages(type.numPages);
    setPageNumber(1);
    setIsLoading(false);
  }

  function changePage(offset: number) {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  }

  function previousPage() {
    changePage(-1);
  }

  function nextPage() {
    changePage(1);
  }

  return (
    <Box justifyContent={'center'} display={'flex'}>
      <Grid
        container
        alignItems="center"
        rowSpacing={1}
        flexDirection={'row'}
        justifyContent={'flex-start'}
        style={{ maxWidth: '900px' }}
      >
        <Grid
          container
          item
          xs={12}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item>
            {!isLoading && (
              <Typography variant="body2">
                Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
              </Typography>
            )}
          </Grid>
          <Grid item>
            <ButtonGroup disableElevation variant="text" color="inherit">
              <Button disabled={pageNumber <= 1} onClick={previousPage}>
                Prev
              </Button>
              <Button disabled={pageNumber >= numPages} onClick={nextPage}>
                Next
              </Button>
            </ButtonGroup>
          </Grid>
        </Grid>
        <Grid item xs={12} ref={documentWrapperRef} className="min-h-screen">
          <Document
            file={props.file}
            onLoadSuccess={onDocumentLoadSuccess}
            loading="Loading..."
          >
            <Page
              pageNumber={pageNumber}
              width={
                documentWrapperRef && documentWrapperRef.current
                  ? documentWrapperRef.current.getBoundingClientRect().width
                  : 0
              }
            />
          </Document>
        </Grid>
      </Grid>
    </Box>
  );
}
