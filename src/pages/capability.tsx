import { graphql } from 'gatsby'
import React from 'react'
import type { FC, ReactElement } from 'react'

import Capability from '@components/Capability/Capability'
import FullPageFeature from '@components/FullPageFeature'
import HeadTags from '@components/HeadTags'
import type { HeadTagsProps } from '@components/HeadTags/HeadTags.types'
import type { PanelProps } from '@components/Panel/Panel.types'
import Section from '@components/Section'
import SimpleCard from '@components/SimpleCard'
import SimpleGrid from '@components/SimpleGrid'
import Title from '@components/Title'

import type { CaseStudyProps } from '@typings/CaseStudy.types'

interface CapabilityPageProps {
  data: {
    wpPage: {
      capabilityPage: {
        title: string
        capabilities: {
          title: string
          content: string
          microservices: {
            title: string
          }[]
          backgroundImage: {
            sourceUrl: string
          }
        }[]
      }
      seo: HeadTagsProps['seo']
    }
    caseStudies: {
      nodes: CaseStudyProps[]
    }
  }
}

const CapabilityPage: FC<CapabilityPageProps> = ({ data }: CapabilityPageProps): ReactElement => {
  const { capabilities } = data.wpPage.capabilityPage
  const { caseStudies } = data

  const panelAppearance = (index: number): { inverse: boolean; appearance: PanelProps['appearance'] } => {
    if ((index + 1) % 3 === 0) {
      return {
        appearance: 'tertiary',
        inverse: true,
      }
    }
    if ((index + 1) % 2 === 0) {
      return {
        appearance: 'secondary',
        inverse: false,
      }
    }
    return {
      appearance: 'primary',
      inverse: true,
    }
  }

  return (
    <>
      <FullPageFeature appearance='secondary' title={data.wpPage.capabilityPage.title} showOverlay={false} />
      {capabilities.map((capability, index) => {
        return <Capability {...capability} {...panelAppearance(index)} key={index} />
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
                featuredImage={caseStudy.secondaryFeature.secondaryFeature.localFile}
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

export const Head = ({ data }: CapabilityPageProps) => {
  const { seo } = data.wpPage

  return <HeadTags seo={seo} />
}

export const capabilityPageQuery = graphql`
  query CapabilityPage {
    wpPage(databaseId: { eq: 14 }) {
      capabilityPage {
        title
        capabilities {
          title
          content
          microservices {
            title
          }
          backgroundImage {
            sourceUrl
          }
        }
      }
      seo {
        metaDesc
        metaKeywords
        canonical
        opengraphType
        opengraphUrl
        opengraphTitle
        opengraphSiteName
        opengraphPublisher
        opengraphPublishedTime
        opengraphModifiedTime
        opengraphImage {
          sourceUrl
        }
        twitterTitle
        twitterDescription
        title
        twitterImage {
          sourceUrl
        }
        schema {
          articleType
          pageType
          raw
        }
      }
    }
    caseStudies: allWpCaseStudy(limit: 6) {
      nodes {
        title
        uri
        secondaryFeature {
          secondaryFeature {
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
