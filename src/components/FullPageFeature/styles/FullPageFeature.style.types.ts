import type { Theme } from '@themes/threeSixtyTheme/threeSixtyTheme.types'

import type { FullPageFeatureProps } from '../FullPageFeature.types'

export interface StyledFullPageFeatureProps {
  theme: Theme
  appearance: FullPageFeatureProps['appearance']
  background: string
}
