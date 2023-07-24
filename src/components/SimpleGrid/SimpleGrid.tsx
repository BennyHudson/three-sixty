import React from 'react'
import type { FC, ReactElement } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import Slider from 'react-slick'

import { useBreakpoints } from '@hooks/useBreakpoints'

import type { SimpleGridProps } from './SimpleGrid.types'
import * as Styled from './styles/SimpleGrid.style'

const SimpleGrid: FC<SimpleGridProps> = ({
  children,
  columns,
  spacing = 8,
  rowSpacing = 8,
  smCarousel = false,
  animateFirstRow = true,
}: SimpleGridProps): ReactElement => {
  const { sm, mdAndAbove, lgAndAbove } = useBreakpoints()

  const firstRowChecker = (index: number) => {
    if (columns.lg && lgAndAbove) {
      return index < columns.lg
    }

    if (columns.md && mdAndAbove) {
      return index < columns.md
    }

    if (columns.sm && sm) {
      return index < columns.sm
    }

    return false
  }

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
      {React.Children.map(children, (child, index) => {
        return (
          <>
            <Styled.GridColumn columns={columns}>
              {!animateFirstRow && firstRowChecker(index) ? (
                <div className='animate__animated animate__fadeInUp'>{child}</div>
              ) : (
                <ScrollAnimation animateIn='animate__animated animate__fadeInUp' delay={200 * index} animateOnce>
                  {child}
                </ScrollAnimation>
              )}
            </Styled.GridColumn>
          </>
        )
      })}
    </Styled.SimpleGrid>
  )
}

export default SimpleGrid
