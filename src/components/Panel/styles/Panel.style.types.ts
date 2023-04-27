import type { Theme } from '@themes/threeSixtyTheme/threeSixtyTheme.types'
import { PanelProps } from '../Panel.types'

export interface StyledPanelProps {
  theme: Theme
  headerHeight: number
  appearance: PanelProps['appearance']
}
