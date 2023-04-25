import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

export const ClientLogo = styled.div(
  (): FlattenSimpleInterpolation => css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
)
