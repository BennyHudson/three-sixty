import styled, { FlattenSimpleInterpolation, css } from 'styled-components'

import { StyledParagraphProps } from './Paragraph.style.types'

export const Paragraph = styled.p(
  (props: StyledParagraphProps): FlattenSimpleInterpolation => css`
    font-size: ${props.theme.typography.paragraph[props.size].fontSize};
    line-height: ${props.theme.typography.paragraph[props.size].lineHeight};
    font-weight: ${props.theme.typography.fontWeight[props.weight!]};
    margin-bottom: ${props.theme.spacing[2]}px;

    &:last-child {
      margin-bottom: 0;
    }
  `,
)
