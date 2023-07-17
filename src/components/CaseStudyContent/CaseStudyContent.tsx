import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import type { FC, ReactElement } from 'react'

import SimpleContentBlock from '@components/SimpleContentBlock/SimpleContentBlock'
import VideoPlayer from '@components/VideoPlayer'
import WideColumnBlock from '@components/WideColumnBlock/WideColumnBlock'

import type { CaseStudyContentProps } from './CaseStudyContent.types'
import * as Styled from './styles/CaseStudyContent.style'
import { useBreakpoints } from '@hooks/useBreakpoints'

const CaseStudyContent: FC<CaseStudyContentProps> = ({ content }: CaseStudyContentProps): ReactElement => {
  const prefix = 'CaseStudy_Casestudycontent_ContentBuilder'

  const { sm, mdAndAbove } = useBreakpoints()

  return (
    <>
      <Styled.CaseStudyContent>
        {content.map((contentBlock, index) => {
          if (contentBlock.fieldGroupName === `${prefix}_ContentImage`) {
            const image = getImage(contentBlock.image?.localFile)
            return (
              <WideColumnBlock
                key={index}
                verticalAlign='center'
                reverse
                leftColumn={
                  <SimpleContentBlock heading={contentBlock.heading} subheading={contentBlock.title} content={contentBlock.content} />
                }
                rightColumn={
                  contentBlock.mediaType.toLowerCase() === 'image' ? (
                    <GatsbyImage image={image} alt={contentBlock.heading} />
                  ) : (
                    <VideoPlayer videoSource={contentBlock.videoSource} videoId={contentBlock.videoId} />
                  )
                }
              />
            )
          }

          if (contentBlock.fieldGroupName ===  `${prefix}_ImageBlock` && mdAndAbove) {
            if (contentBlock.mediaType.toLowerCase() === 'image') {
              const img = getImage(contentBlock.image?.localFile)
              return <GatsbyImage image={img} alt='' key={index} />
            }

            return <VideoPlayer videoSource={contentBlock.videoSource} videoId={contentBlock.videoId} key={index} />
          }
        })}
      </Styled.CaseStudyContent>
      {/* {sm && (
        <>
          {content.map((contentBlock, index) => {
            if (contentBlock.fieldGroupName ===  `${prefix}_ImageBlock`) {
              return (
                <>Hello</>
              )
            }
          })}
        </>
      )} */}
    </>
  )
}

export default CaseStudyContent
