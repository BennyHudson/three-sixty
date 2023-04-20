import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledNavigationProps } from './Navigation.style.types'

export const Navigation = styled.nav(
  (props: StyledNavigationProps): FlattenSimpleInterpolation => css`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 200;
    background: ${props.theme.colours.black};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: ${props.theme.spacing[8]}px;
  `,
)

export const Menu = styled.ul(
  (props: StyledNavigationProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacing[4]}px;
  `,
)

export const MenuItem = styled.li(
  (props: StyledNavigationProps): FlattenSimpleInterpolation => css`
    font-size: ${props.theme.typography.heading[3].fontSize};
  `,
)
