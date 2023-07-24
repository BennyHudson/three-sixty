import { graphql } from 'gatsby'
import React from 'react'
import type { FC, ReactElement } from 'react'

import CaseStudyContent from '@components/CaseStudyContent'
import FullPageFeature from '@components/FullPageFeature'
import Heading from '@components/Heading'
import Link from '@components/Link'
import MetaBlock from '@components/MetaBlock'
import RawHtmlWrapper from '@components/RawHtmlWrapper'
import Section from '@components/Section'
import SimpleCard from '@components/SimpleCard'
import SimpleGrid from '@components/SimpleGrid'
import Title from '@components/Title/Title'
import WideColumnBlock from '@components/WideColumnBlock'

import type { CaseStudyProps } from '@typings/CaseStudy.types'
import { useBreakpoints } from '@hooks/useBreakpoints'
import MobileGallery from '@components/MobileGallery'
import HeadTags from '@components/HeadTags'

interface CaseStudyTemplateProps {
  data: {
    allWpCaseStudy: {
      nodes: CaseStudyProps[]
    }
    caseStudies: {
      nodes: CaseStudyProps[]
    }
  }
}

const CaseStudyTemplate: FC<CaseStudyTemplateProps> = ({ data }: CaseStudyTemplateProps): ReactElement => {
  const { caseStudies } = data
  const caseStudy = data.allWpCaseStudy.nodes[0]

  const { sm } = useBreakpoints()

  const { brandLinks } = caseStudy.brandLinks

  let metaContent = [
    {
      title: 'Services',
      content: caseStudy.tags.nodes.map((tag) => tag.name),
    },
  ]

  if (brandLinks) {
    metaContent = [
      metaContent[0],
      {
        title: 'Brand Links',
        content: brandLinks.map((brandLink, index) => (
          <Link key={index} href={brandLink.url} target='_blank'>
            {brandLink.text}
          </Link>
        )),
      },
    ]
  }

  return (
    <>
      <FullPageFeature
        title={caseStudy.title}
        subtitle={caseStudy.workTypes.nodes[0].name}
        background={caseStudy.featuredImage.node.sourceUrl}
      />
      <Section appearance='secondary'>
        <WideColumnBlock
          reverse
          size={3}
          leftColumn={<MetaBlock metaContent={metaContent} />}
          rightColumn={<RawHtmlWrapper content={caseStudy.caseStudyContent.introContent} size={2} />}
        />
        <CaseStudyContent content={caseStudy.caseStudyContent.contentBuilder} />
      </Section>
      {sm && <MobileGallery content={caseStudy.caseStudyContent.contentBuilder} />}
      <Section appearance='secondary' paddingLevel={1}>
        <Heading text='Results-driven,' size={4} weight={3} noMargin />
        <Heading text='performance obsessed' size={4} weight={3} />
      </Section>
      <Section appearance='secondary' extraMarginBottom>
        <SimpleGrid columns={{ sm: 2, md: 4 }} spacing={10} rowSpacing={10}>
          {caseStudy.caseStudyContent.results.map((result, index) => {
            return (
              <div key={index}>
                <Heading size={5} weight={3} noMargin text={result.value} />
                <Heading size={1} noMargin text={result.title} />
              </div>
            )
          })}
        </SimpleGrid>
      </Section>
      <Section appearance='tertiary'>
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

export default CaseStudyTemplate

export const Head = ({ data }: CaseStudyTemplateProps) => {
  const { seo } = data.allWpCaseStudy.nodes[0]

  return <HeadTags seo={seo} />
}

export const caseStudyQuery = graphql`
  query ($id: String!) {
    allWpCaseStudy(filter: { id: { eq: $id } }) {
      nodes {
        title
        workTypes {
          nodes {
            name
          }
        }
        tags {
          nodes {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
        brandLinks {
          brandLinks {
            text
            url
          }
        }
        caseStudyContent {
          introContent
          results {
            title
            value
          }
          contentBuilder {
            ... on WpCaseStudy_Casestudycontent_ContentBuilder_ContentImage {
              content
              fieldGroupName
              heading
              title
              mediaType
              videoId
              videoSource
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 850)
                  }
                }
              }
            }
            ... on WpCaseStudy_Casestudycontent_ContentBuilder_ImageBlock {
              fieldGroupName
              mediaType
              videoId
              videoSource
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData
                  }
                }
              }
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
    }
    caseStudies: allWpCaseStudy(limit: 3) {
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
