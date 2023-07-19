import styled, { css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'

import { Container } from '@components/Container/styles/Container.style'
import { Heading } from '@components/Heading/styles/Heading.style'

import type { StyledFullPageFeatureProps } from './FullPageFeature.style.types'

export const FullPageFeature = styled.div(
  (props: StyledFullPageFeatureProps): FlattenSimpleInterpolation => css`
    height: ${props.size === 2 ? '100svh' : '80svh'};
    display: flex;
    align-items: center;
    background: ${props.appearance === 'primary' ? props.theme.colours.black : props.theme.colours.white};
    overflow: hidden;
    width: 100%;
    position: relative;

    ${Container} {
      z-index: 10;
    }

    ${Heading} {
      margin-bottom: ${props.theme.spacing[1]}px;
    }

    ${props.background &&
    css`
      background: url('${props.background}') center center no-repeat;
      background-size: cover;
    `}
  `,
)

export const BackgroundVideo = styled.video(
  (): FlattenSimpleInterpolation => css`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    width: auto;
    height: auto;
    transform: translateX(-50%) translateY(-50%);
    background-size: cover;
  `,
)
