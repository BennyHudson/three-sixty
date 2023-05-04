import type { ReactElement, FC } from 'react'
import React from 'react'

import * as Styled from './styles/MetaBlock.style'

import type { MetaBlockProps } from './MetaBlock.types'
import Heading from '@components/Heading/Heading'
import Paragraph from '@components/Paragraph/Paragraph'

const MetaBlock: FC<MetaBlockProps> = ({
  metaContent,
}: MetaBlockProps): ReactElement => {
  return (
    <Styled.MetaBlock>
      {metaContent.map((metaContentBlock) => {
        return (
          <div>
            <Heading size={1} text={metaContentBlock.title} />
            {metaContentBlock.content.map((item) => {
              return <Paragraph noMargin text={item} />
            })}
          </div>
        )
      })}
    </Styled.MetaBlock>
  )
}

export default MetaBlock
