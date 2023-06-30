import React, { useContext } from 'react'
import type { FC, ReactElement } from 'react'

import type { WideColumnBlockProps } from './WideColumnBlock.types'
import * as Styled from './styles/WideColumnBlock.style'
import PageContext, { PageContextProps } from '@context/PageContext'

const WideColumnBlock: FC<WideColumnBlockProps> = ({
  leftColumn,
  rightColumn,
  verticalAlign = 'top',
  sticky = false,
  reverse = false,
}: WideColumnBlockProps): ReactElement => {
  const { headerHeight } = useContext(PageContext) as PageContextProps
  return (
    <Styled.WideColumnBlock verticalAlign={verticalAlign}>
      <Styled.NarrowColumn sticky={sticky} headerHeight={headerHeight}>{leftColumn}</Styled.NarrowColumn>
      <Styled.WideColumn reverse={reverse}>{rightColumn}</Styled.WideColumn>
    </Styled.WideColumnBlock>
  )
}

export default WideColumnBlock
