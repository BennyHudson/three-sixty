import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

import type { StyledHeaderProps } from './Header.style.types'

export const Header = styled.div(
  (props: StyledHeaderProps): FlattenSimpleInterpolation => css`
    padding: ${props.theme.spacing[4]}px ${props.theme.spacing[8]}px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
  `,
)
