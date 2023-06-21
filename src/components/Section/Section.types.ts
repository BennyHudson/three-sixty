import type { ReactNode } from 'react'

export interface SectionProps {
  children: ReactNode
  appearance?: 'primary' | 'secondary' | 'tertiary'
  paddingLevel?: 1 | 2
}
