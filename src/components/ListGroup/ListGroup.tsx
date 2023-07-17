import React from 'react'
import type { FC, ReactElement } from 'react'

import type { ListGroupProps } from './ListGroup.types'
import * as Styled from './styles/ListGroup.style'

const ListGroup: FC<ListGroupProps> = ({ items, inverse = false }: ListGroupProps): ReactElement => {
  return (
    <Styled.ListGroup>
      {items.map((item) => {
        return <Styled.ListItem inverse={inverse}>{item}</Styled.ListItem>
      })}
    </Styled.ListGroup>
  )
}

export default ListGroup
