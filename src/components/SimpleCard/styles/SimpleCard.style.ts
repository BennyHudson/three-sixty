import { Link } from 'gatsby'
import styled, { css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'

import respondTo from '@mixins/respondTo'

import type { StyledSimpleCardProps } from './SimpleCard.style.types'

export const SimpleCard = styled(Link)(
  (): FlattenSimpleInterpolation => css`
    position: relative;
    overflow: hidden;

    &::after {
      content: '';
      display: block;
      background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%);
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 30%;
      z-index: 10;
      transition: 0.4s all ease;
      opacity: 0.4;
    }

    &:hover {
      &::after {
        height: 45%;
        opacity: 0.6;
      }
    }
  `,
)

export const Content = styled.div(
  (props: StyledSimpleCardProps): FlattenSimpleInterpolation => css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: ${props.theme.spacing[4]}px;
    z-index: 20;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    ${respondTo.md(css`
      padding: ${props.theme.spacing[6]}px ${props.theme.spacing[4]}px;
    `)}
  `,
)
