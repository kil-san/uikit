import styled from 'styled-components'
import { ButtonProps } from './types'

interface StyledButtonProps {
  color?: string
  backgroundColor?: string
  size?: ButtonProps['size']
}

export const StyledButton = styled.button<StyledButtonProps>`
  border: none;
  border-radius: ${({ size }) => (!size || size === 'medium' ? '20px' 
  : size === 'small' ? "15px" : '30px')};
  color: ${({ color }) => color ? color : 'black'};
  background-color: ${({ backgroundColor }) => 
    backgroundColor ? backgroundColor : 'black'};
  padding: ${({ size }) => (!size || size === 'medium' ? '10px 20px' 
    : size === 'small' ? '5px 10px' : '15px 30px')};
  font-size: ${({ size }) => (!size || size === 'medium' ? '14px' 
    : size === 'small' ? "10px" : '20px')};
`

export const StyledOutlinedButton = styled(StyledButton)`
  
`

export const StyledContainedButton = styled(StyledButton)`
  
`

export const StyledShadowButton = styled(StyledButton)`
  
`