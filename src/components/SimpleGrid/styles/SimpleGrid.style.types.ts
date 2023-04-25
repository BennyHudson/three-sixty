import type { SpacingKeys } from '@themes/threeSixtyTheme/constants/spacing.types'
import type { Theme } from '@themes/threeSixtyTheme/threeSixtyTheme.types'

export interface StyledSimpleGridProps {
  theme: Theme
  columns: number
  spacing: SpacingKeys
  rowSpacing: SpacingKeys
}
