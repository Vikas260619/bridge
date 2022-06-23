import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type GetLatestTradesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetLatestTradesQuery = { __typename?: 'query_root', trade: Array<{ __typename?: 'trade', created_at: any, id: number, code?: string | null | undefined, state: string, selected_customers_value: any, payout_value: any, bid: { __typename?: 'bid', price: any } }> };


export const GetLatestTradesDocument = gql`
    query getLatestTrades {
  trade(order_by: {created_at: desc}, limit: 5) {
    created_at
    id
    code
    state
    selected_customers_value
    payout_value
    bid {
      price
    }
  }
}
    `;

/**
 * __useGetLatestTradesQuery__
 *
 * To run a query within a React component, call `useGetLatestTradesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetLatestTradesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetLatestTradesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetLatestTradesQuery(baseOptions?: Apollo.QueryHookOptions<GetLatestTradesQuery, GetLatestTradesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetLatestTradesQuery, GetLatestTradesQueryVariables>(GetLatestTradesDocument, options);
      }
export function useGetLatestTradesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetLatestTradesQuery, GetLatestTradesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetLatestTradesQuery, GetLatestTradesQueryVariables>(GetLatestTradesDocument, options);
        }
export type GetLatestTradesQueryHookResult = ReturnType<typeof useGetLatestTradesQuery>;
export type GetLatestTradesLazyQueryHookResult = ReturnType<typeof useGetLatestTradesLazyQuery>;
export type GetLatestTradesQueryResult = Apollo.QueryResult<GetLatestTradesQuery, GetLatestTradesQueryVariables>;
export const namedOperations = {
  Query: {
    getLatestTrades: 'getLatestTrades'
  }
}