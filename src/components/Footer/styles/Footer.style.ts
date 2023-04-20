import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledFooterProps } from './Footer.style.types'

export const Footer = styled.div(
  (props: StyledFooterProps): FlattenSimpleInterpolation => css`
    color: ${props.theme.colours.white};
  `,
)
