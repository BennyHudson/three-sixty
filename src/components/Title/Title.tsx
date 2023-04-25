import type { FC, ReactElement } from 'react'
import React from 'react'

import Heading from '@components/Heading'
import Link from '@components/Link'

import type { TitleProps } from './Title.types'
import * as Styled from './styles/Title.style'

const Title: FC<TitleProps> = ({ title, link, inverse = false }: TitleProps): ReactElement => {
  return (
    <Styled.Title>
      <Heading size={3} text={title} inverse={inverse} />
      {link && <Link to={link.to} text={link.text ?? 'View All'} inverse={inverse} />}
    </Styled.Title>
  )
}

export default Title
