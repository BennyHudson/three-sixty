import React from 'react'
import type { FC, ReactElement } from 'react'

import Container from '@components/Container'

import type { SectionProps } from './Section.types'
import * as Styled from './styles/Section.style'

const Section: FC<SectionProps> = ({
  children,
  appearance = 'primary',
  paddingLevel = 2,
  extraMargin = false,
  extraMarginBottom = false,
  hideOverflow = true,
  id,
}: SectionProps): ReactElement => {
  return (
    <Styled.Section
      hideOverflow={hideOverflow}
      appearance={appearance}
      paddingLevel={paddingLevel}
      extraMargin={extraMargin}
      extraMarginBottom={extraMarginBottom}
      id={id}
    >
      <Container>{children}</Container>
    </Styled.Section>
  )
}

export default Section
