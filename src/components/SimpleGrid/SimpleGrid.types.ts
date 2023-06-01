import type { ReactNode } from 'react'

import type { SpacingKeys } from '@themes/threeSixtyTheme/constants/spacing.types'

export interface SimpleGridProps {
  children: ReactNode | ReactNode[]
  columns: {
    sm: number
    md?: number
    lg?: number
  }
  spacing?: SpacingKeys
  rowSpacing?: SpacingKeys
  smCarousel?: boolean
}
