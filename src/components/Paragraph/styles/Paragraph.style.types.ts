import type { ParagraphKeys } from '@themes/threeSixtyTheme/constants/typography.types'
import type { Theme } from '@themes/threeSixtyTheme/threeSixtyTheme.types'

import type { ParagraphProps } from '../Paragraph.types'

export interface StyledParagraphProps {
  theme: Theme
  size: ParagraphKeys
  weight: ParagraphProps['weight']
  inverse: boolean
  noMargin: boolean
  appearance: ParagraphProps['appearance']
}
