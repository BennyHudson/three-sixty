import { Link } from 'gatsby'
import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import { Heading } from '@components/Heading/styles/Heading.style'

import type { StyledTitleProps } from './Title.style.types'

export const Title = styled.div(
  (props: StyledTitleProps): FlattenSimpleInterpolation => css`
    margin-bottom: ${props.theme.spacing[8]}px;
    display: flex;
    align-items: baseline;
    justify-content: space-between;

    ${Heading} {
      width: 20ch;
      flex-grow: 0;
    }
  `,
)
