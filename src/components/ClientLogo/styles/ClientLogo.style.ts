import styled, { css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'

import respondTo from '@mixins/respondTo'

export const ClientLogo = styled.div(
  (): FlattenSimpleInterpolation => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    ${respondTo.lg(css`
      .gatsby-image-wrapper {
        max-width: 100px;
        height: auto;
      }
    `)}
  `,
)
