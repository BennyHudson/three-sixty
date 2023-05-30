import styled, { css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'

import type { StyledRawHtmlWrapperProps } from './RawHtmlWrapper.style.types'

export const RawHtmlWrapper = styled.div(
  (props: StyledRawHtmlWrapperProps): FlattenSimpleInterpolation => css`
    ${props.inverse &&
    css`
      color: ${props.theme.colours.white};
    `}

    h3 {
      font-weight: bold;
      margin-bottom: ${props.theme.spacing[2]}px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    p {
      margin-bottom: ${props.theme.spacing[2]}px;

      &:last-child {
        margin-bottom: 0;
      }
    }

    a {
      color: ${props.theme.colours.white};
    }

    ul {
      list-style: disc;
      margin: 0 0 ${props.theme.spacing[2]}px ${props.theme.spacing[4]}px;

      li {
        margin-bottom: ${props.theme.spacing[1]}px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      &:last-child {
        margin-bottom: 0;
      }
    }
  `,
)
