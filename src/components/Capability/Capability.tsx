import type { FC, ReactElement } from 'react'
import React from 'react'

import { GatsbyImage, getImage } from 'gatsby-plugin-image'

import ScrollAnimation from 'react-animate-on-scroll'

import Heading from '@components/Heading/Heading'
import ListGroup from '@components/ListGroup/ListGroup'
import Paragraph from '@components/Paragraph/Paragraph'

import Section from '@components/Section'

import WideColumnBlock from '@components/WideColumnBlock'

import type { CapabilityProps } from './Capability.types'
import * as Styled from './styles/Capability.style'

const Capability: FC<CapabilityProps> = ({
  title,
  content,
  microservices,
  backgroundImage,
  animate = true,
  id,
}: CapabilityProps): ReactElement => {
  const image = getImage(backgroundImage.localFile)

  const contentWrapper = () => {
    return (
      <ScrollAnimation animateIn='animate__animated animate__fadeInUp' animateOnce delay={200}>
        <Styled.Content>
          <div>
            <Heading size={3} text={title} weight={3} />
            <Paragraph text={content} size={3} />
          </div>
          {/* <div>
            <Heading size={2} text={'What\'s included'} weight={3} />
            <ListGroup items={microservices.map((microservice) => microservice.title)} />
          </div> */}
        </Styled.Content>
      </ScrollAnimation>
    )
  }

  const contentBlock = () => {
    return (
      <WideColumnBlock
        verticalAlign='center'
        reverse
        leftColumn={contentWrapper()}
        rightColumn={<GatsbyImage image={image!} alt={title} />}
      />
    )
  }

  return (
    <Section appearance='secondary' id={id}>
      {animate ?
        (
          <ScrollAnimation animateIn='animate__animated animate__fadeInUp' animateOnce>
            {contentBlock()}
          </ScrollAnimation>
        )
        :
        <>
          {contentBlock()}
        </>
      }
    </Section>
  )
}

export default Capability
