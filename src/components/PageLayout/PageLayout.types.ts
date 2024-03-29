import type { ReactNode } from 'react'

export interface PageLayoutProps {
  children: ReactNode
  location: {
    pathname: string
    hash?: string
  }
}
