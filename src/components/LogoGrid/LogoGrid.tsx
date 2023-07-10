import React from 'react'
import type { FC, ReactElement } from 'react'
import Slider from 'react-slick'
import ScrollAnimation from 'react-animate-on-scroll'

import ClientLogo from '@components/ClientLogo'
import Section from '@components/Section'
import Title from '@components/Title'

import type { LogoGridProps } from './LogoGrid.types'
import * as Styled from './styles/LogoGrid.style'

const LogoGrid: FC<LogoGridProps> = ({ logos, carousel, title, extraMarginBottom = false, extraMargin = false }: LogoGridProps): ReactElement => {
  if (carousel) {
    const sliderSettings = {
      speed: 9000,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      slidesToShow: 3,
      slidesToScroll: 1,
      variableWidth: true,
      arrows: false,
      dots: false,
    }

    return (
      <Styled.CarouselWrapper>
        <Styled.Carousel>
          <Slider {...sliderSettings}>
            {logos.map((logo, index) => {
              return (
                <Styled.Logo key={index}>
                  <ClientLogo logo={{ localFile: logo.logo.localFile, title: logo.clientName }} />
                </Styled.Logo>
              )
            })}
          </Slider>
        </Styled.Carousel>
      </Styled.CarouselWrapper>
    )
  }

  return (
    <Section appearance='tertiary' paddingLevel={1} extraMarginBottom={extraMarginBottom} extraMargin={extraMargin}>
      {title && <Title title={title} />}
      <Styled.LogoGrid>
        {logos.map((logo, index) => {
          return (
            <ScrollAnimation animateIn='animate__animated animate__fadeIn' delay={(100 * index) + 100} animateOnce>
              <ClientLogo logo={{ localFile: logo.logo.localFile, title: logo.clientName }} key={index} />
            </ScrollAnimation>
          )
        })}
      </Styled.LogoGrid>
    </Section>
  )
}

export default LogoGrid
