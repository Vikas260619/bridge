export const ARR = [
  {
    key: '< ₹ 1.5 Cr',
    value: 1.5,
  },
  {
    key: '₹ 1.5 - 10 Cr',
    value: 10,
  },
  {
    key: '₹ 10 - 100 Cr',
    value: 100,
  },
  {
    key: '₹ 100 - 500 Cr',
    value: 500,
  },
  {
    key: '₹ 500 Cr+',
    value: 501,
  },
];

export const FAILED_STATUSES = {
  FAILED: 'FAILED',
  SYNC_FAILED: 'SYNC_FAILED',
  TRANSFORMATION_FAILED: 'TRANSFORMATION_FAILED',
  REQUEST_SUBMITTED_PARTNER: 'REQUEST_SUBMITTED_PARTNER',
  RESPONSE_AVAILABLE_PARTNER: 'RESPONSE_AVAILABLE_PARTNER',
};

export const SUCCESS_STATUSES = {
  PENDING_APPROVAL: 'PENDING_APPROVAL',
  TRANSFORMATION_COMPLETE: 'TRANSFORMATION_COMPLETE',
  COMPLETE: 'COMPLETE',
};

export const IN_QUEUE_STATUSES = [
  'IN_QUEUE',
  'VALIDATING',
  'VALIDATION_COMPLETE',
  'APPROVED',
  'SYNCING',
  'SYNC_COMPLETED',
  'TRANSFORMING',
  'ANALYSING',
  'ANALYSES_COMPLETE',
  'REQUEST_SUBMITTED_SP',
  'RESPONSE_AVAILABLE_SP',
];

export const TRADE_LIFE_CYCLE = [
  'INITIATED',
  'CONTRACT_SELECTED',
  'MANDATE_REGISTERED',
  'MANDATE_SIGNED',
  'MANDATE_FAILED',
  'MANDATE_SUCCESS',
  'APA_GENERATED',
  'APA_COMPANY_SIGNED',
  'APA_INVESTOR_SIGNED',
  'PAYOUT_DISBURSED',
];

export const TRADE_PAYMENT_MANDATE_NEXT = [
  'MANDATE_IN_REVIEW',
  'MANDATE_SIGNED',
  'MANDATE_SUCCESS',
  'APA_GENERATED',
  'APA_COMPANY_SIGNED',
  'APA_IN_REVIEW',
  'APA_INVESTOR_SIGNED',
  'PAYOUT_DISBURSED',
];

export const API_ERRORS: any = {
  LOGIN: {
    USERNAME_PASSWORD_INVALID:
      'You have entered an invalid username or password',
    USER_PENDING_VERIFICATION:
      'Your account is pending verification. Instructions to verify has been resent to your email ID',
    RESOURCE_NOT_FOUND: 'Invalid user name or password',
  },
  FORGOT_PASSWORD: {
    RESOURCE_NOT_FOUND:
      'If a matching account was found, the password reset instructions will be sent to the registered email address',
    USER_PENDING_VERIFICATION:
      'Your account is pending verification. Instructions to verify has been resent to your email ID',
  },
  SET_PASSWORD: {
    VERIFICATION_TOKEN_EXPIRED:
      'Time Out! Your verification code has expired. Please try again.',
    VERIFICATION_TOKEN_INVALID: 'Your Verification Code Is Invalid',
  },
  RESET_PASSWORD: {
    UNAUTHORIZED: 'Sorry, your request could not be processed.',
    RESOURCE_NOT_FOUND:
      'If a matching account was found, the password reset instructions will be sent to the registered email address',
  },
  VERIFY_EMAIL: {
    VERIFICATION_TOKEN_INVALID: 'Your verification code is invalid.',
    VERIFICATION_TOKEN_EXPIRED:
      'Time Out! Your verification code has expired. Please try again.',
    UNAUTHORIZED: 'Sorry, your request could not be processed.',
    RESOURCE_NOT_FOUND: 'Sorry, your request could not be processed.',
  },
};

