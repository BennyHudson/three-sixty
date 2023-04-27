import type { ReactElement, FC } from 'react'
import React, { useContext } from 'react'

import * as Styled from './styles/Panel.style'

import type { PanelProps } from './Panel.types'
import PageContext, { PageContextProps } from '@context/PageContext'
import Container from '@components/Container/Container'

const Panel: FC<PanelProps> = ({
  appearance = 'primary',
  children,
}: PanelProps): ReactElement => {
  const { headerHeight } = useContext(PageContext) as PageContextProps
  return (
    <Styled.Panel headerHeight={headerHeight} appearance={appearance}>
      <Container>
        <Styled.Content>
        {children}
        </Styled.Content>
      </Container>
    </Styled.Panel>
  )
}

export default Panel
