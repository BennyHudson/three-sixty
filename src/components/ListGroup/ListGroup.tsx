import React from 'react'
import type { FC, ReactElement } from 'react'

import type { ListGroupProps } from './ListGroup.types'
import * as Styled from './styles/ListGroup.style'

const ListGroup: FC<ListGroupProps> = ({ items, inverse = false }: ListGroupProps): ReactElement => {
  return (
    <Styled.ListGroup>
      {items.map((item, index) => {
        return (
          <Styled.ListItem inverse={inverse} key={index}>
            {item}
          </Styled.ListItem>
        )
      })}
    </Styled.ListGroup>
  )
}

export default ListGroup
