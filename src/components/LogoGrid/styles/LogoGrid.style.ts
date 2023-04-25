import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledLogoGridProps } from './LogoGrid.style.types'

export const LogoGridWrapper = styled.div(
  (props: StyledLogoGridProps): FlattenSimpleInterpolation => css`
    background: ${props.theme.colours.lightGrey};
    padding: ${props.theme.spacing[8]}px;
  `,
)

export const LogoGrid = styled.div(
  (props: StyledLogoGridProps): FlattenSimpleInterpolation => css`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(6, 1fr);
    gap: ${props.theme.spacing[8]}px;
  `,
)

export const Logo = styled.div(
  (props: StyledLogoGridProps): FlattenSimpleInterpolation => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
)
