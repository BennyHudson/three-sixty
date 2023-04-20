import type { FlattenSimpleInterpolation } from 'styled-components'
import styled, { css } from 'styled-components'

export const PageLayout = styled.main(
  (): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    width: 100%;
    min-height: 100vh;
  `,
)

export const Page = styled.div(
  (): FlattenSimpleInterpolation => css`
    flex-grow: 1;
    width: 100%;
  `,
)
