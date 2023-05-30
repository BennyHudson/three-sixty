import { graphql } from 'gatsby'
import React from 'react'
import type { FC, ReactElement } from 'react'

import ArticleContent from '@components/ArticleContent/ArticleContent'
import FullPageFeature from '@components/FullPageFeature/FullPageFeature'
import Heading from '@components/Heading/Heading'
import PostExcerpt from '@components/PostExcerpt/PostExcerpt'
import Section from '@components/Section/Section'
import SimpleGrid from '@components/SimpleGrid/SimpleGrid'
import Title from '@components/Title/Title'
import WideColumnBlock from '@components/WideColumnBlock/WideColumnBlock'

import type { PostProps } from '@typings/Post.types'
import type { ContentBlock, ImageBlock } from '@typings/PostContentBuilder.types'

interface PostTemplateProps {
  data: {
    allWpPost: {
      nodes: {
        title: string
        date: string
        author: {
          node: {
            name: string
          }
        }
        featuredImage: {
          node: {
            sourceUrl: string
          }
        }
        articleContent: {
          subtitle: string
          postContentBuilder: ContentBlock[] | ImageBlock[]
        }
      }[]
    }
    posts: {
      edges: {
        node: PostProps
      }[]
    }
  }
}

const PostTemplate: FC<PostTemplateProps> = ({ data }: PostTemplateProps): ReactElement => {
  const article = data.allWpPost.nodes[0]
  return (
    <>
      <FullPageFeature
        title={article.title}
        subtitle={`${article.date} | ${article.author.node.name}`}
        background={article.featuredImage.node.sourceUrl}
      />
      <Section appearance='secondary'>
        <WideColumnBlock
          leftColumn={<Heading size={2} text={article.articleContent.subtitle} />}
          rightColumn={<ArticleContent content={article.articleContent.postContentBuilder} />}
        />
      </Section>
      <Section appearance='tertiary'>
        <Title title='Related Articles' link={{ to: '/news', text: 'View all News' }} />
        <SimpleGrid columns={3} spacing={2} rowSpacing={6}>
          {data.posts.edges.map((post) => {
            return <PostExcerpt {...post.node} />
          })}
        </SimpleGrid>
      </Section>
    </>
  )
}

export default PostTemplate

export const caseStudyQuery = graphql`
  query ($id: String!) {
    allWpPost(filter: { id: { eq: $id } }) {
      nodes {
        title
        date(formatString: "DD/MM/YYYY")
        author {
          node {
            name
          }
        }
        featuredImage {
          node {
            sourceUrl
          }
        }
        articleContent {
          subtitle
          postContentBuilder {
            ... on WpPost_Articlecontent_PostContentBuilder_ContentBlock {
              content
              fieldGroupName
            }
            ... on WpPost_Articlecontent_PostContentBuilder_ImageBlock {
              fieldGroupName
              image {
                localFile {
                  childImageSharp {
                    gatsbyImageData(width: 850)
                  }
                }
              }
            }
          }
        }
      }
    }
    posts: allWpPost(limit: 3, filter: { id: { ne: $id } }) {
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
