import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type GetCompanyDetailQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCompanyDetailQuery = { __typename?: 'query_root', company: Array<{ __typename?: 'company', estimated_arr?: any | null | undefined, id: number, name: string, gstin?: any | null | undefined, status: string, remaining_tradable_value?: any | null | undefined }> };

export type GetCompanyQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCompanyQuery = { __typename?: 'query_root', company: Array<{ __typename?: 'company', estimated_arr?: any | null | undefined, id: number, name: string, gstin?: any | null | undefined, status: string, min_tradable_value?: any | null | undefined, remaining_tradable_value?: any | null | undefined, deals: Array<{ __typename?: 'deal', status?: string | null | undefined, id: number, bid_closure: any, deal_expiry: any, company_score: { __typename?: 'company_score', arr: any }, bids: Array<{ __typename?: 'bid', price: any, id: number }>, trades: Array<{ __typename?: 'trade', id: number, fees?: any | null | undefined, selected_customers_value: any, payout_value: any, mandate_type?: string | null | undefined, status: string, mandate_account_id?: number | null | undefined, signing_inputs?: any | null | undefined, apa_generated_file_id?: number | null | undefined, signed_mandate_file_id?: number | null | undefined, apa_signed_file_id?: number | null | undefined, mandate_account?: { __typename?: 'account', id: number, account_no: string, account_type?: Types.Ref_Account_Type_Enum | null | undefined, bank_id: number, ifsc_code?: string | null | undefined, name: string, tenant_id: number, multi_signatory: boolean, ref_bank: { __typename?: 'ref_bank', name: string, bank_code: string } } | null | undefined }> }> }> };

export type GetCompanyWithPanQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetCompanyWithPanQuery = { __typename?: 'query_root', company: Array<{ __typename?: 'company', active_gstin?: string | null | undefined, id: number, name: string, pan?: string | null | undefined }> };

export type UserTradesQueryVariables = Types.Exact<{
  trade_id: Types.Scalars['Int'];
}>;


export type UserTradesQuery = { __typename?: 'query_root', trade_subscription: Array<{ __typename?: 'trade_subscription', subscription_id: number }> };

export type UpdateCompanyMutationVariables = Types.Exact<{
  gstin?: Types.InputMaybe<Types.Scalars['String']>;
}>;


export type UpdateCompanyMutation = { __typename?: 'mutation_root', update_company?: { __typename?: 'company_mutation_response', returning: Array<{ __typename?: 'company', id: number }> } | null | undefined };

export type UserAccountQueryVariables = Types.Exact<{
  where: Types.Account_Bool_Exp;
}>;


export type UserAccountQuery = { __typename?: 'query_root', account: Array<{ __typename?: 'account', id: number, account_no: string, ifsc_code?: string | null | undefined, name: string, is_primary: boolean, account_type?: Types.Ref_Account_Type_Enum | null | undefined, ref_bank: { __typename?: 'ref_bank', name: string, id: number } }> };


export const GetCompanyDetailDocument = gql`
    query getCompanyDetail {
  company {
    estimated_arr
    id
    name
    gstin
    status
    remaining_tradable_value
  }
}
    `;

/**
 * __useGetCompanyDetailQuery__
 *
 * To run a query within a React component, call `useGetCompanyDetailQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompanyDetailQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompanyDetailQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCompanyDetailQuery(baseOptions?: Apollo.QueryHookOptions<GetCompanyDetailQuery, GetCompanyDetailQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompanyDetailQuery, GetCompanyDetailQueryVariables>(GetCompanyDetailDocument, options);
      }
export function useGetCompanyDetailLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompanyDetailQuery, GetCompanyDetailQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompanyDetailQuery, GetCompanyDetailQueryVariables>(GetCompanyDetailDocument, options);
        }
export type GetCompanyDetailQueryHookResult = ReturnType<typeof useGetCompanyDetailQuery>;
export type GetCompanyDetailLazyQueryHookResult = ReturnType<typeof useGetCompanyDetailLazyQuery>;
export type GetCompanyDetailQueryResult = Apollo.QueryResult<GetCompanyDetailQuery, GetCompanyDetailQueryVariables>;
export const GetCompanyDocument = gql`
    query getCompany {
  company {
    estimated_arr
    id
    name
    gstin
    status
    min_tradable_value
    remaining_tradable_value
    deals(order_by: {created_at: desc}, limit: 1, offset: 0) {
      status
      company_score {
        arr
      }
      id
      bid_closure
      deal_expiry
      bids(order_by: {price: desc, created_at: desc}, limit: 1) {
        price
        id
      }
      trades(order_by: {created_at: desc}, limit: 1, offset: 0) {
        id
        fees
        selected_customers_value
        payout_value
        mandate_type
        status
        mandate_account_id
        signing_inputs
        apa_generated_file_id
        signed_mandate_file_id
        apa_signed_file_id
        mandate_account {
          id
          account_no
          account_type
          bank_id
          ifsc_code
          name
          tenant_id
          multi_signatory
          ref_bank {
            name
            bank_code
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetCompanyQuery__
 *
 * To run a query within a React component, call `useGetCompanyQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompanyQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompanyQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCompanyQuery(baseOptions?: Apollo.QueryHookOptions<GetCompanyQuery, GetCompanyQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompanyQuery, GetCompanyQueryVariables>(GetCompanyDocument, options);
      }
export function useGetCompanyLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompanyQuery, GetCompanyQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompanyQuery, GetCompanyQueryVariables>(GetCompanyDocument, options);
        }
export type GetCompanyQueryHookResult = ReturnType<typeof useGetCompanyQuery>;
export type GetCompanyLazyQueryHookResult = ReturnType<typeof useGetCompanyLazyQuery>;
export type GetCompanyQueryResult = Apollo.QueryResult<GetCompanyQuery, GetCompanyQueryVariables>;
export const GetCompanyWithPanDocument = gql`
    query getCompanyWithPan {
  company {
    active_gstin
    id
    name
    pan
  }
}
    `;

/**
 * __useGetCompanyWithPanQuery__
 *
 * To run a query within a React component, call `useGetCompanyWithPanQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompanyWithPanQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompanyWithPanQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetCompanyWithPanQuery(baseOptions?: Apollo.QueryHookOptions<GetCompanyWithPanQuery, GetCompanyWithPanQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompanyWithPanQuery, GetCompanyWithPanQueryVariables>(GetCompanyWithPanDocument, options);
      }
export function useGetCompanyWithPanLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompanyWithPanQuery, GetCompanyWithPanQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompanyWithPanQuery, GetCompanyWithPanQueryVariables>(GetCompanyWithPanDocument, options);
        }
export type GetCompanyWithPanQueryHookResult = ReturnType<typeof useGetCompanyWithPanQuery>;
export type GetCompanyWithPanLazyQueryHookResult = ReturnType<typeof useGetCompanyWithPanLazyQuery>;
export type GetCompanyWithPanQueryResult = Apollo.QueryResult<GetCompanyWithPanQuery, GetCompanyWithPanQueryVariables>;
export const UserTradesDocument = gql`
    query userTrades($trade_id: Int!) {
  trade_subscription(where: {trade_id: {_eq: $trade_id}}, order_by: {id: desc}) {
    subscription_id
  }
}
    `;

/**
 * __useUserTradesQuery__
 *
 * To run a query within a React component, call `useUserTradesQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserTradesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserTradesQuery({
 *   variables: {
 *      trade_id: // value for 'trade_id'
 *   },
 * });
 */
