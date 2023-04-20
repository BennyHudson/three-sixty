import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledCaseStudyGridProps } from './CaseStudyGrid.style.types'

export const CaseStudyGridWrapper = styled.div((props: StyledCaseStudyGridProps): FlattenSimpleInterpolation => css`
  background: ${props.theme.colours.white};
  padding: ${props.theme.spacing[8]}px 0;
`)

export const CaseStudyGrid = styled.div((props: StyledCaseStudyGridProps): FlattenSimpleInterpolation => css`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${props.theme.spacing[2]}px;
`)