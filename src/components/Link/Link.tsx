import { Link as GatsbyLink } from 'gatsby'
import React from 'react'
import type { FC, ReactElement } from 'react'

import type { LinkProps } from './Link.types'
import * as Styled from './styles/Link.style'

const Link: FC<LinkProps> = ({ to, text, inverse = false, children, href }: LinkProps): ReactElement => {
  const linkType = () => {
    if (href) return 'a'
    return GatsbyLink
  }
  return (
    <Styled.Link to={to} href={href} as={linkType()} inverse={inverse}>
      {text ?? children}
    </Styled.Link>
  )
}

export default Link
