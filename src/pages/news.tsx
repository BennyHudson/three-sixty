import { graphql } from 'gatsby'
import React from 'react'
import type { FC, ReactElement } from 'react'

import FullPageFeature from '@components/FullPageFeature/FullPageFeature'
import HeadTags from '@components/HeadTags'
import type { HeadTagsProps } from '@components/HeadTags/HeadTags.types'
import PostExcerpt from '@components/PostExcerpt'
import Section from '@components/Section'
import SimpleGrid from '@components/SimpleGrid'

import type { PostProps } from '@typings/Post.types'

interface NewsPageProps {
  data: {
    wpPage: {
      pageTitle: {
        title: string
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

const NewsPage: FC<NewsPageProps> = ({ data }: NewsPageProps): ReactElement => {
  const { title } = data.wpPage.pageTitle
  return (
    <>
      <FullPageFeature title={title} size={1} appearance='secondary' showOverlay={false} />
      <Section appearance='secondary'>
        <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={2} rowSpacing={6} animateFirstRow={false}>
          {data.posts.edges.map((post, index) => {
            return <PostExcerpt key={index} {...post.node} />
          })}
        </SimpleGrid>
      </Section>
    </>
  )
}

export default NewsPage

export const Head = ({ data }: NewsPageProps) => {
  const { seo } = data.wpPage

  return <HeadTags seo={seo} />
}

export const newsQuery = graphql`
  query WorkPage {
    wpPage(databaseId: { eq: 19 }) {
      pageTitle {
        title
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
    posts: allWpPost(limit: 200) {
      edges {
        node {
          title
          uri
          excerpt
          secondaryFeature {
            secondaryFeature {
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
