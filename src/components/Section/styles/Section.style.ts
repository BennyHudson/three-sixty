import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledSectionProps } from './Section.style.types'

export const Section = styled.div(
  (props: StyledSectionProps): FlattenSimpleInterpolation => css`
    padding: ${props.theme.spacing[8]}px 0;

    ${props.appearance === 'primary' &&
    css`
      background: ${props.theme.colours.black};
    `}

    ${props.appearance === 'secondary' &&
    css`
    background ${props.theme.colours.white};
  `}

  ${props.appearance === 'tertiary' &&
    css`
      background: ${props.theme.colours.lightGrey};
    `}
  `,
)
