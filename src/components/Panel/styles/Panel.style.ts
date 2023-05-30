import styled, { css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'

import respondTo from '@mixins/respondTo'

import type { StyledPanelProps } from './Panel.style.types'

export const Panel = styled.div(
  (props: StyledPanelProps): FlattenSimpleInterpolation => css`
    min-height: calc(100svh - ${props.headerHeight}px);
    color: ${props.theme.colours.white};
    background: ${props.theme.colours.grey};
    padding: ${props.theme.spacing[8]}px 0;
    display: flex;
    align-items: center;

    ${props.appearance === 'secondary' &&
    css`
      background: ${props.theme.colours.midGrey};
    `}

    ${props.appearance === 'tertiary' &&
    css`
      background: ${props.theme.colours.black};
    `}

    ${respondTo.md(css`
      padding: ${props.theme.spacing[8]}px;
    `)}
  `,
)

export const Content = styled.div((): FlattenSimpleInterpolation => css``)
