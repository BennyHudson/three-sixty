import styled, { css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'

import respondTo from '@mixins/respondTo'

import type { StyledSimpleGridProps } from './SimpleGrid.style.types'

export const SimpleGrid = styled.div(
  (props: StyledSimpleGridProps): FlattenSimpleInterpolation => css`
    display: grid;
    grid-template-columns: repeat(4, [col-start] 1fr);
    column-gap: ${props.theme.spacing[props.spacing]}px;
    row-gap: ${props.theme.spacing[props.rowSpacing]}px;

    ${respondTo.md(css`
      grid-template-columns: repeat(12, [col-start] 1fr);
    `)}
  `,
)

export const GridColumn = styled.div((props: StyledSimpleGridProps): FlattenSimpleInterpolation => css`
  display: flex;
  grid-column: span ${4 / props.columns.sm};

  ${props.columns.md &&
    respondTo.md(css`
      grid-column: span ${12 / props.columns.md};
    `)}

    ${props.columns.lg &&
    respondTo.lg(css`
      grid-column: span ${12 / props.columns.lg};
    `)}
`)

type CarouselProps = Pick<StyledSimpleGridProps, 'theme'>
export const Carousel = styled.div((props: CarouselProps): FlattenSimpleInterpolation => css`
  .slick-list {
    overflow: visible;
  }

  .slick-slide {
    padding-right: ${props.theme.spacing[2]}px;
  }
`)