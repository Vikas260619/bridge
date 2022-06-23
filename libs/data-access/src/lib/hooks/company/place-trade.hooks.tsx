import * as Types from '../../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type GetCustomersQueryVariables = Types.Exact<{
  where1?: Types.InputMaybe<Types.Subscription_Bool_Exp>;
  where2?: Types.InputMaybe<Types.Subscription_Bool_Exp>;
  order_by?: Types.InputMaybe<Array<Types.Subscription_Order_By> | Types.Subscription_Order_By>;
  offset?: Types.InputMaybe<Types.Scalars['Int']>;
  limit?: Types.InputMaybe<Types.Scalars['Int']>;
  bid_price?: Types.InputMaybe<Types.Scalars['float8']>;
  whereTradeSub?: Types.InputMaybe<Types.Trade_Subscription_Bool_Exp>;
  withTradeSubscriptions: Types.Scalars['Boolean'];
}>;


export type GetCustomersQuery = { __typename?: 'query_root', subscription_aggregate: { __typename?: 'subscription_aggregate', aggregate?: { __typename?: 'subscription_aggregate_fields', count: number } | null | undefined }, subscription: Array<{ __typename?: 'subscription', id: number, customer_identifier: string, customer_email: string, customer_name?: string | null | undefined, billing_period: string, amount_per_period: any, amount_per_month: any, billing_period_interval: number, bid_amount?: any | null | undefined }>, trade_subscription?: Array<{ __typename?: 'trade_subscription', subscription_id: number }> };

export type InitiateTradeMutationVariables = Types.Exact<{
  args: Types.InitiateTradeInput;
}>;


export type InitiateTradeMutation = { __typename?: 'mutation_root', initiateTrade?: { __typename?: 'InitiateTradeOutput', code: string, id: number } | null | undefined };

export type RegisterMandateMutationVariables = Types.Exact<{
  args: Types.RegisterNachMandateInput;
}>;


export type RegisterMandateMutation = { __typename?: 'mutation_root', registerNachMandate?: { __typename?: 'RegisterNachMandateOutput', message: string, url?: string | null | undefined } | null | undefined };

export type SearchIfscQueryVariables = Types.Exact<{
  args: Types.SearchIfscInput;
}>;


export type SearchIfscQuery = { __typename?: 'query_root', searchIFSC?: { __typename?: 'searchIFSCOutput', bank_code: string, ifsc: string, bank: { __typename?: 'ref_bank', id: number } } | null | undefined };

export type GetNachMandatePropertiesQueryVariables = Types.Exact<{
  tradeId: Types.Scalars['Int'];
}>;


export type GetNachMandatePropertiesQuery = { __typename?: 'query_root', getNachMandateProperties?: { __typename?: 'GetNachMandatePropertiesOutput', final_collection_date: string, first_collection_date: string, mandate_type: string, monthly_emi: number } | null | undefined };

export type DownloadPrefilledNachMandateQueryVariables = Types.Exact<{
  tradeId: Types.Scalars['Int'];
}>;


export type DownloadPrefilledNachMandateQuery = { __typename?: 'query_root', downloadPrefilledNachMandate?: { __typename?: 'DownloadPrefilledNachMandateOutput', url: string } | null | undefined };

export type UploadSignedNachMandateMutationVariables = Types.Exact<{
  tradeId: Types.Scalars['Int'];
}>;


export type UploadSignedNachMandateMutation = { __typename?: 'mutation_root', uploadSignedNachMandate?: { __typename?: 'UploadSignedNachMandateOutput', url: string } | null | undefined };

export type SubmitSignedNachMandateMutationVariables = Types.Exact<{
  tradeId: Types.Scalars['Int'];
}>;


export type SubmitSignedNachMandateMutation = { __typename?: 'mutation_root', submitSignedNachMandate?: { __typename?: 'SubmitSignedNachMandateOutput', message: string } | null | undefined };

