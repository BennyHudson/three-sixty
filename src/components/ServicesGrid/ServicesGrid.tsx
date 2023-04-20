import type { ReactElement, FC } from 'react'
import React from 'react'

import type { ServicesGridProps } from './ServicesGrid.types'
import * as Styled from './styles/ServicesGrid.style'


const ServicesGrid: FC<ServicesGridProps> = ({
  // add props
}: ServicesGridProps): ReactElement => {
  return (
    <Styled.ServicesGrid>
      Component ServicesGrid
    </Styled.ServicesGrid>
  )
}

export default ServicesGrid
