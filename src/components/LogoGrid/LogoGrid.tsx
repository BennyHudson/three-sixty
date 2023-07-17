import React from 'react'
import type { FC, ReactElement } from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import Slider from 'react-slick'

import ClientLogo from '@components/ClientLogo'
import Section from '@components/Section'
import Title from '@components/Title'

import type { LogoGridProps } from './LogoGrid.types'
import * as Styled from './styles/LogoGrid.style'

const LogoGrid: FC<LogoGridProps> = ({
  logos,
  carousel,
  title,
  extraMarginBottom = false,
  extraMargin = false,
  feature = false,
}: LogoGridProps): ReactElement => {
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

  if (feature) {
    const sliderSettings = {
      autoplay: true,
      fade: true,
      arrows: false,
      dots: false,
      speed: 1000,
      autoplaySpeed: 3000,
    }

    const logoArrays = []
    const size = 6

    for (let i = 0; i < logos.length; i += size) {
      logoArrays.push(logos.slice(i, i + size))
    }

    return (
      <Section appearance='tertiary' extraMarginBottom={extraMarginBottom} extraMargin={extraMargin}>
        <Slider {...sliderSettings}>
          {logoArrays.map((clients, index) => {
            return (
              <Styled.LogoGrid key={index}>
                {clients.map((logo, index) => {
                  return <ClientLogo logo={{ localFile: logo.logo.localFile, title: logo.clientName }} />
                })}
              </Styled.LogoGrid>
            )
          })}
        </Slider>
      </Section>
    )
  }

  return (
    <Section appearance='tertiary' extraMarginBottom={extraMarginBottom} extraMargin={extraMargin}>
      {title && <Title title={title} />}
      <Styled.LogoGrid>
        {logos.map((logo, index) => {
          return (
            <ScrollAnimation key={index} animateIn='animate__animated animate__fadeIn' delay={100 * index + 100} animateOnce>
              <ClientLogo logo={{ localFile: logo.logo.localFile, title: logo.clientName }} />
            </ScrollAnimation>
          )
        })}
      </Styled.LogoGrid>
    </Section>
  )
}

export default LogoGrid
