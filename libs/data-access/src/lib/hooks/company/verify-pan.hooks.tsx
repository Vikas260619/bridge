import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type VerifyPanQueryVariables = Types.Exact<{
  args: Types.VerifyPanInput;
}>;


export type VerifyPanQuery = { __typename?: 'query_root', verifyPan?: { __typename?: 'VerifyPanOutput', gstin?: string | null | undefined, message: string, name_on_pan?: string | null | undefined, verified: boolean, registered_name?: string | null | undefined } | null | undefined };


export const VerifyPanDocument = gql`
    query verifyPan($args: VerifyPanInput!) {
  verifyPan(args: $args) {
    gstin
    message
    name_on_pan
    verified
    registered_name
  }
}
    `;

/**
 * __useVerifyPanQuery__
 *
 * To run a query within a React component, call `useVerifyPanQuery` and pass it any options that fit your needs.
 * When your component renders, `useVerifyPanQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useVerifyPanQuery({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useVerifyPanQuery(baseOptions: Apollo.QueryHookOptions<VerifyPanQuery, VerifyPanQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<VerifyPanQuery, VerifyPanQueryVariables>(VerifyPanDocument, options);
      }
export function useVerifyPanLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<VerifyPanQuery, VerifyPanQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<VerifyPanQuery, VerifyPanQueryVariables>(VerifyPanDocument, options);
        }
export type VerifyPanQueryHookResult = ReturnType<typeof useVerifyPanQuery>;
export type VerifyPanLazyQueryHookResult = ReturnType<typeof useVerifyPanLazyQuery>;
export type VerifyPanQueryResult = Apollo.QueryResult<VerifyPanQuery, VerifyPanQueryVariables>;
export const namedOperations = {
  Query: {
    verifyPan: 'verifyPan'
  }
}