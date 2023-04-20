import type { FC, ReactElement } from 'react'
import React from 'react'

import type { LogoProps } from './Logo.types'
import * as Styled from './styles/Logo.style'

const Logo: FC<LogoProps> = ({ inverse }: LogoProps): ReactElement => {
  return <Styled.Logo>Component Logo</Styled.Logo>
}

export default Logo
