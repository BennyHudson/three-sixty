import styled, { css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'

import respondTo from '@mixins/respondTo'

import type { StyledWideColumnBlockProps } from './WideColumnBlock.style.types'

export const WideColumnBlock = styled.div(
  (props: StyledWideColumnBlockProps): FlattenSimpleInterpolation => css`
    display: grid;
    gap: ${props.theme.spacing[4]}px;
    grid-template-columns: repeat(1, 1fr);
    align-items: ${props.verticalAlign === 'top' ? 'start' : props.verticalAlign};

    ${respondTo.md(css`
      grid-template-columns: 1fr 2fr;
      gap: ${props.theme.spacing[8]}px;
    `)}
  `,
)
