import styled, { css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'

import type { StyledNavTriggerProps } from './NavTrigger.style.types'

type NavWrapperProps = Pick<StyledNavTriggerProps, 'theme'>
export const NavWrapper = styled.div(
  (props: NavWrapperProps): FlattenSimpleInterpolation => css`
    display: flex;
    gap: ${props.theme.spacing[4]}px;
    align-items: center;
    justify-content: flex-end;
  `,
)

export const NavTrigger = styled.button(
  (props: StyledNavTriggerProps): FlattenSimpleInterpolation => css`
    background: none;
    border: none;
    font-size: ${props.theme.typography.heading[2].fontSize};
    line-height: ${props.theme.typography.heading[2].fontSize};
    color: ${props.inverse ? props.theme.colours.white : props.theme.colours.black};
    cursor: pointer;
    display: block;
  `,
)
