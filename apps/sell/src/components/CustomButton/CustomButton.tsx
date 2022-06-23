import React from 'react'
import { Button } from '@mui/material'
import './CustomButton.scss'

interface CustomButtonProps {
  onClick?(e?: any): void
  disabled?: boolean
  startIcon?: React.ReactNode
  children?: React.ReactNode
  invertedColor?: boolean
  buttonClassName?: string
  customClassName?: string
  fullWidth?: boolean
  style?: any
  variant?: any
  type?: any
}

const CustomButton: React.FunctionComponent<CustomButtonProps> = ({
  onClick,
  disabled,
  startIcon,
  children,
  fullWidth,
  buttonClassName,
  customClassName,
  style,
  variant,
  type,
}) => {
  return (
    <Button
      type={type}
      className={`button ${buttonClassName} ${customClassName}`}
      onClick={onClick}
      classes={{
        endIcon: 'endIcon',
      }}
      style={style}
      endIcon={startIcon ? startIcon : null}
      disabled={disabled}
      color="primary"
      fullWidth={fullWidth || false}
      variant={variant || 'contained'}
      disableElevation
    >
      {children}
    </Button>
  )
}

export default CustomButton
