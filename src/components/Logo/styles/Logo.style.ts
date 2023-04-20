import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledLogoProps } from './Logo.style.types'

export const Logo = styled.div(
  (props: StyledLogoProps): FlattenSimpleInterpolation => css`
    color: ${props.theme.colours.white};
  `,
)
