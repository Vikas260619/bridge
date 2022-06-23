import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type GetBankListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetBankListQuery = { __typename?: 'query_root', ref_bank: Array<{ __typename?: 'ref_bank', id: number, name: string, bank_code: string, supported_integrations: Array<{ __typename?: 'ref_perfios_bank_list', netbanking: boolean, statement_upload: boolean }> }> };

export type GetBankAccountTypeQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetBankAccountTypeQuery = { __typename?: 'query_root', ref_account_type: Array<{ __typename?: 'ref_account_type', id: string, name: string }> };


export const GetBankListDocument = gql`
    query getBankList {
  ref_bank {
    id
    name
    bank_code
    supported_integrations {
      netbanking
      statement_upload
    }
  }
}
    `;

/**
 * __useGetBankListQuery__
 *
 * To run a query within a React component, call `useGetBankListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBankListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBankListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBankListQuery(baseOptions?: Apollo.QueryHookOptions<GetBankListQuery, GetBankListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBankListQuery, GetBankListQueryVariables>(GetBankListDocument, options);
      }
export function useGetBankListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBankListQuery, GetBankListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBankListQuery, GetBankListQueryVariables>(GetBankListDocument, options);
        }
export type GetBankListQueryHookResult = ReturnType<typeof useGetBankListQuery>;
export type GetBankListLazyQueryHookResult = ReturnType<typeof useGetBankListLazyQuery>;
export type GetBankListQueryResult = Apollo.QueryResult<GetBankListQuery, GetBankListQueryVariables>;
export const GetBankAccountTypeDocument = gql`
    query getBankAccountType {
  ref_account_type {
    id
    name
  }
}
    `;

/**
 * __useGetBankAccountTypeQuery__
 *
 * To run a query within a React component, call `useGetBankAccountTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBankAccountTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBankAccountTypeQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetBankAccountTypeQuery(baseOptions?: Apollo.QueryHookOptions<GetBankAccountTypeQuery, GetBankAccountTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBankAccountTypeQuery, GetBankAccountTypeQueryVariables>(GetBankAccountTypeDocument, options);
      }
export function useGetBankAccountTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBankAccountTypeQuery, GetBankAccountTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBankAccountTypeQuery, GetBankAccountTypeQueryVariables>(GetBankAccountTypeDocument, options);
        }
export type GetBankAccountTypeQueryHookResult = ReturnType<typeof useGetBankAccountTypeQuery>;
export type GetBankAccountTypeLazyQueryHookResult = ReturnType<typeof useGetBankAccountTypeLazyQuery>;
export type GetBankAccountTypeQueryResult = Apollo.QueryResult<GetBankAccountTypeQuery, GetBankAccountTypeQueryVariables>;
export const namedOperations = {
  Query: {
    getBankList: 'getBankList',
    getBankAccountType: 'getBankAccountType'
  }
}