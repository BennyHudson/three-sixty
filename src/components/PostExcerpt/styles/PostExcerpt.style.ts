import styled, { css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'

import respondTo from '@mixins/respondTo'

import type { StyledPostExcerptProps } from './PostExcerpt.style.types'

export const PostExcerpt = styled.div(
  (props: StyledPostExcerptProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacing[4]}px;
  `,
)

export const Content = styled.div(
  (props: StyledPostExcerptProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacing[2]}px;

    ${respondTo.md(css`
      padding-right: ${props.theme.spacing[8]}px;
    `)}
  `,
)
