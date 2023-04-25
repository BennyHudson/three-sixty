import { ReactNode } from 'react'

import { ParagraphKeys } from '@themes/threeSixtyTheme/constants/typography.types'

export interface ParagraphProps {
  children?: ReactNode
  text?: string
  size?: ParagraphKeys
  weight?: 1 | 2 | 3
  inverse?: boolean
}
