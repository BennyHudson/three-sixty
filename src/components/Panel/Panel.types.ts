import type { ReactNode } from 'react'

export interface PanelProps {
  children: ReactNode
  appearance: 'primary' | 'secondary' | 'tertiary'
  id?: string
}
