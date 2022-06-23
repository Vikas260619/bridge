import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type GenerateFileDownloadUrlQueryVariables = Types.Exact<{
  fileId: Types.Scalars['Int'];
}>;


export type GenerateFileDownloadUrlQuery = { __typename?: 'query_root', generateFileRegistryDownloadURL?: { __typename?: 'GenerateFileRegistryDownloadURLOutput', download_url: string } | null | undefined };


export const GenerateFileDownloadUrlDocument = gql`
    query generateFileDownloadUrl($fileId: Int!) {
  generateFileRegistryDownloadURL(args: {file_registry_id: $fileId}) {
    download_url
  }
}
    `;

/**
 * __useGenerateFileDownloadUrlQuery__
 *
 * To run a query within a React component, call `useGenerateFileDownloadUrlQuery` and pass it any options that fit your needs.
 * When your component renders, `useGenerateFileDownloadUrlQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGenerateFileDownloadUrlQuery({
 *   variables: {
 *      fileId: // value for 'fileId'
 *   },
 * });
 */
export function useGenerateFileDownloadUrlQuery(baseOptions: Apollo.QueryHookOptions<GenerateFileDownloadUrlQuery, GenerateFileDownloadUrlQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GenerateFileDownloadUrlQuery, GenerateFileDownloadUrlQueryVariables>(GenerateFileDownloadUrlDocument, options);
      }
export function useGenerateFileDownloadUrlLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GenerateFileDownloadUrlQuery, GenerateFileDownloadUrlQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GenerateFileDownloadUrlQuery, GenerateFileDownloadUrlQueryVariables>(GenerateFileDownloadUrlDocument, options);
        }
export type GenerateFileDownloadUrlQueryHookResult = ReturnType<typeof useGenerateFileDownloadUrlQuery>;
export type GenerateFileDownloadUrlLazyQueryHookResult = ReturnType<typeof useGenerateFileDownloadUrlLazyQuery>;
export type GenerateFileDownloadUrlQueryResult = Apollo.QueryResult<GenerateFileDownloadUrlQuery, GenerateFileDownloadUrlQueryVariables>;
export const namedOperations = {
  Query: {
    generateFileDownloadUrl: 'generateFileDownloadUrl'
  }
}