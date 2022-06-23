// assets imports
import React, { useState, useEffect } from 'react';
import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  Grid,
  InputAdornment,
  Link,
  TextField,
} from '@mui/material';
import { FormHelperText, CircularProgress } from '@mui/material';
import work from '../../../assets/images/work.svg';
import error from '../../../assets/images/error.svg';
import {
  Company,
  CompanyErrors,
} from '@bridgeup/common/auth/models/Authentication';

import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import CustomButton from '../../../components/CustomButton/CustomButton';

interface StepProps {
  setStep: Function;
  formError: CompanyErrors;
  setFormError: Function;
  company: Company;
  updateFormData: Function;
  submit: Function;
  setCompany: Function;
  acceptTerms: boolean;
  setAcceptTerms: Function;
  isLoading: boolean;
}
export function Step2(props: StepProps) {
  const {
    setStep,
    formError,
    company,
    updateFormData,
    setFormError,
    setCompany,
    acceptTerms,
    setAcceptTerms,
    submit,
    isLoading,
  } = props;
  const [fmtMobile_number, setFmtMobileNumber] = useState<string>('');

  const updatePhoneNumber = (phone: string) => {
    setFmtMobileNumber(phone);
    const code = phone.slice(0, 2);
    const number = phone.slice(2, phone.length);
    setCompany({ ...company, mobile_number: number, country_code: `${code}` });
    if (!number || !code || number.length != 10) {
      setFormError({ ...formError, mobile_number: false });
    }
  };

  const validateStep2 = (): boolean => {
    const initState: CompanyErrors = {
      tenant_name: false,
      email: false,
      password: false,
      first_name: false,
      last_name: false,
      mobile_number: false,
      country_code: false,
      acceptTerms: false,
    };
    if (
      !company.first_name ||
      company.first_name.length < 2 ||
      /\d/.test(company.first_name)
    ) {
      setFormError({ ...initState, first_name: true });
      return false;
    } else if (
      !company.last_name ||
      company.first_name.length < 2 ||
      /\d/.test(company.last_name)
    ) {
      setFormError({ ...initState, last_name: true });
      return false;
    } else if (!company.mobile_number || company.mobile_number.length != 10) {
      setFormError({ ...initState, mobile_number: true });
      return false;
    } else if (!company.country_code) {
      setFormError({ ...initState, country_code: true });
      return false;
    } else if (!acceptTerms) {
      setFormError({ ...initState, acceptTerms: true });
      return false;
    } else {
      setFormError(initState);
    }
    return true;
  };

  const submitForm = (e: React.FormEvent): void => {
    e.preventDefault();
    const status: boolean = validateStep2();

    if (status) {
      submit();
    }
  };

  useEffect(() => {
    if (company.mobile_number && company.country_code) {
      setFmtMobileNumber(`+${company.country_code}${company.mobile_number}`);
    }
  }, [company.mobile_number]);

  const onFNameFocusout = () => {
    if (
      !company.first_name ||
      company.first_name.length < 2 ||
      /\d/.test(company.first_name)
    ) {
      setFormError({ ...formError, first_name: true });
    } else {
      setFormError({ ...formError, first_name: false });
    }
  };

  const onLNameFocusout = () => {
    if (
      !company.last_name ||
      company.last_name.length < 2 ||
      /\d/.test(company.last_name)
    ) {
      setFormError({ ...formError, last_name: true });
    } else {
      setFormError({ ...formError, last_name: false });
    }
  };
  const onPhoneFocusout = () => {
    if (!company.mobile_number || company.mobile_number.length != 10) {
      setFormError({ ...formError, mobile_number: true });
    } else if (!company.country_code) {
      setFormError({ ...formError, country_code: true });
    } else {
      setFormError({ ...formError, mobile_number: false, country_code: false });
    }
  };

  return (
    <form className="mt-5" onSubmit={(e) => submitForm(e)}>
      <div>
        <span className="text-24 text-bold">We’d Love To Get To Know You</span>
        <div className="text-12 text-regular text-color-3">
          <span className="color-status-error">*</span>mandatory fields
        </div>
        <Grid container spacing={4}>
          <Grid item xs={7}>
            <div className="mt-8">
              <TextField
                onBlur={onFNameFocusout}
                helperText={formError.first_name && 'Enter a valid first name'}
                error={formError.first_name}
                fullWidth
                required
                label="First Name"
                variant="filled"
                className="input-fields"
                value={company.first_name}
                onChange={(e) => updateFormData(e, 'first_name')}
              />
            </div>
          </Grid>
          <Grid item xs={5}>
            <div className="mt-8">
              <TextField
                onBlur={onLNameFocusout}
                helperText={formError.last_name && 'Enter a valid last name'}
                error={formError.last_name}
                fullWidth
                required
                label="Last Name"
                variant="filled"
                className="input-fields"
                value={company.last_name}
                onChange={(e) => updateFormData(e, 'last_name')}
              />
            </div>
          </Grid>
        </Grid>
        <div className="mt-10">
          <TextField
            fullWidth
            label="Designation"
            variant="filled"
            className="input-fields"
            value={company.designation}
            onChange={(e) => updateFormData(e, 'designation')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <img src={work} alt="logo" />
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="mt-10">
          <FormControl fullWidth>
            <PhoneInput
              onBlur={onPhoneFocusout}
              containerClass={
                formError.mobile_number || formError.country_code
                  ? 'custom-input error-phone'
                  : 'custom-input'
              }
              value={fmtMobile_number}
              onChange={(phone) => updatePhoneNumber(phone)}
              country={'in'}
            />
            {(formError.mobile_number || formError.country_code) && (
              <FormHelperText error>Enter a valid Phone Number</FormHelperText>
            )}
          </FormControl>
        </div>
        <div className="mt-6 checkbox-hold">
          <FormControl fullWidth>
            <FormControlLabel
              value={acceptTerms}
              className="w-full"
              control={
                <Checkbox
                  checked={acceptTerms}
                  name="checkedB"
                  color="primary"
                  onChange={(e) => setAcceptTerms(e.target.checked)}
                />
              }
              label={
                <FormControl className="w-full">
                  <span>
                    I accept BridgeUp’s{' '}
                    <a
                      href="https://bridgeup.com/terms-and-conditions/"
                      target="blank"
                    >
                      terms & conditions
                    </a>{' '}
                    <span>and </span>
                    <a
                      href="https://bridgeup.com/privacy-policy/"
                      target="blank"
                    >
                      {' '}
                      privacy policy
                    </a>
                    {formError.acceptTerms && (
                      <FormHelperText error>
                        Please accept terms and conditions and privacy policy
                      </FormHelperText>
                    )}
                  </span>
                </FormControl>
              }
            />
          </FormControl>
        </div>
        <div className="mt-10 btn-holders">
          <CustomButton
            onClick={(e: any) => submitForm(e)}
            disabled={isLoading}
            fullWidth={true}
            buttonClassName={'primary-button'}
            type="submit"
          >
            SIGN UP
            {isLoading && (
              <CircularProgress size={20} color="primary" sx={{ ml: 1 }} />
            )}
          </CustomButton>

          <Button
            variant="anchor"
            size="small"
            onClick={() => setStep(1)}
            sx={{ mt: 2 }}
          >
            BACK
          </Button>
        </div>
      </div>
    </form>
  );
}

export default Step2;
