export interface Customer {
  id: number
  customer_email: string
  customer_name?: string | null | undefined
  billing_period: string
  amount_per_period: any
  amount_per_month: any
  bid_amount?: any
}