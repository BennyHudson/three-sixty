import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import { Heading } from '@components/Heading/styles/Heading.style'

import type { StyledFullPageFeatureProps } from './FullPageFeature.style.types'
import { Container } from '@components/Container/styles/Container.style'

export const FullPageFeature = styled.div(
  (props: StyledFullPageFeatureProps): FlattenSimpleInterpolation => css`
    height: 100svh;
    display: flex;
    align-items: center;
    background: ${props.appearance === 'primary' ? props.theme.colours.black : props.theme.colours.white};

    ${Heading} {
      &:first-child {
        max-width: 15ch;
      }
    }

    ${Container} {
      z-index: 10;
    }

    ${props.background && css`
      background: url('${props.background}') center center no-repeat;
      background-size: cover;
    `}
  `,
)
