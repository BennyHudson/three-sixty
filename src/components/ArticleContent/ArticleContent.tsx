/* eslint-disable no-case-declarations */
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import type { FC, ReactElement } from 'react'

import RawHtmlWrapper from '@components/RawHtmlWrapper/RawHtmlWrapper'
import VideoPlayer from '@components/VideoPlayer'

import type { ArticleContentProps } from './ArticleContent.types'
import * as Styled from './styles/ArticleContent.style'

const ArticleContent: FC<ArticleContentProps> = ({ content }: ArticleContentProps): ReactElement => {
  const prefix = 'Post_Articlecontent_PostContentBuilder'

  return (
    <Styled.ArticleContent>
      {content.map((contentBlock, index) => {
        if (contentBlock.fieldGroupName === `${prefix}_ContentBlock`) {
          return (
            <Styled.ContentBlock key={index}>
              <RawHtmlWrapper content={contentBlock.content} />
            </Styled.ContentBlock>
          )
        }

        if (contentBlock.fieldGroupName === `${prefix}_ImageBlock`) {
          const image = getImage(contentBlock.image?.localFile)

          return (
            <Styled.ImageBlock key={index}>
              {contentBlock.mediaType.toLowerCase() === 'image' ? (
                <GatsbyImage image={image!} alt='' />
              ) : (
                <VideoPlayer videoSource={contentBlock.videoSource!} videoId={contentBlock.videoId!} aspectRatio='16/9' />
              )}
            </Styled.ImageBlock>
          )
        }
      })}
    </Styled.ArticleContent>
  )
}

export default ArticleContent
