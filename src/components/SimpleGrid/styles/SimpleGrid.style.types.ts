import type { SpacingKeys } from '@themes/threeSixtyTheme/constants/spacing.types'
import type { Theme } from '@themes/threeSixtyTheme/threeSixtyTheme.types'

import type { SimpleGridProps } from '../SimpleGrid.types'

export interface StyledSimpleGridProps {
  theme: Theme
  columns: SimpleGridProps['columns']
  spacing: SpacingKeys
  rowSpacing: SpacingKeys
}
