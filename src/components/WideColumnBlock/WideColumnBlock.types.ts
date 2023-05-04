import type { ReactNode } from 'react'

export interface WideColumnBlockProps {
  leftColumn: ReactNode
  rightColumn: ReactNode
  inverse?: boolean
  verticalAlign?: 'top' | 'center'
}
