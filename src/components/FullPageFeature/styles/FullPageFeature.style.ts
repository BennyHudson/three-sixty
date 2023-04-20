import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledFullPageFeatureProps } from './FullPageFeature.style.types'

export const FullPageFeature = styled.div((props: StyledFullPageFeatureProps): FlattenSimpleInterpolation => css`
  height: 100svh;
  display: flex;
  align-items: center;
`)
