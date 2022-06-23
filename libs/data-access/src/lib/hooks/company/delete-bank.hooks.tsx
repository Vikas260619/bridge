import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type DeleteBankMutationVariables = Types.Exact<{
  modelName: Types.DeletableModel;
  where: Types.Scalars['jsonb'];
}>;


export type DeleteBankMutation = { __typename?: 'mutation_root', delete?: { __typename?: 'DeleteOutput', message: string } | null | undefined };


export const DeleteBankDocument = gql`
    mutation deleteBank($modelName: DeletableModel!, $where: jsonb!) {
  delete(args: {modelName: $modelName, where: $where}) {
    message
  }
}
    `;
export type DeleteBankMutationFn = Apollo.MutationFunction<DeleteBankMutation, DeleteBankMutationVariables>;

/**
 * __useDeleteBankMutation__
 *
 * To run a mutation, you first call `useDeleteBankMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBankMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBankMutation, { data, loading, error }] = useDeleteBankMutation({
 *   variables: {
 *      modelName: // value for 'modelName'
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteBankMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBankMutation, DeleteBankMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBankMutation, DeleteBankMutationVariables>(DeleteBankDocument, options);
      }
export type DeleteBankMutationHookResult = ReturnType<typeof useDeleteBankMutation>;
export type DeleteBankMutationResult = Apollo.MutationResult<DeleteBankMutation>;
export type DeleteBankMutationOptions = Apollo.BaseMutationOptions<DeleteBankMutation, DeleteBankMutationVariables>;
export const namedOperations = {
  Mutation: {
    deleteBank: 'deleteBank'
  }
}