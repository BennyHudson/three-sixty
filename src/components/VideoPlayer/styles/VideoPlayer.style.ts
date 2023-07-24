import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledVideoPlayerProps } from './VideoPlayer.style.types'

export const VideoPlayer = styled.div(
  (props: StyledVideoPlayerProps): FlattenSimpleInterpolation => css`
    aspect-ratio: ${props.aspectRatio};
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
