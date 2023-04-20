import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import type { ReactElement, FC } from 'react'
import React from 'react'

import type { LogoGridProps } from './LogoGrid.types'
import * as Styled from './styles/LogoGrid.style'


const LogoGrid: FC<LogoGridProps> = ({
  logos,
}: LogoGridProps): ReactElement => {
  return (
    <Styled.LogoGridWrapper>
      <Styled.LogoGrid>
        {logos.map((logo, index) => {
          const image = getImage(logo.logo?.localFile)
          return (
            <Styled.Logo key={index}>
              <GatsbyImage image={image!} alt={logo.clientName} />
            </Styled.Logo>
          )
        })}
      </Styled.LogoGrid>
    </Styled.LogoGridWrapper>
  )
}

export default LogoGrid
