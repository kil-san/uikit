import React from 'react'
import { ButtonProps } from './types'
import {
  StyledContainedButton,
  StyledOutlinedButton,
  StyledShadowButton
} from './styled'

const Button: React.FC<ButtonProps> = ({
  label,
  variant,
  ...props
}) => {

  if (variant === 'outlined') {
    return <StyledOutlinedButton {...props}>
      {label}
    </StyledOutlinedButton>
  }

  if (variant === 'shadow') {
    return <StyledShadowButton {...props}>
      {label}
    </StyledShadowButton>
  }

  return (
    <StyledContainedButton {...props}>
      {label}
    </StyledContainedButton>
  )
}

export default Button
