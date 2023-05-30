import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import type { FC, ReactElement } from 'react'

import Heading from '@components/Heading/Heading'

import type { SimpleCardProps } from './SimpleCard.types'
import * as Styled from './styles/SimpleCard.style'

const SimpleCard: FC<SimpleCardProps> = ({ title, featuredImage, uri, secondaryHeading }: SimpleCardProps): ReactElement => {
  const image = getImage(featuredImage)
  return (
    <Styled.SimpleCard to={uri} as={uri ? Link : 'div'}>
      <Styled.Content>
        <Heading text={title} inverse noMargin />
        {secondaryHeading && Array.isArray(secondaryHeading) ? (
          <>
            {secondaryHeading.map((secondaryHeading) => {
              return <Heading size={1} text={secondaryHeading} inverse />
            })}
          </>
        ) : (
          <Heading size={1} text={secondaryHeading!} inverse />
        )}
      </Styled.Content>
      <GatsbyImage image={image!} alt={title} />
    </Styled.SimpleCard>
  )
}

export default SimpleCard
