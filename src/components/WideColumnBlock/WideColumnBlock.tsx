import type { ReactElement, FC } from 'react'
import React from 'react'

import * as Styled from './styles/WideColumnBlock.style'

import type { WideColumnBlockProps } from './WideColumnBlock.types'
import RawHtmlWrapper from '@components/RawHtmlWrapper/RawHtmlWrapper'

const WideColumnBlock: FC<WideColumnBlockProps> = ({
  leftColumn,
  rightColumn,
  inverse = false,
  verticalAlign = 'top'
}: WideColumnBlockProps): ReactElement => {
  return (
    <Styled.WideColumnBlock verticalAlign={verticalAlign}>
      <div>{leftColumn}</div>
      <div>{rightColumn}</div>
    </Styled.WideColumnBlock>
  )
}

export default WideColumnBlock
