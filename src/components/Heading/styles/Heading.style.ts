import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import respondTo from '@mixins/respondTo'

import type { StyledHeadingProps } from './Heading.style.types'

export const Heading = styled.h2(
  (props: StyledHeadingProps): FlattenSimpleInterpolation => css`
    font-size: ${props.theme.typography.heading[props.size!].fontSizeMobile};
    line-height: ${props.theme.typography.heading[props.size!].lineHeightMobile};
    font-family: 'everettregular';

    ${props.weight === 1 &&
    css`
      font-family: 'everettlight';
    `}

    ${props.weight === 3 &&
    css`
      font-family: 'everettmedium';
    `}

    ${respondTo.md(css`
      font-size: ${props.theme.typography.heading[props.size!].fontSize};
      line-height: ${props.theme.typography.heading[props.size!].lineHeight};
    `)}

    ${!props.noMargin &&
    css`
      margin-bottom: ${props.theme.spacing[2]}px;

      ${props.size! > 4 &&
      css`
        margin-bottom: ${props.theme.spacing[4]}px;
      `}
    `}

  ${props.inverse &&
    css`
      color: ${props.theme.colours.white};
    `}

  &:last-child {
      margin-bottom: 0;
    }
  `,
)
