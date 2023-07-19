import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledMobileGalleryProps } from './MobileGallery.style.types'

export const MobileGallery = styled.div((): FlattenSimpleInterpolation => css`
  overflow: hidden;
  width: 100%;
`)

export const GalleryWrapper = styled.div((props: StyledMobileGalleryProps): FlattenSimpleInterpolation => css`
  width: calc(100% - ${props.theme.spacing[2] * 3}px);
  margin: 0 0 0 ${props.theme.spacing[2] * 2}px;
  max-width: ${props.theme.containerWidth}px;

  .slick-list {
    overflow: visible;
  }

  .slick-slide {
    padding-right: ${props.theme.spacing[2]}px;
  }
`)