export const FAILURE_BANK_CODE: any = {
  E_FILE_NO_PASSWORD:
    'Uploaded PDF is a password protected file. Please provide password to open the file.',
  E_FILE_WRONG_PASSWORD:
    'Wrong password. Please provide the correct password to open the file.',
  E_STATEMENT_UNSUPPORTED_FORMAT:
    'We do not support this file format. Please upload a valid bank statement in .pdf format.',
  E_STATEMENT_WRONG_FORMAT:
    'We do not support this file format. Please upload a valid bank statement in .pdf format.',
  E_FILE_NOT_STATEMENT: 'Please upload a valid bank statement.',
  E_DUPLICATE_STATEMENT: 'Uploaded PDF is a duplicate bank statement.',
  E_FILE_UNSUPPORTED_FORMAT:
    'We do not support this file format. Please upload a valid bank statement in .pdf format.',
  E_INCOMPLETE_MONTHS:
    'Insufficient banking data. Please upload bank statements containing transaction details of the last 12 months.',
  E_NOT_ACCEPTED:
    'Insufficient banking data. For Primary Bank, statement must have atleast one transaction every month. For Secondary Bank, statements must have atleast one transaction every year.',
  E_STATEMENT_ERRONEOUS_DATA:
    'Uploaded PDF has erroneous data. Please upload a valid bank statement.',
  E_STATEMENT_NO_TRANSACTIONS:
    'Uploaded PDF contains no transactions. Please upload a valid bank statement.',
  E_STATEMENT_WRONG_INSTITUTION:
    "Bank statement doesn't match the selected bank.",
  E_AMOUNT_BALANCE_MISMATCH:
    'Calculated transaction details do not match the actual details in the uploaded PDF. Please valid bank statements.',
  E_FILE_MALWARE:
    'Uploaded PDF contains a malware. Please upload a valid bank statement.',
  E_MISSING_TRANSACTIONS:
    'Uploaded PDF has missing transactions. Please upload a valid bank statement.',
  E_PL_MISMATCH:
    'Calculated profit & loss details do not match the actual details in the uploaded PDF. Please upload valid bank statements.',
  E_STATEMENT_DUPLICATE:
    'Uploade PDF is a duplicate bank statement. Please add unique bank statements.',
  E_STATEMENT_MULTIPLE_ACCOUNTS:
    'Uploaded statements contain data from more than one bank account. Please upload bank statements under the corresponding bank.',
  E_DATE_RANGE:
    'Insufficinet banking data. Please upload statements containing transaction details of the last 12 months. ',
  SYS_STATEMENT_UPLOAD_FAILED:
    'One or more uploaded statements failed verification. Please upload valid bank statements.',
};

export const monthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const PAYMENT_CYCLE_OPTIONS = [
  {
    id: 1,
    value: 'ALL',
    code: [],
  },
  {
    id: 2,
    value: '1 Day',
    code: [1, 'DAY'],
  },
  {
    id: 3,
    value: '1 Week',
    code: [1, 'WEEK'],
  },
  {
    id: 4,
    value: '2 Weeks',
    code: [2, 'WEEK'],
  },
  {
    id: 5,
    value: '1 Month',
    code: [1, 'MONTH'],
  },
  {
    id: 6,
    value: '3 Months',
    code: [3, 'MONTH'],
  },
  {
    id: 7,
    value: '6 Months',
    code: [6, 'MONTH'],
  },
];

export const where: any = {
  status: {
    _eq: 'ACTIVE',
  },
  _not: {
    trade_subscriptions: {
      status: { _eq: 'ACTIVE' },
      trade: {
        status: {
          _in: ['ACTIVE', 'INITIATED'],
        },
      },
    },
  },
  verified: {
    _eq: true,
  },
  eligibility_score: {
    _eq: 1,
  },
};

export const PlaceBidErrorMessages: { [key: string]: string } = {
  DEAL_NOT_FOUND: 'something went wrong. please try again',
  BIDDING_CLOSED: 'Auction is closed.',
  BID_PRICE_LOW: 'Bid value is low',
  INVALID_BID_PRICE: 'Bid value is invalid',
  OUT_BIDED:
    'Uh-Oh! Looks like another investor has placed an equal or  higher bid. Please increase the bid and try again.',
};
