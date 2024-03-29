import { Link as GatsbyLink } from 'gatsby'
import styled, { css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'

import type { StyledLinkProps } from './Link.style.types'

export const Link = styled(GatsbyLink)(
  (props: StyledLinkProps): FlattenSimpleInterpolation => css`
    color: ${props.theme.colours.black};
    text-decoration: none;
    transition: 0.4s all ease;
    font-family: 'everettregular';
    white-space: pre-line;

    &:hover {
      text-decoration: underline;
    }

    ${props.inverse &&
    css`
      color: ${props.appearance === 'primary' ? props.theme.colours.white : props.theme.colours.altGrey};
    `}

    ${props.showUnderline &&
    css`
      text-decoration: underline;
    `}
  `,
)
