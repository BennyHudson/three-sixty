import React, { FC, ReactElement } from 'react'

import { ParagraphProps } from './Paragraph.types'
import * as Styled from './styles/Paragraph.style'

const Paragraph: FC<ParagraphProps> = ({ children, text, size = 2, weight = 2, inverse = false }: ParagraphProps): ReactElement => {
  return (
    <Styled.Paragraph inverse={inverse} size={size} weight={weight}>
      {text || children}
    </Styled.Paragraph>
  )
}

export default Paragraph
