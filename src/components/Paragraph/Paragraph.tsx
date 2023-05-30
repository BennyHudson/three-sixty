import React from 'react'
import type { FC, ReactElement } from 'react'

import type { ParagraphProps } from './Paragraph.types'
import * as Styled from './styles/Paragraph.style'

const Paragraph: FC<ParagraphProps> = ({
  children,
  text,
  size = 2,
  weight = 2,
  inverse = false,
  noMargin = false,
}: ParagraphProps): ReactElement => {
  return (
    <Styled.Paragraph inverse={inverse} size={size} weight={weight} noMargin={noMargin}>
      {text || children}
    </Styled.Paragraph>
  )
}

export default Paragraph
