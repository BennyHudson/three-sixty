import type { ReactNode } from 'react'

export interface LinkProps {
  to?: string
  text?: string
  inverse?: boolean
  children?: ReactNode
  href?: string
  showUnderline?: boolean
  appearance?: 'primary' | 'secondary'
}
