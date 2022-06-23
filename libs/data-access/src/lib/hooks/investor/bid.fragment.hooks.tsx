import * as Types from '../../types';

import { gql } from '@apollo/client';
export type BidFragmentFragment = { __typename?: 'bid', id: number, price: any, created_at: any, your_bid?: boolean | null | undefined };

export const BidFragmentFragmentDoc = gql`
    fragment bidFragment on bid {
  id
  price
  created_at
  your_bid
}
    `;
export const namedOperations = {
  Fragment: {
    bidFragment: 'bidFragment'
  }
}