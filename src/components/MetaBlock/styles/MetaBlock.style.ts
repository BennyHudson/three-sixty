import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledMetaBlockProps } from './MetaBlock.style.types'

export const MetaBlock = styled.div((props: StyledMetaBlockProps): FlattenSimpleInterpolation => css`
  display: flex;
  flex-direction: column;
  gap: ${props.theme.spacing[4]}px;
`)
