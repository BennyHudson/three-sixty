import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

export const VideoPlayer = styled.div(
  (): FlattenSimpleInterpolation => css`
    aspect-ratio: 16 / 9;
    width: 100%;
    position: relative;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      max-width: 100% !important;
      max-height: 100% !important;
    }
  `,
)
