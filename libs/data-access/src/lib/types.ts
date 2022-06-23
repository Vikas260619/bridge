export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
  deal_scalar: any;
  float8: any;
  json: any;
  jsonb: any;
  numeric: any;
  timestamptz: any;
  uuid: any;
};

export type AccountingExcelUploadInput = {
  file_ids?: InputMaybe<Array<Scalars['Int']>>;
};

export type AccountingExcelUploadOutput = {
  __typename?: 'AccountingExcelUploadOutput';
  message: Scalars['String'];
};

export type AccountingSyncInput = {
  source: Scalars['String'];
};

export type AccountingSyncOutput = {
  __typename?: 'AccountingSyncOutput';
  message: Scalars['String'];
};

export type BankStatementsUploadInput = {
  account_type: Scalars['String'];
  bank_id: Scalars['Int'];
  file_registry_ids: Array<Scalars['Int']>;
  is_primary: Scalars['Boolean'];
  sequence: Scalars['Int'];
};

export type BankStatementsUploadOutput = {
  __typename?: 'BankStatementsUploadOutput';
  id: Scalars['Int'];
  message: Scalars['String'];
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type Boolean_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

export type CloseBiddingOutput = {
  __typename?: 'CloseBiddingOutput';
  message: Scalars['String'];
};

export type CompanyIntegrationStatusInput = {
  integration_method: Scalars['String'];
  integration_status: Scalars['String'];
  integration_type: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

export type CreateDealInput = {
  company_score_id: Scalars['Int'];
};

export type CreateDealOutput = {
  __typename?: 'CreateDealOutput';
  deal_id: Scalars['Int'];
};

export enum DeletableModel {
  CompanyIntegration = 'Company_Integration',
  IntegrationAuth = 'Integration_Auth'
}

export type DeleteInput = {
  modelName: DeletableModel;
  where: Scalars['jsonb'];
};

export type DeleteOutput = {
  __typename?: 'DeleteOutput';
  message: Scalars['String'];
};

export type DownloadCiFileInput = {
  id: Scalars['Int'];
};

export type DownloadCiFileOutput = {
  __typename?: 'DownloadCiFileOutput';
  url: Scalars['String'];
};

export type DownloadPrefilledNachMandateInput = {
  trade_id: Scalars['Int'];
};

export type DownloadPrefilledNachMandateOutput = {
  __typename?: 'DownloadPrefilledNachMandateOutput';
  url: Scalars['String'];
};

export type EditTradeContractsInput = {
  subscription_ids: Array<Scalars['Int']>;
  trade_id: Scalars['Int'];
};

export type EditTradeContractsOutput = {
  __typename?: 'EditTradeContractsOutput';
  message: Scalars['String'];
};

export type ExchangeSaveTokenInput = {
  params: Scalars['jsonb'];
  source: Scalars['String'];
};

export type ExchangeSaveTokenOutput = {
  __typename?: 'ExchangeSaveTokenOutput';
  id: Scalars['Int'];
  message: Scalars['String'];
  metadata?: Maybe<Scalars['jsonb']>;
};

export type FetchGstReturnFilingInput = {
  company_id: Scalars['Int'];
};

export type FetchGstReturnFilingOutput = {
  __typename?: 'FetchGSTReturnFilingOutput';
  message: Scalars['String'];
};

export type FetchMcaProfileInput = {
  company_id: Scalars['Int'];
};

export type FetchMcaProfileOutput = {
  __typename?: 'FetchMCAProfileOutput';
  message: Scalars['String'];
};

export type GenerateApaInput = {
  signing_inputs: SigningInputs;
  trade_id: Scalars['Int'];
};

export type GenerateApaOutput = {
  __typename?: 'GenerateAPAOutput';
  file_registry_id: Scalars['Int'];
  signing_link: Scalars['String'];
  url: Scalars['String'];
};

export type GenerateFileRegistryDownloadUrlInput = {
  file_registry_id: Scalars['Int'];
};

export type GenerateFileRegistryDownloadUrlOutput = {
  __typename?: 'GenerateFileRegistryDownloadURLOutput';
  download_url: Scalars['String'];
};

export type GenerateFileRegistryUploadUrlInput = {
  category_id: Scalars['String'];
  content_type?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  password?: InputMaybe<Scalars['String']>;
};

export type GenerateFileRegistryUploadUrlOutput = {
  __typename?: 'GenerateFileRegistryUploadURLOutput';
  file_registry_id: Scalars['Int'];
  upload_url: Scalars['String'];
};

export type GenerateTradeEmiScheduleInput = {
  trade_id: Scalars['Int'];
};

export type GenerateTradeEmiScheduleOutput = {
  __typename?: 'GenerateTradeEMIScheduleOutput';
  message: Scalars['String'];
};

export type GetNachMandatePropertiesInput = {
  multi_signatory?: InputMaybe<Scalars['Boolean']>;
  trade_id: Scalars['Int'];
};

export type GetNachMandatePropertiesOutput = {
  __typename?: 'GetNachMandatePropertiesOutput';
  final_collection_date: Scalars['String'];
  first_collection_date: Scalars['String'];
  mandate_type: Scalars['String'];
  monthly_emi: Scalars['Float'];
};

export type InitiateTradeInput = {
  deal_id: Scalars['Int'];
  subscription_ids?: InputMaybe<Array<Scalars['Int']>>;
};

export type InitiateTradeOutput = {
  __typename?: 'InitiateTradeOutput';
  code: Scalars['String'];
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

export type IntegrationsApproveInput = {
  id: Scalars['Int'];
};

export type IntegrationsApproveOutput = {
  __typename?: 'IntegrationsApproveOutput';
  message: Scalars['String'];
};

export type IntegrationsUploadInput = {
  company_integration_id: Scalars['Int'];
  file_id: Scalars['Int'];
};

export type IntegrationsUploadOutput = {
  __typename?: 'IntegrationsUploadOutput';
  message: Scalars['String'];
};

export type ListIntegrationsOutput = {
  __typename?: 'ListIntegrationsOutput';
  auth_protocol: Scalars['String'];
  category: Scalars['String'];
  /** An array relationship */
  company_integrations: Array<Company_Integration>;
  /** An aggregate relationship */
  company_integrations_aggregate: Company_Integration_Aggregate;
  /** An array relationship */
  integrations: Array<Integration_Auth>;
  /** An aggregate relationship */
  integrations_aggregate: Integration_Auth_Aggregate;
  is_active: Scalars['Boolean'];
  logo_url?: Maybe<Scalars['String']>;
  source: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};


export type ListIntegrationsOutputCompany_IntegrationsArgs = {
  distinct_on?: InputMaybe<Array<Company_Integration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Integration_Order_By>>;
  where?: InputMaybe<Company_Integration_Bool_Exp>;
};


export type ListIntegrationsOutputCompany_Integrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Company_Integration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Integration_Order_By>>;
  where?: InputMaybe<Company_Integration_Bool_Exp>;
};


export type ListIntegrationsOutputIntegrationsArgs = {
  distinct_on?: InputMaybe<Array<Integration_Auth_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Integration_Auth_Order_By>>;
  where?: InputMaybe<Integration_Auth_Bool_Exp>;
};


export type ListIntegrationsOutputIntegrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Integration_Auth_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Integration_Auth_Order_By>>;
  where?: InputMaybe<Integration_Auth_Bool_Exp>;
};

export type NetBankingPullInput = {
  account_type: Scalars['String'];
  bank_id: Scalars['Int'];
  is_primary: Scalars['Boolean'];
  sequence: Scalars['Int'];
};

export type NetBankingPullOutput = {
  __typename?: 'NetBankingPullOutput';
  id: Scalars['Int'];
  message: Scalars['String'];
  url: Scalars['String'];
};

export type NotifyCustomersUpcomingEmiOutput = {
  __typename?: 'NotifyCustomersUpcomingEMIOutput';
  message: Scalars['String'];
};

export type NotifyNewDealsOutput = {
  __typename?: 'NotifyNewDealsOutput';
  message: Scalars['String'];
};

export type OpsAccountSetupNotifyInput = {
  company_id: Scalars['Int'];
  current_integration_input: CompanyIntegrationStatusInput;
};

export type OpsAccountSetupNotifyOutput = {
  __typename?: 'OpsAccountSetupNotifyOutput';
  message: Scalars['String'];
};

export type PlaceBidInput = {
  deal_id: Scalars['Int'];
  price: Scalars['Float'];
};

export type PlaceBidOutput = {
  __typename?: 'PlaceBidOutput';
  bid_id: Scalars['Int'];
};

export type PresentMandateDigioOutput = {
  __typename?: 'PresentMandateDigioOutput';
  message: Scalars['String'];
};

export type PreviewApaInput = {
  signing_inputs: SigningInputs;
  trade_id: Scalars['Int'];
};

export type PreviewApaOutput = {
  __typename?: 'PreviewAPAOutput';
  file_registry_id: Scalars['Int'];
  url: Scalars['String'];
};

export type RefreshTokensInput = {
  source: Scalars['String'];
};

export type RefreshTokensOutput = {
  __typename?: 'RefreshTokensOutput';
  message: Scalars['String'];
};

export type RegisterNachMandateInput = {
  account_id: Scalars['Int'];
  customer_bank_acct_number?: InputMaybe<Scalars['String']>;
  customer_bank_ifsc?: InputMaybe<Scalars['String']>;
  multi_signatory: Scalars['Boolean'];
  trade_id: Scalars['Int'];
};

export type RegisterNachMandateOutput = {
  __typename?: 'RegisterNachMandateOutput';
  message: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type RemindInvestorsOutput = {
  __typename?: 'RemindInvestorsOutput';
  message: Scalars['String'];
};

export type RunScoringEngineInput = {
  company_id: Scalars['Int'];
};

export type RunScoringEngineOutput = {
  __typename?: 'RunScoringEngineOutput';
  message: Scalars['String'];
};

export type SigningInputs = {
  c_auth_addr: Scalars['String'];
  c_auth_id: Scalars['String'];
  c_signer_designation: Scalars['String'];
  c_signer_name: Scalars['String'];
  c_signer_phone: Scalars['String'];
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

export type SubmitSignedNachMandateInput = {
  trade_id: Scalars['Int'];
};

export type SubmitSignedNachMandateOutput = {
  __typename?: 'SubmitSignedNachMandateOutput';
  message: Scalars['String'];
};

export type SubscriptionCsvUploadInput = {
  file_id: Scalars['Int'];
};

export type SubscriptionCsvUploadOutput = {
  __typename?: 'SubscriptionCSVUploadOutput';
  message: Scalars['String'];
};

export type SubscriptionSyncInput = {
  source: Scalars['String'];
};

export type SubscriptionSyncOutput = {
  __typename?: 'SubscriptionSyncOutput';
  message: Scalars['String'];
};

export type UploadSignedNachMandateInput = {
  trade_id: Scalars['Int'];
};

export type UploadSignedNachMandateOutput = {
  __typename?: 'UploadSignedNachMandateOutput';
  file_registry_id: Scalars['Int'];
  url: Scalars['String'];
};

export type VerifiedSubscriptionCsvUploadInput = {
  company_integration_id: Scalars['Int'];
  file_id: Scalars['Int'];
};

export type VerifiedSubscriptionCsvUploadOutput = {
  __typename?: 'VerifiedSubscriptionCSVUploadOutput';
  message: Scalars['String'];
};

export type VerifyPanInput = {
  pan: Scalars['String'];
  sync_name?: InputMaybe<Scalars['Boolean']>;
};

export type VerifyPanOutput = {
  __typename?: 'VerifyPanOutput';
  gstin?: Maybe<Scalars['String']>;
  message: Scalars['String'];
  name_on_pan?: Maybe<Scalars['String']>;
  registered_name?: Maybe<Scalars['String']>;
  verified: Scalars['Boolean'];
};

/** columns and relationships of "account" */
export type Account = {
  __typename?: 'account';
  account_no: Scalars['String'];
  account_type?: Maybe<Ref_Account_Type_Enum>;
  bank_id: Scalars['Int'];
  /** An object relationship */
  company?: Maybe<Company>;
  created_at: Scalars['timestamptz'];
  created_by: Scalars['Int'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  ifsc_code?: Maybe<Scalars['String']>;
  /** An object relationship */
  investor?: Maybe<Investor>;
  is_primary: Scalars['Boolean'];
  micr_code?: Maybe<Scalars['Int']>;
  multi_signatory: Scalars['Boolean'];
  name: Scalars['String'];
  /** An object relationship */
  ref_bank: Ref_Bank;
  tenant_id: Scalars['Int'];
  tenant_type: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  updated_by?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "account" */
export type Account_Aggregate = {
  __typename?: 'account_aggregate';
  aggregate?: Maybe<Account_Aggregate_Fields>;
  nodes: Array<Account>;
};

/** aggregate fields of "account" */
export type Account_Aggregate_Fields = {
  __typename?: 'account_aggregate_fields';
  avg?: Maybe<Account_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Account_Max_Fields>;
  min?: Maybe<Account_Min_Fields>;
  stddev?: Maybe<Account_Stddev_Fields>;
  stddev_pop?: Maybe<Account_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Account_Stddev_Samp_Fields>;
  sum?: Maybe<Account_Sum_Fields>;
  var_pop?: Maybe<Account_Var_Pop_Fields>;
  var_samp?: Maybe<Account_Var_Samp_Fields>;
  variance?: Maybe<Account_Variance_Fields>;
};


/** aggregate fields of "account" */
export type Account_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Account_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "account" */
export type Account_Aggregate_Order_By = {
  avg?: InputMaybe<Account_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Account_Max_Order_By>;
  min?: InputMaybe<Account_Min_Order_By>;
  stddev?: InputMaybe<Account_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Account_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Account_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Account_Sum_Order_By>;
  var_pop?: InputMaybe<Account_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Account_Var_Samp_Order_By>;
  variance?: InputMaybe<Account_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "account" */
export type Account_Arr_Rel_Insert_Input = {
  data: Array<Account_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Account_On_Conflict>;
};

/** aggregate avg on columns */
export type Account_Avg_Fields = {
  __typename?: 'account_avg_fields';
  bank_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  micr_code?: Maybe<Scalars['Float']>;
  tenant_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "account" */
export type Account_Avg_Order_By = {
  bank_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  micr_code?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "account". All fields are combined with a logical 'AND'. */
export type Account_Bool_Exp = {
  _and?: InputMaybe<Array<Account_Bool_Exp>>;
  _not?: InputMaybe<Account_Bool_Exp>;
  _or?: InputMaybe<Array<Account_Bool_Exp>>;
  account_no?: InputMaybe<String_Comparison_Exp>;
  account_type?: InputMaybe<Ref_Account_Type_Enum_Comparison_Exp>;
  bank_id?: InputMaybe<Int_Comparison_Exp>;
  company?: InputMaybe<Company_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Int_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_by?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  ifsc_code?: InputMaybe<String_Comparison_Exp>;
  investor?: InputMaybe<Investor_Bool_Exp>;
  is_primary?: InputMaybe<Boolean_Comparison_Exp>;
  micr_code?: InputMaybe<Int_Comparison_Exp>;
  multi_signatory?: InputMaybe<Boolean_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  ref_bank?: InputMaybe<Ref_Bank_Bool_Exp>;
  tenant_id?: InputMaybe<Int_Comparison_Exp>;
  tenant_type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "account" */
export enum Account_Constraint {
  /** unique or primary key constraint */
  AccountAccountNoBankIdTenantIdTenantTypeKey = 'account_account_no_bank_id_tenant_id_tenant_type_key',
  /** unique or primary key constraint */
  AccountPkey = 'account_pkey'
}

/** input type for incrementing numeric columns in table "account" */
export type Account_Inc_Input = {
  bank_id?: InputMaybe<Scalars['Int']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  micr_code?: InputMaybe<Scalars['Int']>;
  tenant_id?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "account" */
export type Account_Insert_Input = {
  account_no?: InputMaybe<Scalars['String']>;
  account_type?: InputMaybe<Ref_Account_Type_Enum>;
  bank_id?: InputMaybe<Scalars['Int']>;
  company?: InputMaybe<Company_Obj_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  ifsc_code?: InputMaybe<Scalars['String']>;
  investor?: InputMaybe<Investor_Obj_Rel_Insert_Input>;
  is_primary?: InputMaybe<Scalars['Boolean']>;
  micr_code?: InputMaybe<Scalars['Int']>;
  multi_signatory?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  ref_bank?: InputMaybe<Ref_Bank_Obj_Rel_Insert_Input>;
  tenant_id?: InputMaybe<Scalars['Int']>;
  tenant_type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Account_Max_Fields = {
  __typename?: 'account_max_fields';
  account_no?: Maybe<Scalars['String']>;
  bank_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  ifsc_code?: Maybe<Scalars['String']>;
  micr_code?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  tenant_id?: Maybe<Scalars['Int']>;
  tenant_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "account" */
export type Account_Max_Order_By = {
  account_no?: InputMaybe<Order_By>;
  bank_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ifsc_code?: InputMaybe<Order_By>;
  micr_code?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  tenant_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Account_Min_Fields = {
  __typename?: 'account_min_fields';
  account_no?: Maybe<Scalars['String']>;
  bank_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  ifsc_code?: Maybe<Scalars['String']>;
  micr_code?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  tenant_id?: Maybe<Scalars['Int']>;
  tenant_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "account" */
export type Account_Min_Order_By = {
  account_no?: InputMaybe<Order_By>;
  bank_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ifsc_code?: InputMaybe<Order_By>;
  micr_code?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  tenant_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "account" */
export type Account_Mutation_Response = {
  __typename?: 'account_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Account>;
};

/** input type for inserting object relation for remote table "account" */
export type Account_Obj_Rel_Insert_Input = {
  data: Account_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Account_On_Conflict>;
};

/** on conflict condition type for table "account" */
export type Account_On_Conflict = {
  constraint: Account_Constraint;
  update_columns?: Array<Account_Update_Column>;
  where?: InputMaybe<Account_Bool_Exp>;
};

/** Ordering options when selecting data from "account". */
export type Account_Order_By = {
  account_no?: InputMaybe<Order_By>;
  account_type?: InputMaybe<Order_By>;
  bank_id?: InputMaybe<Order_By>;
  company?: InputMaybe<Company_Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ifsc_code?: InputMaybe<Order_By>;
  investor?: InputMaybe<Investor_Order_By>;
  is_primary?: InputMaybe<Order_By>;
  micr_code?: InputMaybe<Order_By>;
  multi_signatory?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  ref_bank?: InputMaybe<Ref_Bank_Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  tenant_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** primary key columns input for table: account */
export type Account_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "account" */
export enum Account_Select_Column {
  /** column name */
  AccountNo = 'account_no',
  /** column name */
  AccountType = 'account_type',
  /** column name */
  BankId = 'bank_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  Id = 'id',
  /** column name */
  IfscCode = 'ifsc_code',
  /** column name */
  IsPrimary = 'is_primary',
  /** column name */
  MicrCode = 'micr_code',
  /** column name */
  MultiSignatory = 'multi_signatory',
  /** column name */
  Name = 'name',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  TenantType = 'tenant_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** input type for updating data in table "account" */
export type Account_Set_Input = {
  account_no?: InputMaybe<Scalars['String']>;
  account_type?: InputMaybe<Ref_Account_Type_Enum>;
  bank_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  ifsc_code?: InputMaybe<Scalars['String']>;
  is_primary?: InputMaybe<Scalars['Boolean']>;
  micr_code?: InputMaybe<Scalars['Int']>;
  multi_signatory?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  tenant_id?: InputMaybe<Scalars['Int']>;
  tenant_type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Account_Stddev_Fields = {
  __typename?: 'account_stddev_fields';
  bank_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  micr_code?: Maybe<Scalars['Float']>;
  tenant_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "account" */
export type Account_Stddev_Order_By = {
  bank_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  micr_code?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Account_Stddev_Pop_Fields = {
  __typename?: 'account_stddev_pop_fields';
  bank_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  micr_code?: Maybe<Scalars['Float']>;
  tenant_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "account" */
export type Account_Stddev_Pop_Order_By = {
  bank_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  micr_code?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Account_Stddev_Samp_Fields = {
  __typename?: 'account_stddev_samp_fields';
  bank_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  micr_code?: Maybe<Scalars['Float']>;
  tenant_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "account" */
export type Account_Stddev_Samp_Order_By = {
  bank_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  micr_code?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Account_Sum_Fields = {
  __typename?: 'account_sum_fields';
  bank_id?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  micr_code?: Maybe<Scalars['Int']>;
  tenant_id?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "account" */
export type Account_Sum_Order_By = {
  bank_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  micr_code?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** update columns of table "account" */
export enum Account_Update_Column {
  /** column name */
  AccountNo = 'account_no',
  /** column name */
  AccountType = 'account_type',
  /** column name */
  BankId = 'bank_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  Id = 'id',
  /** column name */
  IfscCode = 'ifsc_code',
  /** column name */
  IsPrimary = 'is_primary',
  /** column name */
  MicrCode = 'micr_code',
  /** column name */
  MultiSignatory = 'multi_signatory',
  /** column name */
  Name = 'name',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  TenantType = 'tenant_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** aggregate var_pop on columns */
export type Account_Var_Pop_Fields = {
  __typename?: 'account_var_pop_fields';
  bank_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  micr_code?: Maybe<Scalars['Float']>;
  tenant_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "account" */
export type Account_Var_Pop_Order_By = {
  bank_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  micr_code?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Account_Var_Samp_Fields = {
  __typename?: 'account_var_samp_fields';
  bank_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  micr_code?: Maybe<Scalars['Float']>;
  tenant_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "account" */
export type Account_Var_Samp_Order_By = {
  bank_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  micr_code?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Account_Variance_Fields = {
  __typename?: 'account_variance_fields';
  bank_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  micr_code?: Maybe<Scalars['Float']>;
  tenant_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "account" */
export type Account_Variance_Order_By = {
  bank_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  micr_code?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** columns and relationships of "banking_partner_integration" */
export type Banking_Partner_Integration = {
  __typename?: 'banking_partner_integration';
  account_type?: Maybe<Scalars['String']>;
  /** An object relationship */
  bank?: Maybe<Ref_Bank>;
  bank_id?: Maybe<Scalars['Int']>;
  company_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  is_primary?: Maybe<Scalars['Boolean']>;
  sequence?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['String']>;
};

/** aggregated selection of "banking_partner_integration" */
export type Banking_Partner_Integration_Aggregate = {
  __typename?: 'banking_partner_integration_aggregate';
  aggregate?: Maybe<Banking_Partner_Integration_Aggregate_Fields>;
  nodes: Array<Banking_Partner_Integration>;
};

/** aggregate fields of "banking_partner_integration" */
export type Banking_Partner_Integration_Aggregate_Fields = {
  __typename?: 'banking_partner_integration_aggregate_fields';
  avg?: Maybe<Banking_Partner_Integration_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Banking_Partner_Integration_Max_Fields>;
  min?: Maybe<Banking_Partner_Integration_Min_Fields>;
  stddev?: Maybe<Banking_Partner_Integration_Stddev_Fields>;
  stddev_pop?: Maybe<Banking_Partner_Integration_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Banking_Partner_Integration_Stddev_Samp_Fields>;
  sum?: Maybe<Banking_Partner_Integration_Sum_Fields>;
  var_pop?: Maybe<Banking_Partner_Integration_Var_Pop_Fields>;
  var_samp?: Maybe<Banking_Partner_Integration_Var_Samp_Fields>;
  variance?: Maybe<Banking_Partner_Integration_Variance_Fields>;
};


/** aggregate fields of "banking_partner_integration" */
export type Banking_Partner_Integration_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Banking_Partner_Integration_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Banking_Partner_Integration_Avg_Fields = {
  __typename?: 'banking_partner_integration_avg_fields';
  bank_id?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sequence?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "banking_partner_integration". All fields are combined with a logical 'AND'. */
export type Banking_Partner_Integration_Bool_Exp = {
  _and?: InputMaybe<Array<Banking_Partner_Integration_Bool_Exp>>;
  _not?: InputMaybe<Banking_Partner_Integration_Bool_Exp>;
  _or?: InputMaybe<Array<Banking_Partner_Integration_Bool_Exp>>;
  account_type?: InputMaybe<String_Comparison_Exp>;
  bank?: InputMaybe<Ref_Bank_Bool_Exp>;
  bank_id?: InputMaybe<Int_Comparison_Exp>;
  company_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  is_primary?: InputMaybe<Boolean_Comparison_Exp>;
  sequence?: InputMaybe<Int_Comparison_Exp>;
  source?: InputMaybe<String_Comparison_Exp>;
};

/** input type for incrementing numeric columns in table "banking_partner_integration" */
export type Banking_Partner_Integration_Inc_Input = {
  bank_id?: InputMaybe<Scalars['Int']>;
  company_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  sequence?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "banking_partner_integration" */
export type Banking_Partner_Integration_Insert_Input = {
  account_type?: InputMaybe<Scalars['String']>;
  bank?: InputMaybe<Ref_Bank_Obj_Rel_Insert_Input>;
  bank_id?: InputMaybe<Scalars['Int']>;
  company_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  is_primary?: InputMaybe<Scalars['Boolean']>;
  sequence?: InputMaybe<Scalars['Int']>;
  source?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Banking_Partner_Integration_Max_Fields = {
  __typename?: 'banking_partner_integration_max_fields';
  account_type?: Maybe<Scalars['String']>;
  bank_id?: Maybe<Scalars['Int']>;
  company_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  sequence?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Banking_Partner_Integration_Min_Fields = {
  __typename?: 'banking_partner_integration_min_fields';
  account_type?: Maybe<Scalars['String']>;
  bank_id?: Maybe<Scalars['Int']>;
  company_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  sequence?: Maybe<Scalars['Int']>;
  source?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "banking_partner_integration" */
export type Banking_Partner_Integration_Mutation_Response = {
  __typename?: 'banking_partner_integration_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Banking_Partner_Integration>;
};

/** input type for inserting object relation for remote table "banking_partner_integration" */
export type Banking_Partner_Integration_Obj_Rel_Insert_Input = {
  data: Banking_Partner_Integration_Insert_Input;
};

/** Ordering options when selecting data from "banking_partner_integration". */
export type Banking_Partner_Integration_Order_By = {
  account_type?: InputMaybe<Order_By>;
  bank?: InputMaybe<Ref_Bank_Order_By>;
  bank_id?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  is_primary?: InputMaybe<Order_By>;
  sequence?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
};

/** select columns of table "banking_partner_integration" */
export enum Banking_Partner_Integration_Select_Column {
  /** column name */
  AccountType = 'account_type',
  /** column name */
  BankId = 'bank_id',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  Id = 'id',
  /** column name */
  IsPrimary = 'is_primary',
  /** column name */
  Sequence = 'sequence',
  /** column name */
  Source = 'source'
}

/** input type for updating data in table "banking_partner_integration" */
export type Banking_Partner_Integration_Set_Input = {
  account_type?: InputMaybe<Scalars['String']>;
  bank_id?: InputMaybe<Scalars['Int']>;
  company_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  is_primary?: InputMaybe<Scalars['Boolean']>;
  sequence?: InputMaybe<Scalars['Int']>;
  source?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Banking_Partner_Integration_Stddev_Fields = {
  __typename?: 'banking_partner_integration_stddev_fields';
  bank_id?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sequence?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Banking_Partner_Integration_Stddev_Pop_Fields = {
  __typename?: 'banking_partner_integration_stddev_pop_fields';
  bank_id?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sequence?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Banking_Partner_Integration_Stddev_Samp_Fields = {
  __typename?: 'banking_partner_integration_stddev_samp_fields';
  bank_id?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sequence?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Banking_Partner_Integration_Sum_Fields = {
  __typename?: 'banking_partner_integration_sum_fields';
  bank_id?: Maybe<Scalars['Int']>;
  company_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  sequence?: Maybe<Scalars['Int']>;
};

/** aggregate var_pop on columns */
export type Banking_Partner_Integration_Var_Pop_Fields = {
  __typename?: 'banking_partner_integration_var_pop_fields';
  bank_id?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sequence?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Banking_Partner_Integration_Var_Samp_Fields = {
  __typename?: 'banking_partner_integration_var_samp_fields';
  bank_id?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sequence?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Banking_Partner_Integration_Variance_Fields = {
  __typename?: 'banking_partner_integration_variance_fields';
  bank_id?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  sequence?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "bid" */
export type Bid = {
  __typename?: 'bid';
  company_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  created_by: Scalars['Int'];
  /** An object relationship */
  deal: Deal;
  deal_id: Scalars['Int'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  estimated_irr?: Maybe<Scalars['float8']>;
  id: Scalars['Int'];
  /** An object relationship */
  investor: Investor;
  investor_id: Scalars['Int'];
  price: Scalars['float8'];
  updated_at: Scalars['timestamptz'];
  updated_by: Scalars['Int'];
  /** A computed field, executes function "bid_by_investor" */
  your_bid?: Maybe<Scalars['Boolean']>;
};

/** aggregated selection of "bid" */
export type Bid_Aggregate = {
  __typename?: 'bid_aggregate';
  aggregate?: Maybe<Bid_Aggregate_Fields>;
  nodes: Array<Bid>;
};

/** aggregate fields of "bid" */
export type Bid_Aggregate_Fields = {
  __typename?: 'bid_aggregate_fields';
  avg?: Maybe<Bid_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Bid_Max_Fields>;
  min?: Maybe<Bid_Min_Fields>;
  stddev?: Maybe<Bid_Stddev_Fields>;
  stddev_pop?: Maybe<Bid_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Bid_Stddev_Samp_Fields>;
  sum?: Maybe<Bid_Sum_Fields>;
  var_pop?: Maybe<Bid_Var_Pop_Fields>;
  var_samp?: Maybe<Bid_Var_Samp_Fields>;
  variance?: Maybe<Bid_Variance_Fields>;
};


/** aggregate fields of "bid" */
export type Bid_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Bid_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "bid" */
export type Bid_Aggregate_Order_By = {
  avg?: InputMaybe<Bid_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Bid_Max_Order_By>;
  min?: InputMaybe<Bid_Min_Order_By>;
  stddev?: InputMaybe<Bid_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Bid_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Bid_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Bid_Sum_Order_By>;
  var_pop?: InputMaybe<Bid_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Bid_Var_Samp_Order_By>;
  variance?: InputMaybe<Bid_Variance_Order_By>;
};

export type Bid_Amount_Subscription_Args = {
  bid_price?: InputMaybe<Scalars['float8']>;
};

/** input type for inserting array relation for remote table "bid" */
export type Bid_Arr_Rel_Insert_Input = {
  data: Array<Bid_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Bid_On_Conflict>;
};

/** aggregate avg on columns */
export type Bid_Avg_Fields = {
  __typename?: 'bid_avg_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deal_id?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  estimated_irr?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "bid" */
export type Bid_Avg_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deal_id?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  estimated_irr?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "bid". All fields are combined with a logical 'AND'. */
export type Bid_Bool_Exp = {
  _and?: InputMaybe<Array<Bid_Bool_Exp>>;
  _not?: InputMaybe<Bid_Bool_Exp>;
  _or?: InputMaybe<Array<Bid_Bool_Exp>>;
  company_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Int_Comparison_Exp>;
  deal?: InputMaybe<Deal_Bool_Exp>;
  deal_id?: InputMaybe<Int_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_by?: InputMaybe<Int_Comparison_Exp>;
  estimated_irr?: InputMaybe<Float8_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  investor?: InputMaybe<Investor_Bool_Exp>;
  investor_id?: InputMaybe<Int_Comparison_Exp>;
  price?: InputMaybe<Float8_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Int_Comparison_Exp>;
  your_bid?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "bid" */
export enum Bid_Constraint {
  /** unique or primary key constraint */
  BidPkey = 'bid_pkey'
}

/** input type for incrementing numeric columns in table "bid" */
export type Bid_Inc_Input = {
  company_id?: InputMaybe<Scalars['Int']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deal_id?: InputMaybe<Scalars['Int']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  estimated_irr?: InputMaybe<Scalars['float8']>;
  id?: InputMaybe<Scalars['Int']>;
  investor_id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['float8']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "bid" */
export type Bid_Insert_Input = {
  company_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deal?: InputMaybe<Deal_Obj_Rel_Insert_Input>;
  deal_id?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  estimated_irr?: InputMaybe<Scalars['float8']>;
  id?: InputMaybe<Scalars['Int']>;
  investor?: InputMaybe<Investor_Obj_Rel_Insert_Input>;
  investor_id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['float8']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Bid_Max_Fields = {
  __typename?: 'bid_max_fields';
  company_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deal_id?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  estimated_irr?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['Int']>;
  investor_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "bid" */
export type Bid_Max_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deal_id?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  estimated_irr?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Bid_Min_Fields = {
  __typename?: 'bid_min_fields';
  company_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deal_id?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  estimated_irr?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['Int']>;
  investor_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "bid" */
export type Bid_Min_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deal_id?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  estimated_irr?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "bid" */
export type Bid_Mutation_Response = {
  __typename?: 'bid_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Bid>;
};

/** input type for inserting object relation for remote table "bid" */
export type Bid_Obj_Rel_Insert_Input = {
  data: Bid_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Bid_On_Conflict>;
};

/** on conflict condition type for table "bid" */
export type Bid_On_Conflict = {
  constraint: Bid_Constraint;
  update_columns?: Array<Bid_Update_Column>;
  where?: InputMaybe<Bid_Bool_Exp>;
};

/** Ordering options when selecting data from "bid". */
export type Bid_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deal?: InputMaybe<Deal_Order_By>;
  deal_id?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  estimated_irr?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor?: InputMaybe<Investor_Order_By>;
  investor_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  your_bid?: InputMaybe<Order_By>;
};

/** primary key columns input for table: bid */
export type Bid_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "bid" */
export enum Bid_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DealId = 'deal_id',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  EstimatedIrr = 'estimated_irr',
  /** column name */
  Id = 'id',
  /** column name */
  InvestorId = 'investor_id',
  /** column name */
  Price = 'price',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** input type for updating data in table "bid" */
export type Bid_Set_Input = {
  company_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deal_id?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  estimated_irr?: InputMaybe<Scalars['float8']>;
  id?: InputMaybe<Scalars['Int']>;
  investor_id?: InputMaybe<Scalars['Int']>;
  price?: InputMaybe<Scalars['float8']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Bid_Stddev_Fields = {
  __typename?: 'bid_stddev_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deal_id?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  estimated_irr?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "bid" */
export type Bid_Stddev_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deal_id?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  estimated_irr?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Bid_Stddev_Pop_Fields = {
  __typename?: 'bid_stddev_pop_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deal_id?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  estimated_irr?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "bid" */
export type Bid_Stddev_Pop_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deal_id?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  estimated_irr?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Bid_Stddev_Samp_Fields = {
  __typename?: 'bid_stddev_samp_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deal_id?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  estimated_irr?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "bid" */
export type Bid_Stddev_Samp_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deal_id?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  estimated_irr?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Bid_Sum_Fields = {
  __typename?: 'bid_sum_fields';
  company_id?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  deal_id?: Maybe<Scalars['Int']>;
  deleted_by?: Maybe<Scalars['Int']>;
  estimated_irr?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['Int']>;
  investor_id?: Maybe<Scalars['Int']>;
  price?: Maybe<Scalars['float8']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "bid" */
export type Bid_Sum_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deal_id?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  estimated_irr?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** update columns of table "bid" */
export enum Bid_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DealId = 'deal_id',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  EstimatedIrr = 'estimated_irr',
  /** column name */
  Id = 'id',
  /** column name */
  InvestorId = 'investor_id',
  /** column name */
  Price = 'price',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** aggregate var_pop on columns */
export type Bid_Var_Pop_Fields = {
  __typename?: 'bid_var_pop_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deal_id?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  estimated_irr?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "bid" */
export type Bid_Var_Pop_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deal_id?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  estimated_irr?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Bid_Var_Samp_Fields = {
  __typename?: 'bid_var_samp_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deal_id?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  estimated_irr?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "bid" */
export type Bid_Var_Samp_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deal_id?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  estimated_irr?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Bid_Variance_Fields = {
  __typename?: 'bid_variance_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deal_id?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  estimated_irr?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  price?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "bid" */
export type Bid_Variance_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deal_id?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  estimated_irr?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  price?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** columns and relationships of "blacklisted_tokens" */
export type Blacklisted_Tokens = {
  __typename?: 'blacklisted_tokens';
  token: Scalars['String'];
};

/** aggregated selection of "blacklisted_tokens" */
export type Blacklisted_Tokens_Aggregate = {
  __typename?: 'blacklisted_tokens_aggregate';
  aggregate?: Maybe<Blacklisted_Tokens_Aggregate_Fields>;
  nodes: Array<Blacklisted_Tokens>;
};

/** aggregate fields of "blacklisted_tokens" */
export type Blacklisted_Tokens_Aggregate_Fields = {
  __typename?: 'blacklisted_tokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Blacklisted_Tokens_Max_Fields>;
  min?: Maybe<Blacklisted_Tokens_Min_Fields>;
};


/** aggregate fields of "blacklisted_tokens" */
export type Blacklisted_Tokens_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Blacklisted_Tokens_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "blacklisted_tokens". All fields are combined with a logical 'AND'. */
export type Blacklisted_Tokens_Bool_Exp = {
  _and?: InputMaybe<Array<Blacklisted_Tokens_Bool_Exp>>;
  _not?: InputMaybe<Blacklisted_Tokens_Bool_Exp>;
  _or?: InputMaybe<Array<Blacklisted_Tokens_Bool_Exp>>;
  token?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "blacklisted_tokens" */
export enum Blacklisted_Tokens_Constraint {
  /** unique or primary key constraint */
  BlacklistedTokensPkey = 'blacklisted_tokens_pkey'
}

/** input type for inserting data into table "blacklisted_tokens" */
export type Blacklisted_Tokens_Insert_Input = {
  token?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Blacklisted_Tokens_Max_Fields = {
  __typename?: 'blacklisted_tokens_max_fields';
  token?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Blacklisted_Tokens_Min_Fields = {
  __typename?: 'blacklisted_tokens_min_fields';
  token?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "blacklisted_tokens" */
export type Blacklisted_Tokens_Mutation_Response = {
  __typename?: 'blacklisted_tokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Blacklisted_Tokens>;
};

/** on conflict condition type for table "blacklisted_tokens" */
export type Blacklisted_Tokens_On_Conflict = {
  constraint: Blacklisted_Tokens_Constraint;
  update_columns?: Array<Blacklisted_Tokens_Update_Column>;
  where?: InputMaybe<Blacklisted_Tokens_Bool_Exp>;
};

/** Ordering options when selecting data from "blacklisted_tokens". */
export type Blacklisted_Tokens_Order_By = {
  token?: InputMaybe<Order_By>;
};

/** primary key columns input for table: blacklisted_tokens */
export type Blacklisted_Tokens_Pk_Columns_Input = {
  token: Scalars['String'];
};

/** select columns of table "blacklisted_tokens" */
export enum Blacklisted_Tokens_Select_Column {
  /** column name */
  Token = 'token'
}

/** input type for updating data in table "blacklisted_tokens" */
export type Blacklisted_Tokens_Set_Input = {
  token?: InputMaybe<Scalars['String']>;
};

/** update columns of table "blacklisted_tokens" */
export enum Blacklisted_Tokens_Update_Column {
  /** column name */
  Token = 'token'
}

/** columns and relationships of "company" */
export type Company = {
  __typename?: 'company';
  /** An array relationship */
  accounts: Array<Account>;
  /** An aggregate relationship */
  accounts_aggregate: Account_Aggregate;
  active_gstin?: Maybe<Scalars['String']>;
  /** An object relationship */
  agreement_file?: Maybe<File_Registry>;
  agreement_file_id?: Maybe<Scalars['Int']>;
  agreement_signed_date?: Maybe<Scalars['timestamptz']>;
  approved_at?: Maybe<Scalars['timestamptz']>;
  approved_by?: Maybe<Scalars['Int']>;
  cin?: Maybe<Scalars['String']>;
  /** An array relationship */
  company_scores: Array<Company_Score>;
  /** An aggregate relationship */
  company_scores_aggregate: Company_Score_Aggregate;
  company_type?: Maybe<Scalars['String']>;
  /** An array relationship */
  company_users: Array<Company_User>;
  /** An aggregate relationship */
  company_users_aggregate: Company_User_Aggregate;
  created_at: Scalars['timestamptz'];
  created_by: Scalars['Int'];
  /** An array relationship */
  deals: Array<Deal>;
  /** An aggregate relationship */
  deals_aggregate: Deal_Aggregate;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  domain: Scalars['String'];
  estimated_arr?: Maybe<Scalars['numeric']>;
  gstin?: Maybe<Scalars['jsonb']>;
  id: Scalars['Int'];
  incorporation_date?: Maybe<Scalars['date']>;
  marquee_customers?: Maybe<Scalars['String']>;
  marquee_investors?: Maybe<Scalars['jsonb']>;
  mca_profile?: Maybe<Scalars['jsonb']>;
  mca_signatories?: Maybe<Scalars['jsonb']>;
  metadata?: Maybe<Scalars['jsonb']>;
  min_tradable_value?: Maybe<Scalars['float8']>;
  name: Scalars['String'];
  pan?: Maybe<Scalars['String']>;
  /** An object relationship */
  ref_company_type?: Maybe<Ref_Company_Type>;
  /** A computed field, executes function "get_remaining_tradable_value" */
  remaining_tradable_value?: Maybe<Scalars['float8']>;
  status: Scalars['String'];
  tenant_type?: Maybe<Scalars['String']>;
  total_customers?: Maybe<Scalars['Int']>;
  total_funding?: Maybe<Scalars['numeric']>;
  /** An array relationship */
  trades: Array<Trade>;
  /** An aggregate relationship */
  trades_aggregate: Trade_Aggregate;
  updated_at: Scalars['timestamptz'];
  updated_by: Scalars['Int'];
};


/** columns and relationships of "company" */
export type CompanyAccountsArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


/** columns and relationships of "company" */
export type CompanyAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


/** columns and relationships of "company" */
export type CompanyCompany_ScoresArgs = {
  distinct_on?: InputMaybe<Array<Company_Score_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Score_Order_By>>;
  where?: InputMaybe<Company_Score_Bool_Exp>;
};


/** columns and relationships of "company" */
export type CompanyCompany_Scores_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Company_Score_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Score_Order_By>>;
  where?: InputMaybe<Company_Score_Bool_Exp>;
};


/** columns and relationships of "company" */
export type CompanyCompany_UsersArgs = {
  distinct_on?: InputMaybe<Array<Company_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_User_Order_By>>;
  where?: InputMaybe<Company_User_Bool_Exp>;
};


/** columns and relationships of "company" */
export type CompanyCompany_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Company_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_User_Order_By>>;
  where?: InputMaybe<Company_User_Bool_Exp>;
};


/** columns and relationships of "company" */
export type CompanyDealsArgs = {
  distinct_on?: InputMaybe<Array<Deal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Deal_Order_By>>;
  where?: InputMaybe<Deal_Bool_Exp>;
};


/** columns and relationships of "company" */
export type CompanyDeals_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Deal_Order_By>>;
  where?: InputMaybe<Deal_Bool_Exp>;
};


/** columns and relationships of "company" */
export type CompanyGstinArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "company" */
export type CompanyMarquee_InvestorsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "company" */
export type CompanyMca_ProfileArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "company" */
export type CompanyMca_SignatoriesArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "company" */
export type CompanyMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "company" */
export type CompanyTradesArgs = {
  distinct_on?: InputMaybe<Array<Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Order_By>>;
  where?: InputMaybe<Trade_Bool_Exp>;
};


/** columns and relationships of "company" */
export type CompanyTrades_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Order_By>>;
  where?: InputMaybe<Trade_Bool_Exp>;
};

/** aggregated selection of "company" */
export type Company_Aggregate = {
  __typename?: 'company_aggregate';
  aggregate?: Maybe<Company_Aggregate_Fields>;
  nodes: Array<Company>;
};

/** aggregate fields of "company" */
export type Company_Aggregate_Fields = {
  __typename?: 'company_aggregate_fields';
  avg?: Maybe<Company_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Company_Max_Fields>;
  min?: Maybe<Company_Min_Fields>;
  stddev?: Maybe<Company_Stddev_Fields>;
  stddev_pop?: Maybe<Company_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Company_Stddev_Samp_Fields>;
  sum?: Maybe<Company_Sum_Fields>;
  var_pop?: Maybe<Company_Var_Pop_Fields>;
  var_samp?: Maybe<Company_Var_Samp_Fields>;
  variance?: Maybe<Company_Variance_Fields>;
};


/** aggregate fields of "company" */
export type Company_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Company_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Company_Append_Input = {
  gstin?: InputMaybe<Scalars['jsonb']>;
  marquee_investors?: InputMaybe<Scalars['jsonb']>;
  mca_profile?: InputMaybe<Scalars['jsonb']>;
  mca_signatories?: InputMaybe<Scalars['jsonb']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Company_Avg_Fields = {
  __typename?: 'company_avg_fields';
  agreement_file_id?: Maybe<Scalars['Float']>;
  approved_by?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  estimated_arr?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  min_tradable_value?: Maybe<Scalars['Float']>;
  total_customers?: Maybe<Scalars['Float']>;
  total_funding?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "company". All fields are combined with a logical 'AND'. */
export type Company_Bool_Exp = {
  _and?: InputMaybe<Array<Company_Bool_Exp>>;
  _not?: InputMaybe<Company_Bool_Exp>;
  _or?: InputMaybe<Array<Company_Bool_Exp>>;
  accounts?: InputMaybe<Account_Bool_Exp>;
  active_gstin?: InputMaybe<String_Comparison_Exp>;
  agreement_file?: InputMaybe<File_Registry_Bool_Exp>;
  agreement_file_id?: InputMaybe<Int_Comparison_Exp>;
  agreement_signed_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  approved_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  approved_by?: InputMaybe<Int_Comparison_Exp>;
  cin?: InputMaybe<String_Comparison_Exp>;
  company_scores?: InputMaybe<Company_Score_Bool_Exp>;
  company_type?: InputMaybe<String_Comparison_Exp>;
  company_users?: InputMaybe<Company_User_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Int_Comparison_Exp>;
  deals?: InputMaybe<Deal_Bool_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_by?: InputMaybe<Int_Comparison_Exp>;
  description?: InputMaybe<String_Comparison_Exp>;
  domain?: InputMaybe<String_Comparison_Exp>;
  estimated_arr?: InputMaybe<Numeric_Comparison_Exp>;
  gstin?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  incorporation_date?: InputMaybe<Date_Comparison_Exp>;
  marquee_customers?: InputMaybe<String_Comparison_Exp>;
  marquee_investors?: InputMaybe<Jsonb_Comparison_Exp>;
  mca_profile?: InputMaybe<Jsonb_Comparison_Exp>;
  mca_signatories?: InputMaybe<Jsonb_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  min_tradable_value?: InputMaybe<Float8_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  pan?: InputMaybe<String_Comparison_Exp>;
  ref_company_type?: InputMaybe<Ref_Company_Type_Bool_Exp>;
  remaining_tradable_value?: InputMaybe<Float8_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  tenant_type?: InputMaybe<String_Comparison_Exp>;
  total_customers?: InputMaybe<Int_Comparison_Exp>;
  total_funding?: InputMaybe<Numeric_Comparison_Exp>;
  trades?: InputMaybe<Trade_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Int_Comparison_Exp>;
};

/** columns and relationships of "company_cin" */
export type Company_Cin = {
  __typename?: 'company_cin';
  cin: Scalars['String'];
  company_name: Scalars['String'];
};

/** aggregated selection of "company_cin" */
export type Company_Cin_Aggregate = {
  __typename?: 'company_cin_aggregate';
  aggregate?: Maybe<Company_Cin_Aggregate_Fields>;
  nodes: Array<Company_Cin>;
};

/** aggregate fields of "company_cin" */
export type Company_Cin_Aggregate_Fields = {
  __typename?: 'company_cin_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Company_Cin_Max_Fields>;
  min?: Maybe<Company_Cin_Min_Fields>;
};


/** aggregate fields of "company_cin" */
export type Company_Cin_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Company_Cin_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "company_cin". All fields are combined with a logical 'AND'. */
export type Company_Cin_Bool_Exp = {
  _and?: InputMaybe<Array<Company_Cin_Bool_Exp>>;
  _not?: InputMaybe<Company_Cin_Bool_Exp>;
  _or?: InputMaybe<Array<Company_Cin_Bool_Exp>>;
  cin?: InputMaybe<String_Comparison_Exp>;
  company_name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "company_cin" */
export enum Company_Cin_Constraint {
  /** unique or primary key constraint */
  CompanyCinPkey = 'company_cin_pkey'
}

/** input type for inserting data into table "company_cin" */
export type Company_Cin_Insert_Input = {
  cin?: InputMaybe<Scalars['String']>;
  company_name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Company_Cin_Max_Fields = {
  __typename?: 'company_cin_max_fields';
  cin?: Maybe<Scalars['String']>;
  company_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Company_Cin_Min_Fields = {
  __typename?: 'company_cin_min_fields';
  cin?: Maybe<Scalars['String']>;
  company_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "company_cin" */
export type Company_Cin_Mutation_Response = {
  __typename?: 'company_cin_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Company_Cin>;
};

/** on conflict condition type for table "company_cin" */
export type Company_Cin_On_Conflict = {
  constraint: Company_Cin_Constraint;
  update_columns?: Array<Company_Cin_Update_Column>;
  where?: InputMaybe<Company_Cin_Bool_Exp>;
};

/** Ordering options when selecting data from "company_cin". */
export type Company_Cin_Order_By = {
  cin?: InputMaybe<Order_By>;
  company_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: company_cin */
export type Company_Cin_Pk_Columns_Input = {
  cin: Scalars['String'];
};

/** select columns of table "company_cin" */
export enum Company_Cin_Select_Column {
  /** column name */
  Cin = 'cin',
  /** column name */
  CompanyName = 'company_name'
}

/** input type for updating data in table "company_cin" */
export type Company_Cin_Set_Input = {
  cin?: InputMaybe<Scalars['String']>;
  company_name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "company_cin" */
export enum Company_Cin_Update_Column {
  /** column name */
  Cin = 'cin',
  /** column name */
  CompanyName = 'company_name'
}

/** unique or primary key constraints on table "company" */
export enum Company_Constraint {
  /** unique or primary key constraint */
  CompanyPkey = 'company_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Company_Delete_At_Path_Input = {
  gstin?: InputMaybe<Array<Scalars['String']>>;
  marquee_investors?: InputMaybe<Array<Scalars['String']>>;
  mca_profile?: InputMaybe<Array<Scalars['String']>>;
  mca_signatories?: InputMaybe<Array<Scalars['String']>>;
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Company_Delete_Elem_Input = {
  gstin?: InputMaybe<Scalars['Int']>;
  marquee_investors?: InputMaybe<Scalars['Int']>;
  mca_profile?: InputMaybe<Scalars['Int']>;
  mca_signatories?: InputMaybe<Scalars['Int']>;
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Company_Delete_Key_Input = {
  gstin?: InputMaybe<Scalars['String']>;
  marquee_investors?: InputMaybe<Scalars['String']>;
  mca_profile?: InputMaybe<Scalars['String']>;
  mca_signatories?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "company_gst_return" */
export type Company_Gst_Return = {
  __typename?: 'company_gst_return';
  company_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  created_by: Scalars['Int'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  dof_timestamp: Scalars['timestamptz'];
  id: Scalars['Int'];
  raw_gst_return: Scalars['jsonb'];
  updated_at: Scalars['timestamptz'];
  updated_by: Scalars['Int'];
};


/** columns and relationships of "company_gst_return" */
export type Company_Gst_ReturnRaw_Gst_ReturnArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "company_gst_return" */
export type Company_Gst_Return_Aggregate = {
  __typename?: 'company_gst_return_aggregate';
  aggregate?: Maybe<Company_Gst_Return_Aggregate_Fields>;
  nodes: Array<Company_Gst_Return>;
};

/** aggregate fields of "company_gst_return" */
export type Company_Gst_Return_Aggregate_Fields = {
  __typename?: 'company_gst_return_aggregate_fields';
  avg?: Maybe<Company_Gst_Return_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Company_Gst_Return_Max_Fields>;
  min?: Maybe<Company_Gst_Return_Min_Fields>;
  stddev?: Maybe<Company_Gst_Return_Stddev_Fields>;
  stddev_pop?: Maybe<Company_Gst_Return_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Company_Gst_Return_Stddev_Samp_Fields>;
  sum?: Maybe<Company_Gst_Return_Sum_Fields>;
  var_pop?: Maybe<Company_Gst_Return_Var_Pop_Fields>;
  var_samp?: Maybe<Company_Gst_Return_Var_Samp_Fields>;
  variance?: Maybe<Company_Gst_Return_Variance_Fields>;
};


/** aggregate fields of "company_gst_return" */
export type Company_Gst_Return_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Company_Gst_Return_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Company_Gst_Return_Append_Input = {
  raw_gst_return?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Company_Gst_Return_Avg_Fields = {
  __typename?: 'company_gst_return_avg_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "company_gst_return". All fields are combined with a logical 'AND'. */
export type Company_Gst_Return_Bool_Exp = {
  _and?: InputMaybe<Array<Company_Gst_Return_Bool_Exp>>;
  _not?: InputMaybe<Company_Gst_Return_Bool_Exp>;
  _or?: InputMaybe<Array<Company_Gst_Return_Bool_Exp>>;
  company_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Int_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_by?: InputMaybe<Int_Comparison_Exp>;
  dof_timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  raw_gst_return?: InputMaybe<Jsonb_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "company_gst_return" */
export enum Company_Gst_Return_Constraint {
  /** unique or primary key constraint */
  CompanyGstReturnPkey = 'company_gst_return_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Company_Gst_Return_Delete_At_Path_Input = {
  raw_gst_return?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Company_Gst_Return_Delete_Elem_Input = {
  raw_gst_return?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Company_Gst_Return_Delete_Key_Input = {
  raw_gst_return?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "company_gst_return" */
export type Company_Gst_Return_Inc_Input = {
  company_id?: InputMaybe<Scalars['Int']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "company_gst_return" */
export type Company_Gst_Return_Insert_Input = {
  company_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  dof_timestamp?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  raw_gst_return?: InputMaybe<Scalars['jsonb']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Company_Gst_Return_Max_Fields = {
  __typename?: 'company_gst_return_max_fields';
  company_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  dof_timestamp?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Company_Gst_Return_Min_Fields = {
  __typename?: 'company_gst_return_min_fields';
  company_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  dof_timestamp?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "company_gst_return" */
export type Company_Gst_Return_Mutation_Response = {
  __typename?: 'company_gst_return_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Company_Gst_Return>;
};

/** on conflict condition type for table "company_gst_return" */
export type Company_Gst_Return_On_Conflict = {
  constraint: Company_Gst_Return_Constraint;
  update_columns?: Array<Company_Gst_Return_Update_Column>;
  where?: InputMaybe<Company_Gst_Return_Bool_Exp>;
};

/** Ordering options when selecting data from "company_gst_return". */
export type Company_Gst_Return_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  dof_timestamp?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  raw_gst_return?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** primary key columns input for table: company_gst_return */
export type Company_Gst_Return_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Company_Gst_Return_Prepend_Input = {
  raw_gst_return?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "company_gst_return" */
export enum Company_Gst_Return_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  DofTimestamp = 'dof_timestamp',
  /** column name */
  Id = 'id',
  /** column name */
  RawGstReturn = 'raw_gst_return',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** input type for updating data in table "company_gst_return" */
export type Company_Gst_Return_Set_Input = {
  company_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  dof_timestamp?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  raw_gst_return?: InputMaybe<Scalars['jsonb']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Company_Gst_Return_Stddev_Fields = {
  __typename?: 'company_gst_return_stddev_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Company_Gst_Return_Stddev_Pop_Fields = {
  __typename?: 'company_gst_return_stddev_pop_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Company_Gst_Return_Stddev_Samp_Fields = {
  __typename?: 'company_gst_return_stddev_samp_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Company_Gst_Return_Sum_Fields = {
  __typename?: 'company_gst_return_sum_fields';
  company_id?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** update columns of table "company_gst_return" */
export enum Company_Gst_Return_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  DofTimestamp = 'dof_timestamp',
  /** column name */
  Id = 'id',
  /** column name */
  RawGstReturn = 'raw_gst_return',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** aggregate var_pop on columns */
export type Company_Gst_Return_Var_Pop_Fields = {
  __typename?: 'company_gst_return_var_pop_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Company_Gst_Return_Var_Samp_Fields = {
  __typename?: 'company_gst_return_var_samp_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Company_Gst_Return_Variance_Fields = {
  __typename?: 'company_gst_return_variance_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** input type for incrementing numeric columns in table "company" */
export type Company_Inc_Input = {
  agreement_file_id?: InputMaybe<Scalars['Int']>;
  approved_by?: InputMaybe<Scalars['Int']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  estimated_arr?: InputMaybe<Scalars['numeric']>;
  id?: InputMaybe<Scalars['Int']>;
  min_tradable_value?: InputMaybe<Scalars['float8']>;
  total_customers?: InputMaybe<Scalars['Int']>;
  total_funding?: InputMaybe<Scalars['numeric']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "company" */
export type Company_Insert_Input = {
  accounts?: InputMaybe<Account_Arr_Rel_Insert_Input>;
  active_gstin?: InputMaybe<Scalars['String']>;
  agreement_file?: InputMaybe<File_Registry_Obj_Rel_Insert_Input>;
  agreement_file_id?: InputMaybe<Scalars['Int']>;
  agreement_signed_date?: InputMaybe<Scalars['timestamptz']>;
  approved_at?: InputMaybe<Scalars['timestamptz']>;
  approved_by?: InputMaybe<Scalars['Int']>;
  cin?: InputMaybe<Scalars['String']>;
  company_scores?: InputMaybe<Company_Score_Arr_Rel_Insert_Input>;
  company_type?: InputMaybe<Scalars['String']>;
  company_users?: InputMaybe<Company_User_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deals?: InputMaybe<Deal_Arr_Rel_Insert_Input>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  domain?: InputMaybe<Scalars['String']>;
  estimated_arr?: InputMaybe<Scalars['numeric']>;
  gstin?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['Int']>;
  incorporation_date?: InputMaybe<Scalars['date']>;
  marquee_customers?: InputMaybe<Scalars['String']>;
  marquee_investors?: InputMaybe<Scalars['jsonb']>;
  mca_profile?: InputMaybe<Scalars['jsonb']>;
  mca_signatories?: InputMaybe<Scalars['jsonb']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  min_tradable_value?: InputMaybe<Scalars['float8']>;
  name?: InputMaybe<Scalars['String']>;
  pan?: InputMaybe<Scalars['String']>;
  ref_company_type?: InputMaybe<Ref_Company_Type_Obj_Rel_Insert_Input>;
  status?: InputMaybe<Scalars['String']>;
  tenant_type?: InputMaybe<Scalars['String']>;
  total_customers?: InputMaybe<Scalars['Int']>;
  total_funding?: InputMaybe<Scalars['numeric']>;
  trades?: InputMaybe<Trade_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** columns and relationships of "company_integration" */
export type Company_Integration = {
  __typename?: 'company_integration';
  approved_at?: Maybe<Scalars['timestamptz']>;
  approved_by?: Maybe<Scalars['Int']>;
  category: Scalars['String'];
  /** An object relationship */
  company: Company;
  company_id: Scalars['Int'];
  /** An array relationship */
  company_integration_files: Array<Company_Integration_File>;
  /** An aggregate relationship */
  company_integration_files_aggregate: Company_Integration_File_Aggregate;
  created_at: Scalars['timestamptz'];
  created_by: Scalars['Int'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  end_time?: Maybe<Scalars['timestamptz']>;
  failure_reason?: Maybe<Scalars['jsonb']>;
  id: Scalars['Int'];
  /** An object relationship */
  integration_auth?: Maybe<Integration_Auth>;
  integration_auth_id?: Maybe<Scalars['Int']>;
  metadata?: Maybe<Scalars['jsonb']>;
  progress: Scalars['float8'];
  source: Scalars['String'];
  start_time?: Maybe<Scalars['timestamptz']>;
  status: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  updated_by: Scalars['Int'];
};


/** columns and relationships of "company_integration" */
export type Company_IntegrationCompany_Integration_FilesArgs = {
  distinct_on?: InputMaybe<Array<Company_Integration_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Integration_File_Order_By>>;
  where?: InputMaybe<Company_Integration_File_Bool_Exp>;
};


/** columns and relationships of "company_integration" */
export type Company_IntegrationCompany_Integration_Files_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Company_Integration_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Integration_File_Order_By>>;
  where?: InputMaybe<Company_Integration_File_Bool_Exp>;
};


/** columns and relationships of "company_integration" */
export type Company_IntegrationFailure_ReasonArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "company_integration" */
export type Company_IntegrationMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "company_integration" */
export type Company_Integration_Aggregate = {
  __typename?: 'company_integration_aggregate';
  aggregate?: Maybe<Company_Integration_Aggregate_Fields>;
  nodes: Array<Company_Integration>;
};

/** aggregate fields of "company_integration" */
export type Company_Integration_Aggregate_Fields = {
  __typename?: 'company_integration_aggregate_fields';
  avg?: Maybe<Company_Integration_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Company_Integration_Max_Fields>;
  min?: Maybe<Company_Integration_Min_Fields>;
  stddev?: Maybe<Company_Integration_Stddev_Fields>;
  stddev_pop?: Maybe<Company_Integration_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Company_Integration_Stddev_Samp_Fields>;
  sum?: Maybe<Company_Integration_Sum_Fields>;
  var_pop?: Maybe<Company_Integration_Var_Pop_Fields>;
  var_samp?: Maybe<Company_Integration_Var_Samp_Fields>;
  variance?: Maybe<Company_Integration_Variance_Fields>;
};


/** aggregate fields of "company_integration" */
export type Company_Integration_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Company_Integration_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "company_integration" */
export type Company_Integration_Aggregate_Order_By = {
  avg?: InputMaybe<Company_Integration_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Company_Integration_Max_Order_By>;
  min?: InputMaybe<Company_Integration_Min_Order_By>;
  stddev?: InputMaybe<Company_Integration_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Company_Integration_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Company_Integration_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Company_Integration_Sum_Order_By>;
  var_pop?: InputMaybe<Company_Integration_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Company_Integration_Var_Samp_Order_By>;
  variance?: InputMaybe<Company_Integration_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Company_Integration_Append_Input = {
  failure_reason?: InputMaybe<Scalars['jsonb']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "company_integration" */
export type Company_Integration_Arr_Rel_Insert_Input = {
  data: Array<Company_Integration_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Company_Integration_On_Conflict>;
};

/** aggregate avg on columns */
export type Company_Integration_Avg_Fields = {
  __typename?: 'company_integration_avg_fields';
  approved_by?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  integration_auth_id?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "company_integration" */
export type Company_Integration_Avg_Order_By = {
  approved_by?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  integration_auth_id?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "company_integration". All fields are combined with a logical 'AND'. */
export type Company_Integration_Bool_Exp = {
  _and?: InputMaybe<Array<Company_Integration_Bool_Exp>>;
  _not?: InputMaybe<Company_Integration_Bool_Exp>;
  _or?: InputMaybe<Array<Company_Integration_Bool_Exp>>;
  approved_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  approved_by?: InputMaybe<Int_Comparison_Exp>;
  category?: InputMaybe<String_Comparison_Exp>;
  company?: InputMaybe<Company_Bool_Exp>;
  company_id?: InputMaybe<Int_Comparison_Exp>;
  company_integration_files?: InputMaybe<Company_Integration_File_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Int_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_by?: InputMaybe<Int_Comparison_Exp>;
  end_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  failure_reason?: InputMaybe<Jsonb_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  integration_auth?: InputMaybe<Integration_Auth_Bool_Exp>;
  integration_auth_id?: InputMaybe<Int_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  progress?: InputMaybe<Float8_Comparison_Exp>;
  source?: InputMaybe<String_Comparison_Exp>;
  start_time?: InputMaybe<Timestamptz_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "company_integration" */
export enum Company_Integration_Constraint {
  /** unique or primary key constraint */
  CompanyIntegrationPkey = 'company_integration_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Company_Integration_Delete_At_Path_Input = {
  failure_reason?: InputMaybe<Array<Scalars['String']>>;
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Company_Integration_Delete_Elem_Input = {
  failure_reason?: InputMaybe<Scalars['Int']>;
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Company_Integration_Delete_Key_Input = {
  failure_reason?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "company_integration_file" */
export type Company_Integration_File = {
  __typename?: 'company_integration_file';
  /** An object relationship */
  company_integration: Company_Integration;
  company_integration_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  created_by: Scalars['Int'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  failure_reason?: Maybe<Scalars['jsonb']>;
  file_id: Scalars['Int'];
  /** An object relationship */
  file_registry: File_Registry;
  id: Scalars['Int'];
  status: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "company_integration_file" */
export type Company_Integration_FileFailure_ReasonArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "company_integration_file" */
export type Company_Integration_File_Aggregate = {
  __typename?: 'company_integration_file_aggregate';
  aggregate?: Maybe<Company_Integration_File_Aggregate_Fields>;
  nodes: Array<Company_Integration_File>;
};

/** aggregate fields of "company_integration_file" */
export type Company_Integration_File_Aggregate_Fields = {
  __typename?: 'company_integration_file_aggregate_fields';
  avg?: Maybe<Company_Integration_File_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Company_Integration_File_Max_Fields>;
  min?: Maybe<Company_Integration_File_Min_Fields>;
  stddev?: Maybe<Company_Integration_File_Stddev_Fields>;
  stddev_pop?: Maybe<Company_Integration_File_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Company_Integration_File_Stddev_Samp_Fields>;
  sum?: Maybe<Company_Integration_File_Sum_Fields>;
  var_pop?: Maybe<Company_Integration_File_Var_Pop_Fields>;
  var_samp?: Maybe<Company_Integration_File_Var_Samp_Fields>;
  variance?: Maybe<Company_Integration_File_Variance_Fields>;
};


/** aggregate fields of "company_integration_file" */
export type Company_Integration_File_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Company_Integration_File_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "company_integration_file" */
export type Company_Integration_File_Aggregate_Order_By = {
  avg?: InputMaybe<Company_Integration_File_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Company_Integration_File_Max_Order_By>;
  min?: InputMaybe<Company_Integration_File_Min_Order_By>;
  stddev?: InputMaybe<Company_Integration_File_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Company_Integration_File_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Company_Integration_File_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Company_Integration_File_Sum_Order_By>;
  var_pop?: InputMaybe<Company_Integration_File_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Company_Integration_File_Var_Samp_Order_By>;
  variance?: InputMaybe<Company_Integration_File_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Company_Integration_File_Append_Input = {
  failure_reason?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "company_integration_file" */
export type Company_Integration_File_Arr_Rel_Insert_Input = {
  data: Array<Company_Integration_File_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Company_Integration_File_On_Conflict>;
};

/** aggregate avg on columns */
export type Company_Integration_File_Avg_Fields = {
  __typename?: 'company_integration_file_avg_fields';
  company_integration_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  file_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "company_integration_file" */
export type Company_Integration_File_Avg_Order_By = {
  company_integration_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "company_integration_file". All fields are combined with a logical 'AND'. */
export type Company_Integration_File_Bool_Exp = {
  _and?: InputMaybe<Array<Company_Integration_File_Bool_Exp>>;
  _not?: InputMaybe<Company_Integration_File_Bool_Exp>;
  _or?: InputMaybe<Array<Company_Integration_File_Bool_Exp>>;
  company_integration?: InputMaybe<Company_Integration_Bool_Exp>;
  company_integration_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Int_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_by?: InputMaybe<Int_Comparison_Exp>;
  failure_reason?: InputMaybe<Jsonb_Comparison_Exp>;
  file_id?: InputMaybe<Int_Comparison_Exp>;
  file_registry?: InputMaybe<File_Registry_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "company_integration_file" */
export enum Company_Integration_File_Constraint {
  /** unique or primary key constraint */
  CompanyIntegrationFileCompanyInegrationIdFileIdKey = 'company_integration_file_company_inegration_id_file_id_key',
  /** unique or primary key constraint */
  CompanyIntegrationFilePkey = 'company_integration_file_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Company_Integration_File_Delete_At_Path_Input = {
  failure_reason?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Company_Integration_File_Delete_Elem_Input = {
  failure_reason?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Company_Integration_File_Delete_Key_Input = {
  failure_reason?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "company_integration_file" */
export type Company_Integration_File_Inc_Input = {
  company_integration_id?: InputMaybe<Scalars['Int']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  file_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "company_integration_file" */
export type Company_Integration_File_Insert_Input = {
  company_integration?: InputMaybe<Company_Integration_Obj_Rel_Insert_Input>;
  company_integration_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  failure_reason?: InputMaybe<Scalars['jsonb']>;
  file_id?: InputMaybe<Scalars['Int']>;
  file_registry?: InputMaybe<File_Registry_Obj_Rel_Insert_Input>;
  id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Company_Integration_File_Max_Fields = {
  __typename?: 'company_integration_file_max_fields';
  company_integration_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  file_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "company_integration_file" */
export type Company_Integration_File_Max_Order_By = {
  company_integration_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Company_Integration_File_Min_Fields = {
  __typename?: 'company_integration_file_min_fields';
  company_integration_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  file_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "company_integration_file" */
export type Company_Integration_File_Min_Order_By = {
  company_integration_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "company_integration_file" */
export type Company_Integration_File_Mutation_Response = {
  __typename?: 'company_integration_file_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Company_Integration_File>;
};

/** on conflict condition type for table "company_integration_file" */
export type Company_Integration_File_On_Conflict = {
  constraint: Company_Integration_File_Constraint;
  update_columns?: Array<Company_Integration_File_Update_Column>;
  where?: InputMaybe<Company_Integration_File_Bool_Exp>;
};

/** Ordering options when selecting data from "company_integration_file". */
export type Company_Integration_File_Order_By = {
  company_integration?: InputMaybe<Company_Integration_Order_By>;
  company_integration_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  failure_reason?: InputMaybe<Order_By>;
  file_id?: InputMaybe<Order_By>;
  file_registry?: InputMaybe<File_Registry_Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** primary key columns input for table: company_integration_file */
export type Company_Integration_File_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Company_Integration_File_Prepend_Input = {
  failure_reason?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "company_integration_file" */
export enum Company_Integration_File_Select_Column {
  /** column name */
  CompanyIntegrationId = 'company_integration_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  FailureReason = 'failure_reason',
  /** column name */
  FileId = 'file_id',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** input type for updating data in table "company_integration_file" */
export type Company_Integration_File_Set_Input = {
  company_integration_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  failure_reason?: InputMaybe<Scalars['jsonb']>;
  file_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Company_Integration_File_Stddev_Fields = {
  __typename?: 'company_integration_file_stddev_fields';
  company_integration_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  file_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "company_integration_file" */
export type Company_Integration_File_Stddev_Order_By = {
  company_integration_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Company_Integration_File_Stddev_Pop_Fields = {
  __typename?: 'company_integration_file_stddev_pop_fields';
  company_integration_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  file_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "company_integration_file" */
export type Company_Integration_File_Stddev_Pop_Order_By = {
  company_integration_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Company_Integration_File_Stddev_Samp_Fields = {
  __typename?: 'company_integration_file_stddev_samp_fields';
  company_integration_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  file_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "company_integration_file" */
export type Company_Integration_File_Stddev_Samp_Order_By = {
  company_integration_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Company_Integration_File_Sum_Fields = {
  __typename?: 'company_integration_file_sum_fields';
  company_integration_id?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_by?: Maybe<Scalars['Int']>;
  file_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "company_integration_file" */
export type Company_Integration_File_Sum_Order_By = {
  company_integration_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** update columns of table "company_integration_file" */
export enum Company_Integration_File_Update_Column {
  /** column name */
  CompanyIntegrationId = 'company_integration_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  FailureReason = 'failure_reason',
  /** column name */
  FileId = 'file_id',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** aggregate var_pop on columns */
export type Company_Integration_File_Var_Pop_Fields = {
  __typename?: 'company_integration_file_var_pop_fields';
  company_integration_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  file_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "company_integration_file" */
export type Company_Integration_File_Var_Pop_Order_By = {
  company_integration_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Company_Integration_File_Var_Samp_Fields = {
  __typename?: 'company_integration_file_var_samp_fields';
  company_integration_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  file_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "company_integration_file" */
export type Company_Integration_File_Var_Samp_Order_By = {
  company_integration_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Company_Integration_File_Variance_Fields = {
  __typename?: 'company_integration_file_variance_fields';
  company_integration_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  file_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "company_integration_file" */
export type Company_Integration_File_Variance_Order_By = {
  company_integration_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  file_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** input type for incrementing numeric columns in table "company_integration" */
export type Company_Integration_Inc_Input = {
  approved_by?: InputMaybe<Scalars['Int']>;
  company_id?: InputMaybe<Scalars['Int']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  integration_auth_id?: InputMaybe<Scalars['Int']>;
  progress?: InputMaybe<Scalars['float8']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "company_integration" */
export type Company_Integration_Insert_Input = {
  approved_at?: InputMaybe<Scalars['timestamptz']>;
  approved_by?: InputMaybe<Scalars['Int']>;
  category?: InputMaybe<Scalars['String']>;
  company?: InputMaybe<Company_Obj_Rel_Insert_Input>;
  company_id?: InputMaybe<Scalars['Int']>;
  company_integration_files?: InputMaybe<Company_Integration_File_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  end_time?: InputMaybe<Scalars['timestamptz']>;
  failure_reason?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['Int']>;
  integration_auth?: InputMaybe<Integration_Auth_Obj_Rel_Insert_Input>;
  integration_auth_id?: InputMaybe<Scalars['Int']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  progress?: InputMaybe<Scalars['float8']>;
  source?: InputMaybe<Scalars['String']>;
  start_time?: InputMaybe<Scalars['timestamptz']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Company_Integration_Max_Fields = {
  __typename?: 'company_integration_max_fields';
  approved_at?: Maybe<Scalars['timestamptz']>;
  approved_by?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['String']>;
  company_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  end_time?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  integration_auth_id?: Maybe<Scalars['Int']>;
  progress?: Maybe<Scalars['float8']>;
  source?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "company_integration" */
export type Company_Integration_Max_Order_By = {
  approved_at?: InputMaybe<Order_By>;
  approved_by?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  integration_auth_id?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Company_Integration_Min_Fields = {
  __typename?: 'company_integration_min_fields';
  approved_at?: Maybe<Scalars['timestamptz']>;
  approved_by?: Maybe<Scalars['Int']>;
  category?: Maybe<Scalars['String']>;
  company_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  end_time?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  integration_auth_id?: Maybe<Scalars['Int']>;
  progress?: Maybe<Scalars['float8']>;
  source?: Maybe<Scalars['String']>;
  start_time?: Maybe<Scalars['timestamptz']>;
  status?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "company_integration" */
export type Company_Integration_Min_Order_By = {
  approved_at?: InputMaybe<Order_By>;
  approved_by?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  integration_auth_id?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "company_integration" */
export type Company_Integration_Mutation_Response = {
  __typename?: 'company_integration_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Company_Integration>;
};

/** input type for inserting object relation for remote table "company_integration" */
export type Company_Integration_Obj_Rel_Insert_Input = {
  data: Company_Integration_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Company_Integration_On_Conflict>;
};

/** on conflict condition type for table "company_integration" */
export type Company_Integration_On_Conflict = {
  constraint: Company_Integration_Constraint;
  update_columns?: Array<Company_Integration_Update_Column>;
  where?: InputMaybe<Company_Integration_Bool_Exp>;
};

/** Ordering options when selecting data from "company_integration". */
export type Company_Integration_Order_By = {
  approved_at?: InputMaybe<Order_By>;
  approved_by?: InputMaybe<Order_By>;
  category?: InputMaybe<Order_By>;
  company?: InputMaybe<Company_Order_By>;
  company_id?: InputMaybe<Order_By>;
  company_integration_files_aggregate?: InputMaybe<Company_Integration_File_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  end_time?: InputMaybe<Order_By>;
  failure_reason?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  integration_auth?: InputMaybe<Integration_Auth_Order_By>;
  integration_auth_id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  start_time?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** primary key columns input for table: company_integration */
export type Company_Integration_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Company_Integration_Prepend_Input = {
  failure_reason?: InputMaybe<Scalars['jsonb']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "company_integration" */
export enum Company_Integration_Select_Column {
  /** column name */
  ApprovedAt = 'approved_at',
  /** column name */
  ApprovedBy = 'approved_by',
  /** column name */
  Category = 'category',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  FailureReason = 'failure_reason',
  /** column name */
  Id = 'id',
  /** column name */
  IntegrationAuthId = 'integration_auth_id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Progress = 'progress',
  /** column name */
  Source = 'source',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** input type for updating data in table "company_integration" */
export type Company_Integration_Set_Input = {
  approved_at?: InputMaybe<Scalars['timestamptz']>;
  approved_by?: InputMaybe<Scalars['Int']>;
  category?: InputMaybe<Scalars['String']>;
  company_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  end_time?: InputMaybe<Scalars['timestamptz']>;
  failure_reason?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['Int']>;
  integration_auth_id?: InputMaybe<Scalars['Int']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  progress?: InputMaybe<Scalars['float8']>;
  source?: InputMaybe<Scalars['String']>;
  start_time?: InputMaybe<Scalars['timestamptz']>;
  status?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Company_Integration_Stddev_Fields = {
  __typename?: 'company_integration_stddev_fields';
  approved_by?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  integration_auth_id?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "company_integration" */
export type Company_Integration_Stddev_Order_By = {
  approved_by?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  integration_auth_id?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Company_Integration_Stddev_Pop_Fields = {
  __typename?: 'company_integration_stddev_pop_fields';
  approved_by?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  integration_auth_id?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "company_integration" */
export type Company_Integration_Stddev_Pop_Order_By = {
  approved_by?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  integration_auth_id?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Company_Integration_Stddev_Samp_Fields = {
  __typename?: 'company_integration_stddev_samp_fields';
  approved_by?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  integration_auth_id?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "company_integration" */
export type Company_Integration_Stddev_Samp_Order_By = {
  approved_by?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  integration_auth_id?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Company_Integration_Sum_Fields = {
  __typename?: 'company_integration_sum_fields';
  approved_by?: Maybe<Scalars['Int']>;
  company_id?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  integration_auth_id?: Maybe<Scalars['Int']>;
  progress?: Maybe<Scalars['float8']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "company_integration" */
export type Company_Integration_Sum_Order_By = {
  approved_by?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  integration_auth_id?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** update columns of table "company_integration" */
export enum Company_Integration_Update_Column {
  /** column name */
  ApprovedAt = 'approved_at',
  /** column name */
  ApprovedBy = 'approved_by',
  /** column name */
  Category = 'category',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  EndTime = 'end_time',
  /** column name */
  FailureReason = 'failure_reason',
  /** column name */
  Id = 'id',
  /** column name */
  IntegrationAuthId = 'integration_auth_id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Progress = 'progress',
  /** column name */
  Source = 'source',
  /** column name */
  StartTime = 'start_time',
  /** column name */
  Status = 'status',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** aggregate var_pop on columns */
export type Company_Integration_Var_Pop_Fields = {
  __typename?: 'company_integration_var_pop_fields';
  approved_by?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  integration_auth_id?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "company_integration" */
export type Company_Integration_Var_Pop_Order_By = {
  approved_by?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  integration_auth_id?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Company_Integration_Var_Samp_Fields = {
  __typename?: 'company_integration_var_samp_fields';
  approved_by?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  integration_auth_id?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "company_integration" */
export type Company_Integration_Var_Samp_Order_By = {
  approved_by?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  integration_auth_id?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Company_Integration_Variance_Fields = {
  __typename?: 'company_integration_variance_fields';
  approved_by?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  integration_auth_id?: Maybe<Scalars['Float']>;
  progress?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "company_integration" */
export type Company_Integration_Variance_Order_By = {
  approved_by?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  integration_auth_id?: InputMaybe<Order_By>;
  progress?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate max on columns */
export type Company_Max_Fields = {
  __typename?: 'company_max_fields';
  active_gstin?: Maybe<Scalars['String']>;
  agreement_file_id?: Maybe<Scalars['Int']>;
  agreement_signed_date?: Maybe<Scalars['timestamptz']>;
  approved_at?: Maybe<Scalars['timestamptz']>;
  approved_by?: Maybe<Scalars['Int']>;
  cin?: Maybe<Scalars['String']>;
  company_type?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  estimated_arr?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  incorporation_date?: Maybe<Scalars['date']>;
  marquee_customers?: Maybe<Scalars['String']>;
  min_tradable_value?: Maybe<Scalars['float8']>;
  name?: Maybe<Scalars['String']>;
  pan?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  tenant_type?: Maybe<Scalars['String']>;
  total_customers?: Maybe<Scalars['Int']>;
  total_funding?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Company_Min_Fields = {
  __typename?: 'company_min_fields';
  active_gstin?: Maybe<Scalars['String']>;
  agreement_file_id?: Maybe<Scalars['Int']>;
  agreement_signed_date?: Maybe<Scalars['timestamptz']>;
  approved_at?: Maybe<Scalars['timestamptz']>;
  approved_by?: Maybe<Scalars['Int']>;
  cin?: Maybe<Scalars['String']>;
  company_type?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  domain?: Maybe<Scalars['String']>;
  estimated_arr?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  incorporation_date?: Maybe<Scalars['date']>;
  marquee_customers?: Maybe<Scalars['String']>;
  min_tradable_value?: Maybe<Scalars['float8']>;
  name?: Maybe<Scalars['String']>;
  pan?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  tenant_type?: Maybe<Scalars['String']>;
  total_customers?: Maybe<Scalars['Int']>;
  total_funding?: Maybe<Scalars['numeric']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "company" */
export type Company_Mutation_Response = {
  __typename?: 'company_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Company>;
};

/** input type for inserting object relation for remote table "company" */
export type Company_Obj_Rel_Insert_Input = {
  data: Company_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Company_On_Conflict>;
};

/** on conflict condition type for table "company" */
export type Company_On_Conflict = {
  constraint: Company_Constraint;
  update_columns?: Array<Company_Update_Column>;
  where?: InputMaybe<Company_Bool_Exp>;
};

/** Ordering options when selecting data from "company". */
export type Company_Order_By = {
  accounts_aggregate?: InputMaybe<Account_Aggregate_Order_By>;
  active_gstin?: InputMaybe<Order_By>;
  agreement_file?: InputMaybe<File_Registry_Order_By>;
  agreement_file_id?: InputMaybe<Order_By>;
  agreement_signed_date?: InputMaybe<Order_By>;
  approved_at?: InputMaybe<Order_By>;
  approved_by?: InputMaybe<Order_By>;
  cin?: InputMaybe<Order_By>;
  company_scores_aggregate?: InputMaybe<Company_Score_Aggregate_Order_By>;
  company_type?: InputMaybe<Order_By>;
  company_users_aggregate?: InputMaybe<Company_User_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deals_aggregate?: InputMaybe<Deal_Aggregate_Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  description?: InputMaybe<Order_By>;
  domain?: InputMaybe<Order_By>;
  estimated_arr?: InputMaybe<Order_By>;
  gstin?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  incorporation_date?: InputMaybe<Order_By>;
  marquee_customers?: InputMaybe<Order_By>;
  marquee_investors?: InputMaybe<Order_By>;
  mca_profile?: InputMaybe<Order_By>;
  mca_signatories?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  min_tradable_value?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  pan?: InputMaybe<Order_By>;
  ref_company_type?: InputMaybe<Ref_Company_Type_Order_By>;
  remaining_tradable_value?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  tenant_type?: InputMaybe<Order_By>;
  total_customers?: InputMaybe<Order_By>;
  total_funding?: InputMaybe<Order_By>;
  trades_aggregate?: InputMaybe<Trade_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** primary key columns input for table: company */
export type Company_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Company_Prepend_Input = {
  gstin?: InputMaybe<Scalars['jsonb']>;
  marquee_investors?: InputMaybe<Scalars['jsonb']>;
  mca_profile?: InputMaybe<Scalars['jsonb']>;
  mca_signatories?: InputMaybe<Scalars['jsonb']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** columns and relationships of "company_score" */
export type Company_Score = {
  __typename?: 'company_score';
  arpa?: Maybe<Scalars['float8']>;
  arr: Scalars['float8'];
  business_growth_score: Scalars['float8'];
  capital_efficiency?: Maybe<Scalars['numeric']>;
  capital_efficiency_score: Scalars['float8'];
  churn?: Maybe<Scalars['float8']>;
  /** An object relationship */
  company: Company;
  company_id: Scalars['Int'];
  compliance_score?: Maybe<Scalars['float8']>;
  created_at: Scalars['timestamptz'];
  created_by: Scalars['Int'];
  customer_retention: Scalars['float8'];
  customer_value_score: Scalars['float8'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  dtoe_ratio?: Maybe<Scalars['float8']>;
  estimated_runway: Scalars['Int'];
  facility_limit: Scalars['float8'];
  financials_score: Scalars['float8'];
  gross_margin: Scalars['float8'];
  id: Scalars['Int'];
  ltv?: Maybe<Scalars['float8']>;
  ltv_cac: Scalars['float8'];
  management_score: Scalars['float8'];
  max_recommended_bid: Scalars['float8'];
  min_bid_price: Scalars['float8'];
  min_recommended_bid: Scalars['float8'];
  mrr_growth?: Maybe<Scalars['float8']>;
  net_cash_flow?: Maybe<Scalars['float8']>;
  net_profit?: Maybe<Scalars['float8']>;
  payback_period: Scalars['Int'];
  rating: Scalars['float8'];
  report_file_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  report_file_registry?: Maybe<File_Registry>;
  revenue_retention: Scalars['float8'];
  updated_at: Scalars['timestamptz'];
  updated_by?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['String']>;
};

/** aggregated selection of "company_score" */
export type Company_Score_Aggregate = {
  __typename?: 'company_score_aggregate';
  aggregate?: Maybe<Company_Score_Aggregate_Fields>;
  nodes: Array<Company_Score>;
};

/** aggregate fields of "company_score" */
export type Company_Score_Aggregate_Fields = {
  __typename?: 'company_score_aggregate_fields';
  avg?: Maybe<Company_Score_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Company_Score_Max_Fields>;
  min?: Maybe<Company_Score_Min_Fields>;
  stddev?: Maybe<Company_Score_Stddev_Fields>;
  stddev_pop?: Maybe<Company_Score_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Company_Score_Stddev_Samp_Fields>;
  sum?: Maybe<Company_Score_Sum_Fields>;
  var_pop?: Maybe<Company_Score_Var_Pop_Fields>;
  var_samp?: Maybe<Company_Score_Var_Samp_Fields>;
  variance?: Maybe<Company_Score_Variance_Fields>;
};


/** aggregate fields of "company_score" */
export type Company_Score_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Company_Score_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "company_score" */
export type Company_Score_Aggregate_Order_By = {
  avg?: InputMaybe<Company_Score_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Company_Score_Max_Order_By>;
  min?: InputMaybe<Company_Score_Min_Order_By>;
  stddev?: InputMaybe<Company_Score_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Company_Score_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Company_Score_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Company_Score_Sum_Order_By>;
  var_pop?: InputMaybe<Company_Score_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Company_Score_Var_Samp_Order_By>;
  variance?: InputMaybe<Company_Score_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "company_score" */
export type Company_Score_Arr_Rel_Insert_Input = {
  data: Array<Company_Score_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Company_Score_On_Conflict>;
};

/** aggregate avg on columns */
export type Company_Score_Avg_Fields = {
  __typename?: 'company_score_avg_fields';
  arpa?: Maybe<Scalars['Float']>;
  arr?: Maybe<Scalars['Float']>;
  business_growth_score?: Maybe<Scalars['Float']>;
  capital_efficiency?: Maybe<Scalars['Float']>;
  capital_efficiency_score?: Maybe<Scalars['Float']>;
  churn?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  compliance_score?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  customer_retention?: Maybe<Scalars['Float']>;
  customer_value_score?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  dtoe_ratio?: Maybe<Scalars['Float']>;
  estimated_runway?: Maybe<Scalars['Float']>;
  facility_limit?: Maybe<Scalars['Float']>;
  financials_score?: Maybe<Scalars['Float']>;
  gross_margin?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  ltv?: Maybe<Scalars['Float']>;
  ltv_cac?: Maybe<Scalars['Float']>;
  management_score?: Maybe<Scalars['Float']>;
  max_recommended_bid?: Maybe<Scalars['Float']>;
  min_bid_price?: Maybe<Scalars['Float']>;
  min_recommended_bid?: Maybe<Scalars['Float']>;
  mrr_growth?: Maybe<Scalars['Float']>;
  net_cash_flow?: Maybe<Scalars['Float']>;
  net_profit?: Maybe<Scalars['Float']>;
  payback_period?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  report_file_id?: Maybe<Scalars['Float']>;
  revenue_retention?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "company_score" */
export type Company_Score_Avg_Order_By = {
  arpa?: InputMaybe<Order_By>;
  arr?: InputMaybe<Order_By>;
  business_growth_score?: InputMaybe<Order_By>;
  capital_efficiency?: InputMaybe<Order_By>;
  capital_efficiency_score?: InputMaybe<Order_By>;
  churn?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  compliance_score?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  customer_retention?: InputMaybe<Order_By>;
  customer_value_score?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  dtoe_ratio?: InputMaybe<Order_By>;
  estimated_runway?: InputMaybe<Order_By>;
  facility_limit?: InputMaybe<Order_By>;
  financials_score?: InputMaybe<Order_By>;
  gross_margin?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ltv?: InputMaybe<Order_By>;
  ltv_cac?: InputMaybe<Order_By>;
  management_score?: InputMaybe<Order_By>;
  max_recommended_bid?: InputMaybe<Order_By>;
  min_bid_price?: InputMaybe<Order_By>;
  min_recommended_bid?: InputMaybe<Order_By>;
  mrr_growth?: InputMaybe<Order_By>;
  net_cash_flow?: InputMaybe<Order_By>;
  net_profit?: InputMaybe<Order_By>;
  payback_period?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  report_file_id?: InputMaybe<Order_By>;
  revenue_retention?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "company_score". All fields are combined with a logical 'AND'. */
export type Company_Score_Bool_Exp = {
  _and?: InputMaybe<Array<Company_Score_Bool_Exp>>;
  _not?: InputMaybe<Company_Score_Bool_Exp>;
  _or?: InputMaybe<Array<Company_Score_Bool_Exp>>;
  arpa?: InputMaybe<Float8_Comparison_Exp>;
  arr?: InputMaybe<Float8_Comparison_Exp>;
  business_growth_score?: InputMaybe<Float8_Comparison_Exp>;
  capital_efficiency?: InputMaybe<Numeric_Comparison_Exp>;
  capital_efficiency_score?: InputMaybe<Float8_Comparison_Exp>;
  churn?: InputMaybe<Float8_Comparison_Exp>;
  company?: InputMaybe<Company_Bool_Exp>;
  company_id?: InputMaybe<Int_Comparison_Exp>;
  compliance_score?: InputMaybe<Float8_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Int_Comparison_Exp>;
  customer_retention?: InputMaybe<Float8_Comparison_Exp>;
  customer_value_score?: InputMaybe<Float8_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_by?: InputMaybe<Int_Comparison_Exp>;
  dtoe_ratio?: InputMaybe<Float8_Comparison_Exp>;
  estimated_runway?: InputMaybe<Int_Comparison_Exp>;
  facility_limit?: InputMaybe<Float8_Comparison_Exp>;
  financials_score?: InputMaybe<Float8_Comparison_Exp>;
  gross_margin?: InputMaybe<Float8_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  ltv?: InputMaybe<Float8_Comparison_Exp>;
  ltv_cac?: InputMaybe<Float8_Comparison_Exp>;
  management_score?: InputMaybe<Float8_Comparison_Exp>;
  max_recommended_bid?: InputMaybe<Float8_Comparison_Exp>;
  min_bid_price?: InputMaybe<Float8_Comparison_Exp>;
  min_recommended_bid?: InputMaybe<Float8_Comparison_Exp>;
  mrr_growth?: InputMaybe<Float8_Comparison_Exp>;
  net_cash_flow?: InputMaybe<Float8_Comparison_Exp>;
  net_profit?: InputMaybe<Float8_Comparison_Exp>;
  payback_period?: InputMaybe<Int_Comparison_Exp>;
  rating?: InputMaybe<Float8_Comparison_Exp>;
  report_file_id?: InputMaybe<Int_Comparison_Exp>;
  report_file_registry?: InputMaybe<File_Registry_Bool_Exp>;
  revenue_retention?: InputMaybe<Float8_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Int_Comparison_Exp>;
  version?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "company_score" */
export enum Company_Score_Constraint {
  /** unique or primary key constraint */
  CompanyScorePkey = 'company_score_pkey'
}

/** input type for incrementing numeric columns in table "company_score" */
export type Company_Score_Inc_Input = {
  arpa?: InputMaybe<Scalars['float8']>;
  arr?: InputMaybe<Scalars['float8']>;
  business_growth_score?: InputMaybe<Scalars['float8']>;
  capital_efficiency?: InputMaybe<Scalars['numeric']>;
  capital_efficiency_score?: InputMaybe<Scalars['float8']>;
  churn?: InputMaybe<Scalars['float8']>;
  company_id?: InputMaybe<Scalars['Int']>;
  compliance_score?: InputMaybe<Scalars['float8']>;
  created_by?: InputMaybe<Scalars['Int']>;
  customer_retention?: InputMaybe<Scalars['float8']>;
  customer_value_score?: InputMaybe<Scalars['float8']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  dtoe_ratio?: InputMaybe<Scalars['float8']>;
  estimated_runway?: InputMaybe<Scalars['Int']>;
  facility_limit?: InputMaybe<Scalars['float8']>;
  financials_score?: InputMaybe<Scalars['float8']>;
  gross_margin?: InputMaybe<Scalars['float8']>;
  id?: InputMaybe<Scalars['Int']>;
  ltv?: InputMaybe<Scalars['float8']>;
  ltv_cac?: InputMaybe<Scalars['float8']>;
  management_score?: InputMaybe<Scalars['float8']>;
  max_recommended_bid?: InputMaybe<Scalars['float8']>;
  min_bid_price?: InputMaybe<Scalars['float8']>;
  min_recommended_bid?: InputMaybe<Scalars['float8']>;
  mrr_growth?: InputMaybe<Scalars['float8']>;
  net_cash_flow?: InputMaybe<Scalars['float8']>;
  net_profit?: InputMaybe<Scalars['float8']>;
  payback_period?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['float8']>;
  report_file_id?: InputMaybe<Scalars['Int']>;
  revenue_retention?: InputMaybe<Scalars['float8']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "company_score" */
export type Company_Score_Insert_Input = {
  arpa?: InputMaybe<Scalars['float8']>;
  arr?: InputMaybe<Scalars['float8']>;
  business_growth_score?: InputMaybe<Scalars['float8']>;
  capital_efficiency?: InputMaybe<Scalars['numeric']>;
  capital_efficiency_score?: InputMaybe<Scalars['float8']>;
  churn?: InputMaybe<Scalars['float8']>;
  company?: InputMaybe<Company_Obj_Rel_Insert_Input>;
  company_id?: InputMaybe<Scalars['Int']>;
  compliance_score?: InputMaybe<Scalars['float8']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  customer_retention?: InputMaybe<Scalars['float8']>;
  customer_value_score?: InputMaybe<Scalars['float8']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  dtoe_ratio?: InputMaybe<Scalars['float8']>;
  estimated_runway?: InputMaybe<Scalars['Int']>;
  facility_limit?: InputMaybe<Scalars['float8']>;
  financials_score?: InputMaybe<Scalars['float8']>;
  gross_margin?: InputMaybe<Scalars['float8']>;
  id?: InputMaybe<Scalars['Int']>;
  ltv?: InputMaybe<Scalars['float8']>;
  ltv_cac?: InputMaybe<Scalars['float8']>;
  management_score?: InputMaybe<Scalars['float8']>;
  max_recommended_bid?: InputMaybe<Scalars['float8']>;
  min_bid_price?: InputMaybe<Scalars['float8']>;
  min_recommended_bid?: InputMaybe<Scalars['float8']>;
  mrr_growth?: InputMaybe<Scalars['float8']>;
  net_cash_flow?: InputMaybe<Scalars['float8']>;
  net_profit?: InputMaybe<Scalars['float8']>;
  payback_period?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['float8']>;
  report_file_id?: InputMaybe<Scalars['Int']>;
  report_file_registry?: InputMaybe<File_Registry_Obj_Rel_Insert_Input>;
  revenue_retention?: InputMaybe<Scalars['float8']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
  version?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Company_Score_Max_Fields = {
  __typename?: 'company_score_max_fields';
  arpa?: Maybe<Scalars['float8']>;
  arr?: Maybe<Scalars['float8']>;
  business_growth_score?: Maybe<Scalars['float8']>;
  capital_efficiency?: Maybe<Scalars['numeric']>;
  capital_efficiency_score?: Maybe<Scalars['float8']>;
  churn?: Maybe<Scalars['float8']>;
  company_id?: Maybe<Scalars['Int']>;
  compliance_score?: Maybe<Scalars['float8']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  customer_retention?: Maybe<Scalars['float8']>;
  customer_value_score?: Maybe<Scalars['float8']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  dtoe_ratio?: Maybe<Scalars['float8']>;
  estimated_runway?: Maybe<Scalars['Int']>;
  facility_limit?: Maybe<Scalars['float8']>;
  financials_score?: Maybe<Scalars['float8']>;
  gross_margin?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['Int']>;
  ltv?: Maybe<Scalars['float8']>;
  ltv_cac?: Maybe<Scalars['float8']>;
  management_score?: Maybe<Scalars['float8']>;
  max_recommended_bid?: Maybe<Scalars['float8']>;
  min_bid_price?: Maybe<Scalars['float8']>;
  min_recommended_bid?: Maybe<Scalars['float8']>;
  mrr_growth?: Maybe<Scalars['float8']>;
  net_cash_flow?: Maybe<Scalars['float8']>;
  net_profit?: Maybe<Scalars['float8']>;
  payback_period?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['float8']>;
  report_file_id?: Maybe<Scalars['Int']>;
  revenue_retention?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "company_score" */
export type Company_Score_Max_Order_By = {
  arpa?: InputMaybe<Order_By>;
  arr?: InputMaybe<Order_By>;
  business_growth_score?: InputMaybe<Order_By>;
  capital_efficiency?: InputMaybe<Order_By>;
  capital_efficiency_score?: InputMaybe<Order_By>;
  churn?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  compliance_score?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  customer_retention?: InputMaybe<Order_By>;
  customer_value_score?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  dtoe_ratio?: InputMaybe<Order_By>;
  estimated_runway?: InputMaybe<Order_By>;
  facility_limit?: InputMaybe<Order_By>;
  financials_score?: InputMaybe<Order_By>;
  gross_margin?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ltv?: InputMaybe<Order_By>;
  ltv_cac?: InputMaybe<Order_By>;
  management_score?: InputMaybe<Order_By>;
  max_recommended_bid?: InputMaybe<Order_By>;
  min_bid_price?: InputMaybe<Order_By>;
  min_recommended_bid?: InputMaybe<Order_By>;
  mrr_growth?: InputMaybe<Order_By>;
  net_cash_flow?: InputMaybe<Order_By>;
  net_profit?: InputMaybe<Order_By>;
  payback_period?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  report_file_id?: InputMaybe<Order_By>;
  revenue_retention?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Company_Score_Min_Fields = {
  __typename?: 'company_score_min_fields';
  arpa?: Maybe<Scalars['float8']>;
  arr?: Maybe<Scalars['float8']>;
  business_growth_score?: Maybe<Scalars['float8']>;
  capital_efficiency?: Maybe<Scalars['numeric']>;
  capital_efficiency_score?: Maybe<Scalars['float8']>;
  churn?: Maybe<Scalars['float8']>;
  company_id?: Maybe<Scalars['Int']>;
  compliance_score?: Maybe<Scalars['float8']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  customer_retention?: Maybe<Scalars['float8']>;
  customer_value_score?: Maybe<Scalars['float8']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  dtoe_ratio?: Maybe<Scalars['float8']>;
  estimated_runway?: Maybe<Scalars['Int']>;
  facility_limit?: Maybe<Scalars['float8']>;
  financials_score?: Maybe<Scalars['float8']>;
  gross_margin?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['Int']>;
  ltv?: Maybe<Scalars['float8']>;
  ltv_cac?: Maybe<Scalars['float8']>;
  management_score?: Maybe<Scalars['float8']>;
  max_recommended_bid?: Maybe<Scalars['float8']>;
  min_bid_price?: Maybe<Scalars['float8']>;
  min_recommended_bid?: Maybe<Scalars['float8']>;
  mrr_growth?: Maybe<Scalars['float8']>;
  net_cash_flow?: Maybe<Scalars['float8']>;
  net_profit?: Maybe<Scalars['float8']>;
  payback_period?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['float8']>;
  report_file_id?: Maybe<Scalars['Int']>;
  revenue_retention?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
  version?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "company_score" */
export type Company_Score_Min_Order_By = {
  arpa?: InputMaybe<Order_By>;
  arr?: InputMaybe<Order_By>;
  business_growth_score?: InputMaybe<Order_By>;
  capital_efficiency?: InputMaybe<Order_By>;
  capital_efficiency_score?: InputMaybe<Order_By>;
  churn?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  compliance_score?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  customer_retention?: InputMaybe<Order_By>;
  customer_value_score?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  dtoe_ratio?: InputMaybe<Order_By>;
  estimated_runway?: InputMaybe<Order_By>;
  facility_limit?: InputMaybe<Order_By>;
  financials_score?: InputMaybe<Order_By>;
  gross_margin?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ltv?: InputMaybe<Order_By>;
  ltv_cac?: InputMaybe<Order_By>;
  management_score?: InputMaybe<Order_By>;
  max_recommended_bid?: InputMaybe<Order_By>;
  min_bid_price?: InputMaybe<Order_By>;
  min_recommended_bid?: InputMaybe<Order_By>;
  mrr_growth?: InputMaybe<Order_By>;
  net_cash_flow?: InputMaybe<Order_By>;
  net_profit?: InputMaybe<Order_By>;
  payback_period?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  report_file_id?: InputMaybe<Order_By>;
  revenue_retention?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "company_score" */
export type Company_Score_Mutation_Response = {
  __typename?: 'company_score_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Company_Score>;
};

/** input type for inserting object relation for remote table "company_score" */
export type Company_Score_Obj_Rel_Insert_Input = {
  data: Company_Score_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Company_Score_On_Conflict>;
};

/** on conflict condition type for table "company_score" */
export type Company_Score_On_Conflict = {
  constraint: Company_Score_Constraint;
  update_columns?: Array<Company_Score_Update_Column>;
  where?: InputMaybe<Company_Score_Bool_Exp>;
};

/** Ordering options when selecting data from "company_score". */
export type Company_Score_Order_By = {
  arpa?: InputMaybe<Order_By>;
  arr?: InputMaybe<Order_By>;
  business_growth_score?: InputMaybe<Order_By>;
  capital_efficiency?: InputMaybe<Order_By>;
  capital_efficiency_score?: InputMaybe<Order_By>;
  churn?: InputMaybe<Order_By>;
  company?: InputMaybe<Company_Order_By>;
  company_id?: InputMaybe<Order_By>;
  compliance_score?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  customer_retention?: InputMaybe<Order_By>;
  customer_value_score?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  dtoe_ratio?: InputMaybe<Order_By>;
  estimated_runway?: InputMaybe<Order_By>;
  facility_limit?: InputMaybe<Order_By>;
  financials_score?: InputMaybe<Order_By>;
  gross_margin?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ltv?: InputMaybe<Order_By>;
  ltv_cac?: InputMaybe<Order_By>;
  management_score?: InputMaybe<Order_By>;
  max_recommended_bid?: InputMaybe<Order_By>;
  min_bid_price?: InputMaybe<Order_By>;
  min_recommended_bid?: InputMaybe<Order_By>;
  mrr_growth?: InputMaybe<Order_By>;
  net_cash_flow?: InputMaybe<Order_By>;
  net_profit?: InputMaybe<Order_By>;
  payback_period?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  report_file_id?: InputMaybe<Order_By>;
  report_file_registry?: InputMaybe<File_Registry_Order_By>;
  revenue_retention?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  version?: InputMaybe<Order_By>;
};

/** primary key columns input for table: company_score */
export type Company_Score_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "company_score" */
export enum Company_Score_Select_Column {
  /** column name */
  Arpa = 'arpa',
  /** column name */
  Arr = 'arr',
  /** column name */
  BusinessGrowthScore = 'business_growth_score',
  /** column name */
  CapitalEfficiency = 'capital_efficiency',
  /** column name */
  CapitalEfficiencyScore = 'capital_efficiency_score',
  /** column name */
  Churn = 'churn',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  ComplianceScore = 'compliance_score',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  CustomerRetention = 'customer_retention',
  /** column name */
  CustomerValueScore = 'customer_value_score',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  DtoeRatio = 'dtoe_ratio',
  /** column name */
  EstimatedRunway = 'estimated_runway',
  /** column name */
  FacilityLimit = 'facility_limit',
  /** column name */
  FinancialsScore = 'financials_score',
  /** column name */
  GrossMargin = 'gross_margin',
  /** column name */
  Id = 'id',
  /** column name */
  Ltv = 'ltv',
  /** column name */
  LtvCac = 'ltv_cac',
  /** column name */
  ManagementScore = 'management_score',
  /** column name */
  MaxRecommendedBid = 'max_recommended_bid',
  /** column name */
  MinBidPrice = 'min_bid_price',
  /** column name */
  MinRecommendedBid = 'min_recommended_bid',
  /** column name */
  MrrGrowth = 'mrr_growth',
  /** column name */
  NetCashFlow = 'net_cash_flow',
  /** column name */
  NetProfit = 'net_profit',
  /** column name */
  PaybackPeriod = 'payback_period',
  /** column name */
  Rating = 'rating',
  /** column name */
  ReportFileId = 'report_file_id',
  /** column name */
  RevenueRetention = 'revenue_retention',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by',
  /** column name */
  Version = 'version'
}

/** input type for updating data in table "company_score" */
export type Company_Score_Set_Input = {
  arpa?: InputMaybe<Scalars['float8']>;
  arr?: InputMaybe<Scalars['float8']>;
  business_growth_score?: InputMaybe<Scalars['float8']>;
  capital_efficiency?: InputMaybe<Scalars['numeric']>;
  capital_efficiency_score?: InputMaybe<Scalars['float8']>;
  churn?: InputMaybe<Scalars['float8']>;
  company_id?: InputMaybe<Scalars['Int']>;
  compliance_score?: InputMaybe<Scalars['float8']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  customer_retention?: InputMaybe<Scalars['float8']>;
  customer_value_score?: InputMaybe<Scalars['float8']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  dtoe_ratio?: InputMaybe<Scalars['float8']>;
  estimated_runway?: InputMaybe<Scalars['Int']>;
  facility_limit?: InputMaybe<Scalars['float8']>;
  financials_score?: InputMaybe<Scalars['float8']>;
  gross_margin?: InputMaybe<Scalars['float8']>;
  id?: InputMaybe<Scalars['Int']>;
  ltv?: InputMaybe<Scalars['float8']>;
  ltv_cac?: InputMaybe<Scalars['float8']>;
  management_score?: InputMaybe<Scalars['float8']>;
  max_recommended_bid?: InputMaybe<Scalars['float8']>;
  min_bid_price?: InputMaybe<Scalars['float8']>;
  min_recommended_bid?: InputMaybe<Scalars['float8']>;
  mrr_growth?: InputMaybe<Scalars['float8']>;
  net_cash_flow?: InputMaybe<Scalars['float8']>;
  net_profit?: InputMaybe<Scalars['float8']>;
  payback_period?: InputMaybe<Scalars['Int']>;
  rating?: InputMaybe<Scalars['float8']>;
  report_file_id?: InputMaybe<Scalars['Int']>;
  revenue_retention?: InputMaybe<Scalars['float8']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
  version?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Company_Score_Stddev_Fields = {
  __typename?: 'company_score_stddev_fields';
  arpa?: Maybe<Scalars['Float']>;
  arr?: Maybe<Scalars['Float']>;
  business_growth_score?: Maybe<Scalars['Float']>;
  capital_efficiency?: Maybe<Scalars['Float']>;
  capital_efficiency_score?: Maybe<Scalars['Float']>;
  churn?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  compliance_score?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  customer_retention?: Maybe<Scalars['Float']>;
  customer_value_score?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  dtoe_ratio?: Maybe<Scalars['Float']>;
  estimated_runway?: Maybe<Scalars['Float']>;
  facility_limit?: Maybe<Scalars['Float']>;
  financials_score?: Maybe<Scalars['Float']>;
  gross_margin?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  ltv?: Maybe<Scalars['Float']>;
  ltv_cac?: Maybe<Scalars['Float']>;
  management_score?: Maybe<Scalars['Float']>;
  max_recommended_bid?: Maybe<Scalars['Float']>;
  min_bid_price?: Maybe<Scalars['Float']>;
  min_recommended_bid?: Maybe<Scalars['Float']>;
  mrr_growth?: Maybe<Scalars['Float']>;
  net_cash_flow?: Maybe<Scalars['Float']>;
  net_profit?: Maybe<Scalars['Float']>;
  payback_period?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  report_file_id?: Maybe<Scalars['Float']>;
  revenue_retention?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "company_score" */
export type Company_Score_Stddev_Order_By = {
  arpa?: InputMaybe<Order_By>;
  arr?: InputMaybe<Order_By>;
  business_growth_score?: InputMaybe<Order_By>;
  capital_efficiency?: InputMaybe<Order_By>;
  capital_efficiency_score?: InputMaybe<Order_By>;
  churn?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  compliance_score?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  customer_retention?: InputMaybe<Order_By>;
  customer_value_score?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  dtoe_ratio?: InputMaybe<Order_By>;
  estimated_runway?: InputMaybe<Order_By>;
  facility_limit?: InputMaybe<Order_By>;
  financials_score?: InputMaybe<Order_By>;
  gross_margin?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ltv?: InputMaybe<Order_By>;
  ltv_cac?: InputMaybe<Order_By>;
  management_score?: InputMaybe<Order_By>;
  max_recommended_bid?: InputMaybe<Order_By>;
  min_bid_price?: InputMaybe<Order_By>;
  min_recommended_bid?: InputMaybe<Order_By>;
  mrr_growth?: InputMaybe<Order_By>;
  net_cash_flow?: InputMaybe<Order_By>;
  net_profit?: InputMaybe<Order_By>;
  payback_period?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  report_file_id?: InputMaybe<Order_By>;
  revenue_retention?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Company_Score_Stddev_Pop_Fields = {
  __typename?: 'company_score_stddev_pop_fields';
  arpa?: Maybe<Scalars['Float']>;
  arr?: Maybe<Scalars['Float']>;
  business_growth_score?: Maybe<Scalars['Float']>;
  capital_efficiency?: Maybe<Scalars['Float']>;
  capital_efficiency_score?: Maybe<Scalars['Float']>;
  churn?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  compliance_score?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  customer_retention?: Maybe<Scalars['Float']>;
  customer_value_score?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  dtoe_ratio?: Maybe<Scalars['Float']>;
  estimated_runway?: Maybe<Scalars['Float']>;
  facility_limit?: Maybe<Scalars['Float']>;
  financials_score?: Maybe<Scalars['Float']>;
  gross_margin?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  ltv?: Maybe<Scalars['Float']>;
  ltv_cac?: Maybe<Scalars['Float']>;
  management_score?: Maybe<Scalars['Float']>;
  max_recommended_bid?: Maybe<Scalars['Float']>;
  min_bid_price?: Maybe<Scalars['Float']>;
  min_recommended_bid?: Maybe<Scalars['Float']>;
  mrr_growth?: Maybe<Scalars['Float']>;
  net_cash_flow?: Maybe<Scalars['Float']>;
  net_profit?: Maybe<Scalars['Float']>;
  payback_period?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  report_file_id?: Maybe<Scalars['Float']>;
  revenue_retention?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "company_score" */
export type Company_Score_Stddev_Pop_Order_By = {
  arpa?: InputMaybe<Order_By>;
  arr?: InputMaybe<Order_By>;
  business_growth_score?: InputMaybe<Order_By>;
  capital_efficiency?: InputMaybe<Order_By>;
  capital_efficiency_score?: InputMaybe<Order_By>;
  churn?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  compliance_score?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  customer_retention?: InputMaybe<Order_By>;
  customer_value_score?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  dtoe_ratio?: InputMaybe<Order_By>;
  estimated_runway?: InputMaybe<Order_By>;
  facility_limit?: InputMaybe<Order_By>;
  financials_score?: InputMaybe<Order_By>;
  gross_margin?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ltv?: InputMaybe<Order_By>;
  ltv_cac?: InputMaybe<Order_By>;
  management_score?: InputMaybe<Order_By>;
  max_recommended_bid?: InputMaybe<Order_By>;
  min_bid_price?: InputMaybe<Order_By>;
  min_recommended_bid?: InputMaybe<Order_By>;
  mrr_growth?: InputMaybe<Order_By>;
  net_cash_flow?: InputMaybe<Order_By>;
  net_profit?: InputMaybe<Order_By>;
  payback_period?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  report_file_id?: InputMaybe<Order_By>;
  revenue_retention?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Company_Score_Stddev_Samp_Fields = {
  __typename?: 'company_score_stddev_samp_fields';
  arpa?: Maybe<Scalars['Float']>;
  arr?: Maybe<Scalars['Float']>;
  business_growth_score?: Maybe<Scalars['Float']>;
  capital_efficiency?: Maybe<Scalars['Float']>;
  capital_efficiency_score?: Maybe<Scalars['Float']>;
  churn?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  compliance_score?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  customer_retention?: Maybe<Scalars['Float']>;
  customer_value_score?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  dtoe_ratio?: Maybe<Scalars['Float']>;
  estimated_runway?: Maybe<Scalars['Float']>;
  facility_limit?: Maybe<Scalars['Float']>;
  financials_score?: Maybe<Scalars['Float']>;
  gross_margin?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  ltv?: Maybe<Scalars['Float']>;
  ltv_cac?: Maybe<Scalars['Float']>;
  management_score?: Maybe<Scalars['Float']>;
  max_recommended_bid?: Maybe<Scalars['Float']>;
  min_bid_price?: Maybe<Scalars['Float']>;
  min_recommended_bid?: Maybe<Scalars['Float']>;
  mrr_growth?: Maybe<Scalars['Float']>;
  net_cash_flow?: Maybe<Scalars['Float']>;
  net_profit?: Maybe<Scalars['Float']>;
  payback_period?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  report_file_id?: Maybe<Scalars['Float']>;
  revenue_retention?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "company_score" */
export type Company_Score_Stddev_Samp_Order_By = {
  arpa?: InputMaybe<Order_By>;
  arr?: InputMaybe<Order_By>;
  business_growth_score?: InputMaybe<Order_By>;
  capital_efficiency?: InputMaybe<Order_By>;
  capital_efficiency_score?: InputMaybe<Order_By>;
  churn?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  compliance_score?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  customer_retention?: InputMaybe<Order_By>;
  customer_value_score?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  dtoe_ratio?: InputMaybe<Order_By>;
  estimated_runway?: InputMaybe<Order_By>;
  facility_limit?: InputMaybe<Order_By>;
  financials_score?: InputMaybe<Order_By>;
  gross_margin?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ltv?: InputMaybe<Order_By>;
  ltv_cac?: InputMaybe<Order_By>;
  management_score?: InputMaybe<Order_By>;
  max_recommended_bid?: InputMaybe<Order_By>;
  min_bid_price?: InputMaybe<Order_By>;
  min_recommended_bid?: InputMaybe<Order_By>;
  mrr_growth?: InputMaybe<Order_By>;
  net_cash_flow?: InputMaybe<Order_By>;
  net_profit?: InputMaybe<Order_By>;
  payback_period?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  report_file_id?: InputMaybe<Order_By>;
  revenue_retention?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Company_Score_Sum_Fields = {
  __typename?: 'company_score_sum_fields';
  arpa?: Maybe<Scalars['float8']>;
  arr?: Maybe<Scalars['float8']>;
  business_growth_score?: Maybe<Scalars['float8']>;
  capital_efficiency?: Maybe<Scalars['numeric']>;
  capital_efficiency_score?: Maybe<Scalars['float8']>;
  churn?: Maybe<Scalars['float8']>;
  company_id?: Maybe<Scalars['Int']>;
  compliance_score?: Maybe<Scalars['float8']>;
  created_by?: Maybe<Scalars['Int']>;
  customer_retention?: Maybe<Scalars['float8']>;
  customer_value_score?: Maybe<Scalars['float8']>;
  deleted_by?: Maybe<Scalars['Int']>;
  dtoe_ratio?: Maybe<Scalars['float8']>;
  estimated_runway?: Maybe<Scalars['Int']>;
  facility_limit?: Maybe<Scalars['float8']>;
  financials_score?: Maybe<Scalars['float8']>;
  gross_margin?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['Int']>;
  ltv?: Maybe<Scalars['float8']>;
  ltv_cac?: Maybe<Scalars['float8']>;
  management_score?: Maybe<Scalars['float8']>;
  max_recommended_bid?: Maybe<Scalars['float8']>;
  min_bid_price?: Maybe<Scalars['float8']>;
  min_recommended_bid?: Maybe<Scalars['float8']>;
  mrr_growth?: Maybe<Scalars['float8']>;
  net_cash_flow?: Maybe<Scalars['float8']>;
  net_profit?: Maybe<Scalars['float8']>;
  payback_period?: Maybe<Scalars['Int']>;
  rating?: Maybe<Scalars['float8']>;
  report_file_id?: Maybe<Scalars['Int']>;
  revenue_retention?: Maybe<Scalars['float8']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "company_score" */
export type Company_Score_Sum_Order_By = {
  arpa?: InputMaybe<Order_By>;
  arr?: InputMaybe<Order_By>;
  business_growth_score?: InputMaybe<Order_By>;
  capital_efficiency?: InputMaybe<Order_By>;
  capital_efficiency_score?: InputMaybe<Order_By>;
  churn?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  compliance_score?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  customer_retention?: InputMaybe<Order_By>;
  customer_value_score?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  dtoe_ratio?: InputMaybe<Order_By>;
  estimated_runway?: InputMaybe<Order_By>;
  facility_limit?: InputMaybe<Order_By>;
  financials_score?: InputMaybe<Order_By>;
  gross_margin?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ltv?: InputMaybe<Order_By>;
  ltv_cac?: InputMaybe<Order_By>;
  management_score?: InputMaybe<Order_By>;
  max_recommended_bid?: InputMaybe<Order_By>;
  min_bid_price?: InputMaybe<Order_By>;
  min_recommended_bid?: InputMaybe<Order_By>;
  mrr_growth?: InputMaybe<Order_By>;
  net_cash_flow?: InputMaybe<Order_By>;
  net_profit?: InputMaybe<Order_By>;
  payback_period?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  report_file_id?: InputMaybe<Order_By>;
  revenue_retention?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** update columns of table "company_score" */
export enum Company_Score_Update_Column {
  /** column name */
  Arpa = 'arpa',
  /** column name */
  Arr = 'arr',
  /** column name */
  BusinessGrowthScore = 'business_growth_score',
  /** column name */
  CapitalEfficiency = 'capital_efficiency',
  /** column name */
  CapitalEfficiencyScore = 'capital_efficiency_score',
  /** column name */
  Churn = 'churn',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  ComplianceScore = 'compliance_score',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  CustomerRetention = 'customer_retention',
  /** column name */
  CustomerValueScore = 'customer_value_score',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  DtoeRatio = 'dtoe_ratio',
  /** column name */
  EstimatedRunway = 'estimated_runway',
  /** column name */
  FacilityLimit = 'facility_limit',
  /** column name */
  FinancialsScore = 'financials_score',
  /** column name */
  GrossMargin = 'gross_margin',
  /** column name */
  Id = 'id',
  /** column name */
  Ltv = 'ltv',
  /** column name */
  LtvCac = 'ltv_cac',
  /** column name */
  ManagementScore = 'management_score',
  /** column name */
  MaxRecommendedBid = 'max_recommended_bid',
  /** column name */
  MinBidPrice = 'min_bid_price',
  /** column name */
  MinRecommendedBid = 'min_recommended_bid',
  /** column name */
  MrrGrowth = 'mrr_growth',
  /** column name */
  NetCashFlow = 'net_cash_flow',
  /** column name */
  NetProfit = 'net_profit',
  /** column name */
  PaybackPeriod = 'payback_period',
  /** column name */
  Rating = 'rating',
  /** column name */
  ReportFileId = 'report_file_id',
  /** column name */
  RevenueRetention = 'revenue_retention',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by',
  /** column name */
  Version = 'version'
}

/** aggregate var_pop on columns */
export type Company_Score_Var_Pop_Fields = {
  __typename?: 'company_score_var_pop_fields';
  arpa?: Maybe<Scalars['Float']>;
  arr?: Maybe<Scalars['Float']>;
  business_growth_score?: Maybe<Scalars['Float']>;
  capital_efficiency?: Maybe<Scalars['Float']>;
  capital_efficiency_score?: Maybe<Scalars['Float']>;
  churn?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  compliance_score?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  customer_retention?: Maybe<Scalars['Float']>;
  customer_value_score?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  dtoe_ratio?: Maybe<Scalars['Float']>;
  estimated_runway?: Maybe<Scalars['Float']>;
  facility_limit?: Maybe<Scalars['Float']>;
  financials_score?: Maybe<Scalars['Float']>;
  gross_margin?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  ltv?: Maybe<Scalars['Float']>;
  ltv_cac?: Maybe<Scalars['Float']>;
  management_score?: Maybe<Scalars['Float']>;
  max_recommended_bid?: Maybe<Scalars['Float']>;
  min_bid_price?: Maybe<Scalars['Float']>;
  min_recommended_bid?: Maybe<Scalars['Float']>;
  mrr_growth?: Maybe<Scalars['Float']>;
  net_cash_flow?: Maybe<Scalars['Float']>;
  net_profit?: Maybe<Scalars['Float']>;
  payback_period?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  report_file_id?: Maybe<Scalars['Float']>;
  revenue_retention?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "company_score" */
export type Company_Score_Var_Pop_Order_By = {
  arpa?: InputMaybe<Order_By>;
  arr?: InputMaybe<Order_By>;
  business_growth_score?: InputMaybe<Order_By>;
  capital_efficiency?: InputMaybe<Order_By>;
  capital_efficiency_score?: InputMaybe<Order_By>;
  churn?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  compliance_score?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  customer_retention?: InputMaybe<Order_By>;
  customer_value_score?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  dtoe_ratio?: InputMaybe<Order_By>;
  estimated_runway?: InputMaybe<Order_By>;
  facility_limit?: InputMaybe<Order_By>;
  financials_score?: InputMaybe<Order_By>;
  gross_margin?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ltv?: InputMaybe<Order_By>;
  ltv_cac?: InputMaybe<Order_By>;
  management_score?: InputMaybe<Order_By>;
  max_recommended_bid?: InputMaybe<Order_By>;
  min_bid_price?: InputMaybe<Order_By>;
  min_recommended_bid?: InputMaybe<Order_By>;
  mrr_growth?: InputMaybe<Order_By>;
  net_cash_flow?: InputMaybe<Order_By>;
  net_profit?: InputMaybe<Order_By>;
  payback_period?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  report_file_id?: InputMaybe<Order_By>;
  revenue_retention?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Company_Score_Var_Samp_Fields = {
  __typename?: 'company_score_var_samp_fields';
  arpa?: Maybe<Scalars['Float']>;
  arr?: Maybe<Scalars['Float']>;
  business_growth_score?: Maybe<Scalars['Float']>;
  capital_efficiency?: Maybe<Scalars['Float']>;
  capital_efficiency_score?: Maybe<Scalars['Float']>;
  churn?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  compliance_score?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  customer_retention?: Maybe<Scalars['Float']>;
  customer_value_score?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  dtoe_ratio?: Maybe<Scalars['Float']>;
  estimated_runway?: Maybe<Scalars['Float']>;
  facility_limit?: Maybe<Scalars['Float']>;
  financials_score?: Maybe<Scalars['Float']>;
  gross_margin?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  ltv?: Maybe<Scalars['Float']>;
  ltv_cac?: Maybe<Scalars['Float']>;
  management_score?: Maybe<Scalars['Float']>;
  max_recommended_bid?: Maybe<Scalars['Float']>;
  min_bid_price?: Maybe<Scalars['Float']>;
  min_recommended_bid?: Maybe<Scalars['Float']>;
  mrr_growth?: Maybe<Scalars['Float']>;
  net_cash_flow?: Maybe<Scalars['Float']>;
  net_profit?: Maybe<Scalars['Float']>;
  payback_period?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  report_file_id?: Maybe<Scalars['Float']>;
  revenue_retention?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "company_score" */
export type Company_Score_Var_Samp_Order_By = {
  arpa?: InputMaybe<Order_By>;
  arr?: InputMaybe<Order_By>;
  business_growth_score?: InputMaybe<Order_By>;
  capital_efficiency?: InputMaybe<Order_By>;
  capital_efficiency_score?: InputMaybe<Order_By>;
  churn?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  compliance_score?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  customer_retention?: InputMaybe<Order_By>;
  customer_value_score?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  dtoe_ratio?: InputMaybe<Order_By>;
  estimated_runway?: InputMaybe<Order_By>;
  facility_limit?: InputMaybe<Order_By>;
  financials_score?: InputMaybe<Order_By>;
  gross_margin?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ltv?: InputMaybe<Order_By>;
  ltv_cac?: InputMaybe<Order_By>;
  management_score?: InputMaybe<Order_By>;
  max_recommended_bid?: InputMaybe<Order_By>;
  min_bid_price?: InputMaybe<Order_By>;
  min_recommended_bid?: InputMaybe<Order_By>;
  mrr_growth?: InputMaybe<Order_By>;
  net_cash_flow?: InputMaybe<Order_By>;
  net_profit?: InputMaybe<Order_By>;
  payback_period?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  report_file_id?: InputMaybe<Order_By>;
  revenue_retention?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Company_Score_Variance_Fields = {
  __typename?: 'company_score_variance_fields';
  arpa?: Maybe<Scalars['Float']>;
  arr?: Maybe<Scalars['Float']>;
  business_growth_score?: Maybe<Scalars['Float']>;
  capital_efficiency?: Maybe<Scalars['Float']>;
  capital_efficiency_score?: Maybe<Scalars['Float']>;
  churn?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  compliance_score?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  customer_retention?: Maybe<Scalars['Float']>;
  customer_value_score?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  dtoe_ratio?: Maybe<Scalars['Float']>;
  estimated_runway?: Maybe<Scalars['Float']>;
  facility_limit?: Maybe<Scalars['Float']>;
  financials_score?: Maybe<Scalars['Float']>;
  gross_margin?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  ltv?: Maybe<Scalars['Float']>;
  ltv_cac?: Maybe<Scalars['Float']>;
  management_score?: Maybe<Scalars['Float']>;
  max_recommended_bid?: Maybe<Scalars['Float']>;
  min_bid_price?: Maybe<Scalars['Float']>;
  min_recommended_bid?: Maybe<Scalars['Float']>;
  mrr_growth?: Maybe<Scalars['Float']>;
  net_cash_flow?: Maybe<Scalars['Float']>;
  net_profit?: Maybe<Scalars['Float']>;
  payback_period?: Maybe<Scalars['Float']>;
  rating?: Maybe<Scalars['Float']>;
  report_file_id?: Maybe<Scalars['Float']>;
  revenue_retention?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "company_score" */
export type Company_Score_Variance_Order_By = {
  arpa?: InputMaybe<Order_By>;
  arr?: InputMaybe<Order_By>;
  business_growth_score?: InputMaybe<Order_By>;
  capital_efficiency?: InputMaybe<Order_By>;
  capital_efficiency_score?: InputMaybe<Order_By>;
  churn?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  compliance_score?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  customer_retention?: InputMaybe<Order_By>;
  customer_value_score?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  dtoe_ratio?: InputMaybe<Order_By>;
  estimated_runway?: InputMaybe<Order_By>;
  facility_limit?: InputMaybe<Order_By>;
  financials_score?: InputMaybe<Order_By>;
  gross_margin?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  ltv?: InputMaybe<Order_By>;
  ltv_cac?: InputMaybe<Order_By>;
  management_score?: InputMaybe<Order_By>;
  max_recommended_bid?: InputMaybe<Order_By>;
  min_bid_price?: InputMaybe<Order_By>;
  min_recommended_bid?: InputMaybe<Order_By>;
  mrr_growth?: InputMaybe<Order_By>;
  net_cash_flow?: InputMaybe<Order_By>;
  net_profit?: InputMaybe<Order_By>;
  payback_period?: InputMaybe<Order_By>;
  rating?: InputMaybe<Order_By>;
  report_file_id?: InputMaybe<Order_By>;
  revenue_retention?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** select columns of table "company" */
export enum Company_Select_Column {
  /** column name */
  ActiveGstin = 'active_gstin',
  /** column name */
  AgreementFileId = 'agreement_file_id',
  /** column name */
  AgreementSignedDate = 'agreement_signed_date',
  /** column name */
  ApprovedAt = 'approved_at',
  /** column name */
  ApprovedBy = 'approved_by',
  /** column name */
  Cin = 'cin',
  /** column name */
  CompanyType = 'company_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  Description = 'description',
  /** column name */
  Domain = 'domain',
  /** column name */
  EstimatedArr = 'estimated_arr',
  /** column name */
  Gstin = 'gstin',
  /** column name */
  Id = 'id',
  /** column name */
  IncorporationDate = 'incorporation_date',
  /** column name */
  MarqueeCustomers = 'marquee_customers',
  /** column name */
  MarqueeInvestors = 'marquee_investors',
  /** column name */
  McaProfile = 'mca_profile',
  /** column name */
  McaSignatories = 'mca_signatories',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MinTradableValue = 'min_tradable_value',
  /** column name */
  Name = 'name',
  /** column name */
  Pan = 'pan',
  /** column name */
  Status = 'status',
  /** column name */
  TenantType = 'tenant_type',
  /** column name */
  TotalCustomers = 'total_customers',
  /** column name */
  TotalFunding = 'total_funding',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** input type for updating data in table "company" */
export type Company_Set_Input = {
  active_gstin?: InputMaybe<Scalars['String']>;
  agreement_file_id?: InputMaybe<Scalars['Int']>;
  agreement_signed_date?: InputMaybe<Scalars['timestamptz']>;
  approved_at?: InputMaybe<Scalars['timestamptz']>;
  approved_by?: InputMaybe<Scalars['Int']>;
  cin?: InputMaybe<Scalars['String']>;
  company_type?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  domain?: InputMaybe<Scalars['String']>;
  estimated_arr?: InputMaybe<Scalars['numeric']>;
  gstin?: InputMaybe<Scalars['jsonb']>;
  id?: InputMaybe<Scalars['Int']>;
  incorporation_date?: InputMaybe<Scalars['date']>;
  marquee_customers?: InputMaybe<Scalars['String']>;
  marquee_investors?: InputMaybe<Scalars['jsonb']>;
  mca_profile?: InputMaybe<Scalars['jsonb']>;
  mca_signatories?: InputMaybe<Scalars['jsonb']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  min_tradable_value?: InputMaybe<Scalars['float8']>;
  name?: InputMaybe<Scalars['String']>;
  pan?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  tenant_type?: InputMaybe<Scalars['String']>;
  total_customers?: InputMaybe<Scalars['Int']>;
  total_funding?: InputMaybe<Scalars['numeric']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** columns and relationships of "company_statement" */
export type Company_Statement = {
  __typename?: 'company_statement';
  amount: Scalars['float8'];
  balance: Scalars['float8'];
  company_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  created_by: Scalars['Int'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  metadata?: Maybe<Scalars['jsonb']>;
  timestamp: Scalars['timestamptz'];
  transaction_status: Scalars['String'];
  transaction_type: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  updated_by: Scalars['Int'];
};


/** columns and relationships of "company_statement" */
export type Company_StatementMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "company_statement" */
export type Company_Statement_Aggregate = {
  __typename?: 'company_statement_aggregate';
  aggregate?: Maybe<Company_Statement_Aggregate_Fields>;
  nodes: Array<Company_Statement>;
};

/** aggregate fields of "company_statement" */
export type Company_Statement_Aggregate_Fields = {
  __typename?: 'company_statement_aggregate_fields';
  avg?: Maybe<Company_Statement_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Company_Statement_Max_Fields>;
  min?: Maybe<Company_Statement_Min_Fields>;
  stddev?: Maybe<Company_Statement_Stddev_Fields>;
  stddev_pop?: Maybe<Company_Statement_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Company_Statement_Stddev_Samp_Fields>;
  sum?: Maybe<Company_Statement_Sum_Fields>;
  var_pop?: Maybe<Company_Statement_Var_Pop_Fields>;
  var_samp?: Maybe<Company_Statement_Var_Samp_Fields>;
  variance?: Maybe<Company_Statement_Variance_Fields>;
};


/** aggregate fields of "company_statement" */
export type Company_Statement_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Company_Statement_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Company_Statement_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Company_Statement_Avg_Fields = {
  __typename?: 'company_statement_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  balance?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "company_statement". All fields are combined with a logical 'AND'. */
export type Company_Statement_Bool_Exp = {
  _and?: InputMaybe<Array<Company_Statement_Bool_Exp>>;
  _not?: InputMaybe<Company_Statement_Bool_Exp>;
  _or?: InputMaybe<Array<Company_Statement_Bool_Exp>>;
  amount?: InputMaybe<Float8_Comparison_Exp>;
  balance?: InputMaybe<Float8_Comparison_Exp>;
  company_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Int_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_by?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  transaction_status?: InputMaybe<String_Comparison_Exp>;
  transaction_type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "company_statement" */
export enum Company_Statement_Constraint {
  /** unique or primary key constraint */
  CompanyStatementPkey = 'company_statement_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Company_Statement_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Company_Statement_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Company_Statement_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "company_statement" */
export type Company_Statement_Inc_Input = {
  amount?: InputMaybe<Scalars['float8']>;
  balance?: InputMaybe<Scalars['float8']>;
  company_id?: InputMaybe<Scalars['Int']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "company_statement" */
export type Company_Statement_Insert_Input = {
  amount?: InputMaybe<Scalars['float8']>;
  balance?: InputMaybe<Scalars['float8']>;
  company_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  transaction_status?: InputMaybe<Scalars['String']>;
  transaction_type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Company_Statement_Max_Fields = {
  __typename?: 'company_statement_max_fields';
  amount?: Maybe<Scalars['float8']>;
  balance?: Maybe<Scalars['float8']>;
  company_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  transaction_status?: Maybe<Scalars['String']>;
  transaction_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Company_Statement_Min_Fields = {
  __typename?: 'company_statement_min_fields';
  amount?: Maybe<Scalars['float8']>;
  balance?: Maybe<Scalars['float8']>;
  company_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  transaction_status?: Maybe<Scalars['String']>;
  transaction_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "company_statement" */
export type Company_Statement_Mutation_Response = {
  __typename?: 'company_statement_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Company_Statement>;
};

/** on conflict condition type for table "company_statement" */
export type Company_Statement_On_Conflict = {
  constraint: Company_Statement_Constraint;
  update_columns?: Array<Company_Statement_Update_Column>;
  where?: InputMaybe<Company_Statement_Bool_Exp>;
};

/** Ordering options when selecting data from "company_statement". */
export type Company_Statement_Order_By = {
  amount?: InputMaybe<Order_By>;
  balance?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  transaction_status?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** primary key columns input for table: company_statement */
export type Company_Statement_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Company_Statement_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "company_statement" */
export enum Company_Statement_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Balance = 'balance',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TransactionStatus = 'transaction_status',
  /** column name */
  TransactionType = 'transaction_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** input type for updating data in table "company_statement" */
export type Company_Statement_Set_Input = {
  amount?: InputMaybe<Scalars['float8']>;
  balance?: InputMaybe<Scalars['float8']>;
  company_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  transaction_status?: InputMaybe<Scalars['String']>;
  transaction_type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Company_Statement_Stddev_Fields = {
  __typename?: 'company_statement_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  balance?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Company_Statement_Stddev_Pop_Fields = {
  __typename?: 'company_statement_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  balance?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Company_Statement_Stddev_Samp_Fields = {
  __typename?: 'company_statement_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  balance?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Company_Statement_Sum_Fields = {
  __typename?: 'company_statement_sum_fields';
  amount?: Maybe<Scalars['float8']>;
  balance?: Maybe<Scalars['float8']>;
  company_id?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** update columns of table "company_statement" */
export enum Company_Statement_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Balance = 'balance',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TransactionStatus = 'transaction_status',
  /** column name */
  TransactionType = 'transaction_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** aggregate var_pop on columns */
export type Company_Statement_Var_Pop_Fields = {
  __typename?: 'company_statement_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  balance?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Company_Statement_Var_Samp_Fields = {
  __typename?: 'company_statement_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  balance?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Company_Statement_Variance_Fields = {
  __typename?: 'company_statement_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  balance?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate stddev on columns */
export type Company_Stddev_Fields = {
  __typename?: 'company_stddev_fields';
  agreement_file_id?: Maybe<Scalars['Float']>;
  approved_by?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  estimated_arr?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  min_tradable_value?: Maybe<Scalars['Float']>;
  total_customers?: Maybe<Scalars['Float']>;
  total_funding?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Company_Stddev_Pop_Fields = {
  __typename?: 'company_stddev_pop_fields';
  agreement_file_id?: Maybe<Scalars['Float']>;
  approved_by?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  estimated_arr?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  min_tradable_value?: Maybe<Scalars['Float']>;
  total_customers?: Maybe<Scalars['Float']>;
  total_funding?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Company_Stddev_Samp_Fields = {
  __typename?: 'company_stddev_samp_fields';
  agreement_file_id?: Maybe<Scalars['Float']>;
  approved_by?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  estimated_arr?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  min_tradable_value?: Maybe<Scalars['Float']>;
  total_customers?: Maybe<Scalars['Float']>;
  total_funding?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Company_Sum_Fields = {
  __typename?: 'company_sum_fields';
  agreement_file_id?: Maybe<Scalars['Int']>;
  approved_by?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_by?: Maybe<Scalars['Int']>;
  estimated_arr?: Maybe<Scalars['numeric']>;
  id?: Maybe<Scalars['Int']>;
  min_tradable_value?: Maybe<Scalars['float8']>;
  total_customers?: Maybe<Scalars['Int']>;
  total_funding?: Maybe<Scalars['numeric']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** update columns of table "company" */
export enum Company_Update_Column {
  /** column name */
  ActiveGstin = 'active_gstin',
  /** column name */
  AgreementFileId = 'agreement_file_id',
  /** column name */
  AgreementSignedDate = 'agreement_signed_date',
  /** column name */
  ApprovedAt = 'approved_at',
  /** column name */
  ApprovedBy = 'approved_by',
  /** column name */
  Cin = 'cin',
  /** column name */
  CompanyType = 'company_type',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  Description = 'description',
  /** column name */
  Domain = 'domain',
  /** column name */
  EstimatedArr = 'estimated_arr',
  /** column name */
  Gstin = 'gstin',
  /** column name */
  Id = 'id',
  /** column name */
  IncorporationDate = 'incorporation_date',
  /** column name */
  MarqueeCustomers = 'marquee_customers',
  /** column name */
  MarqueeInvestors = 'marquee_investors',
  /** column name */
  McaProfile = 'mca_profile',
  /** column name */
  McaSignatories = 'mca_signatories',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  MinTradableValue = 'min_tradable_value',
  /** column name */
  Name = 'name',
  /** column name */
  Pan = 'pan',
  /** column name */
  Status = 'status',
  /** column name */
  TenantType = 'tenant_type',
  /** column name */
  TotalCustomers = 'total_customers',
  /** column name */
  TotalFunding = 'total_funding',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** columns and relationships of "company_user" */
export type Company_User = {
  __typename?: 'company_user';
  /** An object relationship */
  company: Company;
  company_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  created_by: Scalars['Int'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  pan?: Maybe<Scalars['String']>;
  privacy_policy_version: Scalars['Int'];
  terms_conditions_version: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
  updated_by: Scalars['Int'];
  /** An object relationship */
  user: User;
  user_id: Scalars['Int'];
};

/** aggregated selection of "company_user" */
export type Company_User_Aggregate = {
  __typename?: 'company_user_aggregate';
  aggregate?: Maybe<Company_User_Aggregate_Fields>;
  nodes: Array<Company_User>;
};

/** aggregate fields of "company_user" */
export type Company_User_Aggregate_Fields = {
  __typename?: 'company_user_aggregate_fields';
  avg?: Maybe<Company_User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Company_User_Max_Fields>;
  min?: Maybe<Company_User_Min_Fields>;
  stddev?: Maybe<Company_User_Stddev_Fields>;
  stddev_pop?: Maybe<Company_User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Company_User_Stddev_Samp_Fields>;
  sum?: Maybe<Company_User_Sum_Fields>;
  var_pop?: Maybe<Company_User_Var_Pop_Fields>;
  var_samp?: Maybe<Company_User_Var_Samp_Fields>;
  variance?: Maybe<Company_User_Variance_Fields>;
};


/** aggregate fields of "company_user" */
export type Company_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Company_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "company_user" */
export type Company_User_Aggregate_Order_By = {
  avg?: InputMaybe<Company_User_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Company_User_Max_Order_By>;
  min?: InputMaybe<Company_User_Min_Order_By>;
  stddev?: InputMaybe<Company_User_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Company_User_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Company_User_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Company_User_Sum_Order_By>;
  var_pop?: InputMaybe<Company_User_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Company_User_Var_Samp_Order_By>;
  variance?: InputMaybe<Company_User_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "company_user" */
export type Company_User_Arr_Rel_Insert_Input = {
  data: Array<Company_User_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Company_User_On_Conflict>;
};

/** aggregate avg on columns */
export type Company_User_Avg_Fields = {
  __typename?: 'company_user_avg_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  privacy_policy_version?: Maybe<Scalars['Float']>;
  terms_conditions_version?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "company_user" */
export type Company_User_Avg_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  privacy_policy_version?: InputMaybe<Order_By>;
  terms_conditions_version?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "company_user". All fields are combined with a logical 'AND'. */
export type Company_User_Bool_Exp = {
  _and?: InputMaybe<Array<Company_User_Bool_Exp>>;
  _not?: InputMaybe<Company_User_Bool_Exp>;
  _or?: InputMaybe<Array<Company_User_Bool_Exp>>;
  company?: InputMaybe<Company_Bool_Exp>;
  company_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Int_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_by?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  pan?: InputMaybe<String_Comparison_Exp>;
  privacy_policy_version?: InputMaybe<Int_Comparison_Exp>;
  terms_conditions_version?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "company_user" */
export enum Company_User_Constraint {
  /** unique or primary key constraint */
  CompanyUserPkey = 'company_user_pkey',
  /** unique or primary key constraint */
  CompanyUserUserIdIdx = 'company_user_user_id_idx'
}

/** input type for incrementing numeric columns in table "company_user" */
export type Company_User_Inc_Input = {
  company_id?: InputMaybe<Scalars['Int']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  privacy_policy_version?: InputMaybe<Scalars['Int']>;
  terms_conditions_version?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "company_user" */
export type Company_User_Insert_Input = {
  company?: InputMaybe<Company_Obj_Rel_Insert_Input>;
  company_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  pan?: InputMaybe<Scalars['String']>;
  privacy_policy_version?: InputMaybe<Scalars['Int']>;
  terms_conditions_version?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Company_User_Max_Fields = {
  __typename?: 'company_user_max_fields';
  company_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  pan?: Maybe<Scalars['String']>;
  privacy_policy_version?: Maybe<Scalars['Int']>;
  terms_conditions_version?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "company_user" */
export type Company_User_Max_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pan?: InputMaybe<Order_By>;
  privacy_policy_version?: InputMaybe<Order_By>;
  terms_conditions_version?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Company_User_Min_Fields = {
  __typename?: 'company_user_min_fields';
  company_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  pan?: Maybe<Scalars['String']>;
  privacy_policy_version?: Maybe<Scalars['Int']>;
  terms_conditions_version?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "company_user" */
export type Company_User_Min_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pan?: InputMaybe<Order_By>;
  privacy_policy_version?: InputMaybe<Order_By>;
  terms_conditions_version?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "company_user" */
export type Company_User_Mutation_Response = {
  __typename?: 'company_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Company_User>;
};

/** on conflict condition type for table "company_user" */
export type Company_User_On_Conflict = {
  constraint: Company_User_Constraint;
  update_columns?: Array<Company_User_Update_Column>;
  where?: InputMaybe<Company_User_Bool_Exp>;
};

/** Ordering options when selecting data from "company_user". */
export type Company_User_Order_By = {
  company?: InputMaybe<Company_Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  pan?: InputMaybe<Order_By>;
  privacy_policy_version?: InputMaybe<Order_By>;
  terms_conditions_version?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: company_user */
export type Company_User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "company_user" */
export enum Company_User_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  Id = 'id',
  /** column name */
  Pan = 'pan',
  /** column name */
  PrivacyPolicyVersion = 'privacy_policy_version',
  /** column name */
  TermsConditionsVersion = 'terms_conditions_version',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "company_user" */
export type Company_User_Set_Input = {
  company_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  pan?: InputMaybe<Scalars['String']>;
  privacy_policy_version?: InputMaybe<Scalars['Int']>;
  terms_conditions_version?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Company_User_Stddev_Fields = {
  __typename?: 'company_user_stddev_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  privacy_policy_version?: Maybe<Scalars['Float']>;
  terms_conditions_version?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "company_user" */
export type Company_User_Stddev_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  privacy_policy_version?: InputMaybe<Order_By>;
  terms_conditions_version?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Company_User_Stddev_Pop_Fields = {
  __typename?: 'company_user_stddev_pop_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  privacy_policy_version?: Maybe<Scalars['Float']>;
  terms_conditions_version?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "company_user" */
export type Company_User_Stddev_Pop_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  privacy_policy_version?: InputMaybe<Order_By>;
  terms_conditions_version?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Company_User_Stddev_Samp_Fields = {
  __typename?: 'company_user_stddev_samp_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  privacy_policy_version?: Maybe<Scalars['Float']>;
  terms_conditions_version?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "company_user" */
export type Company_User_Stddev_Samp_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  privacy_policy_version?: InputMaybe<Order_By>;
  terms_conditions_version?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Company_User_Sum_Fields = {
  __typename?: 'company_user_sum_fields';
  company_id?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  privacy_policy_version?: Maybe<Scalars['Int']>;
  terms_conditions_version?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "company_user" */
export type Company_User_Sum_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  privacy_policy_version?: InputMaybe<Order_By>;
  terms_conditions_version?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "company_user" */
export enum Company_User_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  Id = 'id',
  /** column name */
  Pan = 'pan',
  /** column name */
  PrivacyPolicyVersion = 'privacy_policy_version',
  /** column name */
  TermsConditionsVersion = 'terms_conditions_version',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Company_User_Var_Pop_Fields = {
  __typename?: 'company_user_var_pop_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  privacy_policy_version?: Maybe<Scalars['Float']>;
  terms_conditions_version?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "company_user" */
export type Company_User_Var_Pop_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  privacy_policy_version?: InputMaybe<Order_By>;
  terms_conditions_version?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Company_User_Var_Samp_Fields = {
  __typename?: 'company_user_var_samp_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  privacy_policy_version?: Maybe<Scalars['Float']>;
  terms_conditions_version?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "company_user" */
export type Company_User_Var_Samp_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  privacy_policy_version?: InputMaybe<Order_By>;
  terms_conditions_version?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Company_User_Variance_Fields = {
  __typename?: 'company_user_variance_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  privacy_policy_version?: Maybe<Scalars['Float']>;
  terms_conditions_version?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "company_user" */
export type Company_User_Variance_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  privacy_policy_version?: InputMaybe<Order_By>;
  terms_conditions_version?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Company_Var_Pop_Fields = {
  __typename?: 'company_var_pop_fields';
  agreement_file_id?: Maybe<Scalars['Float']>;
  approved_by?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  estimated_arr?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  min_tradable_value?: Maybe<Scalars['Float']>;
  total_customers?: Maybe<Scalars['Float']>;
  total_funding?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Company_Var_Samp_Fields = {
  __typename?: 'company_var_samp_fields';
  agreement_file_id?: Maybe<Scalars['Float']>;
  approved_by?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  estimated_arr?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  min_tradable_value?: Maybe<Scalars['Float']>;
  total_customers?: Maybe<Scalars['Float']>;
  total_funding?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Company_Variance_Fields = {
  __typename?: 'company_variance_fields';
  agreement_file_id?: Maybe<Scalars['Float']>;
  approved_by?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  estimated_arr?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  min_tradable_value?: Maybe<Scalars['Float']>;
  total_customers?: Maybe<Scalars['Float']>;
  total_funding?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** columns and relationships of "deal" */
export type Deal = {
  __typename?: 'deal';
  bid_closure: Scalars['timestamptz'];
  /** An array relationship */
  bids: Array<Bid>;
  /** An aggregate relationship */
  bids_aggregate: Bid_Aggregate;
  /** An object relationship */
  company: Company;
  company_id: Scalars['Int'];
  /** An object relationship */
  company_score: Company_Score;
  company_score_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  created_by: Scalars['Int'];
  deal_expiry: Scalars['timestamptz'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  /** A computed field, executes function "highest_bid" */
  highest_bid?: Maybe<Array<Bid>>;
  id: Scalars['Int'];
  /** A computed field, executes function "deal_status" */
  status?: Maybe<Scalars['String']>;
  /** An array relationship */
  trades: Array<Trade>;
  /** An aggregate relationship */
  trades_aggregate: Trade_Aggregate;
  updated_at: Scalars['timestamptz'];
  updated_by: Scalars['Int'];
  /** A computed field, executes function "your_bids" */
  your_bids?: Maybe<Array<Bid>>;
};


/** columns and relationships of "deal" */
export type DealBidsArgs = {
  distinct_on?: InputMaybe<Array<Bid_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bid_Order_By>>;
  where?: InputMaybe<Bid_Bool_Exp>;
};


/** columns and relationships of "deal" */
export type DealBids_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bid_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bid_Order_By>>;
  where?: InputMaybe<Bid_Bool_Exp>;
};


/** columns and relationships of "deal" */
export type DealHighest_BidArgs = {
  distinct_on?: InputMaybe<Array<Bid_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bid_Order_By>>;
  where?: InputMaybe<Bid_Bool_Exp>;
};


/** columns and relationships of "deal" */
export type DealTradesArgs = {
  distinct_on?: InputMaybe<Array<Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Order_By>>;
  where?: InputMaybe<Trade_Bool_Exp>;
};


/** columns and relationships of "deal" */
export type DealTrades_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Order_By>>;
  where?: InputMaybe<Trade_Bool_Exp>;
};


/** columns and relationships of "deal" */
export type DealYour_BidsArgs = {
  distinct_on?: InputMaybe<Array<Bid_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bid_Order_By>>;
  where?: InputMaybe<Bid_Bool_Exp>;
};

/** aggregated selection of "deal" */
export type Deal_Aggregate = {
  __typename?: 'deal_aggregate';
  aggregate?: Maybe<Deal_Aggregate_Fields>;
  nodes: Array<Deal>;
};

/** aggregate fields of "deal" */
export type Deal_Aggregate_Fields = {
  __typename?: 'deal_aggregate_fields';
  avg?: Maybe<Deal_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Deal_Max_Fields>;
  min?: Maybe<Deal_Min_Fields>;
  stddev?: Maybe<Deal_Stddev_Fields>;
  stddev_pop?: Maybe<Deal_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Deal_Stddev_Samp_Fields>;
  sum?: Maybe<Deal_Sum_Fields>;
  var_pop?: Maybe<Deal_Var_Pop_Fields>;
  var_samp?: Maybe<Deal_Var_Samp_Fields>;
  variance?: Maybe<Deal_Variance_Fields>;
};


/** aggregate fields of "deal" */
export type Deal_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Deal_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "deal" */
export type Deal_Aggregate_Order_By = {
  avg?: InputMaybe<Deal_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Deal_Max_Order_By>;
  min?: InputMaybe<Deal_Min_Order_By>;
  stddev?: InputMaybe<Deal_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Deal_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Deal_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Deal_Sum_Order_By>;
  var_pop?: InputMaybe<Deal_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Deal_Var_Samp_Order_By>;
  variance?: InputMaybe<Deal_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "deal" */
export type Deal_Arr_Rel_Insert_Input = {
  data: Array<Deal_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Deal_On_Conflict>;
};

/** aggregate avg on columns */
export type Deal_Avg_Fields = {
  __typename?: 'deal_avg_fields';
  company_id?: Maybe<Scalars['Float']>;
  company_score_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "deal" */
export type Deal_Avg_Order_By = {
  company_id?: InputMaybe<Order_By>;
  company_score_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "deal". All fields are combined with a logical 'AND'. */
export type Deal_Bool_Exp = {
  _and?: InputMaybe<Array<Deal_Bool_Exp>>;
  _not?: InputMaybe<Deal_Bool_Exp>;
  _or?: InputMaybe<Array<Deal_Bool_Exp>>;
  bid_closure?: InputMaybe<Timestamptz_Comparison_Exp>;
  bids?: InputMaybe<Bid_Bool_Exp>;
  company?: InputMaybe<Company_Bool_Exp>;
  company_id?: InputMaybe<Int_Comparison_Exp>;
  company_score?: InputMaybe<Company_Score_Bool_Exp>;
  company_score_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Int_Comparison_Exp>;
  deal_expiry?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_by?: InputMaybe<Int_Comparison_Exp>;
  highest_bid?: InputMaybe<Bid_Bool_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  trades?: InputMaybe<Trade_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Int_Comparison_Exp>;
  your_bids?: InputMaybe<Bid_Bool_Exp>;
};

/** unique or primary key constraints on table "deal" */
export enum Deal_Constraint {
  /** unique or primary key constraint */
  DealCompanyScoreIdIdx = 'deal_company_score_id_idx',
  /** unique or primary key constraint */
  DealPkey = 'deal_pkey'
}

/** input type for incrementing numeric columns in table "deal" */
export type Deal_Inc_Input = {
  company_id?: InputMaybe<Scalars['Int']>;
  company_score_id?: InputMaybe<Scalars['Int']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "deal" */
export type Deal_Insert_Input = {
  bid_closure?: InputMaybe<Scalars['timestamptz']>;
  bids?: InputMaybe<Bid_Arr_Rel_Insert_Input>;
  company?: InputMaybe<Company_Obj_Rel_Insert_Input>;
  company_id?: InputMaybe<Scalars['Int']>;
  company_score?: InputMaybe<Company_Score_Obj_Rel_Insert_Input>;
  company_score_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deal_expiry?: InputMaybe<Scalars['timestamptz']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  trades?: InputMaybe<Trade_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Deal_Max_Fields = {
  __typename?: 'deal_max_fields';
  bid_closure?: Maybe<Scalars['timestamptz']>;
  company_id?: Maybe<Scalars['Int']>;
  company_score_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deal_expiry?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "deal" */
export type Deal_Max_Order_By = {
  bid_closure?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  company_score_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deal_expiry?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Deal_Min_Fields = {
  __typename?: 'deal_min_fields';
  bid_closure?: Maybe<Scalars['timestamptz']>;
  company_id?: Maybe<Scalars['Int']>;
  company_score_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deal_expiry?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "deal" */
export type Deal_Min_Order_By = {
  bid_closure?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  company_score_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deal_expiry?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "deal" */
export type Deal_Mutation_Response = {
  __typename?: 'deal_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Deal>;
};

/** input type for inserting object relation for remote table "deal" */
export type Deal_Obj_Rel_Insert_Input = {
  data: Deal_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Deal_On_Conflict>;
};

/** on conflict condition type for table "deal" */
export type Deal_On_Conflict = {
  constraint: Deal_Constraint;
  update_columns?: Array<Deal_Update_Column>;
  where?: InputMaybe<Deal_Bool_Exp>;
};

/** Ordering options when selecting data from "deal". */
export type Deal_Order_By = {
  bid_closure?: InputMaybe<Order_By>;
  bids_aggregate?: InputMaybe<Bid_Aggregate_Order_By>;
  company?: InputMaybe<Company_Order_By>;
  company_id?: InputMaybe<Order_By>;
  company_score?: InputMaybe<Company_Score_Order_By>;
  company_score_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deal_expiry?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  highest_bid_aggregate?: InputMaybe<Bid_Aggregate_Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  trades_aggregate?: InputMaybe<Trade_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  your_bids_aggregate?: InputMaybe<Bid_Aggregate_Order_By>;
};

/** primary key columns input for table: deal */
export type Deal_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "deal" */
export enum Deal_Select_Column {
  /** column name */
  BidClosure = 'bid_closure',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CompanyScoreId = 'company_score_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DealExpiry = 'deal_expiry',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** input type for updating data in table "deal" */
export type Deal_Set_Input = {
  bid_closure?: InputMaybe<Scalars['timestamptz']>;
  company_id?: InputMaybe<Scalars['Int']>;
  company_score_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deal_expiry?: InputMaybe<Scalars['timestamptz']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Deal_Stddev_Fields = {
  __typename?: 'deal_stddev_fields';
  company_id?: Maybe<Scalars['Float']>;
  company_score_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "deal" */
export type Deal_Stddev_Order_By = {
  company_id?: InputMaybe<Order_By>;
  company_score_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Deal_Stddev_Pop_Fields = {
  __typename?: 'deal_stddev_pop_fields';
  company_id?: Maybe<Scalars['Float']>;
  company_score_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "deal" */
export type Deal_Stddev_Pop_Order_By = {
  company_id?: InputMaybe<Order_By>;
  company_score_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Deal_Stddev_Samp_Fields = {
  __typename?: 'deal_stddev_samp_fields';
  company_id?: Maybe<Scalars['Float']>;
  company_score_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "deal" */
export type Deal_Stddev_Samp_Order_By = {
  company_id?: InputMaybe<Order_By>;
  company_score_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Deal_Sum_Fields = {
  __typename?: 'deal_sum_fields';
  company_id?: Maybe<Scalars['Int']>;
  company_score_id?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "deal" */
export type Deal_Sum_Order_By = {
  company_id?: InputMaybe<Order_By>;
  company_score_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** update columns of table "deal" */
export enum Deal_Update_Column {
  /** column name */
  BidClosure = 'bid_closure',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CompanyScoreId = 'company_score_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DealExpiry = 'deal_expiry',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  Id = 'id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** aggregate var_pop on columns */
export type Deal_Var_Pop_Fields = {
  __typename?: 'deal_var_pop_fields';
  company_id?: Maybe<Scalars['Float']>;
  company_score_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "deal" */
export type Deal_Var_Pop_Order_By = {
  company_id?: InputMaybe<Order_By>;
  company_score_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Deal_Var_Samp_Fields = {
  __typename?: 'deal_var_samp_fields';
  company_id?: Maybe<Scalars['Float']>;
  company_score_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "deal" */
export type Deal_Var_Samp_Order_By = {
  company_id?: InputMaybe<Order_By>;
  company_score_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Deal_Variance_Fields = {
  __typename?: 'deal_variance_fields';
  company_id?: Maybe<Scalars['Float']>;
  company_score_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "deal" */
export type Deal_Variance_Order_By = {
  company_id?: InputMaybe<Order_By>;
  company_score_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

export type FileRegistryUpdatePasswordsInput = {
  file_registry_id: Scalars['Int'];
  password: Scalars['String'];
};

export type FileRegistryUpdatePasswordsOutput = {
  __typename?: 'fileRegistryUpdatePasswordsOutput';
  message: Scalars['String'];
};

/** columns and relationships of "file_registry" */
export type File_Registry = {
  __typename?: 'file_registry';
  category_id: Scalars['String'];
  created_at: Scalars['timestamptz'];
  created_by: Scalars['Int'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  expiry_date?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  location: Scalars['String'];
  name: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  tenant_id: Scalars['Int'];
  tenant_type: Scalars['String'];
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** aggregated selection of "file_registry" */
export type File_Registry_Aggregate = {
  __typename?: 'file_registry_aggregate';
  aggregate?: Maybe<File_Registry_Aggregate_Fields>;
  nodes: Array<File_Registry>;
};

/** aggregate fields of "file_registry" */
export type File_Registry_Aggregate_Fields = {
  __typename?: 'file_registry_aggregate_fields';
  avg?: Maybe<File_Registry_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<File_Registry_Max_Fields>;
  min?: Maybe<File_Registry_Min_Fields>;
  stddev?: Maybe<File_Registry_Stddev_Fields>;
  stddev_pop?: Maybe<File_Registry_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<File_Registry_Stddev_Samp_Fields>;
  sum?: Maybe<File_Registry_Sum_Fields>;
  var_pop?: Maybe<File_Registry_Var_Pop_Fields>;
  var_samp?: Maybe<File_Registry_Var_Samp_Fields>;
  variance?: Maybe<File_Registry_Variance_Fields>;
};


/** aggregate fields of "file_registry" */
export type File_Registry_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<File_Registry_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type File_Registry_Avg_Fields = {
  __typename?: 'file_registry_avg_fields';
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tenant_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "file_registry". All fields are combined with a logical 'AND'. */
export type File_Registry_Bool_Exp = {
  _and?: InputMaybe<Array<File_Registry_Bool_Exp>>;
  _not?: InputMaybe<File_Registry_Bool_Exp>;
  _or?: InputMaybe<Array<File_Registry_Bool_Exp>>;
  category_id?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Int_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_by?: InputMaybe<Int_Comparison_Exp>;
  expiry_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  location?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  password?: InputMaybe<String_Comparison_Exp>;
  tenant_id?: InputMaybe<Int_Comparison_Exp>;
  tenant_type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "file_registry" */
export enum File_Registry_Constraint {
  /** unique or primary key constraint */
  FileRegistryPkey = 'file_registry_pkey'
}

/** input type for incrementing numeric columns in table "file_registry" */
export type File_Registry_Inc_Input = {
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  tenant_id?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "file_registry" */
export type File_Registry_Insert_Input = {
  category_id?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  expiry_date?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  tenant_id?: InputMaybe<Scalars['Int']>;
  tenant_type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type File_Registry_Max_Fields = {
  __typename?: 'file_registry_max_fields';
  category_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  expiry_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  tenant_id?: Maybe<Scalars['Int']>;
  tenant_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type File_Registry_Min_Fields = {
  __typename?: 'file_registry_min_fields';
  category_id?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  expiry_date?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  location?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  tenant_id?: Maybe<Scalars['Int']>;
  tenant_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "file_registry" */
export type File_Registry_Mutation_Response = {
  __typename?: 'file_registry_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<File_Registry>;
};

/** input type for inserting object relation for remote table "file_registry" */
export type File_Registry_Obj_Rel_Insert_Input = {
  data: File_Registry_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<File_Registry_On_Conflict>;
};

/** on conflict condition type for table "file_registry" */
export type File_Registry_On_Conflict = {
  constraint: File_Registry_Constraint;
  update_columns?: Array<File_Registry_Update_Column>;
  where?: InputMaybe<File_Registry_Bool_Exp>;
};

/** Ordering options when selecting data from "file_registry". */
export type File_Registry_Order_By = {
  category_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  expiry_date?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  location?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  password?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  tenant_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** primary key columns input for table: file_registry */
export type File_Registry_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "file_registry" */
export enum File_Registry_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  ExpiryDate = 'expiry_date',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  TenantType = 'tenant_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** input type for updating data in table "file_registry" */
export type File_Registry_Set_Input = {
  category_id?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  expiry_date?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  location?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
  tenant_id?: InputMaybe<Scalars['Int']>;
  tenant_type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type File_Registry_Stddev_Fields = {
  __typename?: 'file_registry_stddev_fields';
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tenant_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type File_Registry_Stddev_Pop_Fields = {
  __typename?: 'file_registry_stddev_pop_fields';
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tenant_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type File_Registry_Stddev_Samp_Fields = {
  __typename?: 'file_registry_stddev_samp_fields';
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tenant_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type File_Registry_Sum_Fields = {
  __typename?: 'file_registry_sum_fields';
  created_by?: Maybe<Scalars['Int']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  tenant_id?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** update columns of table "file_registry" */
export enum File_Registry_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  ExpiryDate = 'expiry_date',
  /** column name */
  Id = 'id',
  /** column name */
  Location = 'location',
  /** column name */
  Name = 'name',
  /** column name */
  Password = 'password',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  TenantType = 'tenant_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** aggregate var_pop on columns */
export type File_Registry_Var_Pop_Fields = {
  __typename?: 'file_registry_var_pop_fields';
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tenant_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type File_Registry_Var_Samp_Fields = {
  __typename?: 'file_registry_var_samp_fields';
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tenant_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type File_Registry_Variance_Fields = {
  __typename?: 'file_registry_variance_fields';
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tenant_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "float8". All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['float8']>;
  _gt?: InputMaybe<Scalars['float8']>;
  _gte?: InputMaybe<Scalars['float8']>;
  _in?: InputMaybe<Array<Scalars['float8']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['float8']>;
  _lte?: InputMaybe<Scalars['float8']>;
  _neq?: InputMaybe<Scalars['float8']>;
  _nin?: InputMaybe<Array<Scalars['float8']>>;
};

export type Highest_Bid_Args = {
  deal_row?: InputMaybe<Scalars['deal_scalar']>;
};

/** columns and relationships of "integration_auth" */
export type Integration_Auth = {
  __typename?: 'integration_auth';
  access_token?: Maybe<Scalars['String']>;
  /** An object relationship */
  bank_account?: Maybe<Account>;
  /** An object relationship */
  banking_partner?: Maybe<Banking_Partner_Integration>;
  /** An object relationship */
  company: Company;
  company_id: Scalars['Int'];
  /** An array relationship */
  company_integrations: Array<Company_Integration>;
  /** An aggregate relationship */
  company_integrations_aggregate: Company_Integration_Aggregate;
  created_at: Scalars['timestamptz'];
  created_by: Scalars['Int'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  expiry?: Maybe<Scalars['float8']>;
  generated_at?: Maybe<Scalars['timestamptz']>;
  id: Scalars['Int'];
  last_used?: Maybe<Scalars['timestamptz']>;
  metadata?: Maybe<Scalars['jsonb']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  source: Scalars['String'];
  source_account_id?: Maybe<Scalars['String']>;
  source_account_int_id?: Maybe<Scalars['Int']>;
  updated_at: Scalars['timestamptz'];
  updated_by: Scalars['Int'];
};


/** columns and relationships of "integration_auth" */
export type Integration_AuthCompany_IntegrationsArgs = {
  distinct_on?: InputMaybe<Array<Company_Integration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Integration_Order_By>>;
  where?: InputMaybe<Company_Integration_Bool_Exp>;
};


/** columns and relationships of "integration_auth" */
export type Integration_AuthCompany_Integrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Company_Integration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Integration_Order_By>>;
  where?: InputMaybe<Company_Integration_Bool_Exp>;
};


/** columns and relationships of "integration_auth" */
export type Integration_AuthMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "integration_auth" */
export type Integration_Auth_Aggregate = {
  __typename?: 'integration_auth_aggregate';
  aggregate?: Maybe<Integration_Auth_Aggregate_Fields>;
  nodes: Array<Integration_Auth>;
};

/** aggregate fields of "integration_auth" */
export type Integration_Auth_Aggregate_Fields = {
  __typename?: 'integration_auth_aggregate_fields';
  avg?: Maybe<Integration_Auth_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Integration_Auth_Max_Fields>;
  min?: Maybe<Integration_Auth_Min_Fields>;
  stddev?: Maybe<Integration_Auth_Stddev_Fields>;
  stddev_pop?: Maybe<Integration_Auth_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Integration_Auth_Stddev_Samp_Fields>;
  sum?: Maybe<Integration_Auth_Sum_Fields>;
  var_pop?: Maybe<Integration_Auth_Var_Pop_Fields>;
  var_samp?: Maybe<Integration_Auth_Var_Samp_Fields>;
  variance?: Maybe<Integration_Auth_Variance_Fields>;
};


/** aggregate fields of "integration_auth" */
export type Integration_Auth_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Integration_Auth_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "integration_auth" */
export type Integration_Auth_Aggregate_Order_By = {
  avg?: InputMaybe<Integration_Auth_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Integration_Auth_Max_Order_By>;
  min?: InputMaybe<Integration_Auth_Min_Order_By>;
  stddev?: InputMaybe<Integration_Auth_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Integration_Auth_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Integration_Auth_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Integration_Auth_Sum_Order_By>;
  var_pop?: InputMaybe<Integration_Auth_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Integration_Auth_Var_Samp_Order_By>;
  variance?: InputMaybe<Integration_Auth_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Integration_Auth_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "integration_auth" */
export type Integration_Auth_Arr_Rel_Insert_Input = {
  data: Array<Integration_Auth_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Integration_Auth_On_Conflict>;
};

/** aggregate avg on columns */
export type Integration_Auth_Avg_Fields = {
  __typename?: 'integration_auth_avg_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  expiry?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  source_account_int_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "integration_auth" */
export type Integration_Auth_Avg_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  expiry?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source_account_int_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "integration_auth". All fields are combined with a logical 'AND'. */
export type Integration_Auth_Bool_Exp = {
  _and?: InputMaybe<Array<Integration_Auth_Bool_Exp>>;
  _not?: InputMaybe<Integration_Auth_Bool_Exp>;
  _or?: InputMaybe<Array<Integration_Auth_Bool_Exp>>;
  access_token?: InputMaybe<String_Comparison_Exp>;
  bank_account?: InputMaybe<Account_Bool_Exp>;
  banking_partner?: InputMaybe<Banking_Partner_Integration_Bool_Exp>;
  company?: InputMaybe<Company_Bool_Exp>;
  company_id?: InputMaybe<Int_Comparison_Exp>;
  company_integrations?: InputMaybe<Company_Integration_Bool_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Int_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_by?: InputMaybe<Int_Comparison_Exp>;
  expiry?: InputMaybe<Float8_Comparison_Exp>;
  generated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  last_used?: InputMaybe<Timestamptz_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  refresh_token?: InputMaybe<String_Comparison_Exp>;
  scope?: InputMaybe<String_Comparison_Exp>;
  source?: InputMaybe<String_Comparison_Exp>;
  source_account_id?: InputMaybe<String_Comparison_Exp>;
  source_account_int_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "integration_auth" */
export enum Integration_Auth_Constraint {
  /** unique or primary key constraint */
  IntegrationAuthPkey = 'integration_auth_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Integration_Auth_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Integration_Auth_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Integration_Auth_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "integration_auth" */
export type Integration_Auth_Inc_Input = {
  company_id?: InputMaybe<Scalars['Int']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  expiry?: InputMaybe<Scalars['float8']>;
  id?: InputMaybe<Scalars['Int']>;
  source_account_int_id?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "integration_auth" */
export type Integration_Auth_Insert_Input = {
  access_token?: InputMaybe<Scalars['String']>;
  bank_account?: InputMaybe<Account_Obj_Rel_Insert_Input>;
  banking_partner?: InputMaybe<Banking_Partner_Integration_Obj_Rel_Insert_Input>;
  company?: InputMaybe<Company_Obj_Rel_Insert_Input>;
  company_id?: InputMaybe<Scalars['Int']>;
  company_integrations?: InputMaybe<Company_Integration_Arr_Rel_Insert_Input>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  expiry?: InputMaybe<Scalars['float8']>;
  generated_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  last_used?: InputMaybe<Scalars['timestamptz']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  source_account_id?: InputMaybe<Scalars['String']>;
  source_account_int_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Integration_Auth_Max_Fields = {
  __typename?: 'integration_auth_max_fields';
  access_token?: Maybe<Scalars['String']>;
  company_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  expiry?: Maybe<Scalars['float8']>;
  generated_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  last_used?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  source_account_id?: Maybe<Scalars['String']>;
  source_account_int_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "integration_auth" */
export type Integration_Auth_Max_Order_By = {
  access_token?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  expiry?: InputMaybe<Order_By>;
  generated_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_used?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  source_account_id?: InputMaybe<Order_By>;
  source_account_int_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Integration_Auth_Min_Fields = {
  __typename?: 'integration_auth_min_fields';
  access_token?: Maybe<Scalars['String']>;
  company_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  expiry?: Maybe<Scalars['float8']>;
  generated_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['Int']>;
  last_used?: Maybe<Scalars['timestamptz']>;
  refresh_token?: Maybe<Scalars['String']>;
  scope?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  source_account_id?: Maybe<Scalars['String']>;
  source_account_int_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "integration_auth" */
export type Integration_Auth_Min_Order_By = {
  access_token?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  expiry?: InputMaybe<Order_By>;
  generated_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_used?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  source_account_id?: InputMaybe<Order_By>;
  source_account_int_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "integration_auth" */
export type Integration_Auth_Mutation_Response = {
  __typename?: 'integration_auth_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Integration_Auth>;
};

/** input type for inserting object relation for remote table "integration_auth" */
export type Integration_Auth_Obj_Rel_Insert_Input = {
  data: Integration_Auth_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Integration_Auth_On_Conflict>;
};

/** on conflict condition type for table "integration_auth" */
export type Integration_Auth_On_Conflict = {
  constraint: Integration_Auth_Constraint;
  update_columns?: Array<Integration_Auth_Update_Column>;
  where?: InputMaybe<Integration_Auth_Bool_Exp>;
};

/** Ordering options when selecting data from "integration_auth". */
export type Integration_Auth_Order_By = {
  access_token?: InputMaybe<Order_By>;
  bank_account?: InputMaybe<Account_Order_By>;
  banking_partner?: InputMaybe<Banking_Partner_Integration_Order_By>;
  company?: InputMaybe<Company_Order_By>;
  company_id?: InputMaybe<Order_By>;
  company_integrations_aggregate?: InputMaybe<Company_Integration_Aggregate_Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  expiry?: InputMaybe<Order_By>;
  generated_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_used?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  refresh_token?: InputMaybe<Order_By>;
  scope?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  source_account_id?: InputMaybe<Order_By>;
  source_account_int_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** primary key columns input for table: integration_auth */
export type Integration_Auth_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Integration_Auth_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "integration_auth" */
export enum Integration_Auth_Select_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  Expiry = 'expiry',
  /** column name */
  GeneratedAt = 'generated_at',
  /** column name */
  Id = 'id',
  /** column name */
  LastUsed = 'last_used',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  Scope = 'scope',
  /** column name */
  Source = 'source',
  /** column name */
  SourceAccountId = 'source_account_id',
  /** column name */
  SourceAccountIntId = 'source_account_int_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** input type for updating data in table "integration_auth" */
export type Integration_Auth_Set_Input = {
  access_token?: InputMaybe<Scalars['String']>;
  company_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  expiry?: InputMaybe<Scalars['float8']>;
  generated_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['Int']>;
  last_used?: InputMaybe<Scalars['timestamptz']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  refresh_token?: InputMaybe<Scalars['String']>;
  scope?: InputMaybe<Scalars['String']>;
  source?: InputMaybe<Scalars['String']>;
  source_account_id?: InputMaybe<Scalars['String']>;
  source_account_int_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Integration_Auth_Stddev_Fields = {
  __typename?: 'integration_auth_stddev_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  expiry?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  source_account_int_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "integration_auth" */
export type Integration_Auth_Stddev_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  expiry?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source_account_int_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Integration_Auth_Stddev_Pop_Fields = {
  __typename?: 'integration_auth_stddev_pop_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  expiry?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  source_account_int_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "integration_auth" */
export type Integration_Auth_Stddev_Pop_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  expiry?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source_account_int_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Integration_Auth_Stddev_Samp_Fields = {
  __typename?: 'integration_auth_stddev_samp_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  expiry?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  source_account_int_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "integration_auth" */
export type Integration_Auth_Stddev_Samp_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  expiry?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source_account_int_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Integration_Auth_Sum_Fields = {
  __typename?: 'integration_auth_sum_fields';
  company_id?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_by?: Maybe<Scalars['Int']>;
  expiry?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['Int']>;
  source_account_int_id?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "integration_auth" */
export type Integration_Auth_Sum_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  expiry?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source_account_int_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** update columns of table "integration_auth" */
export enum Integration_Auth_Update_Column {
  /** column name */
  AccessToken = 'access_token',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  Expiry = 'expiry',
  /** column name */
  GeneratedAt = 'generated_at',
  /** column name */
  Id = 'id',
  /** column name */
  LastUsed = 'last_used',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  RefreshToken = 'refresh_token',
  /** column name */
  Scope = 'scope',
  /** column name */
  Source = 'source',
  /** column name */
  SourceAccountId = 'source_account_id',
  /** column name */
  SourceAccountIntId = 'source_account_int_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** aggregate var_pop on columns */
export type Integration_Auth_Var_Pop_Fields = {
  __typename?: 'integration_auth_var_pop_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  expiry?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  source_account_int_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "integration_auth" */
export type Integration_Auth_Var_Pop_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  expiry?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source_account_int_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Integration_Auth_Var_Samp_Fields = {
  __typename?: 'integration_auth_var_samp_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  expiry?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  source_account_int_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "integration_auth" */
export type Integration_Auth_Var_Samp_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  expiry?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source_account_int_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Integration_Auth_Variance_Fields = {
  __typename?: 'integration_auth_variance_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  expiry?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  source_account_int_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "integration_auth" */
export type Integration_Auth_Variance_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  expiry?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  source_account_int_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** columns and relationships of "internal_statement" */
export type Internal_Statement = {
  __typename?: 'internal_statement';
  amount: Scalars['float8'];
  created_at: Scalars['timestamptz'];
  created_by: Scalars['Int'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  metadata?: Maybe<Scalars['jsonb']>;
  tenant_id: Scalars['Int'];
  tenant_type: Scalars['String'];
  timestamp: Scalars['timestamptz'];
  transaction_status: Scalars['String'];
  transaction_type: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  updated_by: Scalars['Int'];
};


/** columns and relationships of "internal_statement" */
export type Internal_StatementMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "internal_statement" */
export type Internal_Statement_Aggregate = {
  __typename?: 'internal_statement_aggregate';
  aggregate?: Maybe<Internal_Statement_Aggregate_Fields>;
  nodes: Array<Internal_Statement>;
};

/** aggregate fields of "internal_statement" */
export type Internal_Statement_Aggregate_Fields = {
  __typename?: 'internal_statement_aggregate_fields';
  avg?: Maybe<Internal_Statement_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Internal_Statement_Max_Fields>;
  min?: Maybe<Internal_Statement_Min_Fields>;
  stddev?: Maybe<Internal_Statement_Stddev_Fields>;
  stddev_pop?: Maybe<Internal_Statement_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Internal_Statement_Stddev_Samp_Fields>;
  sum?: Maybe<Internal_Statement_Sum_Fields>;
  var_pop?: Maybe<Internal_Statement_Var_Pop_Fields>;
  var_samp?: Maybe<Internal_Statement_Var_Samp_Fields>;
  variance?: Maybe<Internal_Statement_Variance_Fields>;
};


/** aggregate fields of "internal_statement" */
export type Internal_Statement_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Internal_Statement_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Internal_Statement_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Internal_Statement_Avg_Fields = {
  __typename?: 'internal_statement_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tenant_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "internal_statement". All fields are combined with a logical 'AND'. */
export type Internal_Statement_Bool_Exp = {
  _and?: InputMaybe<Array<Internal_Statement_Bool_Exp>>;
  _not?: InputMaybe<Internal_Statement_Bool_Exp>;
  _or?: InputMaybe<Array<Internal_Statement_Bool_Exp>>;
  amount?: InputMaybe<Float8_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Int_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_by?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  tenant_id?: InputMaybe<Int_Comparison_Exp>;
  tenant_type?: InputMaybe<String_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  transaction_status?: InputMaybe<String_Comparison_Exp>;
  transaction_type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "internal_statement" */
export enum Internal_Statement_Constraint {
  /** unique or primary key constraint */
  InternalStatementPkey = 'internal_statement_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Internal_Statement_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Internal_Statement_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Internal_Statement_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "internal_statement" */
export type Internal_Statement_Inc_Input = {
  amount?: InputMaybe<Scalars['float8']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  tenant_id?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "internal_statement" */
export type Internal_Statement_Insert_Input = {
  amount?: InputMaybe<Scalars['float8']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  tenant_id?: InputMaybe<Scalars['Int']>;
  tenant_type?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  transaction_status?: InputMaybe<Scalars['String']>;
  transaction_type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Internal_Statement_Max_Fields = {
  __typename?: 'internal_statement_max_fields';
  amount?: Maybe<Scalars['float8']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  tenant_id?: Maybe<Scalars['Int']>;
  tenant_type?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  transaction_status?: Maybe<Scalars['String']>;
  transaction_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Internal_Statement_Min_Fields = {
  __typename?: 'internal_statement_min_fields';
  amount?: Maybe<Scalars['float8']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  tenant_id?: Maybe<Scalars['Int']>;
  tenant_type?: Maybe<Scalars['String']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  transaction_status?: Maybe<Scalars['String']>;
  transaction_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "internal_statement" */
export type Internal_Statement_Mutation_Response = {
  __typename?: 'internal_statement_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Internal_Statement>;
};

/** on conflict condition type for table "internal_statement" */
export type Internal_Statement_On_Conflict = {
  constraint: Internal_Statement_Constraint;
  update_columns?: Array<Internal_Statement_Update_Column>;
  where?: InputMaybe<Internal_Statement_Bool_Exp>;
};

/** Ordering options when selecting data from "internal_statement". */
export type Internal_Statement_Order_By = {
  amount?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  tenant_id?: InputMaybe<Order_By>;
  tenant_type?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  transaction_status?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** primary key columns input for table: internal_statement */
export type Internal_Statement_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Internal_Statement_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "internal_statement" */
export enum Internal_Statement_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  TenantType = 'tenant_type',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TransactionStatus = 'transaction_status',
  /** column name */
  TransactionType = 'transaction_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** input type for updating data in table "internal_statement" */
export type Internal_Statement_Set_Input = {
  amount?: InputMaybe<Scalars['float8']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  tenant_id?: InputMaybe<Scalars['Int']>;
  tenant_type?: InputMaybe<Scalars['String']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  transaction_status?: InputMaybe<Scalars['String']>;
  transaction_type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Internal_Statement_Stddev_Fields = {
  __typename?: 'internal_statement_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tenant_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Internal_Statement_Stddev_Pop_Fields = {
  __typename?: 'internal_statement_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tenant_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Internal_Statement_Stddev_Samp_Fields = {
  __typename?: 'internal_statement_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tenant_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Internal_Statement_Sum_Fields = {
  __typename?: 'internal_statement_sum_fields';
  amount?: Maybe<Scalars['float8']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  tenant_id?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** update columns of table "internal_statement" */
export enum Internal_Statement_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  TenantId = 'tenant_id',
  /** column name */
  TenantType = 'tenant_type',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TransactionStatus = 'transaction_status',
  /** column name */
  TransactionType = 'transaction_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** aggregate var_pop on columns */
export type Internal_Statement_Var_Pop_Fields = {
  __typename?: 'internal_statement_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tenant_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Internal_Statement_Var_Samp_Fields = {
  __typename?: 'internal_statement_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tenant_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Internal_Statement_Variance_Fields = {
  __typename?: 'internal_statement_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tenant_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "investor" */
export type Investor = {
  __typename?: 'investor';
  /** An array relationship */
  accounts: Array<Account>;
  /** An aggregate relationship */
  accounts_aggregate: Account_Aggregate;
  address_line1?: Maybe<Scalars['String']>;
  address_line2?: Maybe<Scalars['String']>;
  address_line3?: Maybe<Scalars['String']>;
  agreement_file_id?: Maybe<Scalars['Int']>;
  agreement_signed_date?: Maybe<Scalars['timestamptz']>;
  approved_at?: Maybe<Scalars['timestamptz']>;
  approved_by?: Maybe<Scalars['Int']>;
  budget_committed_from?: Maybe<Scalars['timestamptz']>;
  cin?: Maybe<Scalars['String']>;
  country_id?: Maybe<Scalars['Int']>;
  created_at: Scalars['timestamptz'];
  created_by: Scalars['Int'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  domain: Scalars['String'];
  id: Scalars['Int'];
  /** An array relationship */
  investor_users: Array<Investor_User>;
  /** An aggregate relationship */
  investor_users_aggregate: Investor_User_Aggregate;
  name: Scalars['String'];
  pan?: Maybe<Scalars['String']>;
  /** An object relationship */
  ref_country?: Maybe<Ref_Country>;
  /** An object relationship */
  ref_state?: Maybe<Ref_States>;
  signer_details?: Maybe<Scalars['jsonb']>;
  state_id?: Maybe<Scalars['Int']>;
  status: Scalars['String'];
  tenant_type?: Maybe<Scalars['String']>;
  total_committed_budget?: Maybe<Scalars['float8']>;
  /** An array relationship */
  trades: Array<Trade>;
  /** An aggregate relationship */
  trades_aggregate: Trade_Aggregate;
  type?: Maybe<Ref_Investor_Type_Enum>;
  updated_at: Scalars['timestamptz'];
  updated_by: Scalars['Int'];
  zipcode?: Maybe<Scalars['Int']>;
};


/** columns and relationships of "investor" */
export type InvestorAccountsArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


/** columns and relationships of "investor" */
export type InvestorAccounts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


/** columns and relationships of "investor" */
export type InvestorInvestor_UsersArgs = {
  distinct_on?: InputMaybe<Array<Investor_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Investor_User_Order_By>>;
  where?: InputMaybe<Investor_User_Bool_Exp>;
};


/** columns and relationships of "investor" */
export type InvestorInvestor_Users_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Investor_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Investor_User_Order_By>>;
  where?: InputMaybe<Investor_User_Bool_Exp>;
};


/** columns and relationships of "investor" */
export type InvestorSigner_DetailsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "investor" */
export type InvestorTradesArgs = {
  distinct_on?: InputMaybe<Array<Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Order_By>>;
  where?: InputMaybe<Trade_Bool_Exp>;
};


/** columns and relationships of "investor" */
export type InvestorTrades_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Order_By>>;
  where?: InputMaybe<Trade_Bool_Exp>;
};

/** aggregated selection of "investor" */
export type Investor_Aggregate = {
  __typename?: 'investor_aggregate';
  aggregate?: Maybe<Investor_Aggregate_Fields>;
  nodes: Array<Investor>;
};

/** aggregate fields of "investor" */
export type Investor_Aggregate_Fields = {
  __typename?: 'investor_aggregate_fields';
  avg?: Maybe<Investor_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Investor_Max_Fields>;
  min?: Maybe<Investor_Min_Fields>;
  stddev?: Maybe<Investor_Stddev_Fields>;
  stddev_pop?: Maybe<Investor_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Investor_Stddev_Samp_Fields>;
  sum?: Maybe<Investor_Sum_Fields>;
  var_pop?: Maybe<Investor_Var_Pop_Fields>;
  var_samp?: Maybe<Investor_Var_Samp_Fields>;
  variance?: Maybe<Investor_Variance_Fields>;
};


/** aggregate fields of "investor" */
export type Investor_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Investor_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Investor_Append_Input = {
  signer_details?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Investor_Avg_Fields = {
  __typename?: 'investor_avg_fields';
  agreement_file_id?: Maybe<Scalars['Float']>;
  approved_by?: Maybe<Scalars['Float']>;
  country_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
  total_committed_budget?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  zipcode?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "investor". All fields are combined with a logical 'AND'. */
export type Investor_Bool_Exp = {
  _and?: InputMaybe<Array<Investor_Bool_Exp>>;
  _not?: InputMaybe<Investor_Bool_Exp>;
  _or?: InputMaybe<Array<Investor_Bool_Exp>>;
  accounts?: InputMaybe<Account_Bool_Exp>;
  address_line1?: InputMaybe<String_Comparison_Exp>;
  address_line2?: InputMaybe<String_Comparison_Exp>;
  address_line3?: InputMaybe<String_Comparison_Exp>;
  agreement_file_id?: InputMaybe<Int_Comparison_Exp>;
  agreement_signed_date?: InputMaybe<Timestamptz_Comparison_Exp>;
  approved_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  approved_by?: InputMaybe<Int_Comparison_Exp>;
  budget_committed_from?: InputMaybe<Timestamptz_Comparison_Exp>;
  cin?: InputMaybe<String_Comparison_Exp>;
  country_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Int_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_by?: InputMaybe<Int_Comparison_Exp>;
  domain?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  investor_users?: InputMaybe<Investor_User_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  pan?: InputMaybe<String_Comparison_Exp>;
  ref_country?: InputMaybe<Ref_Country_Bool_Exp>;
  ref_state?: InputMaybe<Ref_States_Bool_Exp>;
  signer_details?: InputMaybe<Jsonb_Comparison_Exp>;
  state_id?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  tenant_type?: InputMaybe<String_Comparison_Exp>;
  total_committed_budget?: InputMaybe<Float8_Comparison_Exp>;
  trades?: InputMaybe<Trade_Bool_Exp>;
  type?: InputMaybe<Ref_Investor_Type_Enum_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Int_Comparison_Exp>;
  zipcode?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "investor" */
export enum Investor_Constraint {
  /** unique or primary key constraint */
  InvestorPkey = 'investor_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Investor_Delete_At_Path_Input = {
  signer_details?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Investor_Delete_Elem_Input = {
  signer_details?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Investor_Delete_Key_Input = {
  signer_details?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "investor" */
export type Investor_Inc_Input = {
  agreement_file_id?: InputMaybe<Scalars['Int']>;
  approved_by?: InputMaybe<Scalars['Int']>;
  country_id?: InputMaybe<Scalars['Int']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  state_id?: InputMaybe<Scalars['Int']>;
  total_committed_budget?: InputMaybe<Scalars['float8']>;
  updated_by?: InputMaybe<Scalars['Int']>;
  zipcode?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "investor" */
export type Investor_Insert_Input = {
  accounts?: InputMaybe<Account_Arr_Rel_Insert_Input>;
  address_line1?: InputMaybe<Scalars['String']>;
  address_line2?: InputMaybe<Scalars['String']>;
  address_line3?: InputMaybe<Scalars['String']>;
  agreement_file_id?: InputMaybe<Scalars['Int']>;
  agreement_signed_date?: InputMaybe<Scalars['timestamptz']>;
  approved_at?: InputMaybe<Scalars['timestamptz']>;
  approved_by?: InputMaybe<Scalars['Int']>;
  budget_committed_from?: InputMaybe<Scalars['timestamptz']>;
  cin?: InputMaybe<Scalars['String']>;
  country_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  domain?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  investor_users?: InputMaybe<Investor_User_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
  pan?: InputMaybe<Scalars['String']>;
  ref_country?: InputMaybe<Ref_Country_Obj_Rel_Insert_Input>;
  ref_state?: InputMaybe<Ref_States_Obj_Rel_Insert_Input>;
  signer_details?: InputMaybe<Scalars['jsonb']>;
  state_id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  tenant_type?: InputMaybe<Scalars['String']>;
  total_committed_budget?: InputMaybe<Scalars['float8']>;
  trades?: InputMaybe<Trade_Arr_Rel_Insert_Input>;
  type?: InputMaybe<Ref_Investor_Type_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
  zipcode?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Investor_Max_Fields = {
  __typename?: 'investor_max_fields';
  address_line1?: Maybe<Scalars['String']>;
  address_line2?: Maybe<Scalars['String']>;
  address_line3?: Maybe<Scalars['String']>;
  agreement_file_id?: Maybe<Scalars['Int']>;
  agreement_signed_date?: Maybe<Scalars['timestamptz']>;
  approved_at?: Maybe<Scalars['timestamptz']>;
  approved_by?: Maybe<Scalars['Int']>;
  budget_committed_from?: Maybe<Scalars['timestamptz']>;
  cin?: Maybe<Scalars['String']>;
  country_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  domain?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  pan?: Maybe<Scalars['String']>;
  state_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  tenant_type?: Maybe<Scalars['String']>;
  total_committed_budget?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
  zipcode?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Investor_Min_Fields = {
  __typename?: 'investor_min_fields';
  address_line1?: Maybe<Scalars['String']>;
  address_line2?: Maybe<Scalars['String']>;
  address_line3?: Maybe<Scalars['String']>;
  agreement_file_id?: Maybe<Scalars['Int']>;
  agreement_signed_date?: Maybe<Scalars['timestamptz']>;
  approved_at?: Maybe<Scalars['timestamptz']>;
  approved_by?: Maybe<Scalars['Int']>;
  budget_committed_from?: Maybe<Scalars['timestamptz']>;
  cin?: Maybe<Scalars['String']>;
  country_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  domain?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
  pan?: Maybe<Scalars['String']>;
  state_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  tenant_type?: Maybe<Scalars['String']>;
  total_committed_budget?: Maybe<Scalars['float8']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
  zipcode?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "investor" */
export type Investor_Mutation_Response = {
  __typename?: 'investor_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Investor>;
};

/** input type for inserting object relation for remote table "investor" */
export type Investor_Obj_Rel_Insert_Input = {
  data: Investor_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Investor_On_Conflict>;
};

/** on conflict condition type for table "investor" */
export type Investor_On_Conflict = {
  constraint: Investor_Constraint;
  update_columns?: Array<Investor_Update_Column>;
  where?: InputMaybe<Investor_Bool_Exp>;
};

/** Ordering options when selecting data from "investor". */
export type Investor_Order_By = {
  accounts_aggregate?: InputMaybe<Account_Aggregate_Order_By>;
  address_line1?: InputMaybe<Order_By>;
  address_line2?: InputMaybe<Order_By>;
  address_line3?: InputMaybe<Order_By>;
  agreement_file_id?: InputMaybe<Order_By>;
  agreement_signed_date?: InputMaybe<Order_By>;
  approved_at?: InputMaybe<Order_By>;
  approved_by?: InputMaybe<Order_By>;
  budget_committed_from?: InputMaybe<Order_By>;
  cin?: InputMaybe<Order_By>;
  country_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  domain?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_users_aggregate?: InputMaybe<Investor_User_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
  pan?: InputMaybe<Order_By>;
  ref_country?: InputMaybe<Ref_Country_Order_By>;
  ref_state?: InputMaybe<Ref_States_Order_By>;
  signer_details?: InputMaybe<Order_By>;
  state_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  tenant_type?: InputMaybe<Order_By>;
  total_committed_budget?: InputMaybe<Order_By>;
  trades_aggregate?: InputMaybe<Trade_Aggregate_Order_By>;
  type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  zipcode?: InputMaybe<Order_By>;
};

/** primary key columns input for table: investor */
export type Investor_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** columns and relationships of "investor_preference" */
export type Investor_Preference = {
  __typename?: 'investor_preference';
  created_at: Scalars['timestamptz'];
  created_by: Scalars['Int'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  investor_id: Scalars['Int'];
  preferences?: Maybe<Scalars['jsonb']>;
  updated_at: Scalars['timestamptz'];
  updated_by: Scalars['Int'];
};


/** columns and relationships of "investor_preference" */
export type Investor_PreferencePreferencesArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "investor_preference" */
export type Investor_Preference_Aggregate = {
  __typename?: 'investor_preference_aggregate';
  aggregate?: Maybe<Investor_Preference_Aggregate_Fields>;
  nodes: Array<Investor_Preference>;
};

/** aggregate fields of "investor_preference" */
export type Investor_Preference_Aggregate_Fields = {
  __typename?: 'investor_preference_aggregate_fields';
  avg?: Maybe<Investor_Preference_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Investor_Preference_Max_Fields>;
  min?: Maybe<Investor_Preference_Min_Fields>;
  stddev?: Maybe<Investor_Preference_Stddev_Fields>;
  stddev_pop?: Maybe<Investor_Preference_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Investor_Preference_Stddev_Samp_Fields>;
  sum?: Maybe<Investor_Preference_Sum_Fields>;
  var_pop?: Maybe<Investor_Preference_Var_Pop_Fields>;
  var_samp?: Maybe<Investor_Preference_Var_Samp_Fields>;
  variance?: Maybe<Investor_Preference_Variance_Fields>;
};


/** aggregate fields of "investor_preference" */
export type Investor_Preference_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Investor_Preference_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Investor_Preference_Append_Input = {
  preferences?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Investor_Preference_Avg_Fields = {
  __typename?: 'investor_preference_avg_fields';
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "investor_preference". All fields are combined with a logical 'AND'. */
export type Investor_Preference_Bool_Exp = {
  _and?: InputMaybe<Array<Investor_Preference_Bool_Exp>>;
  _not?: InputMaybe<Investor_Preference_Bool_Exp>;
  _or?: InputMaybe<Array<Investor_Preference_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Int_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_by?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  investor_id?: InputMaybe<Int_Comparison_Exp>;
  preferences?: InputMaybe<Jsonb_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "investor_preference" */
export enum Investor_Preference_Constraint {
  /** unique or primary key constraint */
  InvestorPreferenceInvestorIdIdx = 'investor_preference_investor_id_idx',
  /** unique or primary key constraint */
  InvestorPreferencePkey = 'investor_preference_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Investor_Preference_Delete_At_Path_Input = {
  preferences?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Investor_Preference_Delete_Elem_Input = {
  preferences?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Investor_Preference_Delete_Key_Input = {
  preferences?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "investor_preference" */
export type Investor_Preference_Inc_Input = {
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  investor_id?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "investor_preference" */
export type Investor_Preference_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  investor_id?: InputMaybe<Scalars['Int']>;
  preferences?: InputMaybe<Scalars['jsonb']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Investor_Preference_Max_Fields = {
  __typename?: 'investor_preference_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  investor_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Investor_Preference_Min_Fields = {
  __typename?: 'investor_preference_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  investor_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "investor_preference" */
export type Investor_Preference_Mutation_Response = {
  __typename?: 'investor_preference_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Investor_Preference>;
};

/** on conflict condition type for table "investor_preference" */
export type Investor_Preference_On_Conflict = {
  constraint: Investor_Preference_Constraint;
  update_columns?: Array<Investor_Preference_Update_Column>;
  where?: InputMaybe<Investor_Preference_Bool_Exp>;
};

/** Ordering options when selecting data from "investor_preference". */
export type Investor_Preference_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  preferences?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** primary key columns input for table: investor_preference */
export type Investor_Preference_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Investor_Preference_Prepend_Input = {
  preferences?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "investor_preference" */
export enum Investor_Preference_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  Id = 'id',
  /** column name */
  InvestorId = 'investor_id',
  /** column name */
  Preferences = 'preferences',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** input type for updating data in table "investor_preference" */
export type Investor_Preference_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  investor_id?: InputMaybe<Scalars['Int']>;
  preferences?: InputMaybe<Scalars['jsonb']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Investor_Preference_Stddev_Fields = {
  __typename?: 'investor_preference_stddev_fields';
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Investor_Preference_Stddev_Pop_Fields = {
  __typename?: 'investor_preference_stddev_pop_fields';
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Investor_Preference_Stddev_Samp_Fields = {
  __typename?: 'investor_preference_stddev_samp_fields';
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Investor_Preference_Sum_Fields = {
  __typename?: 'investor_preference_sum_fields';
  created_by?: Maybe<Scalars['Int']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  investor_id?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** update columns of table "investor_preference" */
export enum Investor_Preference_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  Id = 'id',
  /** column name */
  InvestorId = 'investor_id',
  /** column name */
  Preferences = 'preferences',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** aggregate var_pop on columns */
export type Investor_Preference_Var_Pop_Fields = {
  __typename?: 'investor_preference_var_pop_fields';
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Investor_Preference_Var_Samp_Fields = {
  __typename?: 'investor_preference_var_samp_fields';
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Investor_Preference_Variance_Fields = {
  __typename?: 'investor_preference_variance_fields';
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Investor_Prepend_Input = {
  signer_details?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "investor" */
export enum Investor_Select_Column {
  /** column name */
  AddressLine1 = 'address_line1',
  /** column name */
  AddressLine2 = 'address_line2',
  /** column name */
  AddressLine3 = 'address_line3',
  /** column name */
  AgreementFileId = 'agreement_file_id',
  /** column name */
  AgreementSignedDate = 'agreement_signed_date',
  /** column name */
  ApprovedAt = 'approved_at',
  /** column name */
  ApprovedBy = 'approved_by',
  /** column name */
  BudgetCommittedFrom = 'budget_committed_from',
  /** column name */
  Cin = 'cin',
  /** column name */
  CountryId = 'country_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  Domain = 'domain',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Pan = 'pan',
  /** column name */
  SignerDetails = 'signer_details',
  /** column name */
  StateId = 'state_id',
  /** column name */
  Status = 'status',
  /** column name */
  TenantType = 'tenant_type',
  /** column name */
  TotalCommittedBudget = 'total_committed_budget',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by',
  /** column name */
  Zipcode = 'zipcode'
}

/** input type for updating data in table "investor" */
export type Investor_Set_Input = {
  address_line1?: InputMaybe<Scalars['String']>;
  address_line2?: InputMaybe<Scalars['String']>;
  address_line3?: InputMaybe<Scalars['String']>;
  agreement_file_id?: InputMaybe<Scalars['Int']>;
  agreement_signed_date?: InputMaybe<Scalars['timestamptz']>;
  approved_at?: InputMaybe<Scalars['timestamptz']>;
  approved_by?: InputMaybe<Scalars['Int']>;
  budget_committed_from?: InputMaybe<Scalars['timestamptz']>;
  cin?: InputMaybe<Scalars['String']>;
  country_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  domain?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  pan?: InputMaybe<Scalars['String']>;
  signer_details?: InputMaybe<Scalars['jsonb']>;
  state_id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  tenant_type?: InputMaybe<Scalars['String']>;
  total_committed_budget?: InputMaybe<Scalars['float8']>;
  type?: InputMaybe<Ref_Investor_Type_Enum>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
  zipcode?: InputMaybe<Scalars['Int']>;
};

/** columns and relationships of "investor_statement" */
export type Investor_Statement = {
  __typename?: 'investor_statement';
  amount: Scalars['float8'];
  balance: Scalars['float8'];
  created_at: Scalars['timestamptz'];
  created_by: Scalars['Int'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  investor_id: Scalars['Int'];
  metadata?: Maybe<Scalars['jsonb']>;
  timestamp: Scalars['timestamptz'];
  transaction_status: Scalars['String'];
  transaction_type: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  updated_by: Scalars['Int'];
};


/** columns and relationships of "investor_statement" */
export type Investor_StatementMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "investor_statement" */
export type Investor_Statement_Aggregate = {
  __typename?: 'investor_statement_aggregate';
  aggregate?: Maybe<Investor_Statement_Aggregate_Fields>;
  nodes: Array<Investor_Statement>;
};

/** aggregate fields of "investor_statement" */
export type Investor_Statement_Aggregate_Fields = {
  __typename?: 'investor_statement_aggregate_fields';
  avg?: Maybe<Investor_Statement_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Investor_Statement_Max_Fields>;
  min?: Maybe<Investor_Statement_Min_Fields>;
  stddev?: Maybe<Investor_Statement_Stddev_Fields>;
  stddev_pop?: Maybe<Investor_Statement_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Investor_Statement_Stddev_Samp_Fields>;
  sum?: Maybe<Investor_Statement_Sum_Fields>;
  var_pop?: Maybe<Investor_Statement_Var_Pop_Fields>;
  var_samp?: Maybe<Investor_Statement_Var_Samp_Fields>;
  variance?: Maybe<Investor_Statement_Variance_Fields>;
};


/** aggregate fields of "investor_statement" */
export type Investor_Statement_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Investor_Statement_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Investor_Statement_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Investor_Statement_Avg_Fields = {
  __typename?: 'investor_statement_avg_fields';
  amount?: Maybe<Scalars['Float']>;
  balance?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "investor_statement". All fields are combined with a logical 'AND'. */
export type Investor_Statement_Bool_Exp = {
  _and?: InputMaybe<Array<Investor_Statement_Bool_Exp>>;
  _not?: InputMaybe<Investor_Statement_Bool_Exp>;
  _or?: InputMaybe<Array<Investor_Statement_Bool_Exp>>;
  amount?: InputMaybe<Float8_Comparison_Exp>;
  balance?: InputMaybe<Float8_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Int_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_by?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  investor_id?: InputMaybe<Int_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  transaction_status?: InputMaybe<String_Comparison_Exp>;
  transaction_type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "investor_statement" */
export enum Investor_Statement_Constraint {
  /** unique or primary key constraint */
  InvestorStatementPkey = 'investor_statement_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Investor_Statement_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Investor_Statement_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Investor_Statement_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "investor_statement" */
export type Investor_Statement_Inc_Input = {
  amount?: InputMaybe<Scalars['float8']>;
  balance?: InputMaybe<Scalars['float8']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  investor_id?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "investor_statement" */
export type Investor_Statement_Insert_Input = {
  amount?: InputMaybe<Scalars['float8']>;
  balance?: InputMaybe<Scalars['float8']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  investor_id?: InputMaybe<Scalars['Int']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  transaction_status?: InputMaybe<Scalars['String']>;
  transaction_type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Investor_Statement_Max_Fields = {
  __typename?: 'investor_statement_max_fields';
  amount?: Maybe<Scalars['float8']>;
  balance?: Maybe<Scalars['float8']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  investor_id?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  transaction_status?: Maybe<Scalars['String']>;
  transaction_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Investor_Statement_Min_Fields = {
  __typename?: 'investor_statement_min_fields';
  amount?: Maybe<Scalars['float8']>;
  balance?: Maybe<Scalars['float8']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  investor_id?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  transaction_status?: Maybe<Scalars['String']>;
  transaction_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "investor_statement" */
export type Investor_Statement_Mutation_Response = {
  __typename?: 'investor_statement_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Investor_Statement>;
};

/** on conflict condition type for table "investor_statement" */
export type Investor_Statement_On_Conflict = {
  constraint: Investor_Statement_Constraint;
  update_columns?: Array<Investor_Statement_Update_Column>;
  where?: InputMaybe<Investor_Statement_Bool_Exp>;
};

/** Ordering options when selecting data from "investor_statement". */
export type Investor_Statement_Order_By = {
  amount?: InputMaybe<Order_By>;
  balance?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  transaction_status?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** primary key columns input for table: investor_statement */
export type Investor_Statement_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Investor_Statement_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "investor_statement" */
export enum Investor_Statement_Select_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Balance = 'balance',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  Id = 'id',
  /** column name */
  InvestorId = 'investor_id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TransactionStatus = 'transaction_status',
  /** column name */
  TransactionType = 'transaction_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** input type for updating data in table "investor_statement" */
export type Investor_Statement_Set_Input = {
  amount?: InputMaybe<Scalars['float8']>;
  balance?: InputMaybe<Scalars['float8']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  investor_id?: InputMaybe<Scalars['Int']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  transaction_status?: InputMaybe<Scalars['String']>;
  transaction_type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Investor_Statement_Stddev_Fields = {
  __typename?: 'investor_statement_stddev_fields';
  amount?: Maybe<Scalars['Float']>;
  balance?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Investor_Statement_Stddev_Pop_Fields = {
  __typename?: 'investor_statement_stddev_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  balance?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Investor_Statement_Stddev_Samp_Fields = {
  __typename?: 'investor_statement_stddev_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  balance?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Investor_Statement_Sum_Fields = {
  __typename?: 'investor_statement_sum_fields';
  amount?: Maybe<Scalars['float8']>;
  balance?: Maybe<Scalars['float8']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  investor_id?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** update columns of table "investor_statement" */
export enum Investor_Statement_Update_Column {
  /** column name */
  Amount = 'amount',
  /** column name */
  Balance = 'balance',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  Id = 'id',
  /** column name */
  InvestorId = 'investor_id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TransactionStatus = 'transaction_status',
  /** column name */
  TransactionType = 'transaction_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** aggregate var_pop on columns */
export type Investor_Statement_Var_Pop_Fields = {
  __typename?: 'investor_statement_var_pop_fields';
  amount?: Maybe<Scalars['Float']>;
  balance?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Investor_Statement_Var_Samp_Fields = {
  __typename?: 'investor_statement_var_samp_fields';
  amount?: Maybe<Scalars['Float']>;
  balance?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Investor_Statement_Variance_Fields = {
  __typename?: 'investor_statement_variance_fields';
  amount?: Maybe<Scalars['Float']>;
  balance?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate stddev on columns */
export type Investor_Stddev_Fields = {
  __typename?: 'investor_stddev_fields';
  agreement_file_id?: Maybe<Scalars['Float']>;
  approved_by?: Maybe<Scalars['Float']>;
  country_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
  total_committed_budget?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  zipcode?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Investor_Stddev_Pop_Fields = {
  __typename?: 'investor_stddev_pop_fields';
  agreement_file_id?: Maybe<Scalars['Float']>;
  approved_by?: Maybe<Scalars['Float']>;
  country_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
  total_committed_budget?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  zipcode?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Investor_Stddev_Samp_Fields = {
  __typename?: 'investor_stddev_samp_fields';
  agreement_file_id?: Maybe<Scalars['Float']>;
  approved_by?: Maybe<Scalars['Float']>;
  country_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
  total_committed_budget?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  zipcode?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Investor_Sum_Fields = {
  __typename?: 'investor_sum_fields';
  agreement_file_id?: Maybe<Scalars['Int']>;
  approved_by?: Maybe<Scalars['Int']>;
  country_id?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  state_id?: Maybe<Scalars['Int']>;
  total_committed_budget?: Maybe<Scalars['float8']>;
  updated_by?: Maybe<Scalars['Int']>;
  zipcode?: Maybe<Scalars['Int']>;
};

/** update columns of table "investor" */
export enum Investor_Update_Column {
  /** column name */
  AddressLine1 = 'address_line1',
  /** column name */
  AddressLine2 = 'address_line2',
  /** column name */
  AddressLine3 = 'address_line3',
  /** column name */
  AgreementFileId = 'agreement_file_id',
  /** column name */
  AgreementSignedDate = 'agreement_signed_date',
  /** column name */
  ApprovedAt = 'approved_at',
  /** column name */
  ApprovedBy = 'approved_by',
  /** column name */
  BudgetCommittedFrom = 'budget_committed_from',
  /** column name */
  Cin = 'cin',
  /** column name */
  CountryId = 'country_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  Domain = 'domain',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Pan = 'pan',
  /** column name */
  SignerDetails = 'signer_details',
  /** column name */
  StateId = 'state_id',
  /** column name */
  Status = 'status',
  /** column name */
  TenantType = 'tenant_type',
  /** column name */
  TotalCommittedBudget = 'total_committed_budget',
  /** column name */
  Type = 'type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by',
  /** column name */
  Zipcode = 'zipcode'
}

/** columns and relationships of "investor_user" */
export type Investor_User = {
  __typename?: 'investor_user';
  created_at: Scalars['timestamptz'];
  created_by: Scalars['Int'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  /** An object relationship */
  investor: Investor;
  investor_id: Scalars['Int'];
  pan?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  updated_by: Scalars['Int'];
  /** An object relationship */
  user: User;
  user_id: Scalars['Int'];
};

/** aggregated selection of "investor_user" */
export type Investor_User_Aggregate = {
  __typename?: 'investor_user_aggregate';
  aggregate?: Maybe<Investor_User_Aggregate_Fields>;
  nodes: Array<Investor_User>;
};

/** aggregate fields of "investor_user" */
export type Investor_User_Aggregate_Fields = {
  __typename?: 'investor_user_aggregate_fields';
  avg?: Maybe<Investor_User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Investor_User_Max_Fields>;
  min?: Maybe<Investor_User_Min_Fields>;
  stddev?: Maybe<Investor_User_Stddev_Fields>;
  stddev_pop?: Maybe<Investor_User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Investor_User_Stddev_Samp_Fields>;
  sum?: Maybe<Investor_User_Sum_Fields>;
  var_pop?: Maybe<Investor_User_Var_Pop_Fields>;
  var_samp?: Maybe<Investor_User_Var_Samp_Fields>;
  variance?: Maybe<Investor_User_Variance_Fields>;
};


/** aggregate fields of "investor_user" */
export type Investor_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Investor_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "investor_user" */
export type Investor_User_Aggregate_Order_By = {
  avg?: InputMaybe<Investor_User_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Investor_User_Max_Order_By>;
  min?: InputMaybe<Investor_User_Min_Order_By>;
  stddev?: InputMaybe<Investor_User_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Investor_User_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Investor_User_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Investor_User_Sum_Order_By>;
  var_pop?: InputMaybe<Investor_User_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Investor_User_Var_Samp_Order_By>;
  variance?: InputMaybe<Investor_User_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "investor_user" */
export type Investor_User_Arr_Rel_Insert_Input = {
  data: Array<Investor_User_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Investor_User_On_Conflict>;
};

/** aggregate avg on columns */
export type Investor_User_Avg_Fields = {
  __typename?: 'investor_user_avg_fields';
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "investor_user" */
export type Investor_User_Avg_Order_By = {
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "investor_user". All fields are combined with a logical 'AND'. */
export type Investor_User_Bool_Exp = {
  _and?: InputMaybe<Array<Investor_User_Bool_Exp>>;
  _not?: InputMaybe<Investor_User_Bool_Exp>;
  _or?: InputMaybe<Array<Investor_User_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Int_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_by?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  investor?: InputMaybe<Investor_Bool_Exp>;
  investor_id?: InputMaybe<Int_Comparison_Exp>;
  pan?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<User_Bool_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "investor_user" */
export enum Investor_User_Constraint {
  /** unique or primary key constraint */
  InvestorUserPkey = 'investor_user_pkey',
  /** unique or primary key constraint */
  InvestorUserUserIdIdx = 'investor_user_user_id_idx'
}

/** input type for incrementing numeric columns in table "investor_user" */
export type Investor_User_Inc_Input = {
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  investor_id?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "investor_user" */
export type Investor_User_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  investor?: InputMaybe<Investor_Obj_Rel_Insert_Input>;
  investor_id?: InputMaybe<Scalars['Int']>;
  pan?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
  user?: InputMaybe<User_Obj_Rel_Insert_Input>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Investor_User_Max_Fields = {
  __typename?: 'investor_user_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  investor_id?: Maybe<Scalars['Int']>;
  pan?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "investor_user" */
export type Investor_User_Max_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  pan?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Investor_User_Min_Fields = {
  __typename?: 'investor_user_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  investor_id?: Maybe<Scalars['Int']>;
  pan?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "investor_user" */
export type Investor_User_Min_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  pan?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "investor_user" */
export type Investor_User_Mutation_Response = {
  __typename?: 'investor_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Investor_User>;
};

/** on conflict condition type for table "investor_user" */
export type Investor_User_On_Conflict = {
  constraint: Investor_User_Constraint;
  update_columns?: Array<Investor_User_Update_Column>;
  where?: InputMaybe<Investor_User_Bool_Exp>;
};

/** Ordering options when selecting data from "investor_user". */
export type Investor_User_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor?: InputMaybe<Investor_Order_By>;
  investor_id?: InputMaybe<Order_By>;
  pan?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user?: InputMaybe<User_Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: investor_user */
export type Investor_User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "investor_user" */
export enum Investor_User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  Id = 'id',
  /** column name */
  InvestorId = 'investor_id',
  /** column name */
  Pan = 'pan',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "investor_user" */
export type Investor_User_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  investor_id?: InputMaybe<Scalars['Int']>;
  pan?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Investor_User_Stddev_Fields = {
  __typename?: 'investor_user_stddev_fields';
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "investor_user" */
export type Investor_User_Stddev_Order_By = {
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Investor_User_Stddev_Pop_Fields = {
  __typename?: 'investor_user_stddev_pop_fields';
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "investor_user" */
export type Investor_User_Stddev_Pop_Order_By = {
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Investor_User_Stddev_Samp_Fields = {
  __typename?: 'investor_user_stddev_samp_fields';
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "investor_user" */
export type Investor_User_Stddev_Samp_Order_By = {
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Investor_User_Sum_Fields = {
  __typename?: 'investor_user_sum_fields';
  created_by?: Maybe<Scalars['Int']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  investor_id?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "investor_user" */
export type Investor_User_Sum_Order_By = {
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** update columns of table "investor_user" */
export enum Investor_User_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  Id = 'id',
  /** column name */
  InvestorId = 'investor_id',
  /** column name */
  Pan = 'pan',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Investor_User_Var_Pop_Fields = {
  __typename?: 'investor_user_var_pop_fields';
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "investor_user" */
export type Investor_User_Var_Pop_Order_By = {
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Investor_User_Var_Samp_Fields = {
  __typename?: 'investor_user_var_samp_fields';
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "investor_user" */
export type Investor_User_Var_Samp_Order_By = {
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Investor_User_Variance_Fields = {
  __typename?: 'investor_user_variance_fields';
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "investor_user" */
export type Investor_User_Variance_Order_By = {
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** aggregate var_pop on columns */
export type Investor_Var_Pop_Fields = {
  __typename?: 'investor_var_pop_fields';
  agreement_file_id?: Maybe<Scalars['Float']>;
  approved_by?: Maybe<Scalars['Float']>;
  country_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
  total_committed_budget?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  zipcode?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Investor_Var_Samp_Fields = {
  __typename?: 'investor_var_samp_fields';
  agreement_file_id?: Maybe<Scalars['Float']>;
  approved_by?: Maybe<Scalars['Float']>;
  country_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
  total_committed_budget?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  zipcode?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Investor_Variance_Fields = {
  __typename?: 'investor_variance_fields';
  agreement_file_id?: Maybe<Scalars['Float']>;
  approved_by?: Maybe<Scalars['Float']>;
  country_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  state_id?: Maybe<Scalars['Float']>;
  total_committed_budget?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  zipcode?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type Jsonb_Comparison_Exp = {
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  accountingExcelUpload?: Maybe<AccountingExcelUploadOutput>;
  accountingSync?: Maybe<AccountingSyncOutput>;
  bankStatementsUpload?: Maybe<BankStatementsUploadOutput>;
  closeBidding?: Maybe<CloseBiddingOutput>;
  createDeal?: Maybe<CreateDealOutput>;
  delete?: Maybe<DeleteOutput>;
  /** delete data from the table: "account" */
  delete_account?: Maybe<Account_Mutation_Response>;
  /** delete single row from the table: "account" */
  delete_account_by_pk?: Maybe<Account>;
  /** delete data from the table: "banking_partner_integration" */
  delete_banking_partner_integration?: Maybe<Banking_Partner_Integration_Mutation_Response>;
  /** delete data from the table: "bid" */
  delete_bid?: Maybe<Bid_Mutation_Response>;
  /** delete single row from the table: "bid" */
  delete_bid_by_pk?: Maybe<Bid>;
  /** delete data from the table: "blacklisted_tokens" */
  delete_blacklisted_tokens?: Maybe<Blacklisted_Tokens_Mutation_Response>;
  /** delete single row from the table: "blacklisted_tokens" */
  delete_blacklisted_tokens_by_pk?: Maybe<Blacklisted_Tokens>;
  /** delete data from the table: "company" */
  delete_company?: Maybe<Company_Mutation_Response>;
  /** delete single row from the table: "company" */
  delete_company_by_pk?: Maybe<Company>;
  /** delete data from the table: "company_cin" */
  delete_company_cin?: Maybe<Company_Cin_Mutation_Response>;
  /** delete single row from the table: "company_cin" */
  delete_company_cin_by_pk?: Maybe<Company_Cin>;
  /** delete data from the table: "company_gst_return" */
  delete_company_gst_return?: Maybe<Company_Gst_Return_Mutation_Response>;
  /** delete single row from the table: "company_gst_return" */
  delete_company_gst_return_by_pk?: Maybe<Company_Gst_Return>;
  /** delete data from the table: "company_integration" */
  delete_company_integration?: Maybe<Company_Integration_Mutation_Response>;
  /** delete single row from the table: "company_integration" */
  delete_company_integration_by_pk?: Maybe<Company_Integration>;
  /** delete data from the table: "company_integration_file" */
  delete_company_integration_file?: Maybe<Company_Integration_File_Mutation_Response>;
  /** delete single row from the table: "company_integration_file" */
  delete_company_integration_file_by_pk?: Maybe<Company_Integration_File>;
  /** delete data from the table: "company_score" */
  delete_company_score?: Maybe<Company_Score_Mutation_Response>;
  /** delete single row from the table: "company_score" */
  delete_company_score_by_pk?: Maybe<Company_Score>;
  /** delete data from the table: "company_statement" */
  delete_company_statement?: Maybe<Company_Statement_Mutation_Response>;
  /** delete single row from the table: "company_statement" */
  delete_company_statement_by_pk?: Maybe<Company_Statement>;
  /** delete data from the table: "company_user" */
  delete_company_user?: Maybe<Company_User_Mutation_Response>;
  /** delete single row from the table: "company_user" */
  delete_company_user_by_pk?: Maybe<Company_User>;
  /** delete data from the table: "deal" */
  delete_deal?: Maybe<Deal_Mutation_Response>;
  /** delete single row from the table: "deal" */
  delete_deal_by_pk?: Maybe<Deal>;
  /** delete data from the table: "file_registry" */
  delete_file_registry?: Maybe<File_Registry_Mutation_Response>;
  /** delete single row from the table: "file_registry" */
  delete_file_registry_by_pk?: Maybe<File_Registry>;
  /** delete data from the table: "integration_auth" */
  delete_integration_auth?: Maybe<Integration_Auth_Mutation_Response>;
  /** delete single row from the table: "integration_auth" */
  delete_integration_auth_by_pk?: Maybe<Integration_Auth>;
  /** delete data from the table: "internal_statement" */
  delete_internal_statement?: Maybe<Internal_Statement_Mutation_Response>;
  /** delete single row from the table: "internal_statement" */
  delete_internal_statement_by_pk?: Maybe<Internal_Statement>;
  /** delete data from the table: "investor" */
  delete_investor?: Maybe<Investor_Mutation_Response>;
  /** delete single row from the table: "investor" */
  delete_investor_by_pk?: Maybe<Investor>;
  /** delete data from the table: "investor_preference" */
  delete_investor_preference?: Maybe<Investor_Preference_Mutation_Response>;
  /** delete single row from the table: "investor_preference" */
  delete_investor_preference_by_pk?: Maybe<Investor_Preference>;
  /** delete data from the table: "investor_statement" */
  delete_investor_statement?: Maybe<Investor_Statement_Mutation_Response>;
  /** delete single row from the table: "investor_statement" */
  delete_investor_statement_by_pk?: Maybe<Investor_Statement>;
  /** delete data from the table: "investor_user" */
  delete_investor_user?: Maybe<Investor_User_Mutation_Response>;
  /** delete single row from the table: "investor_user" */
  delete_investor_user_by_pk?: Maybe<Investor_User>;
  /** delete data from the table: "ref_account_type" */
  delete_ref_account_type?: Maybe<Ref_Account_Type_Mutation_Response>;
  /** delete single row from the table: "ref_account_type" */
  delete_ref_account_type_by_pk?: Maybe<Ref_Account_Type>;
  /** delete data from the table: "ref_bank" */
  delete_ref_bank?: Maybe<Ref_Bank_Mutation_Response>;
  /** delete single row from the table: "ref_bank" */
  delete_ref_bank_by_pk?: Maybe<Ref_Bank>;
  /** delete data from the table: "ref_billing_period" */
  delete_ref_billing_period?: Maybe<Ref_Billing_Period_Mutation_Response>;
  /** delete single row from the table: "ref_billing_period" */
  delete_ref_billing_period_by_pk?: Maybe<Ref_Billing_Period>;
  /** delete data from the table: "ref_category" */
  delete_ref_category?: Maybe<Ref_Category_Mutation_Response>;
  /** delete single row from the table: "ref_category" */
  delete_ref_category_by_pk?: Maybe<Ref_Category>;
  /** delete data from the table: "ref_company_status" */
  delete_ref_company_status?: Maybe<Ref_Company_Status_Mutation_Response>;
  /** delete single row from the table: "ref_company_status" */
  delete_ref_company_status_by_pk?: Maybe<Ref_Company_Status>;
  /** delete data from the table: "ref_company_type" */
  delete_ref_company_type?: Maybe<Ref_Company_Type_Mutation_Response>;
  /** delete single row from the table: "ref_company_type" */
  delete_ref_company_type_by_pk?: Maybe<Ref_Company_Type>;
  /** delete data from the table: "ref_country" */
  delete_ref_country?: Maybe<Ref_Country_Mutation_Response>;
  /** delete single row from the table: "ref_country" */
  delete_ref_country_by_pk?: Maybe<Ref_Country>;
  /** delete data from the table: "ref_currency" */
  delete_ref_currency?: Maybe<Ref_Currency_Mutation_Response>;
  /** delete single row from the table: "ref_currency" */
  delete_ref_currency_by_pk?: Maybe<Ref_Currency>;
  /** delete data from the table: "ref_file_category" */
  delete_ref_file_category?: Maybe<Ref_File_Category_Mutation_Response>;
  /** delete single row from the table: "ref_file_category" */
  delete_ref_file_category_by_pk?: Maybe<Ref_File_Category>;
  /** delete data from the table: "ref_integration_file_status" */
  delete_ref_integration_file_status?: Maybe<Ref_Integration_File_Status_Mutation_Response>;
  /** delete single row from the table: "ref_integration_file_status" */
  delete_ref_integration_file_status_by_pk?: Maybe<Ref_Integration_File_Status>;
  /** delete data from the table: "ref_integration_status" */
  delete_ref_integration_status?: Maybe<Ref_Integration_Status_Mutation_Response>;
  /** delete single row from the table: "ref_integration_status" */
  delete_ref_integration_status_by_pk?: Maybe<Ref_Integration_Status>;
  /** delete data from the table: "ref_investor_status" */
  delete_ref_investor_status?: Maybe<Ref_Investor_Status_Mutation_Response>;
  /** delete single row from the table: "ref_investor_status" */
  delete_ref_investor_status_by_pk?: Maybe<Ref_Investor_Status>;
  /** delete data from the table: "ref_investor_type" */
  delete_ref_investor_type?: Maybe<Ref_Investor_Type_Mutation_Response>;
  /** delete single row from the table: "ref_investor_type" */
  delete_ref_investor_type_by_pk?: Maybe<Ref_Investor_Type>;
  /** delete data from the table: "ref_perfios_bank_list" */
  delete_ref_perfios_bank_list?: Maybe<Ref_Perfios_Bank_List_Mutation_Response>;
  /** delete single row from the table: "ref_perfios_bank_list" */
  delete_ref_perfios_bank_list_by_pk?: Maybe<Ref_Perfios_Bank_List>;
  /** delete data from the table: "ref_role" */
  delete_ref_role?: Maybe<Ref_Role_Mutation_Response>;
  /** delete single row from the table: "ref_role" */
  delete_ref_role_by_pk?: Maybe<Ref_Role>;
  /** delete data from the table: "ref_source" */
  delete_ref_source?: Maybe<Ref_Source_Mutation_Response>;
  /** delete single row from the table: "ref_source" */
  delete_ref_source_by_pk?: Maybe<Ref_Source>;
  /** delete data from the table: "ref_states" */
  delete_ref_states?: Maybe<Ref_States_Mutation_Response>;
  /** delete single row from the table: "ref_states" */
  delete_ref_states_by_pk?: Maybe<Ref_States>;
  /** delete data from the table: "ref_subscription_status" */
  delete_ref_subscription_status?: Maybe<Ref_Subscription_Status_Mutation_Response>;
  /** delete single row from the table: "ref_subscription_status" */
  delete_ref_subscription_status_by_pk?: Maybe<Ref_Subscription_Status>;
  /** delete data from the table: "ref_tenant_type" */
  delete_ref_tenant_type?: Maybe<Ref_Tenant_Type_Mutation_Response>;
  /** delete single row from the table: "ref_tenant_type" */
  delete_ref_tenant_type_by_pk?: Maybe<Ref_Tenant_Type>;
  /** delete data from the table: "ref_trade_state" */
  delete_ref_trade_state?: Maybe<Ref_Trade_State_Mutation_Response>;
  /** delete single row from the table: "ref_trade_state" */
  delete_ref_trade_state_by_pk?: Maybe<Ref_Trade_State>;
  /** delete data from the table: "ref_trade_status" */
  delete_ref_trade_status?: Maybe<Ref_Trade_Status_Mutation_Response>;
  /** delete single row from the table: "ref_trade_status" */
  delete_ref_trade_status_by_pk?: Maybe<Ref_Trade_Status>;
  /** delete data from the table: "ref_transaction_method" */
  delete_ref_transaction_method?: Maybe<Ref_Transaction_Method_Mutation_Response>;
  /** delete single row from the table: "ref_transaction_method" */
  delete_ref_transaction_method_by_pk?: Maybe<Ref_Transaction_Method>;
  /** delete data from the table: "ref_transaction_status" */
  delete_ref_transaction_status?: Maybe<Ref_Transaction_Status_Mutation_Response>;
  /** delete single row from the table: "ref_transaction_status" */
  delete_ref_transaction_status_by_pk?: Maybe<Ref_Transaction_Status>;
  /** delete data from the table: "ref_transaction_type" */
  delete_ref_transaction_type?: Maybe<Ref_Transaction_Type_Mutation_Response>;
  /** delete single row from the table: "ref_transaction_type" */
  delete_ref_transaction_type_by_pk?: Maybe<Ref_Transaction_Type>;
  /** delete data from the table: "ref_user_status" */
  delete_ref_user_status?: Maybe<Ref_User_Status_Mutation_Response>;
  /** delete single row from the table: "ref_user_status" */
  delete_ref_user_status_by_pk?: Maybe<Ref_User_Status>;
  /** delete data from the table: "scheduled_payout" */
  delete_scheduled_payout?: Maybe<Scheduled_Payout_Mutation_Response>;
  /** delete single row from the table: "scheduled_payout" */
  delete_scheduled_payout_by_pk?: Maybe<Scheduled_Payout>;
  /** delete data from the table: "staff_user" */
  delete_staff_user?: Maybe<Staff_User_Mutation_Response>;
  /** delete single row from the table: "staff_user" */
  delete_staff_user_by_pk?: Maybe<Staff_User>;
  /** delete data from the table: "subscription" */
  delete_subscription?: Maybe<Subscription_Mutation_Response>;
  /** delete single row from the table: "subscription" */
  delete_subscription_by_pk?: Maybe<Subscription>;
  /** delete data from the table: "trade" */
  delete_trade?: Maybe<Trade_Mutation_Response>;
  /** delete single row from the table: "trade" */
  delete_trade_by_pk?: Maybe<Trade>;
  /** delete data from the table: "trade_subscription" */
  delete_trade_subscription?: Maybe<Trade_Subscription_Mutation_Response>;
  /** delete single row from the table: "trade_subscription" */
  delete_trade_subscription_by_pk?: Maybe<Trade_Subscription>;
  /** delete data from the table: "transaction" */
  delete_transaction?: Maybe<Transaction_Mutation_Response>;
  /** delete single row from the table: "transaction" */
  delete_transaction_by_pk?: Maybe<Transaction>;
  /** delete data from the table: "updates_log" */
  delete_updates_log?: Maybe<Updates_Log_Mutation_Response>;
  /** delete single row from the table: "updates_log" */
  delete_updates_log_by_pk?: Maybe<Updates_Log>;
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>;
  /** delete single row from the table: "user" */
  delete_user_by_pk?: Maybe<User>;
  /** delete data from the table: "verification_code" */
  delete_verification_code?: Maybe<Verification_Code_Mutation_Response>;
  /** delete single row from the table: "verification_code" */
  delete_verification_code_by_pk?: Maybe<Verification_Code>;
  /** delete data from the table: "webhook_events" */
  delete_webhook_events?: Maybe<Webhook_Events_Mutation_Response>;
  /** delete single row from the table: "webhook_events" */
  delete_webhook_events_by_pk?: Maybe<Webhook_Events>;
  downloadCiFile?: Maybe<DownloadCiFileOutput>;
  editTradeContracts?: Maybe<EditTradeContractsOutput>;
  exchangeSaveToken?: Maybe<ExchangeSaveTokenOutput>;
  fetchGSTReturnFiling?: Maybe<FetchGstReturnFilingOutput>;
  fetchMCAProfile?: Maybe<FetchMcaProfileOutput>;
  fileRegistryUpdatePasswords?: Maybe<FileRegistryUpdatePasswordsOutput>;
  generateAPA?: Maybe<GenerateApaOutput>;
  generateFileRegistryUploadURL?: Maybe<GenerateFileRegistryUploadUrlOutput>;
  generateTradeEMISchedule?: Maybe<GenerateTradeEmiScheduleOutput>;
  initiateTrade?: Maybe<InitiateTradeOutput>;
  /** insert data into the table: "account" */
  insert_account?: Maybe<Account_Mutation_Response>;
  /** insert a single row into the table: "account" */
  insert_account_one?: Maybe<Account>;
  /** insert data into the table: "banking_partner_integration" */
  insert_banking_partner_integration?: Maybe<Banking_Partner_Integration_Mutation_Response>;
  /** insert a single row into the table: "banking_partner_integration" */
  insert_banking_partner_integration_one?: Maybe<Banking_Partner_Integration>;
  /** insert data into the table: "bid" */
  insert_bid?: Maybe<Bid_Mutation_Response>;
  /** insert a single row into the table: "bid" */
  insert_bid_one?: Maybe<Bid>;
  /** insert data into the table: "blacklisted_tokens" */
  insert_blacklisted_tokens?: Maybe<Blacklisted_Tokens_Mutation_Response>;
  /** insert a single row into the table: "blacklisted_tokens" */
  insert_blacklisted_tokens_one?: Maybe<Blacklisted_Tokens>;
  /** insert data into the table: "company" */
  insert_company?: Maybe<Company_Mutation_Response>;
  /** insert data into the table: "company_cin" */
  insert_company_cin?: Maybe<Company_Cin_Mutation_Response>;
  /** insert a single row into the table: "company_cin" */
  insert_company_cin_one?: Maybe<Company_Cin>;
  /** insert data into the table: "company_gst_return" */
  insert_company_gst_return?: Maybe<Company_Gst_Return_Mutation_Response>;
  /** insert a single row into the table: "company_gst_return" */
  insert_company_gst_return_one?: Maybe<Company_Gst_Return>;
  /** insert data into the table: "company_integration" */
  insert_company_integration?: Maybe<Company_Integration_Mutation_Response>;
  /** insert data into the table: "company_integration_file" */
  insert_company_integration_file?: Maybe<Company_Integration_File_Mutation_Response>;
  /** insert a single row into the table: "company_integration_file" */
  insert_company_integration_file_one?: Maybe<Company_Integration_File>;
  /** insert a single row into the table: "company_integration" */
  insert_company_integration_one?: Maybe<Company_Integration>;
  /** insert a single row into the table: "company" */
  insert_company_one?: Maybe<Company>;
  /** insert data into the table: "company_score" */
  insert_company_score?: Maybe<Company_Score_Mutation_Response>;
  /** insert a single row into the table: "company_score" */
  insert_company_score_one?: Maybe<Company_Score>;
  /** insert data into the table: "company_statement" */
  insert_company_statement?: Maybe<Company_Statement_Mutation_Response>;
  /** insert a single row into the table: "company_statement" */
  insert_company_statement_one?: Maybe<Company_Statement>;
  /** insert data into the table: "company_user" */
  insert_company_user?: Maybe<Company_User_Mutation_Response>;
  /** insert a single row into the table: "company_user" */
  insert_company_user_one?: Maybe<Company_User>;
  /** insert data into the table: "deal" */
  insert_deal?: Maybe<Deal_Mutation_Response>;
  /** insert a single row into the table: "deal" */
  insert_deal_one?: Maybe<Deal>;
  /** insert data into the table: "file_registry" */
  insert_file_registry?: Maybe<File_Registry_Mutation_Response>;
  /** insert a single row into the table: "file_registry" */
  insert_file_registry_one?: Maybe<File_Registry>;
  /** insert data into the table: "integration_auth" */
  insert_integration_auth?: Maybe<Integration_Auth_Mutation_Response>;
  /** insert a single row into the table: "integration_auth" */
  insert_integration_auth_one?: Maybe<Integration_Auth>;
  /** insert data into the table: "internal_statement" */
  insert_internal_statement?: Maybe<Internal_Statement_Mutation_Response>;
  /** insert a single row into the table: "internal_statement" */
  insert_internal_statement_one?: Maybe<Internal_Statement>;
  /** insert data into the table: "investor" */
  insert_investor?: Maybe<Investor_Mutation_Response>;
  /** insert a single row into the table: "investor" */
  insert_investor_one?: Maybe<Investor>;
  /** insert data into the table: "investor_preference" */
  insert_investor_preference?: Maybe<Investor_Preference_Mutation_Response>;
  /** insert a single row into the table: "investor_preference" */
  insert_investor_preference_one?: Maybe<Investor_Preference>;
  /** insert data into the table: "investor_statement" */
  insert_investor_statement?: Maybe<Investor_Statement_Mutation_Response>;
  /** insert a single row into the table: "investor_statement" */
  insert_investor_statement_one?: Maybe<Investor_Statement>;
  /** insert data into the table: "investor_user" */
  insert_investor_user?: Maybe<Investor_User_Mutation_Response>;
  /** insert a single row into the table: "investor_user" */
  insert_investor_user_one?: Maybe<Investor_User>;
  /** insert data into the table: "ref_account_type" */
  insert_ref_account_type?: Maybe<Ref_Account_Type_Mutation_Response>;
  /** insert a single row into the table: "ref_account_type" */
  insert_ref_account_type_one?: Maybe<Ref_Account_Type>;
  /** insert data into the table: "ref_bank" */
  insert_ref_bank?: Maybe<Ref_Bank_Mutation_Response>;
  /** insert a single row into the table: "ref_bank" */
  insert_ref_bank_one?: Maybe<Ref_Bank>;
  /** insert data into the table: "ref_billing_period" */
  insert_ref_billing_period?: Maybe<Ref_Billing_Period_Mutation_Response>;
  /** insert a single row into the table: "ref_billing_period" */
  insert_ref_billing_period_one?: Maybe<Ref_Billing_Period>;
  /** insert data into the table: "ref_category" */
  insert_ref_category?: Maybe<Ref_Category_Mutation_Response>;
  /** insert a single row into the table: "ref_category" */
  insert_ref_category_one?: Maybe<Ref_Category>;
  /** insert data into the table: "ref_company_status" */
  insert_ref_company_status?: Maybe<Ref_Company_Status_Mutation_Response>;
  /** insert a single row into the table: "ref_company_status" */
  insert_ref_company_status_one?: Maybe<Ref_Company_Status>;
  /** insert data into the table: "ref_company_type" */
  insert_ref_company_type?: Maybe<Ref_Company_Type_Mutation_Response>;
  /** insert a single row into the table: "ref_company_type" */
  insert_ref_company_type_one?: Maybe<Ref_Company_Type>;
  /** insert data into the table: "ref_country" */
  insert_ref_country?: Maybe<Ref_Country_Mutation_Response>;
  /** insert a single row into the table: "ref_country" */
  insert_ref_country_one?: Maybe<Ref_Country>;
  /** insert data into the table: "ref_currency" */
  insert_ref_currency?: Maybe<Ref_Currency_Mutation_Response>;
  /** insert a single row into the table: "ref_currency" */
  insert_ref_currency_one?: Maybe<Ref_Currency>;
  /** insert data into the table: "ref_file_category" */
  insert_ref_file_category?: Maybe<Ref_File_Category_Mutation_Response>;
  /** insert a single row into the table: "ref_file_category" */
  insert_ref_file_category_one?: Maybe<Ref_File_Category>;
  /** insert data into the table: "ref_integration_file_status" */
  insert_ref_integration_file_status?: Maybe<Ref_Integration_File_Status_Mutation_Response>;
  /** insert a single row into the table: "ref_integration_file_status" */
  insert_ref_integration_file_status_one?: Maybe<Ref_Integration_File_Status>;
  /** insert data into the table: "ref_integration_status" */
  insert_ref_integration_status?: Maybe<Ref_Integration_Status_Mutation_Response>;
  /** insert a single row into the table: "ref_integration_status" */
  insert_ref_integration_status_one?: Maybe<Ref_Integration_Status>;
  /** insert data into the table: "ref_investor_status" */
  insert_ref_investor_status?: Maybe<Ref_Investor_Status_Mutation_Response>;
  /** insert a single row into the table: "ref_investor_status" */
  insert_ref_investor_status_one?: Maybe<Ref_Investor_Status>;
  /** insert data into the table: "ref_investor_type" */
  insert_ref_investor_type?: Maybe<Ref_Investor_Type_Mutation_Response>;
  /** insert a single row into the table: "ref_investor_type" */
  insert_ref_investor_type_one?: Maybe<Ref_Investor_Type>;
  /** insert data into the table: "ref_perfios_bank_list" */
  insert_ref_perfios_bank_list?: Maybe<Ref_Perfios_Bank_List_Mutation_Response>;
  /** insert a single row into the table: "ref_perfios_bank_list" */
  insert_ref_perfios_bank_list_one?: Maybe<Ref_Perfios_Bank_List>;
  /** insert data into the table: "ref_role" */
  insert_ref_role?: Maybe<Ref_Role_Mutation_Response>;
  /** insert a single row into the table: "ref_role" */
  insert_ref_role_one?: Maybe<Ref_Role>;
  /** insert data into the table: "ref_source" */
  insert_ref_source?: Maybe<Ref_Source_Mutation_Response>;
  /** insert a single row into the table: "ref_source" */
  insert_ref_source_one?: Maybe<Ref_Source>;
  /** insert data into the table: "ref_states" */
  insert_ref_states?: Maybe<Ref_States_Mutation_Response>;
  /** insert a single row into the table: "ref_states" */
  insert_ref_states_one?: Maybe<Ref_States>;
  /** insert data into the table: "ref_subscription_status" */
  insert_ref_subscription_status?: Maybe<Ref_Subscription_Status_Mutation_Response>;
  /** insert a single row into the table: "ref_subscription_status" */
  insert_ref_subscription_status_one?: Maybe<Ref_Subscription_Status>;
  /** insert data into the table: "ref_tenant_type" */
  insert_ref_tenant_type?: Maybe<Ref_Tenant_Type_Mutation_Response>;
  /** insert a single row into the table: "ref_tenant_type" */
  insert_ref_tenant_type_one?: Maybe<Ref_Tenant_Type>;
  /** insert data into the table: "ref_trade_state" */
  insert_ref_trade_state?: Maybe<Ref_Trade_State_Mutation_Response>;
  /** insert a single row into the table: "ref_trade_state" */
  insert_ref_trade_state_one?: Maybe<Ref_Trade_State>;
  /** insert data into the table: "ref_trade_status" */
  insert_ref_trade_status?: Maybe<Ref_Trade_Status_Mutation_Response>;
  /** insert a single row into the table: "ref_trade_status" */
  insert_ref_trade_status_one?: Maybe<Ref_Trade_Status>;
  /** insert data into the table: "ref_transaction_method" */
  insert_ref_transaction_method?: Maybe<Ref_Transaction_Method_Mutation_Response>;
  /** insert a single row into the table: "ref_transaction_method" */
  insert_ref_transaction_method_one?: Maybe<Ref_Transaction_Method>;
  /** insert data into the table: "ref_transaction_status" */
  insert_ref_transaction_status?: Maybe<Ref_Transaction_Status_Mutation_Response>;
  /** insert a single row into the table: "ref_transaction_status" */
  insert_ref_transaction_status_one?: Maybe<Ref_Transaction_Status>;
  /** insert data into the table: "ref_transaction_type" */
  insert_ref_transaction_type?: Maybe<Ref_Transaction_Type_Mutation_Response>;
  /** insert a single row into the table: "ref_transaction_type" */
  insert_ref_transaction_type_one?: Maybe<Ref_Transaction_Type>;
  /** insert data into the table: "ref_user_status" */
  insert_ref_user_status?: Maybe<Ref_User_Status_Mutation_Response>;
  /** insert a single row into the table: "ref_user_status" */
  insert_ref_user_status_one?: Maybe<Ref_User_Status>;
  /** insert data into the table: "scheduled_payout" */
  insert_scheduled_payout?: Maybe<Scheduled_Payout_Mutation_Response>;
  /** insert a single row into the table: "scheduled_payout" */
  insert_scheduled_payout_one?: Maybe<Scheduled_Payout>;
  /** insert data into the table: "staff_user" */
  insert_staff_user?: Maybe<Staff_User_Mutation_Response>;
  /** insert a single row into the table: "staff_user" */
  insert_staff_user_one?: Maybe<Staff_User>;
  /** insert data into the table: "subscription" */
  insert_subscription?: Maybe<Subscription_Mutation_Response>;
  /** insert a single row into the table: "subscription" */
  insert_subscription_one?: Maybe<Subscription>;
  /** insert data into the table: "trade" */
  insert_trade?: Maybe<Trade_Mutation_Response>;
  /** insert a single row into the table: "trade" */
  insert_trade_one?: Maybe<Trade>;
  /** insert data into the table: "trade_subscription" */
  insert_trade_subscription?: Maybe<Trade_Subscription_Mutation_Response>;
  /** insert a single row into the table: "trade_subscription" */
  insert_trade_subscription_one?: Maybe<Trade_Subscription>;
  /** insert data into the table: "transaction" */
  insert_transaction?: Maybe<Transaction_Mutation_Response>;
  /** insert a single row into the table: "transaction" */
  insert_transaction_one?: Maybe<Transaction>;
  /** insert data into the table: "updates_log" */
  insert_updates_log?: Maybe<Updates_Log_Mutation_Response>;
  /** insert a single row into the table: "updates_log" */
  insert_updates_log_one?: Maybe<Updates_Log>;
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>;
  /** insert a single row into the table: "user" */
  insert_user_one?: Maybe<User>;
  /** insert data into the table: "verification_code" */
  insert_verification_code?: Maybe<Verification_Code_Mutation_Response>;
  /** insert a single row into the table: "verification_code" */
  insert_verification_code_one?: Maybe<Verification_Code>;
  /** insert data into the table: "webhook_events" */
  insert_webhook_events?: Maybe<Webhook_Events_Mutation_Response>;
  /** insert a single row into the table: "webhook_events" */
  insert_webhook_events_one?: Maybe<Webhook_Events>;
  integrationsApprove?: Maybe<IntegrationsApproveOutput>;
  integrationsUpload?: Maybe<IntegrationsUploadOutput>;
  netBankingPull?: Maybe<NetBankingPullOutput>;
  notifyCustomersUpcomingEMI?: Maybe<NotifyCustomersUpcomingEmiOutput>;
  notifyNewDeals?: Maybe<NotifyNewDealsOutput>;
  opsAccountSetupNotify?: Maybe<OpsAccountSetupNotifyOutput>;
  placeBid?: Maybe<PlaceBidOutput>;
  presentMandateDigio?: Maybe<PresentMandateDigioOutput>;
  previewAPA?: Maybe<PreviewApaOutput>;
  reQueueCompanyIntegration?: Maybe<ReQueueCompanyIntegrationOutput>;
  refreshTokens?: Maybe<RefreshTokensOutput>;
  registerNachMandate?: Maybe<RegisterNachMandateOutput>;
  remindInvestors?: Maybe<RemindInvestorsOutput>;
  runScoringEngine?: Maybe<RunScoringEngineOutput>;
  submitSignedNachMandate?: Maybe<SubmitSignedNachMandateOutput>;
  subscriptionCSVUpload?: Maybe<SubscriptionCsvUploadOutput>;
  subscriptionSync?: Maybe<SubscriptionSyncOutput>;
  /** update data of the table: "account" */
  update_account?: Maybe<Account_Mutation_Response>;
  /** update single row of the table: "account" */
  update_account_by_pk?: Maybe<Account>;
  /** update data of the table: "banking_partner_integration" */
  update_banking_partner_integration?: Maybe<Banking_Partner_Integration_Mutation_Response>;
  /** update data of the table: "bid" */
  update_bid?: Maybe<Bid_Mutation_Response>;
  /** update single row of the table: "bid" */
  update_bid_by_pk?: Maybe<Bid>;
  /** update data of the table: "blacklisted_tokens" */
  update_blacklisted_tokens?: Maybe<Blacklisted_Tokens_Mutation_Response>;
  /** update single row of the table: "blacklisted_tokens" */
  update_blacklisted_tokens_by_pk?: Maybe<Blacklisted_Tokens>;
  /** update data of the table: "company" */
  update_company?: Maybe<Company_Mutation_Response>;
  /** update single row of the table: "company" */
  update_company_by_pk?: Maybe<Company>;
  /** update data of the table: "company_cin" */
  update_company_cin?: Maybe<Company_Cin_Mutation_Response>;
  /** update single row of the table: "company_cin" */
  update_company_cin_by_pk?: Maybe<Company_Cin>;
  /** update data of the table: "company_gst_return" */
  update_company_gst_return?: Maybe<Company_Gst_Return_Mutation_Response>;
  /** update single row of the table: "company_gst_return" */
  update_company_gst_return_by_pk?: Maybe<Company_Gst_Return>;
  /** update data of the table: "company_integration" */
  update_company_integration?: Maybe<Company_Integration_Mutation_Response>;
  /** update single row of the table: "company_integration" */
  update_company_integration_by_pk?: Maybe<Company_Integration>;
  /** update data of the table: "company_integration_file" */
  update_company_integration_file?: Maybe<Company_Integration_File_Mutation_Response>;
  /** update single row of the table: "company_integration_file" */
  update_company_integration_file_by_pk?: Maybe<Company_Integration_File>;
  /** update data of the table: "company_score" */
  update_company_score?: Maybe<Company_Score_Mutation_Response>;
  /** update single row of the table: "company_score" */
  update_company_score_by_pk?: Maybe<Company_Score>;
  /** update data of the table: "company_statement" */
  update_company_statement?: Maybe<Company_Statement_Mutation_Response>;
  /** update single row of the table: "company_statement" */
  update_company_statement_by_pk?: Maybe<Company_Statement>;
  /** update data of the table: "company_user" */
  update_company_user?: Maybe<Company_User_Mutation_Response>;
  /** update single row of the table: "company_user" */
  update_company_user_by_pk?: Maybe<Company_User>;
  /** update data of the table: "deal" */
  update_deal?: Maybe<Deal_Mutation_Response>;
  /** update single row of the table: "deal" */
  update_deal_by_pk?: Maybe<Deal>;
  /** update data of the table: "file_registry" */
  update_file_registry?: Maybe<File_Registry_Mutation_Response>;
  /** update single row of the table: "file_registry" */
  update_file_registry_by_pk?: Maybe<File_Registry>;
  /** update data of the table: "integration_auth" */
  update_integration_auth?: Maybe<Integration_Auth_Mutation_Response>;
  /** update single row of the table: "integration_auth" */
  update_integration_auth_by_pk?: Maybe<Integration_Auth>;
  /** update data of the table: "internal_statement" */
  update_internal_statement?: Maybe<Internal_Statement_Mutation_Response>;
  /** update single row of the table: "internal_statement" */
  update_internal_statement_by_pk?: Maybe<Internal_Statement>;
  /** update data of the table: "investor" */
  update_investor?: Maybe<Investor_Mutation_Response>;
  /** update single row of the table: "investor" */
  update_investor_by_pk?: Maybe<Investor>;
  /** update data of the table: "investor_preference" */
  update_investor_preference?: Maybe<Investor_Preference_Mutation_Response>;
  /** update single row of the table: "investor_preference" */
  update_investor_preference_by_pk?: Maybe<Investor_Preference>;
  /** update data of the table: "investor_statement" */
  update_investor_statement?: Maybe<Investor_Statement_Mutation_Response>;
  /** update single row of the table: "investor_statement" */
  update_investor_statement_by_pk?: Maybe<Investor_Statement>;
  /** update data of the table: "investor_user" */
  update_investor_user?: Maybe<Investor_User_Mutation_Response>;
  /** update single row of the table: "investor_user" */
  update_investor_user_by_pk?: Maybe<Investor_User>;
  /** update data of the table: "ref_account_type" */
  update_ref_account_type?: Maybe<Ref_Account_Type_Mutation_Response>;
  /** update single row of the table: "ref_account_type" */
  update_ref_account_type_by_pk?: Maybe<Ref_Account_Type>;
  /** update data of the table: "ref_bank" */
  update_ref_bank?: Maybe<Ref_Bank_Mutation_Response>;
  /** update single row of the table: "ref_bank" */
  update_ref_bank_by_pk?: Maybe<Ref_Bank>;
  /** update data of the table: "ref_billing_period" */
  update_ref_billing_period?: Maybe<Ref_Billing_Period_Mutation_Response>;
  /** update single row of the table: "ref_billing_period" */
  update_ref_billing_period_by_pk?: Maybe<Ref_Billing_Period>;
  /** update data of the table: "ref_category" */
  update_ref_category?: Maybe<Ref_Category_Mutation_Response>;
  /** update single row of the table: "ref_category" */
  update_ref_category_by_pk?: Maybe<Ref_Category>;
  /** update data of the table: "ref_company_status" */
  update_ref_company_status?: Maybe<Ref_Company_Status_Mutation_Response>;
  /** update single row of the table: "ref_company_status" */
  update_ref_company_status_by_pk?: Maybe<Ref_Company_Status>;
  /** update data of the table: "ref_company_type" */
  update_ref_company_type?: Maybe<Ref_Company_Type_Mutation_Response>;
  /** update single row of the table: "ref_company_type" */
  update_ref_company_type_by_pk?: Maybe<Ref_Company_Type>;
  /** update data of the table: "ref_country" */
  update_ref_country?: Maybe<Ref_Country_Mutation_Response>;
  /** update single row of the table: "ref_country" */
  update_ref_country_by_pk?: Maybe<Ref_Country>;
  /** update data of the table: "ref_currency" */
  update_ref_currency?: Maybe<Ref_Currency_Mutation_Response>;
  /** update single row of the table: "ref_currency" */
  update_ref_currency_by_pk?: Maybe<Ref_Currency>;
  /** update data of the table: "ref_file_category" */
  update_ref_file_category?: Maybe<Ref_File_Category_Mutation_Response>;
  /** update single row of the table: "ref_file_category" */
  update_ref_file_category_by_pk?: Maybe<Ref_File_Category>;
  /** update data of the table: "ref_integration_file_status" */
  update_ref_integration_file_status?: Maybe<Ref_Integration_File_Status_Mutation_Response>;
  /** update single row of the table: "ref_integration_file_status" */
  update_ref_integration_file_status_by_pk?: Maybe<Ref_Integration_File_Status>;
  /** update data of the table: "ref_integration_status" */
  update_ref_integration_status?: Maybe<Ref_Integration_Status_Mutation_Response>;
  /** update single row of the table: "ref_integration_status" */
  update_ref_integration_status_by_pk?: Maybe<Ref_Integration_Status>;
  /** update data of the table: "ref_investor_status" */
  update_ref_investor_status?: Maybe<Ref_Investor_Status_Mutation_Response>;
  /** update single row of the table: "ref_investor_status" */
  update_ref_investor_status_by_pk?: Maybe<Ref_Investor_Status>;
  /** update data of the table: "ref_investor_type" */
  update_ref_investor_type?: Maybe<Ref_Investor_Type_Mutation_Response>;
  /** update single row of the table: "ref_investor_type" */
  update_ref_investor_type_by_pk?: Maybe<Ref_Investor_Type>;
  /** update data of the table: "ref_perfios_bank_list" */
  update_ref_perfios_bank_list?: Maybe<Ref_Perfios_Bank_List_Mutation_Response>;
  /** update single row of the table: "ref_perfios_bank_list" */
  update_ref_perfios_bank_list_by_pk?: Maybe<Ref_Perfios_Bank_List>;
  /** update data of the table: "ref_role" */
  update_ref_role?: Maybe<Ref_Role_Mutation_Response>;
  /** update single row of the table: "ref_role" */
  update_ref_role_by_pk?: Maybe<Ref_Role>;
  /** update data of the table: "ref_source" */
  update_ref_source?: Maybe<Ref_Source_Mutation_Response>;
  /** update single row of the table: "ref_source" */
  update_ref_source_by_pk?: Maybe<Ref_Source>;
  /** update data of the table: "ref_states" */
  update_ref_states?: Maybe<Ref_States_Mutation_Response>;
  /** update single row of the table: "ref_states" */
  update_ref_states_by_pk?: Maybe<Ref_States>;
  /** update data of the table: "ref_subscription_status" */
  update_ref_subscription_status?: Maybe<Ref_Subscription_Status_Mutation_Response>;
  /** update single row of the table: "ref_subscription_status" */
  update_ref_subscription_status_by_pk?: Maybe<Ref_Subscription_Status>;
  /** update data of the table: "ref_tenant_type" */
  update_ref_tenant_type?: Maybe<Ref_Tenant_Type_Mutation_Response>;
  /** update single row of the table: "ref_tenant_type" */
  update_ref_tenant_type_by_pk?: Maybe<Ref_Tenant_Type>;
  /** update data of the table: "ref_trade_state" */
  update_ref_trade_state?: Maybe<Ref_Trade_State_Mutation_Response>;
  /** update single row of the table: "ref_trade_state" */
  update_ref_trade_state_by_pk?: Maybe<Ref_Trade_State>;
  /** update data of the table: "ref_trade_status" */
  update_ref_trade_status?: Maybe<Ref_Trade_Status_Mutation_Response>;
  /** update single row of the table: "ref_trade_status" */
  update_ref_trade_status_by_pk?: Maybe<Ref_Trade_Status>;
  /** update data of the table: "ref_transaction_method" */
  update_ref_transaction_method?: Maybe<Ref_Transaction_Method_Mutation_Response>;
  /** update single row of the table: "ref_transaction_method" */
  update_ref_transaction_method_by_pk?: Maybe<Ref_Transaction_Method>;
  /** update data of the table: "ref_transaction_status" */
  update_ref_transaction_status?: Maybe<Ref_Transaction_Status_Mutation_Response>;
  /** update single row of the table: "ref_transaction_status" */
  update_ref_transaction_status_by_pk?: Maybe<Ref_Transaction_Status>;
  /** update data of the table: "ref_transaction_type" */
  update_ref_transaction_type?: Maybe<Ref_Transaction_Type_Mutation_Response>;
  /** update single row of the table: "ref_transaction_type" */
  update_ref_transaction_type_by_pk?: Maybe<Ref_Transaction_Type>;
  /** update data of the table: "ref_user_status" */
  update_ref_user_status?: Maybe<Ref_User_Status_Mutation_Response>;
  /** update single row of the table: "ref_user_status" */
  update_ref_user_status_by_pk?: Maybe<Ref_User_Status>;
  /** update data of the table: "scheduled_payout" */
  update_scheduled_payout?: Maybe<Scheduled_Payout_Mutation_Response>;
  /** update single row of the table: "scheduled_payout" */
  update_scheduled_payout_by_pk?: Maybe<Scheduled_Payout>;
  /** update data of the table: "staff_user" */
  update_staff_user?: Maybe<Staff_User_Mutation_Response>;
  /** update single row of the table: "staff_user" */
  update_staff_user_by_pk?: Maybe<Staff_User>;
  /** update data of the table: "subscription" */
  update_subscription?: Maybe<Subscription_Mutation_Response>;
  /** update single row of the table: "subscription" */
  update_subscription_by_pk?: Maybe<Subscription>;
  /** update data of the table: "trade" */
  update_trade?: Maybe<Trade_Mutation_Response>;
  /** update single row of the table: "trade" */
  update_trade_by_pk?: Maybe<Trade>;
  /** update data of the table: "trade_subscription" */
  update_trade_subscription?: Maybe<Trade_Subscription_Mutation_Response>;
  /** update single row of the table: "trade_subscription" */
  update_trade_subscription_by_pk?: Maybe<Trade_Subscription>;
  /** update data of the table: "transaction" */
  update_transaction?: Maybe<Transaction_Mutation_Response>;
  /** update single row of the table: "transaction" */
  update_transaction_by_pk?: Maybe<Transaction>;
  /** update data of the table: "updates_log" */
  update_updates_log?: Maybe<Updates_Log_Mutation_Response>;
  /** update single row of the table: "updates_log" */
  update_updates_log_by_pk?: Maybe<Updates_Log>;
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>;
  /** update single row of the table: "user" */
  update_user_by_pk?: Maybe<User>;
  /** update data of the table: "verification_code" */
  update_verification_code?: Maybe<Verification_Code_Mutation_Response>;
  /** update single row of the table: "verification_code" */
  update_verification_code_by_pk?: Maybe<Verification_Code>;
  /** update data of the table: "webhook_events" */
  update_webhook_events?: Maybe<Webhook_Events_Mutation_Response>;
  /** update single row of the table: "webhook_events" */
  update_webhook_events_by_pk?: Maybe<Webhook_Events>;
  uploadSignedNachMandate?: Maybe<UploadSignedNachMandateOutput>;
  verifiedSubscriptionCSVUpload?: Maybe<VerifiedSubscriptionCsvUploadOutput>;
};


/** mutation root */
export type Mutation_RootAccountingExcelUploadArgs = {
  args: AccountingExcelUploadInput;
};


/** mutation root */
export type Mutation_RootAccountingSyncArgs = {
  args: AccountingSyncInput;
};


/** mutation root */
export type Mutation_RootBankStatementsUploadArgs = {
  args: BankStatementsUploadInput;
};


/** mutation root */
export type Mutation_RootCreateDealArgs = {
  args: CreateDealInput;
};


/** mutation root */
export type Mutation_RootDeleteArgs = {
  args: DeleteInput;
};


/** mutation root */
export type Mutation_RootDelete_AccountArgs = {
  where: Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Account_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Banking_Partner_IntegrationArgs = {
  where: Banking_Partner_Integration_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_BidArgs = {
  where: Bid_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Bid_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Blacklisted_TokensArgs = {
  where: Blacklisted_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Blacklisted_Tokens_By_PkArgs = {
  token: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_CompanyArgs = {
  where: Company_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Company_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Company_CinArgs = {
  where: Company_Cin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Company_Cin_By_PkArgs = {
  cin: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Company_Gst_ReturnArgs = {
  where: Company_Gst_Return_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Company_Gst_Return_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Company_IntegrationArgs = {
  where: Company_Integration_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Company_Integration_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Company_Integration_FileArgs = {
  where: Company_Integration_File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Company_Integration_File_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Company_ScoreArgs = {
  where: Company_Score_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Company_Score_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Company_StatementArgs = {
  where: Company_Statement_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Company_Statement_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Company_UserArgs = {
  where: Company_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Company_User_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_DealArgs = {
  where: Deal_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Deal_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_File_RegistryArgs = {
  where: File_Registry_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_File_Registry_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Integration_AuthArgs = {
  where: Integration_Auth_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Integration_Auth_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Internal_StatementArgs = {
  where: Internal_Statement_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Internal_Statement_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_InvestorArgs = {
  where: Investor_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Investor_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Investor_PreferenceArgs = {
  where: Investor_Preference_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Investor_Preference_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Investor_StatementArgs = {
  where: Investor_Statement_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Investor_Statement_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Investor_UserArgs = {
  where: Investor_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Investor_User_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Ref_Account_TypeArgs = {
  where: Ref_Account_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ref_Account_Type_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Ref_BankArgs = {
  where: Ref_Bank_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ref_Bank_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Ref_Billing_PeriodArgs = {
  where: Ref_Billing_Period_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ref_Billing_Period_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Ref_CategoryArgs = {
  where: Ref_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ref_Category_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Ref_Company_StatusArgs = {
  where: Ref_Company_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ref_Company_Status_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Ref_Company_TypeArgs = {
  where: Ref_Company_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ref_Company_Type_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Ref_CountryArgs = {
  where: Ref_Country_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ref_Country_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Ref_CurrencyArgs = {
  where: Ref_Currency_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ref_Currency_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Ref_File_CategoryArgs = {
  where: Ref_File_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ref_File_Category_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Ref_Integration_File_StatusArgs = {
  where: Ref_Integration_File_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ref_Integration_File_Status_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Ref_Integration_StatusArgs = {
  where: Ref_Integration_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ref_Integration_Status_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Ref_Investor_StatusArgs = {
  where: Ref_Investor_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ref_Investor_Status_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Ref_Investor_TypeArgs = {
  where: Ref_Investor_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ref_Investor_Type_By_PkArgs = {
  value: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Ref_Perfios_Bank_ListArgs = {
  where: Ref_Perfios_Bank_List_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ref_Perfios_Bank_List_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Ref_RoleArgs = {
  where: Ref_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ref_Role_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Ref_SourceArgs = {
  where: Ref_Source_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ref_Source_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Ref_StatesArgs = {
  where: Ref_States_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ref_States_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Ref_Subscription_StatusArgs = {
  where: Ref_Subscription_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ref_Subscription_Status_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Ref_Tenant_TypeArgs = {
  where: Ref_Tenant_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ref_Tenant_Type_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Ref_Trade_StateArgs = {
  where: Ref_Trade_State_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ref_Trade_State_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Ref_Trade_StatusArgs = {
  where: Ref_Trade_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ref_Trade_Status_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Ref_Transaction_MethodArgs = {
  where: Ref_Transaction_Method_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ref_Transaction_Method_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Ref_Transaction_StatusArgs = {
  where: Ref_Transaction_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ref_Transaction_Status_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Ref_Transaction_TypeArgs = {
  where: Ref_Transaction_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ref_Transaction_Type_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Ref_User_StatusArgs = {
  where: Ref_User_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Ref_User_Status_By_PkArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_Scheduled_PayoutArgs = {
  where: Scheduled_Payout_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Scheduled_Payout_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Staff_UserArgs = {
  where: Staff_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Staff_User_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_SubscriptionArgs = {
  where: Subscription_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Subscription_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_TradeArgs = {
  where: Trade_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Trade_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Trade_SubscriptionArgs = {
  where: Trade_Subscription_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Trade_Subscription_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_TransactionArgs = {
  where: Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Transaction_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Updates_LogArgs = {
  where: Updates_Log_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Updates_Log_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_User_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Verification_CodeArgs = {
  where: Verification_Code_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Verification_Code_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootDelete_Webhook_EventsArgs = {
  where: Webhook_Events_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Webhook_Events_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootDownloadCiFileArgs = {
  args: DownloadCiFileInput;
};


/** mutation root */
export type Mutation_RootEditTradeContractsArgs = {
  args: EditTradeContractsInput;
};


/** mutation root */
export type Mutation_RootExchangeSaveTokenArgs = {
  args: ExchangeSaveTokenInput;
};


/** mutation root */
export type Mutation_RootFetchGstReturnFilingArgs = {
  args: FetchGstReturnFilingInput;
};


/** mutation root */
export type Mutation_RootFetchMcaProfileArgs = {
  args: FetchMcaProfileInput;
};


/** mutation root */
export type Mutation_RootFileRegistryUpdatePasswordsArgs = {
  args?: InputMaybe<Array<FileRegistryUpdatePasswordsInput>>;
};


/** mutation root */
export type Mutation_RootGenerateApaArgs = {
  args: GenerateApaInput;
};


/** mutation root */
export type Mutation_RootGenerateFileRegistryUploadUrlArgs = {
  args: GenerateFileRegistryUploadUrlInput;
};


/** mutation root */
export type Mutation_RootGenerateTradeEmiScheduleArgs = {
  args: GenerateTradeEmiScheduleInput;
};


/** mutation root */
export type Mutation_RootInitiateTradeArgs = {
  args: InitiateTradeInput;
};


/** mutation root */
export type Mutation_RootInsert_AccountArgs = {
  objects: Array<Account_Insert_Input>;
  on_conflict?: InputMaybe<Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Account_OneArgs = {
  object: Account_Insert_Input;
  on_conflict?: InputMaybe<Account_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Banking_Partner_IntegrationArgs = {
  objects: Array<Banking_Partner_Integration_Insert_Input>;
};


/** mutation root */
export type Mutation_RootInsert_Banking_Partner_Integration_OneArgs = {
  object: Banking_Partner_Integration_Insert_Input;
};


/** mutation root */
export type Mutation_RootInsert_BidArgs = {
  objects: Array<Bid_Insert_Input>;
  on_conflict?: InputMaybe<Bid_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Bid_OneArgs = {
  object: Bid_Insert_Input;
  on_conflict?: InputMaybe<Bid_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Blacklisted_TokensArgs = {
  objects: Array<Blacklisted_Tokens_Insert_Input>;
  on_conflict?: InputMaybe<Blacklisted_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Blacklisted_Tokens_OneArgs = {
  object: Blacklisted_Tokens_Insert_Input;
  on_conflict?: InputMaybe<Blacklisted_Tokens_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_CompanyArgs = {
  objects: Array<Company_Insert_Input>;
  on_conflict?: InputMaybe<Company_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Company_CinArgs = {
  objects: Array<Company_Cin_Insert_Input>;
  on_conflict?: InputMaybe<Company_Cin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Company_Cin_OneArgs = {
  object: Company_Cin_Insert_Input;
  on_conflict?: InputMaybe<Company_Cin_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Company_Gst_ReturnArgs = {
  objects: Array<Company_Gst_Return_Insert_Input>;
  on_conflict?: InputMaybe<Company_Gst_Return_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Company_Gst_Return_OneArgs = {
  object: Company_Gst_Return_Insert_Input;
  on_conflict?: InputMaybe<Company_Gst_Return_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Company_IntegrationArgs = {
  objects: Array<Company_Integration_Insert_Input>;
  on_conflict?: InputMaybe<Company_Integration_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Company_Integration_FileArgs = {
  objects: Array<Company_Integration_File_Insert_Input>;
  on_conflict?: InputMaybe<Company_Integration_File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Company_Integration_File_OneArgs = {
  object: Company_Integration_File_Insert_Input;
  on_conflict?: InputMaybe<Company_Integration_File_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Company_Integration_OneArgs = {
  object: Company_Integration_Insert_Input;
  on_conflict?: InputMaybe<Company_Integration_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Company_OneArgs = {
  object: Company_Insert_Input;
  on_conflict?: InputMaybe<Company_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Company_ScoreArgs = {
  objects: Array<Company_Score_Insert_Input>;
  on_conflict?: InputMaybe<Company_Score_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Company_Score_OneArgs = {
  object: Company_Score_Insert_Input;
  on_conflict?: InputMaybe<Company_Score_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Company_StatementArgs = {
  objects: Array<Company_Statement_Insert_Input>;
  on_conflict?: InputMaybe<Company_Statement_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Company_Statement_OneArgs = {
  object: Company_Statement_Insert_Input;
  on_conflict?: InputMaybe<Company_Statement_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Company_UserArgs = {
  objects: Array<Company_User_Insert_Input>;
  on_conflict?: InputMaybe<Company_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Company_User_OneArgs = {
  object: Company_User_Insert_Input;
  on_conflict?: InputMaybe<Company_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_DealArgs = {
  objects: Array<Deal_Insert_Input>;
  on_conflict?: InputMaybe<Deal_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Deal_OneArgs = {
  object: Deal_Insert_Input;
  on_conflict?: InputMaybe<Deal_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_File_RegistryArgs = {
  objects: Array<File_Registry_Insert_Input>;
  on_conflict?: InputMaybe<File_Registry_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_File_Registry_OneArgs = {
  object: File_Registry_Insert_Input;
  on_conflict?: InputMaybe<File_Registry_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Integration_AuthArgs = {
  objects: Array<Integration_Auth_Insert_Input>;
  on_conflict?: InputMaybe<Integration_Auth_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Integration_Auth_OneArgs = {
  object: Integration_Auth_Insert_Input;
  on_conflict?: InputMaybe<Integration_Auth_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Internal_StatementArgs = {
  objects: Array<Internal_Statement_Insert_Input>;
  on_conflict?: InputMaybe<Internal_Statement_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Internal_Statement_OneArgs = {
  object: Internal_Statement_Insert_Input;
  on_conflict?: InputMaybe<Internal_Statement_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_InvestorArgs = {
  objects: Array<Investor_Insert_Input>;
  on_conflict?: InputMaybe<Investor_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Investor_OneArgs = {
  object: Investor_Insert_Input;
  on_conflict?: InputMaybe<Investor_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Investor_PreferenceArgs = {
  objects: Array<Investor_Preference_Insert_Input>;
  on_conflict?: InputMaybe<Investor_Preference_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Investor_Preference_OneArgs = {
  object: Investor_Preference_Insert_Input;
  on_conflict?: InputMaybe<Investor_Preference_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Investor_StatementArgs = {
  objects: Array<Investor_Statement_Insert_Input>;
  on_conflict?: InputMaybe<Investor_Statement_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Investor_Statement_OneArgs = {
  object: Investor_Statement_Insert_Input;
  on_conflict?: InputMaybe<Investor_Statement_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Investor_UserArgs = {
  objects: Array<Investor_User_Insert_Input>;
  on_conflict?: InputMaybe<Investor_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Investor_User_OneArgs = {
  object: Investor_User_Insert_Input;
  on_conflict?: InputMaybe<Investor_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Account_TypeArgs = {
  objects: Array<Ref_Account_Type_Insert_Input>;
  on_conflict?: InputMaybe<Ref_Account_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Account_Type_OneArgs = {
  object: Ref_Account_Type_Insert_Input;
  on_conflict?: InputMaybe<Ref_Account_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_BankArgs = {
  objects: Array<Ref_Bank_Insert_Input>;
  on_conflict?: InputMaybe<Ref_Bank_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Bank_OneArgs = {
  object: Ref_Bank_Insert_Input;
  on_conflict?: InputMaybe<Ref_Bank_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Billing_PeriodArgs = {
  objects: Array<Ref_Billing_Period_Insert_Input>;
  on_conflict?: InputMaybe<Ref_Billing_Period_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Billing_Period_OneArgs = {
  object: Ref_Billing_Period_Insert_Input;
  on_conflict?: InputMaybe<Ref_Billing_Period_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_CategoryArgs = {
  objects: Array<Ref_Category_Insert_Input>;
  on_conflict?: InputMaybe<Ref_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Category_OneArgs = {
  object: Ref_Category_Insert_Input;
  on_conflict?: InputMaybe<Ref_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Company_StatusArgs = {
  objects: Array<Ref_Company_Status_Insert_Input>;
  on_conflict?: InputMaybe<Ref_Company_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Company_Status_OneArgs = {
  object: Ref_Company_Status_Insert_Input;
  on_conflict?: InputMaybe<Ref_Company_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Company_TypeArgs = {
  objects: Array<Ref_Company_Type_Insert_Input>;
  on_conflict?: InputMaybe<Ref_Company_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Company_Type_OneArgs = {
  object: Ref_Company_Type_Insert_Input;
  on_conflict?: InputMaybe<Ref_Company_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_CountryArgs = {
  objects: Array<Ref_Country_Insert_Input>;
  on_conflict?: InputMaybe<Ref_Country_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Country_OneArgs = {
  object: Ref_Country_Insert_Input;
  on_conflict?: InputMaybe<Ref_Country_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_CurrencyArgs = {
  objects: Array<Ref_Currency_Insert_Input>;
  on_conflict?: InputMaybe<Ref_Currency_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Currency_OneArgs = {
  object: Ref_Currency_Insert_Input;
  on_conflict?: InputMaybe<Ref_Currency_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_File_CategoryArgs = {
  objects: Array<Ref_File_Category_Insert_Input>;
  on_conflict?: InputMaybe<Ref_File_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_File_Category_OneArgs = {
  object: Ref_File_Category_Insert_Input;
  on_conflict?: InputMaybe<Ref_File_Category_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Integration_File_StatusArgs = {
  objects: Array<Ref_Integration_File_Status_Insert_Input>;
  on_conflict?: InputMaybe<Ref_Integration_File_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Integration_File_Status_OneArgs = {
  object: Ref_Integration_File_Status_Insert_Input;
  on_conflict?: InputMaybe<Ref_Integration_File_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Integration_StatusArgs = {
  objects: Array<Ref_Integration_Status_Insert_Input>;
  on_conflict?: InputMaybe<Ref_Integration_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Integration_Status_OneArgs = {
  object: Ref_Integration_Status_Insert_Input;
  on_conflict?: InputMaybe<Ref_Integration_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Investor_StatusArgs = {
  objects: Array<Ref_Investor_Status_Insert_Input>;
  on_conflict?: InputMaybe<Ref_Investor_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Investor_Status_OneArgs = {
  object: Ref_Investor_Status_Insert_Input;
  on_conflict?: InputMaybe<Ref_Investor_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Investor_TypeArgs = {
  objects: Array<Ref_Investor_Type_Insert_Input>;
  on_conflict?: InputMaybe<Ref_Investor_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Investor_Type_OneArgs = {
  object: Ref_Investor_Type_Insert_Input;
  on_conflict?: InputMaybe<Ref_Investor_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Perfios_Bank_ListArgs = {
  objects: Array<Ref_Perfios_Bank_List_Insert_Input>;
  on_conflict?: InputMaybe<Ref_Perfios_Bank_List_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Perfios_Bank_List_OneArgs = {
  object: Ref_Perfios_Bank_List_Insert_Input;
  on_conflict?: InputMaybe<Ref_Perfios_Bank_List_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_RoleArgs = {
  objects: Array<Ref_Role_Insert_Input>;
  on_conflict?: InputMaybe<Ref_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Role_OneArgs = {
  object: Ref_Role_Insert_Input;
  on_conflict?: InputMaybe<Ref_Role_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_SourceArgs = {
  objects: Array<Ref_Source_Insert_Input>;
  on_conflict?: InputMaybe<Ref_Source_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Source_OneArgs = {
  object: Ref_Source_Insert_Input;
  on_conflict?: InputMaybe<Ref_Source_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_StatesArgs = {
  objects: Array<Ref_States_Insert_Input>;
  on_conflict?: InputMaybe<Ref_States_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_States_OneArgs = {
  object: Ref_States_Insert_Input;
  on_conflict?: InputMaybe<Ref_States_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Subscription_StatusArgs = {
  objects: Array<Ref_Subscription_Status_Insert_Input>;
  on_conflict?: InputMaybe<Ref_Subscription_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Subscription_Status_OneArgs = {
  object: Ref_Subscription_Status_Insert_Input;
  on_conflict?: InputMaybe<Ref_Subscription_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Tenant_TypeArgs = {
  objects: Array<Ref_Tenant_Type_Insert_Input>;
  on_conflict?: InputMaybe<Ref_Tenant_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Tenant_Type_OneArgs = {
  object: Ref_Tenant_Type_Insert_Input;
  on_conflict?: InputMaybe<Ref_Tenant_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Trade_StateArgs = {
  objects: Array<Ref_Trade_State_Insert_Input>;
  on_conflict?: InputMaybe<Ref_Trade_State_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Trade_State_OneArgs = {
  object: Ref_Trade_State_Insert_Input;
  on_conflict?: InputMaybe<Ref_Trade_State_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Trade_StatusArgs = {
  objects: Array<Ref_Trade_Status_Insert_Input>;
  on_conflict?: InputMaybe<Ref_Trade_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Trade_Status_OneArgs = {
  object: Ref_Trade_Status_Insert_Input;
  on_conflict?: InputMaybe<Ref_Trade_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Transaction_MethodArgs = {
  objects: Array<Ref_Transaction_Method_Insert_Input>;
  on_conflict?: InputMaybe<Ref_Transaction_Method_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Transaction_Method_OneArgs = {
  object: Ref_Transaction_Method_Insert_Input;
  on_conflict?: InputMaybe<Ref_Transaction_Method_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Transaction_StatusArgs = {
  objects: Array<Ref_Transaction_Status_Insert_Input>;
  on_conflict?: InputMaybe<Ref_Transaction_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Transaction_Status_OneArgs = {
  object: Ref_Transaction_Status_Insert_Input;
  on_conflict?: InputMaybe<Ref_Transaction_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Transaction_TypeArgs = {
  objects: Array<Ref_Transaction_Type_Insert_Input>;
  on_conflict?: InputMaybe<Ref_Transaction_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_Transaction_Type_OneArgs = {
  object: Ref_Transaction_Type_Insert_Input;
  on_conflict?: InputMaybe<Ref_Transaction_Type_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_User_StatusArgs = {
  objects: Array<Ref_User_Status_Insert_Input>;
  on_conflict?: InputMaybe<Ref_User_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Ref_User_Status_OneArgs = {
  object: Ref_User_Status_Insert_Input;
  on_conflict?: InputMaybe<Ref_User_Status_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Scheduled_PayoutArgs = {
  objects: Array<Scheduled_Payout_Insert_Input>;
  on_conflict?: InputMaybe<Scheduled_Payout_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Scheduled_Payout_OneArgs = {
  object: Scheduled_Payout_Insert_Input;
  on_conflict?: InputMaybe<Scheduled_Payout_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Staff_UserArgs = {
  objects: Array<Staff_User_Insert_Input>;
  on_conflict?: InputMaybe<Staff_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Staff_User_OneArgs = {
  object: Staff_User_Insert_Input;
  on_conflict?: InputMaybe<Staff_User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_SubscriptionArgs = {
  objects: Array<Subscription_Insert_Input>;
  on_conflict?: InputMaybe<Subscription_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Subscription_OneArgs = {
  object: Subscription_Insert_Input;
  on_conflict?: InputMaybe<Subscription_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TradeArgs = {
  objects: Array<Trade_Insert_Input>;
  on_conflict?: InputMaybe<Trade_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Trade_OneArgs = {
  object: Trade_Insert_Input;
  on_conflict?: InputMaybe<Trade_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Trade_SubscriptionArgs = {
  objects: Array<Trade_Subscription_Insert_Input>;
  on_conflict?: InputMaybe<Trade_Subscription_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Trade_Subscription_OneArgs = {
  object: Trade_Subscription_Insert_Input;
  on_conflict?: InputMaybe<Trade_Subscription_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_TransactionArgs = {
  objects: Array<Transaction_Insert_Input>;
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Transaction_OneArgs = {
  object: Transaction_Insert_Input;
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Updates_LogArgs = {
  objects: Array<Updates_Log_Insert_Input>;
  on_conflict?: InputMaybe<Updates_Log_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Updates_Log_OneArgs = {
  object: Updates_Log_Insert_Input;
  on_conflict?: InputMaybe<Updates_Log_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_User_OneArgs = {
  object: User_Insert_Input;
  on_conflict?: InputMaybe<User_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verification_CodeArgs = {
  objects: Array<Verification_Code_Insert_Input>;
  on_conflict?: InputMaybe<Verification_Code_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Verification_Code_OneArgs = {
  object: Verification_Code_Insert_Input;
  on_conflict?: InputMaybe<Verification_Code_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Webhook_EventsArgs = {
  objects: Array<Webhook_Events_Insert_Input>;
  on_conflict?: InputMaybe<Webhook_Events_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Webhook_Events_OneArgs = {
  object: Webhook_Events_Insert_Input;
  on_conflict?: InputMaybe<Webhook_Events_On_Conflict>;
};


/** mutation root */
export type Mutation_RootIntegrationsApproveArgs = {
  args: IntegrationsApproveInput;
};


/** mutation root */
export type Mutation_RootIntegrationsUploadArgs = {
  args: IntegrationsUploadInput;
};


/** mutation root */
export type Mutation_RootNetBankingPullArgs = {
  args: NetBankingPullInput;
};


/** mutation root */
export type Mutation_RootOpsAccountSetupNotifyArgs = {
  args: OpsAccountSetupNotifyInput;
};


/** mutation root */
export type Mutation_RootPlaceBidArgs = {
  args: PlaceBidInput;
};


/** mutation root */
export type Mutation_RootPreviewApaArgs = {
  args: PreviewApaInput;
};


/** mutation root */
export type Mutation_RootReQueueCompanyIntegrationArgs = {
  arg1: ReQueueCompanyIntegrationInput;
};


/** mutation root */
export type Mutation_RootRefreshTokensArgs = {
  args: RefreshTokensInput;
};


/** mutation root */
export type Mutation_RootRegisterNachMandateArgs = {
  args: RegisterNachMandateInput;
};


/** mutation root */
export type Mutation_RootRunScoringEngineArgs = {
  args: RunScoringEngineInput;
};


/** mutation root */
export type Mutation_RootSubmitSignedNachMandateArgs = {
  args: SubmitSignedNachMandateInput;
};


/** mutation root */
export type Mutation_RootSubscriptionCsvUploadArgs = {
  args: SubscriptionCsvUploadInput;
};


/** mutation root */
export type Mutation_RootSubscriptionSyncArgs = {
  args: SubscriptionSyncInput;
};


/** mutation root */
export type Mutation_RootUpdate_AccountArgs = {
  _inc?: InputMaybe<Account_Inc_Input>;
  _set?: InputMaybe<Account_Set_Input>;
  where: Account_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Account_By_PkArgs = {
  _inc?: InputMaybe<Account_Inc_Input>;
  _set?: InputMaybe<Account_Set_Input>;
  pk_columns: Account_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Banking_Partner_IntegrationArgs = {
  _inc?: InputMaybe<Banking_Partner_Integration_Inc_Input>;
  _set?: InputMaybe<Banking_Partner_Integration_Set_Input>;
  where: Banking_Partner_Integration_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_BidArgs = {
  _inc?: InputMaybe<Bid_Inc_Input>;
  _set?: InputMaybe<Bid_Set_Input>;
  where: Bid_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Bid_By_PkArgs = {
  _inc?: InputMaybe<Bid_Inc_Input>;
  _set?: InputMaybe<Bid_Set_Input>;
  pk_columns: Bid_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Blacklisted_TokensArgs = {
  _set?: InputMaybe<Blacklisted_Tokens_Set_Input>;
  where: Blacklisted_Tokens_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Blacklisted_Tokens_By_PkArgs = {
  _set?: InputMaybe<Blacklisted_Tokens_Set_Input>;
  pk_columns: Blacklisted_Tokens_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_CompanyArgs = {
  _append?: InputMaybe<Company_Append_Input>;
  _delete_at_path?: InputMaybe<Company_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Company_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Company_Delete_Key_Input>;
  _inc?: InputMaybe<Company_Inc_Input>;
  _prepend?: InputMaybe<Company_Prepend_Input>;
  _set?: InputMaybe<Company_Set_Input>;
  where: Company_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Company_By_PkArgs = {
  _append?: InputMaybe<Company_Append_Input>;
  _delete_at_path?: InputMaybe<Company_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Company_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Company_Delete_Key_Input>;
  _inc?: InputMaybe<Company_Inc_Input>;
  _prepend?: InputMaybe<Company_Prepend_Input>;
  _set?: InputMaybe<Company_Set_Input>;
  pk_columns: Company_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Company_CinArgs = {
  _set?: InputMaybe<Company_Cin_Set_Input>;
  where: Company_Cin_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Company_Cin_By_PkArgs = {
  _set?: InputMaybe<Company_Cin_Set_Input>;
  pk_columns: Company_Cin_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Company_Gst_ReturnArgs = {
  _append?: InputMaybe<Company_Gst_Return_Append_Input>;
  _delete_at_path?: InputMaybe<Company_Gst_Return_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Company_Gst_Return_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Company_Gst_Return_Delete_Key_Input>;
  _inc?: InputMaybe<Company_Gst_Return_Inc_Input>;
  _prepend?: InputMaybe<Company_Gst_Return_Prepend_Input>;
  _set?: InputMaybe<Company_Gst_Return_Set_Input>;
  where: Company_Gst_Return_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Company_Gst_Return_By_PkArgs = {
  _append?: InputMaybe<Company_Gst_Return_Append_Input>;
  _delete_at_path?: InputMaybe<Company_Gst_Return_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Company_Gst_Return_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Company_Gst_Return_Delete_Key_Input>;
  _inc?: InputMaybe<Company_Gst_Return_Inc_Input>;
  _prepend?: InputMaybe<Company_Gst_Return_Prepend_Input>;
  _set?: InputMaybe<Company_Gst_Return_Set_Input>;
  pk_columns: Company_Gst_Return_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Company_IntegrationArgs = {
  _append?: InputMaybe<Company_Integration_Append_Input>;
  _delete_at_path?: InputMaybe<Company_Integration_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Company_Integration_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Company_Integration_Delete_Key_Input>;
  _inc?: InputMaybe<Company_Integration_Inc_Input>;
  _prepend?: InputMaybe<Company_Integration_Prepend_Input>;
  _set?: InputMaybe<Company_Integration_Set_Input>;
  where: Company_Integration_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Company_Integration_By_PkArgs = {
  _append?: InputMaybe<Company_Integration_Append_Input>;
  _delete_at_path?: InputMaybe<Company_Integration_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Company_Integration_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Company_Integration_Delete_Key_Input>;
  _inc?: InputMaybe<Company_Integration_Inc_Input>;
  _prepend?: InputMaybe<Company_Integration_Prepend_Input>;
  _set?: InputMaybe<Company_Integration_Set_Input>;
  pk_columns: Company_Integration_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Company_Integration_FileArgs = {
  _append?: InputMaybe<Company_Integration_File_Append_Input>;
  _delete_at_path?: InputMaybe<Company_Integration_File_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Company_Integration_File_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Company_Integration_File_Delete_Key_Input>;
  _inc?: InputMaybe<Company_Integration_File_Inc_Input>;
  _prepend?: InputMaybe<Company_Integration_File_Prepend_Input>;
  _set?: InputMaybe<Company_Integration_File_Set_Input>;
  where: Company_Integration_File_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Company_Integration_File_By_PkArgs = {
  _append?: InputMaybe<Company_Integration_File_Append_Input>;
  _delete_at_path?: InputMaybe<Company_Integration_File_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Company_Integration_File_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Company_Integration_File_Delete_Key_Input>;
  _inc?: InputMaybe<Company_Integration_File_Inc_Input>;
  _prepend?: InputMaybe<Company_Integration_File_Prepend_Input>;
  _set?: InputMaybe<Company_Integration_File_Set_Input>;
  pk_columns: Company_Integration_File_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Company_ScoreArgs = {
  _inc?: InputMaybe<Company_Score_Inc_Input>;
  _set?: InputMaybe<Company_Score_Set_Input>;
  where: Company_Score_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Company_Score_By_PkArgs = {
  _inc?: InputMaybe<Company_Score_Inc_Input>;
  _set?: InputMaybe<Company_Score_Set_Input>;
  pk_columns: Company_Score_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Company_StatementArgs = {
  _append?: InputMaybe<Company_Statement_Append_Input>;
  _delete_at_path?: InputMaybe<Company_Statement_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Company_Statement_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Company_Statement_Delete_Key_Input>;
  _inc?: InputMaybe<Company_Statement_Inc_Input>;
  _prepend?: InputMaybe<Company_Statement_Prepend_Input>;
  _set?: InputMaybe<Company_Statement_Set_Input>;
  where: Company_Statement_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Company_Statement_By_PkArgs = {
  _append?: InputMaybe<Company_Statement_Append_Input>;
  _delete_at_path?: InputMaybe<Company_Statement_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Company_Statement_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Company_Statement_Delete_Key_Input>;
  _inc?: InputMaybe<Company_Statement_Inc_Input>;
  _prepend?: InputMaybe<Company_Statement_Prepend_Input>;
  _set?: InputMaybe<Company_Statement_Set_Input>;
  pk_columns: Company_Statement_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Company_UserArgs = {
  _inc?: InputMaybe<Company_User_Inc_Input>;
  _set?: InputMaybe<Company_User_Set_Input>;
  where: Company_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Company_User_By_PkArgs = {
  _inc?: InputMaybe<Company_User_Inc_Input>;
  _set?: InputMaybe<Company_User_Set_Input>;
  pk_columns: Company_User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_DealArgs = {
  _inc?: InputMaybe<Deal_Inc_Input>;
  _set?: InputMaybe<Deal_Set_Input>;
  where: Deal_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Deal_By_PkArgs = {
  _inc?: InputMaybe<Deal_Inc_Input>;
  _set?: InputMaybe<Deal_Set_Input>;
  pk_columns: Deal_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_File_RegistryArgs = {
  _inc?: InputMaybe<File_Registry_Inc_Input>;
  _set?: InputMaybe<File_Registry_Set_Input>;
  where: File_Registry_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_File_Registry_By_PkArgs = {
  _inc?: InputMaybe<File_Registry_Inc_Input>;
  _set?: InputMaybe<File_Registry_Set_Input>;
  pk_columns: File_Registry_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Integration_AuthArgs = {
  _append?: InputMaybe<Integration_Auth_Append_Input>;
  _delete_at_path?: InputMaybe<Integration_Auth_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Integration_Auth_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Integration_Auth_Delete_Key_Input>;
  _inc?: InputMaybe<Integration_Auth_Inc_Input>;
  _prepend?: InputMaybe<Integration_Auth_Prepend_Input>;
  _set?: InputMaybe<Integration_Auth_Set_Input>;
  where: Integration_Auth_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Integration_Auth_By_PkArgs = {
  _append?: InputMaybe<Integration_Auth_Append_Input>;
  _delete_at_path?: InputMaybe<Integration_Auth_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Integration_Auth_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Integration_Auth_Delete_Key_Input>;
  _inc?: InputMaybe<Integration_Auth_Inc_Input>;
  _prepend?: InputMaybe<Integration_Auth_Prepend_Input>;
  _set?: InputMaybe<Integration_Auth_Set_Input>;
  pk_columns: Integration_Auth_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Internal_StatementArgs = {
  _append?: InputMaybe<Internal_Statement_Append_Input>;
  _delete_at_path?: InputMaybe<Internal_Statement_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Internal_Statement_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Internal_Statement_Delete_Key_Input>;
  _inc?: InputMaybe<Internal_Statement_Inc_Input>;
  _prepend?: InputMaybe<Internal_Statement_Prepend_Input>;
  _set?: InputMaybe<Internal_Statement_Set_Input>;
  where: Internal_Statement_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Internal_Statement_By_PkArgs = {
  _append?: InputMaybe<Internal_Statement_Append_Input>;
  _delete_at_path?: InputMaybe<Internal_Statement_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Internal_Statement_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Internal_Statement_Delete_Key_Input>;
  _inc?: InputMaybe<Internal_Statement_Inc_Input>;
  _prepend?: InputMaybe<Internal_Statement_Prepend_Input>;
  _set?: InputMaybe<Internal_Statement_Set_Input>;
  pk_columns: Internal_Statement_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_InvestorArgs = {
  _append?: InputMaybe<Investor_Append_Input>;
  _delete_at_path?: InputMaybe<Investor_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Investor_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Investor_Delete_Key_Input>;
  _inc?: InputMaybe<Investor_Inc_Input>;
  _prepend?: InputMaybe<Investor_Prepend_Input>;
  _set?: InputMaybe<Investor_Set_Input>;
  where: Investor_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Investor_By_PkArgs = {
  _append?: InputMaybe<Investor_Append_Input>;
  _delete_at_path?: InputMaybe<Investor_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Investor_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Investor_Delete_Key_Input>;
  _inc?: InputMaybe<Investor_Inc_Input>;
  _prepend?: InputMaybe<Investor_Prepend_Input>;
  _set?: InputMaybe<Investor_Set_Input>;
  pk_columns: Investor_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Investor_PreferenceArgs = {
  _append?: InputMaybe<Investor_Preference_Append_Input>;
  _delete_at_path?: InputMaybe<Investor_Preference_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Investor_Preference_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Investor_Preference_Delete_Key_Input>;
  _inc?: InputMaybe<Investor_Preference_Inc_Input>;
  _prepend?: InputMaybe<Investor_Preference_Prepend_Input>;
  _set?: InputMaybe<Investor_Preference_Set_Input>;
  where: Investor_Preference_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Investor_Preference_By_PkArgs = {
  _append?: InputMaybe<Investor_Preference_Append_Input>;
  _delete_at_path?: InputMaybe<Investor_Preference_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Investor_Preference_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Investor_Preference_Delete_Key_Input>;
  _inc?: InputMaybe<Investor_Preference_Inc_Input>;
  _prepend?: InputMaybe<Investor_Preference_Prepend_Input>;
  _set?: InputMaybe<Investor_Preference_Set_Input>;
  pk_columns: Investor_Preference_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Investor_StatementArgs = {
  _append?: InputMaybe<Investor_Statement_Append_Input>;
  _delete_at_path?: InputMaybe<Investor_Statement_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Investor_Statement_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Investor_Statement_Delete_Key_Input>;
  _inc?: InputMaybe<Investor_Statement_Inc_Input>;
  _prepend?: InputMaybe<Investor_Statement_Prepend_Input>;
  _set?: InputMaybe<Investor_Statement_Set_Input>;
  where: Investor_Statement_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Investor_Statement_By_PkArgs = {
  _append?: InputMaybe<Investor_Statement_Append_Input>;
  _delete_at_path?: InputMaybe<Investor_Statement_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Investor_Statement_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Investor_Statement_Delete_Key_Input>;
  _inc?: InputMaybe<Investor_Statement_Inc_Input>;
  _prepend?: InputMaybe<Investor_Statement_Prepend_Input>;
  _set?: InputMaybe<Investor_Statement_Set_Input>;
  pk_columns: Investor_Statement_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Investor_UserArgs = {
  _inc?: InputMaybe<Investor_User_Inc_Input>;
  _set?: InputMaybe<Investor_User_Set_Input>;
  where: Investor_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Investor_User_By_PkArgs = {
  _inc?: InputMaybe<Investor_User_Inc_Input>;
  _set?: InputMaybe<Investor_User_Set_Input>;
  pk_columns: Investor_User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Account_TypeArgs = {
  _set?: InputMaybe<Ref_Account_Type_Set_Input>;
  where: Ref_Account_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Account_Type_By_PkArgs = {
  _set?: InputMaybe<Ref_Account_Type_Set_Input>;
  pk_columns: Ref_Account_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_BankArgs = {
  _inc?: InputMaybe<Ref_Bank_Inc_Input>;
  _set?: InputMaybe<Ref_Bank_Set_Input>;
  where: Ref_Bank_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Bank_By_PkArgs = {
  _inc?: InputMaybe<Ref_Bank_Inc_Input>;
  _set?: InputMaybe<Ref_Bank_Set_Input>;
  pk_columns: Ref_Bank_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Billing_PeriodArgs = {
  _inc?: InputMaybe<Ref_Billing_Period_Inc_Input>;
  _set?: InputMaybe<Ref_Billing_Period_Set_Input>;
  where: Ref_Billing_Period_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Billing_Period_By_PkArgs = {
  _inc?: InputMaybe<Ref_Billing_Period_Inc_Input>;
  _set?: InputMaybe<Ref_Billing_Period_Set_Input>;
  pk_columns: Ref_Billing_Period_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_CategoryArgs = {
  _set?: InputMaybe<Ref_Category_Set_Input>;
  where: Ref_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Category_By_PkArgs = {
  _set?: InputMaybe<Ref_Category_Set_Input>;
  pk_columns: Ref_Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Company_StatusArgs = {
  _set?: InputMaybe<Ref_Company_Status_Set_Input>;
  where: Ref_Company_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Company_Status_By_PkArgs = {
  _set?: InputMaybe<Ref_Company_Status_Set_Input>;
  pk_columns: Ref_Company_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Company_TypeArgs = {
  _set?: InputMaybe<Ref_Company_Type_Set_Input>;
  where: Ref_Company_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Company_Type_By_PkArgs = {
  _set?: InputMaybe<Ref_Company_Type_Set_Input>;
  pk_columns: Ref_Company_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_CountryArgs = {
  _inc?: InputMaybe<Ref_Country_Inc_Input>;
  _set?: InputMaybe<Ref_Country_Set_Input>;
  where: Ref_Country_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Country_By_PkArgs = {
  _inc?: InputMaybe<Ref_Country_Inc_Input>;
  _set?: InputMaybe<Ref_Country_Set_Input>;
  pk_columns: Ref_Country_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_CurrencyArgs = {
  _set?: InputMaybe<Ref_Currency_Set_Input>;
  where: Ref_Currency_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Currency_By_PkArgs = {
  _set?: InputMaybe<Ref_Currency_Set_Input>;
  pk_columns: Ref_Currency_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_File_CategoryArgs = {
  _set?: InputMaybe<Ref_File_Category_Set_Input>;
  where: Ref_File_Category_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_File_Category_By_PkArgs = {
  _set?: InputMaybe<Ref_File_Category_Set_Input>;
  pk_columns: Ref_File_Category_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Integration_File_StatusArgs = {
  _set?: InputMaybe<Ref_Integration_File_Status_Set_Input>;
  where: Ref_Integration_File_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Integration_File_Status_By_PkArgs = {
  _set?: InputMaybe<Ref_Integration_File_Status_Set_Input>;
  pk_columns: Ref_Integration_File_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Integration_StatusArgs = {
  _set?: InputMaybe<Ref_Integration_Status_Set_Input>;
  where: Ref_Integration_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Integration_Status_By_PkArgs = {
  _set?: InputMaybe<Ref_Integration_Status_Set_Input>;
  pk_columns: Ref_Integration_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Investor_StatusArgs = {
  _set?: InputMaybe<Ref_Investor_Status_Set_Input>;
  where: Ref_Investor_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Investor_Status_By_PkArgs = {
  _set?: InputMaybe<Ref_Investor_Status_Set_Input>;
  pk_columns: Ref_Investor_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Investor_TypeArgs = {
  _set?: InputMaybe<Ref_Investor_Type_Set_Input>;
  where: Ref_Investor_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Investor_Type_By_PkArgs = {
  _set?: InputMaybe<Ref_Investor_Type_Set_Input>;
  pk_columns: Ref_Investor_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Perfios_Bank_ListArgs = {
  _inc?: InputMaybe<Ref_Perfios_Bank_List_Inc_Input>;
  _set?: InputMaybe<Ref_Perfios_Bank_List_Set_Input>;
  where: Ref_Perfios_Bank_List_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Perfios_Bank_List_By_PkArgs = {
  _inc?: InputMaybe<Ref_Perfios_Bank_List_Inc_Input>;
  _set?: InputMaybe<Ref_Perfios_Bank_List_Set_Input>;
  pk_columns: Ref_Perfios_Bank_List_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_RoleArgs = {
  _set?: InputMaybe<Ref_Role_Set_Input>;
  where: Ref_Role_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Role_By_PkArgs = {
  _set?: InputMaybe<Ref_Role_Set_Input>;
  pk_columns: Ref_Role_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_SourceArgs = {
  _set?: InputMaybe<Ref_Source_Set_Input>;
  where: Ref_Source_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Source_By_PkArgs = {
  _set?: InputMaybe<Ref_Source_Set_Input>;
  pk_columns: Ref_Source_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_StatesArgs = {
  _inc?: InputMaybe<Ref_States_Inc_Input>;
  _set?: InputMaybe<Ref_States_Set_Input>;
  where: Ref_States_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_States_By_PkArgs = {
  _inc?: InputMaybe<Ref_States_Inc_Input>;
  _set?: InputMaybe<Ref_States_Set_Input>;
  pk_columns: Ref_States_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Subscription_StatusArgs = {
  _set?: InputMaybe<Ref_Subscription_Status_Set_Input>;
  where: Ref_Subscription_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Subscription_Status_By_PkArgs = {
  _set?: InputMaybe<Ref_Subscription_Status_Set_Input>;
  pk_columns: Ref_Subscription_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Tenant_TypeArgs = {
  _set?: InputMaybe<Ref_Tenant_Type_Set_Input>;
  where: Ref_Tenant_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Tenant_Type_By_PkArgs = {
  _set?: InputMaybe<Ref_Tenant_Type_Set_Input>;
  pk_columns: Ref_Tenant_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Trade_StateArgs = {
  _set?: InputMaybe<Ref_Trade_State_Set_Input>;
  where: Ref_Trade_State_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Trade_State_By_PkArgs = {
  _set?: InputMaybe<Ref_Trade_State_Set_Input>;
  pk_columns: Ref_Trade_State_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Trade_StatusArgs = {
  _set?: InputMaybe<Ref_Trade_Status_Set_Input>;
  where: Ref_Trade_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Trade_Status_By_PkArgs = {
  _set?: InputMaybe<Ref_Trade_Status_Set_Input>;
  pk_columns: Ref_Trade_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Transaction_MethodArgs = {
  _set?: InputMaybe<Ref_Transaction_Method_Set_Input>;
  where: Ref_Transaction_Method_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Transaction_Method_By_PkArgs = {
  _set?: InputMaybe<Ref_Transaction_Method_Set_Input>;
  pk_columns: Ref_Transaction_Method_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Transaction_StatusArgs = {
  _set?: InputMaybe<Ref_Transaction_Status_Set_Input>;
  where: Ref_Transaction_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Transaction_Status_By_PkArgs = {
  _set?: InputMaybe<Ref_Transaction_Status_Set_Input>;
  pk_columns: Ref_Transaction_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Transaction_TypeArgs = {
  _set?: InputMaybe<Ref_Transaction_Type_Set_Input>;
  where: Ref_Transaction_Type_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_Transaction_Type_By_PkArgs = {
  _set?: InputMaybe<Ref_Transaction_Type_Set_Input>;
  pk_columns: Ref_Transaction_Type_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_User_StatusArgs = {
  _set?: InputMaybe<Ref_User_Status_Set_Input>;
  where: Ref_User_Status_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Ref_User_Status_By_PkArgs = {
  _set?: InputMaybe<Ref_User_Status_Set_Input>;
  pk_columns: Ref_User_Status_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Scheduled_PayoutArgs = {
  _append?: InputMaybe<Scheduled_Payout_Append_Input>;
  _delete_at_path?: InputMaybe<Scheduled_Payout_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Scheduled_Payout_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Scheduled_Payout_Delete_Key_Input>;
  _inc?: InputMaybe<Scheduled_Payout_Inc_Input>;
  _prepend?: InputMaybe<Scheduled_Payout_Prepend_Input>;
  _set?: InputMaybe<Scheduled_Payout_Set_Input>;
  where: Scheduled_Payout_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Scheduled_Payout_By_PkArgs = {
  _append?: InputMaybe<Scheduled_Payout_Append_Input>;
  _delete_at_path?: InputMaybe<Scheduled_Payout_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Scheduled_Payout_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Scheduled_Payout_Delete_Key_Input>;
  _inc?: InputMaybe<Scheduled_Payout_Inc_Input>;
  _prepend?: InputMaybe<Scheduled_Payout_Prepend_Input>;
  _set?: InputMaybe<Scheduled_Payout_Set_Input>;
  pk_columns: Scheduled_Payout_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Staff_UserArgs = {
  _inc?: InputMaybe<Staff_User_Inc_Input>;
  _set?: InputMaybe<Staff_User_Set_Input>;
  where: Staff_User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Staff_User_By_PkArgs = {
  _inc?: InputMaybe<Staff_User_Inc_Input>;
  _set?: InputMaybe<Staff_User_Set_Input>;
  pk_columns: Staff_User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_SubscriptionArgs = {
  _inc?: InputMaybe<Subscription_Inc_Input>;
  _set?: InputMaybe<Subscription_Set_Input>;
  where: Subscription_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Subscription_By_PkArgs = {
  _inc?: InputMaybe<Subscription_Inc_Input>;
  _set?: InputMaybe<Subscription_Set_Input>;
  pk_columns: Subscription_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TradeArgs = {
  _append?: InputMaybe<Trade_Append_Input>;
  _delete_at_path?: InputMaybe<Trade_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Trade_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Trade_Delete_Key_Input>;
  _inc?: InputMaybe<Trade_Inc_Input>;
  _prepend?: InputMaybe<Trade_Prepend_Input>;
  _set?: InputMaybe<Trade_Set_Input>;
  where: Trade_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Trade_By_PkArgs = {
  _append?: InputMaybe<Trade_Append_Input>;
  _delete_at_path?: InputMaybe<Trade_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Trade_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Trade_Delete_Key_Input>;
  _inc?: InputMaybe<Trade_Inc_Input>;
  _prepend?: InputMaybe<Trade_Prepend_Input>;
  _set?: InputMaybe<Trade_Set_Input>;
  pk_columns: Trade_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Trade_SubscriptionArgs = {
  _inc?: InputMaybe<Trade_Subscription_Inc_Input>;
  _set?: InputMaybe<Trade_Subscription_Set_Input>;
  where: Trade_Subscription_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Trade_Subscription_By_PkArgs = {
  _inc?: InputMaybe<Trade_Subscription_Inc_Input>;
  _set?: InputMaybe<Trade_Subscription_Set_Input>;
  pk_columns: Trade_Subscription_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_TransactionArgs = {
  _append?: InputMaybe<Transaction_Append_Input>;
  _delete_at_path?: InputMaybe<Transaction_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Transaction_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Transaction_Delete_Key_Input>;
  _inc?: InputMaybe<Transaction_Inc_Input>;
  _prepend?: InputMaybe<Transaction_Prepend_Input>;
  _set?: InputMaybe<Transaction_Set_Input>;
  where: Transaction_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Transaction_By_PkArgs = {
  _append?: InputMaybe<Transaction_Append_Input>;
  _delete_at_path?: InputMaybe<Transaction_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Transaction_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Transaction_Delete_Key_Input>;
  _inc?: InputMaybe<Transaction_Inc_Input>;
  _prepend?: InputMaybe<Transaction_Prepend_Input>;
  _set?: InputMaybe<Transaction_Set_Input>;
  pk_columns: Transaction_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Updates_LogArgs = {
  _append?: InputMaybe<Updates_Log_Append_Input>;
  _delete_at_path?: InputMaybe<Updates_Log_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Updates_Log_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Updates_Log_Delete_Key_Input>;
  _inc?: InputMaybe<Updates_Log_Inc_Input>;
  _prepend?: InputMaybe<Updates_Log_Prepend_Input>;
  _set?: InputMaybe<Updates_Log_Set_Input>;
  where: Updates_Log_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Updates_Log_By_PkArgs = {
  _append?: InputMaybe<Updates_Log_Append_Input>;
  _delete_at_path?: InputMaybe<Updates_Log_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Updates_Log_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Updates_Log_Delete_Key_Input>;
  _inc?: InputMaybe<Updates_Log_Inc_Input>;
  _prepend?: InputMaybe<Updates_Log_Prepend_Input>;
  _set?: InputMaybe<Updates_Log_Set_Input>;
  pk_columns: Updates_Log_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  where: User_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_User_By_PkArgs = {
  _inc?: InputMaybe<User_Inc_Input>;
  _set?: InputMaybe<User_Set_Input>;
  pk_columns: User_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_CodeArgs = {
  _inc?: InputMaybe<Verification_Code_Inc_Input>;
  _set?: InputMaybe<Verification_Code_Set_Input>;
  where: Verification_Code_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Verification_Code_By_PkArgs = {
  _inc?: InputMaybe<Verification_Code_Inc_Input>;
  _set?: InputMaybe<Verification_Code_Set_Input>;
  pk_columns: Verification_Code_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Webhook_EventsArgs = {
  _append?: InputMaybe<Webhook_Events_Append_Input>;
  _delete_at_path?: InputMaybe<Webhook_Events_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Webhook_Events_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Webhook_Events_Delete_Key_Input>;
  _prepend?: InputMaybe<Webhook_Events_Prepend_Input>;
  _set?: InputMaybe<Webhook_Events_Set_Input>;
  where: Webhook_Events_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Webhook_Events_By_PkArgs = {
  _append?: InputMaybe<Webhook_Events_Append_Input>;
  _delete_at_path?: InputMaybe<Webhook_Events_Delete_At_Path_Input>;
  _delete_elem?: InputMaybe<Webhook_Events_Delete_Elem_Input>;
  _delete_key?: InputMaybe<Webhook_Events_Delete_Key_Input>;
  _prepend?: InputMaybe<Webhook_Events_Prepend_Input>;
  _set?: InputMaybe<Webhook_Events_Set_Input>;
  pk_columns: Webhook_Events_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUploadSignedNachMandateArgs = {
  args: UploadSignedNachMandateInput;
};


/** mutation root */
export type Mutation_RootVerifiedSubscriptionCsvUploadArgs = {
  args: VerifiedSubscriptionCsvUploadInput;
};

/** Boolean expression to compare columns of type "numeric". All fields are combined with logical 'AND'. */
export type Numeric_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['numeric']>;
  _gt?: InputMaybe<Scalars['numeric']>;
  _gte?: InputMaybe<Scalars['numeric']>;
  _in?: InputMaybe<Array<Scalars['numeric']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['numeric']>;
  _lte?: InputMaybe<Scalars['numeric']>;
  _neq?: InputMaybe<Scalars['numeric']>;
  _nin?: InputMaybe<Array<Scalars['numeric']>>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch aggregated fields from the table: "account" */
  account_aggregate: Account_Aggregate;
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>;
  /** fetch data from the table: "banking_partner_integration" */
  banking_partner_integration: Array<Banking_Partner_Integration>;
  /** fetch aggregated fields from the table: "banking_partner_integration" */
  banking_partner_integration_aggregate: Banking_Partner_Integration_Aggregate;
  /** fetch data from the table: "bid" */
  bid: Array<Bid>;
  /** fetch aggregated fields from the table: "bid" */
  bid_aggregate: Bid_Aggregate;
  /** fetch data from the table: "bid" using primary key columns */
  bid_by_pk?: Maybe<Bid>;
  /** fetch data from the table: "blacklisted_tokens" */
  blacklisted_tokens: Array<Blacklisted_Tokens>;
  /** fetch aggregated fields from the table: "blacklisted_tokens" */
  blacklisted_tokens_aggregate: Blacklisted_Tokens_Aggregate;
  /** fetch data from the table: "blacklisted_tokens" using primary key columns */
  blacklisted_tokens_by_pk?: Maybe<Blacklisted_Tokens>;
  /** fetch data from the table: "company" */
  company: Array<Company>;
  /** fetch aggregated fields from the table: "company" */
  company_aggregate: Company_Aggregate;
  /** fetch data from the table: "company" using primary key columns */
  company_by_pk?: Maybe<Company>;
  /** fetch data from the table: "company_cin" */
  company_cin: Array<Company_Cin>;
  /** fetch aggregated fields from the table: "company_cin" */
  company_cin_aggregate: Company_Cin_Aggregate;
  /** fetch data from the table: "company_cin" using primary key columns */
  company_cin_by_pk?: Maybe<Company_Cin>;
  /** fetch data from the table: "company_gst_return" */
  company_gst_return: Array<Company_Gst_Return>;
  /** fetch aggregated fields from the table: "company_gst_return" */
  company_gst_return_aggregate: Company_Gst_Return_Aggregate;
  /** fetch data from the table: "company_gst_return" using primary key columns */
  company_gst_return_by_pk?: Maybe<Company_Gst_Return>;
  /** fetch data from the table: "company_integration" */
  company_integration: Array<Company_Integration>;
  /** fetch aggregated fields from the table: "company_integration" */
  company_integration_aggregate: Company_Integration_Aggregate;
  /** fetch data from the table: "company_integration" using primary key columns */
  company_integration_by_pk?: Maybe<Company_Integration>;
  /** fetch data from the table: "company_integration_file" */
  company_integration_file: Array<Company_Integration_File>;
  /** fetch aggregated fields from the table: "company_integration_file" */
  company_integration_file_aggregate: Company_Integration_File_Aggregate;
  /** fetch data from the table: "company_integration_file" using primary key columns */
  company_integration_file_by_pk?: Maybe<Company_Integration_File>;
  /** fetch data from the table: "company_score" */
  company_score: Array<Company_Score>;
  /** fetch aggregated fields from the table: "company_score" */
  company_score_aggregate: Company_Score_Aggregate;
  /** fetch data from the table: "company_score" using primary key columns */
  company_score_by_pk?: Maybe<Company_Score>;
  /** fetch data from the table: "company_statement" */
  company_statement: Array<Company_Statement>;
  /** fetch aggregated fields from the table: "company_statement" */
  company_statement_aggregate: Company_Statement_Aggregate;
  /** fetch data from the table: "company_statement" using primary key columns */
  company_statement_by_pk?: Maybe<Company_Statement>;
  /** fetch data from the table: "company_user" */
  company_user: Array<Company_User>;
  /** fetch aggregated fields from the table: "company_user" */
  company_user_aggregate: Company_User_Aggregate;
  /** fetch data from the table: "company_user" using primary key columns */
  company_user_by_pk?: Maybe<Company_User>;
  /** fetch data from the table: "deal" */
  deal: Array<Deal>;
  /** fetch aggregated fields from the table: "deal" */
  deal_aggregate: Deal_Aggregate;
  /** fetch data from the table: "deal" using primary key columns */
  deal_by_pk?: Maybe<Deal>;
  downloadPrefilledNachMandate?: Maybe<DownloadPrefilledNachMandateOutput>;
  /** fetch data from the table: "file_registry" */
  file_registry: Array<File_Registry>;
  /** fetch aggregated fields from the table: "file_registry" */
  file_registry_aggregate: File_Registry_Aggregate;
  /** fetch data from the table: "file_registry" using primary key columns */
  file_registry_by_pk?: Maybe<File_Registry>;
  generateFileRegistryDownloadURL?: Maybe<GenerateFileRegistryDownloadUrlOutput>;
  getNachMandateProperties?: Maybe<GetNachMandatePropertiesOutput>;
  /** execute function "highest_bid" which returns "bid" */
  highest_bid?: Maybe<Bid>;
  /** execute function "highest_bid" and query aggregates on result of table type "bid" */
  highest_bid_aggregate: Bid_Aggregate;
  /** fetch data from the table: "integration_auth" */
  integration_auth: Array<Integration_Auth>;
  /** fetch aggregated fields from the table: "integration_auth" */
  integration_auth_aggregate: Integration_Auth_Aggregate;
  /** fetch data from the table: "integration_auth" using primary key columns */
  integration_auth_by_pk?: Maybe<Integration_Auth>;
  /** fetch data from the table: "internal_statement" */
  internal_statement: Array<Internal_Statement>;
  /** fetch aggregated fields from the table: "internal_statement" */
  internal_statement_aggregate: Internal_Statement_Aggregate;
  /** fetch data from the table: "internal_statement" using primary key columns */
  internal_statement_by_pk?: Maybe<Internal_Statement>;
  /** fetch data from the table: "investor" */
  investor: Array<Investor>;
  /** fetch aggregated fields from the table: "investor" */
  investor_aggregate: Investor_Aggregate;
  /** fetch data from the table: "investor" using primary key columns */
  investor_by_pk?: Maybe<Investor>;
  /** fetch data from the table: "investor_preference" */
  investor_preference: Array<Investor_Preference>;
  /** fetch aggregated fields from the table: "investor_preference" */
  investor_preference_aggregate: Investor_Preference_Aggregate;
  /** fetch data from the table: "investor_preference" using primary key columns */
  investor_preference_by_pk?: Maybe<Investor_Preference>;
  /** fetch data from the table: "investor_statement" */
  investor_statement: Array<Investor_Statement>;
  /** fetch aggregated fields from the table: "investor_statement" */
  investor_statement_aggregate: Investor_Statement_Aggregate;
  /** fetch data from the table: "investor_statement" using primary key columns */
  investor_statement_by_pk?: Maybe<Investor_Statement>;
  /** fetch data from the table: "investor_user" */
  investor_user: Array<Investor_User>;
  /** fetch aggregated fields from the table: "investor_user" */
  investor_user_aggregate: Investor_User_Aggregate;
  /** fetch data from the table: "investor_user" using primary key columns */
  investor_user_by_pk?: Maybe<Investor_User>;
  listIntegrations?: Maybe<Array<Maybe<ListIntegrationsOutput>>>;
  /** fetch data from the table: "ref_account_type" */
  ref_account_type: Array<Ref_Account_Type>;
  /** fetch aggregated fields from the table: "ref_account_type" */
  ref_account_type_aggregate: Ref_Account_Type_Aggregate;
  /** fetch data from the table: "ref_account_type" using primary key columns */
  ref_account_type_by_pk?: Maybe<Ref_Account_Type>;
  /** fetch data from the table: "ref_bank" */
  ref_bank: Array<Ref_Bank>;
  /** fetch aggregated fields from the table: "ref_bank" */
  ref_bank_aggregate: Ref_Bank_Aggregate;
  /** fetch data from the table: "ref_bank" using primary key columns */
  ref_bank_by_pk?: Maybe<Ref_Bank>;
  /** fetch data from the table: "ref_billing_period" */
  ref_billing_period: Array<Ref_Billing_Period>;
  /** fetch aggregated fields from the table: "ref_billing_period" */
  ref_billing_period_aggregate: Ref_Billing_Period_Aggregate;
  /** fetch data from the table: "ref_billing_period" using primary key columns */
  ref_billing_period_by_pk?: Maybe<Ref_Billing_Period>;
  /** fetch data from the table: "ref_category" */
  ref_category: Array<Ref_Category>;
  /** fetch aggregated fields from the table: "ref_category" */
  ref_category_aggregate: Ref_Category_Aggregate;
  /** fetch data from the table: "ref_category" using primary key columns */
  ref_category_by_pk?: Maybe<Ref_Category>;
  /** fetch data from the table: "ref_company_status" */
  ref_company_status: Array<Ref_Company_Status>;
  /** fetch aggregated fields from the table: "ref_company_status" */
  ref_company_status_aggregate: Ref_Company_Status_Aggregate;
  /** fetch data from the table: "ref_company_status" using primary key columns */
  ref_company_status_by_pk?: Maybe<Ref_Company_Status>;
  /** fetch data from the table: "ref_company_type" */
  ref_company_type: Array<Ref_Company_Type>;
  /** fetch aggregated fields from the table: "ref_company_type" */
  ref_company_type_aggregate: Ref_Company_Type_Aggregate;
  /** fetch data from the table: "ref_company_type" using primary key columns */
  ref_company_type_by_pk?: Maybe<Ref_Company_Type>;
  /** fetch data from the table: "ref_country" */
  ref_country: Array<Ref_Country>;
  /** fetch aggregated fields from the table: "ref_country" */
  ref_country_aggregate: Ref_Country_Aggregate;
  /** fetch data from the table: "ref_country" using primary key columns */
  ref_country_by_pk?: Maybe<Ref_Country>;
  /** fetch data from the table: "ref_currency" */
  ref_currency: Array<Ref_Currency>;
  /** fetch aggregated fields from the table: "ref_currency" */
  ref_currency_aggregate: Ref_Currency_Aggregate;
  /** fetch data from the table: "ref_currency" using primary key columns */
  ref_currency_by_pk?: Maybe<Ref_Currency>;
  /** fetch data from the table: "ref_file_category" */
  ref_file_category: Array<Ref_File_Category>;
  /** fetch aggregated fields from the table: "ref_file_category" */
  ref_file_category_aggregate: Ref_File_Category_Aggregate;
  /** fetch data from the table: "ref_file_category" using primary key columns */
  ref_file_category_by_pk?: Maybe<Ref_File_Category>;
  /** fetch data from the table: "ref_integration_file_status" */
  ref_integration_file_status: Array<Ref_Integration_File_Status>;
  /** fetch aggregated fields from the table: "ref_integration_file_status" */
  ref_integration_file_status_aggregate: Ref_Integration_File_Status_Aggregate;
  /** fetch data from the table: "ref_integration_file_status" using primary key columns */
  ref_integration_file_status_by_pk?: Maybe<Ref_Integration_File_Status>;
  /** fetch data from the table: "ref_integration_status" */
  ref_integration_status: Array<Ref_Integration_Status>;
  /** fetch aggregated fields from the table: "ref_integration_status" */
  ref_integration_status_aggregate: Ref_Integration_Status_Aggregate;
  /** fetch data from the table: "ref_integration_status" using primary key columns */
  ref_integration_status_by_pk?: Maybe<Ref_Integration_Status>;
  /** fetch data from the table: "ref_investor_status" */
  ref_investor_status: Array<Ref_Investor_Status>;
  /** fetch aggregated fields from the table: "ref_investor_status" */
  ref_investor_status_aggregate: Ref_Investor_Status_Aggregate;
  /** fetch data from the table: "ref_investor_status" using primary key columns */
  ref_investor_status_by_pk?: Maybe<Ref_Investor_Status>;
  /** fetch data from the table: "ref_investor_type" */
  ref_investor_type: Array<Ref_Investor_Type>;
  /** fetch aggregated fields from the table: "ref_investor_type" */
  ref_investor_type_aggregate: Ref_Investor_Type_Aggregate;
  /** fetch data from the table: "ref_investor_type" using primary key columns */
  ref_investor_type_by_pk?: Maybe<Ref_Investor_Type>;
  /** fetch data from the table: "ref_perfios_bank_list" */
  ref_perfios_bank_list: Array<Ref_Perfios_Bank_List>;
  /** fetch aggregated fields from the table: "ref_perfios_bank_list" */
  ref_perfios_bank_list_aggregate: Ref_Perfios_Bank_List_Aggregate;
  /** fetch data from the table: "ref_perfios_bank_list" using primary key columns */
  ref_perfios_bank_list_by_pk?: Maybe<Ref_Perfios_Bank_List>;
  /** fetch data from the table: "ref_role" */
  ref_role: Array<Ref_Role>;
  /** fetch aggregated fields from the table: "ref_role" */
  ref_role_aggregate: Ref_Role_Aggregate;
  /** fetch data from the table: "ref_role" using primary key columns */
  ref_role_by_pk?: Maybe<Ref_Role>;
  /** fetch data from the table: "ref_source" */
  ref_source: Array<Ref_Source>;
  /** fetch aggregated fields from the table: "ref_source" */
  ref_source_aggregate: Ref_Source_Aggregate;
  /** fetch data from the table: "ref_source" using primary key columns */
  ref_source_by_pk?: Maybe<Ref_Source>;
  /** An array relationship */
  ref_states: Array<Ref_States>;
  /** An aggregate relationship */
  ref_states_aggregate: Ref_States_Aggregate;
  /** fetch data from the table: "ref_states" using primary key columns */
  ref_states_by_pk?: Maybe<Ref_States>;
  /** fetch data from the table: "ref_subscription_status" */
  ref_subscription_status: Array<Ref_Subscription_Status>;
  /** fetch aggregated fields from the table: "ref_subscription_status" */
  ref_subscription_status_aggregate: Ref_Subscription_Status_Aggregate;
  /** fetch data from the table: "ref_subscription_status" using primary key columns */
  ref_subscription_status_by_pk?: Maybe<Ref_Subscription_Status>;
  /** fetch data from the table: "ref_tenant_type" */
  ref_tenant_type: Array<Ref_Tenant_Type>;
  /** fetch aggregated fields from the table: "ref_tenant_type" */
  ref_tenant_type_aggregate: Ref_Tenant_Type_Aggregate;
  /** fetch data from the table: "ref_tenant_type" using primary key columns */
  ref_tenant_type_by_pk?: Maybe<Ref_Tenant_Type>;
  /** fetch data from the table: "ref_trade_state" */
  ref_trade_state: Array<Ref_Trade_State>;
  /** fetch aggregated fields from the table: "ref_trade_state" */
  ref_trade_state_aggregate: Ref_Trade_State_Aggregate;
  /** fetch data from the table: "ref_trade_state" using primary key columns */
  ref_trade_state_by_pk?: Maybe<Ref_Trade_State>;
  /** fetch data from the table: "ref_trade_status" */
  ref_trade_status: Array<Ref_Trade_Status>;
  /** fetch aggregated fields from the table: "ref_trade_status" */
  ref_trade_status_aggregate: Ref_Trade_Status_Aggregate;
  /** fetch data from the table: "ref_trade_status" using primary key columns */
  ref_trade_status_by_pk?: Maybe<Ref_Trade_Status>;
  /** fetch data from the table: "ref_transaction_method" */
  ref_transaction_method: Array<Ref_Transaction_Method>;
  /** fetch aggregated fields from the table: "ref_transaction_method" */
  ref_transaction_method_aggregate: Ref_Transaction_Method_Aggregate;
  /** fetch data from the table: "ref_transaction_method" using primary key columns */
  ref_transaction_method_by_pk?: Maybe<Ref_Transaction_Method>;
  /** fetch data from the table: "ref_transaction_status" */
  ref_transaction_status: Array<Ref_Transaction_Status>;
  /** fetch aggregated fields from the table: "ref_transaction_status" */
  ref_transaction_status_aggregate: Ref_Transaction_Status_Aggregate;
  /** fetch data from the table: "ref_transaction_status" using primary key columns */
  ref_transaction_status_by_pk?: Maybe<Ref_Transaction_Status>;
  /** fetch data from the table: "ref_transaction_type" */
  ref_transaction_type: Array<Ref_Transaction_Type>;
  /** fetch aggregated fields from the table: "ref_transaction_type" */
  ref_transaction_type_aggregate: Ref_Transaction_Type_Aggregate;
  /** fetch data from the table: "ref_transaction_type" using primary key columns */
  ref_transaction_type_by_pk?: Maybe<Ref_Transaction_Type>;
  /** fetch data from the table: "ref_user_status" */
  ref_user_status: Array<Ref_User_Status>;
  /** fetch aggregated fields from the table: "ref_user_status" */
  ref_user_status_aggregate: Ref_User_Status_Aggregate;
  /** fetch data from the table: "ref_user_status" using primary key columns */
  ref_user_status_by_pk?: Maybe<Ref_User_Status>;
  /** fetch data from the table: "scheduled_payout" */
  scheduled_payout: Array<Scheduled_Payout>;
  /** fetch aggregated fields from the table: "scheduled_payout" */
  scheduled_payout_aggregate: Scheduled_Payout_Aggregate;
  /** fetch data from the table: "scheduled_payout" using primary key columns */
  scheduled_payout_by_pk?: Maybe<Scheduled_Payout>;
  searchIFSC?: Maybe<SearchIfscOutput>;
  /** fetch data from the table: "staff_user" */
  staff_user: Array<Staff_User>;
  /** fetch aggregated fields from the table: "staff_user" */
  staff_user_aggregate: Staff_User_Aggregate;
  /** fetch data from the table: "staff_user" using primary key columns */
  staff_user_by_pk?: Maybe<Staff_User>;
  /** fetch data from the table: "subscription" */
  subscription: Array<Subscription>;
  /** fetch aggregated fields from the table: "subscription" */
  subscription_aggregate: Subscription_Aggregate;
  /** fetch data from the table: "subscription" using primary key columns */
  subscription_by_pk?: Maybe<Subscription>;
  /** fetch data from the table: "trade" */
  trade: Array<Trade>;
  /** fetch aggregated fields from the table: "trade" */
  trade_aggregate: Trade_Aggregate;
  /** fetch data from the table: "trade" using primary key columns */
  trade_by_pk?: Maybe<Trade>;
  /** fetch data from the table: "trade_subscription" */
  trade_subscription: Array<Trade_Subscription>;
  /** fetch aggregated fields from the table: "trade_subscription" */
  trade_subscription_aggregate: Trade_Subscription_Aggregate;
  /** fetch data from the table: "trade_subscription" using primary key columns */
  trade_subscription_by_pk?: Maybe<Trade_Subscription>;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "transaction" using primary key columns */
  transaction_by_pk?: Maybe<Transaction>;
  /** fetch data from the table: "updates_log" */
  updates_log: Array<Updates_Log>;
  /** fetch aggregated fields from the table: "updates_log" */
  updates_log_aggregate: Updates_Log_Aggregate;
  /** fetch data from the table: "updates_log" using primary key columns */
  updates_log_by_pk?: Maybe<Updates_Log>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "verification_code" */
  verification_code: Array<Verification_Code>;
  /** fetch aggregated fields from the table: "verification_code" */
  verification_code_aggregate: Verification_Code_Aggregate;
  /** fetch data from the table: "verification_code" using primary key columns */
  verification_code_by_pk?: Maybe<Verification_Code>;
  verifyPan?: Maybe<VerifyPanOutput>;
  /** fetch data from the table: "webhook_events" */
  webhook_events: Array<Webhook_Events>;
  /** fetch aggregated fields from the table: "webhook_events" */
  webhook_events_aggregate: Webhook_Events_Aggregate;
  /** fetch data from the table: "webhook_events" using primary key columns */
  webhook_events_by_pk?: Maybe<Webhook_Events>;
  /** execute function "your_bids" which returns "bid" */
  your_bids: Array<Bid>;
  /** execute function "your_bids" and query aggregates on result of table type "bid" */
  your_bids_aggregate: Bid_Aggregate;
};


export type Query_RootAccountArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Query_RootAccount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Query_RootAccount_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootBanking_Partner_IntegrationArgs = {
  distinct_on?: InputMaybe<Array<Banking_Partner_Integration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Banking_Partner_Integration_Order_By>>;
  where?: InputMaybe<Banking_Partner_Integration_Bool_Exp>;
};


export type Query_RootBanking_Partner_Integration_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Banking_Partner_Integration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Banking_Partner_Integration_Order_By>>;
  where?: InputMaybe<Banking_Partner_Integration_Bool_Exp>;
};


export type Query_RootBidArgs = {
  distinct_on?: InputMaybe<Array<Bid_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bid_Order_By>>;
  where?: InputMaybe<Bid_Bool_Exp>;
};


export type Query_RootBid_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bid_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bid_Order_By>>;
  where?: InputMaybe<Bid_Bool_Exp>;
};


export type Query_RootBid_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootBlacklisted_TokensArgs = {
  distinct_on?: InputMaybe<Array<Blacklisted_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blacklisted_Tokens_Order_By>>;
  where?: InputMaybe<Blacklisted_Tokens_Bool_Exp>;
};


export type Query_RootBlacklisted_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blacklisted_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blacklisted_Tokens_Order_By>>;
  where?: InputMaybe<Blacklisted_Tokens_Bool_Exp>;
};


export type Query_RootBlacklisted_Tokens_By_PkArgs = {
  token: Scalars['String'];
};


export type Query_RootCompanyArgs = {
  distinct_on?: InputMaybe<Array<Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Order_By>>;
  where?: InputMaybe<Company_Bool_Exp>;
};


export type Query_RootCompany_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Order_By>>;
  where?: InputMaybe<Company_Bool_Exp>;
};


export type Query_RootCompany_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCompany_CinArgs = {
  distinct_on?: InputMaybe<Array<Company_Cin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Cin_Order_By>>;
  where?: InputMaybe<Company_Cin_Bool_Exp>;
};


export type Query_RootCompany_Cin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Company_Cin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Cin_Order_By>>;
  where?: InputMaybe<Company_Cin_Bool_Exp>;
};


export type Query_RootCompany_Cin_By_PkArgs = {
  cin: Scalars['String'];
};


export type Query_RootCompany_Gst_ReturnArgs = {
  distinct_on?: InputMaybe<Array<Company_Gst_Return_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Gst_Return_Order_By>>;
  where?: InputMaybe<Company_Gst_Return_Bool_Exp>;
};


export type Query_RootCompany_Gst_Return_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Company_Gst_Return_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Gst_Return_Order_By>>;
  where?: InputMaybe<Company_Gst_Return_Bool_Exp>;
};


export type Query_RootCompany_Gst_Return_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCompany_IntegrationArgs = {
  distinct_on?: InputMaybe<Array<Company_Integration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Integration_Order_By>>;
  where?: InputMaybe<Company_Integration_Bool_Exp>;
};


export type Query_RootCompany_Integration_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Company_Integration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Integration_Order_By>>;
  where?: InputMaybe<Company_Integration_Bool_Exp>;
};


export type Query_RootCompany_Integration_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCompany_Integration_FileArgs = {
  distinct_on?: InputMaybe<Array<Company_Integration_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Integration_File_Order_By>>;
  where?: InputMaybe<Company_Integration_File_Bool_Exp>;
};


export type Query_RootCompany_Integration_File_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Company_Integration_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Integration_File_Order_By>>;
  where?: InputMaybe<Company_Integration_File_Bool_Exp>;
};


export type Query_RootCompany_Integration_File_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCompany_ScoreArgs = {
  distinct_on?: InputMaybe<Array<Company_Score_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Score_Order_By>>;
  where?: InputMaybe<Company_Score_Bool_Exp>;
};


export type Query_RootCompany_Score_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Company_Score_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Score_Order_By>>;
  where?: InputMaybe<Company_Score_Bool_Exp>;
};


export type Query_RootCompany_Score_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCompany_StatementArgs = {
  distinct_on?: InputMaybe<Array<Company_Statement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Statement_Order_By>>;
  where?: InputMaybe<Company_Statement_Bool_Exp>;
};


export type Query_RootCompany_Statement_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Company_Statement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Statement_Order_By>>;
  where?: InputMaybe<Company_Statement_Bool_Exp>;
};


export type Query_RootCompany_Statement_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootCompany_UserArgs = {
  distinct_on?: InputMaybe<Array<Company_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_User_Order_By>>;
  where?: InputMaybe<Company_User_Bool_Exp>;
};


export type Query_RootCompany_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Company_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_User_Order_By>>;
  where?: InputMaybe<Company_User_Bool_Exp>;
};


export type Query_RootCompany_User_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootDealArgs = {
  distinct_on?: InputMaybe<Array<Deal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Deal_Order_By>>;
  where?: InputMaybe<Deal_Bool_Exp>;
};


export type Query_RootDeal_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Deal_Order_By>>;
  where?: InputMaybe<Deal_Bool_Exp>;
};


export type Query_RootDeal_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootDownloadPrefilledNachMandateArgs = {
  args: DownloadPrefilledNachMandateInput;
};


export type Query_RootFile_RegistryArgs = {
  distinct_on?: InputMaybe<Array<File_Registry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<File_Registry_Order_By>>;
  where?: InputMaybe<File_Registry_Bool_Exp>;
};


export type Query_RootFile_Registry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<File_Registry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<File_Registry_Order_By>>;
  where?: InputMaybe<File_Registry_Bool_Exp>;
};


export type Query_RootFile_Registry_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootGenerateFileRegistryDownloadUrlArgs = {
  args: GenerateFileRegistryDownloadUrlInput;
};


export type Query_RootGetNachMandatePropertiesArgs = {
  args: GetNachMandatePropertiesInput;
};


export type Query_RootHighest_BidArgs = {
  args: Highest_Bid_Args;
  distinct_on?: InputMaybe<Array<Bid_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bid_Order_By>>;
  where?: InputMaybe<Bid_Bool_Exp>;
};


export type Query_RootHighest_Bid_AggregateArgs = {
  args: Highest_Bid_Args;
  distinct_on?: InputMaybe<Array<Bid_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bid_Order_By>>;
  where?: InputMaybe<Bid_Bool_Exp>;
};


export type Query_RootIntegration_AuthArgs = {
  distinct_on?: InputMaybe<Array<Integration_Auth_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Integration_Auth_Order_By>>;
  where?: InputMaybe<Integration_Auth_Bool_Exp>;
};


export type Query_RootIntegration_Auth_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Integration_Auth_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Integration_Auth_Order_By>>;
  where?: InputMaybe<Integration_Auth_Bool_Exp>;
};


export type Query_RootIntegration_Auth_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootInternal_StatementArgs = {
  distinct_on?: InputMaybe<Array<Internal_Statement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Internal_Statement_Order_By>>;
  where?: InputMaybe<Internal_Statement_Bool_Exp>;
};


export type Query_RootInternal_Statement_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Internal_Statement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Internal_Statement_Order_By>>;
  where?: InputMaybe<Internal_Statement_Bool_Exp>;
};


export type Query_RootInternal_Statement_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootInvestorArgs = {
  distinct_on?: InputMaybe<Array<Investor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Investor_Order_By>>;
  where?: InputMaybe<Investor_Bool_Exp>;
};


export type Query_RootInvestor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Investor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Investor_Order_By>>;
  where?: InputMaybe<Investor_Bool_Exp>;
};


export type Query_RootInvestor_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootInvestor_PreferenceArgs = {
  distinct_on?: InputMaybe<Array<Investor_Preference_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Investor_Preference_Order_By>>;
  where?: InputMaybe<Investor_Preference_Bool_Exp>;
};


export type Query_RootInvestor_Preference_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Investor_Preference_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Investor_Preference_Order_By>>;
  where?: InputMaybe<Investor_Preference_Bool_Exp>;
};


export type Query_RootInvestor_Preference_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootInvestor_StatementArgs = {
  distinct_on?: InputMaybe<Array<Investor_Statement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Investor_Statement_Order_By>>;
  where?: InputMaybe<Investor_Statement_Bool_Exp>;
};


export type Query_RootInvestor_Statement_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Investor_Statement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Investor_Statement_Order_By>>;
  where?: InputMaybe<Investor_Statement_Bool_Exp>;
};


export type Query_RootInvestor_Statement_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootInvestor_UserArgs = {
  distinct_on?: InputMaybe<Array<Investor_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Investor_User_Order_By>>;
  where?: InputMaybe<Investor_User_Bool_Exp>;
};


export type Query_RootInvestor_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Investor_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Investor_User_Order_By>>;
  where?: InputMaybe<Investor_User_Bool_Exp>;
};


export type Query_RootInvestor_User_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootRef_Account_TypeArgs = {
  distinct_on?: InputMaybe<Array<Ref_Account_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Account_Type_Order_By>>;
  where?: InputMaybe<Ref_Account_Type_Bool_Exp>;
};


export type Query_RootRef_Account_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Account_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Account_Type_Order_By>>;
  where?: InputMaybe<Ref_Account_Type_Bool_Exp>;
};


export type Query_RootRef_Account_Type_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRef_BankArgs = {
  distinct_on?: InputMaybe<Array<Ref_Bank_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Bank_Order_By>>;
  where?: InputMaybe<Ref_Bank_Bool_Exp>;
};


export type Query_RootRef_Bank_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Bank_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Bank_Order_By>>;
  where?: InputMaybe<Ref_Bank_Bool_Exp>;
};


export type Query_RootRef_Bank_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootRef_Billing_PeriodArgs = {
  distinct_on?: InputMaybe<Array<Ref_Billing_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Billing_Period_Order_By>>;
  where?: InputMaybe<Ref_Billing_Period_Bool_Exp>;
};


export type Query_RootRef_Billing_Period_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Billing_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Billing_Period_Order_By>>;
  where?: InputMaybe<Ref_Billing_Period_Bool_Exp>;
};


export type Query_RootRef_Billing_Period_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRef_CategoryArgs = {
  distinct_on?: InputMaybe<Array<Ref_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Category_Order_By>>;
  where?: InputMaybe<Ref_Category_Bool_Exp>;
};


export type Query_RootRef_Category_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Category_Order_By>>;
  where?: InputMaybe<Ref_Category_Bool_Exp>;
};


export type Query_RootRef_Category_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRef_Company_StatusArgs = {
  distinct_on?: InputMaybe<Array<Ref_Company_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Company_Status_Order_By>>;
  where?: InputMaybe<Ref_Company_Status_Bool_Exp>;
};


export type Query_RootRef_Company_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Company_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Company_Status_Order_By>>;
  where?: InputMaybe<Ref_Company_Status_Bool_Exp>;
};


export type Query_RootRef_Company_Status_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRef_Company_TypeArgs = {
  distinct_on?: InputMaybe<Array<Ref_Company_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Company_Type_Order_By>>;
  where?: InputMaybe<Ref_Company_Type_Bool_Exp>;
};


export type Query_RootRef_Company_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Company_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Company_Type_Order_By>>;
  where?: InputMaybe<Ref_Company_Type_Bool_Exp>;
};


export type Query_RootRef_Company_Type_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRef_CountryArgs = {
  distinct_on?: InputMaybe<Array<Ref_Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Country_Order_By>>;
  where?: InputMaybe<Ref_Country_Bool_Exp>;
};


export type Query_RootRef_Country_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Country_Order_By>>;
  where?: InputMaybe<Ref_Country_Bool_Exp>;
};


export type Query_RootRef_Country_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootRef_CurrencyArgs = {
  distinct_on?: InputMaybe<Array<Ref_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Currency_Order_By>>;
  where?: InputMaybe<Ref_Currency_Bool_Exp>;
};


export type Query_RootRef_Currency_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Currency_Order_By>>;
  where?: InputMaybe<Ref_Currency_Bool_Exp>;
};


export type Query_RootRef_Currency_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRef_File_CategoryArgs = {
  distinct_on?: InputMaybe<Array<Ref_File_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_File_Category_Order_By>>;
  where?: InputMaybe<Ref_File_Category_Bool_Exp>;
};


export type Query_RootRef_File_Category_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_File_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_File_Category_Order_By>>;
  where?: InputMaybe<Ref_File_Category_Bool_Exp>;
};


export type Query_RootRef_File_Category_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRef_Integration_File_StatusArgs = {
  distinct_on?: InputMaybe<Array<Ref_Integration_File_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Integration_File_Status_Order_By>>;
  where?: InputMaybe<Ref_Integration_File_Status_Bool_Exp>;
};


export type Query_RootRef_Integration_File_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Integration_File_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Integration_File_Status_Order_By>>;
  where?: InputMaybe<Ref_Integration_File_Status_Bool_Exp>;
};


export type Query_RootRef_Integration_File_Status_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRef_Integration_StatusArgs = {
  distinct_on?: InputMaybe<Array<Ref_Integration_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Integration_Status_Order_By>>;
  where?: InputMaybe<Ref_Integration_Status_Bool_Exp>;
};


export type Query_RootRef_Integration_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Integration_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Integration_Status_Order_By>>;
  where?: InputMaybe<Ref_Integration_Status_Bool_Exp>;
};


export type Query_RootRef_Integration_Status_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRef_Investor_StatusArgs = {
  distinct_on?: InputMaybe<Array<Ref_Investor_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Investor_Status_Order_By>>;
  where?: InputMaybe<Ref_Investor_Status_Bool_Exp>;
};


export type Query_RootRef_Investor_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Investor_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Investor_Status_Order_By>>;
  where?: InputMaybe<Ref_Investor_Status_Bool_Exp>;
};


export type Query_RootRef_Investor_Status_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRef_Investor_TypeArgs = {
  distinct_on?: InputMaybe<Array<Ref_Investor_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Investor_Type_Order_By>>;
  where?: InputMaybe<Ref_Investor_Type_Bool_Exp>;
};


export type Query_RootRef_Investor_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Investor_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Investor_Type_Order_By>>;
  where?: InputMaybe<Ref_Investor_Type_Bool_Exp>;
};


export type Query_RootRef_Investor_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Query_RootRef_Perfios_Bank_ListArgs = {
  distinct_on?: InputMaybe<Array<Ref_Perfios_Bank_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Perfios_Bank_List_Order_By>>;
  where?: InputMaybe<Ref_Perfios_Bank_List_Bool_Exp>;
};


export type Query_RootRef_Perfios_Bank_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Perfios_Bank_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Perfios_Bank_List_Order_By>>;
  where?: InputMaybe<Ref_Perfios_Bank_List_Bool_Exp>;
};


export type Query_RootRef_Perfios_Bank_List_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootRef_RoleArgs = {
  distinct_on?: InputMaybe<Array<Ref_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Role_Order_By>>;
  where?: InputMaybe<Ref_Role_Bool_Exp>;
};


export type Query_RootRef_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Role_Order_By>>;
  where?: InputMaybe<Ref_Role_Bool_Exp>;
};


export type Query_RootRef_Role_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRef_SourceArgs = {
  distinct_on?: InputMaybe<Array<Ref_Source_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Source_Order_By>>;
  where?: InputMaybe<Ref_Source_Bool_Exp>;
};


export type Query_RootRef_Source_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Source_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Source_Order_By>>;
  where?: InputMaybe<Ref_Source_Bool_Exp>;
};


export type Query_RootRef_Source_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRef_StatesArgs = {
  distinct_on?: InputMaybe<Array<Ref_States_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_States_Order_By>>;
  where?: InputMaybe<Ref_States_Bool_Exp>;
};


export type Query_RootRef_States_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_States_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_States_Order_By>>;
  where?: InputMaybe<Ref_States_Bool_Exp>;
};


export type Query_RootRef_States_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootRef_Subscription_StatusArgs = {
  distinct_on?: InputMaybe<Array<Ref_Subscription_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Subscription_Status_Order_By>>;
  where?: InputMaybe<Ref_Subscription_Status_Bool_Exp>;
};


export type Query_RootRef_Subscription_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Subscription_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Subscription_Status_Order_By>>;
  where?: InputMaybe<Ref_Subscription_Status_Bool_Exp>;
};


export type Query_RootRef_Subscription_Status_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRef_Tenant_TypeArgs = {
  distinct_on?: InputMaybe<Array<Ref_Tenant_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Tenant_Type_Order_By>>;
  where?: InputMaybe<Ref_Tenant_Type_Bool_Exp>;
};


export type Query_RootRef_Tenant_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Tenant_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Tenant_Type_Order_By>>;
  where?: InputMaybe<Ref_Tenant_Type_Bool_Exp>;
};


export type Query_RootRef_Tenant_Type_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRef_Trade_StateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Trade_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Trade_State_Order_By>>;
  where?: InputMaybe<Ref_Trade_State_Bool_Exp>;
};


export type Query_RootRef_Trade_State_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Trade_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Trade_State_Order_By>>;
  where?: InputMaybe<Ref_Trade_State_Bool_Exp>;
};


export type Query_RootRef_Trade_State_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRef_Trade_StatusArgs = {
  distinct_on?: InputMaybe<Array<Ref_Trade_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Trade_Status_Order_By>>;
  where?: InputMaybe<Ref_Trade_Status_Bool_Exp>;
};


export type Query_RootRef_Trade_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Trade_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Trade_Status_Order_By>>;
  where?: InputMaybe<Ref_Trade_Status_Bool_Exp>;
};


export type Query_RootRef_Trade_Status_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRef_Transaction_MethodArgs = {
  distinct_on?: InputMaybe<Array<Ref_Transaction_Method_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Transaction_Method_Order_By>>;
  where?: InputMaybe<Ref_Transaction_Method_Bool_Exp>;
};


export type Query_RootRef_Transaction_Method_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Transaction_Method_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Transaction_Method_Order_By>>;
  where?: InputMaybe<Ref_Transaction_Method_Bool_Exp>;
};


export type Query_RootRef_Transaction_Method_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRef_Transaction_StatusArgs = {
  distinct_on?: InputMaybe<Array<Ref_Transaction_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Transaction_Status_Order_By>>;
  where?: InputMaybe<Ref_Transaction_Status_Bool_Exp>;
};


export type Query_RootRef_Transaction_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Transaction_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Transaction_Status_Order_By>>;
  where?: InputMaybe<Ref_Transaction_Status_Bool_Exp>;
};


export type Query_RootRef_Transaction_Status_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRef_Transaction_TypeArgs = {
  distinct_on?: InputMaybe<Array<Ref_Transaction_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Transaction_Type_Order_By>>;
  where?: InputMaybe<Ref_Transaction_Type_Bool_Exp>;
};


export type Query_RootRef_Transaction_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Transaction_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Transaction_Type_Order_By>>;
  where?: InputMaybe<Ref_Transaction_Type_Bool_Exp>;
};


export type Query_RootRef_Transaction_Type_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootRef_User_StatusArgs = {
  distinct_on?: InputMaybe<Array<Ref_User_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_User_Status_Order_By>>;
  where?: InputMaybe<Ref_User_Status_Bool_Exp>;
};


export type Query_RootRef_User_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_User_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_User_Status_Order_By>>;
  where?: InputMaybe<Ref_User_Status_Bool_Exp>;
};


export type Query_RootRef_User_Status_By_PkArgs = {
  id: Scalars['String'];
};


export type Query_RootScheduled_PayoutArgs = {
  distinct_on?: InputMaybe<Array<Scheduled_Payout_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Scheduled_Payout_Order_By>>;
  where?: InputMaybe<Scheduled_Payout_Bool_Exp>;
};


export type Query_RootScheduled_Payout_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Scheduled_Payout_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Scheduled_Payout_Order_By>>;
  where?: InputMaybe<Scheduled_Payout_Bool_Exp>;
};


export type Query_RootScheduled_Payout_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSearchIfscArgs = {
  args: SearchIfscInput;
};


export type Query_RootStaff_UserArgs = {
  distinct_on?: InputMaybe<Array<Staff_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Staff_User_Order_By>>;
  where?: InputMaybe<Staff_User_Bool_Exp>;
};


export type Query_RootStaff_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staff_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Staff_User_Order_By>>;
  where?: InputMaybe<Staff_User_Bool_Exp>;
};


export type Query_RootStaff_User_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootSubscriptionArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subscription_Order_By>>;
  where?: InputMaybe<Subscription_Bool_Exp>;
};


export type Query_RootSubscription_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subscription_Order_By>>;
  where?: InputMaybe<Subscription_Bool_Exp>;
};


export type Query_RootSubscription_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTradeArgs = {
  distinct_on?: InputMaybe<Array<Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Order_By>>;
  where?: InputMaybe<Trade_Bool_Exp>;
};


export type Query_RootTrade_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Order_By>>;
  where?: InputMaybe<Trade_Bool_Exp>;
};


export type Query_RootTrade_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTrade_SubscriptionArgs = {
  distinct_on?: InputMaybe<Array<Trade_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Subscription_Order_By>>;
  where?: InputMaybe<Trade_Subscription_Bool_Exp>;
};


export type Query_RootTrade_Subscription_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trade_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Subscription_Order_By>>;
  where?: InputMaybe<Trade_Subscription_Bool_Exp>;
};


export type Query_RootTrade_Subscription_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Query_RootTransaction_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootUpdates_LogArgs = {
  distinct_on?: InputMaybe<Array<Updates_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Updates_Log_Order_By>>;
  where?: InputMaybe<Updates_Log_Bool_Exp>;
};


export type Query_RootUpdates_Log_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Updates_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Updates_Log_Order_By>>;
  where?: InputMaybe<Updates_Log_Bool_Exp>;
};


export type Query_RootUpdates_Log_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Query_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootVerification_CodeArgs = {
  distinct_on?: InputMaybe<Array<Verification_Code_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Verification_Code_Order_By>>;
  where?: InputMaybe<Verification_Code_Bool_Exp>;
};


export type Query_RootVerification_Code_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verification_Code_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Verification_Code_Order_By>>;
  where?: InputMaybe<Verification_Code_Bool_Exp>;
};


export type Query_RootVerification_Code_By_PkArgs = {
  id: Scalars['Int'];
};


export type Query_RootVerifyPanArgs = {
  args: VerifyPanInput;
};


export type Query_RootWebhook_EventsArgs = {
  distinct_on?: InputMaybe<Array<Webhook_Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Webhook_Events_Order_By>>;
  where?: InputMaybe<Webhook_Events_Bool_Exp>;
};


export type Query_RootWebhook_Events_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Webhook_Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Webhook_Events_Order_By>>;
  where?: InputMaybe<Webhook_Events_Bool_Exp>;
};


export type Query_RootWebhook_Events_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Query_RootYour_BidsArgs = {
  args: Your_Bids_Args;
  distinct_on?: InputMaybe<Array<Bid_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bid_Order_By>>;
  where?: InputMaybe<Bid_Bool_Exp>;
};


export type Query_RootYour_Bids_AggregateArgs = {
  args: Your_Bids_Args;
  distinct_on?: InputMaybe<Array<Bid_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bid_Order_By>>;
  where?: InputMaybe<Bid_Bool_Exp>;
};

export type ReQueueCompanyIntegrationInput = {
  id: Scalars['Int'];
};

export type ReQueueCompanyIntegrationOutput = {
  __typename?: 'reQueueCompanyIntegrationOutput';
  id: Scalars['Int'];
};

/** columns and relationships of "ref_account_type" */
export type Ref_Account_Type = {
  __typename?: 'ref_account_type';
  id: Scalars['String'];
  name: Scalars['String'];
};

/** aggregated selection of "ref_account_type" */
export type Ref_Account_Type_Aggregate = {
  __typename?: 'ref_account_type_aggregate';
  aggregate?: Maybe<Ref_Account_Type_Aggregate_Fields>;
  nodes: Array<Ref_Account_Type>;
};

/** aggregate fields of "ref_account_type" */
export type Ref_Account_Type_Aggregate_Fields = {
  __typename?: 'ref_account_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Ref_Account_Type_Max_Fields>;
  min?: Maybe<Ref_Account_Type_Min_Fields>;
};


/** aggregate fields of "ref_account_type" */
export type Ref_Account_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ref_Account_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "ref_account_type". All fields are combined with a logical 'AND'. */
export type Ref_Account_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Ref_Account_Type_Bool_Exp>>;
  _not?: InputMaybe<Ref_Account_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Ref_Account_Type_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ref_account_type" */
export enum Ref_Account_Type_Constraint {
  /** unique or primary key constraint */
  RefAccountTypePkey = 'ref_account_type_pkey'
}

export enum Ref_Account_Type_Enum {
  /** CC */
  CashCredit = 'CASH_CREDIT',
  /** CURRENT */
  Current = 'CURRENT',
  /** EFC */
  Efc = 'EFC',
  /** OD */
  Overdraft = 'OVERDRAFT'
}

/** Boolean expression to compare columns of type "ref_account_type_enum". All fields are combined with logical 'AND'. */
export type Ref_Account_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Ref_Account_Type_Enum>;
  _in?: InputMaybe<Array<Ref_Account_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Ref_Account_Type_Enum>;
  _nin?: InputMaybe<Array<Ref_Account_Type_Enum>>;
};

/** input type for inserting data into table "ref_account_type" */
export type Ref_Account_Type_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ref_Account_Type_Max_Fields = {
  __typename?: 'ref_account_type_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Ref_Account_Type_Min_Fields = {
  __typename?: 'ref_account_type_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "ref_account_type" */
export type Ref_Account_Type_Mutation_Response = {
  __typename?: 'ref_account_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ref_Account_Type>;
};

/** on conflict condition type for table "ref_account_type" */
export type Ref_Account_Type_On_Conflict = {
  constraint: Ref_Account_Type_Constraint;
  update_columns?: Array<Ref_Account_Type_Update_Column>;
  where?: InputMaybe<Ref_Account_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "ref_account_type". */
export type Ref_Account_Type_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ref_account_type */
export type Ref_Account_Type_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "ref_account_type" */
export enum Ref_Account_Type_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "ref_account_type" */
export type Ref_Account_Type_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "ref_account_type" */
export enum Ref_Account_Type_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "ref_bank" */
export type Ref_Bank = {
  __typename?: 'ref_bank';
  bank_code: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An array relationship */
  supported_integrations: Array<Ref_Perfios_Bank_List>;
  /** An aggregate relationship */
  supported_integrations_aggregate: Ref_Perfios_Bank_List_Aggregate;
};


/** columns and relationships of "ref_bank" */
export type Ref_BankSupported_IntegrationsArgs = {
  distinct_on?: InputMaybe<Array<Ref_Perfios_Bank_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Perfios_Bank_List_Order_By>>;
  where?: InputMaybe<Ref_Perfios_Bank_List_Bool_Exp>;
};


/** columns and relationships of "ref_bank" */
export type Ref_BankSupported_Integrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Perfios_Bank_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Perfios_Bank_List_Order_By>>;
  where?: InputMaybe<Ref_Perfios_Bank_List_Bool_Exp>;
};

/** aggregated selection of "ref_bank" */
export type Ref_Bank_Aggregate = {
  __typename?: 'ref_bank_aggregate';
  aggregate?: Maybe<Ref_Bank_Aggregate_Fields>;
  nodes: Array<Ref_Bank>;
};

/** aggregate fields of "ref_bank" */
export type Ref_Bank_Aggregate_Fields = {
  __typename?: 'ref_bank_aggregate_fields';
  avg?: Maybe<Ref_Bank_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Ref_Bank_Max_Fields>;
  min?: Maybe<Ref_Bank_Min_Fields>;
  stddev?: Maybe<Ref_Bank_Stddev_Fields>;
  stddev_pop?: Maybe<Ref_Bank_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ref_Bank_Stddev_Samp_Fields>;
  sum?: Maybe<Ref_Bank_Sum_Fields>;
  var_pop?: Maybe<Ref_Bank_Var_Pop_Fields>;
  var_samp?: Maybe<Ref_Bank_Var_Samp_Fields>;
  variance?: Maybe<Ref_Bank_Variance_Fields>;
};


/** aggregate fields of "ref_bank" */
export type Ref_Bank_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ref_Bank_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Ref_Bank_Avg_Fields = {
  __typename?: 'ref_bank_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "ref_bank". All fields are combined with a logical 'AND'. */
export type Ref_Bank_Bool_Exp = {
  _and?: InputMaybe<Array<Ref_Bank_Bool_Exp>>;
  _not?: InputMaybe<Ref_Bank_Bool_Exp>;
  _or?: InputMaybe<Array<Ref_Bank_Bool_Exp>>;
  bank_code?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  supported_integrations?: InputMaybe<Ref_Perfios_Bank_List_Bool_Exp>;
};

/** unique or primary key constraints on table "ref_bank" */
export enum Ref_Bank_Constraint {
  /** unique or primary key constraint */
  RefBankBankCodeKey = 'ref_bank_bank_code_key',
  /** unique or primary key constraint */
  RefBankPkey = 'ref_bank_pkey'
}

/** input type for incrementing numeric columns in table "ref_bank" */
export type Ref_Bank_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "ref_bank" */
export type Ref_Bank_Insert_Input = {
  bank_code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  supported_integrations?: InputMaybe<Ref_Perfios_Bank_List_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Ref_Bank_Max_Fields = {
  __typename?: 'ref_bank_max_fields';
  bank_code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Ref_Bank_Min_Fields = {
  __typename?: 'ref_bank_min_fields';
  bank_code?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "ref_bank" */
export type Ref_Bank_Mutation_Response = {
  __typename?: 'ref_bank_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ref_Bank>;
};

/** input type for inserting object relation for remote table "ref_bank" */
export type Ref_Bank_Obj_Rel_Insert_Input = {
  data: Ref_Bank_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Ref_Bank_On_Conflict>;
};

/** on conflict condition type for table "ref_bank" */
export type Ref_Bank_On_Conflict = {
  constraint: Ref_Bank_Constraint;
  update_columns?: Array<Ref_Bank_Update_Column>;
  where?: InputMaybe<Ref_Bank_Bool_Exp>;
};

/** Ordering options when selecting data from "ref_bank". */
export type Ref_Bank_Order_By = {
  bank_code?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  supported_integrations_aggregate?: InputMaybe<Ref_Perfios_Bank_List_Aggregate_Order_By>;
};

/** primary key columns input for table: ref_bank */
export type Ref_Bank_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "ref_bank" */
export enum Ref_Bank_Select_Column {
  /** column name */
  BankCode = 'bank_code',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "ref_bank" */
export type Ref_Bank_Set_Input = {
  bank_code?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Ref_Bank_Stddev_Fields = {
  __typename?: 'ref_bank_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Ref_Bank_Stddev_Pop_Fields = {
  __typename?: 'ref_bank_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Ref_Bank_Stddev_Samp_Fields = {
  __typename?: 'ref_bank_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Ref_Bank_Sum_Fields = {
  __typename?: 'ref_bank_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "ref_bank" */
export enum Ref_Bank_Update_Column {
  /** column name */
  BankCode = 'bank_code',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Ref_Bank_Var_Pop_Fields = {
  __typename?: 'ref_bank_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Ref_Bank_Var_Samp_Fields = {
  __typename?: 'ref_bank_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Ref_Bank_Variance_Fields = {
  __typename?: 'ref_bank_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "ref_billing_period" */
export type Ref_Billing_Period = {
  __typename?: 'ref_billing_period';
  id: Scalars['String'];
  name: Scalars['String'];
  yearly_count: Scalars['float8'];
};

/** aggregated selection of "ref_billing_period" */
export type Ref_Billing_Period_Aggregate = {
  __typename?: 'ref_billing_period_aggregate';
  aggregate?: Maybe<Ref_Billing_Period_Aggregate_Fields>;
  nodes: Array<Ref_Billing_Period>;
};

/** aggregate fields of "ref_billing_period" */
export type Ref_Billing_Period_Aggregate_Fields = {
  __typename?: 'ref_billing_period_aggregate_fields';
  avg?: Maybe<Ref_Billing_Period_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Ref_Billing_Period_Max_Fields>;
  min?: Maybe<Ref_Billing_Period_Min_Fields>;
  stddev?: Maybe<Ref_Billing_Period_Stddev_Fields>;
  stddev_pop?: Maybe<Ref_Billing_Period_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ref_Billing_Period_Stddev_Samp_Fields>;
  sum?: Maybe<Ref_Billing_Period_Sum_Fields>;
  var_pop?: Maybe<Ref_Billing_Period_Var_Pop_Fields>;
  var_samp?: Maybe<Ref_Billing_Period_Var_Samp_Fields>;
  variance?: Maybe<Ref_Billing_Period_Variance_Fields>;
};


/** aggregate fields of "ref_billing_period" */
export type Ref_Billing_Period_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ref_Billing_Period_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Ref_Billing_Period_Avg_Fields = {
  __typename?: 'ref_billing_period_avg_fields';
  yearly_count?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "ref_billing_period". All fields are combined with a logical 'AND'. */
export type Ref_Billing_Period_Bool_Exp = {
  _and?: InputMaybe<Array<Ref_Billing_Period_Bool_Exp>>;
  _not?: InputMaybe<Ref_Billing_Period_Bool_Exp>;
  _or?: InputMaybe<Array<Ref_Billing_Period_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  yearly_count?: InputMaybe<Float8_Comparison_Exp>;
};

/** unique or primary key constraints on table "ref_billing_period" */
export enum Ref_Billing_Period_Constraint {
  /** unique or primary key constraint */
  RefBillingPeriodPkey = 'ref_billing_period_pkey'
}

/** input type for incrementing numeric columns in table "ref_billing_period" */
export type Ref_Billing_Period_Inc_Input = {
  yearly_count?: InputMaybe<Scalars['float8']>;
};

/** input type for inserting data into table "ref_billing_period" */
export type Ref_Billing_Period_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  yearly_count?: InputMaybe<Scalars['float8']>;
};

/** aggregate max on columns */
export type Ref_Billing_Period_Max_Fields = {
  __typename?: 'ref_billing_period_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  yearly_count?: Maybe<Scalars['float8']>;
};

/** aggregate min on columns */
export type Ref_Billing_Period_Min_Fields = {
  __typename?: 'ref_billing_period_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  yearly_count?: Maybe<Scalars['float8']>;
};

/** response of any mutation on the table "ref_billing_period" */
export type Ref_Billing_Period_Mutation_Response = {
  __typename?: 'ref_billing_period_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ref_Billing_Period>;
};

/** on conflict condition type for table "ref_billing_period" */
export type Ref_Billing_Period_On_Conflict = {
  constraint: Ref_Billing_Period_Constraint;
  update_columns?: Array<Ref_Billing_Period_Update_Column>;
  where?: InputMaybe<Ref_Billing_Period_Bool_Exp>;
};

/** Ordering options when selecting data from "ref_billing_period". */
export type Ref_Billing_Period_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  yearly_count?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ref_billing_period */
export type Ref_Billing_Period_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "ref_billing_period" */
export enum Ref_Billing_Period_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  YearlyCount = 'yearly_count'
}

/** input type for updating data in table "ref_billing_period" */
export type Ref_Billing_Period_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  yearly_count?: InputMaybe<Scalars['float8']>;
};

/** aggregate stddev on columns */
export type Ref_Billing_Period_Stddev_Fields = {
  __typename?: 'ref_billing_period_stddev_fields';
  yearly_count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Ref_Billing_Period_Stddev_Pop_Fields = {
  __typename?: 'ref_billing_period_stddev_pop_fields';
  yearly_count?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Ref_Billing_Period_Stddev_Samp_Fields = {
  __typename?: 'ref_billing_period_stddev_samp_fields';
  yearly_count?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Ref_Billing_Period_Sum_Fields = {
  __typename?: 'ref_billing_period_sum_fields';
  yearly_count?: Maybe<Scalars['float8']>;
};

/** update columns of table "ref_billing_period" */
export enum Ref_Billing_Period_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  YearlyCount = 'yearly_count'
}

/** aggregate var_pop on columns */
export type Ref_Billing_Period_Var_Pop_Fields = {
  __typename?: 'ref_billing_period_var_pop_fields';
  yearly_count?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Ref_Billing_Period_Var_Samp_Fields = {
  __typename?: 'ref_billing_period_var_samp_fields';
  yearly_count?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Ref_Billing_Period_Variance_Fields = {
  __typename?: 'ref_billing_period_variance_fields';
  yearly_count?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "ref_category" */
export type Ref_Category = {
  __typename?: 'ref_category';
  id: Scalars['String'];
  name: Scalars['String'];
};

/** aggregated selection of "ref_category" */
export type Ref_Category_Aggregate = {
  __typename?: 'ref_category_aggregate';
  aggregate?: Maybe<Ref_Category_Aggregate_Fields>;
  nodes: Array<Ref_Category>;
};

/** aggregate fields of "ref_category" */
export type Ref_Category_Aggregate_Fields = {
  __typename?: 'ref_category_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Ref_Category_Max_Fields>;
  min?: Maybe<Ref_Category_Min_Fields>;
};


/** aggregate fields of "ref_category" */
export type Ref_Category_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ref_Category_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "ref_category". All fields are combined with a logical 'AND'. */
export type Ref_Category_Bool_Exp = {
  _and?: InputMaybe<Array<Ref_Category_Bool_Exp>>;
  _not?: InputMaybe<Ref_Category_Bool_Exp>;
  _or?: InputMaybe<Array<Ref_Category_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ref_category" */
export enum Ref_Category_Constraint {
  /** unique or primary key constraint */
  RefCategoryPkey = 'ref_category_pkey'
}

/** input type for inserting data into table "ref_category" */
export type Ref_Category_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ref_Category_Max_Fields = {
  __typename?: 'ref_category_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Ref_Category_Min_Fields = {
  __typename?: 'ref_category_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "ref_category" */
export type Ref_Category_Mutation_Response = {
  __typename?: 'ref_category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ref_Category>;
};

/** on conflict condition type for table "ref_category" */
export type Ref_Category_On_Conflict = {
  constraint: Ref_Category_Constraint;
  update_columns?: Array<Ref_Category_Update_Column>;
  where?: InputMaybe<Ref_Category_Bool_Exp>;
};

/** Ordering options when selecting data from "ref_category". */
export type Ref_Category_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ref_category */
export type Ref_Category_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "ref_category" */
export enum Ref_Category_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "ref_category" */
export type Ref_Category_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "ref_category" */
export enum Ref_Category_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "ref_company_status" */
export type Ref_Company_Status = {
  __typename?: 'ref_company_status';
  id: Scalars['String'];
  name: Scalars['String'];
};

/** aggregated selection of "ref_company_status" */
export type Ref_Company_Status_Aggregate = {
  __typename?: 'ref_company_status_aggregate';
  aggregate?: Maybe<Ref_Company_Status_Aggregate_Fields>;
  nodes: Array<Ref_Company_Status>;
};

/** aggregate fields of "ref_company_status" */
export type Ref_Company_Status_Aggregate_Fields = {
  __typename?: 'ref_company_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Ref_Company_Status_Max_Fields>;
  min?: Maybe<Ref_Company_Status_Min_Fields>;
};


/** aggregate fields of "ref_company_status" */
export type Ref_Company_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ref_Company_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "ref_company_status". All fields are combined with a logical 'AND'. */
export type Ref_Company_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Ref_Company_Status_Bool_Exp>>;
  _not?: InputMaybe<Ref_Company_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Ref_Company_Status_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ref_company_status" */
export enum Ref_Company_Status_Constraint {
  /** unique or primary key constraint */
  RefCompanyStatusPkey = 'ref_company_status_pkey'
}

/** input type for inserting data into table "ref_company_status" */
export type Ref_Company_Status_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ref_Company_Status_Max_Fields = {
  __typename?: 'ref_company_status_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Ref_Company_Status_Min_Fields = {
  __typename?: 'ref_company_status_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "ref_company_status" */
export type Ref_Company_Status_Mutation_Response = {
  __typename?: 'ref_company_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ref_Company_Status>;
};

/** on conflict condition type for table "ref_company_status" */
export type Ref_Company_Status_On_Conflict = {
  constraint: Ref_Company_Status_Constraint;
  update_columns?: Array<Ref_Company_Status_Update_Column>;
  where?: InputMaybe<Ref_Company_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "ref_company_status". */
export type Ref_Company_Status_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ref_company_status */
export type Ref_Company_Status_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "ref_company_status" */
export enum Ref_Company_Status_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "ref_company_status" */
export type Ref_Company_Status_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "ref_company_status" */
export enum Ref_Company_Status_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "ref_company_type" */
export type Ref_Company_Type = {
  __typename?: 'ref_company_type';
  id: Scalars['String'];
  name: Scalars['String'];
};

/** aggregated selection of "ref_company_type" */
export type Ref_Company_Type_Aggregate = {
  __typename?: 'ref_company_type_aggregate';
  aggregate?: Maybe<Ref_Company_Type_Aggregate_Fields>;
  nodes: Array<Ref_Company_Type>;
};

/** aggregate fields of "ref_company_type" */
export type Ref_Company_Type_Aggregate_Fields = {
  __typename?: 'ref_company_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Ref_Company_Type_Max_Fields>;
  min?: Maybe<Ref_Company_Type_Min_Fields>;
};


/** aggregate fields of "ref_company_type" */
export type Ref_Company_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ref_Company_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "ref_company_type". All fields are combined with a logical 'AND'. */
export type Ref_Company_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Ref_Company_Type_Bool_Exp>>;
  _not?: InputMaybe<Ref_Company_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Ref_Company_Type_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ref_company_type" */
export enum Ref_Company_Type_Constraint {
  /** unique or primary key constraint */
  RefCompanyTypePkey = 'ref_company_type_pkey'
}

/** input type for inserting data into table "ref_company_type" */
export type Ref_Company_Type_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ref_Company_Type_Max_Fields = {
  __typename?: 'ref_company_type_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Ref_Company_Type_Min_Fields = {
  __typename?: 'ref_company_type_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "ref_company_type" */
export type Ref_Company_Type_Mutation_Response = {
  __typename?: 'ref_company_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ref_Company_Type>;
};

/** input type for inserting object relation for remote table "ref_company_type" */
export type Ref_Company_Type_Obj_Rel_Insert_Input = {
  data: Ref_Company_Type_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Ref_Company_Type_On_Conflict>;
};

/** on conflict condition type for table "ref_company_type" */
export type Ref_Company_Type_On_Conflict = {
  constraint: Ref_Company_Type_Constraint;
  update_columns?: Array<Ref_Company_Type_Update_Column>;
  where?: InputMaybe<Ref_Company_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "ref_company_type". */
export type Ref_Company_Type_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ref_company_type */
export type Ref_Company_Type_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "ref_company_type" */
export enum Ref_Company_Type_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "ref_company_type" */
export type Ref_Company_Type_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "ref_company_type" */
export enum Ref_Company_Type_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "ref_country" */
export type Ref_Country = {
  __typename?: 'ref_country';
  id: Scalars['Int'];
  iso2_code: Scalars['String'];
  name: Scalars['String'];
  phonecode: Scalars['Int'];
  /** An array relationship */
  ref_states: Array<Ref_States>;
  /** An aggregate relationship */
  ref_states_aggregate: Ref_States_Aggregate;
};


/** columns and relationships of "ref_country" */
export type Ref_CountryRef_StatesArgs = {
  distinct_on?: InputMaybe<Array<Ref_States_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_States_Order_By>>;
  where?: InputMaybe<Ref_States_Bool_Exp>;
};


/** columns and relationships of "ref_country" */
export type Ref_CountryRef_States_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_States_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_States_Order_By>>;
  where?: InputMaybe<Ref_States_Bool_Exp>;
};

/** aggregated selection of "ref_country" */
export type Ref_Country_Aggregate = {
  __typename?: 'ref_country_aggregate';
  aggregate?: Maybe<Ref_Country_Aggregate_Fields>;
  nodes: Array<Ref_Country>;
};

/** aggregate fields of "ref_country" */
export type Ref_Country_Aggregate_Fields = {
  __typename?: 'ref_country_aggregate_fields';
  avg?: Maybe<Ref_Country_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Ref_Country_Max_Fields>;
  min?: Maybe<Ref_Country_Min_Fields>;
  stddev?: Maybe<Ref_Country_Stddev_Fields>;
  stddev_pop?: Maybe<Ref_Country_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ref_Country_Stddev_Samp_Fields>;
  sum?: Maybe<Ref_Country_Sum_Fields>;
  var_pop?: Maybe<Ref_Country_Var_Pop_Fields>;
  var_samp?: Maybe<Ref_Country_Var_Samp_Fields>;
  variance?: Maybe<Ref_Country_Variance_Fields>;
};


/** aggregate fields of "ref_country" */
export type Ref_Country_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ref_Country_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Ref_Country_Avg_Fields = {
  __typename?: 'ref_country_avg_fields';
  id?: Maybe<Scalars['Float']>;
  phonecode?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "ref_country". All fields are combined with a logical 'AND'. */
export type Ref_Country_Bool_Exp = {
  _and?: InputMaybe<Array<Ref_Country_Bool_Exp>>;
  _not?: InputMaybe<Ref_Country_Bool_Exp>;
  _or?: InputMaybe<Array<Ref_Country_Bool_Exp>>;
  id?: InputMaybe<Int_Comparison_Exp>;
  iso2_code?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  phonecode?: InputMaybe<Int_Comparison_Exp>;
  ref_states?: InputMaybe<Ref_States_Bool_Exp>;
};

/** unique or primary key constraints on table "ref_country" */
export enum Ref_Country_Constraint {
  /** unique or primary key constraint */
  RefCountryPkey = 'ref_country_pkey'
}

/** input type for incrementing numeric columns in table "ref_country" */
export type Ref_Country_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
  phonecode?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "ref_country" */
export type Ref_Country_Insert_Input = {
  id?: InputMaybe<Scalars['Int']>;
  iso2_code?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phonecode?: InputMaybe<Scalars['Int']>;
  ref_states?: InputMaybe<Ref_States_Arr_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Ref_Country_Max_Fields = {
  __typename?: 'ref_country_max_fields';
  id?: Maybe<Scalars['Int']>;
  iso2_code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phonecode?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Ref_Country_Min_Fields = {
  __typename?: 'ref_country_min_fields';
  id?: Maybe<Scalars['Int']>;
  iso2_code?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  phonecode?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "ref_country" */
export type Ref_Country_Mutation_Response = {
  __typename?: 'ref_country_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ref_Country>;
};

/** input type for inserting object relation for remote table "ref_country" */
export type Ref_Country_Obj_Rel_Insert_Input = {
  data: Ref_Country_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Ref_Country_On_Conflict>;
};

/** on conflict condition type for table "ref_country" */
export type Ref_Country_On_Conflict = {
  constraint: Ref_Country_Constraint;
  update_columns?: Array<Ref_Country_Update_Column>;
  where?: InputMaybe<Ref_Country_Bool_Exp>;
};

/** Ordering options when selecting data from "ref_country". */
export type Ref_Country_Order_By = {
  id?: InputMaybe<Order_By>;
  iso2_code?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  phonecode?: InputMaybe<Order_By>;
  ref_states_aggregate?: InputMaybe<Ref_States_Aggregate_Order_By>;
};

/** primary key columns input for table: ref_country */
export type Ref_Country_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "ref_country" */
export enum Ref_Country_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Iso2Code = 'iso2_code',
  /** column name */
  Name = 'name',
  /** column name */
  Phonecode = 'phonecode'
}

/** input type for updating data in table "ref_country" */
export type Ref_Country_Set_Input = {
  id?: InputMaybe<Scalars['Int']>;
  iso2_code?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phonecode?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Ref_Country_Stddev_Fields = {
  __typename?: 'ref_country_stddev_fields';
  id?: Maybe<Scalars['Float']>;
  phonecode?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Ref_Country_Stddev_Pop_Fields = {
  __typename?: 'ref_country_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
  phonecode?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Ref_Country_Stddev_Samp_Fields = {
  __typename?: 'ref_country_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
  phonecode?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Ref_Country_Sum_Fields = {
  __typename?: 'ref_country_sum_fields';
  id?: Maybe<Scalars['Int']>;
  phonecode?: Maybe<Scalars['Int']>;
};

/** update columns of table "ref_country" */
export enum Ref_Country_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Iso2Code = 'iso2_code',
  /** column name */
  Name = 'name',
  /** column name */
  Phonecode = 'phonecode'
}

/** aggregate var_pop on columns */
export type Ref_Country_Var_Pop_Fields = {
  __typename?: 'ref_country_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
  phonecode?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Ref_Country_Var_Samp_Fields = {
  __typename?: 'ref_country_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
  phonecode?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Ref_Country_Variance_Fields = {
  __typename?: 'ref_country_variance_fields';
  id?: Maybe<Scalars['Float']>;
  phonecode?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "ref_currency" */
export type Ref_Currency = {
  __typename?: 'ref_currency';
  id: Scalars['String'];
  name: Scalars['String'];
};

/** aggregated selection of "ref_currency" */
export type Ref_Currency_Aggregate = {
  __typename?: 'ref_currency_aggregate';
  aggregate?: Maybe<Ref_Currency_Aggregate_Fields>;
  nodes: Array<Ref_Currency>;
};

/** aggregate fields of "ref_currency" */
export type Ref_Currency_Aggregate_Fields = {
  __typename?: 'ref_currency_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Ref_Currency_Max_Fields>;
  min?: Maybe<Ref_Currency_Min_Fields>;
};


/** aggregate fields of "ref_currency" */
export type Ref_Currency_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ref_Currency_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "ref_currency". All fields are combined with a logical 'AND'. */
export type Ref_Currency_Bool_Exp = {
  _and?: InputMaybe<Array<Ref_Currency_Bool_Exp>>;
  _not?: InputMaybe<Ref_Currency_Bool_Exp>;
  _or?: InputMaybe<Array<Ref_Currency_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ref_currency" */
export enum Ref_Currency_Constraint {
  /** unique or primary key constraint */
  RefCurrencyPkey = 'ref_currency_pkey'
}

/** input type for inserting data into table "ref_currency" */
export type Ref_Currency_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ref_Currency_Max_Fields = {
  __typename?: 'ref_currency_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Ref_Currency_Min_Fields = {
  __typename?: 'ref_currency_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "ref_currency" */
export type Ref_Currency_Mutation_Response = {
  __typename?: 'ref_currency_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ref_Currency>;
};

/** on conflict condition type for table "ref_currency" */
export type Ref_Currency_On_Conflict = {
  constraint: Ref_Currency_Constraint;
  update_columns?: Array<Ref_Currency_Update_Column>;
  where?: InputMaybe<Ref_Currency_Bool_Exp>;
};

/** Ordering options when selecting data from "ref_currency". */
export type Ref_Currency_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ref_currency */
export type Ref_Currency_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "ref_currency" */
export enum Ref_Currency_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "ref_currency" */
export type Ref_Currency_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "ref_currency" */
export enum Ref_Currency_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "ref_file_category" */
export type Ref_File_Category = {
  __typename?: 'ref_file_category';
  id: Scalars['String'];
  name: Scalars['String'];
};

/** aggregated selection of "ref_file_category" */
export type Ref_File_Category_Aggregate = {
  __typename?: 'ref_file_category_aggregate';
  aggregate?: Maybe<Ref_File_Category_Aggregate_Fields>;
  nodes: Array<Ref_File_Category>;
};

/** aggregate fields of "ref_file_category" */
export type Ref_File_Category_Aggregate_Fields = {
  __typename?: 'ref_file_category_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Ref_File_Category_Max_Fields>;
  min?: Maybe<Ref_File_Category_Min_Fields>;
};


/** aggregate fields of "ref_file_category" */
export type Ref_File_Category_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ref_File_Category_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "ref_file_category". All fields are combined with a logical 'AND'. */
export type Ref_File_Category_Bool_Exp = {
  _and?: InputMaybe<Array<Ref_File_Category_Bool_Exp>>;
  _not?: InputMaybe<Ref_File_Category_Bool_Exp>;
  _or?: InputMaybe<Array<Ref_File_Category_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ref_file_category" */
export enum Ref_File_Category_Constraint {
  /** unique or primary key constraint */
  RefFileCategoryPkey = 'ref_file_category_pkey'
}

/** input type for inserting data into table "ref_file_category" */
export type Ref_File_Category_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ref_File_Category_Max_Fields = {
  __typename?: 'ref_file_category_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Ref_File_Category_Min_Fields = {
  __typename?: 'ref_file_category_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "ref_file_category" */
export type Ref_File_Category_Mutation_Response = {
  __typename?: 'ref_file_category_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ref_File_Category>;
};

/** on conflict condition type for table "ref_file_category" */
export type Ref_File_Category_On_Conflict = {
  constraint: Ref_File_Category_Constraint;
  update_columns?: Array<Ref_File_Category_Update_Column>;
  where?: InputMaybe<Ref_File_Category_Bool_Exp>;
};

/** Ordering options when selecting data from "ref_file_category". */
export type Ref_File_Category_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ref_file_category */
export type Ref_File_Category_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "ref_file_category" */
export enum Ref_File_Category_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "ref_file_category" */
export type Ref_File_Category_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "ref_file_category" */
export enum Ref_File_Category_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "ref_integration_file_status" */
export type Ref_Integration_File_Status = {
  __typename?: 'ref_integration_file_status';
  id: Scalars['String'];
  name: Scalars['String'];
};

/** aggregated selection of "ref_integration_file_status" */
export type Ref_Integration_File_Status_Aggregate = {
  __typename?: 'ref_integration_file_status_aggregate';
  aggregate?: Maybe<Ref_Integration_File_Status_Aggregate_Fields>;
  nodes: Array<Ref_Integration_File_Status>;
};

/** aggregate fields of "ref_integration_file_status" */
export type Ref_Integration_File_Status_Aggregate_Fields = {
  __typename?: 'ref_integration_file_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Ref_Integration_File_Status_Max_Fields>;
  min?: Maybe<Ref_Integration_File_Status_Min_Fields>;
};


/** aggregate fields of "ref_integration_file_status" */
export type Ref_Integration_File_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ref_Integration_File_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "ref_integration_file_status". All fields are combined with a logical 'AND'. */
export type Ref_Integration_File_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Ref_Integration_File_Status_Bool_Exp>>;
  _not?: InputMaybe<Ref_Integration_File_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Ref_Integration_File_Status_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ref_integration_file_status" */
export enum Ref_Integration_File_Status_Constraint {
  /** unique or primary key constraint */
  RefIntegrationFileStatusPkey = 'ref_integration_file_status_pkey'
}

/** input type for inserting data into table "ref_integration_file_status" */
export type Ref_Integration_File_Status_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ref_Integration_File_Status_Max_Fields = {
  __typename?: 'ref_integration_file_status_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Ref_Integration_File_Status_Min_Fields = {
  __typename?: 'ref_integration_file_status_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "ref_integration_file_status" */
export type Ref_Integration_File_Status_Mutation_Response = {
  __typename?: 'ref_integration_file_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ref_Integration_File_Status>;
};

/** on conflict condition type for table "ref_integration_file_status" */
export type Ref_Integration_File_Status_On_Conflict = {
  constraint: Ref_Integration_File_Status_Constraint;
  update_columns?: Array<Ref_Integration_File_Status_Update_Column>;
  where?: InputMaybe<Ref_Integration_File_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "ref_integration_file_status". */
export type Ref_Integration_File_Status_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ref_integration_file_status */
export type Ref_Integration_File_Status_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "ref_integration_file_status" */
export enum Ref_Integration_File_Status_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "ref_integration_file_status" */
export type Ref_Integration_File_Status_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "ref_integration_file_status" */
export enum Ref_Integration_File_Status_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "ref_integration_status" */
export type Ref_Integration_Status = {
  __typename?: 'ref_integration_status';
  id: Scalars['String'];
  name: Scalars['String'];
};

/** aggregated selection of "ref_integration_status" */
export type Ref_Integration_Status_Aggregate = {
  __typename?: 'ref_integration_status_aggregate';
  aggregate?: Maybe<Ref_Integration_Status_Aggregate_Fields>;
  nodes: Array<Ref_Integration_Status>;
};

/** aggregate fields of "ref_integration_status" */
export type Ref_Integration_Status_Aggregate_Fields = {
  __typename?: 'ref_integration_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Ref_Integration_Status_Max_Fields>;
  min?: Maybe<Ref_Integration_Status_Min_Fields>;
};


/** aggregate fields of "ref_integration_status" */
export type Ref_Integration_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ref_Integration_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "ref_integration_status". All fields are combined with a logical 'AND'. */
export type Ref_Integration_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Ref_Integration_Status_Bool_Exp>>;
  _not?: InputMaybe<Ref_Integration_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Ref_Integration_Status_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ref_integration_status" */
export enum Ref_Integration_Status_Constraint {
  /** unique or primary key constraint */
  RefIntegrationStatusPkey = 'ref_integration_status_pkey'
}

/** input type for inserting data into table "ref_integration_status" */
export type Ref_Integration_Status_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ref_Integration_Status_Max_Fields = {
  __typename?: 'ref_integration_status_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Ref_Integration_Status_Min_Fields = {
  __typename?: 'ref_integration_status_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "ref_integration_status" */
export type Ref_Integration_Status_Mutation_Response = {
  __typename?: 'ref_integration_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ref_Integration_Status>;
};

/** on conflict condition type for table "ref_integration_status" */
export type Ref_Integration_Status_On_Conflict = {
  constraint: Ref_Integration_Status_Constraint;
  update_columns?: Array<Ref_Integration_Status_Update_Column>;
  where?: InputMaybe<Ref_Integration_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "ref_integration_status". */
export type Ref_Integration_Status_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ref_integration_status */
export type Ref_Integration_Status_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "ref_integration_status" */
export enum Ref_Integration_Status_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "ref_integration_status" */
export type Ref_Integration_Status_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "ref_integration_status" */
export enum Ref_Integration_Status_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "ref_investor_status" */
export type Ref_Investor_Status = {
  __typename?: 'ref_investor_status';
  id: Scalars['String'];
  name: Scalars['String'];
};

/** aggregated selection of "ref_investor_status" */
export type Ref_Investor_Status_Aggregate = {
  __typename?: 'ref_investor_status_aggregate';
  aggregate?: Maybe<Ref_Investor_Status_Aggregate_Fields>;
  nodes: Array<Ref_Investor_Status>;
};

/** aggregate fields of "ref_investor_status" */
export type Ref_Investor_Status_Aggregate_Fields = {
  __typename?: 'ref_investor_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Ref_Investor_Status_Max_Fields>;
  min?: Maybe<Ref_Investor_Status_Min_Fields>;
};


/** aggregate fields of "ref_investor_status" */
export type Ref_Investor_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ref_Investor_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "ref_investor_status". All fields are combined with a logical 'AND'. */
export type Ref_Investor_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Ref_Investor_Status_Bool_Exp>>;
  _not?: InputMaybe<Ref_Investor_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Ref_Investor_Status_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ref_investor_status" */
export enum Ref_Investor_Status_Constraint {
  /** unique or primary key constraint */
  RefInvestorStatusPkey = 'ref_investor_status_pkey'
}

/** input type for inserting data into table "ref_investor_status" */
export type Ref_Investor_Status_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ref_Investor_Status_Max_Fields = {
  __typename?: 'ref_investor_status_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Ref_Investor_Status_Min_Fields = {
  __typename?: 'ref_investor_status_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "ref_investor_status" */
export type Ref_Investor_Status_Mutation_Response = {
  __typename?: 'ref_investor_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ref_Investor_Status>;
};

/** on conflict condition type for table "ref_investor_status" */
export type Ref_Investor_Status_On_Conflict = {
  constraint: Ref_Investor_Status_Constraint;
  update_columns?: Array<Ref_Investor_Status_Update_Column>;
  where?: InputMaybe<Ref_Investor_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "ref_investor_status". */
export type Ref_Investor_Status_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ref_investor_status */
export type Ref_Investor_Status_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "ref_investor_status" */
export enum Ref_Investor_Status_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "ref_investor_status" */
export type Ref_Investor_Status_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "ref_investor_status" */
export enum Ref_Investor_Status_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "ref_investor_type" */
export type Ref_Investor_Type = {
  __typename?: 'ref_investor_type';
  description: Scalars['String'];
  value: Scalars['String'];
};

/** aggregated selection of "ref_investor_type" */
export type Ref_Investor_Type_Aggregate = {
  __typename?: 'ref_investor_type_aggregate';
  aggregate?: Maybe<Ref_Investor_Type_Aggregate_Fields>;
  nodes: Array<Ref_Investor_Type>;
};

/** aggregate fields of "ref_investor_type" */
export type Ref_Investor_Type_Aggregate_Fields = {
  __typename?: 'ref_investor_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Ref_Investor_Type_Max_Fields>;
  min?: Maybe<Ref_Investor_Type_Min_Fields>;
};


/** aggregate fields of "ref_investor_type" */
export type Ref_Investor_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ref_Investor_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "ref_investor_type". All fields are combined with a logical 'AND'. */
export type Ref_Investor_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Ref_Investor_Type_Bool_Exp>>;
  _not?: InputMaybe<Ref_Investor_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Ref_Investor_Type_Bool_Exp>>;
  description?: InputMaybe<String_Comparison_Exp>;
  value?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ref_investor_type" */
export enum Ref_Investor_Type_Constraint {
  /** unique or primary key constraint */
  RefInvestorTypePkey = 'ref_investor_type_pkey'
}

export enum Ref_Investor_Type_Enum {
  /** Bank */
  Bank = 'BANK',
  /** Family Office */
  FamilyOffice = 'FAMILY_OFFICE',
  /** Funds */
  Funds = 'FUNDS',
  /** HNI */
  Hni = 'HNI',
  /** NBFC */
  Nbfc = 'NBFC',
  /** Retail Investor */
  RetailInvestor = 'RETAIL_INVESTOR'
}

/** Boolean expression to compare columns of type "ref_investor_type_enum". All fields are combined with logical 'AND'. */
export type Ref_Investor_Type_Enum_Comparison_Exp = {
  _eq?: InputMaybe<Ref_Investor_Type_Enum>;
  _in?: InputMaybe<Array<Ref_Investor_Type_Enum>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Ref_Investor_Type_Enum>;
  _nin?: InputMaybe<Array<Ref_Investor_Type_Enum>>;
};

/** input type for inserting data into table "ref_investor_type" */
export type Ref_Investor_Type_Insert_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ref_Investor_Type_Max_Fields = {
  __typename?: 'ref_investor_type_max_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Ref_Investor_Type_Min_Fields = {
  __typename?: 'ref_investor_type_min_fields';
  description?: Maybe<Scalars['String']>;
  value?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "ref_investor_type" */
export type Ref_Investor_Type_Mutation_Response = {
  __typename?: 'ref_investor_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ref_Investor_Type>;
};

/** on conflict condition type for table "ref_investor_type" */
export type Ref_Investor_Type_On_Conflict = {
  constraint: Ref_Investor_Type_Constraint;
  update_columns?: Array<Ref_Investor_Type_Update_Column>;
  where?: InputMaybe<Ref_Investor_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "ref_investor_type". */
export type Ref_Investor_Type_Order_By = {
  description?: InputMaybe<Order_By>;
  value?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ref_investor_type */
export type Ref_Investor_Type_Pk_Columns_Input = {
  value: Scalars['String'];
};

/** select columns of table "ref_investor_type" */
export enum Ref_Investor_Type_Select_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** input type for updating data in table "ref_investor_type" */
export type Ref_Investor_Type_Set_Input = {
  description?: InputMaybe<Scalars['String']>;
  value?: InputMaybe<Scalars['String']>;
};

/** update columns of table "ref_investor_type" */
export enum Ref_Investor_Type_Update_Column {
  /** column name */
  Description = 'description',
  /** column name */
  Value = 'value'
}

/** columns and relationships of "ref_perfios_bank_list" */
export type Ref_Perfios_Bank_List = {
  __typename?: 'ref_perfios_bank_list';
  bank_id?: Maybe<Scalars['Int']>;
  bank_name: Scalars['String'];
  id: Scalars['Int'];
  netbanking: Scalars['Boolean'];
  perfios_bank_id: Scalars['Int'];
  statement_upload: Scalars['Boolean'];
  type?: Maybe<Scalars['String']>;
  verified: Scalars['Boolean'];
};

/** aggregated selection of "ref_perfios_bank_list" */
export type Ref_Perfios_Bank_List_Aggregate = {
  __typename?: 'ref_perfios_bank_list_aggregate';
  aggregate?: Maybe<Ref_Perfios_Bank_List_Aggregate_Fields>;
  nodes: Array<Ref_Perfios_Bank_List>;
};

/** aggregate fields of "ref_perfios_bank_list" */
export type Ref_Perfios_Bank_List_Aggregate_Fields = {
  __typename?: 'ref_perfios_bank_list_aggregate_fields';
  avg?: Maybe<Ref_Perfios_Bank_List_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Ref_Perfios_Bank_List_Max_Fields>;
  min?: Maybe<Ref_Perfios_Bank_List_Min_Fields>;
  stddev?: Maybe<Ref_Perfios_Bank_List_Stddev_Fields>;
  stddev_pop?: Maybe<Ref_Perfios_Bank_List_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ref_Perfios_Bank_List_Stddev_Samp_Fields>;
  sum?: Maybe<Ref_Perfios_Bank_List_Sum_Fields>;
  var_pop?: Maybe<Ref_Perfios_Bank_List_Var_Pop_Fields>;
  var_samp?: Maybe<Ref_Perfios_Bank_List_Var_Samp_Fields>;
  variance?: Maybe<Ref_Perfios_Bank_List_Variance_Fields>;
};


/** aggregate fields of "ref_perfios_bank_list" */
export type Ref_Perfios_Bank_List_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ref_Perfios_Bank_List_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ref_perfios_bank_list" */
export type Ref_Perfios_Bank_List_Aggregate_Order_By = {
  avg?: InputMaybe<Ref_Perfios_Bank_List_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Ref_Perfios_Bank_List_Max_Order_By>;
  min?: InputMaybe<Ref_Perfios_Bank_List_Min_Order_By>;
  stddev?: InputMaybe<Ref_Perfios_Bank_List_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Ref_Perfios_Bank_List_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Ref_Perfios_Bank_List_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Ref_Perfios_Bank_List_Sum_Order_By>;
  var_pop?: InputMaybe<Ref_Perfios_Bank_List_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Ref_Perfios_Bank_List_Var_Samp_Order_By>;
  variance?: InputMaybe<Ref_Perfios_Bank_List_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ref_perfios_bank_list" */
export type Ref_Perfios_Bank_List_Arr_Rel_Insert_Input = {
  data: Array<Ref_Perfios_Bank_List_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Ref_Perfios_Bank_List_On_Conflict>;
};

/** aggregate avg on columns */
export type Ref_Perfios_Bank_List_Avg_Fields = {
  __typename?: 'ref_perfios_bank_list_avg_fields';
  bank_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  perfios_bank_id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "ref_perfios_bank_list" */
export type Ref_Perfios_Bank_List_Avg_Order_By = {
  bank_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  perfios_bank_id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ref_perfios_bank_list". All fields are combined with a logical 'AND'. */
export type Ref_Perfios_Bank_List_Bool_Exp = {
  _and?: InputMaybe<Array<Ref_Perfios_Bank_List_Bool_Exp>>;
  _not?: InputMaybe<Ref_Perfios_Bank_List_Bool_Exp>;
  _or?: InputMaybe<Array<Ref_Perfios_Bank_List_Bool_Exp>>;
  bank_id?: InputMaybe<Int_Comparison_Exp>;
  bank_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  netbanking?: InputMaybe<Boolean_Comparison_Exp>;
  perfios_bank_id?: InputMaybe<Int_Comparison_Exp>;
  statement_upload?: InputMaybe<Boolean_Comparison_Exp>;
  type?: InputMaybe<String_Comparison_Exp>;
  verified?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "ref_perfios_bank_list" */
export enum Ref_Perfios_Bank_List_Constraint {
  /** unique or primary key constraint */
  RefPerfiosBankListPkey = 'ref_perfios_bank_list_pkey'
}

/** input type for incrementing numeric columns in table "ref_perfios_bank_list" */
export type Ref_Perfios_Bank_List_Inc_Input = {
  bank_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  perfios_bank_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "ref_perfios_bank_list" */
export type Ref_Perfios_Bank_List_Insert_Input = {
  bank_id?: InputMaybe<Scalars['Int']>;
  bank_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  netbanking?: InputMaybe<Scalars['Boolean']>;
  perfios_bank_id?: InputMaybe<Scalars['Int']>;
  statement_upload?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Ref_Perfios_Bank_List_Max_Fields = {
  __typename?: 'ref_perfios_bank_list_max_fields';
  bank_id?: Maybe<Scalars['Int']>;
  bank_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  perfios_bank_id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ref_perfios_bank_list" */
export type Ref_Perfios_Bank_List_Max_Order_By = {
  bank_id?: InputMaybe<Order_By>;
  bank_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  perfios_bank_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Ref_Perfios_Bank_List_Min_Fields = {
  __typename?: 'ref_perfios_bank_list_min_fields';
  bank_id?: Maybe<Scalars['Int']>;
  bank_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  perfios_bank_id?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ref_perfios_bank_list" */
export type Ref_Perfios_Bank_List_Min_Order_By = {
  bank_id?: InputMaybe<Order_By>;
  bank_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  perfios_bank_id?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ref_perfios_bank_list" */
export type Ref_Perfios_Bank_List_Mutation_Response = {
  __typename?: 'ref_perfios_bank_list_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ref_Perfios_Bank_List>;
};

/** on conflict condition type for table "ref_perfios_bank_list" */
export type Ref_Perfios_Bank_List_On_Conflict = {
  constraint: Ref_Perfios_Bank_List_Constraint;
  update_columns?: Array<Ref_Perfios_Bank_List_Update_Column>;
  where?: InputMaybe<Ref_Perfios_Bank_List_Bool_Exp>;
};

/** Ordering options when selecting data from "ref_perfios_bank_list". */
export type Ref_Perfios_Bank_List_Order_By = {
  bank_id?: InputMaybe<Order_By>;
  bank_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  netbanking?: InputMaybe<Order_By>;
  perfios_bank_id?: InputMaybe<Order_By>;
  statement_upload?: InputMaybe<Order_By>;
  type?: InputMaybe<Order_By>;
  verified?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ref_perfios_bank_list */
export type Ref_Perfios_Bank_List_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "ref_perfios_bank_list" */
export enum Ref_Perfios_Bank_List_Select_Column {
  /** column name */
  BankId = 'bank_id',
  /** column name */
  BankName = 'bank_name',
  /** column name */
  Id = 'id',
  /** column name */
  Netbanking = 'netbanking',
  /** column name */
  PerfiosBankId = 'perfios_bank_id',
  /** column name */
  StatementUpload = 'statement_upload',
  /** column name */
  Type = 'type',
  /** column name */
  Verified = 'verified'
}

/** input type for updating data in table "ref_perfios_bank_list" */
export type Ref_Perfios_Bank_List_Set_Input = {
  bank_id?: InputMaybe<Scalars['Int']>;
  bank_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  netbanking?: InputMaybe<Scalars['Boolean']>;
  perfios_bank_id?: InputMaybe<Scalars['Int']>;
  statement_upload?: InputMaybe<Scalars['Boolean']>;
  type?: InputMaybe<Scalars['String']>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Ref_Perfios_Bank_List_Stddev_Fields = {
  __typename?: 'ref_perfios_bank_list_stddev_fields';
  bank_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  perfios_bank_id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "ref_perfios_bank_list" */
export type Ref_Perfios_Bank_List_Stddev_Order_By = {
  bank_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  perfios_bank_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Ref_Perfios_Bank_List_Stddev_Pop_Fields = {
  __typename?: 'ref_perfios_bank_list_stddev_pop_fields';
  bank_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  perfios_bank_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "ref_perfios_bank_list" */
export type Ref_Perfios_Bank_List_Stddev_Pop_Order_By = {
  bank_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  perfios_bank_id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Ref_Perfios_Bank_List_Stddev_Samp_Fields = {
  __typename?: 'ref_perfios_bank_list_stddev_samp_fields';
  bank_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  perfios_bank_id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "ref_perfios_bank_list" */
export type Ref_Perfios_Bank_List_Stddev_Samp_Order_By = {
  bank_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  perfios_bank_id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Ref_Perfios_Bank_List_Sum_Fields = {
  __typename?: 'ref_perfios_bank_list_sum_fields';
  bank_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  perfios_bank_id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "ref_perfios_bank_list" */
export type Ref_Perfios_Bank_List_Sum_Order_By = {
  bank_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  perfios_bank_id?: InputMaybe<Order_By>;
};

/** update columns of table "ref_perfios_bank_list" */
export enum Ref_Perfios_Bank_List_Update_Column {
  /** column name */
  BankId = 'bank_id',
  /** column name */
  BankName = 'bank_name',
  /** column name */
  Id = 'id',
  /** column name */
  Netbanking = 'netbanking',
  /** column name */
  PerfiosBankId = 'perfios_bank_id',
  /** column name */
  StatementUpload = 'statement_upload',
  /** column name */
  Type = 'type',
  /** column name */
  Verified = 'verified'
}

/** aggregate var_pop on columns */
export type Ref_Perfios_Bank_List_Var_Pop_Fields = {
  __typename?: 'ref_perfios_bank_list_var_pop_fields';
  bank_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  perfios_bank_id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "ref_perfios_bank_list" */
export type Ref_Perfios_Bank_List_Var_Pop_Order_By = {
  bank_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  perfios_bank_id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Ref_Perfios_Bank_List_Var_Samp_Fields = {
  __typename?: 'ref_perfios_bank_list_var_samp_fields';
  bank_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  perfios_bank_id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "ref_perfios_bank_list" */
export type Ref_Perfios_Bank_List_Var_Samp_Order_By = {
  bank_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  perfios_bank_id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Ref_Perfios_Bank_List_Variance_Fields = {
  __typename?: 'ref_perfios_bank_list_variance_fields';
  bank_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  perfios_bank_id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "ref_perfios_bank_list" */
export type Ref_Perfios_Bank_List_Variance_Order_By = {
  bank_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  perfios_bank_id?: InputMaybe<Order_By>;
};

/** columns and relationships of "ref_role" */
export type Ref_Role = {
  __typename?: 'ref_role';
  id: Scalars['String'];
  name: Scalars['String'];
};

/** aggregated selection of "ref_role" */
export type Ref_Role_Aggregate = {
  __typename?: 'ref_role_aggregate';
  aggregate?: Maybe<Ref_Role_Aggregate_Fields>;
  nodes: Array<Ref_Role>;
};

/** aggregate fields of "ref_role" */
export type Ref_Role_Aggregate_Fields = {
  __typename?: 'ref_role_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Ref_Role_Max_Fields>;
  min?: Maybe<Ref_Role_Min_Fields>;
};


/** aggregate fields of "ref_role" */
export type Ref_Role_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ref_Role_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "ref_role". All fields are combined with a logical 'AND'. */
export type Ref_Role_Bool_Exp = {
  _and?: InputMaybe<Array<Ref_Role_Bool_Exp>>;
  _not?: InputMaybe<Ref_Role_Bool_Exp>;
  _or?: InputMaybe<Array<Ref_Role_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ref_role" */
export enum Ref_Role_Constraint {
  /** unique or primary key constraint */
  RefRolePkey = 'ref_role_pkey'
}

/** input type for inserting data into table "ref_role" */
export type Ref_Role_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ref_Role_Max_Fields = {
  __typename?: 'ref_role_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Ref_Role_Min_Fields = {
  __typename?: 'ref_role_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "ref_role" */
export type Ref_Role_Mutation_Response = {
  __typename?: 'ref_role_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ref_Role>;
};

/** on conflict condition type for table "ref_role" */
export type Ref_Role_On_Conflict = {
  constraint: Ref_Role_Constraint;
  update_columns?: Array<Ref_Role_Update_Column>;
  where?: InputMaybe<Ref_Role_Bool_Exp>;
};

/** Ordering options when selecting data from "ref_role". */
export type Ref_Role_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ref_role */
export type Ref_Role_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "ref_role" */
export enum Ref_Role_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "ref_role" */
export type Ref_Role_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "ref_role" */
export enum Ref_Role_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "ref_source" */
export type Ref_Source = {
  __typename?: 'ref_source';
  category_id: Scalars['String'];
  id: Scalars['String'];
  /** An array relationship */
  integrations: Array<Integration_Auth>;
  /** An aggregate relationship */
  integrations_aggregate: Integration_Auth_Aggregate;
  name: Scalars['String'];
};


/** columns and relationships of "ref_source" */
export type Ref_SourceIntegrationsArgs = {
  distinct_on?: InputMaybe<Array<Integration_Auth_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Integration_Auth_Order_By>>;
  where?: InputMaybe<Integration_Auth_Bool_Exp>;
};


/** columns and relationships of "ref_source" */
export type Ref_SourceIntegrations_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Integration_Auth_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Integration_Auth_Order_By>>;
  where?: InputMaybe<Integration_Auth_Bool_Exp>;
};

/** aggregated selection of "ref_source" */
export type Ref_Source_Aggregate = {
  __typename?: 'ref_source_aggregate';
  aggregate?: Maybe<Ref_Source_Aggregate_Fields>;
  nodes: Array<Ref_Source>;
};

/** aggregate fields of "ref_source" */
export type Ref_Source_Aggregate_Fields = {
  __typename?: 'ref_source_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Ref_Source_Max_Fields>;
  min?: Maybe<Ref_Source_Min_Fields>;
};


/** aggregate fields of "ref_source" */
export type Ref_Source_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ref_Source_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "ref_source". All fields are combined with a logical 'AND'. */
export type Ref_Source_Bool_Exp = {
  _and?: InputMaybe<Array<Ref_Source_Bool_Exp>>;
  _not?: InputMaybe<Ref_Source_Bool_Exp>;
  _or?: InputMaybe<Array<Ref_Source_Bool_Exp>>;
  category_id?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<String_Comparison_Exp>;
  integrations?: InputMaybe<Integration_Auth_Bool_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ref_source" */
export enum Ref_Source_Constraint {
  /** unique or primary key constraint */
  RefSourcePkey = 'ref_source_pkey'
}

/** input type for inserting data into table "ref_source" */
export type Ref_Source_Insert_Input = {
  category_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  integrations?: InputMaybe<Integration_Auth_Arr_Rel_Insert_Input>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ref_Source_Max_Fields = {
  __typename?: 'ref_source_max_fields';
  category_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Ref_Source_Min_Fields = {
  __typename?: 'ref_source_min_fields';
  category_id?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "ref_source" */
export type Ref_Source_Mutation_Response = {
  __typename?: 'ref_source_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ref_Source>;
};

/** on conflict condition type for table "ref_source" */
export type Ref_Source_On_Conflict = {
  constraint: Ref_Source_Constraint;
  update_columns?: Array<Ref_Source_Update_Column>;
  where?: InputMaybe<Ref_Source_Bool_Exp>;
};

/** Ordering options when selecting data from "ref_source". */
export type Ref_Source_Order_By = {
  category_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  integrations_aggregate?: InputMaybe<Integration_Auth_Aggregate_Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ref_source */
export type Ref_Source_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "ref_source" */
export enum Ref_Source_Select_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "ref_source" */
export type Ref_Source_Set_Input = {
  category_id?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "ref_source" */
export enum Ref_Source_Update_Column {
  /** column name */
  CategoryId = 'category_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "ref_states" */
export type Ref_States = {
  __typename?: 'ref_states';
  country_id: Scalars['Int'];
  id: Scalars['Int'];
  name: Scalars['String'];
  /** An object relationship */
  ref_country: Ref_Country;
};

/** aggregated selection of "ref_states" */
export type Ref_States_Aggregate = {
  __typename?: 'ref_states_aggregate';
  aggregate?: Maybe<Ref_States_Aggregate_Fields>;
  nodes: Array<Ref_States>;
};

/** aggregate fields of "ref_states" */
export type Ref_States_Aggregate_Fields = {
  __typename?: 'ref_states_aggregate_fields';
  avg?: Maybe<Ref_States_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Ref_States_Max_Fields>;
  min?: Maybe<Ref_States_Min_Fields>;
  stddev?: Maybe<Ref_States_Stddev_Fields>;
  stddev_pop?: Maybe<Ref_States_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Ref_States_Stddev_Samp_Fields>;
  sum?: Maybe<Ref_States_Sum_Fields>;
  var_pop?: Maybe<Ref_States_Var_Pop_Fields>;
  var_samp?: Maybe<Ref_States_Var_Samp_Fields>;
  variance?: Maybe<Ref_States_Variance_Fields>;
};


/** aggregate fields of "ref_states" */
export type Ref_States_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ref_States_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "ref_states" */
export type Ref_States_Aggregate_Order_By = {
  avg?: InputMaybe<Ref_States_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Ref_States_Max_Order_By>;
  min?: InputMaybe<Ref_States_Min_Order_By>;
  stddev?: InputMaybe<Ref_States_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Ref_States_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Ref_States_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Ref_States_Sum_Order_By>;
  var_pop?: InputMaybe<Ref_States_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Ref_States_Var_Samp_Order_By>;
  variance?: InputMaybe<Ref_States_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "ref_states" */
export type Ref_States_Arr_Rel_Insert_Input = {
  data: Array<Ref_States_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Ref_States_On_Conflict>;
};

/** aggregate avg on columns */
export type Ref_States_Avg_Fields = {
  __typename?: 'ref_states_avg_fields';
  country_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "ref_states" */
export type Ref_States_Avg_Order_By = {
  country_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "ref_states". All fields are combined with a logical 'AND'. */
export type Ref_States_Bool_Exp = {
  _and?: InputMaybe<Array<Ref_States_Bool_Exp>>;
  _not?: InputMaybe<Ref_States_Bool_Exp>;
  _or?: InputMaybe<Array<Ref_States_Bool_Exp>>;
  country_id?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  ref_country?: InputMaybe<Ref_Country_Bool_Exp>;
};

/** unique or primary key constraints on table "ref_states" */
export enum Ref_States_Constraint {
  /** unique or primary key constraint */
  RefStatesPkey = 'ref_states_pkey'
}

/** input type for incrementing numeric columns in table "ref_states" */
export type Ref_States_Inc_Input = {
  country_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "ref_states" */
export type Ref_States_Insert_Input = {
  country_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  ref_country?: InputMaybe<Ref_Country_Obj_Rel_Insert_Input>;
};

/** aggregate max on columns */
export type Ref_States_Max_Fields = {
  __typename?: 'ref_states_max_fields';
  country_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by max() on columns of table "ref_states" */
export type Ref_States_Max_Order_By = {
  country_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Ref_States_Min_Fields = {
  __typename?: 'ref_states_min_fields';
  country_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  name?: Maybe<Scalars['String']>;
};

/** order by min() on columns of table "ref_states" */
export type Ref_States_Min_Order_By = {
  country_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "ref_states" */
export type Ref_States_Mutation_Response = {
  __typename?: 'ref_states_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ref_States>;
};

/** input type for inserting object relation for remote table "ref_states" */
export type Ref_States_Obj_Rel_Insert_Input = {
  data: Ref_States_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Ref_States_On_Conflict>;
};

/** on conflict condition type for table "ref_states" */
export type Ref_States_On_Conflict = {
  constraint: Ref_States_Constraint;
  update_columns?: Array<Ref_States_Update_Column>;
  where?: InputMaybe<Ref_States_Bool_Exp>;
};

/** Ordering options when selecting data from "ref_states". */
export type Ref_States_Order_By = {
  country_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  ref_country?: InputMaybe<Ref_Country_Order_By>;
};

/** primary key columns input for table: ref_states */
export type Ref_States_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "ref_states" */
export enum Ref_States_Select_Column {
  /** column name */
  CountryId = 'country_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "ref_states" */
export type Ref_States_Set_Input = {
  country_id?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Ref_States_Stddev_Fields = {
  __typename?: 'ref_states_stddev_fields';
  country_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "ref_states" */
export type Ref_States_Stddev_Order_By = {
  country_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Ref_States_Stddev_Pop_Fields = {
  __typename?: 'ref_states_stddev_pop_fields';
  country_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "ref_states" */
export type Ref_States_Stddev_Pop_Order_By = {
  country_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Ref_States_Stddev_Samp_Fields = {
  __typename?: 'ref_states_stddev_samp_fields';
  country_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "ref_states" */
export type Ref_States_Stddev_Samp_Order_By = {
  country_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Ref_States_Sum_Fields = {
  __typename?: 'ref_states_sum_fields';
  country_id?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "ref_states" */
export type Ref_States_Sum_Order_By = {
  country_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** update columns of table "ref_states" */
export enum Ref_States_Update_Column {
  /** column name */
  CountryId = 'country_id',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** aggregate var_pop on columns */
export type Ref_States_Var_Pop_Fields = {
  __typename?: 'ref_states_var_pop_fields';
  country_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "ref_states" */
export type Ref_States_Var_Pop_Order_By = {
  country_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Ref_States_Var_Samp_Fields = {
  __typename?: 'ref_states_var_samp_fields';
  country_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "ref_states" */
export type Ref_States_Var_Samp_Order_By = {
  country_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Ref_States_Variance_Fields = {
  __typename?: 'ref_states_variance_fields';
  country_id?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "ref_states" */
export type Ref_States_Variance_Order_By = {
  country_id?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** columns and relationships of "ref_subscription_status" */
export type Ref_Subscription_Status = {
  __typename?: 'ref_subscription_status';
  id: Scalars['String'];
  name: Scalars['String'];
};

/** aggregated selection of "ref_subscription_status" */
export type Ref_Subscription_Status_Aggregate = {
  __typename?: 'ref_subscription_status_aggregate';
  aggregate?: Maybe<Ref_Subscription_Status_Aggregate_Fields>;
  nodes: Array<Ref_Subscription_Status>;
};

/** aggregate fields of "ref_subscription_status" */
export type Ref_Subscription_Status_Aggregate_Fields = {
  __typename?: 'ref_subscription_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Ref_Subscription_Status_Max_Fields>;
  min?: Maybe<Ref_Subscription_Status_Min_Fields>;
};


/** aggregate fields of "ref_subscription_status" */
export type Ref_Subscription_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ref_Subscription_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "ref_subscription_status". All fields are combined with a logical 'AND'. */
export type Ref_Subscription_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Ref_Subscription_Status_Bool_Exp>>;
  _not?: InputMaybe<Ref_Subscription_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Ref_Subscription_Status_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ref_subscription_status" */
export enum Ref_Subscription_Status_Constraint {
  /** unique or primary key constraint */
  RefSubscriptionStatusPkey = 'ref_subscription_status_pkey'
}

/** input type for inserting data into table "ref_subscription_status" */
export type Ref_Subscription_Status_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ref_Subscription_Status_Max_Fields = {
  __typename?: 'ref_subscription_status_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Ref_Subscription_Status_Min_Fields = {
  __typename?: 'ref_subscription_status_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "ref_subscription_status" */
export type Ref_Subscription_Status_Mutation_Response = {
  __typename?: 'ref_subscription_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ref_Subscription_Status>;
};

/** on conflict condition type for table "ref_subscription_status" */
export type Ref_Subscription_Status_On_Conflict = {
  constraint: Ref_Subscription_Status_Constraint;
  update_columns?: Array<Ref_Subscription_Status_Update_Column>;
  where?: InputMaybe<Ref_Subscription_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "ref_subscription_status". */
export type Ref_Subscription_Status_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ref_subscription_status */
export type Ref_Subscription_Status_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "ref_subscription_status" */
export enum Ref_Subscription_Status_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "ref_subscription_status" */
export type Ref_Subscription_Status_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "ref_subscription_status" */
export enum Ref_Subscription_Status_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "ref_tenant_type" */
export type Ref_Tenant_Type = {
  __typename?: 'ref_tenant_type';
  id: Scalars['String'];
  name: Scalars['String'];
};

/** aggregated selection of "ref_tenant_type" */
export type Ref_Tenant_Type_Aggregate = {
  __typename?: 'ref_tenant_type_aggregate';
  aggregate?: Maybe<Ref_Tenant_Type_Aggregate_Fields>;
  nodes: Array<Ref_Tenant_Type>;
};

/** aggregate fields of "ref_tenant_type" */
export type Ref_Tenant_Type_Aggregate_Fields = {
  __typename?: 'ref_tenant_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Ref_Tenant_Type_Max_Fields>;
  min?: Maybe<Ref_Tenant_Type_Min_Fields>;
};


/** aggregate fields of "ref_tenant_type" */
export type Ref_Tenant_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ref_Tenant_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "ref_tenant_type". All fields are combined with a logical 'AND'. */
export type Ref_Tenant_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Ref_Tenant_Type_Bool_Exp>>;
  _not?: InputMaybe<Ref_Tenant_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Ref_Tenant_Type_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ref_tenant_type" */
export enum Ref_Tenant_Type_Constraint {
  /** unique or primary key constraint */
  RefTenantTypePkey = 'ref_tenant_type_pkey'
}

/** input type for inserting data into table "ref_tenant_type" */
export type Ref_Tenant_Type_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ref_Tenant_Type_Max_Fields = {
  __typename?: 'ref_tenant_type_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Ref_Tenant_Type_Min_Fields = {
  __typename?: 'ref_tenant_type_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "ref_tenant_type" */
export type Ref_Tenant_Type_Mutation_Response = {
  __typename?: 'ref_tenant_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ref_Tenant_Type>;
};

/** on conflict condition type for table "ref_tenant_type" */
export type Ref_Tenant_Type_On_Conflict = {
  constraint: Ref_Tenant_Type_Constraint;
  update_columns?: Array<Ref_Tenant_Type_Update_Column>;
  where?: InputMaybe<Ref_Tenant_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "ref_tenant_type". */
export type Ref_Tenant_Type_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ref_tenant_type */
export type Ref_Tenant_Type_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "ref_tenant_type" */
export enum Ref_Tenant_Type_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "ref_tenant_type" */
export type Ref_Tenant_Type_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "ref_tenant_type" */
export enum Ref_Tenant_Type_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "ref_trade_state" */
export type Ref_Trade_State = {
  __typename?: 'ref_trade_state';
  id: Scalars['String'];
  name: Scalars['String'];
};

/** aggregated selection of "ref_trade_state" */
export type Ref_Trade_State_Aggregate = {
  __typename?: 'ref_trade_state_aggregate';
  aggregate?: Maybe<Ref_Trade_State_Aggregate_Fields>;
  nodes: Array<Ref_Trade_State>;
};

/** aggregate fields of "ref_trade_state" */
export type Ref_Trade_State_Aggregate_Fields = {
  __typename?: 'ref_trade_state_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Ref_Trade_State_Max_Fields>;
  min?: Maybe<Ref_Trade_State_Min_Fields>;
};


/** aggregate fields of "ref_trade_state" */
export type Ref_Trade_State_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ref_Trade_State_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "ref_trade_state". All fields are combined with a logical 'AND'. */
export type Ref_Trade_State_Bool_Exp = {
  _and?: InputMaybe<Array<Ref_Trade_State_Bool_Exp>>;
  _not?: InputMaybe<Ref_Trade_State_Bool_Exp>;
  _or?: InputMaybe<Array<Ref_Trade_State_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ref_trade_state" */
export enum Ref_Trade_State_Constraint {
  /** unique or primary key constraint */
  RefTradeStatePkey = 'ref_trade_state_pkey'
}

/** input type for inserting data into table "ref_trade_state" */
export type Ref_Trade_State_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ref_Trade_State_Max_Fields = {
  __typename?: 'ref_trade_state_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Ref_Trade_State_Min_Fields = {
  __typename?: 'ref_trade_state_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "ref_trade_state" */
export type Ref_Trade_State_Mutation_Response = {
  __typename?: 'ref_trade_state_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ref_Trade_State>;
};

/** on conflict condition type for table "ref_trade_state" */
export type Ref_Trade_State_On_Conflict = {
  constraint: Ref_Trade_State_Constraint;
  update_columns?: Array<Ref_Trade_State_Update_Column>;
  where?: InputMaybe<Ref_Trade_State_Bool_Exp>;
};

/** Ordering options when selecting data from "ref_trade_state". */
export type Ref_Trade_State_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ref_trade_state */
export type Ref_Trade_State_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "ref_trade_state" */
export enum Ref_Trade_State_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "ref_trade_state" */
export type Ref_Trade_State_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "ref_trade_state" */
export enum Ref_Trade_State_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "ref_trade_status" */
export type Ref_Trade_Status = {
  __typename?: 'ref_trade_status';
  id: Scalars['String'];
  name: Scalars['String'];
  state_id?: Maybe<Scalars['String']>;
};

/** aggregated selection of "ref_trade_status" */
export type Ref_Trade_Status_Aggregate = {
  __typename?: 'ref_trade_status_aggregate';
  aggregate?: Maybe<Ref_Trade_Status_Aggregate_Fields>;
  nodes: Array<Ref_Trade_Status>;
};

/** aggregate fields of "ref_trade_status" */
export type Ref_Trade_Status_Aggregate_Fields = {
  __typename?: 'ref_trade_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Ref_Trade_Status_Max_Fields>;
  min?: Maybe<Ref_Trade_Status_Min_Fields>;
};


/** aggregate fields of "ref_trade_status" */
export type Ref_Trade_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ref_Trade_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "ref_trade_status". All fields are combined with a logical 'AND'. */
export type Ref_Trade_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Ref_Trade_Status_Bool_Exp>>;
  _not?: InputMaybe<Ref_Trade_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Ref_Trade_Status_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
  state_id?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ref_trade_status" */
export enum Ref_Trade_Status_Constraint {
  /** unique or primary key constraint */
  RefTradeStatusPkey = 'ref_trade_status_pkey'
}

/** input type for inserting data into table "ref_trade_status" */
export type Ref_Trade_Status_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  state_id?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ref_Trade_Status_Max_Fields = {
  __typename?: 'ref_trade_status_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  state_id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Ref_Trade_Status_Min_Fields = {
  __typename?: 'ref_trade_status_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  state_id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "ref_trade_status" */
export type Ref_Trade_Status_Mutation_Response = {
  __typename?: 'ref_trade_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ref_Trade_Status>;
};

/** on conflict condition type for table "ref_trade_status" */
export type Ref_Trade_Status_On_Conflict = {
  constraint: Ref_Trade_Status_Constraint;
  update_columns?: Array<Ref_Trade_Status_Update_Column>;
  where?: InputMaybe<Ref_Trade_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "ref_trade_status". */
export type Ref_Trade_Status_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
  state_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ref_trade_status */
export type Ref_Trade_Status_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "ref_trade_status" */
export enum Ref_Trade_Status_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  StateId = 'state_id'
}

/** input type for updating data in table "ref_trade_status" */
export type Ref_Trade_Status_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  state_id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "ref_trade_status" */
export enum Ref_Trade_Status_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  StateId = 'state_id'
}

/** columns and relationships of "ref_transaction_method" */
export type Ref_Transaction_Method = {
  __typename?: 'ref_transaction_method';
  id: Scalars['String'];
  name: Scalars['String'];
};

/** aggregated selection of "ref_transaction_method" */
export type Ref_Transaction_Method_Aggregate = {
  __typename?: 'ref_transaction_method_aggregate';
  aggregate?: Maybe<Ref_Transaction_Method_Aggregate_Fields>;
  nodes: Array<Ref_Transaction_Method>;
};

/** aggregate fields of "ref_transaction_method" */
export type Ref_Transaction_Method_Aggregate_Fields = {
  __typename?: 'ref_transaction_method_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Ref_Transaction_Method_Max_Fields>;
  min?: Maybe<Ref_Transaction_Method_Min_Fields>;
};


/** aggregate fields of "ref_transaction_method" */
export type Ref_Transaction_Method_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ref_Transaction_Method_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "ref_transaction_method". All fields are combined with a logical 'AND'. */
export type Ref_Transaction_Method_Bool_Exp = {
  _and?: InputMaybe<Array<Ref_Transaction_Method_Bool_Exp>>;
  _not?: InputMaybe<Ref_Transaction_Method_Bool_Exp>;
  _or?: InputMaybe<Array<Ref_Transaction_Method_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ref_transaction_method" */
export enum Ref_Transaction_Method_Constraint {
  /** unique or primary key constraint */
  RefTransactionMethodPkey = 'ref_transaction_method_pkey'
}

/** input type for inserting data into table "ref_transaction_method" */
export type Ref_Transaction_Method_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ref_Transaction_Method_Max_Fields = {
  __typename?: 'ref_transaction_method_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Ref_Transaction_Method_Min_Fields = {
  __typename?: 'ref_transaction_method_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "ref_transaction_method" */
export type Ref_Transaction_Method_Mutation_Response = {
  __typename?: 'ref_transaction_method_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ref_Transaction_Method>;
};

/** on conflict condition type for table "ref_transaction_method" */
export type Ref_Transaction_Method_On_Conflict = {
  constraint: Ref_Transaction_Method_Constraint;
  update_columns?: Array<Ref_Transaction_Method_Update_Column>;
  where?: InputMaybe<Ref_Transaction_Method_Bool_Exp>;
};

/** Ordering options when selecting data from "ref_transaction_method". */
export type Ref_Transaction_Method_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ref_transaction_method */
export type Ref_Transaction_Method_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "ref_transaction_method" */
export enum Ref_Transaction_Method_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "ref_transaction_method" */
export type Ref_Transaction_Method_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "ref_transaction_method" */
export enum Ref_Transaction_Method_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "ref_transaction_status" */
export type Ref_Transaction_Status = {
  __typename?: 'ref_transaction_status';
  id: Scalars['String'];
  name: Scalars['String'];
};

/** aggregated selection of "ref_transaction_status" */
export type Ref_Transaction_Status_Aggregate = {
  __typename?: 'ref_transaction_status_aggregate';
  aggregate?: Maybe<Ref_Transaction_Status_Aggregate_Fields>;
  nodes: Array<Ref_Transaction_Status>;
};

/** aggregate fields of "ref_transaction_status" */
export type Ref_Transaction_Status_Aggregate_Fields = {
  __typename?: 'ref_transaction_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Ref_Transaction_Status_Max_Fields>;
  min?: Maybe<Ref_Transaction_Status_Min_Fields>;
};


/** aggregate fields of "ref_transaction_status" */
export type Ref_Transaction_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ref_Transaction_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "ref_transaction_status". All fields are combined with a logical 'AND'. */
export type Ref_Transaction_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Ref_Transaction_Status_Bool_Exp>>;
  _not?: InputMaybe<Ref_Transaction_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Ref_Transaction_Status_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ref_transaction_status" */
export enum Ref_Transaction_Status_Constraint {
  /** unique or primary key constraint */
  RefTransactionStatusPkey = 'ref_transaction_status_pkey'
}

/** input type for inserting data into table "ref_transaction_status" */
export type Ref_Transaction_Status_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ref_Transaction_Status_Max_Fields = {
  __typename?: 'ref_transaction_status_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Ref_Transaction_Status_Min_Fields = {
  __typename?: 'ref_transaction_status_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "ref_transaction_status" */
export type Ref_Transaction_Status_Mutation_Response = {
  __typename?: 'ref_transaction_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ref_Transaction_Status>;
};

/** on conflict condition type for table "ref_transaction_status" */
export type Ref_Transaction_Status_On_Conflict = {
  constraint: Ref_Transaction_Status_Constraint;
  update_columns?: Array<Ref_Transaction_Status_Update_Column>;
  where?: InputMaybe<Ref_Transaction_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "ref_transaction_status". */
export type Ref_Transaction_Status_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ref_transaction_status */
export type Ref_Transaction_Status_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "ref_transaction_status" */
export enum Ref_Transaction_Status_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "ref_transaction_status" */
export type Ref_Transaction_Status_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "ref_transaction_status" */
export enum Ref_Transaction_Status_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "ref_transaction_type" */
export type Ref_Transaction_Type = {
  __typename?: 'ref_transaction_type';
  id: Scalars['String'];
  name: Scalars['String'];
};

/** aggregated selection of "ref_transaction_type" */
export type Ref_Transaction_Type_Aggregate = {
  __typename?: 'ref_transaction_type_aggregate';
  aggregate?: Maybe<Ref_Transaction_Type_Aggregate_Fields>;
  nodes: Array<Ref_Transaction_Type>;
};

/** aggregate fields of "ref_transaction_type" */
export type Ref_Transaction_Type_Aggregate_Fields = {
  __typename?: 'ref_transaction_type_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Ref_Transaction_Type_Max_Fields>;
  min?: Maybe<Ref_Transaction_Type_Min_Fields>;
};


/** aggregate fields of "ref_transaction_type" */
export type Ref_Transaction_Type_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ref_Transaction_Type_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "ref_transaction_type". All fields are combined with a logical 'AND'. */
export type Ref_Transaction_Type_Bool_Exp = {
  _and?: InputMaybe<Array<Ref_Transaction_Type_Bool_Exp>>;
  _not?: InputMaybe<Ref_Transaction_Type_Bool_Exp>;
  _or?: InputMaybe<Array<Ref_Transaction_Type_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ref_transaction_type" */
export enum Ref_Transaction_Type_Constraint {
  /** unique or primary key constraint */
  RefTransactionTypePkey = 'ref_transaction_type_pkey'
}

/** input type for inserting data into table "ref_transaction_type" */
export type Ref_Transaction_Type_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ref_Transaction_Type_Max_Fields = {
  __typename?: 'ref_transaction_type_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Ref_Transaction_Type_Min_Fields = {
  __typename?: 'ref_transaction_type_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "ref_transaction_type" */
export type Ref_Transaction_Type_Mutation_Response = {
  __typename?: 'ref_transaction_type_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ref_Transaction_Type>;
};

/** on conflict condition type for table "ref_transaction_type" */
export type Ref_Transaction_Type_On_Conflict = {
  constraint: Ref_Transaction_Type_Constraint;
  update_columns?: Array<Ref_Transaction_Type_Update_Column>;
  where?: InputMaybe<Ref_Transaction_Type_Bool_Exp>;
};

/** Ordering options when selecting data from "ref_transaction_type". */
export type Ref_Transaction_Type_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ref_transaction_type */
export type Ref_Transaction_Type_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "ref_transaction_type" */
export enum Ref_Transaction_Type_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "ref_transaction_type" */
export type Ref_Transaction_Type_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "ref_transaction_type" */
export enum Ref_Transaction_Type_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "ref_user_status" */
export type Ref_User_Status = {
  __typename?: 'ref_user_status';
  id: Scalars['String'];
  name: Scalars['String'];
};

/** aggregated selection of "ref_user_status" */
export type Ref_User_Status_Aggregate = {
  __typename?: 'ref_user_status_aggregate';
  aggregate?: Maybe<Ref_User_Status_Aggregate_Fields>;
  nodes: Array<Ref_User_Status>;
};

/** aggregate fields of "ref_user_status" */
export type Ref_User_Status_Aggregate_Fields = {
  __typename?: 'ref_user_status_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Ref_User_Status_Max_Fields>;
  min?: Maybe<Ref_User_Status_Min_Fields>;
};


/** aggregate fields of "ref_user_status" */
export type Ref_User_Status_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Ref_User_Status_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "ref_user_status". All fields are combined with a logical 'AND'. */
export type Ref_User_Status_Bool_Exp = {
  _and?: InputMaybe<Array<Ref_User_Status_Bool_Exp>>;
  _not?: InputMaybe<Ref_User_Status_Bool_Exp>;
  _or?: InputMaybe<Array<Ref_User_Status_Bool_Exp>>;
  id?: InputMaybe<String_Comparison_Exp>;
  name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "ref_user_status" */
export enum Ref_User_Status_Constraint {
  /** unique or primary key constraint */
  RefUserStatusPkey = 'ref_user_status_pkey'
}

/** input type for inserting data into table "ref_user_status" */
export type Ref_User_Status_Insert_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Ref_User_Status_Max_Fields = {
  __typename?: 'ref_user_status_max_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Ref_User_Status_Min_Fields = {
  __typename?: 'ref_user_status_min_fields';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "ref_user_status" */
export type Ref_User_Status_Mutation_Response = {
  __typename?: 'ref_user_status_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Ref_User_Status>;
};

/** on conflict condition type for table "ref_user_status" */
export type Ref_User_Status_On_Conflict = {
  constraint: Ref_User_Status_Constraint;
  update_columns?: Array<Ref_User_Status_Update_Column>;
  where?: InputMaybe<Ref_User_Status_Bool_Exp>;
};

/** Ordering options when selecting data from "ref_user_status". */
export type Ref_User_Status_Order_By = {
  id?: InputMaybe<Order_By>;
  name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: ref_user_status */
export type Ref_User_Status_Pk_Columns_Input = {
  id: Scalars['String'];
};

/** select columns of table "ref_user_status" */
export enum Ref_User_Status_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "ref_user_status" */
export type Ref_User_Status_Set_Input = {
  id?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "ref_user_status" */
export enum Ref_User_Status_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** columns and relationships of "scheduled_payout" */
export type Scheduled_Payout = {
  __typename?: 'scheduled_payout';
  /** An object relationship */
  account: Account;
  account_id: Scalars['Int'];
  amount: Scalars['numeric'];
  /** An object relationship */
  counterparty: Account;
  counterparty_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  created_by: Scalars['Int'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  mandate_id?: Maybe<Scalars['String']>;
  max_presentation_amount: Scalars['numeric'];
  metadata?: Maybe<Scalars['jsonb']>;
  /** Amount presented to Digio */
  presentation_amount?: Maybe<Scalars['numeric']>;
  scheduled_at: Scalars['timestamptz'];
  source_id?: Maybe<Scalars['String']>;
  status: Scalars['String'];
  /** Total amount to be presented to Digio including fine, late charges, etc. */
  total_amount?: Maybe<Scalars['numeric']>;
  /** An object relationship */
  trade: Trade;
  trade_id: Scalars['Int'];
  trade_installment_seq?: Maybe<Scalars['Int']>;
  transaction_method: Scalars['String'];
  transaction_type: Scalars['String'];
  /** An array relationship */
  transactions: Array<Transaction>;
  /** An aggregate relationship */
  transactions_aggregate: Transaction_Aggregate;
  updated_at: Scalars['timestamptz'];
  updated_by: Scalars['Int'];
};


/** columns and relationships of "scheduled_payout" */
export type Scheduled_PayoutMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "scheduled_payout" */
export type Scheduled_PayoutTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


/** columns and relationships of "scheduled_payout" */
export type Scheduled_PayoutTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

/** aggregated selection of "scheduled_payout" */
export type Scheduled_Payout_Aggregate = {
  __typename?: 'scheduled_payout_aggregate';
  aggregate?: Maybe<Scheduled_Payout_Aggregate_Fields>;
  nodes: Array<Scheduled_Payout>;
};

/** aggregate fields of "scheduled_payout" */
export type Scheduled_Payout_Aggregate_Fields = {
  __typename?: 'scheduled_payout_aggregate_fields';
  avg?: Maybe<Scheduled_Payout_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Scheduled_Payout_Max_Fields>;
  min?: Maybe<Scheduled_Payout_Min_Fields>;
  stddev?: Maybe<Scheduled_Payout_Stddev_Fields>;
  stddev_pop?: Maybe<Scheduled_Payout_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Scheduled_Payout_Stddev_Samp_Fields>;
  sum?: Maybe<Scheduled_Payout_Sum_Fields>;
  var_pop?: Maybe<Scheduled_Payout_Var_Pop_Fields>;
  var_samp?: Maybe<Scheduled_Payout_Var_Samp_Fields>;
  variance?: Maybe<Scheduled_Payout_Variance_Fields>;
};


/** aggregate fields of "scheduled_payout" */
export type Scheduled_Payout_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Scheduled_Payout_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "scheduled_payout" */
export type Scheduled_Payout_Aggregate_Order_By = {
  avg?: InputMaybe<Scheduled_Payout_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Scheduled_Payout_Max_Order_By>;
  min?: InputMaybe<Scheduled_Payout_Min_Order_By>;
  stddev?: InputMaybe<Scheduled_Payout_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Scheduled_Payout_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Scheduled_Payout_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Scheduled_Payout_Sum_Order_By>;
  var_pop?: InputMaybe<Scheduled_Payout_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Scheduled_Payout_Var_Samp_Order_By>;
  variance?: InputMaybe<Scheduled_Payout_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Scheduled_Payout_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "scheduled_payout" */
export type Scheduled_Payout_Arr_Rel_Insert_Input = {
  data: Array<Scheduled_Payout_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Scheduled_Payout_On_Conflict>;
};

/** aggregate avg on columns */
export type Scheduled_Payout_Avg_Fields = {
  __typename?: 'scheduled_payout_avg_fields';
  account_id?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  counterparty_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  max_presentation_amount?: Maybe<Scalars['Float']>;
  /** Amount presented to Digio */
  presentation_amount?: Maybe<Scalars['Float']>;
  /** Total amount to be presented to Digio including fine, late charges, etc. */
  total_amount?: Maybe<Scalars['Float']>;
  trade_id?: Maybe<Scalars['Float']>;
  trade_installment_seq?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "scheduled_payout" */
export type Scheduled_Payout_Avg_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  counterparty_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_presentation_amount?: InputMaybe<Order_By>;
  /** Amount presented to Digio */
  presentation_amount?: InputMaybe<Order_By>;
  /** Total amount to be presented to Digio including fine, late charges, etc. */
  total_amount?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  trade_installment_seq?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "scheduled_payout". All fields are combined with a logical 'AND'. */
export type Scheduled_Payout_Bool_Exp = {
  _and?: InputMaybe<Array<Scheduled_Payout_Bool_Exp>>;
  _not?: InputMaybe<Scheduled_Payout_Bool_Exp>;
  _or?: InputMaybe<Array<Scheduled_Payout_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  account_id?: InputMaybe<Int_Comparison_Exp>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  counterparty?: InputMaybe<Account_Bool_Exp>;
  counterparty_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Int_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_by?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  mandate_id?: InputMaybe<String_Comparison_Exp>;
  max_presentation_amount?: InputMaybe<Numeric_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  presentation_amount?: InputMaybe<Numeric_Comparison_Exp>;
  scheduled_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  source_id?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  total_amount?: InputMaybe<Numeric_Comparison_Exp>;
  trade?: InputMaybe<Trade_Bool_Exp>;
  trade_id?: InputMaybe<Int_Comparison_Exp>;
  trade_installment_seq?: InputMaybe<Int_Comparison_Exp>;
  transaction_method?: InputMaybe<String_Comparison_Exp>;
  transaction_type?: InputMaybe<String_Comparison_Exp>;
  transactions?: InputMaybe<Transaction_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "scheduled_payout" */
export enum Scheduled_Payout_Constraint {
  /** unique or primary key constraint */
  ScheduledPayoutPkey = 'scheduled_payout_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Scheduled_Payout_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Scheduled_Payout_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Scheduled_Payout_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "scheduled_payout" */
export type Scheduled_Payout_Inc_Input = {
  account_id?: InputMaybe<Scalars['Int']>;
  amount?: InputMaybe<Scalars['numeric']>;
  counterparty_id?: InputMaybe<Scalars['Int']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  max_presentation_amount?: InputMaybe<Scalars['numeric']>;
  /** Amount presented to Digio */
  presentation_amount?: InputMaybe<Scalars['numeric']>;
  /** Total amount to be presented to Digio including fine, late charges, etc. */
  total_amount?: InputMaybe<Scalars['numeric']>;
  trade_id?: InputMaybe<Scalars['Int']>;
  trade_installment_seq?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "scheduled_payout" */
export type Scheduled_Payout_Insert_Input = {
  account?: InputMaybe<Account_Obj_Rel_Insert_Input>;
  account_id?: InputMaybe<Scalars['Int']>;
  amount?: InputMaybe<Scalars['numeric']>;
  counterparty?: InputMaybe<Account_Obj_Rel_Insert_Input>;
  counterparty_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  mandate_id?: InputMaybe<Scalars['String']>;
  max_presentation_amount?: InputMaybe<Scalars['numeric']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  /** Amount presented to Digio */
  presentation_amount?: InputMaybe<Scalars['numeric']>;
  scheduled_at?: InputMaybe<Scalars['timestamptz']>;
  source_id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  /** Total amount to be presented to Digio including fine, late charges, etc. */
  total_amount?: InputMaybe<Scalars['numeric']>;
  trade?: InputMaybe<Trade_Obj_Rel_Insert_Input>;
  trade_id?: InputMaybe<Scalars['Int']>;
  trade_installment_seq?: InputMaybe<Scalars['Int']>;
  transaction_method?: InputMaybe<Scalars['String']>;
  transaction_type?: InputMaybe<Scalars['String']>;
  transactions?: InputMaybe<Transaction_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Scheduled_Payout_Max_Fields = {
  __typename?: 'scheduled_payout_max_fields';
  account_id?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['numeric']>;
  counterparty_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  mandate_id?: Maybe<Scalars['String']>;
  max_presentation_amount?: Maybe<Scalars['numeric']>;
  /** Amount presented to Digio */
  presentation_amount?: Maybe<Scalars['numeric']>;
  scheduled_at?: Maybe<Scalars['timestamptz']>;
  source_id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  /** Total amount to be presented to Digio including fine, late charges, etc. */
  total_amount?: Maybe<Scalars['numeric']>;
  trade_id?: Maybe<Scalars['Int']>;
  trade_installment_seq?: Maybe<Scalars['Int']>;
  transaction_method?: Maybe<Scalars['String']>;
  transaction_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "scheduled_payout" */
export type Scheduled_Payout_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  counterparty_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mandate_id?: InputMaybe<Order_By>;
  max_presentation_amount?: InputMaybe<Order_By>;
  /** Amount presented to Digio */
  presentation_amount?: InputMaybe<Order_By>;
  scheduled_at?: InputMaybe<Order_By>;
  source_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  /** Total amount to be presented to Digio including fine, late charges, etc. */
  total_amount?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  trade_installment_seq?: InputMaybe<Order_By>;
  transaction_method?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Scheduled_Payout_Min_Fields = {
  __typename?: 'scheduled_payout_min_fields';
  account_id?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['numeric']>;
  counterparty_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  mandate_id?: Maybe<Scalars['String']>;
  max_presentation_amount?: Maybe<Scalars['numeric']>;
  /** Amount presented to Digio */
  presentation_amount?: Maybe<Scalars['numeric']>;
  scheduled_at?: Maybe<Scalars['timestamptz']>;
  source_id?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  /** Total amount to be presented to Digio including fine, late charges, etc. */
  total_amount?: Maybe<Scalars['numeric']>;
  trade_id?: Maybe<Scalars['Int']>;
  trade_installment_seq?: Maybe<Scalars['Int']>;
  transaction_method?: Maybe<Scalars['String']>;
  transaction_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "scheduled_payout" */
export type Scheduled_Payout_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  counterparty_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mandate_id?: InputMaybe<Order_By>;
  max_presentation_amount?: InputMaybe<Order_By>;
  /** Amount presented to Digio */
  presentation_amount?: InputMaybe<Order_By>;
  scheduled_at?: InputMaybe<Order_By>;
  source_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  /** Total amount to be presented to Digio including fine, late charges, etc. */
  total_amount?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  trade_installment_seq?: InputMaybe<Order_By>;
  transaction_method?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "scheduled_payout" */
export type Scheduled_Payout_Mutation_Response = {
  __typename?: 'scheduled_payout_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Scheduled_Payout>;
};

/** input type for inserting object relation for remote table "scheduled_payout" */
export type Scheduled_Payout_Obj_Rel_Insert_Input = {
  data: Scheduled_Payout_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Scheduled_Payout_On_Conflict>;
};

/** on conflict condition type for table "scheduled_payout" */
export type Scheduled_Payout_On_Conflict = {
  constraint: Scheduled_Payout_Constraint;
  update_columns?: Array<Scheduled_Payout_Update_Column>;
  where?: InputMaybe<Scheduled_Payout_Bool_Exp>;
};

/** Ordering options when selecting data from "scheduled_payout". */
export type Scheduled_Payout_Order_By = {
  account?: InputMaybe<Account_Order_By>;
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  counterparty?: InputMaybe<Account_Order_By>;
  counterparty_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  mandate_id?: InputMaybe<Order_By>;
  max_presentation_amount?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  presentation_amount?: InputMaybe<Order_By>;
  scheduled_at?: InputMaybe<Order_By>;
  source_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  total_amount?: InputMaybe<Order_By>;
  trade?: InputMaybe<Trade_Order_By>;
  trade_id?: InputMaybe<Order_By>;
  trade_installment_seq?: InputMaybe<Order_By>;
  transaction_method?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
  transactions_aggregate?: InputMaybe<Transaction_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** primary key columns input for table: scheduled_payout */
export type Scheduled_Payout_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Scheduled_Payout_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "scheduled_payout" */
export enum Scheduled_Payout_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Amount = 'amount',
  /** column name */
  CounterpartyId = 'counterparty_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  Id = 'id',
  /** column name */
  MandateId = 'mandate_id',
  /** column name */
  MaxPresentationAmount = 'max_presentation_amount',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  PresentationAmount = 'presentation_amount',
  /** column name */
  ScheduledAt = 'scheduled_at',
  /** column name */
  SourceId = 'source_id',
  /** column name */
  Status = 'status',
  /** column name */
  TotalAmount = 'total_amount',
  /** column name */
  TradeId = 'trade_id',
  /** column name */
  TradeInstallmentSeq = 'trade_installment_seq',
  /** column name */
  TransactionMethod = 'transaction_method',
  /** column name */
  TransactionType = 'transaction_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** input type for updating data in table "scheduled_payout" */
export type Scheduled_Payout_Set_Input = {
  account_id?: InputMaybe<Scalars['Int']>;
  amount?: InputMaybe<Scalars['numeric']>;
  counterparty_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  mandate_id?: InputMaybe<Scalars['String']>;
  max_presentation_amount?: InputMaybe<Scalars['numeric']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  /** Amount presented to Digio */
  presentation_amount?: InputMaybe<Scalars['numeric']>;
  scheduled_at?: InputMaybe<Scalars['timestamptz']>;
  source_id?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  /** Total amount to be presented to Digio including fine, late charges, etc. */
  total_amount?: InputMaybe<Scalars['numeric']>;
  trade_id?: InputMaybe<Scalars['Int']>;
  trade_installment_seq?: InputMaybe<Scalars['Int']>;
  transaction_method?: InputMaybe<Scalars['String']>;
  transaction_type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Scheduled_Payout_Stddev_Fields = {
  __typename?: 'scheduled_payout_stddev_fields';
  account_id?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  counterparty_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  max_presentation_amount?: Maybe<Scalars['Float']>;
  /** Amount presented to Digio */
  presentation_amount?: Maybe<Scalars['Float']>;
  /** Total amount to be presented to Digio including fine, late charges, etc. */
  total_amount?: Maybe<Scalars['Float']>;
  trade_id?: Maybe<Scalars['Float']>;
  trade_installment_seq?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "scheduled_payout" */
export type Scheduled_Payout_Stddev_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  counterparty_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_presentation_amount?: InputMaybe<Order_By>;
  /** Amount presented to Digio */
  presentation_amount?: InputMaybe<Order_By>;
  /** Total amount to be presented to Digio including fine, late charges, etc. */
  total_amount?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  trade_installment_seq?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Scheduled_Payout_Stddev_Pop_Fields = {
  __typename?: 'scheduled_payout_stddev_pop_fields';
  account_id?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  counterparty_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  max_presentation_amount?: Maybe<Scalars['Float']>;
  /** Amount presented to Digio */
  presentation_amount?: Maybe<Scalars['Float']>;
  /** Total amount to be presented to Digio including fine, late charges, etc. */
  total_amount?: Maybe<Scalars['Float']>;
  trade_id?: Maybe<Scalars['Float']>;
  trade_installment_seq?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "scheduled_payout" */
export type Scheduled_Payout_Stddev_Pop_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  counterparty_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_presentation_amount?: InputMaybe<Order_By>;
  /** Amount presented to Digio */
  presentation_amount?: InputMaybe<Order_By>;
  /** Total amount to be presented to Digio including fine, late charges, etc. */
  total_amount?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  trade_installment_seq?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Scheduled_Payout_Stddev_Samp_Fields = {
  __typename?: 'scheduled_payout_stddev_samp_fields';
  account_id?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  counterparty_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  max_presentation_amount?: Maybe<Scalars['Float']>;
  /** Amount presented to Digio */
  presentation_amount?: Maybe<Scalars['Float']>;
  /** Total amount to be presented to Digio including fine, late charges, etc. */
  total_amount?: Maybe<Scalars['Float']>;
  trade_id?: Maybe<Scalars['Float']>;
  trade_installment_seq?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "scheduled_payout" */
export type Scheduled_Payout_Stddev_Samp_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  counterparty_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_presentation_amount?: InputMaybe<Order_By>;
  /** Amount presented to Digio */
  presentation_amount?: InputMaybe<Order_By>;
  /** Total amount to be presented to Digio including fine, late charges, etc. */
  total_amount?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  trade_installment_seq?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Scheduled_Payout_Sum_Fields = {
  __typename?: 'scheduled_payout_sum_fields';
  account_id?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['numeric']>;
  counterparty_id?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  max_presentation_amount?: Maybe<Scalars['numeric']>;
  /** Amount presented to Digio */
  presentation_amount?: Maybe<Scalars['numeric']>;
  /** Total amount to be presented to Digio including fine, late charges, etc. */
  total_amount?: Maybe<Scalars['numeric']>;
  trade_id?: Maybe<Scalars['Int']>;
  trade_installment_seq?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "scheduled_payout" */
export type Scheduled_Payout_Sum_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  counterparty_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_presentation_amount?: InputMaybe<Order_By>;
  /** Amount presented to Digio */
  presentation_amount?: InputMaybe<Order_By>;
  /** Total amount to be presented to Digio including fine, late charges, etc. */
  total_amount?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  trade_installment_seq?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** update columns of table "scheduled_payout" */
export enum Scheduled_Payout_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Amount = 'amount',
  /** column name */
  CounterpartyId = 'counterparty_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  Id = 'id',
  /** column name */
  MandateId = 'mandate_id',
  /** column name */
  MaxPresentationAmount = 'max_presentation_amount',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  PresentationAmount = 'presentation_amount',
  /** column name */
  ScheduledAt = 'scheduled_at',
  /** column name */
  SourceId = 'source_id',
  /** column name */
  Status = 'status',
  /** column name */
  TotalAmount = 'total_amount',
  /** column name */
  TradeId = 'trade_id',
  /** column name */
  TradeInstallmentSeq = 'trade_installment_seq',
  /** column name */
  TransactionMethod = 'transaction_method',
  /** column name */
  TransactionType = 'transaction_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** aggregate var_pop on columns */
export type Scheduled_Payout_Var_Pop_Fields = {
  __typename?: 'scheduled_payout_var_pop_fields';
  account_id?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  counterparty_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  max_presentation_amount?: Maybe<Scalars['Float']>;
  /** Amount presented to Digio */
  presentation_amount?: Maybe<Scalars['Float']>;
  /** Total amount to be presented to Digio including fine, late charges, etc. */
  total_amount?: Maybe<Scalars['Float']>;
  trade_id?: Maybe<Scalars['Float']>;
  trade_installment_seq?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "scheduled_payout" */
export type Scheduled_Payout_Var_Pop_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  counterparty_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_presentation_amount?: InputMaybe<Order_By>;
  /** Amount presented to Digio */
  presentation_amount?: InputMaybe<Order_By>;
  /** Total amount to be presented to Digio including fine, late charges, etc. */
  total_amount?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  trade_installment_seq?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Scheduled_Payout_Var_Samp_Fields = {
  __typename?: 'scheduled_payout_var_samp_fields';
  account_id?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  counterparty_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  max_presentation_amount?: Maybe<Scalars['Float']>;
  /** Amount presented to Digio */
  presentation_amount?: Maybe<Scalars['Float']>;
  /** Total amount to be presented to Digio including fine, late charges, etc. */
  total_amount?: Maybe<Scalars['Float']>;
  trade_id?: Maybe<Scalars['Float']>;
  trade_installment_seq?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "scheduled_payout" */
export type Scheduled_Payout_Var_Samp_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  counterparty_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_presentation_amount?: InputMaybe<Order_By>;
  /** Amount presented to Digio */
  presentation_amount?: InputMaybe<Order_By>;
  /** Total amount to be presented to Digio including fine, late charges, etc. */
  total_amount?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  trade_installment_seq?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Scheduled_Payout_Variance_Fields = {
  __typename?: 'scheduled_payout_variance_fields';
  account_id?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  counterparty_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  max_presentation_amount?: Maybe<Scalars['Float']>;
  /** Amount presented to Digio */
  presentation_amount?: Maybe<Scalars['Float']>;
  /** Total amount to be presented to Digio including fine, late charges, etc. */
  total_amount?: Maybe<Scalars['Float']>;
  trade_id?: Maybe<Scalars['Float']>;
  trade_installment_seq?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "scheduled_payout" */
export type Scheduled_Payout_Variance_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  counterparty_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  max_presentation_amount?: InputMaybe<Order_By>;
  /** Amount presented to Digio */
  presentation_amount?: InputMaybe<Order_By>;
  /** Total amount to be presented to Digio including fine, late charges, etc. */
  total_amount?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  trade_installment_seq?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

export type SearchIfscInput = {
  ifsc: Scalars['String'];
};

export type SearchIfscOutput = {
  __typename?: 'searchIFSCOutput';
  /** An object relationship */
  bank: Ref_Bank;
  bank_code: Scalars['String'];
  ifsc: Scalars['String'];
  micr?: Maybe<Scalars['String']>;
};

/** columns and relationships of "staff_user" */
export type Staff_User = {
  __typename?: 'staff_user';
  created_at: Scalars['timestamptz'];
  created_by: Scalars['Int'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  role: Scalars['String'];
  tenant_type?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  updated_by: Scalars['Int'];
  user_id: Scalars['Int'];
};

/** aggregated selection of "staff_user" */
export type Staff_User_Aggregate = {
  __typename?: 'staff_user_aggregate';
  aggregate?: Maybe<Staff_User_Aggregate_Fields>;
  nodes: Array<Staff_User>;
};

/** aggregate fields of "staff_user" */
export type Staff_User_Aggregate_Fields = {
  __typename?: 'staff_user_aggregate_fields';
  avg?: Maybe<Staff_User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Staff_User_Max_Fields>;
  min?: Maybe<Staff_User_Min_Fields>;
  stddev?: Maybe<Staff_User_Stddev_Fields>;
  stddev_pop?: Maybe<Staff_User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Staff_User_Stddev_Samp_Fields>;
  sum?: Maybe<Staff_User_Sum_Fields>;
  var_pop?: Maybe<Staff_User_Var_Pop_Fields>;
  var_samp?: Maybe<Staff_User_Var_Samp_Fields>;
  variance?: Maybe<Staff_User_Variance_Fields>;
};


/** aggregate fields of "staff_user" */
export type Staff_User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Staff_User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Staff_User_Avg_Fields = {
  __typename?: 'staff_user_avg_fields';
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "staff_user". All fields are combined with a logical 'AND'. */
export type Staff_User_Bool_Exp = {
  _and?: InputMaybe<Array<Staff_User_Bool_Exp>>;
  _not?: InputMaybe<Staff_User_Bool_Exp>;
  _or?: InputMaybe<Array<Staff_User_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Int_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_by?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  role?: InputMaybe<String_Comparison_Exp>;
  tenant_type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Int_Comparison_Exp>;
  user_id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "staff_user" */
export enum Staff_User_Constraint {
  /** unique or primary key constraint */
  StaffUserPkey = 'staff_user_pkey',
  /** unique or primary key constraint */
  StaffUserUserIdIdx = 'staff_user_user_id_idx'
}

/** input type for incrementing numeric columns in table "staff_user" */
export type Staff_User_Inc_Input = {
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "staff_user" */
export type Staff_User_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  role?: InputMaybe<Scalars['String']>;
  tenant_type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Staff_User_Max_Fields = {
  __typename?: 'staff_user_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
  tenant_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Staff_User_Min_Fields = {
  __typename?: 'staff_user_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  role?: Maybe<Scalars['String']>;
  tenant_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "staff_user" */
export type Staff_User_Mutation_Response = {
  __typename?: 'staff_user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Staff_User>;
};

/** on conflict condition type for table "staff_user" */
export type Staff_User_On_Conflict = {
  constraint: Staff_User_Constraint;
  update_columns?: Array<Staff_User_Update_Column>;
  where?: InputMaybe<Staff_User_Bool_Exp>;
};

/** Ordering options when selecting data from "staff_user". */
export type Staff_User_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  role?: InputMaybe<Order_By>;
  tenant_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  user_id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: staff_user */
export type Staff_User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "staff_user" */
export enum Staff_User_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  TenantType = 'tenant_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by',
  /** column name */
  UserId = 'user_id'
}

/** input type for updating data in table "staff_user" */
export type Staff_User_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  role?: InputMaybe<Scalars['String']>;
  tenant_type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
  user_id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Staff_User_Stddev_Fields = {
  __typename?: 'staff_user_stddev_fields';
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Staff_User_Stddev_Pop_Fields = {
  __typename?: 'staff_user_stddev_pop_fields';
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Staff_User_Stddev_Samp_Fields = {
  __typename?: 'staff_user_stddev_samp_fields';
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Staff_User_Sum_Fields = {
  __typename?: 'staff_user_sum_fields';
  created_by?: Maybe<Scalars['Int']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
  user_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "staff_user" */
export enum Staff_User_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  TenantType = 'tenant_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by',
  /** column name */
  UserId = 'user_id'
}

/** aggregate var_pop on columns */
export type Staff_User_Var_Pop_Fields = {
  __typename?: 'staff_user_var_pop_fields';
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Staff_User_Var_Samp_Fields = {
  __typename?: 'staff_user_var_samp_fields';
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Staff_User_Variance_Fields = {
  __typename?: 'staff_user_variance_fields';
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  user_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "subscription" */
export type Subscription = {
  __typename?: 'subscription';
  amount_per_month: Scalars['float8'];
  amount_per_period: Scalars['float8'];
  /** A computed field, executes function "calculate_bid_amount" */
  bid_amount?: Maybe<Scalars['float8']>;
  billing_period: Scalars['String'];
  billing_period_interval: Scalars['Int'];
  company_id: Scalars['Int'];
  company_integration_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  created_by: Scalars['Int'];
  currency: Scalars['String'];
  customer_created: Scalars['timestamptz'];
  customer_email: Scalars['String'];
  customer_identifier: Scalars['String'];
  customer_name?: Maybe<Scalars['String']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  eligibility_score?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  status: Scalars['String'];
  subscription_id: Scalars['String'];
  tax_inclusive: Scalars['Boolean'];
  tax_rate?: Maybe<Scalars['float8']>;
  term_end?: Maybe<Scalars['timestamptz']>;
  term_start: Scalars['timestamptz'];
  /** An array relationship */
  trade_subscriptions: Array<Trade_Subscription>;
  /** An aggregate relationship */
  trade_subscriptions_aggregate: Trade_Subscription_Aggregate;
  updated_at: Scalars['timestamptz'];
  updated_by: Scalars['Int'];
  verified?: Maybe<Scalars['Boolean']>;
};


/** columns and relationships of "subscription" */
export type SubscriptionBid_AmountArgs = {
  args: Bid_Amount_Subscription_Args;
};


/** columns and relationships of "subscription" */
export type SubscriptionTrade_SubscriptionsArgs = {
  distinct_on?: InputMaybe<Array<Trade_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Subscription_Order_By>>;
  where?: InputMaybe<Trade_Subscription_Bool_Exp>;
};


/** columns and relationships of "subscription" */
export type SubscriptionTrade_Subscriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trade_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Subscription_Order_By>>;
  where?: InputMaybe<Trade_Subscription_Bool_Exp>;
};

/** aggregated selection of "subscription" */
export type Subscription_Aggregate = {
  __typename?: 'subscription_aggregate';
  aggregate?: Maybe<Subscription_Aggregate_Fields>;
  nodes: Array<Subscription>;
};

/** aggregate fields of "subscription" */
export type Subscription_Aggregate_Fields = {
  __typename?: 'subscription_aggregate_fields';
  avg?: Maybe<Subscription_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Subscription_Max_Fields>;
  min?: Maybe<Subscription_Min_Fields>;
  stddev?: Maybe<Subscription_Stddev_Fields>;
  stddev_pop?: Maybe<Subscription_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Subscription_Stddev_Samp_Fields>;
  sum?: Maybe<Subscription_Sum_Fields>;
  var_pop?: Maybe<Subscription_Var_Pop_Fields>;
  var_samp?: Maybe<Subscription_Var_Samp_Fields>;
  variance?: Maybe<Subscription_Variance_Fields>;
};


/** aggregate fields of "subscription" */
export type Subscription_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Subscription_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Subscription_Avg_Fields = {
  __typename?: 'subscription_avg_fields';
  amount_per_month?: Maybe<Scalars['Float']>;
  amount_per_period?: Maybe<Scalars['Float']>;
  billing_period_interval?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  company_integration_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  eligibility_score?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tax_rate?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "subscription". All fields are combined with a logical 'AND'. */
export type Subscription_Bool_Exp = {
  _and?: InputMaybe<Array<Subscription_Bool_Exp>>;
  _not?: InputMaybe<Subscription_Bool_Exp>;
  _or?: InputMaybe<Array<Subscription_Bool_Exp>>;
  amount_per_month?: InputMaybe<Float8_Comparison_Exp>;
  amount_per_period?: InputMaybe<Float8_Comparison_Exp>;
  billing_period?: InputMaybe<String_Comparison_Exp>;
  billing_period_interval?: InputMaybe<Int_Comparison_Exp>;
  company_id?: InputMaybe<Int_Comparison_Exp>;
  company_integration_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Int_Comparison_Exp>;
  currency?: InputMaybe<String_Comparison_Exp>;
  customer_created?: InputMaybe<Timestamptz_Comparison_Exp>;
  customer_email?: InputMaybe<String_Comparison_Exp>;
  customer_identifier?: InputMaybe<String_Comparison_Exp>;
  customer_name?: InputMaybe<String_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_by?: InputMaybe<Int_Comparison_Exp>;
  eligibility_score?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  subscription_id?: InputMaybe<String_Comparison_Exp>;
  tax_inclusive?: InputMaybe<Boolean_Comparison_Exp>;
  tax_rate?: InputMaybe<Float8_Comparison_Exp>;
  term_end?: InputMaybe<Timestamptz_Comparison_Exp>;
  term_start?: InputMaybe<Timestamptz_Comparison_Exp>;
  trade_subscriptions?: InputMaybe<Trade_Subscription_Bool_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Int_Comparison_Exp>;
  verified?: InputMaybe<Boolean_Comparison_Exp>;
};

/** unique or primary key constraints on table "subscription" */
export enum Subscription_Constraint {
  /** unique or primary key constraint */
  SubscriptionCompanyIdSubscriptionIdIdx = 'subscription_company_id_subscription_id_idx',
  /** unique or primary key constraint */
  SubscriptionPkey = 'subscription_pkey'
}

/** input type for incrementing numeric columns in table "subscription" */
export type Subscription_Inc_Input = {
  amount_per_month?: InputMaybe<Scalars['float8']>;
  amount_per_period?: InputMaybe<Scalars['float8']>;
  billing_period_interval?: InputMaybe<Scalars['Int']>;
  company_id?: InputMaybe<Scalars['Int']>;
  company_integration_id?: InputMaybe<Scalars['Int']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  eligibility_score?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  tax_rate?: InputMaybe<Scalars['float8']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "subscription" */
export type Subscription_Insert_Input = {
  amount_per_month?: InputMaybe<Scalars['float8']>;
  amount_per_period?: InputMaybe<Scalars['float8']>;
  billing_period?: InputMaybe<Scalars['String']>;
  billing_period_interval?: InputMaybe<Scalars['Int']>;
  company_id?: InputMaybe<Scalars['Int']>;
  company_integration_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  currency?: InputMaybe<Scalars['String']>;
  customer_created?: InputMaybe<Scalars['timestamptz']>;
  customer_email?: InputMaybe<Scalars['String']>;
  customer_identifier?: InputMaybe<Scalars['String']>;
  customer_name?: InputMaybe<Scalars['String']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  eligibility_score?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  subscription_id?: InputMaybe<Scalars['String']>;
  tax_inclusive?: InputMaybe<Scalars['Boolean']>;
  tax_rate?: InputMaybe<Scalars['float8']>;
  term_end?: InputMaybe<Scalars['timestamptz']>;
  term_start?: InputMaybe<Scalars['timestamptz']>;
  trade_subscriptions?: InputMaybe<Trade_Subscription_Arr_Rel_Insert_Input>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate max on columns */
export type Subscription_Max_Fields = {
  __typename?: 'subscription_max_fields';
  amount_per_month?: Maybe<Scalars['float8']>;
  amount_per_period?: Maybe<Scalars['float8']>;
  billing_period?: Maybe<Scalars['String']>;
  billing_period_interval?: Maybe<Scalars['Int']>;
  company_id?: Maybe<Scalars['Int']>;
  company_integration_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  customer_created?: Maybe<Scalars['timestamptz']>;
  customer_email?: Maybe<Scalars['String']>;
  customer_identifier?: Maybe<Scalars['String']>;
  customer_name?: Maybe<Scalars['String']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  eligibility_score?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  subscription_id?: Maybe<Scalars['String']>;
  tax_rate?: Maybe<Scalars['float8']>;
  term_end?: Maybe<Scalars['timestamptz']>;
  term_start?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Subscription_Min_Fields = {
  __typename?: 'subscription_min_fields';
  amount_per_month?: Maybe<Scalars['float8']>;
  amount_per_period?: Maybe<Scalars['float8']>;
  billing_period?: Maybe<Scalars['String']>;
  billing_period_interval?: Maybe<Scalars['Int']>;
  company_id?: Maybe<Scalars['Int']>;
  company_integration_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  currency?: Maybe<Scalars['String']>;
  customer_created?: Maybe<Scalars['timestamptz']>;
  customer_email?: Maybe<Scalars['String']>;
  customer_identifier?: Maybe<Scalars['String']>;
  customer_name?: Maybe<Scalars['String']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  eligibility_score?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  subscription_id?: Maybe<Scalars['String']>;
  tax_rate?: Maybe<Scalars['float8']>;
  term_end?: Maybe<Scalars['timestamptz']>;
  term_start?: Maybe<Scalars['timestamptz']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "subscription" */
export type Subscription_Mutation_Response = {
  __typename?: 'subscription_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Subscription>;
};

/** input type for inserting object relation for remote table "subscription" */
export type Subscription_Obj_Rel_Insert_Input = {
  data: Subscription_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Subscription_On_Conflict>;
};

/** on conflict condition type for table "subscription" */
export type Subscription_On_Conflict = {
  constraint: Subscription_Constraint;
  update_columns?: Array<Subscription_Update_Column>;
  where?: InputMaybe<Subscription_Bool_Exp>;
};

/** Ordering options when selecting data from "subscription". */
export type Subscription_Order_By = {
  amount_per_month?: InputMaybe<Order_By>;
  amount_per_period?: InputMaybe<Order_By>;
  billing_period?: InputMaybe<Order_By>;
  billing_period_interval?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  company_integration_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  currency?: InputMaybe<Order_By>;
  customer_created?: InputMaybe<Order_By>;
  customer_email?: InputMaybe<Order_By>;
  customer_identifier?: InputMaybe<Order_By>;
  customer_name?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  eligibility_score?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  subscription_id?: InputMaybe<Order_By>;
  tax_inclusive?: InputMaybe<Order_By>;
  tax_rate?: InputMaybe<Order_By>;
  term_end?: InputMaybe<Order_By>;
  term_start?: InputMaybe<Order_By>;
  trade_subscriptions_aggregate?: InputMaybe<Trade_Subscription_Aggregate_Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  verified?: InputMaybe<Order_By>;
};

/** primary key columns input for table: subscription */
export type Subscription_Pk_Columns_Input = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "account" */
  account: Array<Account>;
  /** fetch aggregated fields from the table: "account" */
  account_aggregate: Account_Aggregate;
  /** fetch data from the table: "account" using primary key columns */
  account_by_pk?: Maybe<Account>;
  /** fetch data from the table: "banking_partner_integration" */
  banking_partner_integration: Array<Banking_Partner_Integration>;
  /** fetch aggregated fields from the table: "banking_partner_integration" */
  banking_partner_integration_aggregate: Banking_Partner_Integration_Aggregate;
  /** fetch data from the table: "bid" */
  bid: Array<Bid>;
  /** fetch aggregated fields from the table: "bid" */
  bid_aggregate: Bid_Aggregate;
  /** fetch data from the table: "bid" using primary key columns */
  bid_by_pk?: Maybe<Bid>;
  /** fetch data from the table: "blacklisted_tokens" */
  blacklisted_tokens: Array<Blacklisted_Tokens>;
  /** fetch aggregated fields from the table: "blacklisted_tokens" */
  blacklisted_tokens_aggregate: Blacklisted_Tokens_Aggregate;
  /** fetch data from the table: "blacklisted_tokens" using primary key columns */
  blacklisted_tokens_by_pk?: Maybe<Blacklisted_Tokens>;
  /** fetch data from the table: "company" */
  company: Array<Company>;
  /** fetch aggregated fields from the table: "company" */
  company_aggregate: Company_Aggregate;
  /** fetch data from the table: "company" using primary key columns */
  company_by_pk?: Maybe<Company>;
  /** fetch data from the table: "company_cin" */
  company_cin: Array<Company_Cin>;
  /** fetch aggregated fields from the table: "company_cin" */
  company_cin_aggregate: Company_Cin_Aggregate;
  /** fetch data from the table: "company_cin" using primary key columns */
  company_cin_by_pk?: Maybe<Company_Cin>;
  /** fetch data from the table: "company_gst_return" */
  company_gst_return: Array<Company_Gst_Return>;
  /** fetch aggregated fields from the table: "company_gst_return" */
  company_gst_return_aggregate: Company_Gst_Return_Aggregate;
  /** fetch data from the table: "company_gst_return" using primary key columns */
  company_gst_return_by_pk?: Maybe<Company_Gst_Return>;
  /** fetch data from the table: "company_integration" */
  company_integration: Array<Company_Integration>;
  /** fetch aggregated fields from the table: "company_integration" */
  company_integration_aggregate: Company_Integration_Aggregate;
  /** fetch data from the table: "company_integration" using primary key columns */
  company_integration_by_pk?: Maybe<Company_Integration>;
  /** fetch data from the table: "company_integration_file" */
  company_integration_file: Array<Company_Integration_File>;
  /** fetch aggregated fields from the table: "company_integration_file" */
  company_integration_file_aggregate: Company_Integration_File_Aggregate;
  /** fetch data from the table: "company_integration_file" using primary key columns */
  company_integration_file_by_pk?: Maybe<Company_Integration_File>;
  /** fetch data from the table: "company_score" */
  company_score: Array<Company_Score>;
  /** fetch aggregated fields from the table: "company_score" */
  company_score_aggregate: Company_Score_Aggregate;
  /** fetch data from the table: "company_score" using primary key columns */
  company_score_by_pk?: Maybe<Company_Score>;
  /** fetch data from the table: "company_statement" */
  company_statement: Array<Company_Statement>;
  /** fetch aggregated fields from the table: "company_statement" */
  company_statement_aggregate: Company_Statement_Aggregate;
  /** fetch data from the table: "company_statement" using primary key columns */
  company_statement_by_pk?: Maybe<Company_Statement>;
  /** fetch data from the table: "company_user" */
  company_user: Array<Company_User>;
  /** fetch aggregated fields from the table: "company_user" */
  company_user_aggregate: Company_User_Aggregate;
  /** fetch data from the table: "company_user" using primary key columns */
  company_user_by_pk?: Maybe<Company_User>;
  /** fetch data from the table: "deal" */
  deal: Array<Deal>;
  /** fetch aggregated fields from the table: "deal" */
  deal_aggregate: Deal_Aggregate;
  /** fetch data from the table: "deal" using primary key columns */
  deal_by_pk?: Maybe<Deal>;
  /** fetch data from the table: "file_registry" */
  file_registry: Array<File_Registry>;
  /** fetch aggregated fields from the table: "file_registry" */
  file_registry_aggregate: File_Registry_Aggregate;
  /** fetch data from the table: "file_registry" using primary key columns */
  file_registry_by_pk?: Maybe<File_Registry>;
  /** execute function "highest_bid" which returns "bid" */
  highest_bid?: Maybe<Bid>;
  /** execute function "highest_bid" and query aggregates on result of table type "bid" */
  highest_bid_aggregate: Bid_Aggregate;
  /** fetch data from the table: "integration_auth" */
  integration_auth: Array<Integration_Auth>;
  /** fetch aggregated fields from the table: "integration_auth" */
  integration_auth_aggregate: Integration_Auth_Aggregate;
  /** fetch data from the table: "integration_auth" using primary key columns */
  integration_auth_by_pk?: Maybe<Integration_Auth>;
  /** fetch data from the table: "internal_statement" */
  internal_statement: Array<Internal_Statement>;
  /** fetch aggregated fields from the table: "internal_statement" */
  internal_statement_aggregate: Internal_Statement_Aggregate;
  /** fetch data from the table: "internal_statement" using primary key columns */
  internal_statement_by_pk?: Maybe<Internal_Statement>;
  /** fetch data from the table: "investor" */
  investor: Array<Investor>;
  /** fetch aggregated fields from the table: "investor" */
  investor_aggregate: Investor_Aggregate;
  /** fetch data from the table: "investor" using primary key columns */
  investor_by_pk?: Maybe<Investor>;
  /** fetch data from the table: "investor_preference" */
  investor_preference: Array<Investor_Preference>;
  /** fetch aggregated fields from the table: "investor_preference" */
  investor_preference_aggregate: Investor_Preference_Aggregate;
  /** fetch data from the table: "investor_preference" using primary key columns */
  investor_preference_by_pk?: Maybe<Investor_Preference>;
  /** fetch data from the table: "investor_statement" */
  investor_statement: Array<Investor_Statement>;
  /** fetch aggregated fields from the table: "investor_statement" */
  investor_statement_aggregate: Investor_Statement_Aggregate;
  /** fetch data from the table: "investor_statement" using primary key columns */
  investor_statement_by_pk?: Maybe<Investor_Statement>;
  /** fetch data from the table: "investor_user" */
  investor_user: Array<Investor_User>;
  /** fetch aggregated fields from the table: "investor_user" */
  investor_user_aggregate: Investor_User_Aggregate;
  /** fetch data from the table: "investor_user" using primary key columns */
  investor_user_by_pk?: Maybe<Investor_User>;
  /** fetch data from the table: "ref_account_type" */
  ref_account_type: Array<Ref_Account_Type>;
  /** fetch aggregated fields from the table: "ref_account_type" */
  ref_account_type_aggregate: Ref_Account_Type_Aggregate;
  /** fetch data from the table: "ref_account_type" using primary key columns */
  ref_account_type_by_pk?: Maybe<Ref_Account_Type>;
  /** fetch data from the table: "ref_bank" */
  ref_bank: Array<Ref_Bank>;
  /** fetch aggregated fields from the table: "ref_bank" */
  ref_bank_aggregate: Ref_Bank_Aggregate;
  /** fetch data from the table: "ref_bank" using primary key columns */
  ref_bank_by_pk?: Maybe<Ref_Bank>;
  /** fetch data from the table: "ref_billing_period" */
  ref_billing_period: Array<Ref_Billing_Period>;
  /** fetch aggregated fields from the table: "ref_billing_period" */
  ref_billing_period_aggregate: Ref_Billing_Period_Aggregate;
  /** fetch data from the table: "ref_billing_period" using primary key columns */
  ref_billing_period_by_pk?: Maybe<Ref_Billing_Period>;
  /** fetch data from the table: "ref_category" */
  ref_category: Array<Ref_Category>;
  /** fetch aggregated fields from the table: "ref_category" */
  ref_category_aggregate: Ref_Category_Aggregate;
  /** fetch data from the table: "ref_category" using primary key columns */
  ref_category_by_pk?: Maybe<Ref_Category>;
  /** fetch data from the table: "ref_company_status" */
  ref_company_status: Array<Ref_Company_Status>;
  /** fetch aggregated fields from the table: "ref_company_status" */
  ref_company_status_aggregate: Ref_Company_Status_Aggregate;
  /** fetch data from the table: "ref_company_status" using primary key columns */
  ref_company_status_by_pk?: Maybe<Ref_Company_Status>;
  /** fetch data from the table: "ref_company_type" */
  ref_company_type: Array<Ref_Company_Type>;
  /** fetch aggregated fields from the table: "ref_company_type" */
  ref_company_type_aggregate: Ref_Company_Type_Aggregate;
  /** fetch data from the table: "ref_company_type" using primary key columns */
  ref_company_type_by_pk?: Maybe<Ref_Company_Type>;
  /** fetch data from the table: "ref_country" */
  ref_country: Array<Ref_Country>;
  /** fetch aggregated fields from the table: "ref_country" */
  ref_country_aggregate: Ref_Country_Aggregate;
  /** fetch data from the table: "ref_country" using primary key columns */
  ref_country_by_pk?: Maybe<Ref_Country>;
  /** fetch data from the table: "ref_currency" */
  ref_currency: Array<Ref_Currency>;
  /** fetch aggregated fields from the table: "ref_currency" */
  ref_currency_aggregate: Ref_Currency_Aggregate;
  /** fetch data from the table: "ref_currency" using primary key columns */
  ref_currency_by_pk?: Maybe<Ref_Currency>;
  /** fetch data from the table: "ref_file_category" */
  ref_file_category: Array<Ref_File_Category>;
  /** fetch aggregated fields from the table: "ref_file_category" */
  ref_file_category_aggregate: Ref_File_Category_Aggregate;
  /** fetch data from the table: "ref_file_category" using primary key columns */
  ref_file_category_by_pk?: Maybe<Ref_File_Category>;
  /** fetch data from the table: "ref_integration_file_status" */
  ref_integration_file_status: Array<Ref_Integration_File_Status>;
  /** fetch aggregated fields from the table: "ref_integration_file_status" */
  ref_integration_file_status_aggregate: Ref_Integration_File_Status_Aggregate;
  /** fetch data from the table: "ref_integration_file_status" using primary key columns */
  ref_integration_file_status_by_pk?: Maybe<Ref_Integration_File_Status>;
  /** fetch data from the table: "ref_integration_status" */
  ref_integration_status: Array<Ref_Integration_Status>;
  /** fetch aggregated fields from the table: "ref_integration_status" */
  ref_integration_status_aggregate: Ref_Integration_Status_Aggregate;
  /** fetch data from the table: "ref_integration_status" using primary key columns */
  ref_integration_status_by_pk?: Maybe<Ref_Integration_Status>;
  /** fetch data from the table: "ref_investor_status" */
  ref_investor_status: Array<Ref_Investor_Status>;
  /** fetch aggregated fields from the table: "ref_investor_status" */
  ref_investor_status_aggregate: Ref_Investor_Status_Aggregate;
  /** fetch data from the table: "ref_investor_status" using primary key columns */
  ref_investor_status_by_pk?: Maybe<Ref_Investor_Status>;
  /** fetch data from the table: "ref_investor_type" */
  ref_investor_type: Array<Ref_Investor_Type>;
  /** fetch aggregated fields from the table: "ref_investor_type" */
  ref_investor_type_aggregate: Ref_Investor_Type_Aggregate;
  /** fetch data from the table: "ref_investor_type" using primary key columns */
  ref_investor_type_by_pk?: Maybe<Ref_Investor_Type>;
  /** fetch data from the table: "ref_perfios_bank_list" */
  ref_perfios_bank_list: Array<Ref_Perfios_Bank_List>;
  /** fetch aggregated fields from the table: "ref_perfios_bank_list" */
  ref_perfios_bank_list_aggregate: Ref_Perfios_Bank_List_Aggregate;
  /** fetch data from the table: "ref_perfios_bank_list" using primary key columns */
  ref_perfios_bank_list_by_pk?: Maybe<Ref_Perfios_Bank_List>;
  /** fetch data from the table: "ref_role" */
  ref_role: Array<Ref_Role>;
  /** fetch aggregated fields from the table: "ref_role" */
  ref_role_aggregate: Ref_Role_Aggregate;
  /** fetch data from the table: "ref_role" using primary key columns */
  ref_role_by_pk?: Maybe<Ref_Role>;
  /** fetch data from the table: "ref_source" */
  ref_source: Array<Ref_Source>;
  /** fetch aggregated fields from the table: "ref_source" */
  ref_source_aggregate: Ref_Source_Aggregate;
  /** fetch data from the table: "ref_source" using primary key columns */
  ref_source_by_pk?: Maybe<Ref_Source>;
  /** An array relationship */
  ref_states: Array<Ref_States>;
  /** An aggregate relationship */
  ref_states_aggregate: Ref_States_Aggregate;
  /** fetch data from the table: "ref_states" using primary key columns */
  ref_states_by_pk?: Maybe<Ref_States>;
  /** fetch data from the table: "ref_subscription_status" */
  ref_subscription_status: Array<Ref_Subscription_Status>;
  /** fetch aggregated fields from the table: "ref_subscription_status" */
  ref_subscription_status_aggregate: Ref_Subscription_Status_Aggregate;
  /** fetch data from the table: "ref_subscription_status" using primary key columns */
  ref_subscription_status_by_pk?: Maybe<Ref_Subscription_Status>;
  /** fetch data from the table: "ref_tenant_type" */
  ref_tenant_type: Array<Ref_Tenant_Type>;
  /** fetch aggregated fields from the table: "ref_tenant_type" */
  ref_tenant_type_aggregate: Ref_Tenant_Type_Aggregate;
  /** fetch data from the table: "ref_tenant_type" using primary key columns */
  ref_tenant_type_by_pk?: Maybe<Ref_Tenant_Type>;
  /** fetch data from the table: "ref_trade_state" */
  ref_trade_state: Array<Ref_Trade_State>;
  /** fetch aggregated fields from the table: "ref_trade_state" */
  ref_trade_state_aggregate: Ref_Trade_State_Aggregate;
  /** fetch data from the table: "ref_trade_state" using primary key columns */
  ref_trade_state_by_pk?: Maybe<Ref_Trade_State>;
  /** fetch data from the table: "ref_trade_status" */
  ref_trade_status: Array<Ref_Trade_Status>;
  /** fetch aggregated fields from the table: "ref_trade_status" */
  ref_trade_status_aggregate: Ref_Trade_Status_Aggregate;
  /** fetch data from the table: "ref_trade_status" using primary key columns */
  ref_trade_status_by_pk?: Maybe<Ref_Trade_Status>;
  /** fetch data from the table: "ref_transaction_method" */
  ref_transaction_method: Array<Ref_Transaction_Method>;
  /** fetch aggregated fields from the table: "ref_transaction_method" */
  ref_transaction_method_aggregate: Ref_Transaction_Method_Aggregate;
  /** fetch data from the table: "ref_transaction_method" using primary key columns */
  ref_transaction_method_by_pk?: Maybe<Ref_Transaction_Method>;
  /** fetch data from the table: "ref_transaction_status" */
  ref_transaction_status: Array<Ref_Transaction_Status>;
  /** fetch aggregated fields from the table: "ref_transaction_status" */
  ref_transaction_status_aggregate: Ref_Transaction_Status_Aggregate;
  /** fetch data from the table: "ref_transaction_status" using primary key columns */
  ref_transaction_status_by_pk?: Maybe<Ref_Transaction_Status>;
  /** fetch data from the table: "ref_transaction_type" */
  ref_transaction_type: Array<Ref_Transaction_Type>;
  /** fetch aggregated fields from the table: "ref_transaction_type" */
  ref_transaction_type_aggregate: Ref_Transaction_Type_Aggregate;
  /** fetch data from the table: "ref_transaction_type" using primary key columns */
  ref_transaction_type_by_pk?: Maybe<Ref_Transaction_Type>;
  /** fetch data from the table: "ref_user_status" */
  ref_user_status: Array<Ref_User_Status>;
  /** fetch aggregated fields from the table: "ref_user_status" */
  ref_user_status_aggregate: Ref_User_Status_Aggregate;
  /** fetch data from the table: "ref_user_status" using primary key columns */
  ref_user_status_by_pk?: Maybe<Ref_User_Status>;
  /** fetch data from the table: "scheduled_payout" */
  scheduled_payout: Array<Scheduled_Payout>;
  /** fetch aggregated fields from the table: "scheduled_payout" */
  scheduled_payout_aggregate: Scheduled_Payout_Aggregate;
  /** fetch data from the table: "scheduled_payout" using primary key columns */
  scheduled_payout_by_pk?: Maybe<Scheduled_Payout>;
  /** fetch data from the table: "staff_user" */
  staff_user: Array<Staff_User>;
  /** fetch aggregated fields from the table: "staff_user" */
  staff_user_aggregate: Staff_User_Aggregate;
  /** fetch data from the table: "staff_user" using primary key columns */
  staff_user_by_pk?: Maybe<Staff_User>;
  /** fetch data from the table: "subscription" */
  subscription: Array<Subscription>;
  /** fetch aggregated fields from the table: "subscription" */
  subscription_aggregate: Subscription_Aggregate;
  /** fetch data from the table: "subscription" using primary key columns */
  subscription_by_pk?: Maybe<Subscription>;
  /** fetch data from the table: "trade" */
  trade: Array<Trade>;
  /** fetch aggregated fields from the table: "trade" */
  trade_aggregate: Trade_Aggregate;
  /** fetch data from the table: "trade" using primary key columns */
  trade_by_pk?: Maybe<Trade>;
  /** fetch data from the table: "trade_subscription" */
  trade_subscription: Array<Trade_Subscription>;
  /** fetch aggregated fields from the table: "trade_subscription" */
  trade_subscription_aggregate: Trade_Subscription_Aggregate;
  /** fetch data from the table: "trade_subscription" using primary key columns */
  trade_subscription_by_pk?: Maybe<Trade_Subscription>;
  /** fetch data from the table: "transaction" */
  transaction: Array<Transaction>;
  /** fetch aggregated fields from the table: "transaction" */
  transaction_aggregate: Transaction_Aggregate;
  /** fetch data from the table: "transaction" using primary key columns */
  transaction_by_pk?: Maybe<Transaction>;
  /** fetch data from the table: "updates_log" */
  updates_log: Array<Updates_Log>;
  /** fetch aggregated fields from the table: "updates_log" */
  updates_log_aggregate: Updates_Log_Aggregate;
  /** fetch data from the table: "updates_log" using primary key columns */
  updates_log_by_pk?: Maybe<Updates_Log>;
  /** fetch data from the table: "user" */
  user: Array<User>;
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate;
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>;
  /** fetch data from the table: "verification_code" */
  verification_code: Array<Verification_Code>;
  /** fetch aggregated fields from the table: "verification_code" */
  verification_code_aggregate: Verification_Code_Aggregate;
  /** fetch data from the table: "verification_code" using primary key columns */
  verification_code_by_pk?: Maybe<Verification_Code>;
  /** fetch data from the table: "webhook_events" */
  webhook_events: Array<Webhook_Events>;
  /** fetch aggregated fields from the table: "webhook_events" */
  webhook_events_aggregate: Webhook_Events_Aggregate;
  /** fetch data from the table: "webhook_events" using primary key columns */
  webhook_events_by_pk?: Maybe<Webhook_Events>;
  /** execute function "your_bids" which returns "bid" */
  your_bids: Array<Bid>;
  /** execute function "your_bids" and query aggregates on result of table type "bid" */
  your_bids_aggregate: Bid_Aggregate;
};


export type Subscription_RootAccountArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Subscription_RootAccount_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Account_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Account_Order_By>>;
  where?: InputMaybe<Account_Bool_Exp>;
};


export type Subscription_RootAccount_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootBanking_Partner_IntegrationArgs = {
  distinct_on?: InputMaybe<Array<Banking_Partner_Integration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Banking_Partner_Integration_Order_By>>;
  where?: InputMaybe<Banking_Partner_Integration_Bool_Exp>;
};


export type Subscription_RootBanking_Partner_Integration_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Banking_Partner_Integration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Banking_Partner_Integration_Order_By>>;
  where?: InputMaybe<Banking_Partner_Integration_Bool_Exp>;
};


export type Subscription_RootBidArgs = {
  distinct_on?: InputMaybe<Array<Bid_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bid_Order_By>>;
  where?: InputMaybe<Bid_Bool_Exp>;
};


export type Subscription_RootBid_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Bid_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bid_Order_By>>;
  where?: InputMaybe<Bid_Bool_Exp>;
};


export type Subscription_RootBid_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootBlacklisted_TokensArgs = {
  distinct_on?: InputMaybe<Array<Blacklisted_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blacklisted_Tokens_Order_By>>;
  where?: InputMaybe<Blacklisted_Tokens_Bool_Exp>;
};


export type Subscription_RootBlacklisted_Tokens_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Blacklisted_Tokens_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Blacklisted_Tokens_Order_By>>;
  where?: InputMaybe<Blacklisted_Tokens_Bool_Exp>;
};


export type Subscription_RootBlacklisted_Tokens_By_PkArgs = {
  token: Scalars['String'];
};


export type Subscription_RootCompanyArgs = {
  distinct_on?: InputMaybe<Array<Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Order_By>>;
  where?: InputMaybe<Company_Bool_Exp>;
};


export type Subscription_RootCompany_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Company_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Order_By>>;
  where?: InputMaybe<Company_Bool_Exp>;
};


export type Subscription_RootCompany_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCompany_CinArgs = {
  distinct_on?: InputMaybe<Array<Company_Cin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Cin_Order_By>>;
  where?: InputMaybe<Company_Cin_Bool_Exp>;
};


export type Subscription_RootCompany_Cin_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Company_Cin_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Cin_Order_By>>;
  where?: InputMaybe<Company_Cin_Bool_Exp>;
};


export type Subscription_RootCompany_Cin_By_PkArgs = {
  cin: Scalars['String'];
};


export type Subscription_RootCompany_Gst_ReturnArgs = {
  distinct_on?: InputMaybe<Array<Company_Gst_Return_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Gst_Return_Order_By>>;
  where?: InputMaybe<Company_Gst_Return_Bool_Exp>;
};


export type Subscription_RootCompany_Gst_Return_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Company_Gst_Return_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Gst_Return_Order_By>>;
  where?: InputMaybe<Company_Gst_Return_Bool_Exp>;
};


export type Subscription_RootCompany_Gst_Return_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCompany_IntegrationArgs = {
  distinct_on?: InputMaybe<Array<Company_Integration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Integration_Order_By>>;
  where?: InputMaybe<Company_Integration_Bool_Exp>;
};


export type Subscription_RootCompany_Integration_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Company_Integration_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Integration_Order_By>>;
  where?: InputMaybe<Company_Integration_Bool_Exp>;
};


export type Subscription_RootCompany_Integration_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCompany_Integration_FileArgs = {
  distinct_on?: InputMaybe<Array<Company_Integration_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Integration_File_Order_By>>;
  where?: InputMaybe<Company_Integration_File_Bool_Exp>;
};


export type Subscription_RootCompany_Integration_File_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Company_Integration_File_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Integration_File_Order_By>>;
  where?: InputMaybe<Company_Integration_File_Bool_Exp>;
};


export type Subscription_RootCompany_Integration_File_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCompany_ScoreArgs = {
  distinct_on?: InputMaybe<Array<Company_Score_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Score_Order_By>>;
  where?: InputMaybe<Company_Score_Bool_Exp>;
};


export type Subscription_RootCompany_Score_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Company_Score_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Score_Order_By>>;
  where?: InputMaybe<Company_Score_Bool_Exp>;
};


export type Subscription_RootCompany_Score_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCompany_StatementArgs = {
  distinct_on?: InputMaybe<Array<Company_Statement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Statement_Order_By>>;
  where?: InputMaybe<Company_Statement_Bool_Exp>;
};


export type Subscription_RootCompany_Statement_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Company_Statement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_Statement_Order_By>>;
  where?: InputMaybe<Company_Statement_Bool_Exp>;
};


export type Subscription_RootCompany_Statement_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootCompany_UserArgs = {
  distinct_on?: InputMaybe<Array<Company_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_User_Order_By>>;
  where?: InputMaybe<Company_User_Bool_Exp>;
};


export type Subscription_RootCompany_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Company_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Company_User_Order_By>>;
  where?: InputMaybe<Company_User_Bool_Exp>;
};


export type Subscription_RootCompany_User_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootDealArgs = {
  distinct_on?: InputMaybe<Array<Deal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Deal_Order_By>>;
  where?: InputMaybe<Deal_Bool_Exp>;
};


export type Subscription_RootDeal_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Deal_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Deal_Order_By>>;
  where?: InputMaybe<Deal_Bool_Exp>;
};


export type Subscription_RootDeal_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootFile_RegistryArgs = {
  distinct_on?: InputMaybe<Array<File_Registry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<File_Registry_Order_By>>;
  where?: InputMaybe<File_Registry_Bool_Exp>;
};


export type Subscription_RootFile_Registry_AggregateArgs = {
  distinct_on?: InputMaybe<Array<File_Registry_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<File_Registry_Order_By>>;
  where?: InputMaybe<File_Registry_Bool_Exp>;
};


export type Subscription_RootFile_Registry_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootHighest_BidArgs = {
  args: Highest_Bid_Args;
  distinct_on?: InputMaybe<Array<Bid_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bid_Order_By>>;
  where?: InputMaybe<Bid_Bool_Exp>;
};


export type Subscription_RootHighest_Bid_AggregateArgs = {
  args: Highest_Bid_Args;
  distinct_on?: InputMaybe<Array<Bid_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bid_Order_By>>;
  where?: InputMaybe<Bid_Bool_Exp>;
};


export type Subscription_RootIntegration_AuthArgs = {
  distinct_on?: InputMaybe<Array<Integration_Auth_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Integration_Auth_Order_By>>;
  where?: InputMaybe<Integration_Auth_Bool_Exp>;
};


export type Subscription_RootIntegration_Auth_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Integration_Auth_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Integration_Auth_Order_By>>;
  where?: InputMaybe<Integration_Auth_Bool_Exp>;
};


export type Subscription_RootIntegration_Auth_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootInternal_StatementArgs = {
  distinct_on?: InputMaybe<Array<Internal_Statement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Internal_Statement_Order_By>>;
  where?: InputMaybe<Internal_Statement_Bool_Exp>;
};


export type Subscription_RootInternal_Statement_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Internal_Statement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Internal_Statement_Order_By>>;
  where?: InputMaybe<Internal_Statement_Bool_Exp>;
};


export type Subscription_RootInternal_Statement_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootInvestorArgs = {
  distinct_on?: InputMaybe<Array<Investor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Investor_Order_By>>;
  where?: InputMaybe<Investor_Bool_Exp>;
};


export type Subscription_RootInvestor_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Investor_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Investor_Order_By>>;
  where?: InputMaybe<Investor_Bool_Exp>;
};


export type Subscription_RootInvestor_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootInvestor_PreferenceArgs = {
  distinct_on?: InputMaybe<Array<Investor_Preference_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Investor_Preference_Order_By>>;
  where?: InputMaybe<Investor_Preference_Bool_Exp>;
};


export type Subscription_RootInvestor_Preference_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Investor_Preference_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Investor_Preference_Order_By>>;
  where?: InputMaybe<Investor_Preference_Bool_Exp>;
};


export type Subscription_RootInvestor_Preference_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootInvestor_StatementArgs = {
  distinct_on?: InputMaybe<Array<Investor_Statement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Investor_Statement_Order_By>>;
  where?: InputMaybe<Investor_Statement_Bool_Exp>;
};


export type Subscription_RootInvestor_Statement_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Investor_Statement_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Investor_Statement_Order_By>>;
  where?: InputMaybe<Investor_Statement_Bool_Exp>;
};


export type Subscription_RootInvestor_Statement_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootInvestor_UserArgs = {
  distinct_on?: InputMaybe<Array<Investor_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Investor_User_Order_By>>;
  where?: InputMaybe<Investor_User_Bool_Exp>;
};


export type Subscription_RootInvestor_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Investor_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Investor_User_Order_By>>;
  where?: InputMaybe<Investor_User_Bool_Exp>;
};


export type Subscription_RootInvestor_User_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootRef_Account_TypeArgs = {
  distinct_on?: InputMaybe<Array<Ref_Account_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Account_Type_Order_By>>;
  where?: InputMaybe<Ref_Account_Type_Bool_Exp>;
};


export type Subscription_RootRef_Account_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Account_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Account_Type_Order_By>>;
  where?: InputMaybe<Ref_Account_Type_Bool_Exp>;
};


export type Subscription_RootRef_Account_Type_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRef_BankArgs = {
  distinct_on?: InputMaybe<Array<Ref_Bank_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Bank_Order_By>>;
  where?: InputMaybe<Ref_Bank_Bool_Exp>;
};


export type Subscription_RootRef_Bank_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Bank_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Bank_Order_By>>;
  where?: InputMaybe<Ref_Bank_Bool_Exp>;
};


export type Subscription_RootRef_Bank_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootRef_Billing_PeriodArgs = {
  distinct_on?: InputMaybe<Array<Ref_Billing_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Billing_Period_Order_By>>;
  where?: InputMaybe<Ref_Billing_Period_Bool_Exp>;
};


export type Subscription_RootRef_Billing_Period_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Billing_Period_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Billing_Period_Order_By>>;
  where?: InputMaybe<Ref_Billing_Period_Bool_Exp>;
};


export type Subscription_RootRef_Billing_Period_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRef_CategoryArgs = {
  distinct_on?: InputMaybe<Array<Ref_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Category_Order_By>>;
  where?: InputMaybe<Ref_Category_Bool_Exp>;
};


export type Subscription_RootRef_Category_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Category_Order_By>>;
  where?: InputMaybe<Ref_Category_Bool_Exp>;
};


export type Subscription_RootRef_Category_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRef_Company_StatusArgs = {
  distinct_on?: InputMaybe<Array<Ref_Company_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Company_Status_Order_By>>;
  where?: InputMaybe<Ref_Company_Status_Bool_Exp>;
};


export type Subscription_RootRef_Company_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Company_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Company_Status_Order_By>>;
  where?: InputMaybe<Ref_Company_Status_Bool_Exp>;
};


export type Subscription_RootRef_Company_Status_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRef_Company_TypeArgs = {
  distinct_on?: InputMaybe<Array<Ref_Company_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Company_Type_Order_By>>;
  where?: InputMaybe<Ref_Company_Type_Bool_Exp>;
};


export type Subscription_RootRef_Company_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Company_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Company_Type_Order_By>>;
  where?: InputMaybe<Ref_Company_Type_Bool_Exp>;
};


export type Subscription_RootRef_Company_Type_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRef_CountryArgs = {
  distinct_on?: InputMaybe<Array<Ref_Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Country_Order_By>>;
  where?: InputMaybe<Ref_Country_Bool_Exp>;
};


export type Subscription_RootRef_Country_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Country_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Country_Order_By>>;
  where?: InputMaybe<Ref_Country_Bool_Exp>;
};


export type Subscription_RootRef_Country_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootRef_CurrencyArgs = {
  distinct_on?: InputMaybe<Array<Ref_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Currency_Order_By>>;
  where?: InputMaybe<Ref_Currency_Bool_Exp>;
};


export type Subscription_RootRef_Currency_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Currency_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Currency_Order_By>>;
  where?: InputMaybe<Ref_Currency_Bool_Exp>;
};


export type Subscription_RootRef_Currency_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRef_File_CategoryArgs = {
  distinct_on?: InputMaybe<Array<Ref_File_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_File_Category_Order_By>>;
  where?: InputMaybe<Ref_File_Category_Bool_Exp>;
};


export type Subscription_RootRef_File_Category_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_File_Category_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_File_Category_Order_By>>;
  where?: InputMaybe<Ref_File_Category_Bool_Exp>;
};


export type Subscription_RootRef_File_Category_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRef_Integration_File_StatusArgs = {
  distinct_on?: InputMaybe<Array<Ref_Integration_File_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Integration_File_Status_Order_By>>;
  where?: InputMaybe<Ref_Integration_File_Status_Bool_Exp>;
};


export type Subscription_RootRef_Integration_File_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Integration_File_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Integration_File_Status_Order_By>>;
  where?: InputMaybe<Ref_Integration_File_Status_Bool_Exp>;
};


export type Subscription_RootRef_Integration_File_Status_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRef_Integration_StatusArgs = {
  distinct_on?: InputMaybe<Array<Ref_Integration_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Integration_Status_Order_By>>;
  where?: InputMaybe<Ref_Integration_Status_Bool_Exp>;
};


export type Subscription_RootRef_Integration_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Integration_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Integration_Status_Order_By>>;
  where?: InputMaybe<Ref_Integration_Status_Bool_Exp>;
};


export type Subscription_RootRef_Integration_Status_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRef_Investor_StatusArgs = {
  distinct_on?: InputMaybe<Array<Ref_Investor_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Investor_Status_Order_By>>;
  where?: InputMaybe<Ref_Investor_Status_Bool_Exp>;
};


export type Subscription_RootRef_Investor_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Investor_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Investor_Status_Order_By>>;
  where?: InputMaybe<Ref_Investor_Status_Bool_Exp>;
};


export type Subscription_RootRef_Investor_Status_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRef_Investor_TypeArgs = {
  distinct_on?: InputMaybe<Array<Ref_Investor_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Investor_Type_Order_By>>;
  where?: InputMaybe<Ref_Investor_Type_Bool_Exp>;
};


export type Subscription_RootRef_Investor_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Investor_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Investor_Type_Order_By>>;
  where?: InputMaybe<Ref_Investor_Type_Bool_Exp>;
};


export type Subscription_RootRef_Investor_Type_By_PkArgs = {
  value: Scalars['String'];
};


export type Subscription_RootRef_Perfios_Bank_ListArgs = {
  distinct_on?: InputMaybe<Array<Ref_Perfios_Bank_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Perfios_Bank_List_Order_By>>;
  where?: InputMaybe<Ref_Perfios_Bank_List_Bool_Exp>;
};


export type Subscription_RootRef_Perfios_Bank_List_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Perfios_Bank_List_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Perfios_Bank_List_Order_By>>;
  where?: InputMaybe<Ref_Perfios_Bank_List_Bool_Exp>;
};


export type Subscription_RootRef_Perfios_Bank_List_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootRef_RoleArgs = {
  distinct_on?: InputMaybe<Array<Ref_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Role_Order_By>>;
  where?: InputMaybe<Ref_Role_Bool_Exp>;
};


export type Subscription_RootRef_Role_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Role_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Role_Order_By>>;
  where?: InputMaybe<Ref_Role_Bool_Exp>;
};


export type Subscription_RootRef_Role_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRef_SourceArgs = {
  distinct_on?: InputMaybe<Array<Ref_Source_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Source_Order_By>>;
  where?: InputMaybe<Ref_Source_Bool_Exp>;
};


export type Subscription_RootRef_Source_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Source_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Source_Order_By>>;
  where?: InputMaybe<Ref_Source_Bool_Exp>;
};


export type Subscription_RootRef_Source_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRef_StatesArgs = {
  distinct_on?: InputMaybe<Array<Ref_States_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_States_Order_By>>;
  where?: InputMaybe<Ref_States_Bool_Exp>;
};


export type Subscription_RootRef_States_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_States_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_States_Order_By>>;
  where?: InputMaybe<Ref_States_Bool_Exp>;
};


export type Subscription_RootRef_States_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootRef_Subscription_StatusArgs = {
  distinct_on?: InputMaybe<Array<Ref_Subscription_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Subscription_Status_Order_By>>;
  where?: InputMaybe<Ref_Subscription_Status_Bool_Exp>;
};


export type Subscription_RootRef_Subscription_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Subscription_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Subscription_Status_Order_By>>;
  where?: InputMaybe<Ref_Subscription_Status_Bool_Exp>;
};


export type Subscription_RootRef_Subscription_Status_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRef_Tenant_TypeArgs = {
  distinct_on?: InputMaybe<Array<Ref_Tenant_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Tenant_Type_Order_By>>;
  where?: InputMaybe<Ref_Tenant_Type_Bool_Exp>;
};


export type Subscription_RootRef_Tenant_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Tenant_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Tenant_Type_Order_By>>;
  where?: InputMaybe<Ref_Tenant_Type_Bool_Exp>;
};


export type Subscription_RootRef_Tenant_Type_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRef_Trade_StateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Trade_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Trade_State_Order_By>>;
  where?: InputMaybe<Ref_Trade_State_Bool_Exp>;
};


export type Subscription_RootRef_Trade_State_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Trade_State_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Trade_State_Order_By>>;
  where?: InputMaybe<Ref_Trade_State_Bool_Exp>;
};


export type Subscription_RootRef_Trade_State_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRef_Trade_StatusArgs = {
  distinct_on?: InputMaybe<Array<Ref_Trade_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Trade_Status_Order_By>>;
  where?: InputMaybe<Ref_Trade_Status_Bool_Exp>;
};


export type Subscription_RootRef_Trade_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Trade_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Trade_Status_Order_By>>;
  where?: InputMaybe<Ref_Trade_Status_Bool_Exp>;
};


export type Subscription_RootRef_Trade_Status_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRef_Transaction_MethodArgs = {
  distinct_on?: InputMaybe<Array<Ref_Transaction_Method_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Transaction_Method_Order_By>>;
  where?: InputMaybe<Ref_Transaction_Method_Bool_Exp>;
};


export type Subscription_RootRef_Transaction_Method_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Transaction_Method_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Transaction_Method_Order_By>>;
  where?: InputMaybe<Ref_Transaction_Method_Bool_Exp>;
};


export type Subscription_RootRef_Transaction_Method_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRef_Transaction_StatusArgs = {
  distinct_on?: InputMaybe<Array<Ref_Transaction_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Transaction_Status_Order_By>>;
  where?: InputMaybe<Ref_Transaction_Status_Bool_Exp>;
};


export type Subscription_RootRef_Transaction_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Transaction_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Transaction_Status_Order_By>>;
  where?: InputMaybe<Ref_Transaction_Status_Bool_Exp>;
};


export type Subscription_RootRef_Transaction_Status_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRef_Transaction_TypeArgs = {
  distinct_on?: InputMaybe<Array<Ref_Transaction_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Transaction_Type_Order_By>>;
  where?: InputMaybe<Ref_Transaction_Type_Bool_Exp>;
};


export type Subscription_RootRef_Transaction_Type_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_Transaction_Type_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_Transaction_Type_Order_By>>;
  where?: InputMaybe<Ref_Transaction_Type_Bool_Exp>;
};


export type Subscription_RootRef_Transaction_Type_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootRef_User_StatusArgs = {
  distinct_on?: InputMaybe<Array<Ref_User_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_User_Status_Order_By>>;
  where?: InputMaybe<Ref_User_Status_Bool_Exp>;
};


export type Subscription_RootRef_User_Status_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Ref_User_Status_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Ref_User_Status_Order_By>>;
  where?: InputMaybe<Ref_User_Status_Bool_Exp>;
};


export type Subscription_RootRef_User_Status_By_PkArgs = {
  id: Scalars['String'];
};


export type Subscription_RootScheduled_PayoutArgs = {
  distinct_on?: InputMaybe<Array<Scheduled_Payout_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Scheduled_Payout_Order_By>>;
  where?: InputMaybe<Scheduled_Payout_Bool_Exp>;
};


export type Subscription_RootScheduled_Payout_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Scheduled_Payout_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Scheduled_Payout_Order_By>>;
  where?: InputMaybe<Scheduled_Payout_Bool_Exp>;
};


export type Subscription_RootScheduled_Payout_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootStaff_UserArgs = {
  distinct_on?: InputMaybe<Array<Staff_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Staff_User_Order_By>>;
  where?: InputMaybe<Staff_User_Bool_Exp>;
};


export type Subscription_RootStaff_User_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Staff_User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Staff_User_Order_By>>;
  where?: InputMaybe<Staff_User_Bool_Exp>;
};


export type Subscription_RootStaff_User_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootSubscriptionArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subscription_Order_By>>;
  where?: InputMaybe<Subscription_Bool_Exp>;
};


export type Subscription_RootSubscription_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Subscription_Order_By>>;
  where?: InputMaybe<Subscription_Bool_Exp>;
};


export type Subscription_RootSubscription_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTradeArgs = {
  distinct_on?: InputMaybe<Array<Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Order_By>>;
  where?: InputMaybe<Trade_Bool_Exp>;
};


export type Subscription_RootTrade_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trade_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Order_By>>;
  where?: InputMaybe<Trade_Bool_Exp>;
};


export type Subscription_RootTrade_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTrade_SubscriptionArgs = {
  distinct_on?: InputMaybe<Array<Trade_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Subscription_Order_By>>;
  where?: InputMaybe<Trade_Subscription_Bool_Exp>;
};


export type Subscription_RootTrade_Subscription_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trade_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Subscription_Order_By>>;
  where?: InputMaybe<Trade_Subscription_Bool_Exp>;
};


export type Subscription_RootTrade_Subscription_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootTransactionArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


export type Subscription_RootTransaction_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootUpdates_LogArgs = {
  distinct_on?: InputMaybe<Array<Updates_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Updates_Log_Order_By>>;
  where?: InputMaybe<Updates_Log_Bool_Exp>;
};


export type Subscription_RootUpdates_Log_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Updates_Log_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Updates_Log_Order_By>>;
  where?: InputMaybe<Updates_Log_Bool_Exp>;
};


export type Subscription_RootUpdates_Log_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootUserArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: InputMaybe<Array<User_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<User_Order_By>>;
  where?: InputMaybe<User_Bool_Exp>;
};


export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootVerification_CodeArgs = {
  distinct_on?: InputMaybe<Array<Verification_Code_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Verification_Code_Order_By>>;
  where?: InputMaybe<Verification_Code_Bool_Exp>;
};


export type Subscription_RootVerification_Code_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Verification_Code_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Verification_Code_Order_By>>;
  where?: InputMaybe<Verification_Code_Bool_Exp>;
};


export type Subscription_RootVerification_Code_By_PkArgs = {
  id: Scalars['Int'];
};


export type Subscription_RootWebhook_EventsArgs = {
  distinct_on?: InputMaybe<Array<Webhook_Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Webhook_Events_Order_By>>;
  where?: InputMaybe<Webhook_Events_Bool_Exp>;
};


export type Subscription_RootWebhook_Events_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Webhook_Events_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Webhook_Events_Order_By>>;
  where?: InputMaybe<Webhook_Events_Bool_Exp>;
};


export type Subscription_RootWebhook_Events_By_PkArgs = {
  id: Scalars['uuid'];
};


export type Subscription_RootYour_BidsArgs = {
  args: Your_Bids_Args;
  distinct_on?: InputMaybe<Array<Bid_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bid_Order_By>>;
  where?: InputMaybe<Bid_Bool_Exp>;
};


export type Subscription_RootYour_Bids_AggregateArgs = {
  args: Your_Bids_Args;
  distinct_on?: InputMaybe<Array<Bid_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Bid_Order_By>>;
  where?: InputMaybe<Bid_Bool_Exp>;
};

/** select columns of table "subscription" */
export enum Subscription_Select_Column {
  /** column name */
  AmountPerMonth = 'amount_per_month',
  /** column name */
  AmountPerPeriod = 'amount_per_period',
  /** column name */
  BillingPeriod = 'billing_period',
  /** column name */
  BillingPeriodInterval = 'billing_period_interval',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CompanyIntegrationId = 'company_integration_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Currency = 'currency',
  /** column name */
  CustomerCreated = 'customer_created',
  /** column name */
  CustomerEmail = 'customer_email',
  /** column name */
  CustomerIdentifier = 'customer_identifier',
  /** column name */
  CustomerName = 'customer_name',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  EligibilityScore = 'eligibility_score',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  SubscriptionId = 'subscription_id',
  /** column name */
  TaxInclusive = 'tax_inclusive',
  /** column name */
  TaxRate = 'tax_rate',
  /** column name */
  TermEnd = 'term_end',
  /** column name */
  TermStart = 'term_start',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by',
  /** column name */
  Verified = 'verified'
}

/** input type for updating data in table "subscription" */
export type Subscription_Set_Input = {
  amount_per_month?: InputMaybe<Scalars['float8']>;
  amount_per_period?: InputMaybe<Scalars['float8']>;
  billing_period?: InputMaybe<Scalars['String']>;
  billing_period_interval?: InputMaybe<Scalars['Int']>;
  company_id?: InputMaybe<Scalars['Int']>;
  company_integration_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  currency?: InputMaybe<Scalars['String']>;
  customer_created?: InputMaybe<Scalars['timestamptz']>;
  customer_email?: InputMaybe<Scalars['String']>;
  customer_identifier?: InputMaybe<Scalars['String']>;
  customer_name?: InputMaybe<Scalars['String']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  eligibility_score?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  subscription_id?: InputMaybe<Scalars['String']>;
  tax_inclusive?: InputMaybe<Scalars['Boolean']>;
  tax_rate?: InputMaybe<Scalars['float8']>;
  term_end?: InputMaybe<Scalars['timestamptz']>;
  term_start?: InputMaybe<Scalars['timestamptz']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
  verified?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate stddev on columns */
export type Subscription_Stddev_Fields = {
  __typename?: 'subscription_stddev_fields';
  amount_per_month?: Maybe<Scalars['Float']>;
  amount_per_period?: Maybe<Scalars['Float']>;
  billing_period_interval?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  company_integration_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  eligibility_score?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tax_rate?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Subscription_Stddev_Pop_Fields = {
  __typename?: 'subscription_stddev_pop_fields';
  amount_per_month?: Maybe<Scalars['Float']>;
  amount_per_period?: Maybe<Scalars['Float']>;
  billing_period_interval?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  company_integration_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  eligibility_score?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tax_rate?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Subscription_Stddev_Samp_Fields = {
  __typename?: 'subscription_stddev_samp_fields';
  amount_per_month?: Maybe<Scalars['Float']>;
  amount_per_period?: Maybe<Scalars['Float']>;
  billing_period_interval?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  company_integration_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  eligibility_score?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tax_rate?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Subscription_Sum_Fields = {
  __typename?: 'subscription_sum_fields';
  amount_per_month?: Maybe<Scalars['float8']>;
  amount_per_period?: Maybe<Scalars['float8']>;
  billing_period_interval?: Maybe<Scalars['Int']>;
  company_id?: Maybe<Scalars['Int']>;
  company_integration_id?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_by?: Maybe<Scalars['Int']>;
  eligibility_score?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  tax_rate?: Maybe<Scalars['float8']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** update columns of table "subscription" */
export enum Subscription_Update_Column {
  /** column name */
  AmountPerMonth = 'amount_per_month',
  /** column name */
  AmountPerPeriod = 'amount_per_period',
  /** column name */
  BillingPeriod = 'billing_period',
  /** column name */
  BillingPeriodInterval = 'billing_period_interval',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CompanyIntegrationId = 'company_integration_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Currency = 'currency',
  /** column name */
  CustomerCreated = 'customer_created',
  /** column name */
  CustomerEmail = 'customer_email',
  /** column name */
  CustomerIdentifier = 'customer_identifier',
  /** column name */
  CustomerName = 'customer_name',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  EligibilityScore = 'eligibility_score',
  /** column name */
  Id = 'id',
  /** column name */
  Status = 'status',
  /** column name */
  SubscriptionId = 'subscription_id',
  /** column name */
  TaxInclusive = 'tax_inclusive',
  /** column name */
  TaxRate = 'tax_rate',
  /** column name */
  TermEnd = 'term_end',
  /** column name */
  TermStart = 'term_start',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by',
  /** column name */
  Verified = 'verified'
}

/** aggregate var_pop on columns */
export type Subscription_Var_Pop_Fields = {
  __typename?: 'subscription_var_pop_fields';
  amount_per_month?: Maybe<Scalars['Float']>;
  amount_per_period?: Maybe<Scalars['Float']>;
  billing_period_interval?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  company_integration_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  eligibility_score?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tax_rate?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Subscription_Var_Samp_Fields = {
  __typename?: 'subscription_var_samp_fields';
  amount_per_month?: Maybe<Scalars['Float']>;
  amount_per_period?: Maybe<Scalars['Float']>;
  billing_period_interval?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  company_integration_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  eligibility_score?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tax_rate?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Subscription_Variance_Fields = {
  __typename?: 'subscription_variance_fields';
  amount_per_month?: Maybe<Scalars['Float']>;
  amount_per_period?: Maybe<Scalars['Float']>;
  billing_period_interval?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  company_integration_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  eligibility_score?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  tax_rate?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** columns and relationships of "trade" */
export type Trade = {
  __typename?: 'trade';
  apa_generated_file_id?: Maybe<Scalars['Int']>;
  apa_generated_source_id?: Maybe<Scalars['String']>;
  apa_signed_file_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  bid: Bid;
  bid_id: Scalars['Int'];
  bid_price?: Maybe<Scalars['float8']>;
  /** A computed field, executes function "generate_trade_code" */
  code?: Maybe<Scalars['String']>;
  /** An object relationship */
  company: Company;
  company_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  created_by: Scalars['Int'];
  /** An object relationship */
  deal: Deal;
  deal_id: Scalars['Int'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  fees?: Maybe<Scalars['float8']>;
  id: Scalars['Int'];
  /** An object relationship */
  investor?: Maybe<Investor>;
  investor_id?: Maybe<Scalars['Int']>;
  /** An object relationship */
  mandate_account?: Maybe<Account>;
  mandate_account_id?: Maybe<Scalars['Int']>;
  mandate_id?: Maybe<Scalars['String']>;
  mandate_type?: Maybe<Scalars['String']>;
  metadata?: Maybe<Scalars['jsonb']>;
  /** Total offered value, selected_customers_value * bid_price */
  payout_value: Scalars['float8'];
  /** An array relationship */
  scheduled_payouts: Array<Scheduled_Payout>;
  /** An aggregate relationship */
  scheduled_payouts_aggregate: Scheduled_Payout_Aggregate;
  selected_customers_value: Scalars['float8'];
  /** An object relationship */
  signed_apa_file?: Maybe<File_Registry>;
  /** An object relationship */
  signed_mandate_file?: Maybe<File_Registry>;
  signed_mandate_file_id?: Maybe<Scalars['Int']>;
  signing_inputs?: Maybe<Scalars['jsonb']>;
  state: Scalars['String'];
  status: Scalars['String'];
  /** An array relationship */
  trade_subscriptions: Array<Trade_Subscription>;
  /** An aggregate relationship */
  trade_subscriptions_aggregate: Trade_Subscription_Aggregate;
  /** An array relationship */
  transactions: Array<Transaction>;
  /** An aggregate relationship */
  transactions_aggregate: Transaction_Aggregate;
  umrn?: Maybe<Scalars['String']>;
  updated_at: Scalars['timestamptz'];
  updated_by: Scalars['Int'];
  validity: Scalars['Int'];
};


/** columns and relationships of "trade" */
export type TradeMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "trade" */
export type TradeScheduled_PayoutsArgs = {
  distinct_on?: InputMaybe<Array<Scheduled_Payout_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Scheduled_Payout_Order_By>>;
  where?: InputMaybe<Scheduled_Payout_Bool_Exp>;
};


/** columns and relationships of "trade" */
export type TradeScheduled_Payouts_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Scheduled_Payout_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Scheduled_Payout_Order_By>>;
  where?: InputMaybe<Scheduled_Payout_Bool_Exp>;
};


/** columns and relationships of "trade" */
export type TradeSigning_InputsArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** columns and relationships of "trade" */
export type TradeTrade_SubscriptionsArgs = {
  distinct_on?: InputMaybe<Array<Trade_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Subscription_Order_By>>;
  where?: InputMaybe<Trade_Subscription_Bool_Exp>;
};


/** columns and relationships of "trade" */
export type TradeTrade_Subscriptions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Trade_Subscription_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Trade_Subscription_Order_By>>;
  where?: InputMaybe<Trade_Subscription_Bool_Exp>;
};


/** columns and relationships of "trade" */
export type TradeTransactionsArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};


/** columns and relationships of "trade" */
export type TradeTransactions_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Transaction_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Transaction_Order_By>>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

/** aggregated selection of "trade" */
export type Trade_Aggregate = {
  __typename?: 'trade_aggregate';
  aggregate?: Maybe<Trade_Aggregate_Fields>;
  nodes: Array<Trade>;
};

/** aggregate fields of "trade" */
export type Trade_Aggregate_Fields = {
  __typename?: 'trade_aggregate_fields';
  avg?: Maybe<Trade_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Trade_Max_Fields>;
  min?: Maybe<Trade_Min_Fields>;
  stddev?: Maybe<Trade_Stddev_Fields>;
  stddev_pop?: Maybe<Trade_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Trade_Stddev_Samp_Fields>;
  sum?: Maybe<Trade_Sum_Fields>;
  var_pop?: Maybe<Trade_Var_Pop_Fields>;
  var_samp?: Maybe<Trade_Var_Samp_Fields>;
  variance?: Maybe<Trade_Variance_Fields>;
};


/** aggregate fields of "trade" */
export type Trade_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Trade_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "trade" */
export type Trade_Aggregate_Order_By = {
  avg?: InputMaybe<Trade_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Trade_Max_Order_By>;
  min?: InputMaybe<Trade_Min_Order_By>;
  stddev?: InputMaybe<Trade_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Trade_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Trade_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Trade_Sum_Order_By>;
  var_pop?: InputMaybe<Trade_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Trade_Var_Samp_Order_By>;
  variance?: InputMaybe<Trade_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Trade_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
  signing_inputs?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "trade" */
export type Trade_Arr_Rel_Insert_Input = {
  data: Array<Trade_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Trade_On_Conflict>;
};

/** aggregate avg on columns */
export type Trade_Avg_Fields = {
  __typename?: 'trade_avg_fields';
  apa_generated_file_id?: Maybe<Scalars['Float']>;
  apa_signed_file_id?: Maybe<Scalars['Float']>;
  bid_id?: Maybe<Scalars['Float']>;
  bid_price?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deal_id?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  mandate_account_id?: Maybe<Scalars['Float']>;
  /** Total offered value, selected_customers_value * bid_price */
  payout_value?: Maybe<Scalars['Float']>;
  selected_customers_value?: Maybe<Scalars['Float']>;
  signed_mandate_file_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  validity?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "trade" */
export type Trade_Avg_Order_By = {
  apa_generated_file_id?: InputMaybe<Order_By>;
  apa_signed_file_id?: InputMaybe<Order_By>;
  bid_id?: InputMaybe<Order_By>;
  bid_price?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deal_id?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  mandate_account_id?: InputMaybe<Order_By>;
  /** Total offered value, selected_customers_value * bid_price */
  payout_value?: InputMaybe<Order_By>;
  selected_customers_value?: InputMaybe<Order_By>;
  signed_mandate_file_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  validity?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "trade". All fields are combined with a logical 'AND'. */
export type Trade_Bool_Exp = {
  _and?: InputMaybe<Array<Trade_Bool_Exp>>;
  _not?: InputMaybe<Trade_Bool_Exp>;
  _or?: InputMaybe<Array<Trade_Bool_Exp>>;
  apa_generated_file_id?: InputMaybe<Int_Comparison_Exp>;
  apa_generated_source_id?: InputMaybe<String_Comparison_Exp>;
  apa_signed_file_id?: InputMaybe<Int_Comparison_Exp>;
  bid?: InputMaybe<Bid_Bool_Exp>;
  bid_id?: InputMaybe<Int_Comparison_Exp>;
  bid_price?: InputMaybe<Float8_Comparison_Exp>;
  code?: InputMaybe<String_Comparison_Exp>;
  company?: InputMaybe<Company_Bool_Exp>;
  company_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Int_Comparison_Exp>;
  deal?: InputMaybe<Deal_Bool_Exp>;
  deal_id?: InputMaybe<Int_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_by?: InputMaybe<Int_Comparison_Exp>;
  fees?: InputMaybe<Float8_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  investor?: InputMaybe<Investor_Bool_Exp>;
  investor_id?: InputMaybe<Int_Comparison_Exp>;
  mandate_account?: InputMaybe<Account_Bool_Exp>;
  mandate_account_id?: InputMaybe<Int_Comparison_Exp>;
  mandate_id?: InputMaybe<String_Comparison_Exp>;
  mandate_type?: InputMaybe<String_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  payout_value?: InputMaybe<Float8_Comparison_Exp>;
  scheduled_payouts?: InputMaybe<Scheduled_Payout_Bool_Exp>;
  selected_customers_value?: InputMaybe<Float8_Comparison_Exp>;
  signed_apa_file?: InputMaybe<File_Registry_Bool_Exp>;
  signed_mandate_file?: InputMaybe<File_Registry_Bool_Exp>;
  signed_mandate_file_id?: InputMaybe<Int_Comparison_Exp>;
  signing_inputs?: InputMaybe<Jsonb_Comparison_Exp>;
  state?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  trade_subscriptions?: InputMaybe<Trade_Subscription_Bool_Exp>;
  transactions?: InputMaybe<Transaction_Bool_Exp>;
  umrn?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Int_Comparison_Exp>;
  validity?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "trade" */
export enum Trade_Constraint {
  /** unique or primary key constraint */
  TradePkey = 'trade_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Trade_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
  signing_inputs?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Trade_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']>;
  signing_inputs?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Trade_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']>;
  signing_inputs?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "trade" */
export type Trade_Inc_Input = {
  apa_generated_file_id?: InputMaybe<Scalars['Int']>;
  apa_signed_file_id?: InputMaybe<Scalars['Int']>;
  bid_id?: InputMaybe<Scalars['Int']>;
  bid_price?: InputMaybe<Scalars['float8']>;
  company_id?: InputMaybe<Scalars['Int']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deal_id?: InputMaybe<Scalars['Int']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  fees?: InputMaybe<Scalars['float8']>;
  id?: InputMaybe<Scalars['Int']>;
  investor_id?: InputMaybe<Scalars['Int']>;
  mandate_account_id?: InputMaybe<Scalars['Int']>;
  /** Total offered value, selected_customers_value * bid_price */
  payout_value?: InputMaybe<Scalars['float8']>;
  selected_customers_value?: InputMaybe<Scalars['float8']>;
  signed_mandate_file_id?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['Int']>;
  validity?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "trade" */
export type Trade_Insert_Input = {
  apa_generated_file_id?: InputMaybe<Scalars['Int']>;
  apa_generated_source_id?: InputMaybe<Scalars['String']>;
  apa_signed_file_id?: InputMaybe<Scalars['Int']>;
  bid?: InputMaybe<Bid_Obj_Rel_Insert_Input>;
  bid_id?: InputMaybe<Scalars['Int']>;
  bid_price?: InputMaybe<Scalars['float8']>;
  company?: InputMaybe<Company_Obj_Rel_Insert_Input>;
  company_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deal?: InputMaybe<Deal_Obj_Rel_Insert_Input>;
  deal_id?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  fees?: InputMaybe<Scalars['float8']>;
  id?: InputMaybe<Scalars['Int']>;
  investor?: InputMaybe<Investor_Obj_Rel_Insert_Input>;
  investor_id?: InputMaybe<Scalars['Int']>;
  mandate_account?: InputMaybe<Account_Obj_Rel_Insert_Input>;
  mandate_account_id?: InputMaybe<Scalars['Int']>;
  mandate_id?: InputMaybe<Scalars['String']>;
  mandate_type?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  /** Total offered value, selected_customers_value * bid_price */
  payout_value?: InputMaybe<Scalars['float8']>;
  scheduled_payouts?: InputMaybe<Scheduled_Payout_Arr_Rel_Insert_Input>;
  selected_customers_value?: InputMaybe<Scalars['float8']>;
  signed_apa_file?: InputMaybe<File_Registry_Obj_Rel_Insert_Input>;
  signed_mandate_file?: InputMaybe<File_Registry_Obj_Rel_Insert_Input>;
  signed_mandate_file_id?: InputMaybe<Scalars['Int']>;
  signing_inputs?: InputMaybe<Scalars['jsonb']>;
  state?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  trade_subscriptions?: InputMaybe<Trade_Subscription_Arr_Rel_Insert_Input>;
  transactions?: InputMaybe<Transaction_Arr_Rel_Insert_Input>;
  umrn?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
  validity?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Trade_Max_Fields = {
  __typename?: 'trade_max_fields';
  apa_generated_file_id?: Maybe<Scalars['Int']>;
  apa_generated_source_id?: Maybe<Scalars['String']>;
  apa_signed_file_id?: Maybe<Scalars['Int']>;
  bid_id?: Maybe<Scalars['Int']>;
  bid_price?: Maybe<Scalars['float8']>;
  company_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deal_id?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  fees?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['Int']>;
  investor_id?: Maybe<Scalars['Int']>;
  mandate_account_id?: Maybe<Scalars['Int']>;
  mandate_id?: Maybe<Scalars['String']>;
  mandate_type?: Maybe<Scalars['String']>;
  /** Total offered value, selected_customers_value * bid_price */
  payout_value?: Maybe<Scalars['float8']>;
  selected_customers_value?: Maybe<Scalars['float8']>;
  signed_mandate_file_id?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  umrn?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
  validity?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "trade" */
export type Trade_Max_Order_By = {
  apa_generated_file_id?: InputMaybe<Order_By>;
  apa_generated_source_id?: InputMaybe<Order_By>;
  apa_signed_file_id?: InputMaybe<Order_By>;
  bid_id?: InputMaybe<Order_By>;
  bid_price?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deal_id?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  mandate_account_id?: InputMaybe<Order_By>;
  mandate_id?: InputMaybe<Order_By>;
  mandate_type?: InputMaybe<Order_By>;
  /** Total offered value, selected_customers_value * bid_price */
  payout_value?: InputMaybe<Order_By>;
  selected_customers_value?: InputMaybe<Order_By>;
  signed_mandate_file_id?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  umrn?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  validity?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Trade_Min_Fields = {
  __typename?: 'trade_min_fields';
  apa_generated_file_id?: Maybe<Scalars['Int']>;
  apa_generated_source_id?: Maybe<Scalars['String']>;
  apa_signed_file_id?: Maybe<Scalars['Int']>;
  bid_id?: Maybe<Scalars['Int']>;
  bid_price?: Maybe<Scalars['float8']>;
  company_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deal_id?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  fees?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['Int']>;
  investor_id?: Maybe<Scalars['Int']>;
  mandate_account_id?: Maybe<Scalars['Int']>;
  mandate_id?: Maybe<Scalars['String']>;
  mandate_type?: Maybe<Scalars['String']>;
  /** Total offered value, selected_customers_value * bid_price */
  payout_value?: Maybe<Scalars['float8']>;
  selected_customers_value?: Maybe<Scalars['float8']>;
  signed_mandate_file_id?: Maybe<Scalars['Int']>;
  state?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  umrn?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
  validity?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "trade" */
export type Trade_Min_Order_By = {
  apa_generated_file_id?: InputMaybe<Order_By>;
  apa_generated_source_id?: InputMaybe<Order_By>;
  apa_signed_file_id?: InputMaybe<Order_By>;
  bid_id?: InputMaybe<Order_By>;
  bid_price?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deal_id?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  mandate_account_id?: InputMaybe<Order_By>;
  mandate_id?: InputMaybe<Order_By>;
  mandate_type?: InputMaybe<Order_By>;
  /** Total offered value, selected_customers_value * bid_price */
  payout_value?: InputMaybe<Order_By>;
  selected_customers_value?: InputMaybe<Order_By>;
  signed_mandate_file_id?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  umrn?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  validity?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "trade" */
export type Trade_Mutation_Response = {
  __typename?: 'trade_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Trade>;
};

/** input type for inserting object relation for remote table "trade" */
export type Trade_Obj_Rel_Insert_Input = {
  data: Trade_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<Trade_On_Conflict>;
};

/** on conflict condition type for table "trade" */
export type Trade_On_Conflict = {
  constraint: Trade_Constraint;
  update_columns?: Array<Trade_Update_Column>;
  where?: InputMaybe<Trade_Bool_Exp>;
};

/** Ordering options when selecting data from "trade". */
export type Trade_Order_By = {
  apa_generated_file_id?: InputMaybe<Order_By>;
  apa_generated_source_id?: InputMaybe<Order_By>;
  apa_signed_file_id?: InputMaybe<Order_By>;
  bid?: InputMaybe<Bid_Order_By>;
  bid_id?: InputMaybe<Order_By>;
  bid_price?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  company?: InputMaybe<Company_Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deal?: InputMaybe<Deal_Order_By>;
  deal_id?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor?: InputMaybe<Investor_Order_By>;
  investor_id?: InputMaybe<Order_By>;
  mandate_account?: InputMaybe<Account_Order_By>;
  mandate_account_id?: InputMaybe<Order_By>;
  mandate_id?: InputMaybe<Order_By>;
  mandate_type?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  payout_value?: InputMaybe<Order_By>;
  scheduled_payouts_aggregate?: InputMaybe<Scheduled_Payout_Aggregate_Order_By>;
  selected_customers_value?: InputMaybe<Order_By>;
  signed_apa_file?: InputMaybe<File_Registry_Order_By>;
  signed_mandate_file?: InputMaybe<File_Registry_Order_By>;
  signed_mandate_file_id?: InputMaybe<Order_By>;
  signing_inputs?: InputMaybe<Order_By>;
  state?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  trade_subscriptions_aggregate?: InputMaybe<Trade_Subscription_Aggregate_Order_By>;
  transactions_aggregate?: InputMaybe<Transaction_Aggregate_Order_By>;
  umrn?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  validity?: InputMaybe<Order_By>;
};

/** primary key columns input for table: trade */
export type Trade_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Trade_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
  signing_inputs?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "trade" */
export enum Trade_Select_Column {
  /** column name */
  ApaGeneratedFileId = 'apa_generated_file_id',
  /** column name */
  ApaGeneratedSourceId = 'apa_generated_source_id',
  /** column name */
  ApaSignedFileId = 'apa_signed_file_id',
  /** column name */
  BidId = 'bid_id',
  /** column name */
  BidPrice = 'bid_price',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DealId = 'deal_id',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  Fees = 'fees',
  /** column name */
  Id = 'id',
  /** column name */
  InvestorId = 'investor_id',
  /** column name */
  MandateAccountId = 'mandate_account_id',
  /** column name */
  MandateId = 'mandate_id',
  /** column name */
  MandateType = 'mandate_type',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  PayoutValue = 'payout_value',
  /** column name */
  SelectedCustomersValue = 'selected_customers_value',
  /** column name */
  SignedMandateFileId = 'signed_mandate_file_id',
  /** column name */
  SigningInputs = 'signing_inputs',
  /** column name */
  State = 'state',
  /** column name */
  Status = 'status',
  /** column name */
  Umrn = 'umrn',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by',
  /** column name */
  Validity = 'validity'
}

/** input type for updating data in table "trade" */
export type Trade_Set_Input = {
  apa_generated_file_id?: InputMaybe<Scalars['Int']>;
  apa_generated_source_id?: InputMaybe<Scalars['String']>;
  apa_signed_file_id?: InputMaybe<Scalars['Int']>;
  bid_id?: InputMaybe<Scalars['Int']>;
  bid_price?: InputMaybe<Scalars['float8']>;
  company_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deal_id?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  fees?: InputMaybe<Scalars['float8']>;
  id?: InputMaybe<Scalars['Int']>;
  investor_id?: InputMaybe<Scalars['Int']>;
  mandate_account_id?: InputMaybe<Scalars['Int']>;
  mandate_id?: InputMaybe<Scalars['String']>;
  mandate_type?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  /** Total offered value, selected_customers_value * bid_price */
  payout_value?: InputMaybe<Scalars['float8']>;
  selected_customers_value?: InputMaybe<Scalars['float8']>;
  signed_mandate_file_id?: InputMaybe<Scalars['Int']>;
  signing_inputs?: InputMaybe<Scalars['jsonb']>;
  state?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  umrn?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
  validity?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Trade_Stddev_Fields = {
  __typename?: 'trade_stddev_fields';
  apa_generated_file_id?: Maybe<Scalars['Float']>;
  apa_signed_file_id?: Maybe<Scalars['Float']>;
  bid_id?: Maybe<Scalars['Float']>;
  bid_price?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deal_id?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  mandate_account_id?: Maybe<Scalars['Float']>;
  /** Total offered value, selected_customers_value * bid_price */
  payout_value?: Maybe<Scalars['Float']>;
  selected_customers_value?: Maybe<Scalars['Float']>;
  signed_mandate_file_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  validity?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "trade" */
export type Trade_Stddev_Order_By = {
  apa_generated_file_id?: InputMaybe<Order_By>;
  apa_signed_file_id?: InputMaybe<Order_By>;
  bid_id?: InputMaybe<Order_By>;
  bid_price?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deal_id?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  mandate_account_id?: InputMaybe<Order_By>;
  /** Total offered value, selected_customers_value * bid_price */
  payout_value?: InputMaybe<Order_By>;
  selected_customers_value?: InputMaybe<Order_By>;
  signed_mandate_file_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  validity?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Trade_Stddev_Pop_Fields = {
  __typename?: 'trade_stddev_pop_fields';
  apa_generated_file_id?: Maybe<Scalars['Float']>;
  apa_signed_file_id?: Maybe<Scalars['Float']>;
  bid_id?: Maybe<Scalars['Float']>;
  bid_price?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deal_id?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  mandate_account_id?: Maybe<Scalars['Float']>;
  /** Total offered value, selected_customers_value * bid_price */
  payout_value?: Maybe<Scalars['Float']>;
  selected_customers_value?: Maybe<Scalars['Float']>;
  signed_mandate_file_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  validity?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "trade" */
export type Trade_Stddev_Pop_Order_By = {
  apa_generated_file_id?: InputMaybe<Order_By>;
  apa_signed_file_id?: InputMaybe<Order_By>;
  bid_id?: InputMaybe<Order_By>;
  bid_price?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deal_id?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  mandate_account_id?: InputMaybe<Order_By>;
  /** Total offered value, selected_customers_value * bid_price */
  payout_value?: InputMaybe<Order_By>;
  selected_customers_value?: InputMaybe<Order_By>;
  signed_mandate_file_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  validity?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Trade_Stddev_Samp_Fields = {
  __typename?: 'trade_stddev_samp_fields';
  apa_generated_file_id?: Maybe<Scalars['Float']>;
  apa_signed_file_id?: Maybe<Scalars['Float']>;
  bid_id?: Maybe<Scalars['Float']>;
  bid_price?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deal_id?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  mandate_account_id?: Maybe<Scalars['Float']>;
  /** Total offered value, selected_customers_value * bid_price */
  payout_value?: Maybe<Scalars['Float']>;
  selected_customers_value?: Maybe<Scalars['Float']>;
  signed_mandate_file_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  validity?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "trade" */
export type Trade_Stddev_Samp_Order_By = {
  apa_generated_file_id?: InputMaybe<Order_By>;
  apa_signed_file_id?: InputMaybe<Order_By>;
  bid_id?: InputMaybe<Order_By>;
  bid_price?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deal_id?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  mandate_account_id?: InputMaybe<Order_By>;
  /** Total offered value, selected_customers_value * bid_price */
  payout_value?: InputMaybe<Order_By>;
  selected_customers_value?: InputMaybe<Order_By>;
  signed_mandate_file_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  validity?: InputMaybe<Order_By>;
};

/** columns and relationships of "trade_subscription" */
export type Trade_Subscription = {
  __typename?: 'trade_subscription';
  company_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  created_by: Scalars['Int'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  parent_id?: Maybe<Scalars['Int']>;
  status: Scalars['String'];
  /** An object relationship */
  subscription: Subscription;
  subscription_id: Scalars['Int'];
  /** An object relationship */
  trade: Trade;
  trade_id: Scalars['Int'];
  updated_at: Scalars['timestamptz'];
  updated_by: Scalars['Int'];
};

/** aggregated selection of "trade_subscription" */
export type Trade_Subscription_Aggregate = {
  __typename?: 'trade_subscription_aggregate';
  aggregate?: Maybe<Trade_Subscription_Aggregate_Fields>;
  nodes: Array<Trade_Subscription>;
};

/** aggregate fields of "trade_subscription" */
export type Trade_Subscription_Aggregate_Fields = {
  __typename?: 'trade_subscription_aggregate_fields';
  avg?: Maybe<Trade_Subscription_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Trade_Subscription_Max_Fields>;
  min?: Maybe<Trade_Subscription_Min_Fields>;
  stddev?: Maybe<Trade_Subscription_Stddev_Fields>;
  stddev_pop?: Maybe<Trade_Subscription_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Trade_Subscription_Stddev_Samp_Fields>;
  sum?: Maybe<Trade_Subscription_Sum_Fields>;
  var_pop?: Maybe<Trade_Subscription_Var_Pop_Fields>;
  var_samp?: Maybe<Trade_Subscription_Var_Samp_Fields>;
  variance?: Maybe<Trade_Subscription_Variance_Fields>;
};


/** aggregate fields of "trade_subscription" */
export type Trade_Subscription_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Trade_Subscription_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "trade_subscription" */
export type Trade_Subscription_Aggregate_Order_By = {
  avg?: InputMaybe<Trade_Subscription_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Trade_Subscription_Max_Order_By>;
  min?: InputMaybe<Trade_Subscription_Min_Order_By>;
  stddev?: InputMaybe<Trade_Subscription_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Trade_Subscription_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Trade_Subscription_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Trade_Subscription_Sum_Order_By>;
  var_pop?: InputMaybe<Trade_Subscription_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Trade_Subscription_Var_Samp_Order_By>;
  variance?: InputMaybe<Trade_Subscription_Variance_Order_By>;
};

/** input type for inserting array relation for remote table "trade_subscription" */
export type Trade_Subscription_Arr_Rel_Insert_Input = {
  data: Array<Trade_Subscription_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Trade_Subscription_On_Conflict>;
};

/** aggregate avg on columns */
export type Trade_Subscription_Avg_Fields = {
  __typename?: 'trade_subscription_avg_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
  subscription_id?: Maybe<Scalars['Float']>;
  trade_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "trade_subscription" */
export type Trade_Subscription_Avg_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
  subscription_id?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "trade_subscription". All fields are combined with a logical 'AND'. */
export type Trade_Subscription_Bool_Exp = {
  _and?: InputMaybe<Array<Trade_Subscription_Bool_Exp>>;
  _not?: InputMaybe<Trade_Subscription_Bool_Exp>;
  _or?: InputMaybe<Array<Trade_Subscription_Bool_Exp>>;
  company_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Int_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_by?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  parent_id?: InputMaybe<Int_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  subscription?: InputMaybe<Subscription_Bool_Exp>;
  subscription_id?: InputMaybe<Int_Comparison_Exp>;
  trade?: InputMaybe<Trade_Bool_Exp>;
  trade_id?: InputMaybe<Int_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "trade_subscription" */
export enum Trade_Subscription_Constraint {
  /** unique or primary key constraint */
  TradeSubscriptionPkey = 'trade_subscription_pkey',
  /** unique or primary key constraint */
  TradeSubscriptionTradeIdSubscriptionIdIdx = 'trade_subscription_trade_id_subscription_id_idx'
}

/** input type for incrementing numeric columns in table "trade_subscription" */
export type Trade_Subscription_Inc_Input = {
  company_id?: InputMaybe<Scalars['Int']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  parent_id?: InputMaybe<Scalars['Int']>;
  subscription_id?: InputMaybe<Scalars['Int']>;
  trade_id?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "trade_subscription" */
export type Trade_Subscription_Insert_Input = {
  company_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  parent_id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  subscription?: InputMaybe<Subscription_Obj_Rel_Insert_Input>;
  subscription_id?: InputMaybe<Scalars['Int']>;
  trade?: InputMaybe<Trade_Obj_Rel_Insert_Input>;
  trade_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Trade_Subscription_Max_Fields = {
  __typename?: 'trade_subscription_max_fields';
  company_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  parent_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  subscription_id?: Maybe<Scalars['Int']>;
  trade_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "trade_subscription" */
export type Trade_Subscription_Max_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  subscription_id?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Trade_Subscription_Min_Fields = {
  __typename?: 'trade_subscription_min_fields';
  company_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  parent_id?: Maybe<Scalars['Int']>;
  status?: Maybe<Scalars['String']>;
  subscription_id?: Maybe<Scalars['Int']>;
  trade_id?: Maybe<Scalars['Int']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "trade_subscription" */
export type Trade_Subscription_Min_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  subscription_id?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "trade_subscription" */
export type Trade_Subscription_Mutation_Response = {
  __typename?: 'trade_subscription_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Trade_Subscription>;
};

/** on conflict condition type for table "trade_subscription" */
export type Trade_Subscription_On_Conflict = {
  constraint: Trade_Subscription_Constraint;
  update_columns?: Array<Trade_Subscription_Update_Column>;
  where?: InputMaybe<Trade_Subscription_Bool_Exp>;
};

/** Ordering options when selecting data from "trade_subscription". */
export type Trade_Subscription_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  subscription?: InputMaybe<Subscription_Order_By>;
  subscription_id?: InputMaybe<Order_By>;
  trade?: InputMaybe<Trade_Order_By>;
  trade_id?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** primary key columns input for table: trade_subscription */
export type Trade_Subscription_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "trade_subscription" */
export enum Trade_Subscription_Select_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  Id = 'id',
  /** column name */
  ParentId = 'parent_id',
  /** column name */
  Status = 'status',
  /** column name */
  SubscriptionId = 'subscription_id',
  /** column name */
  TradeId = 'trade_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** input type for updating data in table "trade_subscription" */
export type Trade_Subscription_Set_Input = {
  company_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  parent_id?: InputMaybe<Scalars['Int']>;
  status?: InputMaybe<Scalars['String']>;
  subscription_id?: InputMaybe<Scalars['Int']>;
  trade_id?: InputMaybe<Scalars['Int']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Trade_Subscription_Stddev_Fields = {
  __typename?: 'trade_subscription_stddev_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
  subscription_id?: Maybe<Scalars['Float']>;
  trade_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "trade_subscription" */
export type Trade_Subscription_Stddev_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
  subscription_id?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Trade_Subscription_Stddev_Pop_Fields = {
  __typename?: 'trade_subscription_stddev_pop_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
  subscription_id?: Maybe<Scalars['Float']>;
  trade_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "trade_subscription" */
export type Trade_Subscription_Stddev_Pop_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
  subscription_id?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Trade_Subscription_Stddev_Samp_Fields = {
  __typename?: 'trade_subscription_stddev_samp_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
  subscription_id?: Maybe<Scalars['Float']>;
  trade_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "trade_subscription" */
export type Trade_Subscription_Stddev_Samp_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
  subscription_id?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Trade_Subscription_Sum_Fields = {
  __typename?: 'trade_subscription_sum_fields';
  company_id?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  parent_id?: Maybe<Scalars['Int']>;
  subscription_id?: Maybe<Scalars['Int']>;
  trade_id?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "trade_subscription" */
export type Trade_Subscription_Sum_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
  subscription_id?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** update columns of table "trade_subscription" */
export enum Trade_Subscription_Update_Column {
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  Id = 'id',
  /** column name */
  ParentId = 'parent_id',
  /** column name */
  Status = 'status',
  /** column name */
  SubscriptionId = 'subscription_id',
  /** column name */
  TradeId = 'trade_id',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** aggregate var_pop on columns */
export type Trade_Subscription_Var_Pop_Fields = {
  __typename?: 'trade_subscription_var_pop_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
  subscription_id?: Maybe<Scalars['Float']>;
  trade_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "trade_subscription" */
export type Trade_Subscription_Var_Pop_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
  subscription_id?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Trade_Subscription_Var_Samp_Fields = {
  __typename?: 'trade_subscription_var_samp_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
  subscription_id?: Maybe<Scalars['Float']>;
  trade_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "trade_subscription" */
export type Trade_Subscription_Var_Samp_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
  subscription_id?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Trade_Subscription_Variance_Fields = {
  __typename?: 'trade_subscription_variance_fields';
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  parent_id?: Maybe<Scalars['Float']>;
  subscription_id?: Maybe<Scalars['Float']>;
  trade_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "trade_subscription" */
export type Trade_Subscription_Variance_Order_By = {
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  parent_id?: InputMaybe<Order_By>;
  subscription_id?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Trade_Sum_Fields = {
  __typename?: 'trade_sum_fields';
  apa_generated_file_id?: Maybe<Scalars['Int']>;
  apa_signed_file_id?: Maybe<Scalars['Int']>;
  bid_id?: Maybe<Scalars['Int']>;
  bid_price?: Maybe<Scalars['float8']>;
  company_id?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  deal_id?: Maybe<Scalars['Int']>;
  deleted_by?: Maybe<Scalars['Int']>;
  fees?: Maybe<Scalars['float8']>;
  id?: Maybe<Scalars['Int']>;
  investor_id?: Maybe<Scalars['Int']>;
  mandate_account_id?: Maybe<Scalars['Int']>;
  /** Total offered value, selected_customers_value * bid_price */
  payout_value?: Maybe<Scalars['float8']>;
  selected_customers_value?: Maybe<Scalars['float8']>;
  signed_mandate_file_id?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
  validity?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "trade" */
export type Trade_Sum_Order_By = {
  apa_generated_file_id?: InputMaybe<Order_By>;
  apa_signed_file_id?: InputMaybe<Order_By>;
  bid_id?: InputMaybe<Order_By>;
  bid_price?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deal_id?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  mandate_account_id?: InputMaybe<Order_By>;
  /** Total offered value, selected_customers_value * bid_price */
  payout_value?: InputMaybe<Order_By>;
  selected_customers_value?: InputMaybe<Order_By>;
  signed_mandate_file_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  validity?: InputMaybe<Order_By>;
};

/** update columns of table "trade" */
export enum Trade_Update_Column {
  /** column name */
  ApaGeneratedFileId = 'apa_generated_file_id',
  /** column name */
  ApaGeneratedSourceId = 'apa_generated_source_id',
  /** column name */
  ApaSignedFileId = 'apa_signed_file_id',
  /** column name */
  BidId = 'bid_id',
  /** column name */
  BidPrice = 'bid_price',
  /** column name */
  CompanyId = 'company_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DealId = 'deal_id',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  Fees = 'fees',
  /** column name */
  Id = 'id',
  /** column name */
  InvestorId = 'investor_id',
  /** column name */
  MandateAccountId = 'mandate_account_id',
  /** column name */
  MandateId = 'mandate_id',
  /** column name */
  MandateType = 'mandate_type',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  PayoutValue = 'payout_value',
  /** column name */
  SelectedCustomersValue = 'selected_customers_value',
  /** column name */
  SignedMandateFileId = 'signed_mandate_file_id',
  /** column name */
  SigningInputs = 'signing_inputs',
  /** column name */
  State = 'state',
  /** column name */
  Status = 'status',
  /** column name */
  Umrn = 'umrn',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by',
  /** column name */
  Validity = 'validity'
}

/** aggregate var_pop on columns */
export type Trade_Var_Pop_Fields = {
  __typename?: 'trade_var_pop_fields';
  apa_generated_file_id?: Maybe<Scalars['Float']>;
  apa_signed_file_id?: Maybe<Scalars['Float']>;
  bid_id?: Maybe<Scalars['Float']>;
  bid_price?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deal_id?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  mandate_account_id?: Maybe<Scalars['Float']>;
  /** Total offered value, selected_customers_value * bid_price */
  payout_value?: Maybe<Scalars['Float']>;
  selected_customers_value?: Maybe<Scalars['Float']>;
  signed_mandate_file_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  validity?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "trade" */
export type Trade_Var_Pop_Order_By = {
  apa_generated_file_id?: InputMaybe<Order_By>;
  apa_signed_file_id?: InputMaybe<Order_By>;
  bid_id?: InputMaybe<Order_By>;
  bid_price?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deal_id?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  mandate_account_id?: InputMaybe<Order_By>;
  /** Total offered value, selected_customers_value * bid_price */
  payout_value?: InputMaybe<Order_By>;
  selected_customers_value?: InputMaybe<Order_By>;
  signed_mandate_file_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  validity?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Trade_Var_Samp_Fields = {
  __typename?: 'trade_var_samp_fields';
  apa_generated_file_id?: Maybe<Scalars['Float']>;
  apa_signed_file_id?: Maybe<Scalars['Float']>;
  bid_id?: Maybe<Scalars['Float']>;
  bid_price?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deal_id?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  mandate_account_id?: Maybe<Scalars['Float']>;
  /** Total offered value, selected_customers_value * bid_price */
  payout_value?: Maybe<Scalars['Float']>;
  selected_customers_value?: Maybe<Scalars['Float']>;
  signed_mandate_file_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  validity?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "trade" */
export type Trade_Var_Samp_Order_By = {
  apa_generated_file_id?: InputMaybe<Order_By>;
  apa_signed_file_id?: InputMaybe<Order_By>;
  bid_id?: InputMaybe<Order_By>;
  bid_price?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deal_id?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  mandate_account_id?: InputMaybe<Order_By>;
  /** Total offered value, selected_customers_value * bid_price */
  payout_value?: InputMaybe<Order_By>;
  selected_customers_value?: InputMaybe<Order_By>;
  signed_mandate_file_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  validity?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Trade_Variance_Fields = {
  __typename?: 'trade_variance_fields';
  apa_generated_file_id?: Maybe<Scalars['Float']>;
  apa_signed_file_id?: Maybe<Scalars['Float']>;
  bid_id?: Maybe<Scalars['Float']>;
  bid_price?: Maybe<Scalars['Float']>;
  company_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deal_id?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  fees?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  investor_id?: Maybe<Scalars['Float']>;
  mandate_account_id?: Maybe<Scalars['Float']>;
  /** Total offered value, selected_customers_value * bid_price */
  payout_value?: Maybe<Scalars['Float']>;
  selected_customers_value?: Maybe<Scalars['Float']>;
  signed_mandate_file_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
  validity?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "trade" */
export type Trade_Variance_Order_By = {
  apa_generated_file_id?: InputMaybe<Order_By>;
  apa_signed_file_id?: InputMaybe<Order_By>;
  bid_id?: InputMaybe<Order_By>;
  bid_price?: InputMaybe<Order_By>;
  company_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deal_id?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  fees?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  investor_id?: InputMaybe<Order_By>;
  mandate_account_id?: InputMaybe<Order_By>;
  /** Total offered value, selected_customers_value * bid_price */
  payout_value?: InputMaybe<Order_By>;
  selected_customers_value?: InputMaybe<Order_By>;
  signed_mandate_file_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
  validity?: InputMaybe<Order_By>;
};

/** columns and relationships of "transaction" */
export type Transaction = {
  __typename?: 'transaction';
  /** An object relationship */
  account: Account;
  account_id: Scalars['Int'];
  amount: Scalars['numeric'];
  /** An object relationship */
  counterparty_account: Account;
  counterparty_id: Scalars['Int'];
  created_at: Scalars['timestamptz'];
  created_by: Scalars['Int'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  failure_reason?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  metadata?: Maybe<Scalars['jsonb']>;
  /** An object relationship */
  scheduled_payout?: Maybe<Scheduled_Payout>;
  scheduled_payout_id?: Maybe<Scalars['Int']>;
  timestamp: Scalars['timestamptz'];
  /** An object relationship */
  trade: Trade;
  trade_id: Scalars['Int'];
  transaction_method: Scalars['String'];
  transaction_method_id: Scalars['String'];
  transaction_status: Scalars['String'];
  transaction_type: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  updated_by: Scalars['Int'];
};


/** columns and relationships of "transaction" */
export type TransactionMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "transaction" */
export type Transaction_Aggregate = {
  __typename?: 'transaction_aggregate';
  aggregate?: Maybe<Transaction_Aggregate_Fields>;
  nodes: Array<Transaction>;
};

/** aggregate fields of "transaction" */
export type Transaction_Aggregate_Fields = {
  __typename?: 'transaction_aggregate_fields';
  avg?: Maybe<Transaction_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Transaction_Max_Fields>;
  min?: Maybe<Transaction_Min_Fields>;
  stddev?: Maybe<Transaction_Stddev_Fields>;
  stddev_pop?: Maybe<Transaction_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Transaction_Stddev_Samp_Fields>;
  sum?: Maybe<Transaction_Sum_Fields>;
  var_pop?: Maybe<Transaction_Var_Pop_Fields>;
  var_samp?: Maybe<Transaction_Var_Samp_Fields>;
  variance?: Maybe<Transaction_Variance_Fields>;
};


/** aggregate fields of "transaction" */
export type Transaction_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Transaction_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "transaction" */
export type Transaction_Aggregate_Order_By = {
  avg?: InputMaybe<Transaction_Avg_Order_By>;
  count?: InputMaybe<Order_By>;
  max?: InputMaybe<Transaction_Max_Order_By>;
  min?: InputMaybe<Transaction_Min_Order_By>;
  stddev?: InputMaybe<Transaction_Stddev_Order_By>;
  stddev_pop?: InputMaybe<Transaction_Stddev_Pop_Order_By>;
  stddev_samp?: InputMaybe<Transaction_Stddev_Samp_Order_By>;
  sum?: InputMaybe<Transaction_Sum_Order_By>;
  var_pop?: InputMaybe<Transaction_Var_Pop_Order_By>;
  var_samp?: InputMaybe<Transaction_Var_Samp_Order_By>;
  variance?: InputMaybe<Transaction_Variance_Order_By>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Transaction_Append_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "transaction" */
export type Transaction_Arr_Rel_Insert_Input = {
  data: Array<Transaction_Insert_Input>;
  /** on conflict condition */
  on_conflict?: InputMaybe<Transaction_On_Conflict>;
};

/** aggregate avg on columns */
export type Transaction_Avg_Fields = {
  __typename?: 'transaction_avg_fields';
  account_id?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  counterparty_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  scheduled_payout_id?: Maybe<Scalars['Float']>;
  trade_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "transaction" */
export type Transaction_Avg_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  counterparty_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  scheduled_payout_id?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** Boolean expression to filter rows from the table "transaction". All fields are combined with a logical 'AND'. */
export type Transaction_Bool_Exp = {
  _and?: InputMaybe<Array<Transaction_Bool_Exp>>;
  _not?: InputMaybe<Transaction_Bool_Exp>;
  _or?: InputMaybe<Array<Transaction_Bool_Exp>>;
  account?: InputMaybe<Account_Bool_Exp>;
  account_id?: InputMaybe<Int_Comparison_Exp>;
  amount?: InputMaybe<Numeric_Comparison_Exp>;
  counterparty_account?: InputMaybe<Account_Bool_Exp>;
  counterparty_id?: InputMaybe<Int_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Int_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_by?: InputMaybe<Int_Comparison_Exp>;
  failure_reason?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  metadata?: InputMaybe<Jsonb_Comparison_Exp>;
  scheduled_payout?: InputMaybe<Scheduled_Payout_Bool_Exp>;
  scheduled_payout_id?: InputMaybe<Int_Comparison_Exp>;
  timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  trade?: InputMaybe<Trade_Bool_Exp>;
  trade_id?: InputMaybe<Int_Comparison_Exp>;
  transaction_method?: InputMaybe<String_Comparison_Exp>;
  transaction_method_id?: InputMaybe<String_Comparison_Exp>;
  transaction_status?: InputMaybe<String_Comparison_Exp>;
  transaction_type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  updated_by?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "transaction" */
export enum Transaction_Constraint {
  /** unique or primary key constraint */
  TransactionPkey = 'transaction_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Transaction_Delete_At_Path_Input = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Transaction_Delete_Elem_Input = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Transaction_Delete_Key_Input = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "transaction" */
export type Transaction_Inc_Input = {
  account_id?: InputMaybe<Scalars['Int']>;
  amount?: InputMaybe<Scalars['numeric']>;
  counterparty_id?: InputMaybe<Scalars['Int']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
  scheduled_payout_id?: InputMaybe<Scalars['Int']>;
  trade_id?: InputMaybe<Scalars['Int']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "transaction" */
export type Transaction_Insert_Input = {
  account?: InputMaybe<Account_Obj_Rel_Insert_Input>;
  account_id?: InputMaybe<Scalars['Int']>;
  amount?: InputMaybe<Scalars['numeric']>;
  counterparty_account?: InputMaybe<Account_Obj_Rel_Insert_Input>;
  counterparty_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  failure_reason?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  scheduled_payout?: InputMaybe<Scheduled_Payout_Obj_Rel_Insert_Input>;
  scheduled_payout_id?: InputMaybe<Scalars['Int']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  trade?: InputMaybe<Trade_Obj_Rel_Insert_Input>;
  trade_id?: InputMaybe<Scalars['Int']>;
  transaction_method?: InputMaybe<Scalars['String']>;
  transaction_method_id?: InputMaybe<Scalars['String']>;
  transaction_status?: InputMaybe<Scalars['String']>;
  transaction_type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Transaction_Max_Fields = {
  __typename?: 'transaction_max_fields';
  account_id?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['numeric']>;
  counterparty_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  failure_reason?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  scheduled_payout_id?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  trade_id?: Maybe<Scalars['Int']>;
  transaction_method?: Maybe<Scalars['String']>;
  transaction_method_id?: Maybe<Scalars['String']>;
  transaction_status?: Maybe<Scalars['String']>;
  transaction_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** order by max() on columns of table "transaction" */
export type Transaction_Max_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  counterparty_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  failure_reason?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  scheduled_payout_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  transaction_method?: InputMaybe<Order_By>;
  transaction_method_id?: InputMaybe<Order_By>;
  transaction_status?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate min on columns */
export type Transaction_Min_Fields = {
  __typename?: 'transaction_min_fields';
  account_id?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['numeric']>;
  counterparty_id?: Maybe<Scalars['Int']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  deleted_by?: Maybe<Scalars['Int']>;
  failure_reason?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  scheduled_payout_id?: Maybe<Scalars['Int']>;
  timestamp?: Maybe<Scalars['timestamptz']>;
  trade_id?: Maybe<Scalars['Int']>;
  transaction_method?: Maybe<Scalars['String']>;
  transaction_method_id?: Maybe<Scalars['String']>;
  transaction_status?: Maybe<Scalars['String']>;
  transaction_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** order by min() on columns of table "transaction" */
export type Transaction_Min_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  counterparty_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  failure_reason?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  scheduled_payout_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  transaction_method?: InputMaybe<Order_By>;
  transaction_method_id?: InputMaybe<Order_By>;
  transaction_status?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** response of any mutation on the table "transaction" */
export type Transaction_Mutation_Response = {
  __typename?: 'transaction_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Transaction>;
};

/** on conflict condition type for table "transaction" */
export type Transaction_On_Conflict = {
  constraint: Transaction_Constraint;
  update_columns?: Array<Transaction_Update_Column>;
  where?: InputMaybe<Transaction_Bool_Exp>;
};

/** Ordering options when selecting data from "transaction". */
export type Transaction_Order_By = {
  account?: InputMaybe<Account_Order_By>;
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  counterparty_account?: InputMaybe<Account_Order_By>;
  counterparty_id?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  failure_reason?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  metadata?: InputMaybe<Order_By>;
  scheduled_payout?: InputMaybe<Scheduled_Payout_Order_By>;
  scheduled_payout_id?: InputMaybe<Order_By>;
  timestamp?: InputMaybe<Order_By>;
  trade?: InputMaybe<Trade_Order_By>;
  trade_id?: InputMaybe<Order_By>;
  transaction_method?: InputMaybe<Order_By>;
  transaction_method_id?: InputMaybe<Order_By>;
  transaction_status?: InputMaybe<Order_By>;
  transaction_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** primary key columns input for table: transaction */
export type Transaction_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Transaction_Prepend_Input = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "transaction" */
export enum Transaction_Select_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Amount = 'amount',
  /** column name */
  CounterpartyId = 'counterparty_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  FailureReason = 'failure_reason',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  ScheduledPayoutId = 'scheduled_payout_id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TradeId = 'trade_id',
  /** column name */
  TransactionMethod = 'transaction_method',
  /** column name */
  TransactionMethodId = 'transaction_method_id',
  /** column name */
  TransactionStatus = 'transaction_status',
  /** column name */
  TransactionType = 'transaction_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** input type for updating data in table "transaction" */
export type Transaction_Set_Input = {
  account_id?: InputMaybe<Scalars['Int']>;
  amount?: InputMaybe<Scalars['numeric']>;
  counterparty_id?: InputMaybe<Scalars['Int']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_by?: InputMaybe<Scalars['Int']>;
  failure_reason?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  scheduled_payout_id?: InputMaybe<Scalars['Int']>;
  timestamp?: InputMaybe<Scalars['timestamptz']>;
  trade_id?: InputMaybe<Scalars['Int']>;
  transaction_method?: InputMaybe<Scalars['String']>;
  transaction_method_id?: InputMaybe<Scalars['String']>;
  transaction_status?: InputMaybe<Scalars['String']>;
  transaction_type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  updated_by?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Transaction_Stddev_Fields = {
  __typename?: 'transaction_stddev_fields';
  account_id?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  counterparty_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  scheduled_payout_id?: Maybe<Scalars['Float']>;
  trade_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "transaction" */
export type Transaction_Stddev_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  counterparty_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  scheduled_payout_id?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate stddev_pop on columns */
export type Transaction_Stddev_Pop_Fields = {
  __typename?: 'transaction_stddev_pop_fields';
  account_id?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  counterparty_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  scheduled_payout_id?: Maybe<Scalars['Float']>;
  trade_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "transaction" */
export type Transaction_Stddev_Pop_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  counterparty_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  scheduled_payout_id?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate stddev_samp on columns */
export type Transaction_Stddev_Samp_Fields = {
  __typename?: 'transaction_stddev_samp_fields';
  account_id?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  counterparty_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  scheduled_payout_id?: Maybe<Scalars['Float']>;
  trade_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "transaction" */
export type Transaction_Stddev_Samp_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  counterparty_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  scheduled_payout_id?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate sum on columns */
export type Transaction_Sum_Fields = {
  __typename?: 'transaction_sum_fields';
  account_id?: Maybe<Scalars['Int']>;
  amount?: Maybe<Scalars['numeric']>;
  counterparty_id?: Maybe<Scalars['Int']>;
  created_by?: Maybe<Scalars['Int']>;
  deleted_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
  scheduled_payout_id?: Maybe<Scalars['Int']>;
  trade_id?: Maybe<Scalars['Int']>;
  updated_by?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "transaction" */
export type Transaction_Sum_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  counterparty_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  scheduled_payout_id?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** update columns of table "transaction" */
export enum Transaction_Update_Column {
  /** column name */
  AccountId = 'account_id',
  /** column name */
  Amount = 'amount',
  /** column name */
  CounterpartyId = 'counterparty_id',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  DeletedBy = 'deleted_by',
  /** column name */
  FailureReason = 'failure_reason',
  /** column name */
  Id = 'id',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  ScheduledPayoutId = 'scheduled_payout_id',
  /** column name */
  Timestamp = 'timestamp',
  /** column name */
  TradeId = 'trade_id',
  /** column name */
  TransactionMethod = 'transaction_method',
  /** column name */
  TransactionMethodId = 'transaction_method_id',
  /** column name */
  TransactionStatus = 'transaction_status',
  /** column name */
  TransactionType = 'transaction_type',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UpdatedBy = 'updated_by'
}

/** aggregate var_pop on columns */
export type Transaction_Var_Pop_Fields = {
  __typename?: 'transaction_var_pop_fields';
  account_id?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  counterparty_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  scheduled_payout_id?: Maybe<Scalars['Float']>;
  trade_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "transaction" */
export type Transaction_Var_Pop_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  counterparty_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  scheduled_payout_id?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate var_samp on columns */
export type Transaction_Var_Samp_Fields = {
  __typename?: 'transaction_var_samp_fields';
  account_id?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  counterparty_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  scheduled_payout_id?: Maybe<Scalars['Float']>;
  trade_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "transaction" */
export type Transaction_Var_Samp_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  counterparty_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  scheduled_payout_id?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** aggregate variance on columns */
export type Transaction_Variance_Fields = {
  __typename?: 'transaction_variance_fields';
  account_id?: Maybe<Scalars['Float']>;
  amount?: Maybe<Scalars['Float']>;
  counterparty_id?: Maybe<Scalars['Float']>;
  created_by?: Maybe<Scalars['Float']>;
  deleted_by?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
  scheduled_payout_id?: Maybe<Scalars['Float']>;
  trade_id?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "transaction" */
export type Transaction_Variance_Order_By = {
  account_id?: InputMaybe<Order_By>;
  amount?: InputMaybe<Order_By>;
  counterparty_id?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  deleted_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  scheduled_payout_id?: InputMaybe<Order_By>;
  trade_id?: InputMaybe<Order_By>;
  updated_by?: InputMaybe<Order_By>;
};

/** columns and relationships of "updates_log" */
export type Updates_Log = {
  __typename?: 'updates_log';
  created_at: Scalars['timestamptz'];
  created_by: Scalars['Int'];
  id: Scalars['uuid'];
  model_id: Scalars['Int'];
  model_name: Scalars['String'];
  prev_record: Scalars['jsonb'];
};


/** columns and relationships of "updates_log" */
export type Updates_LogPrev_RecordArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "updates_log" */
export type Updates_Log_Aggregate = {
  __typename?: 'updates_log_aggregate';
  aggregate?: Maybe<Updates_Log_Aggregate_Fields>;
  nodes: Array<Updates_Log>;
};

/** aggregate fields of "updates_log" */
export type Updates_Log_Aggregate_Fields = {
  __typename?: 'updates_log_aggregate_fields';
  avg?: Maybe<Updates_Log_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Updates_Log_Max_Fields>;
  min?: Maybe<Updates_Log_Min_Fields>;
  stddev?: Maybe<Updates_Log_Stddev_Fields>;
  stddev_pop?: Maybe<Updates_Log_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Updates_Log_Stddev_Samp_Fields>;
  sum?: Maybe<Updates_Log_Sum_Fields>;
  var_pop?: Maybe<Updates_Log_Var_Pop_Fields>;
  var_samp?: Maybe<Updates_Log_Var_Samp_Fields>;
  variance?: Maybe<Updates_Log_Variance_Fields>;
};


/** aggregate fields of "updates_log" */
export type Updates_Log_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Updates_Log_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Updates_Log_Append_Input = {
  prev_record?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate avg on columns */
export type Updates_Log_Avg_Fields = {
  __typename?: 'updates_log_avg_fields';
  created_by?: Maybe<Scalars['Float']>;
  model_id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "updates_log". All fields are combined with a logical 'AND'. */
export type Updates_Log_Bool_Exp = {
  _and?: InputMaybe<Array<Updates_Log_Bool_Exp>>;
  _not?: InputMaybe<Updates_Log_Bool_Exp>;
  _or?: InputMaybe<Array<Updates_Log_Bool_Exp>>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  created_by?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  model_id?: InputMaybe<Int_Comparison_Exp>;
  model_name?: InputMaybe<String_Comparison_Exp>;
  prev_record?: InputMaybe<Jsonb_Comparison_Exp>;
};

/** unique or primary key constraints on table "updates_log" */
export enum Updates_Log_Constraint {
  /** unique or primary key constraint */
  UpdatesLogPkey = 'updates_log_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Updates_Log_Delete_At_Path_Input = {
  prev_record?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Updates_Log_Delete_Elem_Input = {
  prev_record?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Updates_Log_Delete_Key_Input = {
  prev_record?: InputMaybe<Scalars['String']>;
};

/** input type for incrementing numeric columns in table "updates_log" */
export type Updates_Log_Inc_Input = {
  created_by?: InputMaybe<Scalars['Int']>;
  model_id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "updates_log" */
export type Updates_Log_Insert_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  model_id?: InputMaybe<Scalars['Int']>;
  model_name?: InputMaybe<Scalars['String']>;
  prev_record?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type Updates_Log_Max_Fields = {
  __typename?: 'updates_log_max_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  model_id?: Maybe<Scalars['Int']>;
  model_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Updates_Log_Min_Fields = {
  __typename?: 'updates_log_min_fields';
  created_at?: Maybe<Scalars['timestamptz']>;
  created_by?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['uuid']>;
  model_id?: Maybe<Scalars['Int']>;
  model_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "updates_log" */
export type Updates_Log_Mutation_Response = {
  __typename?: 'updates_log_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Updates_Log>;
};

/** on conflict condition type for table "updates_log" */
export type Updates_Log_On_Conflict = {
  constraint: Updates_Log_Constraint;
  update_columns?: Array<Updates_Log_Update_Column>;
  where?: InputMaybe<Updates_Log_Bool_Exp>;
};

/** Ordering options when selecting data from "updates_log". */
export type Updates_Log_Order_By = {
  created_at?: InputMaybe<Order_By>;
  created_by?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  model_id?: InputMaybe<Order_By>;
  model_name?: InputMaybe<Order_By>;
  prev_record?: InputMaybe<Order_By>;
};

/** primary key columns input for table: updates_log */
export type Updates_Log_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Updates_Log_Prepend_Input = {
  prev_record?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "updates_log" */
export enum Updates_Log_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  ModelId = 'model_id',
  /** column name */
  ModelName = 'model_name',
  /** column name */
  PrevRecord = 'prev_record'
}

/** input type for updating data in table "updates_log" */
export type Updates_Log_Set_Input = {
  created_at?: InputMaybe<Scalars['timestamptz']>;
  created_by?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['uuid']>;
  model_id?: InputMaybe<Scalars['Int']>;
  model_name?: InputMaybe<Scalars['String']>;
  prev_record?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate stddev on columns */
export type Updates_Log_Stddev_Fields = {
  __typename?: 'updates_log_stddev_fields';
  created_by?: Maybe<Scalars['Float']>;
  model_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Updates_Log_Stddev_Pop_Fields = {
  __typename?: 'updates_log_stddev_pop_fields';
  created_by?: Maybe<Scalars['Float']>;
  model_id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Updates_Log_Stddev_Samp_Fields = {
  __typename?: 'updates_log_stddev_samp_fields';
  created_by?: Maybe<Scalars['Float']>;
  model_id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Updates_Log_Sum_Fields = {
  __typename?: 'updates_log_sum_fields';
  created_by?: Maybe<Scalars['Int']>;
  model_id?: Maybe<Scalars['Int']>;
};

/** update columns of table "updates_log" */
export enum Updates_Log_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  CreatedBy = 'created_by',
  /** column name */
  Id = 'id',
  /** column name */
  ModelId = 'model_id',
  /** column name */
  ModelName = 'model_name',
  /** column name */
  PrevRecord = 'prev_record'
}

/** aggregate var_pop on columns */
export type Updates_Log_Var_Pop_Fields = {
  __typename?: 'updates_log_var_pop_fields';
  created_by?: Maybe<Scalars['Float']>;
  model_id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Updates_Log_Var_Samp_Fields = {
  __typename?: 'updates_log_var_samp_fields';
  created_by?: Maybe<Scalars['Float']>;
  model_id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Updates_Log_Variance_Fields = {
  __typename?: 'updates_log_variance_fields';
  created_by?: Maybe<Scalars['Float']>;
  model_id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "user" */
export type User = {
  __typename?: 'user';
  auth_provider_id: Scalars['String'];
  country_code: Scalars['String'];
  created_at: Scalars['timestamptz'];
  deleted_at?: Maybe<Scalars['timestamptz']>;
  designation?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  first_name: Scalars['String'];
  id: Scalars['Int'];
  last_name: Scalars['String'];
  mobile_number: Scalars['String'];
  status: Scalars['String'];
  tenant_type: Scalars['String'];
  updated_at: Scalars['timestamptz'];
};

/** aggregated selection of "user" */
export type User_Aggregate = {
  __typename?: 'user_aggregate';
  aggregate?: Maybe<User_Aggregate_Fields>;
  nodes: Array<User>;
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
  __typename?: 'user_aggregate_fields';
  avg?: Maybe<User_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<User_Max_Fields>;
  min?: Maybe<User_Min_Fields>;
  stddev?: Maybe<User_Stddev_Fields>;
  stddev_pop?: Maybe<User_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<User_Stddev_Samp_Fields>;
  sum?: Maybe<User_Sum_Fields>;
  var_pop?: Maybe<User_Var_Pop_Fields>;
  var_samp?: Maybe<User_Var_Samp_Fields>;
  variance?: Maybe<User_Variance_Fields>;
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<User_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type User_Avg_Fields = {
  __typename?: 'user_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: InputMaybe<Array<User_Bool_Exp>>;
  _not?: InputMaybe<User_Bool_Exp>;
  _or?: InputMaybe<Array<User_Bool_Exp>>;
  auth_provider_id?: InputMaybe<String_Comparison_Exp>;
  country_code?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  deleted_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  designation?: InputMaybe<String_Comparison_Exp>;
  email?: InputMaybe<String_Comparison_Exp>;
  first_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  last_name?: InputMaybe<String_Comparison_Exp>;
  mobile_number?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
  tenant_type?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserAuthProviderIdIdx = 'user_auth_provider_id_idx',
  /** unique or primary key constraint */
  UserPkey = 'user_pkey',
  /** unique or primary key constraint */
  UserTenantTypeEmailIdx = 'user_tenant_type_email_idx'
}

/** input type for incrementing numeric columns in table "user" */
export type User_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  auth_provider_id?: InputMaybe<Scalars['String']>;
  country_code?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  designation?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  last_name?: InputMaybe<Scalars['String']>;
  mobile_number?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  tenant_type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type User_Max_Fields = {
  __typename?: 'user_max_fields';
  auth_provider_id?: Maybe<Scalars['String']>;
  country_code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  designation?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  mobile_number?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  tenant_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type User_Min_Fields = {
  __typename?: 'user_min_fields';
  auth_provider_id?: Maybe<Scalars['String']>;
  country_code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  deleted_at?: Maybe<Scalars['timestamptz']>;
  designation?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  last_name?: Maybe<Scalars['String']>;
  mobile_number?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
  tenant_type?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
  __typename?: 'user_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<User>;
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input;
  /** on conflict condition */
  on_conflict?: InputMaybe<User_On_Conflict>;
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint;
  update_columns?: Array<User_Update_Column>;
  where?: InputMaybe<User_Bool_Exp>;
};

/** Ordering options when selecting data from "user". */
export type User_Order_By = {
  auth_provider_id?: InputMaybe<Order_By>;
  country_code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  deleted_at?: InputMaybe<Order_By>;
  designation?: InputMaybe<Order_By>;
  email?: InputMaybe<Order_By>;
  first_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  last_name?: InputMaybe<Order_By>;
  mobile_number?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
  tenant_type?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
};

/** primary key columns input for table: user */
export type User_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  AuthProviderId = 'auth_provider_id',
  /** column name */
  CountryCode = 'country_code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Designation = 'designation',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  MobileNumber = 'mobile_number',
  /** column name */
  Status = 'status',
  /** column name */
  TenantType = 'tenant_type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  auth_provider_id?: InputMaybe<Scalars['String']>;
  country_code?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  deleted_at?: InputMaybe<Scalars['timestamptz']>;
  designation?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['String']>;
  first_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  last_name?: InputMaybe<Scalars['String']>;
  mobile_number?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
  tenant_type?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type User_Stddev_Fields = {
  __typename?: 'user_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type User_Stddev_Pop_Fields = {
  __typename?: 'user_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type User_Stddev_Samp_Fields = {
  __typename?: 'user_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type User_Sum_Fields = {
  __typename?: 'user_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  AuthProviderId = 'auth_provider_id',
  /** column name */
  CountryCode = 'country_code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  DeletedAt = 'deleted_at',
  /** column name */
  Designation = 'designation',
  /** column name */
  Email = 'email',
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  LastName = 'last_name',
  /** column name */
  MobileNumber = 'mobile_number',
  /** column name */
  Status = 'status',
  /** column name */
  TenantType = 'tenant_type',
  /** column name */
  UpdatedAt = 'updated_at'
}

/** aggregate var_pop on columns */
export type User_Var_Pop_Fields = {
  __typename?: 'user_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type User_Var_Samp_Fields = {
  __typename?: 'user_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type User_Variance_Fields = {
  __typename?: 'user_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "verification_code" */
export type Verification_Code = {
  __typename?: 'verification_code';
  auth_provider_id: Scalars['String'];
  code: Scalars['String'];
  created_at: Scalars['timestamptz'];
  expiry: Scalars['Int'];
  id: Scalars['Int'];
};

/** aggregated selection of "verification_code" */
export type Verification_Code_Aggregate = {
  __typename?: 'verification_code_aggregate';
  aggregate?: Maybe<Verification_Code_Aggregate_Fields>;
  nodes: Array<Verification_Code>;
};

/** aggregate fields of "verification_code" */
export type Verification_Code_Aggregate_Fields = {
  __typename?: 'verification_code_aggregate_fields';
  avg?: Maybe<Verification_Code_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Verification_Code_Max_Fields>;
  min?: Maybe<Verification_Code_Min_Fields>;
  stddev?: Maybe<Verification_Code_Stddev_Fields>;
  stddev_pop?: Maybe<Verification_Code_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Verification_Code_Stddev_Samp_Fields>;
  sum?: Maybe<Verification_Code_Sum_Fields>;
  var_pop?: Maybe<Verification_Code_Var_Pop_Fields>;
  var_samp?: Maybe<Verification_Code_Var_Samp_Fields>;
  variance?: Maybe<Verification_Code_Variance_Fields>;
};


/** aggregate fields of "verification_code" */
export type Verification_Code_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Verification_Code_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Verification_Code_Avg_Fields = {
  __typename?: 'verification_code_avg_fields';
  expiry?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "verification_code". All fields are combined with a logical 'AND'. */
export type Verification_Code_Bool_Exp = {
  _and?: InputMaybe<Array<Verification_Code_Bool_Exp>>;
  _not?: InputMaybe<Verification_Code_Bool_Exp>;
  _or?: InputMaybe<Array<Verification_Code_Bool_Exp>>;
  auth_provider_id?: InputMaybe<String_Comparison_Exp>;
  code?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  expiry?: InputMaybe<Int_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
};

/** unique or primary key constraints on table "verification_code" */
export enum Verification_Code_Constraint {
  /** unique or primary key constraint */
  VerificationCodePkey = 'verification_code_pkey'
}

/** input type for incrementing numeric columns in table "verification_code" */
export type Verification_Code_Inc_Input = {
  expiry?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "verification_code" */
export type Verification_Code_Insert_Input = {
  auth_provider_id?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expiry?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type Verification_Code_Max_Fields = {
  __typename?: 'verification_code_max_fields';
  auth_provider_id?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expiry?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type Verification_Code_Min_Fields = {
  __typename?: 'verification_code_min_fields';
  auth_provider_id?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  expiry?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "verification_code" */
export type Verification_Code_Mutation_Response = {
  __typename?: 'verification_code_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Verification_Code>;
};

/** on conflict condition type for table "verification_code" */
export type Verification_Code_On_Conflict = {
  constraint: Verification_Code_Constraint;
  update_columns?: Array<Verification_Code_Update_Column>;
  where?: InputMaybe<Verification_Code_Bool_Exp>;
};

/** Ordering options when selecting data from "verification_code". */
export type Verification_Code_Order_By = {
  auth_provider_id?: InputMaybe<Order_By>;
  code?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  expiry?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
};

/** primary key columns input for table: verification_code */
export type Verification_Code_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "verification_code" */
export enum Verification_Code_Select_Column {
  /** column name */
  AuthProviderId = 'auth_provider_id',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expiry = 'expiry',
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "verification_code" */
export type Verification_Code_Set_Input = {
  auth_provider_id?: InputMaybe<Scalars['String']>;
  code?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  expiry?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type Verification_Code_Stddev_Fields = {
  __typename?: 'verification_code_stddev_fields';
  expiry?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Verification_Code_Stddev_Pop_Fields = {
  __typename?: 'verification_code_stddev_pop_fields';
  expiry?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Verification_Code_Stddev_Samp_Fields = {
  __typename?: 'verification_code_stddev_samp_fields';
  expiry?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Verification_Code_Sum_Fields = {
  __typename?: 'verification_code_sum_fields';
  expiry?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "verification_code" */
export enum Verification_Code_Update_Column {
  /** column name */
  AuthProviderId = 'auth_provider_id',
  /** column name */
  Code = 'code',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Expiry = 'expiry',
  /** column name */
  Id = 'id'
}

/** aggregate var_pop on columns */
export type Verification_Code_Var_Pop_Fields = {
  __typename?: 'verification_code_var_pop_fields';
  expiry?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Verification_Code_Var_Samp_Fields = {
  __typename?: 'verification_code_var_samp_fields';
  expiry?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Verification_Code_Variance_Fields = {
  __typename?: 'verification_code_variance_fields';
  expiry?: Maybe<Scalars['Float']>;
  id?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "webhook_events" */
export type Webhook_Events = {
  __typename?: 'webhook_events';
  event_name: Scalars['String'];
  id: Scalars['uuid'];
  payload: Scalars['jsonb'];
  received_timestamp: Scalars['timestamptz'];
  source: Scalars['String'];
  status: Scalars['String'];
};


/** columns and relationships of "webhook_events" */
export type Webhook_EventsPayloadArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "webhook_events" */
export type Webhook_Events_Aggregate = {
  __typename?: 'webhook_events_aggregate';
  aggregate?: Maybe<Webhook_Events_Aggregate_Fields>;
  nodes: Array<Webhook_Events>;
};

/** aggregate fields of "webhook_events" */
export type Webhook_Events_Aggregate_Fields = {
  __typename?: 'webhook_events_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Webhook_Events_Max_Fields>;
  min?: Maybe<Webhook_Events_Min_Fields>;
};


/** aggregate fields of "webhook_events" */
export type Webhook_Events_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Webhook_Events_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type Webhook_Events_Append_Input = {
  payload?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "webhook_events". All fields are combined with a logical 'AND'. */
export type Webhook_Events_Bool_Exp = {
  _and?: InputMaybe<Array<Webhook_Events_Bool_Exp>>;
  _not?: InputMaybe<Webhook_Events_Bool_Exp>;
  _or?: InputMaybe<Array<Webhook_Events_Bool_Exp>>;
  event_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  payload?: InputMaybe<Jsonb_Comparison_Exp>;
  received_timestamp?: InputMaybe<Timestamptz_Comparison_Exp>;
  source?: InputMaybe<String_Comparison_Exp>;
  status?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "webhook_events" */
export enum Webhook_Events_Constraint {
  /** unique or primary key constraint */
  WebhookEventsPkey = 'webhook_events_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type Webhook_Events_Delete_At_Path_Input = {
  payload?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type Webhook_Events_Delete_Elem_Input = {
  payload?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type Webhook_Events_Delete_Key_Input = {
  payload?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "webhook_events" */
export type Webhook_Events_Insert_Input = {
  event_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  payload?: InputMaybe<Scalars['jsonb']>;
  received_timestamp?: InputMaybe<Scalars['timestamptz']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Webhook_Events_Max_Fields = {
  __typename?: 'webhook_events_max_fields';
  event_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  received_timestamp?: Maybe<Scalars['timestamptz']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Webhook_Events_Min_Fields = {
  __typename?: 'webhook_events_min_fields';
  event_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  received_timestamp?: Maybe<Scalars['timestamptz']>;
  source?: Maybe<Scalars['String']>;
  status?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "webhook_events" */
export type Webhook_Events_Mutation_Response = {
  __typename?: 'webhook_events_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Webhook_Events>;
};

/** on conflict condition type for table "webhook_events" */
export type Webhook_Events_On_Conflict = {
  constraint: Webhook_Events_Constraint;
  update_columns?: Array<Webhook_Events_Update_Column>;
  where?: InputMaybe<Webhook_Events_Bool_Exp>;
};

/** Ordering options when selecting data from "webhook_events". */
export type Webhook_Events_Order_By = {
  event_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  payload?: InputMaybe<Order_By>;
  received_timestamp?: InputMaybe<Order_By>;
  source?: InputMaybe<Order_By>;
  status?: InputMaybe<Order_By>;
};

/** primary key columns input for table: webhook_events */
export type Webhook_Events_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type Webhook_Events_Prepend_Input = {
  payload?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "webhook_events" */
export enum Webhook_Events_Select_Column {
  /** column name */
  EventName = 'event_name',
  /** column name */
  Id = 'id',
  /** column name */
  Payload = 'payload',
  /** column name */
  ReceivedTimestamp = 'received_timestamp',
  /** column name */
  Source = 'source',
  /** column name */
  Status = 'status'
}

/** input type for updating data in table "webhook_events" */
export type Webhook_Events_Set_Input = {
  event_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  payload?: InputMaybe<Scalars['jsonb']>;
  received_timestamp?: InputMaybe<Scalars['timestamptz']>;
  source?: InputMaybe<Scalars['String']>;
  status?: InputMaybe<Scalars['String']>;
};

/** update columns of table "webhook_events" */
export enum Webhook_Events_Update_Column {
  /** column name */
  EventName = 'event_name',
  /** column name */
  Id = 'id',
  /** column name */
  Payload = 'payload',
  /** column name */
  ReceivedTimestamp = 'received_timestamp',
  /** column name */
  Source = 'source',
  /** column name */
  Status = 'status'
}

export type Your_Bids_Args = {
  deal_row?: InputMaybe<Scalars['deal_scalar']>;
  hasura_session?: InputMaybe<Scalars['json']>;
};
