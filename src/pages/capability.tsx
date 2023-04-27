import { graphql, type HeadFC, type PageProps } from 'gatsby'
import type { FC, ReactElement } from 'react'
import React from 'react'

import FullPageFeature from '@components/FullPageFeature'
import Panel from '@components/Panel'
import Section from '@components/Section'
import Title from '@components/Title'
import SimpleGrid from '@components/SimpleGrid'
import SimpleCard from '@components/SimpleCard'
import { CaseStudyProps } from '@typings/CaseStudy.types'
import { PanelProps } from '@components/Panel/Panel.types'
import SimpleContentBlock from '@components/SimpleContentBlock/SimpleContentBlock'
import Paragraph from '@components/Paragraph/Paragraph'
import ListGroup from '@components/ListGroup/ListGroup'

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
          <Panel appearance={panelAppearance(index)}>
            <SimpleGrid columns={3}>
              <SimpleContentBlock inverse heading={capability.title}>
                <Paragraph text={capability.content} />
                <ListGroup items={capability.microservices.map((microservice) => microservice.title)} />
              </SimpleContentBlock>
            </SimpleGrid>
          </Panel>
        )
      })}
      <Section appearance='secondary'>
        <Title title='Our Work' link={{ to: '/work', text: 'All Work' }} />
        <SimpleGrid columns={3} spacing={2} rowSpacing={2}>
          {caseStudies.nodes.map((caseStudy) => {
            return (
              <SimpleCard
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
    wpPage(databaseId: {eq: 14}) {
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
