import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import type { FC, ReactElement } from 'react'

import SimpleContentBlock from '@components/SimpleContentBlock/SimpleContentBlock'
import VideoPlayer from '@components/VideoPlayer'
import WideColumnBlock from '@components/WideColumnBlock/WideColumnBlock'

import { useBreakpoints } from '@hooks/useBreakpoints'

import type { CaseStudyContentProps } from './CaseStudyContent.types'
import * as Styled from './styles/CaseStudyContent.style'
import ScrollAnimation from 'react-animate-on-scroll'

const CaseStudyContent: FC<CaseStudyContentProps> = ({ content }: CaseStudyContentProps): ReactElement => {
  const prefix = 'CaseStudy_Casestudycontent_ContentBuilder'

  const { mdAndAbove } = useBreakpoints()

  return (
    <>
      <Styled.CaseStudyContent>
        {content.map((contentBlock, index) => {
          if (contentBlock.fieldGroupName === `${prefix}_ContentImage`) {
            const image = getImage(contentBlock.image?.localFile)
            return (
              <ScrollAnimation animateIn='animate__animated animate__fadeInUp' animateOnce key={index}>
                <WideColumnBlock
                  verticalAlign='center'
                  reverse
                  leftColumn={
                    <ScrollAnimation animateIn='animate__animated animate__fadeInUp' animateOnce delay={200}>
                      <SimpleContentBlock heading={contentBlock.heading} subheading={contentBlock.title} content={contentBlock.content} />
                    </ScrollAnimation>
                  }
                  rightColumn={
                    contentBlock.mediaType.toLowerCase() === 'image' ? (
                      <GatsbyImage image={image} alt={contentBlock.heading} />
                    ) : (
                      <VideoPlayer videoSource={contentBlock.videoSource} videoId={contentBlock.videoId} />
                    )
                  }
                />
              </ScrollAnimation>
            )
          }

          if (contentBlock.fieldGroupName === `${prefix}_ImageBlock` && mdAndAbove) {
            if (contentBlock.mediaType.toLowerCase() === 'image') {
              const img = getImage(contentBlock.image?.localFile)
              return (
                <ScrollAnimation animateIn='animate__animated animate__fadeInUp' animateOnce key={index}>
                  <GatsbyImage image={img} alt='' />
                </ScrollAnimation>
              )
            }

            return (
              <ScrollAnimation animateIn='animate__animated animate__fadeInUp' animateOnce key={index}>
                <VideoPlayer videoSource={contentBlock.videoSource} videoId={contentBlock.videoId} />
              </ScrollAnimation>
            )
          }
        })}
      </Styled.CaseStudyContent>
    </>
  )
}

export default CaseStudyContent
