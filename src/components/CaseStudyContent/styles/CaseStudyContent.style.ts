import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledCaseStudyContentProps } from './CaseStudyContent.style.types'

export const CaseStudyContent = styled.div((props: StyledCaseStudyContentProps): FlattenSimpleInterpolation => css`
  padding-top: ${props.theme.spacing[8]}px;
  display: flex;
  flex-direction: column;
  gap: ${props.theme.spacing[8]}px;
`)

export const ContentBlock = styled.div((props: StyledCaseStudyContentProps): FlattenSimpleInterpolation => css`
  display: flex;
  align-items: center;
  gap: ${props.theme.spacing[8]}px;
`)
