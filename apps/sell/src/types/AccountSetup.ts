import { Maybe } from '@bridgeup/data-access';

export interface CardDataType {
  auth_protocol: string;
  category: string;
  company_integrations: CompanyIntegration[] | undefined;
  is_active: boolean;
  source: string;
  url: Maybe<string> | undefined;
  metadata: any;
  logo_url: string;
}

interface CompanyIntegration {
  source: string;
  status: string;
}

export interface ChargebeeType {
  api_key: string;
  site: string;
}

export interface ChargebeeErrorType {
  api_key: boolean;
  site: boolean;
}

export interface BankType {
  id: number;
  name: string;
  bank_code: string;
}
