import React from 'react'
import type { FC, ReactElement } from 'react'

import type { ContainerProps } from './Container.types'
import * as Styled from './styles/Container.style'

const Container: FC<ContainerProps> = ({ children }: ContainerProps): ReactElement => {
  return <Styled.Container>{children}</Styled.Container>
}

export default Container
