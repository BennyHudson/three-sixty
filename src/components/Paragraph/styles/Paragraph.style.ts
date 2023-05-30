import styled, { css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'

import type { StyledParagraphProps } from './Paragraph.style.types'

export const Paragraph = styled.p(
  (props: StyledParagraphProps): FlattenSimpleInterpolation => css`
    font-size: ${props.theme.typography.paragraph[props.size].fontSize};
    line-height: ${props.theme.typography.paragraph[props.size].lineHeight};
    font-weight: ${props.theme.typography.fontWeight[props.weight!]};

    ${!props.noMargin &&
    css`
      margin-bottom: ${props.theme.spacing[2]}px;
    `}

    &:last-child {
      margin-bottom: 0;
    }
  `,
)
