import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type GetListIntegrationsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetListIntegrationsQuery = { __typename?: 'query_root', listIntegrations?: Array<{ __typename?: 'ListIntegrationsOutput', source: string, url?: string | null | undefined, auth_protocol: string, is_active: boolean, category: string, logo_url?: string | null | undefined, integrations: Array<{ __typename?: 'integration_auth', id: number, created_at: any, source_account_id?: string | null | undefined, source: string, company_id: number, metadata?: any | null | undefined, banking_partner?: { __typename?: 'banking_partner_integration', account_type?: string | null | undefined, is_primary?: boolean | null | undefined, sequence?: number | null | undefined, bank?: { __typename?: 'ref_bank', id: number, name: string } | null | undefined } | null | undefined, company_integrations: Array<{ __typename?: 'company_integration', source: string, id: number, status: string, metadata?: any | null | undefined, failure_reason?: any | null | undefined, integration_auth?: { __typename?: 'integration_auth', id: number, bank_account?: { __typename?: 'account', id: number, account_no: string } | null | undefined } | null | undefined, company_integration_files: Array<{ __typename?: 'company_integration_file', status: string, failure_reason?: any | null | undefined, file_registry: { __typename?: 'file_registry', name: string, location: string, id: number } }> }> }> } | null | undefined> | null | undefined };


export const GetListIntegrationsDocument = gql`
    query getListIntegrations {
  listIntegrations {
    source
    url
    auth_protocol
    is_active
    category
    logo_url
    integrations {
      id
      banking_partner {
        account_type
        is_primary
        bank {
          id
          name
        }
        sequence
      }
      created_at
      source_account_id
      source
      company_id
      metadata
      company_integrations(order_by: {created_at: desc}, limit: 1, offset: 0) {
        source
        id
        status
        metadata
        failure_reason
        integration_auth {
          id
          bank_account {
            id
            account_no
          }
        }
        company_integration_files {
          status
          failure_reason
          file_registry {
            name
            location
            id
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetListIntegrationsQuery__
 *
 * To run a query within a React component, call `useGetListIntegrationsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetListIntegrationsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetListIntegrationsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetListIntegrationsQuery(baseOptions?: Apollo.QueryHookOptions<GetListIntegrationsQuery, GetListIntegrationsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetListIntegrationsQuery, GetListIntegrationsQueryVariables>(GetListIntegrationsDocument, options);
      }
export function useGetListIntegrationsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetListIntegrationsQuery, GetListIntegrationsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetListIntegrationsQuery, GetListIntegrationsQueryVariables>(GetListIntegrationsDocument, options);
        }
export type GetListIntegrationsQueryHookResult = ReturnType<typeof useGetListIntegrationsQuery>;
export type GetListIntegrationsLazyQueryHookResult = ReturnType<typeof useGetListIntegrationsLazyQuery>;
export type GetListIntegrationsQueryResult = Apollo.QueryResult<GetListIntegrationsQuery, GetListIntegrationsQueryVariables>;
export const namedOperations = {
  Query: {
    getListIntegrations: 'getListIntegrations'
  }
}