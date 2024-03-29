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
    position: relative;

    ${respondTo.md(css`
      display: grid;
      grid-template-columns: repeat(12, [col-start] 1fr);
      gap: ${props.theme.spacing[10]}px;
    `)}
  `,
)

export const NarrowColumn = styled.div(
  (props: StyledWideColumnBlockProps): FlattenSimpleInterpolation => css`
    ${respondTo.md(css`
      grid-column: col-start / span 4;

      ${props.sticky &&
      css`
        position: sticky;
        top: ${props.theme.spacing[10] + props.headerHeight}px;
      `}
    `)}
  `,
)

export const WideColumn = styled.div(
  (props: StyledWideColumnBlockProps): FlattenSimpleInterpolation => css`
    ${props.reverse &&
    css`
      order: -1;
    `}

    ${respondTo.md(css`
      grid-column: col-start 5 / span 8;

      ${props.reverse &&
      css`
        order: unset;
      `}

      ${props.size === 2 &&
      css`
        p {
          &:first-of-type {
            font-size: ${props.theme.typography.paragraph[3].fontSize};
            line-height: ${props.theme.typography.paragraph[3].lineHeight};
            font-family: 'everettregular';
          }
        }
      `}

      ${props.size === 3 &&
      css`
        p {
          &:first-of-type {
            font-size: ${props.theme.typography.heading[2].fontSize};
            line-height: ${props.theme.typography.heading[2].lineHeight};
            font-family: 'everettregular';
          }
        }
      `}
    `)}
  `,
)
