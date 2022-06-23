import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type GetCompanyPrimaryAccountQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCompanyPrimaryAccountQuery = { __typename?: 'query_root', account: Array<{ __typename?: 'account', id: number, name: string, account_no: string, ref_bank: { __typename?: 'ref_bank', name: string, bank_code: string, id: number } }> };


export const GetCompanyPrimaryAccountDocument = gql`
    query getCompanyPrimaryAccount {
  account(where: {is_primary: {_eq: true}}) {
    id
    name
    account_no
    ref_bank {
      name
      bank_code
      id
    }
  }
}
    `;

/**
 * __useGetCompanyPrimaryAccountQuery__
 *
 * To run a query within a React component, call `useGetCompanyPrimaryAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompanyPrimaryAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompanyPrimaryAccountQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCompanyPrimaryAccountQuery(baseOptions?: Apollo.QueryHookOptions<GetCompanyPrimaryAccountQuery, GetCompanyPrimaryAccountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompanyPrimaryAccountQuery, GetCompanyPrimaryAccountQueryVariables>(GetCompanyPrimaryAccountDocument, options);
      }
export function useGetCompanyPrimaryAccountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompanyPrimaryAccountQuery, GetCompanyPrimaryAccountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompanyPrimaryAccountQuery, GetCompanyPrimaryAccountQueryVariables>(GetCompanyPrimaryAccountDocument, options);
        }
export type GetCompanyPrimaryAccountQueryHookResult = ReturnType<typeof useGetCompanyPrimaryAccountQuery>;
export type GetCompanyPrimaryAccountLazyQueryHookResult = ReturnType<typeof useGetCompanyPrimaryAccountLazyQuery>;
export type GetCompanyPrimaryAccountQueryResult = Apollo.QueryResult<GetCompanyPrimaryAccountQuery, GetCompanyPrimaryAccountQueryVariables>;
export const namedOperations = {
  Query: {
    getCompanyPrimaryAccount: 'getCompanyPrimaryAccount'
  }
}