export type EditTradeContractsMutationVariables = Types.Exact<{
  args: Types.EditTradeContractsInput;
}>;


export type EditTradeContractsMutation = { __typename?: 'mutation_root', editTradeContracts?: { __typename?: 'EditTradeContractsOutput', message: string } | null | undefined };

export type UpdateTradeStatusMutationVariables = Types.Exact<{
  where: Types.Trade_Bool_Exp;
  status: Types.Scalars['String'];
}>;


export type UpdateTradeStatusMutation = { __typename?: 'mutation_root', update_trade?: { __typename?: 'trade_mutation_response', affected_rows: number } | null | undefined };


export const GetCustomersDocument = gql`
    query getCustomers($where1: subscription_bool_exp, $where2: subscription_bool_exp, $order_by: [subscription_order_by!], $offset: Int, $limit: Int, $bid_price: float8, $whereTradeSub: trade_subscription_bool_exp, $withTradeSubscriptions: Boolean!) {
  subscription_aggregate(where: $where1) {
    aggregate {
      count
    }
  }
  subscription(
    where: $where2
    order_by: $order_by
    offset: $offset
    limit: $limit
  ) {
    id
    customer_identifier
    customer_email
    customer_name
    billing_period
    amount_per_period
    amount_per_month
    billing_period_interval
    bid_amount(args: {bid_price: $bid_price})
  }
  trade_subscription(where: $whereTradeSub, order_by: {id: desc}) @include(if: $withTradeSubscriptions) {
    subscription_id
  }
}
    `;

/**
 * __useGetCustomersQuery__
 *
 * To run a query within a React component, call `useGetCustomersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCustomersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCustomersQuery({
 *   variables: {
 *      where1: // value for 'where1'
 *      where2: // value for 'where2'
 *      order_by: // value for 'order_by'
 *      offset: // value for 'offset'
 *      limit: // value for 'limit'
 *      bid_price: // value for 'bid_price'
 *      whereTradeSub: // value for 'whereTradeSub'
 *      withTradeSubscriptions: // value for 'withTradeSubscriptions'
 *   },
 * });
 */
export function useGetCustomersQuery(baseOptions: Apollo.QueryHookOptions<GetCustomersQuery, GetCustomersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCustomersQuery, GetCustomersQueryVariables>(GetCustomersDocument, options);
      }
export function useGetCustomersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCustomersQuery, GetCustomersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCustomersQuery, GetCustomersQueryVariables>(GetCustomersDocument, options);
        }
export type GetCustomersQueryHookResult = ReturnType<typeof useGetCustomersQuery>;
export type GetCustomersLazyQueryHookResult = ReturnType<typeof useGetCustomersLazyQuery>;
export type GetCustomersQueryResult = Apollo.QueryResult<GetCustomersQuery, GetCustomersQueryVariables>;
export const InitiateTradeDocument = gql`
    mutation initiateTrade($args: InitiateTradeInput!) {
  initiateTrade(args: $args) {
    code
    id
  }
}
    `;
export type InitiateTradeMutationFn = Apollo.MutationFunction<InitiateTradeMutation, InitiateTradeMutationVariables>;

