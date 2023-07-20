import styled, { css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'

import { SimpleGrid } from '@components/SimpleGrid/styles/SimpleGrid.style'

import respondTo from '@mixins/respondTo'

import type { StyledPanelProps } from './Panel.style.types'

export const Panel = styled.div(
  (props: StyledPanelProps): FlattenSimpleInterpolation => css`
    min-height: calc(100svh - ${props.headerHeight}px);
    background: ${props.theme.colours.white};
    padding: ${props.theme.spacing[8]}px 0;
    display: flex;
    align-items: center;
    position: relative;

    ${SimpleGrid} {
      position: relative;
      z-index: 20;
    }

    ${respondTo.md(css`
      padding: ${props.theme.spacing[8]}px 0;
    `)}
  `,
)

export const Content = styled.div((): FlattenSimpleInterpolation => css``)