export function useUserTradesQuery(baseOptions: Apollo.QueryHookOptions<UserTradesQuery, UserTradesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserTradesQuery, UserTradesQueryVariables>(UserTradesDocument, options);
      }
export function useUserTradesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserTradesQuery, UserTradesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserTradesQuery, UserTradesQueryVariables>(UserTradesDocument, options);
        }
export type UserTradesQueryHookResult = ReturnType<typeof useUserTradesQuery>;
export type UserTradesLazyQueryHookResult = ReturnType<typeof useUserTradesLazyQuery>;
export type UserTradesQueryResult = Apollo.QueryResult<UserTradesQuery, UserTradesQueryVariables>;
export const UpdateCompanyDocument = gql`
    mutation updateCompany($gstin: String) {
  update_company(_set: {active_gstin: $gstin}, where: {}) {
    returning {
      id
    }
  }
}
    `;
export type UpdateCompanyMutationFn = Apollo.MutationFunction<UpdateCompanyMutation, UpdateCompanyMutationVariables>;

/**
 * __useUpdateCompanyMutation__
 *
 * To run a mutation, you first call `useUpdateCompanyMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateCompanyMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateCompanyMutation, { data, loading, error }] = useUpdateCompanyMutation({
 *   variables: {
 *      gstin: // value for 'gstin'
 *   },
 * });
 */
export function useUpdateCompanyMutation(baseOptions?: Apollo.MutationHookOptions<UpdateCompanyMutation, UpdateCompanyMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateCompanyMutation, UpdateCompanyMutationVariables>(UpdateCompanyDocument, options);
      }
export type UpdateCompanyMutationHookResult = ReturnType<typeof useUpdateCompanyMutation>;
export type UpdateCompanyMutationResult = Apollo.MutationResult<UpdateCompanyMutation>;
export type UpdateCompanyMutationOptions = Apollo.BaseMutationOptions<UpdateCompanyMutation, UpdateCompanyMutationVariables>;
export const UserAccountDocument = gql`
    query userAccount($where: account_bool_exp!) {
  account(where: $where) {
    id
    account_no
    ref_bank {
      name
      id
    }
    ifsc_code
    name
    is_primary
    account_type
  }
}
    `;

/**
 * __useUserAccountQuery__
 *
 * To run a query within a React component, call `useUserAccountQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserAccountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserAccountQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUserAccountQuery(baseOptions: Apollo.QueryHookOptions<UserAccountQuery, UserAccountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserAccountQuery, UserAccountQueryVariables>(UserAccountDocument, options);
      }
export function useUserAccountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserAccountQuery, UserAccountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserAccountQuery, UserAccountQueryVariables>(UserAccountDocument, options);
        }
export type UserAccountQueryHookResult = ReturnType<typeof useUserAccountQuery>;
export type UserAccountLazyQueryHookResult = ReturnType<typeof useUserAccountLazyQuery>;
export type UserAccountQueryResult = Apollo.QueryResult<UserAccountQuery, UserAccountQueryVariables>;
export const namedOperations = {
  Query: {
    getCompanyDetail: 'getCompanyDetail',
    getCompany: 'getCompany',
    getCompanyWithPan: 'getCompanyWithPan',
    userTrades: 'userTrades',
    userAccount: 'userAccount'
  },
  Mutation: {
    updateCompany: 'updateCompany'
  }
}