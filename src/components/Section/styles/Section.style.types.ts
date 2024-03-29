import type { Theme } from '@themes/threeSixtyTheme/threeSixtyTheme.types'

import type { SectionProps } from '../Section.types'

export interface StyledSectionProps {
  theme: Theme
  appearance: SectionProps['appearance']
  paddingLevel: SectionProps['paddingLevel']
  extraMargin: boolean
  extraMarginBottom: boolean
  hideOverflow: boolean
}
