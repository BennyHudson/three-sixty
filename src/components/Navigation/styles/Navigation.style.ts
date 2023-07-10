import styled, { createGlobalStyle, css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'

import respondTo from '@mixins/respondTo'

import type { StyledNavigationProps } from './Navigation.style.types'

export const ScrollLock = createGlobalStyle((): FlattenSimpleInterpolation => css`
    html,
    body {
      overflow: hidden;
    }
`)

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
    padding: ${props.theme.spacing[8]}px 0;

    ${respondTo.md(css`
      padding: ${props.theme.spacing[8]}px;
    `)}
  `,
)

export const Menu = styled.ul(
  (props: StyledNavigationProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacing[8]}px;
  `,
)

export const MenuItem = styled.li(
  (props: StyledNavigationProps): FlattenSimpleInterpolation => css`
    font-size: ${props.theme.typography.heading[3].fontSize};
    animation-delay: ${((100 * props.index) + 100) / 1000}s;

    a {
      color: ${props.theme.colours.white};
      text-decoration: none;
    }
  `,
)

export const Container  = styled.div((props: StyledNavigationProps): FlattenSimpleInterpolation => css`
  // max-width: ${props.theme.containerWidth}px;
  width: calc(100% - ${props.theme.spacing[4] * 2}px);
  margin: 0 auto;

  ${respondTo.md(css`
    width: 100%;
  `)}
`)