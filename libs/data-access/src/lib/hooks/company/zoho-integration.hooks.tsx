import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type UpdateIntegrationAuthMutationVariables = Types.Exact<{
  orgId?: Types.InputMaybe<Types.Scalars['String']>;
  id: Types.Scalars['Int'];
}>;


export type UpdateIntegrationAuthMutation = { __typename?: 'mutation_root', update_integration_auth?: { __typename?: 'integration_auth_mutation_response', returning: Array<{ __typename?: 'integration_auth', id: number }> } | null | undefined };

export type ZohoAccountingSyncMutationVariables = Types.Exact<{
  source: Types.Scalars['String'];
}>;


export type ZohoAccountingSyncMutation = { __typename?: 'mutation_root', accountingSync?: { __typename?: 'AccountingSyncOutput', message: string } | null | undefined };


export const UpdateIntegrationAuthDocument = gql`
    mutation updateIntegrationAuth($orgId: String, $id: Int!) {
  update_integration_auth(
    _set: {source_account_id: $orgId}
    where: {id: {_eq: $id}}
  ) {
    returning {
      id
    }
  }
}
    `;
export type UpdateIntegrationAuthMutationFn = Apollo.MutationFunction<UpdateIntegrationAuthMutation, UpdateIntegrationAuthMutationVariables>;

/**
 * __useUpdateIntegrationAuthMutation__
 *
 * To run a mutation, you first call `useUpdateIntegrationAuthMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIntegrationAuthMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIntegrationAuthMutation, { data, loading, error }] = useUpdateIntegrationAuthMutation({
 *   variables: {
 *      orgId: // value for 'orgId'
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUpdateIntegrationAuthMutation(baseOptions?: Apollo.MutationHookOptions<UpdateIntegrationAuthMutation, UpdateIntegrationAuthMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateIntegrationAuthMutation, UpdateIntegrationAuthMutationVariables>(UpdateIntegrationAuthDocument, options);
      }
export type UpdateIntegrationAuthMutationHookResult = ReturnType<typeof useUpdateIntegrationAuthMutation>;
export type UpdateIntegrationAuthMutationResult = Apollo.MutationResult<UpdateIntegrationAuthMutation>;
export type UpdateIntegrationAuthMutationOptions = Apollo.BaseMutationOptions<UpdateIntegrationAuthMutation, UpdateIntegrationAuthMutationVariables>;
export const ZohoAccountingSyncDocument = gql`
    mutation zohoAccountingSync($source: String!) {
  accountingSync(args: {source: $source}) {
    message
  }
}
    `;
export type ZohoAccountingSyncMutationFn = Apollo.MutationFunction<ZohoAccountingSyncMutation, ZohoAccountingSyncMutationVariables>;

/**
 * __useZohoAccountingSyncMutation__
 *
 * To run a mutation, you first call `useZohoAccountingSyncMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useZohoAccountingSyncMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [zohoAccountingSyncMutation, { data, loading, error }] = useZohoAccountingSyncMutation({
 *   variables: {
 *      source: // value for 'source'
 *   },
 * });
 */
export function useZohoAccountingSyncMutation(baseOptions?: Apollo.MutationHookOptions<ZohoAccountingSyncMutation, ZohoAccountingSyncMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<ZohoAccountingSyncMutation, ZohoAccountingSyncMutationVariables>(ZohoAccountingSyncDocument, options);
      }
export type ZohoAccountingSyncMutationHookResult = ReturnType<typeof useZohoAccountingSyncMutation>;
export type ZohoAccountingSyncMutationResult = Apollo.MutationResult<ZohoAccountingSyncMutation>;
export type ZohoAccountingSyncMutationOptions = Apollo.BaseMutationOptions<ZohoAccountingSyncMutation, ZohoAccountingSyncMutationVariables>;
export const namedOperations = {
  Mutation: {
    updateIntegrationAuth: 'updateIntegrationAuth',
    zohoAccountingSync: 'zohoAccountingSync'
  }
}