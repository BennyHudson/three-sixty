import React, { useContext } from 'react'
import type { FC, ReactElement } from 'react'

import Container from '@components/Container/Container'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import type { PanelProps } from './Panel.types'
import * as Styled from './styles/Panel.style'

const Panel: FC<PanelProps> = ({ children, id }: PanelProps): ReactElement => {
  const { headerHeight } = useContext(PageContext) as PageContextProps
  return (
    <Styled.Panel headerHeight={headerHeight} id={id}>
      <Container>
        <Styled.Content>{children}</Styled.Content>
      </Container>
    </Styled.Panel>
  )
}

export default Panel
