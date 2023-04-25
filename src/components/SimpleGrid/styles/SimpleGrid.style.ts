import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledSimpleGridProps } from './SimpleGrid.style.types'

export const SimpleGrid = styled.div(
  (props: StyledSimpleGridProps): FlattenSimpleInterpolation => css`
    display: grid;
    grid-template-columns: repeat(${props.columns}, 1fr);
    column-gap: ${props.theme.spacing[props.spacing]}px;
    row-gap: ${props.theme.spacing[props.rowSpacing]}px;
  `,
)
