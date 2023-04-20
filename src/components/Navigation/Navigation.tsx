import { Link, graphql, useStaticQuery } from 'gatsby'
import type { FC, ReactElement } from 'react'
import React from 'react'

import type { Menu } from './Navigation.types'
import * as Styled from './styles/Navigation.style'

const Navigation: FC = (): ReactElement => {
  const menu: Menu = useStaticQuery(graphql`
    query MainMenu {
      wpMenu(databaseId: { eq: 11 }) {
        menuItems {
          nodes {
            id
            uri
            label
          }
        }
      }
    }
  `)

  const { nodes } = menu.wpMenu.menuItems

  return (
    <>
      <Styled.Navigation>
        <Styled.Menu>
          {nodes.map((menuItem) => {
            return (
              <Styled.MenuItem key={menuItem.id}>
                <Link to={menuItem.uri}>{menuItem.label}</Link>
              </Styled.MenuItem>
            )
          })}
        </Styled.Menu>
      </Styled.Navigation>
    </>
  )
}

export default Navigation
