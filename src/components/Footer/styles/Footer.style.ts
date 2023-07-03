import styled, { css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'

import respondTo from '@mixins/respondTo'

import type { StyledFooterProps } from './Footer.style.types'

export const Footer = styled.div(
  (props: StyledFooterProps): FlattenSimpleInterpolation => css`
    color: ${props.theme.colours.white};
    background: ${props.theme.colours.black};
    height: calc(100svh - ${props.headerHeight}px);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  `,
)

export const FooterMain = styled.div(
  (props: StyledFooterProps): FlattenSimpleInterpolation => css`
    flex-grow: 1;
    padding: ${props.theme.spacing[8]}px 0;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  `,
)

export const FooterColumns = styled.div(
  (props: StyledFooterProps): FlattenSimpleInterpolation => css`
    padding: ${props.theme.spacing[4]}px 0;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: ${props.theme.spacing[4]}px;

    ${respondTo.md(css`
      padding: ${props.theme.spacing[8]}px 0;
      grid-template-columns: repeat(4, 1fr);
      gap: ${props.theme.spacing[8]}px;
    `)}
  `,
)
