import styled, { css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'

export const ClientLogo = styled.div(
  (): FlattenSimpleInterpolation => css`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  `,
)
