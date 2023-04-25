import { ParagraphKeys } from '@themes/threeSixtyTheme/constants/typography.types'
import { Theme } from '@themes/threeSixtyTheme/threeSixtyTheme.types'

import { ParagraphProps } from '../Paragraph.types'

export interface StyledParagraphProps {
  theme: Theme
  size: ParagraphKeys
  weight: ParagraphProps['weight']
  inverse: boolean
}
