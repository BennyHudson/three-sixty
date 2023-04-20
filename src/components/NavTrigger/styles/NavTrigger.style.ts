import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledNavTriggerProps } from './NavTrigger.style.types'

export const NavTrigger = styled.button(
  (props: StyledNavTriggerProps): FlattenSimpleInterpolation => css`
    background: none;
    border: none;
    font-size: ${props.theme.typography.heading[2].fontSize};
    line-height: ${props.theme.typography.heading[2].fontSize};
    color: ${props.theme.colours.white};
    cursor: pointer;
    display: block;
  `,
)
