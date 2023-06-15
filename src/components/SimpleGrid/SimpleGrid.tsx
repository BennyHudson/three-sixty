import React from 'react'
import type { FC, ReactElement } from 'react'
import Slider from 'react-slick'

import { useBreakpoints } from '@hooks/useBreakpoints'

import type { SimpleGridProps } from './SimpleGrid.types'
import * as Styled from './styles/SimpleGrid.style'

const SimpleGrid: FC<SimpleGridProps> = ({ children, columns, spacing = 8, rowSpacing = 8, smCarousel = false }: SimpleGridProps): ReactElement => {
  const { sm } = useBreakpoints()

  if (smCarousel && sm) {
    const sliderSettings = {
      dots: false,
      infinite: true,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
    }

    return (
      <Styled.Carousel>
        <Slider {...sliderSettings}>
          {React.Children.map(children, (child) => {
            return <>{child}</>
          })}
        </Slider>
      </Styled.Carousel>
    )
  }

  return (
    <Styled.SimpleGrid columns={columns} spacing={spacing} rowSpacing={rowSpacing}>
      {React.Children.map(children, (child) => {
        return <Styled.GridColumn columns={columns}>{child}</Styled.GridColumn>
      })}
    </Styled.SimpleGrid>
  )
}

export default SimpleGrid
