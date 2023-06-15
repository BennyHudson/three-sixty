import styled, { css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'

import respondTo from '@mixins/respondTo'

import type { StyledContainerProps } from './Container.style.types'

export const Container = styled.div(
  (props: StyledContainerProps): FlattenSimpleInterpolation => css`
    width: calc(100% - ${props.theme.spacing[4] * 2}px);
    margin: 0 auto;
    max-width: ${props.theme.containerWidth}px;

    ${respondTo.md(css`
      width: calc(100% - ${props.theme.spacing[10] * 2}px);
    `)}
  `,
)
