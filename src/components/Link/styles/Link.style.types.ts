import type { Theme } from '@themes/threeSixtyTheme/threeSixtyTheme.types'

import type { LinkProps } from '../Link.types'

export interface StyledLinkProps {
  theme: Theme
  inverse: boolean
  showUnderline: boolean
  appearance: LinkProps['appearance']
}
