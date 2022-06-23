import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type GenerateFileRegistryUploadUrlMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
  category_id: Types.Scalars['String'];
  content_type?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type GenerateFileRegistryUploadUrlMutation = { __typename?: 'mutation_root', generateFileRegistryUploadURL?: { __typename?: 'GenerateFileRegistryUploadURLOutput', file_registry_id: number, upload_url: string } | null | undefined };

export type GenerateFileDownloadUrlQueryVariables = Types.Exact<{
  fileId: Types.Scalars['Int'];
}>;


export type GenerateFileDownloadUrlQuery = { __typename?: 'query_root', generateFileRegistryDownloadURL?: { __typename?: 'GenerateFileRegistryDownloadURLOutput', download_url: string } | null | undefined };

export type SubscriptionCsvMutationVariables = Types.Exact<{
  file_id: Types.Scalars['Int'];
  isReplaceSub: Types.Scalars['Boolean'];
  modelName: Types.DeletableModel;
  where: Types.Scalars['jsonb'];
}>;


export type SubscriptionCsvMutation = { __typename?: 'mutation_root', delete?: { __typename?: 'DeleteOutput', message: string } | null | undefined, subscriptionCSVUpload?: { __typename?: 'SubscriptionCSVUploadOutput', message: string } | null | undefined };

export type SubscriptionCsvUploadMutationVariables = Types.Exact<{
  file_id: Types.Scalars['Int'];
}>;


export type SubscriptionCsvUploadMutation = { __typename?: 'mutation_root', subscriptionCSVUpload?: { __typename?: 'SubscriptionCSVUploadOutput', message: string } | null | undefined };

export type AccountingExcelUploadMutationVariables = Types.Exact<{
  file_ids?: Types.InputMaybe<Array<Types.Scalars['Int']> | Types.Scalars['Int']>;
}>;


export type AccountingExcelUploadMutation = { __typename?: 'mutation_root', accountingExcelUpload?: { __typename?: 'AccountingExcelUploadOutput', message: string } | null | undefined };

export type FileRegistryUpdatePasswordsMutationVariables = Types.Exact<{
  args?: Types.InputMaybe<Array<Types.FileRegistryUpdatePasswordsInput> | Types.FileRegistryUpdatePasswordsInput>;
}>;


export type FileRegistryUpdatePasswordsMutation = { __typename?: 'mutation_root', fileRegistryUpdatePasswords?: { __typename?: 'fileRegistryUpdatePasswordsOutput', message: string } | null | undefined };

export type BankStatementsUploadMutationVariables = Types.Exact<{
  bankId: Types.Scalars['Int'];
  is_primary: Types.Scalars['Boolean'];
  file_registry_ids: Array<Types.Scalars['Int']> | Types.Scalars['Int'];
  account_type: Types.Scalars['String'];
  sequence: Types.Scalars['Int'];
}>;


export type BankStatementsUploadMutation = { __typename?: 'mutation_root', bankStatementsUpload?: { __typename?: 'BankStatementsUploadOutput', message: string } | null | undefined };


export const GenerateFileRegistryUploadUrlDocument = gql`
    mutation generateFileRegistryUploadURL($name: String!, $category_id: String!, $content_type: String) {
  generateFileRegistryUploadURL(
    args: {name: $name, category_id: $category_id, content_type: $content_type}
  ) {
    file_registry_id
    upload_url
  }
}
    `;
export type GenerateFileRegistryUploadUrlMutationFn = Apollo.MutationFunction<GenerateFileRegistryUploadUrlMutation, GenerateFileRegistryUploadUrlMutationVariables>;

/**
 * __useGenerateFileRegistryUploadUrlMutation__
 *
 * To run a mutation, you first call `useGenerateFileRegistryUploadUrlMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateFileRegistryUploadUrlMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateFileRegistryUploadUrlMutation, { data, loading, error }] = useGenerateFileRegistryUploadUrlMutation({
 *   variables: {
 *      name: // value for 'name'
 *      category_id: // value for 'category_id'
 *      content_type: // value for 'content_type'
 *   },
 * });
 */
export function useGenerateFileRegistryUploadUrlMutation(baseOptions?: Apollo.MutationHookOptions<GenerateFileRegistryUploadUrlMutation, GenerateFileRegistryUploadUrlMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenerateFileRegistryUploadUrlMutation, GenerateFileRegistryUploadUrlMutationVariables>(GenerateFileRegistryUploadUrlDocument, options);
      }
export type GenerateFileRegistryUploadUrlMutationHookResult = ReturnType<typeof useGenerateFileRegistryUploadUrlMutation>;
export type GenerateFileRegistryUploadUrlMutationResult = Apollo.MutationResult<GenerateFileRegistryUploadUrlMutation>;
export type GenerateFileRegistryUploadUrlMutationOptions = Apollo.BaseMutationOptions<GenerateFileRegistryUploadUrlMutation, GenerateFileRegistryUploadUrlMutationVariables>;
export const GenerateFileDownloadUrlDocument = gql`
    query generateFileDownloadUrl($fileId: Int!) {
  generateFileRegistryDownloadURL(args: {file_registry_id: $fileId}) {
    download_url
  }
}
    `;

