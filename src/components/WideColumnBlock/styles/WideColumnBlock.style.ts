import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledWideColumnBlockProps } from './WideColumnBlock.style.types'

export const WideColumnBlock = styled.div((props: StyledWideColumnBlockProps): FlattenSimpleInterpolation => css`
  display: grid;
  gap: ${props.theme.spacing[8]}px;
  grid-template-columns: 1fr 2fr;
  align-items: ${props.verticalAlign === 'top' ? 'start' : props.verticalAlign};
`)
