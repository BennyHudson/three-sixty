import type { ReactNode } from 'react'

export interface TitleProps {
  title: string
  link?: {
    to: string
    text?: string
  }
  inverse?: boolean
}
