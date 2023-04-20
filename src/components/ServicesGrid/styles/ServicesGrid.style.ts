import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledServicesGridProps } from './ServicesGrid.style.types'

export const ServicesGrid = styled.div((props: StyledServicesGridProps): FlattenSimpleInterpolation => css`
  background: ${props.theme.colours.white};
  padding: ${props.theme.spacing[8]}px 0;
`)
