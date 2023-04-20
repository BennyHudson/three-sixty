import Container from '@components/Container/Container'
import type { ReactElement, FC } from 'react'
import React from 'react'


import type { FullPageFeatureProps } from './FullPageFeature.types'
import * as Styled from './styles/FullPageFeature.style'


const FullPageFeature: FC<FullPageFeatureProps> = ({
  title,
}: FullPageFeatureProps): ReactElement => {
  return (
    <Styled.FullPageFeature>
      <Container>
        {title}
      </Container>
    </Styled.FullPageFeature>
  )
}

export default FullPageFeature