/**
 * __useInitiateTradeMutation__
 *
 * To run a mutation, you first call `useInitiateTradeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useInitiateTradeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [initiateTradeMutation, { data, loading, error }] = useInitiateTradeMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useInitiateTradeMutation(baseOptions?: Apollo.MutationHookOptions<InitiateTradeMutation, InitiateTradeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<InitiateTradeMutation, InitiateTradeMutationVariables>(InitiateTradeDocument, options);
      }
export type InitiateTradeMutationHookResult = ReturnType<typeof useInitiateTradeMutation>;
export type InitiateTradeMutationResult = Apollo.MutationResult<InitiateTradeMutation>;
export type InitiateTradeMutationOptions = Apollo.BaseMutationOptions<InitiateTradeMutation, InitiateTradeMutationVariables>;
export const RegisterMandateDocument = gql`
    mutation registerMandate($args: RegisterNachMandateInput!) {
  registerNachMandate(args: $args) {
    message
    url
  }
}
    `;
export type RegisterMandateMutationFn = Apollo.MutationFunction<RegisterMandateMutation, RegisterMandateMutationVariables>;

/**
 * __useRegisterMandateMutation__
 *
 * To run a mutation, you first call `useRegisterMandateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMandateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMandateMutation, { data, loading, error }] = useRegisterMandateMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useRegisterMandateMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMandateMutation, RegisterMandateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMandateMutation, RegisterMandateMutationVariables>(RegisterMandateDocument, options);
      }
export type RegisterMandateMutationHookResult = ReturnType<typeof useRegisterMandateMutation>;
export type RegisterMandateMutationResult = Apollo.MutationResult<RegisterMandateMutation>;
export type RegisterMandateMutationOptions = Apollo.BaseMutationOptions<RegisterMandateMutation, RegisterMandateMutationVariables>;
export const SearchIfscDocument = gql`
    query searchIFSC($args: searchIFSCInput!) {
  searchIFSC(args: $args) {
    bank_code
    bank {
      id
    }
    ifsc
  }
}
    `;

/**
 * __useSearchIfscQuery__
 *
 * To run a query within a React component, call `useSearchIfscQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchIfscQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchIfscQuery({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useSearchIfscQuery(baseOptions: Apollo.QueryHookOptions<SearchIfscQuery, SearchIfscQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchIfscQuery, SearchIfscQueryVariables>(SearchIfscDocument, options);
      }
export function useSearchIfscLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchIfscQuery, SearchIfscQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchIfscQuery, SearchIfscQueryVariables>(SearchIfscDocument, options);
        }
export type SearchIfscQueryHookResult = ReturnType<typeof useSearchIfscQuery>;
export type SearchIfscLazyQueryHookResult = ReturnType<typeof useSearchIfscLazyQuery>;
export type SearchIfscQueryResult = Apollo.QueryResult<SearchIfscQuery, SearchIfscQueryVariables>;
export const GetNachMandatePropertiesDocument = gql`
    query getNachMandateProperties($tradeId: Int!) {
  getNachMandateProperties(args: {trade_id: $tradeId}) {
    final_collection_date
    first_collection_date
    mandate_type
    monthly_emi
  }
}
    `;

/**
 * __useGetNachMandatePropertiesQuery__
 *
 * To run a query within a React component, call `useGetNachMandatePropertiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetNachMandatePropertiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetNachMandatePropertiesQuery({
 *   variables: {
 *      tradeId: // value for 'tradeId'
 *   },
 * });
 */
export function useGetNachMandatePropertiesQuery(baseOptions: Apollo.QueryHookOptions<GetNachMandatePropertiesQuery, GetNachMandatePropertiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetNachMandatePropertiesQuery, GetNachMandatePropertiesQueryVariables>(GetNachMandatePropertiesDocument, options);
      }
export function useGetNachMandatePropertiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetNachMandatePropertiesQuery, GetNachMandatePropertiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetNachMandatePropertiesQuery, GetNachMandatePropertiesQueryVariables>(GetNachMandatePropertiesDocument, options);
        }
export type GetNachMandatePropertiesQueryHookResult = ReturnType<typeof useGetNachMandatePropertiesQuery>;
export type GetNachMandatePropertiesLazyQueryHookResult = ReturnType<typeof useGetNachMandatePropertiesLazyQuery>;
export type GetNachMandatePropertiesQueryResult = Apollo.QueryResult<GetNachMandatePropertiesQuery, GetNachMandatePropertiesQueryVariables>;
export const DownloadPrefilledNachMandateDocument = gql`
    query downloadPrefilledNachMandate($tradeId: Int!) {
  downloadPrefilledNachMandate(args: {trade_id: $tradeId}) {
    url
  }
}
    `;

