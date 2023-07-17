import styled, { css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'

import respondTo from '@mixins/respondTo'

import type { StyledLogoGridProps } from './LogoGrid.style.types'

export const LogoGridWrapper = styled.div(
  (props: StyledLogoGridProps): FlattenSimpleInterpolation => css`
    background: ${props.theme.colours.lightGrey};
    padding: ${props.theme.spacing[8]}px;
  `,
)

export const LogoGrid = styled.div(
  (props: StyledLogoGridProps): FlattenSimpleInterpolation => css`
    display: grid !important;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(3, 1fr);
    gap: ${props.theme.spacing[4]}px;

    ${respondTo.md(css`
      grid-template-columns: repeat(6, 1fr);
      gap: ${props.theme.spacing[4]}px;
    `)}
  `,
)

export const Carousel = styled.div(
  (): FlattenSimpleInterpolation => css`
    display: flex;
    align-items: center;

    .slick-slider,
    .slick-list,
    .slick-track {
      display: flex;
    }

    .slick-slide {
      display: flex;
      align-items: center;
    }
  `,
)

export const CarouselWrapper = styled.div(
  (props: StyledLogoGridProps): FlattenSimpleInterpolation => css`
    width: 100%;
    background: ${props.theme.colours.lightGrey};
    overflow: hidden;
    position: relative;
  `,
)

export const Logo = styled.div(
  (props: StyledLogoGridProps): FlattenSimpleInterpolation => css`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 ${props.theme.spacing[4]}px;
  `,
)
