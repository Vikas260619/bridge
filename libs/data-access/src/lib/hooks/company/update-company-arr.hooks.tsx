import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type UpdateEstimatedArrMutationVariables = Types.Exact<{
  estimated_arr?: Types.InputMaybe<Types.Scalars['numeric']>;
}>;


export type UpdateEstimatedArrMutation = { __typename?: 'mutation_root', update_company?: { __typename?: 'company_mutation_response', affected_rows: number } | null | undefined };


export const UpdateEstimatedArrDocument = gql`
    mutation updateEstimatedArr($estimated_arr: numeric) {
  update_company(_set: {estimated_arr: $estimated_arr}, where: {}) {
    affected_rows
  }
}
    `;
export type UpdateEstimatedArrMutationFn = Apollo.MutationFunction<UpdateEstimatedArrMutation, UpdateEstimatedArrMutationVariables>;

/**
 * __useUpdateEstimatedArrMutation__
 *
 * To run a mutation, you first call `useUpdateEstimatedArrMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEstimatedArrMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEstimatedArrMutation, { data, loading, error }] = useUpdateEstimatedArrMutation({
 *   variables: {
 *      estimated_arr: // value for 'estimated_arr'
 *   },
 * });
 */
export function useUpdateEstimatedArrMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEstimatedArrMutation, UpdateEstimatedArrMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEstimatedArrMutation, UpdateEstimatedArrMutationVariables>(UpdateEstimatedArrDocument, options);
      }
export type UpdateEstimatedArrMutationHookResult = ReturnType<typeof useUpdateEstimatedArrMutation>;
export type UpdateEstimatedArrMutationResult = Apollo.MutationResult<UpdateEstimatedArrMutation>;
export type UpdateEstimatedArrMutationOptions = Apollo.BaseMutationOptions<UpdateEstimatedArrMutation, UpdateEstimatedArrMutationVariables>;
export const namedOperations = {
  Mutation: {
    updateEstimatedArr: 'updateEstimatedArr'
  }
}