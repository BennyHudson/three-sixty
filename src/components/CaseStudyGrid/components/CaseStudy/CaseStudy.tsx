import type { CaseStudyProps } from '@typings/CaseStudy.types'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import type { ReactElement, FC } from 'react'
import React from 'react'


import * as Styled from './styles/CaseStudy.style'

const CaseStudy: FC<CaseStudyProps> = ({
  title,
  uri,
  featuredImage,
  workTypes,
}: CaseStudyProps): ReactElement => {
  const image = getImage(featuredImage.node.localFile)
  return (
    <Styled.CaseStudy to={uri}>
      <GatsbyImage image={image!} alt={title} />
    </Styled.CaseStudy>
  )
}

export default CaseStudy
