import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import React from 'react'
import type { FC, ReactElement } from 'react'

import ClientLogo from '@components/ClientLogo/ClientLogo'

import type { LogoGridProps } from './LogoGrid.types'
import * as Styled from './styles/LogoGrid.style'

const LogoGrid: FC<LogoGridProps> = ({ logos }: LogoGridProps): ReactElement => {
  return (
    <Styled.LogoGridWrapper>
      <Styled.LogoGrid>
        {logos.map((logo, index) => {
          return <ClientLogo logo={{ localFile: logo.logo.localFile, title: logo.clientName }} />
        })}
      </Styled.LogoGrid>
    </Styled.LogoGridWrapper>
  )
}

export default LogoGrid
