import styled, { css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'

import respondTo from '@mixins/respondTo'

import type { StyledSimpleGridProps } from './SimpleGrid.style.types'

export const SimpleGrid = styled.div(
  (props: StyledSimpleGridProps): FlattenSimpleInterpolation => css`
    display: grid;
    grid-template-columns: repeat(${props.columns.sm}, 1fr);
    column-gap: ${props.theme.spacing[props.spacing]}px;
    row-gap: ${props.theme.spacing[props.rowSpacing]}px;

    ${props.columns.md &&
    respondTo.md(css`
      grid-template-columns: repeat(${props.columns.md}, 1fr);
    `)}

    ${props.columns.lg &&
    respondTo.lg(css`
      grid-template-columns: repeat(${props.columns.lg}, 1fr);
    `)}
  `,
)

type CarouselProps = Pick<StyledSimpleGridProps, 'theme'>
export const Carousel = styled.div((props: CarouselProps): FlattenSimpleInterpolation => css`
  .slick-list {
    overflow: visible;
  }

  .slick-slide {
    padding-right: ${props.theme.spacing[2]}px;
  }
`)