/**
 * __useGenerateFileDownloadUrlQuery__
 *
 * To run a query within a React component, call `useGenerateFileDownloadUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenerateFileDownloadUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenerateFileDownloadUrlQuery({
 *   variables: {
 *      fileId: // value for 'fileId'
 *   },
 * });
 */
export function useGenerateFileDownloadUrlQuery(baseOptions: Apollo.QueryHookOptions<GenerateFileDownloadUrlQuery, GenerateFileDownloadUrlQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GenerateFileDownloadUrlQuery, GenerateFileDownloadUrlQueryVariables>(GenerateFileDownloadUrlDocument, options);
      }
export function useGenerateFileDownloadUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GenerateFileDownloadUrlQuery, GenerateFileDownloadUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GenerateFileDownloadUrlQuery, GenerateFileDownloadUrlQueryVariables>(GenerateFileDownloadUrlDocument, options);
        }
export type GenerateFileDownloadUrlQueryHookResult = ReturnType<typeof useGenerateFileDownloadUrlQuery>;
export type GenerateFileDownloadUrlLazyQueryHookResult = ReturnType<typeof useGenerateFileDownloadUrlLazyQuery>;
export type GenerateFileDownloadUrlQueryResult = Apollo.QueryResult<GenerateFileDownloadUrlQuery, GenerateFileDownloadUrlQueryVariables>;
export const SubscriptionCsvDocument = gql`
    mutation subscriptionCSV($file_id: Int!, $isReplaceSub: Boolean!, $modelName: DeletableModel!, $where: jsonb!) {
  delete(args: {modelName: $modelName, where: $where}) @skip(if: $isReplaceSub) {
    message
  }
  subscriptionCSVUpload(args: {file_id: $file_id}) {
    message
  }
}
    `;
export type SubscriptionCsvMutationFn = Apollo.MutationFunction<SubscriptionCsvMutation, SubscriptionCsvMutationVariables>;

/**
 * __useSubscriptionCsvMutation__
 *
 * To run a mutation, you first call `useSubscriptionCsvMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubscriptionCsvMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [subscriptionCsvMutation, { data, loading, error }] = useSubscriptionCsvMutation({
 *   variables: {
 *      file_id: // value for 'file_id'
 *      isReplaceSub: // value for 'isReplaceSub'
 *      modelName: // value for 'modelName'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useSubscriptionCsvMutation(baseOptions?: Apollo.MutationHookOptions<SubscriptionCsvMutation, SubscriptionCsvMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubscriptionCsvMutation, SubscriptionCsvMutationVariables>(SubscriptionCsvDocument, options);
      }
export type SubscriptionCsvMutationHookResult = ReturnType<typeof useSubscriptionCsvMutation>;
export type SubscriptionCsvMutationResult = Apollo.MutationResult<SubscriptionCsvMutation>;
export type SubscriptionCsvMutationOptions = Apollo.BaseMutationOptions<SubscriptionCsvMutation, SubscriptionCsvMutationVariables>;
export const SubscriptionCsvUploadDocument = gql`
    mutation subscriptionCSVUpload($file_id: Int!) {
  subscriptionCSVUpload(args: {file_id: $file_id}) {
    message
  }
}
    `;
export type SubscriptionCsvUploadMutationFn = Apollo.MutationFunction<SubscriptionCsvUploadMutation, SubscriptionCsvUploadMutationVariables>;

/**
 * __useSubscriptionCsvUploadMutation__
 *
 * To run a mutation, you first call `useSubscriptionCsvUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubscriptionCsvUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [subscriptionCsvUploadMutation, { data, loading, error }] = useSubscriptionCsvUploadMutation({
 *   variables: {
 *      file_id: // value for 'file_id'
 *   },
 * });
 */
export function useSubscriptionCsvUploadMutation(baseOptions?: Apollo.MutationHookOptions<SubscriptionCsvUploadMutation, SubscriptionCsvUploadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubscriptionCsvUploadMutation, SubscriptionCsvUploadMutationVariables>(SubscriptionCsvUploadDocument, options);
      }
export type SubscriptionCsvUploadMutationHookResult = ReturnType<typeof useSubscriptionCsvUploadMutation>;
export type SubscriptionCsvUploadMutationResult = Apollo.MutationResult<SubscriptionCsvUploadMutation>;
export type SubscriptionCsvUploadMutationOptions = Apollo.BaseMutationOptions<SubscriptionCsvUploadMutation, SubscriptionCsvUploadMutationVariables>;
export const AccountingExcelUploadDocument = gql`
    mutation accountingExcelUpload($file_ids: [Int!]) {
  accountingExcelUpload(args: {file_ids: $file_ids}) {
    message
  }
}
    `;
export type AccountingExcelUploadMutationFn = Apollo.MutationFunction<AccountingExcelUploadMutation, AccountingExcelUploadMutationVariables>;

