import styled, { css } from 'styled-components'
import type { FlattenSimpleInterpolation } from 'styled-components'

import type { StyledListGroupProps } from './ListGroup.style.types'

type ListGroupProps = Pick<StyledListGroupProps, 'theme'>
export const ListGroup = styled.ul(
  (props: ListGroupProps): FlattenSimpleInterpolation => css`
    display: flex;
    flex-direction: column;
    gap: ${props.theme.spacing[1]}px;
  `,
)

export const ListItem = styled.li(
  (props: StyledListGroupProps): FlattenSimpleInterpolation => css`
    color: ${props.theme.colours.black};

    ${props.inverse &&
    css`
      color: ${props.theme.colours.white};
    `}
  `,
)
