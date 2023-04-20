import { Link } from 'gatsby'
import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledCaseStudyProps } from './CaseStudy.style.types'

export const CaseStudy = styled(Link)((props: StyledCaseStudyProps): FlattenSimpleInterpolation => css`
  color: ${props.theme.colours.white};
  position: relative;

  &::after {
    content: '';
    display: block;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.4) 100%);
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30%;
    z-index: 10;
  }
`)
