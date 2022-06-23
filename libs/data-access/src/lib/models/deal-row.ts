import Bid from './bid';

export interface DealStatus {
  value: DealStatusEnum;
  className: DealStatusColorClassEnum;
}
export interface DealRow {
  id: number;
  company_id: number;
  score: number;
  max_trade_value: number;
  bid_closure: string;
  status: DealStatus;
  total_bids: number;
  live_bid: number;
  bids: Bid[];
}

export const enum DealStatusEnum {
  BIDDING = 'ACCEPTING BIDS',
  AVAILABLE = 'CLOSED',
}

export const enum DealStatusColorClassEnum {
  BIDDING = 'color-status-warning',
  AVAILABLE = 'text-color-2',
}
