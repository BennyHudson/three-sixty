import styled, { css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'

import respondTo from '@mixins/respondTo'

import type { StyledCaseStudyContentProps } from './CaseStudyContent.style.types'

export const CaseStudyContent = styled.div(
  (props: StyledCaseStudyContentProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    padding-top: ${props.theme.spacing[4]}px;
    gap: ${props.theme.spacing[4]}px;

    ${respondTo.md(css`
      padding-top: ${props.theme.spacing[8]}px;
      gap: ${props.theme.spacing[8]}px;
    `)}
  `,
)

export const ContentBlock = styled.div(
  (props: StyledCaseStudyContentProps): FlattenSimpleInterpolation => css`
    display: flex;
    align-items: center;
    gap: ${props.theme.spacing[4]}px;

    ${respondTo.md(css`
      gap: ${props.theme.spacing[8]}px;
    `)}
  `,
)
