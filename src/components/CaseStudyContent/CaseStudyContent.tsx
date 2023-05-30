import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import type { FC, ReactElement } from 'react'

import SimpleContentBlock from '@components/SimpleContentBlock/SimpleContentBlock'
import WideColumnBlock from '@components/WideColumnBlock/WideColumnBlock'

import type { CaseStudyContentProps } from './CaseStudyContent.types'
import * as Styled from './styles/CaseStudyContent.style'

const CaseStudyContent: FC<CaseStudyContentProps> = ({ content }: CaseStudyContentProps): ReactElement => {
  const prefix = 'CaseStudy_Casestudycontent_ContentBuilder'

  return (
    <Styled.CaseStudyContent>
      {content.map((contentBlock) => {
        switch (contentBlock.fieldGroupName) {
        case `${prefix}_ContentImage`:
          const image = getImage(contentBlock.image.localFile)
          return (
            <WideColumnBlock
              verticalAlign='center'
              leftColumn={
                <SimpleContentBlock heading={contentBlock.heading} subheading={contentBlock.title} content={contentBlock.content} />
              }
              rightColumn={<GatsbyImage image={image} alt={contentBlock.heading} />}
            />
          )

        case `${prefix}_ImageBlock`:
          const img = getImage(contentBlock.image.localFile)
          return <GatsbyImage image={img} alt='' />
        }
      })}
    </Styled.CaseStudyContent>
  )
}

export default CaseStudyContent
