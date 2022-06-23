import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type GetDashboardStatsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetDashboardStatsQuery = { __typename?: 'query_root', company: Array<{ __typename?: 'company', status: string, remaining_tradable_value?: any | null | undefined, company_scores: Array<{ __typename?: 'company_score', arr: any, facility_limit: any }>, deals: Array<{ __typename?: 'deal', status?: string | null | undefined, deal_expiry: any, trades: Array<{ __typename?: 'trade', id: number, status: string, mandate_account?: { __typename?: 'account', account_no: string, ref_bank: { __typename?: 'ref_bank', name: string } } | null | undefined }>, bids: Array<{ __typename?: 'bid', price: any, id: number }> }>, trades_aggregate: { __typename?: 'trade_aggregate', aggregate?: { __typename?: 'trade_aggregate_fields', sum?: { __typename?: 'trade_sum_fields', payout_value?: any | null | undefined } | null | undefined } | null | undefined } }> };


export const GetDashboardStatsDocument = gql`
    query getDashboardStats {
  company {
    status
    remaining_tradable_value
    company_scores(limit: 1, order_by: {created_at: desc}) {
      arr
      facility_limit
    }
    deals(limit: 1, order_by: {created_at: desc}) {
      status
      deal_expiry
      trades(limit: 1, order_by: {created_at: desc}) {
        id
        status
        mandate_account {
          account_no
          ref_bank {
            name
          }
        }
      }
      bids(order_by: {price: desc, created_at: desc}, limit: 1) {
        price
        id
      }
    }
    trades_aggregate(where: {status: {_in: ["ACTIVE", "CLOSED"]}}) {
      aggregate {
        sum {
          payout_value
        }
      }
    }
  }
}
    `;

/**
 * __useGetDashboardStatsQuery__
 *
 * To run a query within a React component, call `useGetDashboardStatsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetDashboardStatsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetDashboardStatsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetDashboardStatsQuery(baseOptions?: Apollo.QueryHookOptions<GetDashboardStatsQuery, GetDashboardStatsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetDashboardStatsQuery, GetDashboardStatsQueryVariables>(GetDashboardStatsDocument, options);
      }
export function useGetDashboardStatsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetDashboardStatsQuery, GetDashboardStatsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetDashboardStatsQuery, GetDashboardStatsQueryVariables>(GetDashboardStatsDocument, options);
        }
export type GetDashboardStatsQueryHookResult = ReturnType<typeof useGetDashboardStatsQuery>;
export type GetDashboardStatsLazyQueryHookResult = ReturnType<typeof useGetDashboardStatsLazyQuery>;
export type GetDashboardStatsQueryResult = Apollo.QueryResult<GetDashboardStatsQuery, GetDashboardStatsQueryVariables>;
export const namedOperations = {
  Query: {
    getDashboardStats: 'getDashboardStats'
  }
}