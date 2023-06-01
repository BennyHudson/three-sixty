import styled, { css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'

import respondTo from '@mixins/respondTo'

import type { StyledSectionProps } from './Section.style.types'

export const Section = styled.div(
  (props: StyledSectionProps): FlattenSimpleInterpolation => css`
    padding: ${props.theme.spacing[4]}px 0;
    overflow: hidden;

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

  ${respondTo.md(css`
      padding: ${props.theme.spacing[8]}px 0;
    `)}
  `,
)
