import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledHeaderProps } from './Header.style.types'

export const Header = styled.div(
  (props: StyledHeaderProps): FlattenSimpleInterpolation => css`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background: ${props.theme.colours.black};
    transition: 0.4s all ease;

    ${props.inverse && css`
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

    ${props.transparent &&
    css`
      background: none;
    `}
  `,
)

type ContentProps = Pick<StyledHeaderProps, 'theme'>
export const Content = styled.div((props: ContentProps): FlattenSimpleInterpolation => css`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: ${props.theme.spacing[4]}px ${props.theme.spacing[8]}px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`)
