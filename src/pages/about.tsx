import { graphql } from 'gatsby'
import type { IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'
import type { FC, ReactElement } from 'react'

import FullPageFeature from '@components/FullPageFeature'
import HeadTags from '@components/HeadTags'
import type { HeadTagsProps } from '@components/HeadTags/HeadTags.types'
import Heading from '@components/Heading'
import LogoGrid from '@components/LogoGrid/LogoGrid'
import PostExcerpt from '@components/PostExcerpt'
import RawHtmlWrapper from '@components/RawHtmlWrapper/RawHtmlWrapper'
import Section from '@components/Section'
import SimpleCard from '@components/SimpleCard/SimpleCard'
import SimpleContentBlock from '@components/SimpleContentBlock'
import SimpleGrid from '@components/SimpleGrid'
import Title from '@components/Title/Title'
import WideColumnBlock from '@components/WideColumnBlock/WideColumnBlock'

import type { PostProps } from '@typings/Post.types'

interface AboutPageProps {
  data: {
    wpPage: {
      featuredImage: {
        node: {
          sourceUrl: string
        }
      }
      aboutPage: {
        feature: {
          title: string
        }
        mainContent: {
          content: string
          intro: string
          columns: {
            title: string
            content: string
          }[]
          newsTitle: string
        }
        clients: {
          title: string
          logos: {
            clientName: string
            logo: {
              localFile: IGatsbyImageData
            }
          }[]
        }
        theTeam: {
          title: string
          team: {
            name: string
            role: string
            picture: {
              localFile: IGatsbyImageData
            }
          }[]
        }
      }
      seo: HeadTagsProps['seo']
    }
    posts: {
      edges: {
        node: PostProps
      }[]
    }
  }
}

const AboutPage: FC<AboutPageProps> = ({ data }: AboutPageProps): ReactElement => {
  const { aboutPage, featuredImage } = data.wpPage

  return (
    <>
      <FullPageFeature title={aboutPage.feature.title} background={featuredImage.node.sourceUrl} />
      <Section appearance='secondary'>
        <WideColumnBlock
          size={2}
          leftColumn={<Heading text={aboutPage.mainContent.intro} />}
          rightColumn={<RawHtmlWrapper content={aboutPage.mainContent.content} />}
        />
      </Section>
      <Section appearance='secondary'>
        <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={10}>
          {aboutPage.mainContent.columns.map((column, index) => {
            return <SimpleContentBlock key={index} heading={column.title} content={column.content} />
          })}
        </SimpleGrid>
      </Section>
      <LogoGrid logos={aboutPage.clients.logos} title={aboutPage.clients.title} extraMargin />
      <Section appearance='secondary'>
        <Title title={aboutPage.theTeam.title} link={{ to: '/', text: 'Join The Team' }} />
        <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={1} rowSpacing={1} smCarousel>
          {aboutPage.theTeam.team.map((teamMember, index) => {
            return (
              <SimpleCard
                key={index}
                title={teamMember.name}
                secondaryHeading={teamMember.role}
                featuredImage={teamMember.picture.localFile}
              />
            )
          })}
        </SimpleGrid>
      </Section>
      <Section appearance='tertiary'>
        <Title title={aboutPage.mainContent.newsTitle} />
        <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={2} rowSpacing={6}>
          {data.posts.edges.map((post, index) => {
            return <PostExcerpt key={index} {...post.node} />
          })}
        </SimpleGrid>
      </Section>
    </>
  )
}

export default AboutPage

export const Head = ({ data }: AboutPageProps) => {
  const { seo } = data.wpPage

  return <HeadTags seo={seo} />
}

export const aboutPageQuery = graphql`
  query AboutPage {
    wpPage(databaseId: { eq: 11 }) {
      featuredImage {
        node {
          sourceUrl
        }
      }
      aboutPage {
        feature {
          title
        }
        mainContent {
          content
          intro
          columns {
            title
            content
          }
          newsTitle
        }
        clients {
          title
          logos {
            clientName
            logo {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 160)
                }
              }
            }
          }
        }
        theTeam {
          title
          team {
            name
            role
            picture {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 810, height: 1170)
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
    posts: allWpPost(limit: 3) {
      edges {
        node {
          title
          uri
          excerpt
          featuredImage {
            node {
              localFile {
                childImageSharp {
                  gatsbyImageData(width: 640, height: 360)
                }
              }
            }
          }
        }
      }
    }
  }
`
