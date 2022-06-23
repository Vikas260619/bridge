export interface Company {
  tenant_name: string;
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  designation: string | undefined;
  mobile_number: string;
  country_code: string;
  estimated_arr: number | string;
}

export interface SignValidate {
  tenant_name: string;
  email: string;
  password: string;
  estimated_arr: number | null;
}

export interface CompanyErrors {
  tenant_name: boolean;
  email: boolean;
  password: boolean;
  first_name: boolean;
  last_name: boolean;
  mobile_number: boolean;
  country_code: boolean;
  acceptTerms: boolean;
}

export interface Login {
  email: string;
  password: string;
}

export interface LoginError {
  email: boolean;
  password: boolean;
}

export interface confirmForgotPassword {
  code: string;
  newPassword: string;
}

export interface PasswordHint {
  len: boolean;
  lowCase: boolean;
  specialChar: boolean;
  upCase: boolean;
  number: boolean;
}
