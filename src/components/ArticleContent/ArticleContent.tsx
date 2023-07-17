/* eslint-disable no-case-declarations */
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import type { FC, ReactElement } from 'react'

import RawHtmlWrapper from '@components/RawHtmlWrapper/RawHtmlWrapper'

import type { ArticleContentProps } from './ArticleContent.types'
import * as Styled from './styles/ArticleContent.style'

const ArticleContent: FC<ArticleContentProps> = ({ content }: ArticleContentProps): ReactElement => {
  const prefix = 'Post_Articlecontent_PostContentBuilder'

  return (
    <Styled.ArticleContent>
      {content.map((contentBlock) => {
        switch (contentBlock.fieldGroupName) {
          case `${prefix}_ContentBlock`:
            return (
              <Styled.ContentBlock>
                <RawHtmlWrapper content={contentBlock.content} />
              </Styled.ContentBlock>
            )

          case `${prefix}_ImageBlock`:
            const image = getImage(contentBlock.image.localFile)
            return (
              <Styled.ImageBlock>
                <GatsbyImage image={image} alt='' />
              </Styled.ImageBlock>
            )
        }
      })}
    </Styled.ArticleContent>
  )
}

export default ArticleContent
