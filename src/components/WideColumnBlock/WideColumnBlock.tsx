import React from 'react'
import type { FC, ReactElement } from 'react'

import type { WideColumnBlockProps } from './WideColumnBlock.types'
import * as Styled from './styles/WideColumnBlock.style'

const WideColumnBlock: FC<WideColumnBlockProps> = ({
  leftColumn,
  rightColumn,
  inverse = false,
  verticalAlign = 'top',
}: WideColumnBlockProps): ReactElement => {
  return (
    <Styled.WideColumnBlock verticalAlign={verticalAlign}>
      <div>{leftColumn}</div>
      <div>{rightColumn}</div>
    </Styled.WideColumnBlock>
  )
}

export default WideColumnBlock
