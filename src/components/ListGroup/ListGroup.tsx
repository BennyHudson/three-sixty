import type { ReactElement, FC } from 'react'
import React from 'react'

import * as Styled from './styles/ListGroup.style'

import type { ListGroupProps } from './ListGroup.types'

const ListGroup: FC<ListGroupProps> = ({
  items,
}: ListGroupProps): ReactElement => {
  return (
    <Styled.ListGroup>
      {items.map((item) => {
        return (
          <Styled.ListItem>{item}</Styled.ListItem>
        )
      })}
    </Styled.ListGroup>
  )
}

export default ListGroup
