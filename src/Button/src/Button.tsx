import React from 'react'
import { Button as MuiButton } from '@mui/material'
import type { ButtonProps } from './Button.interface'

export const Button: React.FC<ButtonProps> = ({ children, ...rest }) => {
  return <MuiButton {...rest}>{children}</MuiButton>
}
