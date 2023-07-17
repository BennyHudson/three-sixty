import styled, { css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'

import type { StyledArticleContentProps } from './ArticleContent.style.types'

export const ArticleContent = styled.div(
  (props: StyledArticleContentProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacing[4]}px;
  `,
)

export const ContentBlock = styled.div((): FlattenSimpleInterpolation => [])

export const ImageBlock = styled.div(
  (props: StyledArticleContentProps): FlattenSimpleInterpolation => css`
    padding: ${props.theme.spacing[4]}px 0;
  `,
)
