import type { ElementType, FC, ReactElement } from 'react'
import React from 'react'

import type { HeadingProps } from './Heading.types'
import * as Styled from './styles/Heading.style'

const Heading: FC<HeadingProps> = ({
  text,
  level = 2,
  size = 2,
  noMargin = false,
  inverse = false,
  weight = 2,
}: HeadingProps): ReactElement => {
  return (
    <Styled.Heading as={`h${level}` as ElementType} size={size} noMargin={noMargin} inverse={inverse} weight={weight}>
      {text}
    </Styled.Heading>
  )
}

export default Heading
