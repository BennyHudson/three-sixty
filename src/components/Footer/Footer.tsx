import { graphql, useStaticQuery } from 'gatsby'
import React, { useContext } from 'react'
import type { FC, ReactElement } from 'react'

import Container from '@components/Container/Container'
import Heading from '@components/Heading/Heading'
import Link from '@components/Link/Link'
import Paragraph from '@components/Paragraph/Paragraph'

import type { PageContextProps } from '@context/PageContext'
import PageContext from '@context/PageContext'

import * as Styled from './styles/Footer.style'

const Footer: FC = (): ReactElement => {
  const { headerHeight } = useContext(PageContext) as PageContextProps

  const footerData = useStaticQuery(graphql`
    query FooterData {
      allWp {
        nodes {
          globalOptions {
            threeSixtyOptions {
              address
              contactEmail
              legals {
                title
                file {
                  localFile {
                    publicURL
                  }
                }
              }
              socials {
                title
                url
              }
            }
          }
        }
      }
    }
  `)

  const { address, contactEmail, legals, socials } = footerData.allWp.nodes[0].globalOptions.threeSixtyOptions

  return (
    <Styled.Footer headerHeight={headerHeight}>
      <Styled.FooterMain>
        <Container>
          <Heading size={1} text='Work with us' inverse />
          <Link href='#' showUnderline inverse appearance='secondary'><Heading size={3} text='Lorem ipsum dolor sit amet,
consectetur adipiscing.' inverse appearance='secondary' /></Link>
        </Container>
      </Styled.FooterMain>
      <Container>
        <Styled.FooterColumns>
          <div>
            <Heading size={1} text='Company Name | 2023' inverse noMargin />
            <Paragraph text={address} inverse appearance='secondary' />
          </div>

          <div>
            <Heading size={1} text='Follow' inverse noMargin />
            <Paragraph inverse appearance='secondary'>
              {socials.map((social, index) => {
                return (
                  <>
                    {index !== 0 && ' | '}
                    <Link inverse appearance='secondary' href={social.url} key={index}>
                      {social.title}
                    </Link>
                  </>
                )
              })}
            </Paragraph>
          </div>

          <div>
            <Heading size={1} text='Legal' inverse noMargin />
            <Paragraph inverse appearance='secondary'>
              {legals.map((legal, index) => {
                return (
                  <Link inverse appearance='secondary' href={legal.file.localFile.publicUrl} key={index}>
                    {index !== 0 && ' | '}{legal.title}
                  </Link>
                )
              })}
            </Paragraph>
          </div>

          <div>
            <Heading size={1} text='Contact' inverse noMargin />
            <Paragraph>
              <Link href={`mailto:${contactEmail}`} text={contactEmail} inverse appearance='secondary' />
            </Paragraph>
          </div>
        </Styled.FooterColumns>
      </Container>
    </Styled.Footer>
  )
}

export default Footer
