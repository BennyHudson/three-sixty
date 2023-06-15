import { type HeadFC, type PageProps, graphql } from 'gatsby'
import React from 'react'
import type { FC, ReactElement } from 'react'

import FullPageFeature from '@components/FullPageFeature/FullPageFeature'
import PostExcerpt from '@components/PostExcerpt'
import Section from '@components/Section'
import SimpleGrid from '@components/SimpleGrid'
import Title from '@components/Title'

import type { PostProps } from '@typings/Post.types'

interface NewsPageProps {
  data: {
    posts: {
      edges: {
        node: PostProps
      }[]
    }
  }
}

const NewsPage: FC<NewsPageProps> = ({ data }: NewsPageProps): ReactElement => {
  return (
    <>
      <FullPageFeature title='Lorem ipsum dolor sit amet, consectetur adipiscing elit.' />
      <Section appearance='tertiary'>
        <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={2} rowSpacing={6}>
          {data.posts.edges.map((post, index) => {
            return <PostExcerpt key={index} {...post.node} />
          })}
        </SimpleGrid>
      </Section>
    </>
  )
}

export default NewsPage

export const Head: HeadFC = () => <title>Home Page</title>

export const newsQuery = graphql`
  query WorkPage {
    posts: allWpPost(limit: 200) {
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
