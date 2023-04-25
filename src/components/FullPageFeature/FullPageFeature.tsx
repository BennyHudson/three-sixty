import type { FC, ReactElement } from 'react'
import React from 'react'

import Container from '@components/Container/Container'
import Heading from '@components/Heading/Heading'

import type { FullPageFeatureProps } from './FullPageFeature.types'
import * as Styled from './styles/FullPageFeature.style'

const FullPageFeature: FC<FullPageFeatureProps> = ({ title, appearance = 'primary', background }: FullPageFeatureProps): ReactElement => {
  return (
    <Styled.FullPageFeature appearance={appearance} background={background}>
      <Container>
        <Heading text={title} size={5} inverse={appearance === 'primary' || !!background} weight={3} />
      </Container>
    </Styled.FullPageFeature>
  )
}

export default FullPageFeature
