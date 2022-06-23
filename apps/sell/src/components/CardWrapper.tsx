import { Grid } from '@mui/material'
import { CardDataType } from '../types/AccountSetup'

import stripe from '../assets/images/stripe.png'
import chargebee from '../assets/images/chargebee.png'
import raz from '../assets/images/raz.png'
import upload from '../assets/images/upload.svg'
import spin from '../assets/images/spin.svg'
import success from '../assets/images/success-link.svg'
import error from '../assets/images/error-link.svg'
import quickBooks from '../assets/images/quick-books.svg'
import bin from '../assets/images/bin.svg'
import zoho from '../assets/images/zoho.svg'

interface Props {
  onClick: Function
  data: any[] | undefined
}

export const CardWrapper = (props: Props) => {
  const { onClick, data } = props
  const getLogo = (type: string) => {
    switch (type) {
      case 'STRIPE':
        return stripe
      case 'CHARGEBEE':
        return chargebee
      case 'RAZORPAY':
        return raz
      case 'CSV_UPLOAD':
        return upload
      case 'QUICKBOOKS':
        return quickBooks
      case 'ZOHOBOOKS':
        return zoho
      case 'EXCEL_UPLOAD':
        return upload
      default:
        return
    }
  }

  const getStatus = (sourceType: string, logo_url?: string) => {
    if (data) {
      let source = data.find((item) => item.source === sourceType)
      if (source.company_integrations.length) {
        const sourceData = source.company_integrations[0]
        switch (sourceData.status) {
          case 'UPLOADED':
          case 'VALIDATING':
          case 'VALIDATION_COMPLETE':
          case 'APPROVED':
          case 'SYNCING':
          case 'SYNC_COMPLETED':
          case 'TRANSFORMING':
          case 'ANALYZING':
          case 'ANALYSES_COMPLETE':
          case 'REQUEST_SUBMITTED_SP':
          case 'RESPONSE_AVAILABLE_SP':
            if (
              sourceData.source == 'EXCEL_UPLOAD' ||
              sourceData.source == 'CSV_UPLOAD'
            ) {
              return (
                <>
                  <div className="success-hold">
                    <p>
                      <img src={success} alt="logo" />
                      <span>Successfully uploaded</span>
                    </p>
                  </div>
                  <img
                    className="brand-logo opacity-20"
                    src={logo_url}
                    alt={source}
                  />
                </>
              )
            } else {
              return (
                <>
                  <div className="success-hold">
                    <p>
                      <img src={success} alt="logo" />
                      <span>Successfully linked</span>
                    </p>
                  </div>
                  <img
                    className="brand-logo opacity-20"
                    src={logo_url}
                    alt={source}
                  />
                </>
              )
            }
            break
          case 'FAILED':
          case 'SYNC_FAILED':
          case 'TRANSFORMATION_FAILED':
            if (
              sourceData.source == 'EXCEL_UPLOAD' ||
              sourceData.source == 'CSV_UPLOAD'
            ) {
              return (
                <>
                  <div className="error-link">
                    <p>
                      <img src={error} alt="logo" />
                      <span>Retry uploading.</span>
                    </p>
                  </div>
                  <img className="brand-logo" src={logo_url} alt={source} />
                </>
              )
            } else {
              return (
                <>
                  <div className="error-link">
                    <p>
                      <img src={error} alt="logo" />
                      <span>Retry linking.</span>
                    </p>
                  </div>
                  <img className="brand-logo" src={logo_url} alt={source} />
                </>
              )
            }
            break
          case 'REQUEST_SUBMITTED_PARTNER':
            return (
              <>
                <div className="error-link">
                  <p>
                    <img src={error} alt="logo" />
                    <span>Retry linking.</span>
                  </p>
                </div>
                <img className="brand-logo" src={logo_url} alt={source} />
              </>
            )
            break
          case 'RESPONSE_AVAILABLE_PARTNER':
            return (
              <>
                <div className="error-link">
                  <p>
                    <img src={error} alt="logo" />
                    <span>Retry linking.</span>
                  </p>
                </div>
                <img className="brand-logo" src={logo_url} alt={source} />
              </>
            )
            break
          // IN_QUEUE and PENDING_APPROVAL both statuses to be shown as success
          case 'IN_QUEUE':
          case 'PENDING_APPROVAL':
          case 'COMPLETED':
          case 'TRANSFORMATION_COMPLETE':
            if (
              sourceData.source == 'EXCEL_UPLOAD' ||
              sourceData.source == 'CSV_UPLOAD'
            ) {
              return (
                <>
                  <div className="success-hold">
                    <p>
                      <img src={success} alt="logo" />
                      <span>Successfully uploaded</span>
                    </p>
                  </div>
                  <img
                    className="brand-logo opacity-20"
                    src={logo_url}
                    alt={source}
                  />
                </>
              )
            } else {
              return (
                <>
                  <div className="success-hold">
                    <p>
                      <img src={success} alt="logo" />
                      <span>Successfully linked</span>
                    </p>
                  </div>
                  <img
                    className="brand-logo opacity-20"
                    src={logo_url}
                    alt={source}
                  />
                </>
              )
            }
            break
          default:
            break
        }
      }
      return null
    } else {
      return null
    }
  }

  return (
    <Grid
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="center"
      spacing={3}
    >
      {data &&
        data.map((item: CardDataType, index: number) => (
          <Grid item sm={4} xs={12} key={index}>
            {/* selected-upload -> to be added in case of file upload */}
            <div className="each-box" onClick={() => onClick(item)}>
              {getStatus(item.source, item?.logo_url) ? (
                getStatus(item.source, item?.logo_url)
              ) : (
                <img
                  className="brand-logo"
                  src={item?.logo_url}
                  alt={item.source}
                />
              )}
            </div>
          </Grid>
        ))}
    </Grid>
  )
}
