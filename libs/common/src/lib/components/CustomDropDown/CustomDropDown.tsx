import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import './CustomDropDown.scss';

interface CustomDropDownProps {
  id: string;
  value: any;
  label: string;
  options: any;
  onChange: any;
  rootClass?: any;
  defaultValue?: any;
  disabled?: boolean;
  textFieldError?: boolean;
  helperText?: string;
  disableClearable?: boolean;
  textFieldDisabled?: boolean;
  variant: 'standard' | 'filled' | 'outlined' | undefined;
  getOptionLabel(option: any): any;
  getOptionDisabled?(option: any): any;
  noOptionsText?: string;
  loading?: boolean;
  loadingText?: string;
  renderOption?: any
  multiple?: boolean
}

const CustomDropDown: React.FunctionComponent<CustomDropDownProps> = ({
  id,
  label,
  value,
  options,
  onChange,
  variant,
  rootClass,
  defaultValue,
  textFieldError,
  helperText,
  disabled,
  disableClearable,
  textFieldDisabled,
  getOptionLabel,
  getOptionDisabled,
  noOptionsText,
  loadingText,
  loading,
  renderOption,
  multiple
}) => {
  return (
    <Autocomplete
      id={id}
      value={value}
      defaultValue={defaultValue}
      options={options}
      autoComplete
      disabled={disabled || false}
      includeInputInList
      onChange={onChange}
      multiple={multiple || false}
      getOptionDisabled={getOptionDisabled || undefined}
      getOptionLabel={getOptionLabel}
      renderOption={renderOption}
      disableClearable={disableClearable || false}
      classes={{
        root: rootClass ? rootClass : '',
        option: 'custom-options',
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label={label}
          variant={variant}
          onKeyDown={(event) => {
            if (textFieldDisabled) {
              event.preventDefault();
            }
          }}
          error={textFieldError}
          helperText={helperText}
          className={'custom-textField'}
        />
      )}
      noOptionsText={noOptionsText}
      loading={loading}
      loadingText={loadingText}
    />
  );
};

export default CustomDropDown;
