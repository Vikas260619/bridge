import * as Types from '../../types';

import { gql } from '@apollo/client';
import { BidFragmentFragmentDoc } from './bid.fragment.hooks';
export type BidDataByDealFragmentFragment = { __typename?: 'deal', your_bids?: Array<{ __typename?: 'bid', id: number, price: any, created_at: any, your_bid?: boolean | null | undefined }> | null | undefined, highest_bid?: Array<{ __typename?: 'bid', id: number, price: any, created_at: any, your_bid?: boolean | null | undefined }> | null | undefined, bids_aggregate: { __typename?: 'bid_aggregate', aggregate?: { __typename?: 'bid_aggregate_fields', count: number } | null | undefined, nodes: Array<{ __typename?: 'bid', id: number, price: any, created_at: any, your_bid?: boolean | null | undefined }> } };

export const BidDataByDealFragmentFragmentDoc = gql`
    fragment bidDataByDealFragment on deal {
  your_bids(order_by: {price: desc, created_at: desc}) {
    ...bidFragment
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
    ${BidFragmentFragmentDoc}`;
export const namedOperations = {
  Fragment: {
    bidDataByDealFragment: 'bidDataByDealFragment'
  }
}