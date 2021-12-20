export type ButtonProps = {
  variant?: 'outlined'|'contained'|'shadow'
  color?: string
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  label: string
  onClick?: () => void
}