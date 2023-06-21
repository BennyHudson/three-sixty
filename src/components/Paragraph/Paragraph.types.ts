import type { ReactNode } from 'react'

import type { ParagraphKeys } from '@themes/threeSixtyTheme/constants/typography.types'

export interface ParagraphProps {
  children?: ReactNode
  text?: string
  size?: ParagraphKeys
  weight?: 1 | 2 | 3
  inverse?: boolean
  noMargin?: boolean
  appearance?: 'primary' | 'secondary'
}
