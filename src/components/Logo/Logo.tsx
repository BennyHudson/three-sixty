import { StaticImage } from 'gatsby-plugin-image'
import type { FC, ReactElement } from 'react'
import React from 'react'

import type { LogoProps } from './Logo.types'
import * as Styled from './styles/Logo.style'

const Logo: FC<LogoProps> = ({ inverse }: LogoProps): ReactElement => {
  return (
    <Styled.Logo to='/'>
      {inverse ? (
        <StaticImage src='images/logo-inverse.png' alt='ThreeSixty' width={138} />
      ) : (
        <StaticImage src='images/logo.png' alt='ThreeSixty' width={138} />
      )}
    </Styled.Logo>
  )
}

export default Logo
