import { AnchorLink } from 'gatsby-plugin-anchor-links'
import React from 'react'
import type { FC, ReactElement } from 'react'

import Heading from '@components/Heading'
import Paragraph from '@components/Paragraph'
import RawHtmlWrapper from '@components/RawHtmlWrapper/RawHtmlWrapper'

import type { SimpleContentBlockProps } from './SimpleContentBlock.types'
import * as Styled from './styles/SimpleContentBlock.style'

const SimpleContentBlock: FC<SimpleContentBlockProps> = ({
  inverse = false,
  heading,
  content,
  children,
  subheading,
  linkText,
  linkTo,
}: SimpleContentBlockProps): ReactElement => {
  return (
    <Styled.SimpleContentBlock inverse={inverse}>
      <div>
        {subheading && <Heading text={subheading} inverse={inverse} size={1} />}
        <Heading text={heading} noMargin inverse={inverse} />
      </div>
      {content ? <RawHtmlWrapper inverse={inverse} content={content} /> : children}
      {linkTo && <AnchorLink to={linkTo}>{linkText}</AnchorLink>}
    </Styled.SimpleContentBlock>
  )
}

export default SimpleContentBlock
