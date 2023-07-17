import styled, { css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'

import respondTo from '@mixins/respondTo'

import type { StyledHeaderProps } from './Header.style.types'

export const Header = styled.div(
  (props: StyledHeaderProps): FlattenSimpleInterpolation => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: ${props.theme.colours.white};
    transition: 0.4s all ease;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);

    ${props.inverse &&
    props.transparent &&
    css`
      &::after {
        content: '';
        background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0) 100%);
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    `}

    ${(props.transparent || props.showNavigation) &&
    css`
      background: none;
      box-shadow: none;
    `}
  `,
)

type ContentProps = Pick<StyledHeaderProps, 'theme' | 'transparent' | 'showNavigation'>
export const Content = styled.div(
  (props: ContentProps): FlattenSimpleInterpolation => css`
    position: relative;
    z-index: 1;
    width: 100%;
    padding: ${props.theme.spacing[4]}px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    transition: 0.4s all ease;

    ${respondTo.md(css`
      padding: ${props.theme.spacing[3]}px ${props.theme.spacing[10]}px;

      ${(props.transparent || props.showNavigation) &&
      css`
        padding: ${props.theme.spacing[6]}px ${props.theme.spacing[10]}px;
      `}
    `)}
  `,
)
