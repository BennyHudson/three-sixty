import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

export const VideoPlayer = styled.div(
  (): FlattenSimpleInterpolation => css`
    aspect-ratio: 1 / 1;
    width: 100%;
    position: relative;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100% !important;
      height: 100% !important;
    }
  `,
)
