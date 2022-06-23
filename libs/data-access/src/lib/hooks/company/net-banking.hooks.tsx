import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type NetBankingPullMutationVariables = Types.Exact<{
  args: Types.NetBankingPullInput;
}>;


export type NetBankingPullMutation = { __typename?: 'mutation_root', netBankingPull?: { __typename?: 'NetBankingPullOutput', id: number, url: string, message: string } | null | undefined };


export const NetBankingPullDocument = gql`
    mutation netBankingPull($args: NetBankingPullInput!) {
  netBankingPull(args: $args) {
    id
    url
    message
  }
}
    `;
export type NetBankingPullMutationFn = Apollo.MutationFunction<NetBankingPullMutation, NetBankingPullMutationVariables>;

/**
 * __useNetBankingPullMutation__
 *
 * To run a mutation, you first call `useNetBankingPullMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useNetBankingPullMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [netBankingPullMutation, { data, loading, error }] = useNetBankingPullMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useNetBankingPullMutation(baseOptions?: Apollo.MutationHookOptions<NetBankingPullMutation, NetBankingPullMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<NetBankingPullMutation, NetBankingPullMutationVariables>(NetBankingPullDocument, options);
      }
export type NetBankingPullMutationHookResult = ReturnType<typeof useNetBankingPullMutation>;
export type NetBankingPullMutationResult = Apollo.MutationResult<NetBankingPullMutation>;
export type NetBankingPullMutationOptions = Apollo.BaseMutationOptions<NetBankingPullMutation, NetBankingPullMutationVariables>;
export const namedOperations = {
  Mutation: {
    netBankingPull: 'netBankingPull'
  }
}