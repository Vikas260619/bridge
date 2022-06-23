// assets imports
import React, { useState } from 'react';
import {
  CircularProgress,
  Button,
  FilledInput,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  TextField,
  Typography,
  Link,
  Select,
  MenuItem,
} from '@mui/material';
import { FormHelperText } from '@mui/material';
import email from '../../../assets/images/email.svg';
import error from '../../../assets/images/error.svg';
import census from '../../../assets/images/census.svg';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import 'react-phone-input-2/lib/style.css';
import {
  Company,
  CompanyErrors,
  PasswordHint,
} from '@bridgeup/common/auth/models/Authentication';
import { signupValidate } from '@bridgeup/common/auth/services/Signup';
import { API_ERRORS } from '../../../utils/constants';
import CustomButton from '../../../components/CustomButton/CustomButton';
import CustomInput from '../../../components/CustomInput/CustomInput';
import { LoadingButton } from '@mui/lab';
import { ARR } from '../../../utils/constants';
import { Analytics } from '@segment/analytics-next';

interface StepProps {
  setStep: Function;
  formError: CompanyErrors;
  setFormError: Function;
  company: Company;
  updateFormData: Function;
  passwordHint: PasswordHint;
  setError: Function;
}
export function Step1(props: StepProps) {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [isLoading, setLoading] = useState(false);
  const {
    setStep,
    formError,
    company,
    updateFormData,
    setFormError,
    passwordHint,
    setError,
  } = props;
  const [analytics, setAnalytics] = useState<Analytics | undefined>(undefined);
  const isValidPassword = (password: string) => {
    var regex: RegExp =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@#$!%*?&])[A-Za-z\d@#$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const isValidEmail = (email: string) => {
    if (
      !email.toLowerCase().includes('gmail') &&
      !email.toLowerCase().includes('yahoo') &&
      !email.toLowerCase().includes('hotmail') &&
      !email.toLowerCase().includes('test')
    ) {
      var regex: RegExp =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(email);
    }

    return false;
  };

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const submitCompanyDetails = (e: React.FormEvent): void => {
    e.preventDefault();
    const status: boolean = validateStep1();
    setError('');

    window.analytics?.track('signup_part1', {
      email: company.email,
      company_name: company.tenant_name,
    });
    if (status) {
      setLoading(true);
      const promise = new Promise(
        (resolve: (reason?: any) => void, reject: (reason?: any) => void) => {
          signupValidate(
            {
              email: company.email,
              password: company.password,
              tenant_name: company.tenant_name,
              estimated_arr: Number(company.estimated_arr),
            },
            resolve,
            reject
          );
        }
      );

      promise.then(
        (res) => {
          setLoading(false);
          setStep(2);
        },
        (error) => {
          let message = error.errorMessage;
          if (API_ERRORS.SIGN_UP.hasOwnProperty(error.errorCode)) {
            message = API_ERRORS.SIGN_UP[error.errorCode];
          }
          setLoading(false);
          setError(message);
        }
      );
    }
  };

  const validateStep1 = (): boolean => {
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
    if (!company.tenant_name || company.tenant_name.length < 3) {
      setFormError({ ...initState, tenant_name: true });
      return false;
    } else if (!company.email || !isValidEmail(company.email)) {
      setFormError({ ...initState, email: true });
      return false;
    } else if (!company.password || !isValidPassword(company.password)) {
      setFormError({ ...initState, password: true });
      return false;
    }
    // highlightPassword();
    return true;
  };

  const onCompanyFocusout = (e: any) => {
    e.preventDefault();
    if (!company.tenant_name || company.tenant_name.length < 3) {
      setFormError({ ...formError, tenant_name: true });
    } else {
      setFormError({ ...formError, tenant_name: false });
    }
  };

  const onEmailFocusout = (e: any) => {
    e.preventDefault();
    if (!company.email || !isValidEmail(company.email)) {
      setFormError({ ...formError, email: true });
    } else {
      setFormError({ ...formError, email: false });
    }
  };

  const onPasswordFocusout = (e: any) => {
    e.preventDefault();
    if (!company.password || !isValidPassword(company.password)) {
      setFormError({ ...formError, password: true });
    } else {
      setFormError({ ...formError, password: false });
    }
  };

  const moveTo = (e: React.MouseEvent<HTMLAnchorElement>, url: string) => {
    e.preventDefault();
    navigate(url);
  };

  return (
    <form className="mt-5" onSubmit={submitCompanyDetails}>
      <div>
        <div className="text-24 text-bold">Get Started With BridgeUp</div>
        <div className="text-12 text-regular text-color-3">
          <span className="color-status-error">*</span>mandatory fields
        </div>
        <div className="mt-8">
          {/* TODO: remove custom class from text field */}
          <TextField
            type="text"
            onBlur={onCompanyFocusout}
            error={formError.tenant_name}
            helperText="Please enter the full legal name of your company as mentioned in
                the company PAN card"
            fullWidth
            required
            label="Company Name"
            variant="filled"
            className={`input-fields custom-textfield bup-textfield`}
            value={company.tenant_name}
            onChange={(e) => updateFormData(e, 'tenant_name')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  {formError.tenant_name ? (
                    <img src={error} alt="logo" />
                  ) : (
                    <img
                      style={{ paddingLeft: '12px' }}
                      src={email}
                      alt="logo"
                    />
                  )}
                </InputAdornment>
              ),
            }}
          />
        </div>
        <div className="mt-5">
          <FormControl variant="filled" fullWidth>
            <InputLabel id="demo-simple-select-filled-label">
              Select your company's Estimated ARR*
            </InputLabel>
            <Select
              labelId="demo-simple-select-filled-label"
              id="demo-simple-select-filled"
              value={company.estimated_arr}
              onChange={(e: any) => updateFormData(e, 'estimated_arr')}
            >
              {ARR.map((item: any, index) => (
                <MenuItem key={index} value={item.value}>
                  {item.key}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </div>
        <div className="mt-8">
          <CustomInput
            onBlur={onEmailFocusout}
            error={formError.email}
            helperText={formError.email ? 'Enter a valid work email' : ' '}
            label="Work Email Address"
            variant="filled"
            className="input-fields"
            value={company.email}
            onChange={(e) => updateFormData(e, 'email')}
            adornment={
              formError.email ? (
                <img src={error} alt="logo" />
              ) : (
                <img style={{ paddingLeft: '12px' }} src={email} alt="logo" />
              )
            }
          />
        </div>
        <div className="mt-10">
          <CustomInput
            onBlur={onPasswordFocusout}
            error={formError.password}
            // helperText={
            //   formError.password ? ' Please enter correct password' : ' '
            // }
            label="Set a Password"
            variant="filled"
            className="input-fields"
            type={showPassword ? 'text' : 'password'}
            value={company.password}
            onChange={(e) => updateFormData(e, 'password')}
            adornment={
              <IconButton
                aria-label="toggle password visibility"
                onClick={() => setShowPassword(!showPassword)}
                onMouseDown={(e) => handleMouseDownPassword(e)}
                edge="end"
                style={{ color: '#464F60' }}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            }
          />
          <div className="mt-5"></div>
          <div className="validators mt-2">
            <Grid container>
              <Grid item xs={6}>
                <span className={passwordHint.len ? 'white' : ''}>
                  Minimum 8 characters
                </span>
                <span className={passwordHint.specialChar ? 'white' : ''}>
                  Contains a special character
                </span>
                <span className={passwordHint.number ? 'white' : ''}>
                  Contains a number
                </span>
              </Grid>
              <Grid item xs={6}>
                <span className={passwordHint.lowCase ? 'white' : ''}>
                  Contains a lowercase letter
                </span>
                <span className={passwordHint.upCase ? 'white' : ''}>
                  Contains an uppercase letter
                </span>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className="btn-holders mt-10 mb-10">
          <LoadingButton
            onClick={(e: any) => submitCompanyDetails(e)}
            disabled={isLoading}
            loading={isLoading}
            fullWidth={true}
            variant="primary"
            type="submit"
          >
            CONTINUE
          </LoadingButton>
          <Button
            variant={'anchor'}
            component={Link}
            disabled={isLoading}
            onClick={() => navigate('/login')}
            sx={{ mt: 2 }}
          >
            BACK TO LOGIN
          </Button>
        </div>
      </div>
    </form>
  );
}

export default Step1;
