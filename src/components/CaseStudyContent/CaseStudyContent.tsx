import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import type { FC, ReactElement } from 'react'

import SimpleContentBlock from '@components/SimpleContentBlock/SimpleContentBlock'
import WideColumnBlock from '@components/WideColumnBlock/WideColumnBlock'

import type { CaseStudyContentProps } from './CaseStudyContent.types'
import * as Styled from './styles/CaseStudyContent.style'
import VideoPlayer from '@components/VideoPlayer'

const CaseStudyContent: FC<CaseStudyContentProps> = ({ content }: CaseStudyContentProps): ReactElement => {
  const prefix = 'CaseStudy_Casestudycontent_ContentBuilder'

  return (
    <Styled.CaseStudyContent>
      {content.map((contentBlock) => {
        switch (contentBlock.fieldGroupName) {
        case `${prefix}_ContentImage`:
          const image = getImage(contentBlock.image?.localFile)
          return (
            <WideColumnBlock
              verticalAlign='center'
              reverse
              leftColumn={
                <SimpleContentBlock heading={contentBlock.heading} subheading={contentBlock.title} content={contentBlock.content} />
              }
              rightColumn={contentBlock.mediaType === 'image' ? <GatsbyImage image={image} alt={contentBlock.heading} /> : <VideoPlayer videoSource={contentBlock.videoSource} videoId={contentBlock.videoId} />}
            />
          )
          break

        case `${prefix}_ImageBlock`:
          if (contentBlock.mediaType === 'image') {
            const img = getImage(contentBlock.image?.localFile)
            return <GatsbyImage image={img} alt='' />
          }

          return <VideoPlayer videoSource={contentBlock.videoSource} videoId={contentBlock.videoId} />
        }
      })}
    </Styled.CaseStudyContent>
  )
}

export default CaseStudyContent
