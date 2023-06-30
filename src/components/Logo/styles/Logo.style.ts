import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'

import respondTo from '@mixins/respondTo'

import type { StyledLogoProps } from './Logo.style.types'

export const Logo = styled(Link)(
  (props: StyledLogoProps): FlattenSimpleInterpolation => css`
    color: ${props.theme.colours.white};
    max-width: 100px;

    ${respondTo.md(css`
      max-width: unset;
    `)}
  `,
)
