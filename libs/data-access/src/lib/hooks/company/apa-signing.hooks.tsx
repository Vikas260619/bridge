import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type GenerateApaMutationMutationVariables = Types.Exact<{
  args: Types.GenerateApaInput;
}>;


export type GenerateApaMutationMutation = { __typename?: 'mutation_root', generateAPA?: { __typename?: 'GenerateAPAOutput', signing_link: string, url: string, file_registry_id: number } | null | undefined };

export type PreviewApaMutationMutationVariables = Types.Exact<{
  args: Types.PreviewApaInput;
}>;


export type PreviewApaMutationMutation = { __typename?: 'mutation_root', previewAPA?: { __typename?: 'PreviewAPAOutput', url: string, file_registry_id: number } | null | undefined };


export const GenerateApaMutationDocument = gql`
    mutation generateAPAMutation($args: GenerateAPAInput!) {
  generateAPA(args: $args) {
    signing_link
    url
    file_registry_id
  }
}
    `;
export type GenerateApaMutationMutationFn = Apollo.MutationFunction<GenerateApaMutationMutation, GenerateApaMutationMutationVariables>;

/**
 * __useGenerateApaMutationMutation__
 *
 * To run a mutation, you first call `useGenerateApaMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useGenerateApaMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [generateApaMutationMutation, { data, loading, error }] = useGenerateApaMutationMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useGenerateApaMutationMutation(baseOptions?: Apollo.MutationHookOptions<GenerateApaMutationMutation, GenerateApaMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<GenerateApaMutationMutation, GenerateApaMutationMutationVariables>(GenerateApaMutationDocument, options);
      }
export type GenerateApaMutationMutationHookResult = ReturnType<typeof useGenerateApaMutationMutation>;
export type GenerateApaMutationMutationResult = Apollo.MutationResult<GenerateApaMutationMutation>;
export type GenerateApaMutationMutationOptions = Apollo.BaseMutationOptions<GenerateApaMutationMutation, GenerateApaMutationMutationVariables>;
export const PreviewApaMutationDocument = gql`
    mutation previewAPAMutation($args: PreviewAPAInput!) {
  previewAPA(args: $args) {
    url
    file_registry_id
  }
}
    `;
export type PreviewApaMutationMutationFn = Apollo.MutationFunction<PreviewApaMutationMutation, PreviewApaMutationMutationVariables>;

/**
 * __usePreviewApaMutationMutation__
 *
 * To run a mutation, you first call `usePreviewApaMutationMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePreviewApaMutationMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [previewApaMutationMutation, { data, loading, error }] = usePreviewApaMutationMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function usePreviewApaMutationMutation(baseOptions?: Apollo.MutationHookOptions<PreviewApaMutationMutation, PreviewApaMutationMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PreviewApaMutationMutation, PreviewApaMutationMutationVariables>(PreviewApaMutationDocument, options);
      }
export type PreviewApaMutationMutationHookResult = ReturnType<typeof usePreviewApaMutationMutation>;
export type PreviewApaMutationMutationResult = Apollo.MutationResult<PreviewApaMutationMutation>;
export type PreviewApaMutationMutationOptions = Apollo.BaseMutationOptions<PreviewApaMutationMutation, PreviewApaMutationMutationVariables>;
export const namedOperations = {
  Mutation: {
    generateAPAMutation: 'generateAPAMutation',
    previewAPAMutation: 'previewAPAMutation'
  }
}