/**
 * __useAccountingExcelUploadMutation__
 *
 * To run a mutation, you first call `useAccountingExcelUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAccountingExcelUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [accountingExcelUploadMutation, { data, loading, error }] = useAccountingExcelUploadMutation({
 *   variables: {
 *      file_ids: // value for 'file_ids'
 *   },
 * });
 */
export function useAccountingExcelUploadMutation(baseOptions?: Apollo.MutationHookOptions<AccountingExcelUploadMutation, AccountingExcelUploadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AccountingExcelUploadMutation, AccountingExcelUploadMutationVariables>(AccountingExcelUploadDocument, options);
      }
export type AccountingExcelUploadMutationHookResult = ReturnType<typeof useAccountingExcelUploadMutation>;
export type AccountingExcelUploadMutationResult = Apollo.MutationResult<AccountingExcelUploadMutation>;
export type AccountingExcelUploadMutationOptions = Apollo.BaseMutationOptions<AccountingExcelUploadMutation, AccountingExcelUploadMutationVariables>;
export const FileRegistryUpdatePasswordsDocument = gql`
    mutation fileRegistryUpdatePasswords($args: [fileRegistryUpdatePasswordsInput!]) {
  fileRegistryUpdatePasswords(args: $args) {
    message
  }
}
    `;
export type FileRegistryUpdatePasswordsMutationFn = Apollo.MutationFunction<FileRegistryUpdatePasswordsMutation, FileRegistryUpdatePasswordsMutationVariables>;

/**
 * __useFileRegistryUpdatePasswordsMutation__
 *
 * To run a mutation, you first call `useFileRegistryUpdatePasswordsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useFileRegistryUpdatePasswordsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [fileRegistryUpdatePasswordsMutation, { data, loading, error }] = useFileRegistryUpdatePasswordsMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useFileRegistryUpdatePasswordsMutation(baseOptions?: Apollo.MutationHookOptions<FileRegistryUpdatePasswordsMutation, FileRegistryUpdatePasswordsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<FileRegistryUpdatePasswordsMutation, FileRegistryUpdatePasswordsMutationVariables>(FileRegistryUpdatePasswordsDocument, options);
      }
export type FileRegistryUpdatePasswordsMutationHookResult = ReturnType<typeof useFileRegistryUpdatePasswordsMutation>;
export type FileRegistryUpdatePasswordsMutationResult = Apollo.MutationResult<FileRegistryUpdatePasswordsMutation>;
export type FileRegistryUpdatePasswordsMutationOptions = Apollo.BaseMutationOptions<FileRegistryUpdatePasswordsMutation, FileRegistryUpdatePasswordsMutationVariables>;
export const BankStatementsUploadDocument = gql`
    mutation bankStatementsUpload($bankId: Int!, $is_primary: Boolean!, $file_registry_ids: [Int!]!, $account_type: String!, $sequence: Int!) {
  bankStatementsUpload(
    args: {bank_id: $bankId, is_primary: $is_primary, file_registry_ids: $file_registry_ids, account_type: $account_type, sequence: $sequence}
  ) {
    message
  }
}
    `;
export type BankStatementsUploadMutationFn = Apollo.MutationFunction<BankStatementsUploadMutation, BankStatementsUploadMutationVariables>;

/**
 * __useBankStatementsUploadMutation__
 *
 * To run a mutation, you first call `useBankStatementsUploadMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useBankStatementsUploadMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [bankStatementsUploadMutation, { data, loading, error }] = useBankStatementsUploadMutation({
 *   variables: {
 *      bankId: // value for 'bankId'
 *      is_primary: // value for 'is_primary'
 *      file_registry_ids: // value for 'file_registry_ids'
 *      account_type: // value for 'account_type'
 *      sequence: // value for 'sequence'
 *   },
 * });
 */
export function useBankStatementsUploadMutation(baseOptions?: Apollo.MutationHookOptions<BankStatementsUploadMutation, BankStatementsUploadMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<BankStatementsUploadMutation, BankStatementsUploadMutationVariables>(BankStatementsUploadDocument, options);
      }
export type BankStatementsUploadMutationHookResult = ReturnType<typeof useBankStatementsUploadMutation>;
export type BankStatementsUploadMutationResult = Apollo.MutationResult<BankStatementsUploadMutation>;
export type BankStatementsUploadMutationOptions = Apollo.BaseMutationOptions<BankStatementsUploadMutation, BankStatementsUploadMutationVariables>;
export const namedOperations = {
  Query: {
    generateFileDownloadUrl: 'generateFileDownloadUrl'
  },
  Mutation: {
    generateFileRegistryUploadURL: 'generateFileRegistryUploadURL',
    subscriptionCSV: 'subscriptionCSV',
    subscriptionCSVUpload: 'subscriptionCSVUpload',
    accountingExcelUpload: 'accountingExcelUpload',
    fileRegistryUpdatePasswords: 'fileRegistryUpdatePasswords',
    bankStatementsUpload: 'bankStatementsUpload'
  }
}