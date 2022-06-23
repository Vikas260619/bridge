import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type ExchangeSaveTokenMutationVariables = Types.Exact<{
  source: Types.Scalars['String'];
  params: Types.Scalars['jsonb'];
}>;


export type ExchangeSaveTokenMutation = { __typename?: 'mutation_root', exchangeSaveToken?: { __typename?: 'ExchangeSaveTokenOutput', message: string, id: number, metadata?: any | null | undefined } | null | undefined };


export const ExchangeSaveTokenDocument = gql`
    mutation exchangeSaveToken($source: String!, $params: jsonb!) {
  exchangeSaveToken(args: {source: $source, params: $params}) {
    message
    id
    metadata
  }
}
    `;
export type ExchangeSaveTokenMutationFn = Apollo.MutationFunction<ExchangeSaveTokenMutation, ExchangeSaveTokenMutationVariables>;

/**
 * __useExchangeSaveTokenMutation__
 *
 * To run a mutation, you first call `useExchangeSaveTokenMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useExchangeSaveTokenMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [exchangeSaveTokenMutation, { data, loading, error }] = useExchangeSaveTokenMutation({
 *   variables: {
 *      source: // value for 'source'
 *      params: // value for 'params'
 *   },
 * });
 */
export function useExchangeSaveTokenMutation(baseOptions?: Apollo.MutationHookOptions<ExchangeSaveTokenMutation, ExchangeSaveTokenMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ExchangeSaveTokenMutation, ExchangeSaveTokenMutationVariables>(ExchangeSaveTokenDocument, options);
      }
export type ExchangeSaveTokenMutationHookResult = ReturnType<typeof useExchangeSaveTokenMutation>;
export type ExchangeSaveTokenMutationResult = Apollo.MutationResult<ExchangeSaveTokenMutation>;
export type ExchangeSaveTokenMutationOptions = Apollo.BaseMutationOptions<ExchangeSaveTokenMutation, ExchangeSaveTokenMutationVariables>;
export const namedOperations = {
  Mutation: {
    exchangeSaveToken: 'exchangeSaveToken'
  }
}