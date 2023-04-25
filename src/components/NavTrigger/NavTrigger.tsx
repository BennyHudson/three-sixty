import type { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import type { FC, ReactElement } from 'react'
import React, { useContext } from 'react'

import Link from '@components/Link/Link'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import { NavTriggerProps } from './NavTrigger.types'
import * as Styled from './styles/NavTrigger.style'

const NavTrigger: FC<NavTriggerProps> = ({ inverse }: NavTriggerProps): ReactElement => {
  const { showNavigation, setShowNavigation } = useContext(PageContext) as PageContextProps
  return (
    <Styled.NavWrapper>
      <Link to='/' text='Work With Us' inverse={inverse} />
      <Styled.NavTrigger onClick={() => setShowNavigation(!showNavigation)} inverse={inverse}>
        <FontAwesomeIcon icon={showNavigation ? (faTimes as IconProp) : (faBars as IconProp)} />
      </Styled.NavTrigger>
    </Styled.NavWrapper>
  )
}

export default NavTrigger
