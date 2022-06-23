import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type GetCountryListQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCountryListQuery = { __typename?: 'query_root', ref_country: Array<{ __typename?: 'ref_country', name: string, id: number }> };


export const GetCountryListDocument = gql`
    query getCountryList {
  ref_country(limit: 10) {
    name
    id
  }
}
    `;

/**
 * __useGetCountryListQuery__
 *
 * To run a query within a React component, call `useGetCountryListQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountryListQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountryListQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCountryListQuery(baseOptions?: Apollo.QueryHookOptions<GetCountryListQuery, GetCountryListQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCountryListQuery, GetCountryListQueryVariables>(GetCountryListDocument, options);
      }
export function useGetCountryListLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCountryListQuery, GetCountryListQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCountryListQuery, GetCountryListQueryVariables>(GetCountryListDocument, options);
        }
export type GetCountryListQueryHookResult = ReturnType<typeof useGetCountryListQuery>;
export type GetCountryListLazyQueryHookResult = ReturnType<typeof useGetCountryListLazyQuery>;
export type GetCountryListQueryResult = Apollo.QueryResult<GetCountryListQuery, GetCountryListQueryVariables>;
export const namedOperations = {
  Query: {
    getCountryList: 'getCountryList'
  }
}