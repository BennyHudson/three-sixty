import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import type { FC, ReactElement } from 'react'
import React from 'react'

import type { ClientLogoProps } from './ClientLogo.types'
import * as Styled from './styles/ClientLogo.style'

const ClientLogo: FC<ClientLogoProps> = ({ logo }: ClientLogoProps): ReactElement => {
  const image = getImage(logo.localFile)
  return (
    <Styled.ClientLogo>
      <GatsbyImage image={image!} alt={logo.title} />
    </Styled.ClientLogo>
  )
}

export default ClientLogo
