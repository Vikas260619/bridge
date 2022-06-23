import React, { useState, useEffect, ChangeEvent, KeyboardEvent } from 'react';
import { InputAdornment, IconButton, TextField } from '@mui/material';

import './CustomInput.scss';

interface CustomInputProps {
  onBlur?: any;
  error?: any;
  type?: any;
  helperText?: string;
  label: any;
  variant: any;
  className?: string;
  value: any;
  adornment?: any;
  onChange(e?: any): void;
  disabled?: boolean;
  inputAttrProps?: any;
}

const CustomInput: React.FunctionComponent<CustomInputProps> = ({
  onBlur,
  error,
  type,
  helperText,
  label,
  variant,
  className,
  value,
  adornment,
  onChange,
  disabled,
  inputAttrProps,
}) => {
  return (
    <TextField
      disabled={disabled}
      type={type || 'text'}
      onBlur={onBlur}
      error={error}
      helperText={helperText}
      fullWidth
      required
      label={label}
      variant={variant || 'filled'}
      className={`${className} custom-textfield`}
      value={value}
      onChange={onChange}
      inputProps={inputAttrProps}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">{adornment}</InputAdornment>
        ),
      }}
    />
  );
};

export default CustomInput;
