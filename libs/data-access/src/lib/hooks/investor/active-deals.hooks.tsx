import * as Types from '../../types';

import { gql } from '@apollo/client';
import { BidFragmentFragmentDoc } from './bid.fragment.hooks';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type ActiveDealsQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.Deal_Bool_Exp>;
  order_by?: Types.InputMaybe<Array<Types.Deal_Order_By> | Types.Deal_Order_By>;
  offset?: Types.InputMaybe<Types.Scalars['Int']>;
  limit?: Types.InputMaybe<Types.Scalars['Int']>;
}>;


export type ActiveDealsQuery = { __typename?: 'query_root', deal_aggregate: { __typename?: 'deal_aggregate', aggregate?: { __typename?: 'deal_aggregate_fields', count: number } | null | undefined }, deal: Array<{ __typename?: 'deal', id: number, bid_closure: any, status?: string | null | undefined, company: { __typename?: 'company', id: number, remaining_tradable_value?: any | null | undefined }, company_score: { __typename?: 'company_score', rating: any, min_bid_price: any, min_recommended_bid: any }, highest_bid?: Array<{ __typename?: 'bid', id: number, price: any, created_at: any, your_bid?: boolean | null | undefined }> | null | undefined, bids_aggregate: { __typename?: 'bid_aggregate', aggregate?: { __typename?: 'bid_aggregate_fields', count: number } | null | undefined, nodes: Array<{ __typename?: 'bid', id: number, price: any, created_at: any, your_bid?: boolean | null | undefined }> } }> };


export const ActiveDealsDocument = gql`
    query activeDeals($where: deal_bool_exp, $order_by: [deal_order_by!], $offset: Int, $limit: Int) {
  deal_aggregate(where: $where) {
    aggregate {
      count
    }
  }
  deal(where: $where, order_by: $order_by, offset: $offset, limit: $limit) {
    id
    bid_closure
    status
    company {
      id
      remaining_tradable_value
    }
    company_score {
      rating
      min_bid_price
      min_recommended_bid
    }
    highest_bid(where: {id: {_is_null: false}}) {
      ...bidFragment
    }
    bids_aggregate(order_by: {price: desc, created_at: desc}) {
      aggregate {
        count
      }
      nodes {
        ...bidFragment
      }
    }
  }
}
    ${BidFragmentFragmentDoc}`;

/**
 * __useActiveDealsQuery__
 *
 * To run a query within a React component, call `useActiveDealsQuery` and pass it any options that fit your needs.
 * When your component renders, `useActiveDealsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useActiveDealsQuery({
 *   variables: {
 *      where: // value for 'where'
 *      order_by: // value for 'order_by'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *   },
 * });
 */
export function useActiveDealsQuery(baseOptions?: Apollo.QueryHookOptions<ActiveDealsQuery, ActiveDealsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<ActiveDealsQuery, ActiveDealsQueryVariables>(ActiveDealsDocument, options);
      }
export function useActiveDealsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<ActiveDealsQuery, ActiveDealsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<ActiveDealsQuery, ActiveDealsQueryVariables>(ActiveDealsDocument, options);
        }
export type ActiveDealsQueryHookResult = ReturnType<typeof useActiveDealsQuery>;
export type ActiveDealsLazyQueryHookResult = ReturnType<typeof useActiveDealsLazyQuery>;
export type ActiveDealsQueryResult = Apollo.QueryResult<ActiveDealsQuery, ActiveDealsQueryVariables>;
export const namedOperations = {
  Query: {
    activeDeals: 'activeDeals'
  }
}