import type { FC, ReactElement } from 'react'
import React from 'react'

import type { SimpleGridProps } from './SimpleGrid.types'
import * as Styled from './styles/SimpleGrid.style'

const SimpleGrid: FC<SimpleGridProps> = ({ children, columns, spacing = 8, rowSpacing = 8 }: SimpleGridProps): ReactElement => {
  return (
    <Styled.SimpleGrid columns={columns} spacing={spacing} rowSpacing={rowSpacing}>
      {React.Children.map(children, (child) => {
        return <>{child}</>
      })}
    </Styled.SimpleGrid>
  )
}

export default SimpleGrid
