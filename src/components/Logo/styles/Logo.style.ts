import { Link } from 'gatsby'
import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledLogoProps } from './Logo.style.types'

export const Logo = styled(Link)(
  (props: StyledLogoProps): FlattenSimpleInterpolation => css`
    color: ${props.theme.colours.white};
  `,
)
