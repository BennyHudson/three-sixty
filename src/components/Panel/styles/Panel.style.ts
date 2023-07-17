import styled, { css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'

import { SimpleGrid } from '@components/SimpleGrid/styles/SimpleGrid.style'

import respondTo from '@mixins/respondTo'

import type { StyledPanelProps } from './Panel.style.types'

export const Panel = styled.div(
  (props: StyledPanelProps): FlattenSimpleInterpolation => css`
    min-height: calc(100svh - ${props.headerHeight}px);
    background-color: ${props.theme.colours.grey};
    padding: ${props.theme.spacing[8]}px 0;
    display: flex;
    align-items: center;
    position: relative;

    ${SimpleGrid} {
      position: relative;
      z-index: 20;
    }

    ${props.backgroundImage &&
    css`
      background: url('${props.backgroundImage}') center center no-repeat;
      background-size: cover;
    `}

    ${props.appearance === 'secondary' &&
    css`
      background-color: ${props.theme.colours.midGrey};
    `}

    ${props.appearance === 'tertiary' &&
    css`
      background-color: ${props.theme.colours.black};
    `}

    ${respondTo.md(css`
      padding: ${props.theme.spacing[8]}px 0;
    `)}
  `,
)

export const Content = styled.div((): FlattenSimpleInterpolation => css``)
