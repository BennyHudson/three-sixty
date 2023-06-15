import { type HeadFC, type PageProps, graphql } from 'gatsby'
import React from 'react'
import type { FC, ReactElement } from 'react'

import FullPageFeature from '@components/FullPageFeature'
import ListGroup from '@components/ListGroup/ListGroup'
import Panel from '@components/Panel'
import type { PanelProps } from '@components/Panel/Panel.types'
import Paragraph from '@components/Paragraph/Paragraph'
import Section from '@components/Section'
import SimpleCard from '@components/SimpleCard'
import SimpleContentBlock from '@components/SimpleContentBlock/SimpleContentBlock'
import SimpleGrid from '@components/SimpleGrid'
import Title from '@components/Title'

import type { CaseStudyProps } from '@typings/CaseStudy.types'
import Heading from '@components/Heading/Heading'
import Capability from '@components/Capability/Capability'

interface CapabilityPageProps {
  data: {
    wpPage: {
      capabilityPage: {
        capabilities: {
          title: string
          content: string
          microservices: {
            title: string
          }[]
        }[]
      }
    }
    caseStudies: {
      nodes: CaseStudyProps[]
    }
  }
}

const CapabilityPage: FC<CapabilityPageProps> = ({ data }: CapabilityPageProps): ReactElement => {
  const { capabilities } = data.wpPage.capabilityPage
  const { caseStudies } = data

  const panelAppearance = (index: number): PanelProps['appearance'] => {
    if ((index + 1) % 3 === 0) return 'tertiary'
    if ((index + 1) % 2 === 0) return 'secondary'
    return 'primary'
  }

  return (
    <>
      <FullPageFeature appearance='secondary' title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
      {capabilities.map((capability, index) => {
        return (
          <Capability {...capability} appearance={panelAppearance(index)} key={index} />
        )
      })}
      <Section appearance='secondary'>
        <Title title='Our Work' link={{ to: '/work', text: 'All Work' }} />
        <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={1} rowSpacing={1}>
          {caseStudies.nodes.map((caseStudy, index) => {
            return (
              <SimpleCard
                key={index}
                title={caseStudy.title}
                uri={caseStudy.uri}
                featuredImage={caseStudy.featuredImage.node.localFile}
                secondaryHeading={caseStudy.workTypes.nodes.map((category) => category.name)}
              />
            )
          })}
        </SimpleGrid>
      </Section>
    </>
  )
}

export default CapabilityPage

export const Head: HeadFC = () => <title>Home Page</title>

export const capabilityPageQuery = graphql`
  query CapabilityPage {
    wpPage(databaseId: { eq: 14 }) {
      capabilityPage {
        capabilities {
          title
          content
          microservices {
            title
          }
        }
      }
    }
    caseStudies: allWpCaseStudy(limit: 6) {
      nodes {
        title
        uri
        featuredImage {
          node {
            localFile {
              childImageSharp {
                gatsbyImageData(width: 810, height: 1170)
              }
            }
          }
        }
        workTypes {
          nodes {
            name
          }
        }
      }
    }
  }
`
