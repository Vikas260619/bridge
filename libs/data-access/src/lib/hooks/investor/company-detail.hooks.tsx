import * as Types from '../../types';

import { gql } from '@apollo/client';
import { BidDataByDealFragmentFragmentDoc } from './bid-data-by-deal.fragment.hooks';
import * as Apollo from '@apollo/client';
const defaultOptions =  {}
export type GetCompanyDetailsQueryVariables = Types.Exact<{
  dealId: Types.Scalars['Int'];
}>;


export type GetCompanyDetailsQuery = { __typename?: 'query_root', deal: Array<{ __typename?: 'deal', id: number, bid_closure: any, status?: string | null | undefined, company_score: { __typename?: 'company_score', rating: any, arr: any, updated_at: any, financials_score: any, business_growth_score: any, capital_efficiency_score: any, customer_value_score: any, compliance_score?: any | null | undefined, min_recommended_bid: any, max_recommended_bid: any, arpa?: any | null | undefined, churn?: any | null | undefined, estimated_runway: number, gross_margin: any, dtoe_ratio?: any | null | undefined, net_profit?: any | null | undefined, net_cash_flow?: any | null | undefined, ltv_cac: any, revenue_retention: any, mrr_growth?: any | null | undefined, min_bid_price: any, report_file_id?: number | null | undefined }, company: { __typename?: 'company', id: number, description?: string | null | undefined, incorporation_date?: any | null | undefined, total_funding?: any | null | undefined, total_customers?: number | null | undefined, marquee_customers?: string | null | undefined, marquee_investors?: any | null | undefined, remaining_tradable_value?: any | null | undefined, ref_company_type?: { __typename?: 'ref_company_type', name: string } | null | undefined }, your_bids?: Array<{ __typename?: 'bid', id: number, price: any, created_at: any, your_bid?: boolean | null | undefined }> | null | undefined, highest_bid?: Array<{ __typename?: 'bid', id: number, price: any, created_at: any, your_bid?: boolean | null | undefined }> | null | undefined, bids_aggregate: { __typename?: 'bid_aggregate', aggregate?: { __typename?: 'bid_aggregate_fields', count: number } | null | undefined, nodes: Array<{ __typename?: 'bid', id: number, price: any, created_at: any, your_bid?: boolean | null | undefined }> } }> };


export const GetCompanyDetailsDocument = gql`
    query getCompanyDetails($dealId: Int!) {
  deal(where: {id: {_eq: $dealId}}) {
    id
    bid_closure
    status
    company_score {
      rating
      arr
      updated_at
      financials_score
      business_growth_score
      capital_efficiency_score
      customer_value_score
      compliance_score
      min_recommended_bid
      max_recommended_bid
      arpa
      churn
      estimated_runway
      gross_margin
      capital_efficiency_score
      dtoe_ratio
      net_profit
      net_cash_flow
      ltv_cac
      revenue_retention
      mrr_growth
      min_bid_price
      report_file_id
    }
    company {
      id
      description
      incorporation_date
      total_funding
      total_customers
      marquee_customers
      marquee_investors
      remaining_tradable_value
      ref_company_type {
        name
      }
    }
    ...bidDataByDealFragment
  }
}
    ${BidDataByDealFragmentFragmentDoc}`;

/**
 * __useGetCompanyDetailsQuery__
 *
 * To run a query within a React component, call `useGetCompanyDetailsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCompanyDetailsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCompanyDetailsQuery({
 *   variables: {
 *      dealId: // value for 'dealId'
 *   },
 * });
 */
export function useGetCompanyDetailsQuery(baseOptions: Apollo.QueryHookOptions<GetCompanyDetailsQuery, GetCompanyDetailsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetCompanyDetailsQuery, GetCompanyDetailsQueryVariables>(GetCompanyDetailsDocument, options);
      }
export function useGetCompanyDetailsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetCompanyDetailsQuery, GetCompanyDetailsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetCompanyDetailsQuery, GetCompanyDetailsQueryVariables>(GetCompanyDetailsDocument, options);
        }
export type GetCompanyDetailsQueryHookResult = ReturnType<typeof useGetCompanyDetailsQuery>;
export type GetCompanyDetailsLazyQueryHookResult = ReturnType<typeof useGetCompanyDetailsLazyQuery>;
export type GetCompanyDetailsQueryResult = Apollo.QueryResult<GetCompanyDetailsQuery, GetCompanyDetailsQueryVariables>;
export const namedOperations = {
  Query: {
    getCompanyDetails: 'getCompanyDetails'
  }
}