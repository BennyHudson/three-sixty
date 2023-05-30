import styled, { css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'

import type { StyledListGroupProps } from './ListGroup.style.types'

export const ListGroup = styled.ul(
  (props: StyledListGroupProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacing[1]}px;
  `,
)

export const ListItem = styled.li((props: StyledListGroupProps): FlattenSimpleInterpolation => [])
