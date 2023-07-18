import { css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'

import type { Theme } from '@themes/threeSixtyTheme/threeSixtyTheme.types'

export default (fn: (theme: Theme, ...params: unknown[]) => FlattenSimpleInterpolation) => {
  return (...args: unknown[]): FlattenSimpleInterpolation =>
    css`
      ${({ theme }: { theme: Theme }): FlattenSimpleInterpolation => {
      return fn(theme, ...args)
    }}
    ` as FlattenSimpleInterpolation
}
