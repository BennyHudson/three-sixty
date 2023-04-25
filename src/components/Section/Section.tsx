import type { FC, ReactElement } from 'react'
import React from 'react'

import Container from '@components/Container'

import type { SectionProps } from './Section.types'
import * as Styled from './styles/Section.style'

const Section: FC<SectionProps> = ({ children, appearance = 'primary' }: SectionProps): ReactElement => {
  return (
    <Styled.Section appearance={appearance}>
      <Container>{children}</Container>
    </Styled.Section>
  )
}

export default Section
