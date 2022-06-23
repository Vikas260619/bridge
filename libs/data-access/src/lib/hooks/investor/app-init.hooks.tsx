import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type BuyUserInitQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type BuyUserInitQuery = { __typename?: 'query_root', investor_user: Array<{ __typename?: 'investor_user', user: { __typename?: 'user', id: number, first_name: string, last_name: string }, investor: { __typename?: 'investor', id: number, name: string, status: string } }> };


export const BuyUserInitDocument = gql`
    query BuyUserInit {
  investor_user {
    user {
      id
      first_name
      last_name
    }
    investor {
      id
      name
      status
    }
  }
}
    `;

/**
 * __useBuyUserInitQuery__
 *
 * To run a query within a React component, call `useBuyUserInitQuery` and pass it any options that fit your needs.
 * When your component renders, `useBuyUserInitQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBuyUserInitQuery({
 *   variables: {
 *   },
 * });
 */
export function useBuyUserInitQuery(baseOptions?: Apollo.QueryHookOptions<BuyUserInitQuery, BuyUserInitQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BuyUserInitQuery, BuyUserInitQueryVariables>(BuyUserInitDocument, options);
      }
export function useBuyUserInitLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BuyUserInitQuery, BuyUserInitQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BuyUserInitQuery, BuyUserInitQueryVariables>(BuyUserInitDocument, options);
        }
export type BuyUserInitQueryHookResult = ReturnType<typeof useBuyUserInitQuery>;
export type BuyUserInitLazyQueryHookResult = ReturnType<typeof useBuyUserInitLazyQuery>;
export type BuyUserInitQueryResult = Apollo.QueryResult<BuyUserInitQuery, BuyUserInitQueryVariables>;
export const namedOperations = {
  Query: {
    BuyUserInit: 'BuyUserInit'
  }
}