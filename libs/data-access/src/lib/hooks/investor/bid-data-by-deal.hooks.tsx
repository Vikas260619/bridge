import * as Types from '../../types';

import { gql } from '@apollo/client';
import { BidDataByDealFragmentFragmentDoc } from './bid-data-by-deal.fragment.hooks';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type GetBidDataByDealQueryVariables = Types.Exact<{
  dealId: Types.Scalars['Int'];
}>;


export type GetBidDataByDealQuery = { __typename?: 'query_root', deal_by_pk?: { __typename?: 'deal', id: number, status?: string | null | undefined, your_bids?: Array<{ __typename?: 'bid', id: number, price: any, created_at: any, your_bid?: boolean | null | undefined }> | null | undefined, highest_bid?: Array<{ __typename?: 'bid', id: number, price: any, created_at: any, your_bid?: boolean | null | undefined }> | null | undefined, bids_aggregate: { __typename?: 'bid_aggregate', aggregate?: { __typename?: 'bid_aggregate_fields', count: number } | null | undefined, nodes: Array<{ __typename?: 'bid', id: number, price: any, created_at: any, your_bid?: boolean | null | undefined }> } } | null | undefined };


export const GetBidDataByDealDocument = gql`
    query getBidDataByDeal($dealId: Int!) {
  deal_by_pk(id: $dealId) {
    id
    status
    ...bidDataByDealFragment
  }
}
    ${BidDataByDealFragmentFragmentDoc}`;

/**
 * __useGetBidDataByDealQuery__
 *
 * To run a query within a React component, call `useGetBidDataByDealQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBidDataByDealQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBidDataByDealQuery({
 *   variables: {
 *      dealId: // value for 'dealId'
 *   },
 * });
 */
export function useGetBidDataByDealQuery(baseOptions: Apollo.QueryHookOptions<GetBidDataByDealQuery, GetBidDataByDealQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBidDataByDealQuery, GetBidDataByDealQueryVariables>(GetBidDataByDealDocument, options);
      }
export function useGetBidDataByDealLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBidDataByDealQuery, GetBidDataByDealQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBidDataByDealQuery, GetBidDataByDealQueryVariables>(GetBidDataByDealDocument, options);
        }
export type GetBidDataByDealQueryHookResult = ReturnType<typeof useGetBidDataByDealQuery>;
export type GetBidDataByDealLazyQueryHookResult = ReturnType<typeof useGetBidDataByDealLazyQuery>;
export type GetBidDataByDealQueryResult = Apollo.QueryResult<GetBidDataByDealQuery, GetBidDataByDealQueryVariables>;
export const namedOperations = {
  Query: {
    getBidDataByDeal: 'getBidDataByDeal'
  }
}