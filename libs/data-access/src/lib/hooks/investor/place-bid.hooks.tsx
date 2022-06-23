import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type PlaceBidMutationVariables = Types.Exact<{
  args: Types.PlaceBidInput;
}>;


export type PlaceBidMutation = { __typename?: 'mutation_root', placeBid?: { __typename?: 'PlaceBidOutput', bid_id: number } | null | undefined };


export const PlaceBidDocument = gql`
    mutation placeBid($args: PlaceBidInput!) {
  placeBid(args: $args) {
    bid_id
  }
}
    `;
export type PlaceBidMutationFn = Apollo.MutationFunction<PlaceBidMutation, PlaceBidMutationVariables>;

/**
 * __usePlaceBidMutation__
 *
 * To run a mutation, you first call `usePlaceBidMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePlaceBidMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [placeBidMutation, { data, loading, error }] = usePlaceBidMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function usePlaceBidMutation(baseOptions?: Apollo.MutationHookOptions<PlaceBidMutation, PlaceBidMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PlaceBidMutation, PlaceBidMutationVariables>(PlaceBidDocument, options);
      }
export type PlaceBidMutationHookResult = ReturnType<typeof usePlaceBidMutation>;
export type PlaceBidMutationResult = Apollo.MutationResult<PlaceBidMutation>;
export type PlaceBidMutationOptions = Apollo.BaseMutationOptions<PlaceBidMutation, PlaceBidMutationVariables>;
export const namedOperations = {
  Mutation: {
    placeBid: 'placeBid'
  }
}