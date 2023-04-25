import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledShowreelProps } from './Showreel.style.types'

export const Showreel = styled.div(
  (props: StyledShowreelProps): FlattenSimpleInterpolation => css`
    color: ${props.theme.colours.white};
  `,
)
