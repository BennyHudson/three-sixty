import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import { Heading } from '@components/Heading/styles/Heading.style'

import type { StyledSimpleContentBlockProps } from './SimpleContentBlock.style.types'

export const SimpleContentBlock = styled.div(
  (props: StyledSimpleContentBlockProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacing[2]}px;

    ${Heading} {
      width: 18ch;
      flex-grow: 0;
    }
  `,
)
