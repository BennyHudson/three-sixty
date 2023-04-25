import type { FC, ReactElement } from 'react'
import React from 'react'

import type { LinkProps } from './Link.types'
import * as Styled from './styles/Link.style'

const Link: FC<LinkProps> = ({ to, text, inverse = false, children }: LinkProps): ReactElement => {
  return (
    <Styled.Link to={to} inverse={inverse}>
      {text ?? children}
    </Styled.Link>
  )
}

export default Link