/**
 * __useDownloadPrefilledNachMandateQuery__
 *
 * To run a query within a React component, call `useDownloadPrefilledNachMandateQuery` and pass it any options that fit your needs.
 * When your component renders, `useDownloadPrefilledNachMandateQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDownloadPrefilledNachMandateQuery({
 *   variables: {
 *      tradeId: // value for 'tradeId'
 *   },
 * });
 */
export function useDownloadPrefilledNachMandateQuery(baseOptions: Apollo.QueryHookOptions<DownloadPrefilledNachMandateQuery, DownloadPrefilledNachMandateQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DownloadPrefilledNachMandateQuery, DownloadPrefilledNachMandateQueryVariables>(DownloadPrefilledNachMandateDocument, options);
      }
export function useDownloadPrefilledNachMandateLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DownloadPrefilledNachMandateQuery, DownloadPrefilledNachMandateQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DownloadPrefilledNachMandateQuery, DownloadPrefilledNachMandateQueryVariables>(DownloadPrefilledNachMandateDocument, options);
        }
export type DownloadPrefilledNachMandateQueryHookResult = ReturnType<typeof useDownloadPrefilledNachMandateQuery>;
export type DownloadPrefilledNachMandateLazyQueryHookResult = ReturnType<typeof useDownloadPrefilledNachMandateLazyQuery>;
export type DownloadPrefilledNachMandateQueryResult = Apollo.QueryResult<DownloadPrefilledNachMandateQuery, DownloadPrefilledNachMandateQueryVariables>;
export const UploadSignedNachMandateDocument = gql`
    mutation uploadSignedNachMandate($tradeId: Int!) {
  uploadSignedNachMandate(args: {trade_id: $tradeId}) {
    url
  }
}
    `;
export type UploadSignedNachMandateMutationFn = Apollo.MutationFunction<UploadSignedNachMandateMutation, UploadSignedNachMandateMutationVariables>;

/**
 * __useUploadSignedNachMandateMutation__
 *
 * To run a mutation, you first call `useUploadSignedNachMandateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUploadSignedNachMandateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [uploadSignedNachMandateMutation, { data, loading, error }] = useUploadSignedNachMandateMutation({
 *   variables: {
 *      tradeId: // value for 'tradeId'
 *   },
 * });
 */
export function useUploadSignedNachMandateMutation(baseOptions?: Apollo.MutationHookOptions<UploadSignedNachMandateMutation, UploadSignedNachMandateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UploadSignedNachMandateMutation, UploadSignedNachMandateMutationVariables>(UploadSignedNachMandateDocument, options);
      }
export type UploadSignedNachMandateMutationHookResult = ReturnType<typeof useUploadSignedNachMandateMutation>;
export type UploadSignedNachMandateMutationResult = Apollo.MutationResult<UploadSignedNachMandateMutation>;
export type UploadSignedNachMandateMutationOptions = Apollo.BaseMutationOptions<UploadSignedNachMandateMutation, UploadSignedNachMandateMutationVariables>;
export const SubmitSignedNachMandateDocument = gql`
    mutation submitSignedNachMandate($tradeId: Int!) {
  submitSignedNachMandate(args: {trade_id: $tradeId}) {
    message
  }
}
    `;
export type SubmitSignedNachMandateMutationFn = Apollo.MutationFunction<SubmitSignedNachMandateMutation, SubmitSignedNachMandateMutationVariables>;

/**
 * __useSubmitSignedNachMandateMutation__
 *
 * To run a mutation, you first call `useSubmitSignedNachMandateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSubmitSignedNachMandateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [submitSignedNachMandateMutation, { data, loading, error }] = useSubmitSignedNachMandateMutation({
 *   variables: {
 *      tradeId: // value for 'tradeId'
 *   },
 * });
 */
