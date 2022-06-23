import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type GetCompanyScheduledPayoutSummaryQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCompanyScheduledPayoutSummaryQuery = { __typename?: 'query_root', scheduled_payout: Array<{ __typename?: 'scheduled_payout', scheduled_at: any, amount: any, trade: { __typename?: 'trade', id: number, code?: string | null | undefined } }> };


export const GetCompanyScheduledPayoutSummaryDocument = gql`
    query getCompanyScheduledPayoutSummary {
  scheduled_payout(
    where: {scheduled_at: {_gte: "now()"}}
    order_by: {scheduled_at: asc}
    limit: 3
  ) {
    trade {
      id
      code
    }
    scheduled_at
    amount
  }
}
    `;

/**
 * __useGetCompanyScheduledPayoutSummaryQuery__
 *
 * To run a query within a React component, call `useGetCompanyScheduledPayoutSummaryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompanyScheduledPayoutSummaryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompanyScheduledPayoutSummaryQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCompanyScheduledPayoutSummaryQuery(baseOptions?: Apollo.QueryHookOptions<GetCompanyScheduledPayoutSummaryQuery, GetCompanyScheduledPayoutSummaryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompanyScheduledPayoutSummaryQuery, GetCompanyScheduledPayoutSummaryQueryVariables>(GetCompanyScheduledPayoutSummaryDocument, options);
      }
export function useGetCompanyScheduledPayoutSummaryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompanyScheduledPayoutSummaryQuery, GetCompanyScheduledPayoutSummaryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompanyScheduledPayoutSummaryQuery, GetCompanyScheduledPayoutSummaryQueryVariables>(GetCompanyScheduledPayoutSummaryDocument, options);
        }
export type GetCompanyScheduledPayoutSummaryQueryHookResult = ReturnType<typeof useGetCompanyScheduledPayoutSummaryQuery>;
export type GetCompanyScheduledPayoutSummaryLazyQueryHookResult = ReturnType<typeof useGetCompanyScheduledPayoutSummaryLazyQuery>;
export type GetCompanyScheduledPayoutSummaryQueryResult = Apollo.QueryResult<GetCompanyScheduledPayoutSummaryQuery, GetCompanyScheduledPayoutSummaryQueryVariables>;
export const namedOperations = {
  Query: {
    getCompanyScheduledPayoutSummary: 'getCompanyScheduledPayoutSummary'
  }
}