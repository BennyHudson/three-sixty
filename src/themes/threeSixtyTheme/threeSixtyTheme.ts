import breakpoints from './constants/breakpoints'
import colours from './constants/colours'
import spacing from './constants/spacing'
import typography from './constants/typography'
import type { Theme } from './threeSixtyTheme.types'

const threeSixtyTheme: Theme = {
  spacing: spacing,
  breakpoints: breakpoints,
  colours: colours,
  typography: typography,
  containerWidth: 1296,
}

export { threeSixtyTheme }