export function useSubmitSignedNachMandateMutation(baseOptions?: Apollo.MutationHookOptions<SubmitSignedNachMandateMutation, SubmitSignedNachMandateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SubmitSignedNachMandateMutation, SubmitSignedNachMandateMutationVariables>(SubmitSignedNachMandateDocument, options);
      }
export type SubmitSignedNachMandateMutationHookResult = ReturnType<typeof useSubmitSignedNachMandateMutation>;
export type SubmitSignedNachMandateMutationResult = Apollo.MutationResult<SubmitSignedNachMandateMutation>;
export type SubmitSignedNachMandateMutationOptions = Apollo.BaseMutationOptions<SubmitSignedNachMandateMutation, SubmitSignedNachMandateMutationVariables>;
export const EditTradeContractsDocument = gql`
    mutation editTradeContracts($args: EditTradeContractsInput!) {
  editTradeContracts(args: $args) {
    message
  }
}
    `;
export type EditTradeContractsMutationFn = Apollo.MutationFunction<EditTradeContractsMutation, EditTradeContractsMutationVariables>;

/**
 * __useEditTradeContractsMutation__
 *
 * To run a mutation, you first call `useEditTradeContractsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useEditTradeContractsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [editTradeContractsMutation, { data, loading, error }] = useEditTradeContractsMutation({
 *   variables: {
 *      args: // value for 'args'
 *   },
 * });
 */
export function useEditTradeContractsMutation(baseOptions?: Apollo.MutationHookOptions<EditTradeContractsMutation, EditTradeContractsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<EditTradeContractsMutation, EditTradeContractsMutationVariables>(EditTradeContractsDocument, options);
      }
export type EditTradeContractsMutationHookResult = ReturnType<typeof useEditTradeContractsMutation>;
export type EditTradeContractsMutationResult = Apollo.MutationResult<EditTradeContractsMutation>;
export type EditTradeContractsMutationOptions = Apollo.BaseMutationOptions<EditTradeContractsMutation, EditTradeContractsMutationVariables>;
export const UpdateTradeStatusDocument = gql`
    mutation updateTradeStatus($where: trade_bool_exp!, $status: String!) {
  update_trade(_set: {status: $status}, where: $where) {
    affected_rows
  }
}
    `;
export type UpdateTradeStatusMutationFn = Apollo.MutationFunction<UpdateTradeStatusMutation, UpdateTradeStatusMutationVariables>;

/**
 * __useUpdateTradeStatusMutation__
 *
 * To run a mutation, you first call `useUpdateTradeStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTradeStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTradeStatusMutation, { data, loading, error }] = useUpdateTradeStatusMutation({
 *   variables: {
 *      where: // value for 'where'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUpdateTradeStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTradeStatusMutation, UpdateTradeStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTradeStatusMutation, UpdateTradeStatusMutationVariables>(UpdateTradeStatusDocument, options);
      }
export type UpdateTradeStatusMutationHookResult = ReturnType<typeof useUpdateTradeStatusMutation>;
export type UpdateTradeStatusMutationResult = Apollo.MutationResult<UpdateTradeStatusMutation>;
export type UpdateTradeStatusMutationOptions = Apollo.BaseMutationOptions<UpdateTradeStatusMutation, UpdateTradeStatusMutationVariables>;
export const namedOperations = {
  Query: {
    getCustomers: 'getCustomers',
    searchIFSC: 'searchIFSC',
    getNachMandateProperties: 'getNachMandateProperties',
    downloadPrefilledNachMandate: 'downloadPrefilledNachMandate'
  },
  Mutation: {
    initiateTrade: 'initiateTrade',
    registerMandate: 'registerMandate',
    uploadSignedNachMandate: 'uploadSignedNachMandate',
    submitSignedNachMandate: 'submitSignedNachMandate',
    editTradeContracts: 'editTradeContracts',
    updateTradeStatus: 'updateTradeStatus'
  }
}