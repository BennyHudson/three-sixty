import type { FC, ReactElement } from 'react'
import React from 'react'

import Heading from '@components/Heading'
import Paragraph from '@components/Paragraph'
import RawHtmlWrapper from '@components/RawHtmlWrapper/RawHtmlWrapper'

import type { SimpleContentBlockProps } from './SimpleContentBlock.types'
import * as Styled from './styles/SimpleContentBlock.style'

const SimpleContentBlock: FC<SimpleContentBlockProps> = ({ inverse = false, heading, content }: SimpleContentBlockProps): ReactElement => {
  return (
    <Styled.SimpleContentBlock>
      <Heading text={heading} noMargin inverse={inverse} />
      <RawHtmlWrapper inverse={inverse} content={content} />
    </Styled.SimpleContentBlock>
  )
}

export default SimpleContentBlock
