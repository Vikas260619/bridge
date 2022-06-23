import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type SellUserInitQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type SellUserInitQuery = { __typename?: 'query_root', company_user: Array<{ __typename?: 'company_user', user: { __typename?: 'user', id: number, first_name: string, last_name: string }, company: { __typename?: 'company', id: number, name: string, status: string } }> };


export const SellUserInitDocument = gql`
    query SellUserInit {
  company_user {
    user {
      id
      first_name
      last_name
    }
    company {
      id
      name
      status
    }
  }
}
    `;

/**
 * __useSellUserInitQuery__
 *
 * To run a query within a React component, call `useSellUserInitQuery` and pass it any options that fit your needs.
 * When your component renders, `useSellUserInitQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSellUserInitQuery({
 *   variables: {
 *   },
 * });
 */
export function useSellUserInitQuery(baseOptions?: Apollo.QueryHookOptions<SellUserInitQuery, SellUserInitQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SellUserInitQuery, SellUserInitQueryVariables>(SellUserInitDocument, options);
      }
export function useSellUserInitLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SellUserInitQuery, SellUserInitQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SellUserInitQuery, SellUserInitQueryVariables>(SellUserInitDocument, options);
        }
export type SellUserInitQueryHookResult = ReturnType<typeof useSellUserInitQuery>;
export type SellUserInitLazyQueryHookResult = ReturnType<typeof useSellUserInitLazyQuery>;
export type SellUserInitQueryResult = Apollo.QueryResult<SellUserInitQuery, SellUserInitQueryVariables>;
export const namedOperations = {
  Query: {
    SellUserInit: 'SellUserInit'
  }
}