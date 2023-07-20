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
import SimpleContentBlock from '@components/SimpleContentBlock'
import { IGatsbyImageData } from 'gatsby-plugin-image'

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
            localFile: IGatsbyImageData
          }
        }[]
        includedTitle: string
        whatsIncluded: {
          title: string
          content: string
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
  const { capabilities, includedTitle, whatsIncluded } = data.wpPage.capabilityPage
  const { caseStudies } = data

  return (
    <>
      <FullPageFeature appearance='secondary' title={data.wpPage.capabilityPage.title} showOverlay={false} size={1} />
      {capabilities.map((capability, index) => {
        return <Capability {...capability} key={index} animate={index !== 0} id={capability.title.toLowerCase()} />
      })}
      <Section appearance='primary'>
        <Title title={includedTitle} inverse />
        <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={10}>
          {whatsIncluded.map((service, index) => {
            return (
              <SimpleContentBlock key={index} heading={service.title} content={service.content} inverse />
            )
          })}
        </SimpleGrid>
      </Section>
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
            localFile {
              childImageSharp {
                gatsbyImageData(width: 1000, height: 1000)
              }
            }
          }
        }
        includedTitle
        whatsIncluded {
          content
          title
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
