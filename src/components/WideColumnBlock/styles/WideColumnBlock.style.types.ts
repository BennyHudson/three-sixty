import type { Theme } from '@themes/threeSixtyTheme/threeSixtyTheme.types'

import type { WideColumnBlockProps } from '../WideColumnBlock.types'

export interface StyledWideColumnBlockProps {
  theme: Theme
  verticalAlign: WideColumnBlockProps['verticalAlign']
  sticky: boolean
  headerHeight: number
  reverse: boolean
}
