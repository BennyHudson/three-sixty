import type { HeadingKeys } from '@themes/threeSixtyTheme/constants/typography.types'

export interface HeadingProps {
  text: string | string[]
  level?: 1 | 2 | 3 | 4 | 5
  size?: HeadingKeys
  noMargin?: boolean
  inverse?: boolean
  weight?: 1 | 2 | 3
}
