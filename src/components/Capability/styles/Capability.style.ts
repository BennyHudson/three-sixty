import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledCapabilityProps } from './Capability.style.types'

export const Content = styled.div((props: StyledCapabilityProps): FlattenSimpleInterpolation => css`
  display: flex;
  flex-direction: column;
  gap: ${props.theme.spacing[8]}px;
`)
