import type { FC, ReactElement } from 'react'
import React from 'react'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import Heading from '@components/Heading/Heading'
import ListGroup from '@components/ListGroup/ListGroup'
import Paragraph from '@components/Paragraph/Paragraph'

import Section from '@components/Section'

import WideColumnBlock from '@components/WideColumnBlock'

import type { CapabilityProps } from './Capability.types'
import * as Styled from './styles/Capability.style'
import ScrollAnimation from 'react-animate-on-scroll'

const Capability: FC<CapabilityProps> = ({
  title,
  content,
  microservices,
  backgroundImage,
  animate = true
}: CapabilityProps): ReactElement => {
  const image = getImage(backgroundImage.localFile)
  return (
    <Section appearance='secondary'>
      <WideColumnBlock
        verticalAlign='center'
        reverse
        leftColumn={
          <ScrollAnimation animateIn='animate__animated animate__fadeInUp' delay={200} animateOnce>
            <Styled.Content>
              <div>
                <Heading size={3} text={title} weight={3} />
                <Paragraph text={content} size={3} />
              </div>
              <div>
                <Heading size={2} text={'What\'s included'} weight={3} />
                <ListGroup items={microservices.map((microservice) => microservice.title)} />
              </div>
            </Styled.Content>
          </ScrollAnimation>
        }
        rightColumn={
          animate ? (
            <ScrollAnimation animateIn='animate__animated animate__fadeInUp' delay={800} animateOnce>
              <GatsbyImage image={image!} alt={title} />
            </ScrollAnimation>
          ) : (
            <GatsbyImage image={image!} alt={title} />
          )
        }
      />
    </Section>
  )
}

export default Capability
