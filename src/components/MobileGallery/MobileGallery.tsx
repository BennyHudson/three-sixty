import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import type { FC, ReactElement } from 'react'
import React from 'react'
import Slider from 'react-slick'

import type { MobileGalleryProps } from './MobileGallery.types'
import * as Styled from './styles/MobileGallery.style'

const MobileGallery: FC<MobileGalleryProps> = ({ content }: MobileGalleryProps): ReactElement => {
  const prefix = 'CaseStudy_Casestudycontent_ContentBuilder'

  const sliderSettings = {
    dots: false,
    infinite: false,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <Styled.MobileGallery>
      <Styled.GalleryWrapper>
        <Slider {...sliderSettings}>
          {content.map((contentBlock, index) => {
            if (contentBlock.fieldGroupName === `${prefix}_ImageBlock`) {
              const img = getImage(contentBlock.image?.localFile)
              return <GatsbyImage image={img} alt='' key={index} />
            }
          })}
        </Slider>
      </Styled.GalleryWrapper>
    </Styled.MobileGallery>
  )
}

export default MobileGallery
